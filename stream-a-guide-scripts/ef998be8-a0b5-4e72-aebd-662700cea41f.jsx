/* CAT, Shared components: SiteNav, Footer, ScrollDemo scaffold */

// ─────────────────────────────────────────────────────────────
// SiteNav, persistent top nav for all pages
// ─────────────────────────────────────────────────────────────
function SiteNav({ current = "home" }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
  { id: 'home', label: 'Overview', href: 'index.html' },
  { id: 'resources', label: 'Resources', children: [
    { id: 'stream-a', label: 'How Pathway A works', href: 'stream-a-guide.html' },
    { id: 'stream-b', label: 'How Pathway B works', href: 'stream-b-guide.html' }] },
  { id: 'research', label: 'Research', href: 'index.html#research' },
  { id: 'about', label: 'About', href: 'about.html' }];


  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-nav-inner container">
        <a href="index.html" className="site-brand">
          <span className="brand-mark" aria-hidden="true">
            <img src="data:image/png;base64,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" alt="The CAT" width="32" height="32" style={{ objectFit: 'contain', display: 'block' }} />
          </span>
          <span className="brand-text">
            <span className="brand-name">The CAT</span>
            <span className="brand-sub">Constructive Alignment Tool</span>
          </span>
        </a>
        <nav className="site-links">
          {links.map((l) => l.children ?
          <div key={l.id} className="site-drop">
              <button type="button" className={`site-link site-drop-btn ${l.children.some((c) => c.id === current) ? 'is-current' : ''}`} aria-haspopup="true">
                {l.label}<svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <div className="site-drop-menu" role="menu">
                {l.children.map((c) =>
              <a key={c.id} href={c.href} role="menuitem" className={`site-drop-item ${current === c.id ? 'is-on' : ''}`}>{c.label}</a>
              )}
              </div>
            </div> :
          <a key={l.id} href={l.href} className={`site-link ${current === l.id ? 'is-current' : ''}`}>
              {l.label}
            </a>
          )}
          <style>{`
            .site-drop{position:relative}
            .site-drop-btn{display:inline-flex;align-items:center;gap:6px;border:0;background:none;cursor:pointer;font-family:inherit}
            .site-drop-btn svg{transition:transform 160ms}
            .site-drop:hover .site-drop-btn svg,.site-drop:focus-within .site-drop-btn svg{transform:rotate(180deg)}
            .site-drop-menu{position:absolute;top:100%;left:0;min-width:220px;padding:6px;margin-top:6px;background:var(--c-white);border:1px solid var(--c-hairline);border-radius:10px;box-shadow:0 12px 32px -16px rgba(20,15,80,.25);display:flex;flex-direction:column;gap:2px;opacity:0;visibility:hidden;transform:translateY(-4px);transition:opacity 160ms,transform 160ms,visibility 160ms;z-index:60}
            .site-drop-menu::before{content:"";position:absolute;left:0;right:0;top:-8px;height:8px}
            .site-drop:hover .site-drop-menu,.site-drop:focus-within .site-drop-menu{opacity:1;visibility:visible;transform:none}
            .site-drop-item{padding:9px 12px;border-radius:6px;font-size:14px;color:var(--c-body);white-space:nowrap}
            .site-drop-item:hover{background:rgba(20,15,80,.04);color:var(--c-ink)}
            .site-drop-item.is-on{color:var(--c-ink);font-weight:600}
          `}</style>
        </nav>
        <div className="site-cta">
          <a href="https://mediaproduction.adelaide.edu.au/pace-interactives/#/clos" target="_blank" rel="noopener" className="btn btn-primary btn-nav-a">
            Open Pathway A
            <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a href="https://mediaproduction.adelaide.edu.au/pace-interactives/#/clos-inverse" target="_blank" rel="noopener" className="btn btn-primary btn-nav-b">
            Open Pathway B
            <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </div>
    </header>);

}

// ─────────────────────────────────────────────────────────────
// SiteFooter
// ─────────────────────────────────────────────────────────────
function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-brand">
            <div className="footer-mark">
              <img src="data:image/png;base64,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" alt="" width="40" height="40" style={{ objectFit: 'contain', display: 'block' }} />
            </div>
            <div className="footer-brand-text">
              <span className="footer-title">The Constructive Alignment Tool</span>
              <span className="footer-note">An educational research project exploring constructive alignment in higher education.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}

// ─────────────────────────────────────────────────────────────
// ScrollDemo, wraps a demo, auto-plays once when in view,
// provides replay via a ref. Children receive a `progress` (0..1)
// and `playing` prop via render prop.
// ─────────────────────────────────────────────────────────────
function ScrollDemo({ duration = 6, children, caption, label, height }) {
  const ref = React.useRef(null);
  const [progress, setProgress] = React.useState(1); // start at final frame so demo is always visible
  const [playing, setPlaying] = React.useState(false);
  const [played, setPlayed] = React.useState(false);
  const startRef = React.useRef(null);
  const rafRef = React.useRef(null);

  const start = React.useCallback(() => {
    setPlaying(true);
    setProgress(0);
    startRef.current = null;
    const step = (ts) => {
      if (startRef.current == null) startRef.current = ts;
      const t = (ts - startRef.current) / 1000;
      const p = Math.min(1, t / duration);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setPlaying(false);
      }
    };
    rafRef.current = requestAnimationFrame(step);
  }, [duration]);

  const replay = React.useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    start();
  }, [start]);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Delay start so Babel/React finish compiling before rAF kicks off
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !played) {
          setPlayed(true);
          setTimeout(() => start(), 600);
        }
      });
    }, { threshold: 0.15 });
    // Small initial delay before observing, prevents firing mid-compilation
    const timer = setTimeout(() => io.observe(el), 200);
    return () => {
      clearTimeout(timer);
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [played, start]);

  return (
    <div ref={ref} className="scroll-demo" style={height ? { minHeight: height } : undefined}>
      <div className="scroll-demo-stage">
        {typeof children === 'function' ? children({ progress, playing }) : children}
      </div>
      <div className="scroll-demo-strip">
        <div className="demo-label">
          <span className="demo-dot" style={{ background: playing ? 'var(--c-bright)' : 'var(--c-hairline-2)' }} />
          <span className="mono demo-label-text">{label}</span>
        </div>
        <div className="demo-caption">{caption}</div>
        <button className="replay-btn" onClick={replay}>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M1 5.5a4.5 4.5 0 108.5-2M9.5 1.5V4H7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Replay
        </button>
      </div>
      <div className="scroll-demo-progress">
        <div className="scroll-demo-progress-fill" style={{ width: `${progress * 100}%` }} />
      </div>
    </div>);

}

// Utility easings for demos
const ease = {
  outCubic: (t) => 1 - Math.pow(1 - t, 3),
  inOutCubic: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  outQuart: (t) => 1 - Math.pow(1 - t, 4),
  outBack: (t) => {const c1 = 1.70158,c3 = c1 + 1;return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);}
};

// Lerp helper for keyframes: segment(progress, from, to, start, end, easeFn)
function seg(p, from, to, start, end, easeFn = ease.outCubic) {
  if (p <= start) return from;
  if (p >= end) return to;
  const local = (p - start) / (end - start);
  return from + (to - from) * easeFn(local);
}

Object.assign(window, { SiteNav, SiteFooter, ScrollDemo, ease, seg });