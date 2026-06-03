/* =========================================================
   main.js — Shared across all pages.
   1. Adds `is-scrolled` to the nav once past the hero (index).
   2. Smooth-scrolls the hero CTA to its target section.
   No libraries, no frameworks — minimal and purposeful.
   ========================================================= */
(function () {
  'use strict';

  var nav = document.querySelector('.nav');
  var hero = document.querySelector('.hero');

  /* 1. Nav scroll state — only meaningful on pages with a hero.
        Inner pages ship with `is-scrolled` already set in markup. */
  if (nav && hero) {
    var update = function () {
      var threshold = hero.offsetTop + hero.offsetHeight - nav.offsetHeight;
      nav.classList.toggle('is-scrolled', window.scrollY > threshold);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  /* 2. Smooth scroll for the hero CTA. */
  var cta = document.querySelector('[data-scroll]');
  if (cta) {
    cta.addEventListener('click', function (event) {
      var target = document.querySelector(cta.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }
})();
