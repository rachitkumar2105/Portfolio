(() => {
  const top = document.getElementById('top');
  const onScroll = () => top.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const btn = document.querySelector('.menu-btn'), sheet = document.getElementById('sheet');
  const setMenu = open => { btn.setAttribute('aria-expanded', String(open)); sheet.classList.toggle('open', open); sheet.setAttribute('aria-hidden', String(!open)); btn.textContent = open ? 'Close' : 'Menu'; };
  btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  sheet.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { setMenu(false); btn.focus(); } });

  const els = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(el => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach((el, i) => { el.style.transitionDelay = (Math.min(i % 4, 3) * 60) + 'ms'; io.observe(el); });
  }

  const copy = document.querySelector('.copy');
  copy.addEventListener('click', async () => {
    const label = copy.querySelector('span');
    try { await navigator.clipboard.writeText(copy.dataset.email); label.textContent = 'Copied'; }
    catch { label.textContent = copy.dataset.email; }
    setTimeout(() => { label.textContent = 'Copy email'; }, 2400);
  });

  const form = document.getElementById('contact-form'), status = document.getElementById('form-status');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form.checkValidity()) { status.textContent = 'Please fill in every field with a valid email.'; form.reportValidity(); return; }
    status.textContent = 'Sending…';
    try {
      const r = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (r.ok) { form.reset(); status.textContent = 'Thanks, your message was sent.'; }
      else { status.textContent = 'That did not go through. Email rachitkumar2105@gmail.com instead.'; }
    } catch { status.textContent = 'That did not go through. Email rachitkumar2105@gmail.com instead.'; }
  });
})();

(() => {
  const clock = document.getElementById('clock');
  if (clock) {
    const fmt = new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' });
    const tick = () => {
      clock.textContent = fmt.format(new Date()).toLowerCase() + ' IST';
      setTimeout(tick, 1000 - (Date.now() % 1000) + 5);
    };
    tick();
  }

})();

(() => {
  const cards = document.querySelectorAll('.card');
  if (!('IntersectionObserver' in window)) { cards.forEach(c => c.classList.add('live')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('live', e.isIntersecting)), { threshold: 0.15 });
  cards.forEach(c => io.observe(c));
})();

