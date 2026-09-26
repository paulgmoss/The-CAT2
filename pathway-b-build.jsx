/* Pathway B · conceptual build: assignment weights → criteria → contribution → implied weighting, then Conservation of Alignment.
   Reuses PabSeg / PabAxis / PabStep and pathway-a-build.css. */
const PBB_RUBRICS = [
  { a: 'A1', w: 20, crit: [{ clo: 1, v: 50 }, { clo: 2, v: 50 }] },
  { a: 'A2', w: 40, crit: [{ clo: 1, v: 25 }, { clo: 2, v: 25 }, { clo: 3, v: 50 }] },
  { a: 'A3', w: 40, crit: [{ clo: 2, v: 30 }, { clo: 3, v: 40 }, { clo: 4, v: 30 }] },
];
const pbbTone = (clo) => (clo === 2 ? 'main' : 'soft');

function PbbWeights() {
  const segs = PBB_RUBRICS.map(r => ({ v: r.w, l: `${r.a} · ${r.w}%`, t: 'main' }));
  return (
    <>
      <span className="pab-cap">Course grade · 100%</span>
      <PabSeg segs={segs} />
      <p className="pab-foot">Three assignments. Everything that follows is a share of one of these.</p>
    </>
  );
}

function PbbCriteria() {
  const [i, setI] = React.useState(1);
  const r = PBB_RUBRICS[i];
  const segs = r.crit.map((c, k) => ({ v: c.v, l: `${c.v}%`, t: pbbTone(c.clo) }));
  return (
    <>
      <div className="pab-tog" role="tablist">
        {PBB_RUBRICS.map((x, k) => <button key={k} type="button" role="tab" aria-selected={i === k} className={i === k ? 'is-on' : ''} onClick={() => setI(k)}>{`${x.a} rubric`}</button>)}
      </div>
      <span className="pab-cap" style={{ marginTop: 16 }}>{`${r.a} rubric · criteria as a share of its marks`}</span>
      <PabSeg segs={segs} />
      <PabAxis segs={segs} names={r.crit.map((c, k) => `Crit ${k + 1} · CLO ${c.clo}`)} />
      <p className="pab-foot">Each criterion is tagged to the CLO it assesses. CLO 2’s criteria are shown in violet throughout.</p>
    </>
  );
}

function PbbContribution() {
  const segs = [];
  const names = [];
  PBB_RUBRICS.forEach(r => r.crit.forEach(c => {
    const v = (c.v * r.w) / 100;
    segs.push({ v, l: `${v}`, t: pbbTone(c.clo) });
    names.push(`C${c.clo}`);
  }));
  return (
    <>
      <div className="pab-inputs" style={{ marginTop: 0 }}>
        <span className="pab-in">A2 Crit 2 · CLO 2<b>25%</b></span>
        <span className="pab-in">× A2<b>40%</b></span>
        <span className="pab-in">=<b>10%</b></span>
        <span className="pab-sum">of the course grade</span>
      </div>
      <div className="pab-arrow">every criterion, the same way</div>
      <span className="pab-cap">Course grade · 100%, by criterion</span>
      <PabSeg segs={segs} />
      <PabAxis segs={segs} names={names} />
      <div className="pab-axis" style={{ marginTop: 8 }}>
        {PBB_RUBRICS.map(r => <span key={r.a} style={{ flexGrow: r.w, borderTop: '1px solid var(--c-hairline-2)', paddingTop: 4 }}>{r.a}</span>)}
      </div>
    </>
  );
}

function PbbImplied() {
  const implied = [{ v: 20, l: '20' }, { v: 32, l: '32', t: 'main' }, { v: 36, l: '36' }, { v: 12, l: '12', t: 'down' }];
  const intended = [{ v: 20, l: '20' }, { v: 30, l: '30', t: 'main' }, { v: 30, l: '30' }, { v: 20, l: '20' }];
  const n = ['CLO 1', 'CLO 2', 'CLO 3', 'CLO 4'];
  return (
    <>
      <span className="pab-cap">Implied · what the rubrics deliver</span>
      <PabSeg segs={implied} />
      <PabAxis segs={implied} names={n} />
      <div className="pab-arrow">set beside</div>
      <span className="pab-cap">Intended · what you meant the course to weigh</span>
      <PabSeg segs={intended} />
      <PabAxis segs={intended} names={n} />
      <p className="pab-foot">CLO 2 is 10 + 10 + 12 = 32%. CLO 4, meant to carry 20%, is only assessed by one criterion in A3, so it lands at 12%.</p>
    </>
  );
}

