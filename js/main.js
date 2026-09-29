document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  if (burger) {
    burger.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
      var exp = burger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
      burger.setAttribute('aria-expanded', exp);
    });
  }

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('on');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.rv').forEach(function (el) { obs.observe(el); });
    setTimeout(function () {
      document.querySelectorAll('.rv:not(.on)').forEach(function (r) { r.classList.add('on'); });
    }, 2600);
  } else {
    document.querySelectorAll('.rv').forEach(function (r) { r.classList.add('on'); });
  }
});