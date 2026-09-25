// Section menu disclosure. Without JavaScript the menu is simply shown.
(function () {
  document.documentElement.classList.add('js');
  var toggles = document.querySelectorAll('[data-subnav-toggle]');
  Array.prototype.forEach.call(toggles, function (btn) {
    var list = document.getElementById(btn.getAttribute('aria-controls'));
    if (!list) return;
    list.hidden = true;
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      btn.querySelector('[data-label]').textContent = open ? btn.getAttribute('data-closed') : 'Close';
      list.hidden = open;
      if (!open) { var first = list.querySelector('a'); if (first) first.focus(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        btn.click(); btn.focus();
      }
    });
  });
})();
