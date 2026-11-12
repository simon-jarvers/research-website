// Click a photo to inspect it large. Without this script the link opens the full image.
(function () {
  var dialog = document.querySelector('.viewer');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  var img = dialog.querySelector('.viewer__img');
  var opener = null;

  document.querySelectorAll('.photo').forEach(function (link) {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      var thumb = link.querySelector('img');
      opener = link;
      img.src = link.dataset.full;
      img.alt = thumb.alt;
      dialog.showModal();
    });
  });

  // a click on the backdrop (outside the image and bar) closes the viewer
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', function () {
    if (opener) opener.focus();
  });
})();
