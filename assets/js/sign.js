// The sign's 14 panels fly from the hero into the header as the hero scrolls away.
// Progressive enhancement: without this script the hero image and a text name stay in place.
(function () {
  var hero = document.querySelector('.hero__sign img');
  var target = document.querySelector('.site-nav__mark');
  var header = document.querySelector('.site-nav');
  if (!hero || !target || !header) return;

  // Cut lines measured on the hand-drawn grid of the 2283 x 679 scan, so each panel follows the drawing.
  var XS = [0, 351, 657, 973, 1290, 1602, 1907, 2283].map(function (v) { return v / 2283; });
  var YS = [0, 329, 679].map(function (v) { return v / 679; });
  var COLS = XS.length - 1, ROWS = YS.length - 1;
  var SRC = 'assets/img/sign-1800.webp';
  var FLIGHT = 300; // scroll distance over which one panel travels
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var layer = document.createElement('div');
  layer.className = 'sign-tiles';
  layer.setAttribute('aria-hidden', 'true');
  var tiles = [];
  for (var r = 0; r < ROWS; r++) {
    for (var c = 0; c < COLS; c++) {
      var el = document.createElement('span');
      el.className = 'sign-tile';
      el.style.backgroundImage = 'url(' + SRC + ')';
      layer.appendChild(el);
      tiles.push({ el: el, c: c, r: r });
    }
  }
  document.body.appendChild(layer);
  document.documentElement.classList.add('sign-flight');

  var heroW, heroH, heroLeft, heroTopDoc, scale, endX, endY, lastStart;

  function measure() {
    var hb = hero.getBoundingClientRect();
    var tb = target.getBoundingClientRect();
    var headerBottom = header.getBoundingClientRect().bottom;
    heroW = hb.width;
    heroH = hb.height;
    heroLeft = hb.left;
    heroTopDoc = hb.top + window.scrollY;
    scale = tb.width / heroW;
    endX = tb.left;
    endY = tb.top + (tb.height - heroH * scale) / 2;
    lastStart = 0;
    tiles.forEach(function (t) {
      t.x = XS[t.c] * heroW;
      t.y = YS[t.r] * heroH;
      t.w = (XS[t.c + 1] - XS[t.c]) * heroW;
      t.h = (YS[t.r + 1] - YS[t.r]) * heroH;
      t.el.style.width = t.w + 'px';
      t.el.style.height = t.h + 'px';
      t.el.style.backgroundSize = heroW + 'px ' + heroH + 'px';
      t.el.style.backgroundPosition = (-t.x) + 'px ' + (-t.y) + 'px';
      // each panel lifts off shortly before its top edge would reach the header; left columns go first
      var lead = 10 + (COLS - 1 - t.c) * 7;
      t.start = Math.max(0, heroTopDoc + t.y - headerBottom - lead);
      lastStart = Math.max(lastStart, t.start);
    });
    render();
  }

  function ease(x) { return 1 - Math.pow(1 - x, 3); }
  function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }

  function render() {
    ticking = false;
    var sy = window.scrollY;
    var docked = sy >= lastStart + FLIGHT;
    var root = document.documentElement;
    root.classList.toggle('sign-docked', docked);
    root.classList.toggle('sign-reduce', reduce.matches);

    if (reduce.matches) {
      layer.style.opacity = docked ? '' : '0';
      tiles.forEach(function (t) {
        t.el.style.transform = 'translate(' + (endX + t.x * scale) + 'px,' + (endY + t.y * scale) + 'px) scale(' + scale + ')';
      });
      return;
    }
    layer.style.opacity = '';

    var heroTop = heroTopDoc - sy;
    tiles.forEach(function (t, i) {
      var k = ease(clamp((sy - t.start) / FLIGHT));
      var sx = heroLeft + t.x, sY = heroTop + t.y;
      var ex = endX + t.x * scale, ey = endY + t.y * scale;
      var x = sx + (ex - sx) * k, y = sY + (ey - sY) * k;
      var s = 1 + (scale - 1) * k;
      // the first R of JARVERS does a full turn on its way up; the rest wobble a little
      var tilt = (t.r === 1 && t.c === 2) ? 360 * k : Math.sin(Math.PI * k) * ((i % 3) - 1) * 7;
      var cx = t.w * s / 2, cy = t.h * s / 2;
      t.el.style.transform = 'translate(' + (x + cx) + 'px,' + (y + cy) + 'px) rotate(' + tilt + 'deg) translate(' + (-cx) + 'px,' + (-cy) + 'px) scale(' + s + ')';
    });
  }

  var ticking = false;
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(render); }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', measure);
  reduce.addEventListener('change', render);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  if (hero.complete) measure(); else hero.addEventListener('load', measure);
})();
