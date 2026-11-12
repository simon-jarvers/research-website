// The sign's 14 panels fly from the hero into the header as the hero scrolls away.
// Progressive enhancement: without this script the hero image and a text name stay in place.
(function () {
  var hero = document.querySelector('.hero__sign img');
  var target = document.querySelector('.site-nav__mark');
  if (!hero || !target) return;

  var COLS = 7, ROWS = 2;
  var SRC = 'assets/img/sign-1800.webp';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var layer = document.createElement('div');
  layer.className = 'sign-tiles';
  layer.setAttribute('aria-hidden', 'true');
  var tiles = [];
  for (var r = 0; r < ROWS; r++) {
    for (var c = 0; c < COLS; c++) {
      var t = document.createElement('span');
      t.className = 'sign-tile';
      t.style.backgroundImage = 'url(' + SRC + ')';
      t.dataset.c = c;
      t.dataset.r = r;
      layer.appendChild(t);
      tiles.push(t);
    }
  }
  document.body.appendChild(layer);
  document.documentElement.classList.add('sign-flight');

  var heroW, heroH, tileW, tileH, scale, endX, endY, range, startScroll;

  function measure() {
    var hb = hero.getBoundingClientRect();
    var tb = target.getBoundingClientRect();
    heroW = hb.width;
    heroH = hb.height;
    tileW = heroW / COLS;
    tileH = heroH / ROWS;
    scale = tb.width / heroW;
    endX = tb.left;
    endY = tb.top + (tb.height - heroH * scale) / 2;
    var heroTopDoc = hb.top + window.scrollY;
    startScroll = Math.max(0, heroTopDoc - tb.bottom - 24);
    range = Math.max(1, heroTopDoc + heroH - startScroll - tb.top);
    tiles.forEach(function (t) {
      var c = +t.dataset.c, r = +t.dataset.r;
      t.style.width = tileW + 'px';
      t.style.height = tileH + 'px';
      t.style.backgroundSize = heroW + 'px ' + heroH + 'px';
      t.style.backgroundPosition = (-c * tileW) + 'px ' + (-r * tileH) + 'px';
    });
    render();
  }

  function ease(x) { return 1 - Math.pow(1 - x, 3); }
  function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }

  function render() {
    ticking = false;
    var p = clamp((window.scrollY - startScroll) / range);
    var hb = hero.getBoundingClientRect();
    document.documentElement.classList.toggle('sign-docked', p >= 1);

    document.documentElement.classList.toggle('sign-reduce', reduce.matches);
    if (reduce.matches) {
      layer.classList.toggle('is-docked', p >= 1);
      layer.style.opacity = p >= 1 ? '' : '0';
      tiles.forEach(function (t) {
        var c = +t.dataset.c, r = +t.dataset.r;
        t.style.transform = 'translate(' + (endX + c * tileW * scale) + 'px,' + (endY + r * tileH * scale) + 'px) scale(' + scale + ')';
      });
      return;
    }
    layer.style.opacity = '';

    var n = tiles.length, stagger = 0.035, span = 1 - stagger * (n - 1);
    tiles.forEach(function (t, i) {
      var c = +t.dataset.c, r = +t.dataset.r;
      // panels leave column by column, the top row first
      var order = c * ROWS + r;
      var k = ease(clamp((p - order * stagger) / span));
      var sx = hb.left + c * tileW, sy = hb.top + r * tileH;
      var ex = endX + c * tileW * scale, ey = endY + r * tileH * scale;
      var x = sx + (ex - sx) * k, y = sy + (ey - sy) * k;
      var s = 1 + (scale - 1) * k;
      var tilt = Math.sin(Math.PI * k) * ((order % 3) - 1) * 7;
      t.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(' + tilt + 'deg) scale(' + s + ')';
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
