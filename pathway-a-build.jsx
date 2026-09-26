/* Pathway A · conceptual build: weighting → readiness → demand → ceiling, then Conservation of Alignment. */
function PabSeg({ segs }) {
  const total = segs.reduce((a, s) => a + s.v, 0);
  return (
    <div className="pab-seg">
      {segs.map((s, i) => (
        <div key={i} className={'pab-s pab-s--' + (s.t || 'soft')} style={{ flexGrow: s.v }}>
          {s.v / total >= 0.08 && <span>{s.l != null ? s.l : s.v}{s.t === 'up' ? ' ▲' : s.t === 'down' ? ' ▼' : ''}</span>}
        </div>
      ))}
    </div>
  );
}
function PabAxis({ segs, names }) {
  return <div className="pab-axis">{segs.map((s, i) => <span key={i} style={{ flexGrow: s.v }}>{names[i]}</span>)}</div>;
}
function PabStep({ n, name, copy, children, pathway = 'A' }) {
  return (
    <section className="pab-step" data-screen-label={'Pathway ' + pathway + ' · ' + name}>
      <div className="pab-div"><span className="pab-num">{n}</span><h3 className="pab-name">{name}</h3><span className="pab-rule"></span></div>
      <div className="pab-grid"><div className="pab-copy">{copy}</div><div className="pab-vis">{children}</div></div>
    </section>
  );
}

function PabWeighting() {
  const w = [{ v: 20, l: 'CLO 1' }, { v: 30, l: 'CLO 2 · 30%', t: 'main' }, { v: 30, l: 'CLO 3' }, { v: 20, l: 'CLO 4' }];
  const a = [{ v: 20, l: 'other CLOs', t: 'hatch' }, { v: 30, l: 'traces to CLO 2', t: 'main' }, { v: 50, l: 'other CLOs', t: 'hatch' }];
  return (
    <>
      <span className="pab-cap">Course importance · CLO weightings</span>
      <PabSeg segs={w} />
      <div className="pab-guides"><i style={{ left: '20%' }}></i><i style={{ left: '50%' }}></i><span style={{ left: '35%' }}>same 30%</span></div>
      <span className="pab-cap">Course assessment · every mark across every assignment</span>
      <PabSeg segs={a} />
    </>
  );
}

const PAB_READY = [10, 25, 25, 40, 55, 70, 85, 100];
const PAB_DUE = { 4: 'A1', 6: 'A2', 8: 'A3' };
function PabReadiness() {
  return (
    <>
      <span className="pab-cap">CLO 2 · share taught by the end of each week</span>
      <div className="pab-cols">
        {PAB_READY.map((v, i) => (
          <div key={i} className="pab-col">
            <span className="pab-col-v">{v}%</span>
            <div className="pab-col-t"><div className="pab-col-f" style={{ height: v + '%' }}></div></div>
            <span className="pab-col-w">Wk {i + 1}</span>
            <span className="pab-col-a">{PAB_DUE[i + 1] || ''}</span>
          </div>
        ))}
      </div>
      <p className="pab-foot">Weeks 2 and 3 hold at 25%: a week with no new teaching leaves readiness where it was. It never drops back.</p>
    </>
  );
}

const PAB_METHODS = [
  { k: 'Direct', v: ['6', '9', '15'], u: '%', sum: '= 30%, the CLO’s weighting' },
  { k: 'Relative · out of 100', v: ['20', '30', '50'], u: '', sum: 'shares of the CLO, converted' },
  { k: 'Relative · 1 to 10', v: ['4', '6', '10'], u: '/10', sum: 'ratings, converted' },
];
function PabDemand() {
  const [m, setM] = React.useState(0);
  const cur = PAB_METHODS[m];
  const res = [{ v: 6, l: 'A1 · 6%', t: 'main' }, { v: 9, l: 'A2 · 9%', t: 'main' }, { v: 15, l: 'A3 · 15%', t: 'main' }];
  return (
    <>
      <div className="pab-tog" role="tablist">
        {PAB_METHODS.map((x, i) => <button key={i} type="button" role="tab" aria-selected={m === i} className={m === i ? 'is-on' : ''} onClick={() => setM(i)}>{x.k}</button>)}
      </div>
      <div className="pab-inputs">
        {cur.v.map((v, i) => <span key={i} className="pab-in">{`A${i + 1}`}<b>{`${v}${cur.u}`}</b></span>)}
        <span className="pab-sum">{cur.sum}</span>
      </div>
      <div className="pab-arrow">lands as</div>
      <span className="pab-cap">CLO 2’s 30%, distributed</span>
      <PabSeg segs={res} />
      <p className="pab-foot">Only Direct is entered as the course percentages themselves. The relative inputs are proportions the tool scales to the CLO’s 30%. The split underneath does not move.</p>
    </>
  );
}

function PabCeiling() {
  const Card = ({ bad, taught, need, h }) => (
    <div className="pab-card">
      <span className={'pab-tag pab-tag--' + (bad ? 'bad' : 'ok')}>{bad ? 'Flagged' : 'Within reach'}</span>
      <p className="pab-card-h">{h}</p>
      <div className="gapt"><i className={'gapt-fill' + (bad ? ' is-bad' : '')} style={{ width: taught + '%' }}></i><i className="gapt-mark" style={{ left: need + '%' }}></i></div>
      <div className="pab-legend">
        <span><i></i><em>{`Taught by Week 4: ${taught}%`}</em></span>
        <span><i className="m"></i><em>{`Demand needs: ${need}%`}</em></span>
      </div>
    </div>
  );
  return (
    <>
      <span className="pab-cap">CLO 2 at Assignment 1 · Week 4</span>
      <div className="pab-pair">
        <Card bad taught={40} need={70} h="Asking for more than has been taught" />
        <Card taught={40} need={35} h="Asking for what has been taught" />
      </div>
      <p className="pab-foot">To clear a flag, either move the bar (teach more before Week 4) or move the marker (ask less at Assignment 1).</p>
    </>
  );
}

