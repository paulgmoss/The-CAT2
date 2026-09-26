/* ACT Demos, scroll-triggered animated sequences that explain the tool
   Each demo: 6-10s, auto-plays once, replayable.
   Uses `progress` (0..1) from ScrollDemo wrapper. */

// ─────────────────────────────────────────────────────────────
// HeroDemo, the four linked views, unfolding left → right
//   01 CLO weightings · 02 CLO mapping · 03 Assignment weights ·
//   04 Rubric composition, then a return loop to signal iteration
// ─────────────────────────────────────────────────────────────
function HeroDemo({ progress }) {
  const P = progress;
  const labels = ['CLO1', 'CLO2', 'CLO3', 'CLO4'];
  const colors = ['#140F50', '#1448FF', '#836BFF', '#3B2FAA'];
  const targets = [30, 30, 20, 20];
  const assigns = ['Essay', 'Project', 'Exam'];
  // Canonical mapping (rows normalised to 1). CLO1 is not assessed by A3.
  const mapping = [
    [0.333, 0.667, 0],
    [0.158, 0.316, 0.526],
    [0.333, 0.333, 0.334],
    [0.118, 0.294, 0.588],
  ];

  // Staged reveals, each view unfolds after the previous
  const s1 = seg(P, 0, 1, 0.04, 0.20, ease.outCubic);  // CLO weightings
  const s2 = seg(P, 0, 1, 0.22, 0.42, ease.outCubic);  // mapping
  const s3 = seg(P, 0, 1, 0.44, 0.64, ease.outCubic);  // assignment weights
  const s4 = seg(P, 0, 1, 0.66, 0.86, ease.outCubic);  // rubric composition
  const loop = seg(P, 0, 1, 0.88, 1.0, ease.outCubic); // iteration band

  const cloVals = targets.map((t, i) => seg(P, 0, t, 0.04 + i * 0.025, 0.20, ease.outCubic));

  // Derived: contribution of each CLO to each assignment
  const contrib = [0, 1, 2].map((j) => cloVals.map((v, c) => v * mapping[c][j]));
  const raw = contrib.map((col) => col.reduce((a, b) => a + b, 0));
  const total = raw.reduce((a, b) => a + b, 0) || 1;
  const assignW = raw.map((w) => (w / total) * 100);

  const phase = P < 0.21 ? 1 : P < 0.43 ? 2 : P < 0.65 ? 3 : P < 0.87 ? 4 : 5;
  const phaseText = {
    1: 'Your course outcomes',
    2: 'How each outcome is assessed',
    3: 'Assignment weights emerge',
    4: 'Rubric composition within each assignment',
    5: 'Adjust any view, the others stay in sync',
  };

  const Arrow = ({ active }) => {
    const lit = active > 0.001;
    const stroke = lit ? 'var(--c-bright)' : 'var(--c-hairline-2)';
    return (
      <div className="pipe-connector">
        <svg width="30" height="16" viewBox="0 0 30 16" fill="none" aria-hidden="true">
          <line x1="2" y1="8" x2="25" y2="8" stroke={stroke} strokeWidth="1.5" />
          <path d="M21 4 L26 8 L21 12" stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {lit && active < 1 && <circle cx={2 + 23 * active} cy="8" r="2.6" fill="var(--c-bright)" />}
        </svg>
      </div>
    );
  };

  return (
    <div className="demo hero-demo">
      <div className="hero-demo-head">
        <div className="hero-demo-phase">
          <span className="mono hd-step">{String(phase === 5 ? 4 : phase).padStart(2, '0')}<i>/04</i></span>
          <b>{phaseText[phase]}</b>
        </div>
        <div className="hero-demo-legend mono">CLO weightings × mapping → assignments → rubric</div>
      </div>

      <div className="hero-pipeline">
        {/* 01 · CLO weightings */}
        <div className="pipe-panel" style={{ opacity: 0.3 + 0.7 * Math.min(1, s1 * 4) }}>
          <div className="pipe-panel-head">
            <span className="mono pipe-num">01</span>
            <span className="pipe-title">CLO weightings</span>
            <span className="mono pipe-kind is-input">input</span>
          </div>
          <div className="pipe-body">
            {cloVals.map((v, i) => (
              <div className="pw-row" key={i}>
                <span className="mono pw-key" style={{ color: colors[i] }}>{labels[i]}</span>
                <div className="pw-track">
                  <div className="pw-fill" style={{ width: `${(v / 40) * 100}%`, background: colors[i] }} />
                </div>
                <span className="mono pw-val">{Math.round(v)}%</span>
              </div>
            ))}
          </div>
        </div>

        <Arrow active={s2} />

        {/* 02 · CLO mapping */}
        <div className="pipe-panel" style={{ opacity: 0.3 + 0.7 * Math.min(1, s2 * 4) }}>
          <div className="pipe-panel-head">
            <span className="mono pipe-num">02</span>
            <span className="pipe-title">CLO mapping</span>
            <span className="mono pipe-kind is-input">input</span>
          </div>
          <div className="pm-grid">
            <div className="pm-corner" />
            {assigns.map((a, i) => <div className="mono pm-col" key={i}>A{i + 1}</div>)}
            {mapping.map((row, r) => (
              <React.Fragment key={r}>
                <div className="mono pm-rowkey" style={{ color: colors[r] }}>{labels[r]}</div>
                {row.map((val, c) => {
                  const rev = seg(P, 0, 1, 0.22 + (r * 3 + c) * 0.011, 0.40 + (r * 3 + c) * 0.006, ease.outCubic);
                  const strong = val > 0.4 && rev > 0.5;
                  return (
                    <div className="pm-cell" key={c}
                      style={{
                        background: `rgba(${hexRgb(colors[r])}, ${val * rev * 0.85})`,
                        borderColor: strong ? colors[r] : 'transparent',
                      }}>
                      <span style={{ opacity: rev }}>{val > 0 ? val.toFixed(2) : '–'}</span>
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>

        <Arrow active={s3} />

        {/* 03 · Assignment weights */}
        <div className="pipe-panel" style={{ opacity: 0.3 + 0.7 * Math.min(1, s3 * 4) }}>
          <div className="pipe-panel-head">
            <span className="mono pipe-num">03</span>
            <span className="pipe-title">Assignment weights</span>
            <span className="mono pipe-kind is-derived">derived</span>
          </div>
          <div className="pipe-body">
            {assigns.map((n, i) => {
              const rev = seg(P, 0, 1, 0.44 + i * 0.05, 0.64 + i * 0.04, ease.outCubic);
              return (
                <div className="aw-row" key={i} style={{ opacity: 0.2 + 0.8 * Math.min(1, rev * 3) }}>
                  <div className="aw-head">
                    <span className="mono aw-id">A{i + 1}</span>
                    <span className="aw-name">{n}</span>
                    <span className="mono aw-val">{Math.round(assignW[i] * rev)}<span className="pct">%</span></span>
                  </div>
                  <div className="aw-bar">
                    {[0, 1, 2, 3].map((c) => {
                      const portion = raw[i] > 0 ? contrib[i][c] / raw[i] : 0;
                      return <div key={c} style={{ width: `${portion * 100 * rev}%`, background: colors[c] }} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Arrow active={s4} />

        {/* 04 · Rubric composition */}
        <div className="pipe-panel pipe-panel-wide" style={{ opacity: 0.3 + 0.7 * Math.min(1, s4 * 4) }}>
          <div className="pipe-panel-head">
            <span className="mono pipe-num">04</span>
            <span className="pipe-title">Rubric composition</span>
            <span className="mono pipe-kind is-derived">derived</span>
          </div>
          <div className="pipe-body rc-body">
            {assigns.map((n, i) => {
              const rev = seg(P, 0, 1, 0.66 + i * 0.05, 0.86 + i * 0.03, ease.outCubic);
              return (
                <div className="rc-block" key={i} style={{ opacity: 0.2 + 0.8 * Math.min(1, rev * 3) }}>
                  <div className="rc-head mono">A{i + 1} · {n}</div>
                  <div className="rc-bar">
                    {[0, 1, 2, 3].map((c) => {
                      const portion = raw[i] > 0 ? contrib[i][c] / raw[i] : 0;
                      if (portion < 0.001) return null;
                      return (
                        <div className="rc-seg" key={c} style={{ width: `${portion * 100 * rev}%`, background: colors[c] }}>
                          {portion > 0.14 && <span className="rc-pct">{Math.round(portion * 100)}</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className="rc-legend">
              {labels.map((l, i) => (
                <span className="mono rc-leg" key={i}><i style={{ background: colors[i] }} />{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Iteration / return loop */}
      <div className="hero-loop" style={{ opacity: 0.28 + 0.72 * Math.min(1, loop * 1.6) }}>
        <span className="hero-loop-icon" aria-hidden="true">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M3.5 8.5a5 5 0 1 1 1.4 3.5" stroke="var(--c-purple)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            <path d="M2.1 11.6 L4.9 12.6 L5.4 9.6" stroke="var(--c-purple)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="hero-loop-track">
          <div className="hero-loop-dot" style={{ left: `${100 - (loop < 1 ? loop : 1) * 100}%`, opacity: loop > 0 && loop < 1 ? 1 : 0 }} />
        </div>
        <span className="mono hero-loop-label">{phaseText[5]}</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// StreamADemo, CLO weightings + mapping → assignment weights
// Slightly more detailed than hero: shows a knob being turned
// ─────────────────────────────────────────────────────────────
function StreamADemo({ progress, playing }) {
  // Canonical base: CLO1=30 CLO2=30 CLO3=20 CLO4=20
  // Animation shows the user lifting CLO1 from 30 → 40 (absorbing from CLO2)
  // Phase 1 (0-0.30): CLO1 slider drags from 30 → 40, CLO2 drops 30 → 20
  // Phase 2 (0.30-0.55): mapping matrix cells highlight
  // Phase 3 (0.55-1.0):  assignment weights recompute
  const clo1 = seg(progress, 30, 40, 0.08, 0.30, ease.inOutCubic);
  const clo2 = seg(progress, 30, 20, 0.08, 0.30, ease.inOutCubic);
  const clo3 = seg(progress, 20, 20, 0.08, 0.30, ease.inOutCubic);
  const clo4 = seg(progress, 20, 20, 0.08, 0.30, ease.inOutCubic);
  const cloVals = [clo1, clo2, clo3, clo4];
  const labels = ['CLO1', 'CLO2', 'CLO3', 'CLO4'];
  const colors = ['#140F50', '#1448FF', '#836BFF', '#3B2FAA'];

  // Canonical mapping (shown as decimals, matches the screenshots' raw 50/100/0 etc.)
  const mapping = [
    [0.333, 0.667, 0],       // CLO1  (zero on A3)
    [0.158, 0.316, 0.526],   // CLO2
    [0.333, 0.333, 0.334],   // CLO3
    [0.118, 0.294, 0.588],   // CLO4
  ];

  const rawW = [0,1,2].map(a => cloVals.reduce((s,v,c) => s + v * mapping[c][a], 0));
  const total = rawW.reduce((a,b)=>a+b, 0) || 1;
  const aw = rawW.map(w => (w/total)*100);

  const pulseP = seg(progress, 0, 1, 0.08, 0.30, ease.inOutCubic);
  // Matrix reveal (phase 2): cells brighten in sequence
  const matrixP = seg(progress, 0, 1, 0.30, 0.55, ease.outCubic);
  const step = progress < 0.30 ? 1 : progress < 0.55 ? 2 : 3;

  return (
    <div className="demo stream-demo">
      <div className="demo-step-label mono">
        {step === 1 ? '01 · Adjust CLO1 weighting' :
         step === 2 ? '02 · Apply mapping, how much each CLO is assessed by each assignment' :
         '03 · Assignment weights follow from CLO × mapping'}
      </div>

      <div className="stream-grid-3col">
        {/* LEFT: CLO column */}
        <div className="stream-col">
          <div className="eyebrow">Course Learning Outcomes</div>
          {cloVals.map((v, i) => (
            <div className={`clo-row ${i === 0 ? 'is-active' : ''}`} key={i}>
              <span className="mono clo-key" style={{ color: colors[i] }}>{labels[i]}</span>
              <div className="clo-bar-track">
                <div className="clo-bar-fill" style={{
                  width: `${(v / 50) * 100}%`,
                  background: colors[i],
                  boxShadow: i === 0 ? `0 0 0 ${pulseP * 3}px rgba(20,15,80,${0.15 - pulseP * 0.12})` : 'none',
                }} />
                {i === 0 && (
                  <div className="clo-handle" style={{ left: `${(v/50)*100}%` }}>
                    <div className="clo-handle-dot" />
                    {progress > 0.08 && progress < 0.32 && <div className="clo-handle-tooltip mono">{Math.round(v)}%</div>}
                  </div>
                )}
              </div>
              <span className="mono clo-value">{Math.round(v)}%</span>
            </div>
          ))}
        </div>

        {/* MIDDLE: mapping matrix */}
        <div className="stream-col stream-matrix">
          <div className="eyebrow">Mapping × how each CLO is assessed</div>
          <div className="matrix-table">
            <div className="matrix-head">
              <div className="matrix-corner" />
              <div className="mono matrix-col-head">A1</div>
              <div className="mono matrix-col-head">A2</div>
              <div className="mono matrix-col-head">A3</div>
            </div>
            {mapping.map((row, r) => (
              <div className="matrix-row" key={r}>
                <div className="mono matrix-row-head" style={{ color: colors[r] }}>{labels[r]}</div>
                {row.map((val, c) => {
                  const active = step >= 2;
                  const cellReveal = seg(progress, 0, 1, 0.30 + (r * 3 + c) * 0.015, 0.42 + (r * 3 + c) * 0.015, ease.outCubic);
                  const intensity = val;
                  return (
                    <div className="matrix-cell" key={c}
                      style={{
                        background: `rgba(${hexRgb(colors[r])}, ${active ? intensity * cellReveal * 0.9 : intensity * 0.15})`,
                        borderColor: active && intensity > 0.3 ? colors[r] : 'transparent',
                      }}
                    >
                      <span className="mono matrix-val" style={{ opacity: cellReveal }}>
                        {val.toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="matrix-caption mono">
            CLO weight × row of mapping = contribution to each assignment
          </div>
        </div>

        {/* RIGHT: derived assignment weights */}
        <div className="stream-col">
          <div className="eyebrow">Resulting assignment weights</div>
          {['Literature essay', 'Group project', 'Final exam'].map((n, i) => {
            const w = aw[i] || 0;
            const appear = seg(progress, 0, 1, 0.55 + i * 0.08, 0.75 + i * 0.08, ease.outCubic);
            return (
              <div className="assign-big" key={i} style={{ opacity: appear, transform: `translateY(${(1-appear)*8}px)` }}>
                <div className="assign-big-head">
                  <span className="mono assign-big-id">A{i+1}</span>
                  <span className="assign-big-name">{n}</span>
                  <span className="mono assign-big-weight">
                    {Math.round(w)}<span className="pct">%</span>
                  </span>
                </div>
                <div className="assign-big-bar">
                  {[0,1,2,3].map(c => {
                    const portion = rawW[i] > 0 ? (cloVals[c] * mapping[c][i]) / rawW[i] : 0;
                    return <div key={c} style={{ width: `${portion * 100}%`, background: colors[c] }} />;
                  })}
                </div>
                <div className="assign-big-legend mono">
                  {[0,1,2,3].filter(c => (cloVals[c] * mapping[c][i]) / (rawW[i] || 1) > 0.05).map(c => (
                    <span key={c} style={{ color: colors[c] }}>■ {labels[c]}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// tiny helper: hex → "r, g, b"
function hexRgb(hex) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0,2), 16);
  const g = parseInt(h.slice(2,4), 16);
  const b = parseInt(h.slice(4,6), 16);
  return `${r}, ${g}, ${b}`;
}

// ─────────────────────────────────────────────────────────────
// StreamBDemo, assignments + criteria → derived CLO weights
// ─────────────────────────────────────────────────────────────
function StreamBDemo({ progress, playing }) {
  // Phase 1: criteria cards appear
  // Phase 2: lines connect criteria → CLO buckets
  // Phase 3: CLO totals animate up

  const criteria = [
    // A1 · Literature essay (30% of grade), 3 criteria
    { id: 'C1.1', label: 'Argument structure', marks: 40, clo: 0, assign: 'A1' },
    { id: 'C1.2', label: 'Source quality & evidence', marks: 35, clo: 1, assign: 'A1' },
    { id: 'C1.3', label: 'Synthesis of viewpoints', marks: 25, clo: 2, assign: 'A1' },

    // A2 · Group project (30% of grade), 3 criteria
    { id: 'C2.1', label: 'Analytical depth', marks: 35, clo: 1, assign: 'A2' },
    { id: 'C2.2', label: 'Artefact design & synthesis', marks: 35, clo: 2, assign: 'A2' },
    { id: 'C2.3', label: 'Applied method & teamwork', marks: 30, clo: 3, assign: 'A2' },

    // A3 · Final exam (40% of grade), all FOUR CLOs represented
    { id: 'C3.1', label: 'Critical argument (short answer)', marks: 25, clo: 0, assign: 'A3' },
    { id: 'C3.2', label: 'Evidence analysis', marks: 25, clo: 1, assign: 'A3' },
    { id: 'C3.3', label: 'Synthesis across topics', marks: 20, clo: 2, assign: 'A3' },
    { id: 'C3.4', label: 'Applied problem-solving', marks: 30, clo: 3, assign: 'A3' },
  ];
  // Assignment weights (input by user): A1=30, A2=30, A3=40
  const assignW = { A1: 30, A2: 30, A3: 40 };
  const colors = ['#140F50', '#1448FF', '#836BFF', '#3B2FAA'];
  const labels = ['CLO1', 'CLO2', 'CLO3', 'CLO4'];

  // Compute CLO totals
  const cloTotals = [0,0,0,0];
  criteria.forEach(c => {
    const assignTotal = criteria.filter(x => x.assign === c.assign).reduce((s,x)=>s+x.marks,0);
    const criterionShare = c.marks / assignTotal;
    const contrib = criterionShare * assignW[c.assign];
    cloTotals[c.clo] += contrib;
  });

  return (
    <div className="demo streamb-demo">
      <div className="demo-step-label mono">
        {progress < 0.35 ? '01 · Your criteria, mapped to CLOs' :
         progress < 0.7 ? '02 · Marks flow through assignment weights' :
         '03 · CLO distribution emerges'}
      </div>

      <div className="streamb-grid">
        {/* LEFT: criteria grouped by assignment */}
        <div className="streamb-criteria">
          {['A1', 'A2', 'A3'].map((aid, ai) => {
            const assignTotal = criteria.filter(c => c.assign === aid).reduce((s,c)=>s+c.marks, 0);
            return (
              <div className="criteria-group" key={aid}>
                <div className="criteria-group-head">
                  <span className="mono criteria-assign">{aid}</span>
                  <span className="criteria-assign-name">
                    {aid === 'A1' ? 'Essay' : aid === 'A2' ? 'Project' : 'Exam'}
                  </span>
                  <span className="mono criteria-assign-w">{assignW[aid]}%</span>
                </div>
                {criteria.filter(c => c.assign === aid).map((c, ci) => {
                  const idx = criteria.indexOf(c);
                  const appear = seg(progress, 0, 1, 0.02 + idx * 0.04, 0.15 + idx * 0.04, ease.outCubic);
                  return (
                    <div className="criterion-row" key={c.id} style={{ opacity: appear, transform: `translateX(${(1-appear)*-8}px)` }}>
                      <span className="mono criterion-id" style={{ color: colors[c.clo] }}>{c.id}</span>
                      <span className="criterion-label">{c.label}</span>
                      <span className="mono criterion-marks">{c.marks}</span>
                      <span className="mono criterion-clo" style={{ background: colors[c.clo] + '20', color: colors[c.clo] }}>
                        → {labels[c.clo]}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* RIGHT: emerging CLO totals */}
        <div className="streamb-output">
          <div className="eyebrow">Implied CLO distribution</div>
          {cloTotals.map((v, i) => {
            const appear = seg(progress, 0, v, 0.55 + i * 0.08, 0.8 + i * 0.08, ease.outCubic);
            const finalAppear = seg(progress, 0, 1, 0.55 + i * 0.08, 0.7 + i * 0.08, ease.outCubic);
            return (
              <div className="clo-output-row" key={i} style={{ opacity: finalAppear }}>
                <div className="clo-output-head">
                  <span className="mono clo-output-key" style={{ color: colors[i] }}>{labels[i]}</span>
                  <span className="mono clo-output-val">{Math.round(appear)}%</span>
                </div>
                <div className="clo-output-bar">
                  <div style={{ width: `${(appear / 40) * 100}%`, background: colors[i] }} />
                </div>
              </div>
            );
          })}
          <div className="clo-output-note mono">
            based on {criteria.length} criteria across 3 assignments
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// IterationDemo, shows the loop: input → output → reflect → adjust
// ─────────────────────────────────────────────────────────────
const colorCLO1 = '#140F50';

// ─────────────────────────────────────────────────────────────
// MappingDemo, the CLO↔Assignment influence matrix visualizer
// A clean grid where dots pulse, connections light up
// ─────────────────────────────────────────────────────────────
function MappingDemo({ progress, playing }) {
  const clos = ['CLO1 · Argue critically', 'CLO2 · Analyse evidence', 'CLO3 · Synthesise ideas', 'CLO4 · Apply methods'];
  const assigns = ['A1 Essay', 'A2 Project', 'A3 Exam'];
  // Canonical mapping, matches Stream A and Hero demos.
  // CLO1 is not mapped to A3 (visible absence).
  const m = [
    [0.33, 0.67, 0],
    [0.16, 0.32, 0.53],
    [0.33, 0.33, 0.34],
    [0.12, 0.29, 0.59],
  ];

  return (
    <div className="demo map-demo">
      <div className="map-grid">
        {/* Column headers */}
        <div />
        {assigns.map(a => <div key={a} className="mono map-col-head">{a}</div>)}

        {/* Rows */}
        {clos.map((clo, r) => (
          <React.Fragment key={clo}>
            <div className="map-row-head">
              <span className="mono map-row-key">CLO{r+1}</span>
              <span className="map-row-label">{clo.replace(/^CLO\d · /, '')}</span>
            </div>
            {assigns.map((a, c) => {
              const idx = r * 3 + c;
              const appear = seg(progress, 0, 1, 0.08 + idx * 0.05, 0.18 + idx * 0.05, ease.outCubic);
              const intensity = m[r][c];
              const size = 20 + intensity * 40;
              return (
                <div key={a} className="map-cell" style={{ opacity: appear }}>
                  <div className="map-dot" style={{
                    width: size * appear,
                    height: size * appear,
                    background: intensity > 0.5
                      ? `rgba(139, 107, 255, ${0.35 + intensity * 0.65})`
                      : `rgba(139, 107, 255, ${0.15 + intensity * 0.55})`,
                    border: intensity === 0 ? '1.5px solid rgba(139,107,255,0.18)' : 'none',
                    borderRadius: '50%',
                  }} />
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <div className="map-legend">
        <span className="eyebrow">Influence of each CLO on each assignment · 0 none, 1 strong</span>
      </div>
    </div>
  );
}

Object.assign(window, { HeroDemo, StreamADemo, StreamBDemo, MappingDemo });
