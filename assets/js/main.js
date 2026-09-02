(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const rotating = document.querySelector('[data-rotating]');
  if (rotating) {
    const titles = [
      'Azure Cloud Architect',
      'GenAI & Agentic AI Architect',
      'Enterprise Platform Lead'
    ];
    let index = 0;
    setInterval(() => {
      index = (index + 1) % titles.length;
      rotating.textContent = titles[index];
    }, 2500);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();
