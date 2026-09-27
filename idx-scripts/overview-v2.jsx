/* Overview v2: context-led hero, three tabs (Why / When / What) */

const OV_TOOL = {
  A: 'https://mediaproduction.adelaide.edu.au/pace-interactives/#/clos',
  B: 'https://mediaproduction.adelaide.edu.au/pace-interactives/#/clos-inverse',
};
const OV_GUIDE = { A: 'stream-a-guide.html', B: 'stream-b-guide.html' };
const OvArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

function HeroV2() {
  return (
    <section className="hero hero-v3" id="use-it">
      <div className="hv3-navy">
        <div className="hv3-brand">
          <img className="hv3-logo" src="cat-logo-white.png" alt="" />
          <div className="hv3-names">
            <h1 className="hv3-cat">The CAT</h1>
            <p className="hv3-full"><span>C</span>onstructive <span>A</span>lignment <span>T</span>ool</p>
          </div>
        </div>
      </div>
      <div className="hv3-band">
        <p className="hv3-umbrella">The CAT is an interactive tool for curriculum designers and teaching academics that gives you a precise, visual read of how a course's components actually relate to each other, and what happens to each of them when you change any one: something you couldn't see before.</p>
        <a className="hv3-find" href="#when" onClick={(e) => { e.preventDefault(); history.replaceState(null, '', '#when'); window.dispatchEvent(new CustomEvent('cat:open-tab', { detail: 'when' })); }}>
          <span className="hv3-find-eyebrow">Not sure where to start?</span>
          <span className="hv3-find-title">Find the pathway that fits the course <OvArrow /></span>
          <span className="hv3-find-sub">Two or three quick questions</span>
        </a>
        <p className="hv3-note">The CAT is also an <a href="#research">educational research project</a>. The tool is free to use; research participation is separate and voluntary.</p>
      </div>
    </section>
  );
}

