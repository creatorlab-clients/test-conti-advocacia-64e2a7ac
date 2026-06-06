/* ═══════════════════════════════════════════════════════════════
   template-legale-001 — Conti Advocacia — script.js
   law-editorial scroll · single-page · pt-BR
   ═══════════════════════════════════════════════════════════════ */

// ── Scroll animation — frame config ──────────────────────────
var FRAME_PATH   = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/legale-001/frames/';
var FRAME_PREFIX = 'frame_';
var FRAME_PAD    = 4;
var FRAME_EXT    = '.webp';
var FRAME_COUNT  = 151;  // law-editorial — HARD

// ── Image fallback ────────────────────────────────────────────
window.__imgFallback = function (img, label) {
  var w = img.naturalWidth  || 800;
  var h = img.naturalHeight || 600;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h
    + '" viewBox="0 0 ' + w + ' ' + h + '">'
    + '<defs><linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">'
    + '<stop offset="0%" stop-color="#1E3A5F" stop-opacity="0.12"/>'
    + '<stop offset="100%" stop-color="#B5895E" stop-opacity="0.08"/>'
    + '</linearGradient></defs>'
    + '<rect width="100%" height="100%" fill="url(#fg)"/>'
    + '<rect width="100%" height="100%" fill="#F7F5F0"/>'
    + '<rect width="100%" height="100%" fill="url(#fg)"/>'
    + '<text x="50%" y="50%" font-family="\'Fraunces\',Georgia,serif" font-size="18"'
    + ' font-style="italic" fill="#6B665C" text-anchor="middle" dominant-baseline="middle">'
    + (label || 'imagem em breve')
    + '</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  img.onerror = null;
};

// ── Phosphor Regular icons — SVG inline ──────────────────────
var PHOSPHOR_ICONS = {

  // Scales — Divórcio e Família
  'scales': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" aria-hidden="true"><line x1="128" y1="40" x2="128" y2="216"/><line x1="104" y1="216" x2="152" y2="216"/><line x1="56" y1="88" x2="200" y2="56"/><path d="M32,168a24,24,0,0,0,48,0L56,104Z"/><path d="M176,136a24,24,0,0,0,48,0L200,72Z"/></svg>',

  // Buildings — Direito Condominial
  'buildings': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" aria-hidden="true"><rect x="16" y="96" width="96" height="128" rx="2"/><rect x="112" y="48" width="128" height="176" rx="2"/><line x1="16" y1="224" x2="240" y2="224"/><line x1="144" y1="80" x2="144" y2="80"/><line x1="176" y1="80" x2="176" y2="80"/><line x1="208" y1="80" x2="208" y2="80"/><line x1="144" y1="112" x2="144" y2="112"/><line x1="176" y1="112" x2="176" y2="112"/><line x1="208" y1="112" x2="208" y2="112"/><line x1="144" y1="144" x2="144" y2="144"/><line x1="176" y1="144" x2="176" y2="144"/><line x1="208" y1="144" x2="208" y2="144"/><line x1="48" y1="128" x2="48" y2="128"/><line x1="80" y1="128" x2="80" y2="128"/><line x1="48" y1="160" x2="48" y2="160"/><line x1="80" y1="160" x2="80" y2="160"/><path d="M112,224V192a16,16,0,0,1,32,0v32"/></svg>',

  // Gavel — Direito Civil
  'gavel': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" aria-hidden="true"><line x1="96" y1="216" x2="216" y2="216"/><line x1="48" y1="168" x2="152" y2="64"/><rect x="120" y="24" width="72" height="48" rx="4" transform="rotate(45 156 48)"/><rect x="20" y="144" width="72" height="48" rx="4" transform="rotate(45 56 168)"/></svg>',

  // Scroll — Sucessões e Heranças
  'scroll': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" aria-hidden="true"><path d="M64,224a32,32,0,0,1,0-64h96V56a32,32,0,0,0-64,0"/><path d="M96,176H192a32,32,0,0,0,0-64H96"/><line x1="116" y1="104" x2="168" y2="104"/><line x1="116" y1="136" x2="168" y2="136"/></svg>',

  // Ear — Atenção pessoal
  'ear': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" aria-hidden="true"><path d="M200,112a72,72,0,1,0-144,0c0,40,26,52,36,84a20,20,0,0,0,40,0"/><path d="M128,80a32,32,0,0,1,32,32c0,24-24,32-24,56"/></svg>',

  // Handshake — Primeira consulta
  'handshake': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" aria-hidden="true"><path d="M88,152l-52-52a8,8,0,0,1,0-11.3l26.3-26.3a8,8,0,0,1,11.3,0L128,128"/><path d="M168,104l52,52a8,8,0,0,1,0,11.3L193.7,193.7a8,8,0,0,1-11.3,0L128,128"/><path d="M128,128l-40-40,40-40,40,40Z"/><line x1="88" y1="152" x2="168" y2="104"/></svg>',

  // Receipt — Honorários transparentes
  'receipt': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" aria-hidden="true"><path d="M200,224l-24-24-24,24-24-24-24,24-24-24L56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z"/><line x1="96" y1="104" x2="160" y2="104"/><line x1="96" y1="136" x2="160" y2="136"/><line x1="96" y1="168" x2="128" y2="168"/></svg>',

  // Map Pin — Endereço
  'MapPin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><path d="M128,16a80,80,0,1,0,80,80A80.09,80.09,0,0,0,128,16Z"/><circle cx="128" cy="96" r="32"/><path d="M128,176c0,0-40,43-40,80"/><path d="M128,176c0,0,40,43,40,80"/></svg>',

  // Clock — Horários
  'Clock': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><circle cx="128" cy="128" r="96"/><polyline points="128,72 128,128 168,168"/></svg>',

  // Phone — Telefone
  'Phone': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><path d="M159.38,185.79a96,96,0,0,1-89.17-89.17,8,8,0,0,1,2.19-6.4L87.6,75a8,8,0,0,1,11,.56l24,28a8,8,0,0,1-.44,11.13l-16.31,15.69a80.33,80.33,0,0,0,39.75,39.75l15.69-16.31a8,8,0,0,1,11.13-.44l28,24a8,8,0,0,1,.56,11L185.79,177.19A8,8,0,0,1,159.38,185.79Z"/></svg>',

  // WhatsApp Logo
  'WhatsappLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="20" height="20" aria-hidden="true"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,81.06l11.48,22.94L101,118.37a8,8,0,0,0-.73,7.65,56.53,56.53,0,0,0,30.15,30.15,8,8,0,0,0,7.65-.73l14.37-9.08,22.94,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a88,88,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216l12.47-37.4a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Z"/></svg>'
};