/* Rails: endless row moving right to left, draggable either way */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const rails = [];
  let _k = 1, _kAt = 0;
  const rootK = () => { const n = performance.now(); if (n - _kAt > 1000) { _k = (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16) / 16; _kAt = n; } return _k; };

  function makeRail(rail) {
    const track = rail.querySelector('.track');
    const originals = [...track.children];
    const st = { pos: 0, v: 0, period: 0, drag: false, touch: false, kbd: false, visible: true, resumeAt: 0 };

    function rebuild() {
      track.querySelectorAll('[data-clone]').forEach(c => c.remove());
      const shown = originals.filter(o => !o.classList.contains('hide'));
      if (!shown.length) { st.period = 0; return; }
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const setWidth = shown.reduce((w, o) => w + o.getBoundingClientRect().width + gap, 0);
      const copies = Math.max(3, Math.ceil(rail.clientWidth / Math.max(setWidth, 1)) + 3);
      for (let c = 1; c < copies; c++) {
        shown.forEach(o => {
          const k = o.cloneNode(true);
          k.dataset.clone = '';
          k.setAttribute('aria-hidden', 'true');
          k.querySelectorAll('a,button,summary,input,[tabindex]').forEach(f => f.setAttribute('tabindex', '-1'));
          track.appendChild(k);
        });
      }
      st.period = setWidth;
      rail.scrollLeft = st.period; st.pos = rail.scrollLeft;
    }

    function normalise() {
      if (!st.period) return;
      if (rail.scrollLeft < st.period * 0.5) rail.scrollLeft += st.period;
      else if (rail.scrollLeft > st.period * 2) rail.scrollLeft -= st.period;
    }

    const hold = ms => { st.resumeAt = Math.max(st.resumeAt, performance.now() + ms); };

    rail.addEventListener('scroll', normalise, { passive: true });
    rail.addEventListener('wheel', () => hold(700), { passive: true });
    rail.addEventListener('touchstart', () => { st.touch = true; }, { passive: true });
    const touchEnd = () => { st.touch = false; hold(900); };
    rail.addEventListener('touchend', touchEnd, { passive: true });
    rail.addEventListener('touchcancel', touchEnd, { passive: true });
    rail.addEventListener('focusin', e => { st.kbd = e.target.matches(':focus-visible'); });
    rail.addEventListener('focusout', () => { st.kbd = false; });

    let startX = 0, startLeft = 0, moved = 0;
    rail.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      st.drag = true; moved = 0; startX = e.clientX; startLeft = rail.scrollLeft;
      rail.setPointerCapture(e.pointerId);
    });
    rail.addEventListener('pointermove', e => {
      if (!st.drag) return;
      const dx = e.clientX - startX; moved = Math.max(moved, Math.abs(dx));
      if (moved > 4) rail.classList.add('dragging');
      rail.scrollLeft = startLeft - dx;
      const before = rail.scrollLeft; normalise(); startLeft += rail.scrollLeft - before;
      st.pos = rail.scrollLeft; st.v = 0;
    });
    const end = e => {
      if (!st.drag) return;
      st.drag = false; rail.classList.remove('dragging');
      try { rail.releasePointerCapture(e.pointerId); } catch {}
      if (moved > 4) rail.blur();
    };
    rail.addEventListener('pointerup', end); rail.addEventListener('pointercancel', end);
    rail.addEventListener('click', e => { if (moved > 4) { e.preventDefault(); e.stopPropagation(); moved = 0; } }, true);

    rail.addEventListener('keydown', e => {
      if (e.target !== rail) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault(); hold(1500);
        rail.scrollBy({ left: (e.key === 'ArrowRight' ? 240 : -240) * rootK(), behavior: reduce ? 'auto' : 'smooth' });
      }
    });

    if ('IntersectionObserver' in window) new IntersectionObserver(es => es.forEach(x => { st.visible = x.isIntersecting; }), { rootMargin: '100px 0px' }).observe(rail);

    rebuild();
    const r = { rail, st, rebuild, originals };
    rails.push(r);
    return r;
  }

  document.querySelectorAll('.rail').forEach(makeRail);

  let last = performance.now();
  function frame(now) {
    const dt = Math.min(50, now - last); last = now;
    if (!reduce && !document.hidden) {
      for (const { rail, st } of rails) {
        if (!st.period || !st.visible) continue;
        const hovered = canHover && rail.matches(':hover');
        const paused = hovered || st.drag || st.touch || st.kbd || now < st.resumeAt;
        const target = paused ? 0 : Number(rail.dataset.speed || 32) * rootK();
        st.v += (target - st.v) * Math.min(1, dt / 180);
        if (st.v < 0.5 && paused) { st.v = 0; st.pos = rail.scrollLeft; continue; }
        if (Math.abs(rail.scrollLeft - st.pos) > 2) st.pos = rail.scrollLeft;
        st.pos += (st.v * dt) / 1000;
        if (st.pos > st.period * 2) st.pos -= st.period;
        rail.scrollLeft = st.pos;
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => rails.forEach(r => r.rebuild()), 200); });

  /* Project filter works on the rail */
  const projects = rails.find(r => r.rail.id === 'project-rail');
  const buttons = document.querySelectorAll('[data-filter]');
  buttons.forEach(b => b.addEventListener('click', () => {
    const f = b.dataset.filter;
    buttons.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    if (!projects) return;
    projects.originals.forEach(t => t.classList.toggle('hide', !(f === 'all' || t.dataset.cat === f)));
    projects.rebuild();
  }));
})();

/* 3D tilt that follows the cursor */
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  let cur = null, raf = 0, ev = null;
  const reset = el => {
    if (!el) return;
    el.classList.remove('tilting');
    ['--rx', '--ry'].forEach(p => el.style.removeProperty(p));
  };
  const apply = () => {
    raf = 0;
    if (!cur || !ev) return;
    if (cur.closest('.rail.dragging')) { reset(cur); return; }
    const r = cur.getBoundingClientRect();
    const px = Math.min(Math.max((ev.clientX - r.left) / r.width, 0), 1);
    const py = Math.min(Math.max((ev.clientY - r.top) / r.height, 0), 1);
    const max = Number(cur.dataset.tilt || 10);
    cur.classList.add('tilting');
    cur.style.setProperty('--ry', ((px - 0.5) * 2 * max).toFixed(2) + 'deg');
    cur.style.setProperty('--rx', (-(py - 0.5) * 2 * max).toFixed(2) + 'deg');
    cur.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
    cur.style.setProperty('--my', (py * 100).toFixed(1) + '%');
  };
  document.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    const t = e.target.closest ? e.target.closest('.tilt') : null;
    if (t !== cur) { reset(cur); cur = t; }
    ev = e;
    if (cur && !raf) raf = requestAnimationFrame(apply);
  }, { passive: true });
  document.addEventListener('pointerleave', () => { reset(cur); cur = null; });
  window.addEventListener('blur', () => { reset(cur); cur = null; });
})();