const PAB_COA = [
  {
    k: 'In the mapping row', t: 'Raise it here, it falls there',
    names: ['A1', 'A2', 'A3'],
    before: [{ v: 6 }, { v: 9 }, { v: 15 }],
    after: [{ v: 12, t: 'up' }, { v: 9 }, { v: 9, t: 'down' }],
    p: <>Raise CLO 2’s demand at Assignment 1 and it has to come down somewhere else in the row, because <em>the row always sums to the CLO’s weighting.</em></>,
    sum: 'Row total · 30% → 30%',
  },
  {
    k: 'In the teaching sequence', t: 'Teach one earlier, another moves out',
    names: ['CLO 1', 'CLO 2', 'CLO 3'],
    before: [{ v: 40 }, { v: 30 }, { v: 30 }],
    after: [{ v: 40 }, { v: 45, t: 'up' }, { v: 15, t: 'down' }],
    p: <>Bring more of CLO 2 into Weeks 3–4 and it takes up teaching space there, so <em>another CLO has to shift out,</em> usually later. Readiness itself still only climbs: no week falls below the one before it.</>,
    sum: 'Weeks 3–4 teaching time · 100% → 100%',
  },
  {
    k: 'In the rubrics', t: 'Lower it in one rubric, it rises in another',
    names: ['A1 rubric', 'A2 rubric', 'A3 rubric'],
    before: [{ v: 30 }, { v: 30 }, { v: 40 }],
    after: [{ v: 20, t: 'down' }, { v: 30 }, { v: 50, t: 'up' }],
    p: <>Lower the emphasis on CLO 2’s criteria in one rubric and the difference can land in a different rubric, <em>leaving the other criteria in the first rubric untouched.</em> The CLO’s total across rubrics is fixed.</>,
    sum: 'CLO 2 across rubrics · 100% → 100%',
  },
];
function PabConservation() {
  return (
    <section className="pab-coa" data-screen-label="Pathway A · Conservation of Alignment">
      <span className="pab-eyebrow">The idea underneath all four</span>
      <h2 className="pab-coa-h">Conservation of Alignment</h2>
      <p className="pab-coa-rule">Like energy, alignment here isn't created or destroyed, only moved. Adjust one part and the difference has to reappear, or be deferred, somewhere else.</p>
      <div className="pab-coa-grid">
        {PAB_COA.map((c, i) => (
          <div key={i} className="pab-coa-card">
            <span className="pab-coa-k">{c.k}</span>
            <h4 className="pab-coa-t">{c.t}</h4>
            <div className="pab-ba">
              <span className="pab-ba-l">before</span><PabSeg segs={c.before} />
              <span></span><PabAxis segs={c.before} names={c.names} />
              <span className="pab-ba-l">after</span><PabSeg segs={c.after} />
            </div>
            <p className="pab-coa-p">{c.p}</p>
            <span className="pab-coa-sum">{c.sum}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PathwayABuild() {
  return (
    <div className="pab">
      <div className="pab-intro">
        <span className="pab-eyebrow">How Pathway A works</span>
        <h2 className="pab-h2">Four ideas, each resting on the one before</h2>
      </div>
      <PabStep n="01" name="CLO Weighting" copy={<>
        <p>A CLO’s weighting is its share of the course’s overall importance, set as a percentage.</p>
        <p className="pab-key">Everything downstream has to add up to it: a CLO weighted at 30% should account for 30% of the course’s assessment once it is distributed.</p>
      </>}><PabWeighting /></PabStep>
      <PabStep n="02" name="Teaching Readiness" copy={<>
        <p><strong>Readiness is how much of a CLO has been taught by a given point.</strong> It only accumulates. Once a level is reached, it cannot drop back.</p>
        <p className="pab-key">Knowing how much has been taught by a point is what determines what can honestly be asked of students at that point.</p>
      </>}><PabReadiness /></PabStep>
      <PabStep n="03" name="Demand" copy={<>
        <p><strong>Demand is how a CLO’s weighting is distributed across the assignments that assess it.</strong></p>
        <p><strong>Direct</strong> breaks the CLO’s weighting into the actual percentages each assignment carries. For a CLO weighted at 30%, the numbers entered add up to 30.</p>
        <p><strong>Relative Emphasis</strong> states how much each assignment matters compared with the others, as a ratio, a 1 to 10 rating, or a break-up of the CLO out of 100, and the tool converts it to percentages.</p>
      </>}><PabDemand /></PabStep>
      <PabStep n="04" name="The readiness ceiling" copy={<>
        <p>Demand at an assignment can never ask for more than has already been taught by that point.</p>
        <p className="pab-key">This is where weighting, readiness and demand meet: the weighting sets how much there is, demand places it, and readiness caps where it can go.</p>
      </>}><PabCeiling /></PabStep>
      <PabConservation />
    </div>
  );
}
Object.assign(window, { PathwayABuild, PabSeg, PabAxis, PabStep });
