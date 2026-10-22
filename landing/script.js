/* Keyframe Studio — landing interactions
   Vanilla JS only. All motion respects prefers-reduced-motion. */

(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- mobile nav ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    navMenu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  /* ---------- scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* ---------- phone tilt ---------- */
  const phone = document.getElementById('phoneTilt');
  if (phone && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    const wrap = phone.parentElement;
    wrap.addEventListener('mousemove', (e) => {
      const r = wrap.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      phone.style.transform = `rotateY(${-8 + dx * 10}deg) rotateX(${2 - dy * 8}deg)`;
    });
    wrap.addEventListener('mouseleave', () => {
      phone.style.transform = 'rotateY(-8deg) rotateX(2deg)';
    });
  }

  /* ---------- hero canvas: bouncing ball + onion skins ---------- */
  const canvas = document.getElementById('heroCanvas');
  const timelineEl = document.getElementById('stageTimeline');
  const CELLS = 12;
  const FRAMES = 48; // frames per bounce loop
  const FPS = 24;

  // build the fake timeline cells
  const cells = [];
  if (timelineEl) {
    for (let i = 0; i < CELLS; i++) {
      const c = document.createElement('i');
      timelineEl.appendChild(c);
      cells.push(c);
    }
  }

  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const RED = '#ff4d5e';
  const CYAN = '#38c8ff';
  const WHITE = '#e8f0ff';

  function sizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return rect;
  }
  let rect = sizeCanvas();
  window.addEventListener('resize', () => { rect = sizeCanvas(); });

  // position of the ball at a normalized loop time t in [0,1)
  function ballAt(t) {
    const w = rect.width;
    const h = rect.height;
    const r = Math.max(14, w * 0.045);
    const floorY = h - r - h * 0.12;
    const topY = h * 0.16 + r;
    // horizontal drift across the stage, looping
    const x = w * 0.1 + t * w * 0.8;
    // bounce: parabolic up, gravity down — use |cos| shape with squash
    const phase = (t * 2) % 1; // two bounces per loop
    const y = floorY - (floorY - topY) * Math.abs(Math.cos(phase * Math.PI));
    // squash on impact (when near floor)
    const impact = Math.max(0, 1 - (floorY - y) / (r * 1.6));
    const sx = 1 + 0.35 * impact;
    const sy = 1 - 0.3 * impact;
    return { x, y, r, sx, sy, floorY };
  }

  function drawBall(p, color, alpha, glow) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.scale(p.sx, p.sy);
    ctx.globalAlpha = alpha;
    ctx.shadowBlur = glow ? 26 : 10;
    ctx.shadowColor = color;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(0, 0, p.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawFrame(tNorm) {
    const w = rect.width;
    const h = rect.height;
    ctx.clearRect(0, 0, w, h);

    // faint backdrop grid
    ctx.strokeStyle = 'rgba(148,163,184,0.07)';
    ctx.lineWidth = 1;
    for (let gx = w * 0.1; gx < w; gx += w * 0.1) {
      ctx.beginPath();
      ctx.moveTo(gx, 0);
      ctx.lineTo(gx, h);
      ctx.stroke();
    }

    const cur = ballAt(tNorm);

    // floor line
    ctx.strokeStyle = 'rgba(148,163,184,0.22)';
    ctx.beginPath();
    ctx.moveTo(w * 0.06, cur.floorY + cur.r + 8);
    ctx.lineTo(w * 0.94, cur.floorY + cur.r + 8);
    ctx.stroke();

    const dt = 1 / FRAMES;
    // past frames (cyan, trailing behind in time)
    for (let k = 4; k >= 1; k--) {
      const p = ballAt((tNorm - k * dt + 1) % 1);
      drawBall(p, CYAN, 0.08 + (4 - k) * 0.05, false);
    }
    // next frame (red ghost ahead)
    {
      const p = ballAt((tNorm + dt) % 1);
      drawBall(p, RED, 0.32, false);
    }
    // current frame (white)
    drawBall(cur, WHITE, 1, true);

    // frame counter, top-left
    const f = Math.floor(tNorm * FRAMES) + 1;
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'rgba(92,107,130,0.9)';
    ctx.font = `500 11px "JetBrains Mono", monospace`;
    ctx.fillText(`f.${String(f).padStart(2, '0')}  ·  ${FPS} fps`, 14, 22);
  }

  if (reduceMotion) {
    // static single frame
    drawFrame(0.35);
    cells.forEach((c, i) => c.classList.toggle('on', i === 3));
    return;
  }

  let start = performance.now();
  let visible = true;

  // pause rAF work when hero is offscreen
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible) start = performance.now() - lastElapsed;
    }, { threshold: 0 }).observe(canvas);
  }

  let lastElapsed = 0;
  function tick(now) {
    if (visible) {
      lastElapsed = now - start;
      const t = (lastElapsed / 1000 * FPS) / FRAMES; // loops every FRAMES/FPS = 2s
      const tNorm = t % 1;
      drawFrame(tNorm);

      // timeline playhead
      const active = Math.floor(tNorm * CELLS);
      for (let i = 0; i < CELLS; i++) {
        cells[i].classList.toggle('on', i === active);
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
