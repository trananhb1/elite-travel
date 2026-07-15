document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var tabs = document.querySelectorAll('.tab-btn');
  var groups = document.querySelectorAll('[data-tour-group]');
  if (tabs.length && groups.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        var target = tab.getAttribute('data-target');
        groups.forEach(function (g) {
          g.style.display = (target === 'all' || g.getAttribute('data-tour-group') === target) ? '' : 'none';
        });
      });
    });
  }

  document.querySelectorAll('.footer-year').forEach(function (el) {
    el.textContent = '2026';
  });
});