const PBB_COA = [
  {
    k: 'Within a rubric', t: 'More marks here, fewer there',
    names: ['CLO 1', 'CLO 2', 'CLO 3'],
    before: [{ v: 25 }, { v: 25 }, { v: 50 }],
    after: [{ v: 25 }, { v: 35, t: 'up' }, { v: 40, t: 'down' }],
    p: <>Give CLO 2’s criterion more marks in the A2 rubric and another criterion in that rubric gives them up, because <em>the rubric’s marks are fixed.</em></>,
    sum: 'A2 rubric · 100% → 100%',
  },
  {
    k: 'Across assignments', t: 'Weight one up, another comes down',
    names: ['A1', 'A2', 'A3'],
    before: [{ v: 20 }, { v: 40 }, { v: 40 }],
    after: [{ v: 30, t: 'up' }, { v: 40 }, { v: 30, t: 'down' }],
    p: <>Raise A1’s weight and another assignment has to drop. <em>Every CLO in A1 gains and every CLO in A3 loses,</em> even though no criterion changed.</>,
    sum: 'Course grade · 100% → 100%',
  },
  {
    k: 'Retagging a criterion', t: 'Move it to one CLO, another loses it',
    names: ['CLO 1', 'CLO 2', 'CLO 3', 'CLO 4'],
    before: [{ v: 20 }, { v: 32 }, { v: 36 }, { v: 12 }],
    after: [{ v: 20 }, { v: 32 }, { v: 20, t: 'down' }, { v: 28, t: 'up' }],
    p: <>Retag A3’s CLO 3 criterion to CLO 4 and its 16% moves with it. <em>The criterion’s marks don’t change,</em> only which outcome they count towards.</>,
    sum: 'Implied weighting · 100% → 100%',
  },
];
function PbbConservation() {
  return (
    <section className="pab-coa" data-screen-label="Pathway B · Conservation of Alignment">
      <span className="pab-eyebrow">The idea underneath all four</span>
      <h2 className="pab-coa-h">Conservation of Alignment</h2>
      <p className="pab-coa-rule">Like energy, alignment here isn't created or destroyed, only moved. Change a mark, a weight or a tag and the difference has to reappear somewhere else in the implied weighting.</p>
      <div className="pab-coa-grid">
        {PBB_COA.map((c, i) => (
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

function PathwayBBuild() {
  return (
    <div className="pab">
      <div className="pab-intro">
        <h2 className="pab-h2">Four ideas, each resting on the one before</h2>
      </div>
      <PabStep pathway="B" n="01" name="Assignment weights" copy={<>
        <p>Each assignment’s weight is its share of the course grade, as it stands in the course outline.</p>
        <p className="pab-key">Pathway B starts here, from what students actually meet, rather than from what the outcomes were meant to carry.</p>
      </>}><PbbWeights /></PabStep>
      <PabStep pathway="B" n="02" name="Rubric criteria" copy={<>
        <p><strong>Each rubric divides its assignment’s marks between criteria,</strong> and each criterion is tagged to the CLO it assesses.</p>
        <p className="pab-key">A criterion’s share is a share of its own rubric, not yet of the course.</p>
      </>}><PbbCriteria /></PabStep>
      <PabStep pathway="B" n="03" name="Contribution" copy={<>
        <p><strong>A criterion’s contribution is its share of the rubric multiplied by the assignment’s weight.</strong> That turns it into a share of the whole course grade.</p>
        <p className="pab-key">A heavy criterion in a light assignment can contribute less than a light criterion in a heavy one.</p>
      </>}><PbbContribution /></PabStep>
      <PabStep pathway="B" n="04" name="The implied weighting" copy={<>
        <p>Add up every criterion tagged to a CLO and you have that CLO’s implied weighting: what the assessment actually says the course is about.</p>
        <p className="pab-key">Set it beside what you intended. Outcomes considered central may carry less or more than expected; that is the gap between how a course is described and how it is assessed.</p>
      </>}><PbbImplied /></PabStep>
      <PbbConservation />
    </div>
  );
}
Object.assign(window, { PathwayBBuild });