(function () {
  'use strict';

  // ── Inject Phosphor icons ──────────────────────────────────
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    var name = el.getAttribute('data-icon');
    var svg  = PHOSPHOR_ICONS[name];
    if (svg) el.innerHTML = svg;
  });

  // ── Footer year ────────────────────────────────────────────
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Navbar scroll class ────────────────────────────────────
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Mobile nav toggle ──────────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      document.body.classList.toggle('nav-mobile-open', !expanded);
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-mobile-open');
      });
    });
  }

  // ── IntersectionObserver — Fade Up & Stagger ───────────────
  if ('IntersectionObserver' in window) {
    var animObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      animObserver.observe(el);
    });
  } else {
    // Fallback: show all without animation
    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ── Counter animation (Números section) ────────────────────
  var counterDone = false;

  function animateCounters() {
    if (counterDone) return;
    var counters = document.querySelectorAll('.counter[data-target]');
    if (!counters.length) return;
    counterDone = true;

    counters.forEach(function (el) {
      var raw    = el.getAttribute('data-target') || '0';
      var prefix = raw.replace(/[\d]+/, '');  // e.g. "+" in "+800"
      var digits = parseInt(raw.replace(/\D/g, ''), 10) || 0;
      var start  = 0;
      var duration = 1500;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        var current = Math.round(ease * digits);
        el.textContent = prefix + current;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = raw; // restore exact original value
      }
      requestAnimationFrame(step);
    });
  }

  if ('IntersectionObserver' in window) {
    var numerosSection = document.getElementById('numeros');
    if (numerosSection) {
      var cntObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          animateCounters();
          cntObserver.disconnect();
        }
      }, { threshold: 0.3 });
      cntObserver.observe(numerosSection);
    }
  } else {
    animateCounters();
  }

  // ── Hero above-fold animations ─────────────────────────────
  // Hero elements are above the fold: trigger immediately
  setTimeout(function () {
    document.querySelectorAll('.hero .fade-up').forEach(function (el) {
      el.classList.add('visible');
    });
  }, 100);

  // ── Scroll animation — canvas (cover mode §4.2) ────────────
  var section = document.getElementById('scroll-anim');
  var canvas  = document.getElementById('scroll-canvas');
  if (!section || !canvas) return;

  var ctx         = canvas.getContext('2d');
  var images      = [];
  var loaded      = 0;
  var currentFrame = 0;
  var pinEl       = section.querySelector('.scroll-anim-pin');
  var DPR         = Math.min(window.devicePixelRatio || 1, 2);

  function setupCanvas() {
    var w = pinEl.clientWidth;
    var h = pinEl.clientHeight;
    canvas.width  = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width  = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function renderFrame(img) {
    var cw = pinEl.clientWidth;
    var ch = pinEl.clientHeight;
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    if (!iw || !ih) return;
    // Cover mode: scale up so image fills container completely, no black bars
    var scale = Math.max(cw / iw, ch / ih);
    var sw = iw * scale;
    var sh = ih * scale;
    var sx = (cw - sw) / 2;
    var sy = (ch - sh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }

  function drawFrame(index) {
    var img = images[index];
    if (img && img.complete && img.naturalWidth) {
      renderFrame(img);
      currentFrame = index;
    }
  }

  function onScroll() {
    var rect     = section.getBoundingClientRect();
    var total    = section.offsetHeight - window.innerHeight;
    var scrolled = Math.max(0, -rect.top);
    var progress = Math.min(1, total > 0 ? scrolled / total : 0);
    var frameIdx = Math.round(progress * (FRAME_COUNT - 1));
    if (frameIdx !== currentFrame) drawFrame(frameIdx);
  }

  // Preload all frames
  for (var i = 0; i < FRAME_COUNT; i++) {
    (function (idx) {
      var img  = new Image();
      img.onload = function () {
        loaded++;
        if (idx === 0) {
          setupCanvas();
          renderFrame(img);
          currentFrame = 0;
        }
      };
      var num = String(idx + 1);
      while (num.length < FRAME_PAD) num = '0' + num;
      img.src = FRAME_PATH + FRAME_PREFIX + num + FRAME_EXT;
      images[idx] = img;
    })(i);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () {
    setupCanvas();
    drawFrame(currentFrame);
  }, { passive: true });
  setupCanvas();

})();
