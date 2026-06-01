// ============================================================
// Bx-Jeunes Impact — script.js modernisé
// Issues #4, #6, #8, #9 — Phase Design & Optimisation
// ============================================================

'use strict';

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- Bouton "Retour en haut" ---- */
(() => {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  const toggle = () => { btn.style.display = window.scrollY > 300 ? 'block' : 'none'; };
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
  btn.addEventListener('click', () => {
    if ('scrollBehavior' in document.documentElement.style && !prefersReduced) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  });
})();

/* ---- Menu mobile (Issue #9) ---- */
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');
  if (!toggle || !nav) return;

  if (!nav.id) nav.id = 'mainmenu';
  toggle.setAttribute('aria-controls', nav.id);
  toggle.setAttribute('aria-expanded', 'false');

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('show', open);
    toggle.textContent = open ? '✕' : '☰';
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('show')));
  nav.addEventListener('click', (e) => { if (e.target.matches('a')) setOpen(false); });
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  }, { passive: true });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('show')) { setOpen(false); toggle.focus(); }
  });
})();

/* ---- Carrousel Actualités avec dots ---- */
(() => {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('carousel-dots');
  if (!slides.length) return;

  let index = 0;
  let timer = null;
  const dots = [];

  // Créer les dots
  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Actualité ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
      dots.push(dot);
    });
  }

  const goTo = (i) => {
    slides.forEach((s) => s.classList.remove('active'));
    dots.forEach((d) => d.classList.remove('active'));
    index = i;
    slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
  };

  const next = () => goTo((index + 1) % slides.length);

  goTo(0);

  if (!prefersReduced) {
    const start = () => { if (!timer) timer = setInterval(next, 4000); };
    const stop  = () => { clearInterval(timer); timer = null; };
    start();
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', stop);
      carousel.addEventListener('mouseleave', start);
    }
    document.addEventListener('visibilitychange', () => { document.hidden ? stop() : start(); });
  }
})();

/* ---- Filtres Agenda (Issue #8) ---- */
(() => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('#events-grid .event-card');
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        const show = filter === 'all' || card.dataset.type === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
})();

/* ---- Recherche & filtres Activités (Issue #2) ---- */
(() => {
  const searchInput = document.getElementById('search-activites');
  const catSelect   = document.getElementById('filter-categorie');
  const ageSelect   = document.getElementById('filter-age');
  const cards       = document.querySelectorAll('#activites-grid .activite-card');
  if (!searchInput && !catSelect) return;

  const applyFilters = () => {
    const query  = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const cat    = catSelect   ? catSelect.value   : '';
    const age    = ageSelect   ? ageSelect.value   : '';

    cards.forEach((card) => {
      const text    = card.textContent.toLowerCase();
      const cardCat = card.dataset.cat  || '';
      const cardAge = card.dataset.age  || '';

      const matchQuery = !query || text.includes(query);
      const matchCat   = !cat   || cardCat === cat;
      const matchAge   = !age   || cardAge === age;

      card.style.display = (matchQuery && matchCat && matchAge) ? '' : 'none';
    });
  };

  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (catSelect)   catSelect.addEventListener('change', applyFilters);
  if (ageSelect)   ageSelect.addEventListener('change', applyFilters);
})();
