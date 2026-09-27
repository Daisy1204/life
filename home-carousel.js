(() => {
  const carousel = document.querySelector('[data-home-carousel]');
  if (!carousel) return;
  const track = carousel.querySelector('.carousel-track');
  const dots = [...carousel.querySelectorAll('[data-carousel-slide]')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let active = 0;
  let timer;
  const show = index => {
    active = (index + dots.length) % dots.length;
    track.style.transform = `translateX(-${active * 50}%)`;
    dots.forEach((dot, dotIndex) => {
      const selected = dotIndex === active;
      dot.classList.toggle('is-active', selected);
      dot.setAttribute('aria-current', selected ? 'true' : 'false');
    });
  };
  const start = () => {
    if (!reducedMotion) timer = window.setInterval(() => show(active + 1), 6000);
  };
  const stop = () => window.clearInterval(timer);
  dots.forEach((dot, index) => dot.addEventListener('click', () => { stop(); show(index); start(); }));
  show(0);
  start();
})();