// ─── Tab 1: Why it matters ───
function WhyTab() {
  const points = [
    { t: 'Changes tested before students meet them', b: 'Model a change to a weighting, mapping or rubric together, in the room, and see what it does to the rest of the course before anything goes live.', media: 'tested' },
    { t: 'One document: a record to hand over, and a plan to build from', b: 'Each session can end in a Course Design Summary: weightings, teaching readiness, mapping, marking guide composition and a log of decisions.', b2: [['A record you can hand over', 'A basis for course review, accreditation or handover.'], ['A plan that carries into the build', 'The teaching sequence, CLO mapping and assignment weights translate directly into how the course is set up in the LMS: how modules are ordered, where assessments sit, and how rubrics are configured.']], link: true, media: 'summary' },
  ];
  return (
    <React.Fragment>
      <p className="explore-panel-sub">What it opens up for the academic, and for the curriculum designer working alongside them.</p>
      <div className="why-row is-hero">
        <div className="why-media">
          <ClarityViz caption={<>The academic had designed the course to run as the top row, and built the LMS pages, tutorials and teaching activities to match. Mapping it in the CAT showed the actual course had drifted: seven hours had moved into the middle task, leaving students less time to prepare for the final assignment than the course's own materials told them to expect — a real disadvantage, and a costly one, since the final assignment usually carries the heaviest weighting of the three. It wasn't visible before; once it was, the academic knew exactly where to look.</>} />
        </div>
        <div className="why-copy">
          <p className="why-lead-text">The CAT gives academics a way of seeing their own course that wasn't available before: where the emphasis actually sits across outcomes, teaching and assessment, and by how much.</p>
          <p className="why-lead-more">For the curriculum designer, the value is in assisting in how the course might need to be altered and resourced to better match the way the course is intended to be delivered.</p>
        </div>
      </div>
      <div className="why-points">
        {points.map((p, i) => (
          <div className="why-row" key={i}>
            <div className="why-media">
              {p.media === 'tested' ? <TestedChart /> : <img className="why-summary-img" src="assets/course-design-summary-page.png" alt="First page of an exported Course Design Summary" />}
            </div>
            <div className="why-copy">
              <h3 className="why-point-title">{p.t}</h3>
              <p className="why-point-body">{p.b}</p>
              {p.b2 && p.b2.map(([h, t], k) => <p className="why-point-body" key={k}><strong className="why-sub">{h}.</strong> {t}</p>)}
              {p.link && <a className="why-point-link" href="assets/course-design-summary.docx" download>See an example summary <OvArrow /></a>}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

// ─── Tab 2: When to use it (diagnostic) ───
const DX_CONTEXTS = [
  { id: 'verifying', num: '01', title: 'Verify an existing course', body: 'Compare what the course assesses with what it was designed to emphasise.', rel: 'A use in its own right.', when: 'An Assurance of Learning cycle, a run of student feedback, an inherited course, or a review coming up.', start: 'v1' },
  { id: 'refining', num: '02', title: 'Refine an existing course', body: 'See how a change carries through the rest of the course before you commit to it.', rel: 'Starts with a verification pass: you can’t decide what to change until you’ve checked what’s there.', when: 'The same prompts as verifying, or a change you want to test before it runs live.', start: 'r1' },
  { id: 'designing', num: '03', title: 'Design a new course', body: 'Build the alignment between outcomes, assignments and rubrics before briefs are written.', rel: 'No verification step, since there is nothing yet to check. Pathway A only.', when: 'The course is being built and needs to be aligned from the first draft.', start: 'd1' },
];
const DX_NODES = {
  v1: { q: 'What does the course have in place right now?', opts: [
    { l: 'Finished assignments, with rubrics or marking guides that can be tagged to CLOs', to: 'v2' },
    { l: 'Assignments, but the rubrics are loose or still changing', to: 'A', why: 'Pathway B reads CLO emphasis from rubric criteria, so it needs rubrics that are settled. Pathway A works from the intended CLO emphasis and mapping instead, and derives the assignment weights to compare with the ones the course carries.' },
  ] },
  v2: { q: 'Which question do you most want answered?', opts: [
    { l: 'What are the assessments actually emphasising?', to: 'B', why: 'Pathway B derives the CLO weighting from the assignments and rubrics as they stand, a read of the course without intentions shaping it.' },
    { l: 'Do the assignment weights and teaching sequence fit what was intended?', to: 'A', why: 'Pathway A starts from the intended CLO weighting and teaching sequence, and derives the assignment weights they imply, so you can set them beside the weights the course actually carries.' },
  ] },
  r1: { q: 'Where do you think the change needs to happen?', opts: [
    { l: 'In the rubrics or marking criteria', to: 'B', why: 'Pathway B lets you retag or reweight a criterion and see how the implied CLO emphasis moves. Run it on the current rubrics first to verify, then make the change.' },
    { l: 'In the CLO emphasis, the mapping, or when things are taught', to: 'A', why: 'Those are Pathway A’s inputs. Enter the course as it stands to verify, then change an input and watch the assignment weights and rubric composition re-derive.' },
    { l: 'Not sure yet', to: 'r2' },
  ] },
  r2: { q: 'Which feels like the firmer starting point?', opts: [
    { l: 'The assessments as they stand', to: 'B', why: 'Pathway B starts from the assessments already trusted and shows the CLO emphasis they imply. Where that surprises is usually where the change belongs.' },
    { l: 'What each CLO is meant to carry', to: 'A', why: 'Pathway A starts from that intent and shows what the assignments and rubrics would need to be to honour it. The gap with the current course is the list of changes.' },
  ] },
  d1: { q: 'What is clearest right now?', opts: [
    { l: 'The outcomes, and roughly how much each matters', to: 'A', why: 'Pathway A starts exactly there: weight the CLOs, plan when each is taught, map them to assignments, and the assignment weights and rubric composition follow.' },
    { l: 'The assignments planned', to: 'A', why: 'Pathway B needs finished rubrics, so it can’t run on a course that doesn’t exist yet. In Pathway A, sketch the CLO weighting first; the mapping then tells you what those assignments should weigh.' },
  ] },
};
const DX_CD_LINE = 'It works alone, but it’s most useful as a conversation between the academic and a curriculum designer.';

function Diagnostic() {
  const [ctx, setCtx] = React.useState(null);
  const [node, setNode] = React.useState(null);
  const [trail, setTrail] = React.useState([]);
  const [result, setResult] = React.useState(null);
  const c = DX_CONTEXTS.find((x) => x.id === ctx);
  const begin = (x) => { setCtx(x.id); setNode(x.start); setTrail([]); setResult(null); };
  const reset = () => { setCtx(null); setNode(null); setTrail([]); setResult(null); };
  const pick = (o) => {
    const t = [...trail, { q: DX_NODES[node].q, a: o.l }];
    setTrail(t);
    if (o.to === 'A' || o.to === 'B') { setResult({ p: o.to, why: o.why }); setNode(null); }
    else setNode(o.to);
  };

  if (!c) return (
    <React.Fragment>
      <div className="dx-cards">
        {DX_CONTEXTS.map((x, i) => (
          <React.Fragment key={x.id}>
          {i === 1 && <span className="dx-arrow" aria-hidden="true">→</span>}
          {i === 2 && <span className="dx-spacer" aria-hidden="true"></span>}
          <button className={`dx-card is-${x.id}`} onClick={() => begin(x)}>
            <span className="dx-num mono">{x.num}</span>
            <span className="dx-title">{x.title}</span>
            <span className="dx-when"><span className="dx-when-l mono">{x.id === 'designing' ? 'When' : 'Often prompted by'}</span>{x.when}</span>
            <span className="dx-body">{x.body}</span>
            <span className="dx-rel">{x.rel}</span>
            <span className="dx-go">Start <OvArrow /></span>
          </button>
          </React.Fragment>
        ))}
      </div>
      <p className="dx-shared-cd">{DX_CD_LINE}</p>
    </React.Fragment>
  );

  return (
    <div className="dx-flow">
      <div className="dx-crumb">
        <span className="dx-num mono">{c.num} · {c.title}</span>
        <button className="dx-textbtn" onClick={reset}>Choose a different context</button>
      </div>
      {trail.length > 0 && (
        <ol className="dx-trail">
          {trail.map((t, i) => <li key={i}><span>{t.q}</span><strong>{t.a}</strong></li>)}
        </ol>
      )}
      {node && (
        <div className="dx-step">
          <h3 className="dx-q">{DX_NODES[node].q}</h3>
          <div className="dx-opts">
            {DX_NODES[node].opts.map((o, i) => <button className="dx-opt" key={i} onClick={() => pick(o)}>{o.l}</button>)}
          </div>
        </div>
      )}
      {result && (
        <div className={`dx-result is-${result.p.toLowerCase()}`}>
          <span className="dx-rec mono">Recommended</span>
          <h3 className="dx-path">Pathway {result.p}</h3>
          <p className="dx-why">{result.why}</p>
          {ctx === 'refining' && <p className="dx-why dx-why-note">Refining starts with verifying: enter the course as it stands and check it before changing anything.</p>}
          <div className="dx-actions">
            <a className="dx-btn" href={OV_TOOL[result.p]} target="_blank" rel="noopener">Go straight to Pathway {result.p} <OvArrow /></a>
            <a className="dx-btn is-sec" href={`${OV_GUIDE[result.p]}?ctx=${ctx}`}>Learn more about Pathway {result.p} first</a>
          </div>
          <p className="dx-cdline">{DX_CD_LINE}</p>
        </div>
      )}
      <div className="dx-links">
        {trail.length > 0 && <button className="dx-textbtn" onClick={() => begin(c)}>Redo the questions</button>}
      </div>
    </div>
  );
}

// ─── Tab 3: relationship diagram ───
const RD_NODES = {
  W: { x: 40, y: 40, l: ['CLO weighting'] },
  R: { x: 40, y: 256, l: ['Teaching readiness'] },
  M: { x: 345, y: 148, l: ['CLO mapping'] },
  T: { x: 650, y: 40, l: ['Assignment totals'] },
  C: { x: 650, y: 256, l: ['Rubric / marking', 'guide composition'] },
};
const RD_EDGES = {
  WM: [[230, 72], [345, 170]],
  RM: [[230, 288], [345, 190]],
  MT: [[535, 170], [650, 72]],
  MC: [[535, 190], [650, 288]],
  TC: [[805, 104], [805, 256]],
};
const RD_VIEWS = {
  A: {
    color: 'var(--c-red)', marker: 'rd-arrow-a',
    roles: { W: ['in', 1], R: ['in', 2], M: ['in', 3], T: ['out', 4], C: ['out', 5] },
    edges: { WM: 'f', RM: 'f', MT: 'f', MC: 'f', TC: 'f' },
    cap: 'Start from what each outcome is intended to carry and when it is taught. Mapping those outcomes to assignments lets the tool derive what each assignment should weigh, and how each rubric or marking guide should divide its marks.',
  },
  B: {
    color: 'var(--c-purple)', marker: 'rd-arrow-b',
    roles: { T: ['in', 1], C: ['in', 2], M: ['out', 3], W: ['out', 4], R: ['off'] },
    edges: { MT: 'r', MC: 'r', WM: 'r', TC: 'n', RM: 'off' },
    cap: 'Start from the assignments and rubric criteria as they are. Tagging outcomes to criteria generates the mapping, and from it the tool derives the CLO weighting the assessments imply. The question to ask is \'Does the indicated CLO influence match the intuition and intention of the educator?\'',
  },
};
function rdPath([a, b], dir) {
  const [p0, p1] = dir === 'r' ? [b, a] : [a, b];
  if (p0[0] === p1[0]) return `M ${p0[0]} ${p0[1]} L ${p1[0]} ${p1[1]}`;
  const k = p1[0] > p0[0] ? 60 : -60;
  return `M ${p0[0]} ${p0[1]} C ${p0[0] + k} ${p0[1]}, ${p1[0] - k} ${p1[1]}, ${p1[0]} ${p1[1]}`;
}

function RelationshipDiagram() {
  const [view, setView] = React.useState('A');
  const v = RD_VIEWS[view];
  const roleLabel = { in: 'You enter', out: 'Derived', off: 'Not in Pathway B' };
  return (
    <div className={`rd-wrap is-${view.toLowerCase()}`}>
      <div className="rd-top">
        <div className="rd-toggle" role="tablist" aria-label="Diagram view">
          {['A', 'B'].map((k) => (
            <button key={k} role="tab" aria-selected={view === k} className={`rd-tog ${view === k ? 'is-on' : ''} is-${k.toLowerCase()}`} onClick={() => setView(k)}>View as Pathway {k}</button>
          ))}
        </div>
        <div className="rd-legend">
          <span><i className="rd-sw is-in"></i>You enter</span>
          <span><i className="rd-sw is-out"></i>Derived</span>
        </div>
      </div>
      <div className="rd-scroll">
        <svg className="rd-svg" viewBox="0 0 880 360" role="img" aria-label={`How the five elements connect, viewed as Pathway ${view}`}>
          <defs>
            <marker id="rd-arrow-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#D31569"></path></marker>
            <marker id="rd-arrow-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#836BFF"></path></marker>
          </defs>
          {Object.entries(RD_EDGES).map(([k, e]) => {
            const d = v.edges[k];
            return <path key={k} d={rdPath(e, d)} fill="none" className={`rd-edge ${d === 'off' ? 'is-off' : ''}`} style={{ stroke: d === 'off' ? undefined : v.color }} markerEnd={d === 'f' || d === 'r' ? `url(#${v.marker})` : undefined}></path>;
          })}
          {Object.entries(RD_NODES).map(([k, n]) => {
            const [role, step] = v.roles[k];
            const two = n.l.length > 1;
            return (
              <g key={k} className={`rd-node is-${role}`}>
                <rect x={n.x} y={n.y} width="190" height="64" rx="12" style={role === 'in' ? { fill: v.color, stroke: v.color } : role === 'out' ? { stroke: v.color } : undefined}></rect>
                {step && <g><circle cx={n.x} cy={n.y} r="13" className="rd-step" style={{ fill: role === 'in' ? '#fff' : v.color, stroke: v.color }}></circle><text x={n.x} y={n.y + 4.5} textAnchor="middle" className="rd-step-t" style={{ fill: role === 'in' ? v.color : '#fff' }}>{step}</text></g>}
                <text x={n.x + 95} y={n.y + (two ? 25 : 32)} textAnchor="middle" className="rd-name">
                  {n.l.map((t, i) => <tspan key={i} x={n.x + 95} dy={i ? 17 : 0}>{t}</tspan>)}
                </text>
                <text x={n.x + 95} y={n.y + 88} textAnchor="middle" className="rd-role">{roleLabel[role]}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <p className="rd-cap">{v.cap}</p>
      <p className="rd-note">Same five elements, same connections. Only the starting point changes.</p>
    </div>
  );
}

function WhatTab() {
  return (
    <React.Fragment>
      <p className="explore-panel-sub">The CAT quantifies how course learning outcomes (CLOs), summative assignments and rubrics relate, and lets you start from either end.</p>
      <div className="what-prose">
        <p><strong>Pathway A</strong> starts from an estimate of the relative importance of the CLOs (CLO weightings), when each is taught, and how they are mapped across the summative assignments. From those it derives the assignment weights and rubric composition they imply, and includes a teaching sequence planner to map readiness across the course.</p>
        <p><strong>Pathway B</strong> starts from the summative assignments and rubrics as they are, and displays the CLO weightings derived from them.</p>
      </div>
      <RelationshipDiagram />
    </React.Fragment>
  );
}

function OverviewTabs() {
  const cells = [
    { key: 'why', num: '01', title: 'Why it matters' },
    { key: 'when', num: '02', title: 'When to use it' },
    { key: 'what', num: '03', title: 'What the CAT does' },
  ];
  const fromHash = () => { const h = location.hash.slice(1); return cells.some((c) => c.key === h) ? h : null; };
  const [open, setOpen] = React.useState(fromHash() || 'why');
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onHash = (e) => {
      const h = (e && e.detail) || fromHash();
      if (!h) return;
      setOpen(h);
      const el = ref.current;
      if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.pageYOffset - 12);
    };
    window.addEventListener('hashchange', onHash);
    window.addEventListener('cat:open-tab', onHash);
    if (fromHash()) setTimeout(onHash, 60);
    return () => { window.removeEventListener('hashchange', onHash); window.removeEventListener('cat:open-tab', onHash); };
  }, []);
  return (
    <section className="explore-band" id="how" ref={ref}>
      <span id="why"></span><span id="when"></span><span id="what"></span>
      <div className="container">
        <div className="explore-tabs">
          {cells.map((c) => (
            <button key={c.key} className={`explore-tab ${open === c.key ? 'is-active' : ''}`} onClick={() => setOpen(c.key)}>
              <span className="explore-num mono">{c.num}</span>
              <span className="explore-trigger-text"><span className="explore-trigger-title">{c.title}</span></span>
            </button>
          ))}
        </div>
        <div className="explore-window" key={open}>
          <div className="explore-panel-inner">
            {open === 'why' && <WhyTab />}
            {open === 'when' && <Diagnostic />}
            {open === 'what' && <WhatTab />}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CLO 1 before/after teaching-sequence chart (0% at base, CLO 1 stacked from the bottom) ───
const TC_BEFORE = [35, 35, 30, 25, 25, 20, 8, 8, 8, 8];
const TC_AFTER = [35, 35, 30, 14, 14, 11, 25, 28, 28, 25];
const TC_TASKS = [{ w: 3, l: 'Brand audit' }, { w: 6, l: 'Campaign proposal' }, { w: 10, l: 'Pitch' }];
function TcPanel({ title, map, data, before }) {
  const x0 = 34, bw = 26, gap = 5, top = 30, h = 130;
  const bx = (i) => x0 + i * (bw + gap);
  const W = bx(10) + 4;
  return (
    <div className="tc-panel">
      <div className="tc-head"><span className="tc-title">{title}</span><span className="tc-map">CLO 1 mapping: {map}</span></div>
      <svg viewBox={`0 0 ${W} ${top + h + 22}`} className="tc-svg">
        <text x={x0 - 6} y={top + 4} textAnchor="end" className="tc-ax">100%</text>
        <text x={x0 - 6} y={top + h} textAnchor="end" className="tc-ax">0%</text>
        {data.map((v, i) => {
          const ch = (v / 100) * h;
          const changed = !before && v > TC_BEFORE[i];
          const dropped = !before && v < TC_BEFORE[i];
          const was = (TC_BEFORE[i] / 100) * h;
          return (
            <g key={i}>
              <rect x={bx(i)} y={top} width={bw} height={h} className="tc-other"></rect>
              <rect x={bx(i)} y={top + h - ch} width={bw} height={ch} className={changed ? 'tc-clo is-new' : dropped ? 'tc-clo is-down' : 'tc-clo'}></rect>
              {!before && v !== TC_BEFORE[i] && <line x1={bx(i) - 1} x2={bx(i) + bw + 1} y1={top + h - was} y2={top + h - was} className="tc-was"></line>}
              <text x={bx(i) + bw / 2} y={top + h + 15} textAnchor="middle" className="tc-ax">{i + 1}</text>
            </g>
          );
        })}
        {TC_TASKS.map((t) => {
          const cx = bx(t.w - 1) + bw / 2;
          return (
            <g key={t.w}>
              <line x1={cx} x2={cx} y1={top - 6} y2={top + h} className="tc-task"></line>
              <text x={t.w === 10 ? cx + bw / 2 : cx} y={top - 12} textAnchor={t.w === 10 ? 'end' : 'middle'} className="tc-task-l">{t.l}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
function TestedChart() {
  return (
    <figure className="tc">
      <figcaption className="tc-eyebrow mono">Illustrative example · refinement</figcaption>
      <p className="tc-h">CLO 1's share of each teaching week, before and after revising its mapping</p>
      <div className="tc-panels">
        <TcPanel title="Before" map="4 / 4 / 1" data={TC_BEFORE} before />
        <TcPanel title="After" map="4 / 2 / 3" data={TC_AFTER} />
      </div>
      <div className="tc-legend">
        <span><i className="tc-sw is-clo"></i>CLO 1</span>
        <span><i className="tc-sw is-new"></i>Increased</span>
        <span><i className="tc-sw is-down"></i>Decreased</span>
        <span><i className="tc-sw is-was"></i>Level before revision</span>
        <span><i className="tc-sw is-other"></i>Other CLOs</span>
      </div>
      <p className="tc-cap">Moving CLO 1's weight from the campaign proposal to the pitch lowers its share of weeks 4–6 and lifts weeks 7–10. Seeing that before the course runs means the teaching sequence, LMS resources and assessment brief can be updated to match.</p>
    </figure>
  );
}

Object.assign(window, { HeroV2, OverviewTabs });
