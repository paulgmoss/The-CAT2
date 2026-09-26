/* CAT, facilitated-session scenario wall, embedded in the pathway guide pages (tab 4.2).
   Requires window.RAW_CONTEXTS + window.CONTEXT_META (scenarios-data.js), window.ZONES
   (scenarios-zones.js, for pathway filtering + draft content) and window.CHAPTERS
   (scenarios-chapters.js). Token CSS is loaded by the host page. */
(function () {
  function esc(s) { return String(s == null ? '' : s); }

  const TAG = {
    amber: 'background:#F7E8CF; color:#7A4E10;',
    red: 'background:#FAE2DF; color:#8E2A1E;',
    green: 'background:#DFEDE2; color:#1E5E36;',
    purple: 'background:#EFEBFF; color:#3D2A9E;',
  };
  const LD_BG = '#EFEBFF', LD_AV = 'var(--cat-violet-500)';
  const AC_BG = 'var(--cat-sand-200)', AC_AV = 'var(--cat-navy-950)';

  function shotSrc(sc, which) {
    if (which === 'before') return sc.tableShotBeforeSrc || null;
    if (which === 'after') return sc.tableShotAfterSrc || null;
    const m = window.SHOTS && window.SHOTS[sc.id];
    return (m && m[which]) || null;
  }

  const TAG_PRINCIPLE = { 'demand accumulation': 'accumulation', 'conservation of alignment': 'conservation', 'deliberate zero': 'zero', 'readiness conflict': 'ceiling', 'resequencing': 'resequencing', 'rubric check': 'multimapped' };

  function tags(list) {
    if (!list || !list.length) return '';
    return `<div style="display:flex; flex-wrap:wrap; gap:6px;">${list.map((t) => {
      const pid = TAG_PRINCIPLE[String(t.t).toLowerCase()];
      const style = `font:var(--text-tag); letter-spacing:var(--tracking-tag); padding:4px 9px; border-radius:var(--radius-pill); ${TAG[t.k] || TAG.amber}`;
      return pid
        ? `<a data-tag-link href="question-bank.html#p=${pid}" title="See the prompts that teach this" style="${style} text-decoration:none; cursor:pointer;">${esc(t.t)}</a>`
        : `<span style="${style}">${esc(t.t)}</span>`;
    }).join('')}</div>`;
  }

  function bubble(side, who, text, qb) {
    const ld = side === 'ld';
    const entry = qb && window.QBANK && window.QBANK.byId[qb];
    const initial = who ? who.name.charAt(0) : (ld ? 'LD' : 'A');
    const av = `<div style="width:30px; height:30px; flex:0 0 30px; border-radius:50%; background:${ld ? LD_AV : AC_AV}; color:#fff; display:flex; align-items:center; justify-content:center; font:600 13px/1 var(--font-sans);">${esc(initial)}</div>`;
    const body = `<div ${entry ? `data-qb="${qb}" role="button" tabindex="0" title="Facilitation prompt, open the bank entry"` : ''} style="max-width:52ch; background:${ld ? LD_BG : AC_BG}; border-radius:${ld ? '4px 12px 12px 12px' : '12px 4px 12px 12px'}; padding:12px 15px;${entry ? ' cursor:pointer; box-shadow:inset 0 0 0 1px rgba(91,61,245,0.22);' : ''}">
      ${who ? `<div style="font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--color-text-muted); margin-bottom:5px;">${esc(who.name.toUpperCase())}</div>` : ''}
      <p style="margin:0; font:var(--text-body-sm); line-height:1.6; text-wrap:pretty;">${esc(text)}</p>
      ${entry ? `<span style="display:inline-flex; align-items:center; gap:6px; margin-top:8px; font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--cat-violet-500);">FACILITATION PROMPT <span style="font-family:var(--font-mono);">&rarr;</span></span>` : ''}
    </div>`;
    return `<div style="display:flex; gap:10px; align-items:flex-start; ${ld ? '' : 'flex-direction:row-reverse;'}">${av}${body}</div>`;
  }

  function attachment(sc, shot) {
    const src = shot.src ? shotSrc(sc, shot.src) : null;
    return `<div style="border:1px solid var(--color-border-subtle); border-radius:var(--radius-md); background:var(--color-bg-surface); overflow:hidden; margin:4px 0; display:flex; flex-direction:column;">
      <div style="display:flex; align-items:center; gap:10px; padding:10px 14px; ${src ? 'border-bottom:1px solid var(--color-border-subtle);' : ''}">
        <span style="font:var(--text-tag); letter-spacing:var(--tracking-tag); padding:4px 9px; border-radius:var(--radius-pill); background:var(--cat-navy-950); color:#fff;">${esc(shot.tab)}</span>
        <span style="font-size:13px; line-height:1.5; color:var(--color-text-muted); text-wrap:pretty;">${esc(shot.cap)}</span>
      </div>
      ${src
        ? `<img src="${src}" alt="${esc(shot.tab)}" class="zoom-img" style="width:100%; flex:1 1 auto; max-height:340px; object-fit:contain; object-position:left top; display:block; background:var(--color-bg-surface-muted); cursor:zoom-in;">`
        : `<div style="margin:0 14px 14px; border:1px dashed var(--cat-stone-400); border-radius:var(--radius-sm); background:var(--color-bg-surface-muted); padding:22px 16px; text-align:center; font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--color-text-muted);">SCREENSHOT TO COME</div>`}
    </div>`;
  }

  function shotsRow(sc, shots) {
    return `<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(min(100%, 240px), 1fr)); gap:12px; align-items:stretch;" data-shots-row>${shots.map((s) => attachment(sc, s)).join('')}</div>`;
  }

  function rowsBlock(rows) {
    return `<div style="border:1px solid var(--color-border-subtle); border-radius:var(--radius-sm); overflow:hidden;">
      ${rows.map((r, i) => `<div style="display:flex; justify-content:space-between; gap:16px; padding:9px 14px; ${i ? 'border-top:1px solid var(--color-border-subtle);' : ''} background:${i % 2 ? 'var(--color-bg-surface)' : 'var(--color-bg-surface-muted)'};">
        <span style="font:var(--text-body-sm);">${esc(r[0])}</span>
        <span style="font:var(--text-data-value); white-space:nowrap;">${esc(r[1])}</span>
      </div>`).join('')}
    </div>`;
  }

  function tableBlock(t) {
    const cols = t.cols || [];
    return `<div style="border:1px solid var(--color-border-subtle); border-radius:var(--radius-md); background:var(--color-bg-surface); overflow:hidden;">
      ${t.title ? `<div style="padding:10px 14px; border-bottom:1px solid var(--color-border-subtle); font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--color-text-muted);">${esc(t.title)}</div>` : ''}
      <div style="overflow-x:auto;"><table style="width:100%; border-collapse:collapse; font:var(--text-body-sm);">
        <thead><tr>${cols.map((c, i) => `<th style="text-align:${i ? 'right' : 'left'}; padding:9px 14px; background:var(--color-bg-surface-muted); border-bottom:1px solid var(--color-border-subtle); font:var(--text-data-label); font-size:12.5px; color:var(--color-text-muted); white-space:nowrap;">${esc(c)}</th>`).join('')}</tr></thead>
        <tbody>${(t.rows || []).map((r) => {
          const cells = Array.isArray(r) ? r : r.c;
          const k = Array.isArray(r) ? null : r.k;
          const sep = !Array.isArray(r) && r.sep;
          const bg = k === 'flag' ? '#FBEDEA' : k === 'ok' ? '#EAF3EE' : k === 'total' ? 'var(--color-bg-surface-muted)' : 'transparent';
          return `<tr style="background:${bg};">${cells.map((v, i) => `<td style="text-align:${i ? 'right' : 'left'}; padding:9px 14px; border-bottom:1px solid var(--color-border-subtle); ${sep ? 'border-top:2px solid var(--cat-stone-400);' : ''} ${i ? 'font:var(--text-data-value); font-size:14px; white-space:nowrap;' : ''} ${k === 'total' || k === 'flag' ? 'font-weight:600;' : ''}">${esc(v)}</td>`).join('')}</tr>`;
        }).join('')}</tbody>
      </table></div>
      ${t.note ? `<div style="padding:10px 14px; font-size:13px; line-height:1.55; color:var(--color-text-muted); text-wrap:pretty;">${esc(t.note)}</div>` : ''}
    </div>`;
  }

  function statBlock(s) {
    const after = !!s.after;
    return `<div style="padding:${after ? '16px 18px' : '12px 14px'}; background:${after ? 'var(--cat-violet-500)' : 'var(--color-bg-surface-muted)'}; border-radius:var(--radius-sm);">
      <div style="font:var(--text-data-label); font-size:13px; color:${after ? 'rgba(255,255,255,0.78)' : 'var(--color-text-muted)'}; margin-bottom:4px;">${esc(s.label)}</div>
      <div style="font:var(--text-data-value); font-size:${after ? '19px' : '16px'}; color:${after ? '#fff' : 'var(--color-text-primary)'}; line-height:1.35;">${esc(s.value)}</div>
      <div style="font-size:13px; line-height:1.5; color:${after ? 'rgba(255,255,255,0.85)' : 'var(--color-text-muted)'}; margin-top:4px;">${esc(s.note)}</div>
    </div>`;
  }

  function strip(z, which) {
    const marks = {};
    (z[which] || []).forEach((m) => { marks[m.w] = m; });
    const cells = [];
    for (let w = 1; w <= (z.weeks || 12); w++) {
      const m = marks[w];
      const ring = m ? (m.k === 'conflict' ? '#B4402F' : m.k === 'resolved' ? '#2C7A4B' : 'var(--cat-stone-400)') : 'transparent';
      cells.push(`<div style="flex:${m ? '4 1 0' : '1 1 0'}; min-width:0; border:2px solid ${ring}; border-radius:var(--radius-sm); background:var(--cat-sand-300); padding:7px 6px; text-align:center;">
        <div style="font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--color-text-muted);">W${w}</div>
        ${m ? `<div style="font-size:10.5px; line-height:1.25; font-weight:600; margin-top:3px; color:var(--color-text-primary); overflow-wrap:break-word;">${esc(m.t)}</div>` : ''}
      </div>`);
    }
    return `<div style="display:flex; gap:4px; align-items:stretch;">${cells.join('')}</div>`;
  }

  function zoneBlock(z) {
    return `<div style="border:1px solid var(--color-border-subtle); border-radius:var(--radius-md); padding:16px 18px; display:flex; flex-direction:column; gap:10px; background:var(--color-bg-surface);">
      <div style="font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--color-text-muted);">${esc(z.beforeLabel || 'Before')}</div>
      ${strip(z, 'before')}
      <p style="margin:2px 0; font-size:13px; line-height:1.55; color:var(--color-text-muted); text-wrap:pretty;">↓ ${esc(z.caption)}</p>
      <div style="font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--color-text-muted);">${esc(z.afterLabel || 'After')}</div>
      ${strip(z, 'after')}
    </div>`;
  }

  function principleBlock(pr) {
    return `<div style="border-left:3px solid var(--cat-violet-500); background:#EFEBFF; border-radius:0 var(--radius-sm) var(--radius-sm) 0; padding:14px 18px; display:flex; flex-direction:column; gap:7px;">
      <span style="font:var(--text-tag); letter-spacing:var(--tracking-tag); color:#3D2A9E;">${esc(pr.name.toUpperCase())}</span>
      <p style="margin:0; font:var(--text-body-sm); line-height:1.6; max-width:76ch; text-wrap:pretty;">${esc(pr.text)}</p>
    </div>`;
  }

  function beat(sc, ch, b) {
    if (b.p) return `<p style="margin:0; font:var(--text-body-sm); line-height:1.65; max-width:74ch; text-wrap:pretty;">${esc(b.p)}</p>`;
    if (b.ld) return bubble('ld', ch.ld, b.ld, b.qb);
    if (b.ac) return bubble('ac', ch.ac, b.ac);
    if (b.principle) return principleBlock(b.principle);
    if (b.shot) return attachment(sc, b.shot);
    if (b.shots) return shotsRow(sc, b.shots);
    if (b.rows) return rowsBlock(b.rows);
    if (b.table) return tableBlock(b.table);
    if (b.stat) return statBlock(b.stat);
    if (b.zone) return zoneBlock(b.zone);
    return '';
  }

  function chapterList(sc, ch, openSet) {
    return ch.chapters.map((c, i) => {
      const on = openSet.has(i);
      return `<div style="border:1px solid ${on ? 'var(--cat-violet-500)' : 'var(--color-border-subtle)'}; border-radius:var(--radius-md); background:var(--color-bg-surface); overflow:hidden;">
        <div data-chap="${sc.id}:${i}" style="display:flex; align-items:center; gap:14px; padding:14px 18px; cursor:pointer;">
          <span style="font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--color-text-muted); flex:0 0 auto;">CH ${i + 1}</span>
          <span style="flex:1; min-width:0; font-weight:600; font-size:16px; letter-spacing:-0.01em; text-wrap:pretty;">${esc(c.q)}</span>
          <span data-chev="${sc.id}:${i}" style="font-family:var(--font-mono); font-size:18px; color:var(--color-text-muted); transform:rotate(${on ? 180 : 0}deg); display:inline-block; flex:0 0 auto;">⌄</span>
        </div>
        <div data-chap-panel="${sc.id}:${i}" style="border-top:1px solid var(--color-border-subtle); padding:18px; display:${on ? 'flex' : 'none'}; flex-direction:column; gap:14px;">${c.beats.map((b) => beat(sc, ch, b)).join('')}</div>
      </div>`;
    }).join('');
  }

  function renderExpanded(sc, openSet) {
    const ch = window.CHAPTERS[sc.id];
    if (!ch) return '';
    return `<div style="border-top:1px solid var(--color-border-subtle); padding:26px 24px 34px; display:flex; flex-direction:column; gap:26px; background:var(--cat-cream-100);">
      <div style="display:grid; grid-template-columns:132px minmax(0,1fr); gap:20px; align-items:start;">
        <img src="${sc.avatarSrc}" alt="${esc(sc.name)}" style="width:132px; height:168px; object-fit:cover; border-radius:10px; background:var(--color-bg-surface-muted); display:block;">
        <div style="display:flex; flex-direction:column; gap:10px; min-width:0;">
          <span style="font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--color-text-muted);">THE CONTEXT</span>
          ${ch.context.map((p) => `<p style="margin:0; font:var(--text-body-sm); line-height:1.65; max-width:78ch; text-wrap:pretty;">${esc(p)}</p>`).join('')}
          ${ch.draft ? `<p style="margin:2px 0 0; font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--color-text-muted);">DRAFT, SESSION WRITE-UP TO COME</p>` : ''}
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:10px;">${chapterList(sc, ch, openSet)}</div>

      ${ch.extraShots && ch.extraShots.length ? `<details>
        <summary style="cursor:pointer; font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--color-accent-highlight);">SHOW EVERY STEP (${ch.extraShots.length})</summary>
        <div style="display:flex; flex-direction:column; gap:10px; margin-top:12px;">${ch.extraShots.map((s) => attachment(sc, s)).join('')}</div>
      </details>` : ''}

      ${ch.impacts && ch.impacts.length ? `<div style="display:flex; flex-direction:column; gap:16px;">
        <span style="font-weight:600; font-size:19px; letter-spacing:-0.01em;">The teaching and learning consequence</span>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:22px 30px;">
          ${ch.impacts.map((i) => `<div style="display:flex; flex-direction:column; gap:7px;">
            <span style="font-family:var(--font-mono); font-size:11px; font-weight:600; letter-spacing:0.09em; text-transform:uppercase; color:var(--color-accent-highlight);">${esc(i.label)}</span>
            <p style="margin:0; font:var(--text-body-sm); line-height:1.6; text-wrap:pretty;">${esc(i.text)}</p>
          </div>`).join('')}
        </div>
      </div>` : ''}

      ${ch.whatChanged && ch.whatChanged.length ? `<div style="display:flex; flex-direction:column; gap:10px; border-top:1px solid var(--color-border-subtle); padding-top:20px;">
        <span style="font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--color-text-muted);">WHAT HAS CHANGED FOR ${esc(sc.name.toUpperCase())}</span>
        ${ch.whatChanged.map((p) => `<p style="margin:0; font:var(--text-body-sm); line-height:1.7; max-width:82ch; text-wrap:pretty;">${esc(p)}</p>`).join('')}
      </div>` : ''}
    </div>`;
  }

  function renderCard(sc, state) {
    const z = window.ZONES[sc.id], ch = window.CHAPTERS[sc.id] || {}, open = state.open === sc.id;
    return `<div style="background:var(--color-bg-surface); border:1px solid ${open ? 'var(--cat-violet-500)' : 'var(--color-border-subtle)'}; border-radius:var(--radius-md); box-shadow:var(--shadow-panel); overflow:hidden;">
      <div data-toggle="${sc.id}" style="display:flex; align-items:flex-start; gap:18px; padding:18px 24px; cursor:pointer;">
        <img src="${sc.avatarSrc}" alt="${esc(sc.name)}" style="width:52px; height:52px; flex:0 0 52px; border-radius:50%; object-fit:cover; background:var(--color-bg-surface-muted); display:block;">
        <div style="flex:1; min-width:0; display:flex; flex-direction:column; gap:8px;">
          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
            <span style="font-weight:650; font-size:18px;">${esc(sc.name)}</span>
            <span style="font:var(--text-tag); letter-spacing:var(--tracking-tag); padding:4px 11px; border-radius:var(--radius-pill); background:var(--color-badge-bg); color:var(--color-badge-text);">${esc(sc.discipline)}</span>
          </div>
          <p style="font-size:14px; line-height:1.5; margin:0; color:var(--color-text-muted); text-wrap:pretty;">${esc(z.summary)}</p>
          ${tags(ch.tags)}
        </div>
        <span style="font-size:20px; color:var(--color-text-muted); font-family:var(--font-mono); transform:rotate(${open ? 180 : 0}deg); transition:transform 200ms ease-out; display:inline-block; flex:0 0 auto;">⌄</span>
      </div>
      ${open ? renderExpanded(sc, state.chap[sc.id] || new Set()) : ''}
    </div>`;
  }

  window.mountScenarioEmbed = function (containerId, pathway) {
    const root = document.getElementById(containerId);
    if (!root) return;
    const RAW = window.RAW_CONTEXTS, ZONES = window.ZONES, META = window.CONTEXT_META;
    const contexts = RAW.map((ctx) => ({
      ...ctx,
      scenarios: ctx.scenarios.filter((sc) => ZONES[sc.id] && ZONES[sc.id].pathway === pathway && window.CHAPTERS[sc.id]),
    })).filter((ctx) => ctx.scenarios.length);
    if (!contexts.length) return;

    const state = { ctx: contexts[0].id, open: null, chap: {} };

    function renderContextTabs() {
      return contexts.map((ctx) => {
        const on = ctx.id === state.ctx;
        return `<button data-ctx="${ctx.id}" style="cursor:pointer; text-align:left; padding:16px 20px; border-radius:var(--radius-md); border:1px solid ${on ? 'var(--c-red)' : 'var(--color-border-subtle)'}; background:${on ? 'var(--c-red)' : 'var(--color-bg-surface)'}; color:${on ? '#fff' : 'var(--color-text-primary)'}; display:flex; flex-direction:column; gap:6px; transition:background 180ms ease-out, border-color 180ms ease-out;">
          <span style="font-weight:600; font-size:16px; letter-spacing:-0.01em;">${esc(ctx.title)}</span>
        </button>`;
      }).join('');
    }

    function render() {
      const ctx = contexts.find((c) => c.id === state.ctx);
      const m = META[state.ctx];
      root.innerHTML = `<div style="display:flex; flex-direction:column; gap:20px;">
        <div style="display:grid; grid-template-columns:repeat(${contexts.length}, 1fr); gap:10px;">${renderContextTabs()}</div>
        <p style="font:var(--text-body-sm); color:var(--color-text-muted); margin:0; max-width:72ch;">${esc(m.blurb)}</p>
        <div style="display:flex; flex-direction:column; gap:14px;">${ctx.scenarios.map((sc) => renderCard(sc, state)).join('')}</div>
      </div>`;
    }

    render();

    root.addEventListener('click', (e) => {
      const zi = e.target.closest('img.zoom-img');
      if (zi) { openLightbox(zi.src); return; }
      const qb = e.target.closest('[data-qb]');
      if (qb) { openPrompt(qb.getAttribute('data-qb')); return; }
      const tl = e.target.closest('[data-tag-link]');
      if (tl) return;
      const c = e.target.closest('[data-ctx]');
      if (c) { state.ctx = c.getAttribute('data-ctx'); state.open = null; render(); return; }
      const cp = e.target.closest('[data-chap]');
      if (cp) {
        const [id, idx] = cp.getAttribute('data-chap').split(':');
        const i = Number(idx);
        const opening = !state.chap[id].has(i);
        if (opening) state.chap[id].add(i); else state.chap[id].delete(i);
        const panel = root.querySelector(`[data-chap-panel="${id}:${i}"]`);
        if (panel) {
          panel.style.display = opening ? 'flex' : 'none';
          if (panel.parentElement) panel.parentElement.style.borderColor = opening ? 'var(--cat-violet-500)' : 'var(--color-border-subtle)';
        }
        const chev = root.querySelector(`[data-chev="${id}:${i}"]`);
        if (chev) chev.style.transform = 'rotate(' + (opening ? 180 : 0) + 'deg)';
        return;
      }
      const t = e.target.closest('[data-toggle]');
      if (t) {
        const id = t.getAttribute('data-toggle');
        const opening = state.open !== id;
        state.open = opening ? id : null;
        if (opening) state.chap[id] = new Set();
        render();
        if (opening) {
          requestAnimationFrame(() => {
            const el = root.querySelector(`[data-toggle="${id}"]`);
            if (el) {
              const navH = document.querySelector('.site-nav')?.offsetHeight || 0;
              const top = el.getBoundingClientRect().top + window.scrollY - navH - 16;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          });
        }
      }
    });
  };

  function ensureLightbox() {
    let lb = document.getElementById('scenarios-lightbox');
    if (lb) return lb;
    lb = document.createElement('div');
    lb.id = 'scenarios-lightbox';
    lb.style.cssText = 'position:fixed; inset:0; z-index:999; background:rgba(20,15,80,0.82); display:none; align-items:center; justify-content:center; padding:40px; cursor:zoom-out;';
    lb.innerHTML = '<img id="scenarios-lightbox-img" style="width:90vw; height:90vh; object-fit:contain; border-radius:12px; box-shadow:0 20px 60px rgba(0,0,0,0.4); cursor:default;">' +
      '<button id="scenarios-lightbox-close" aria-label="Close" style="position:fixed; top:24px; right:32px; width:40px; height:40px; border-radius:50%; border:none; background:rgba(255,255,255,0.15); color:#fff; font-size:22px; line-height:1; cursor:pointer;">&times;</button>';
    document.body.appendChild(lb);
    lb.addEventListener('click', (e) => { if (e.target.id !== 'scenarios-lightbox-img') closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
    return lb;
  }
  function openLightbox(src) { const lb = ensureLightbox(); document.getElementById('scenarios-lightbox-img').src = src; lb.style.display = 'flex'; }
  function closeLightbox() { const lb = document.getElementById('scenarios-lightbox'); if (lb) lb.style.display = 'none'; }

  /* ── Facilitation prompt modal (question bank entry) ── */
  function ensurePromptModal() {
    let el = document.getElementById('qb-modal');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'qb-modal';
    el.style.cssText = 'position:fixed; inset:0; z-index:1000; background:rgba(20,15,80,0.62); display:none; align-items:center; justify-content:center; padding:32px;';
    el.innerHTML = '<div id="qb-modal-card" style="max-width:640px; width:100%; max-height:84vh; overflow:auto; background:var(--color-bg-surface,#fff); border-radius:14px; box-shadow:0 30px 70px rgba(20,15,80,0.35);"></div>';
    document.body.appendChild(el);
    el.addEventListener('click', (e) => { if (!e.target.closest('#qb-modal-card') || e.target.closest('[data-qb-close]')) closePrompt(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePrompt(); });
    return el;
  }
  function closePrompt() { const el = document.getElementById('qb-modal'); if (el) el.style.display = 'none'; }
  function openPrompt(id) {
    const bank = window.QBANK;
    if (!bank || !bank.byId[id]) return;
    const en = bank.byId[id];
    const pr = en.principle ? bank.principleById[en.principle] : null;
    const mo = bank.momentById[en.moment];
    const el = ensurePromptModal();
    el.querySelector('#qb-modal-card').innerHTML = `
      <div style="display:flex; align-items:flex-start; gap:14px; padding:18px 22px; border-bottom:1px solid var(--color-border-subtle);">
        <span style="flex:1; font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--color-text-muted);">FACILITATION PROMPT \u00b7 ${esc(mo ? mo.label.toUpperCase() : '')}</span>
        <button data-qb-close aria-label="Close" style="border:0; background:none; font-size:22px; line-height:1; cursor:pointer; color:var(--color-text-muted);">&times;</button>
      </div>
      <div style="padding:20px 22px 24px; display:flex; flex-direction:column; gap:18px;">
        <p style="margin:0; font-family:var(--font-display,Georgia,serif); font-size:21px; line-height:1.35; color:var(--color-text-primary); text-wrap:pretty;">\u201c${esc(en.prompt)}\u201d</p>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <span style="font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--color-accent-highlight);">WHEN TO USE IT</span>
          <p style="margin:0; font:var(--text-body-sm); line-height:1.6; text-wrap:pretty;">${esc(en.when)}</p>
        </div>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <span style="font:var(--text-tag); letter-spacing:var(--tracking-tag); color:var(--color-accent-highlight);">WHAT IT TYPICALLY PROVOKES</span>
          <p style="margin:0; font:var(--text-body-sm); line-height:1.6; text-wrap:pretty;">${esc(en.response)}</p>
        </div>
        ${pr ? `<div style="border-left:3px solid var(--cat-violet-500); background:#EFEBFF; border-radius:0 6px 6px 0; padding:12px 16px; display:flex; flex-direction:column; gap:5px;">
          <span style="font:var(--text-tag); letter-spacing:var(--tracking-tag); color:#3D2A9E;">${esc(pr.label.toUpperCase())}</span>
          <p style="margin:0; font:var(--text-body-sm); line-height:1.6; text-wrap:pretty;">${esc(pr.blurb)}</p>
        </div>` : ''}
        <a href="question-bank.html#${esc(en.id)}" style="align-self:flex-start; font:var(--text-body-sm); color:var(--cat-violet-500); text-decoration:underline; text-underline-offset:3px;">See this in the full question bank \u2192</a>
      </div>`;
    el.style.display = 'flex';
  }
})();
