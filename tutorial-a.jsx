/* Pathway A · "Learn to use the tool" tutorial, renderer.
   Reads window.TUTORIAL_A (content) and window.QBANK (facilitation prompts).
   Exports window.TutorialA.                                                   */
(function () {
  const STORE = 'cat-tutorial-a-v1';

  function loadState() {
    try { const r = JSON.parse(localStorage.getItem(STORE)); if (r && typeof r.done === 'number') return r; } catch (e) {}
    return { done: 0, values: {} };
  }

  function flatten(T) {
    const items = []; let bi = 0;
    function blocks(list) { list.forEach((b) => { items.push({ kind: 'block', b: b, i: bi }); bi += 1; }); }
    T.examples.forEach((ex) => {
      items.push({ kind: 'sechead', sec: ex, i: bi });
      ex.iterations.forEach((it) => { items.push({ kind: 'iterhead', it: it, i: bi }); blocks(it.blocks); });
    });
    items.push({ kind: 'sechead', sec: T.bonus, i: bi });
    blocks(T.bonus.blocks);
    items.push({ kind: 'closing', i: bi });
    return { items: items, total: bi };
  }

  function Figures({ f }) {
    if (!f) return null;
    return (
      <div className="ta-fig">
        {f.title && <div className="ta-fig-t">{f.title}</div>}
        <table className="ta-tbl">
          <thead><tr>{f.cols.map((c, i) => <th key={i}>{c}</th>)}</tr></thead>
          <tbody>
            {f.rows.map((r, i) => {
              const cells = Array.isArray(r) ? r : r.c;
              const cls = (!Array.isArray(r) && r.k) ? 'ta-' + r.k : '';
              return <tr key={i} className={cls}>{cells.map((c, j) => <td key={j}>{c}</td>)}</tr>;
            })}
            {f.totals && <tr className="ta-total"><td>Assignment total</td>{f.totals.map((c, j) => <td key={j}>{c}</td>)}</tr>}
          </tbody>
        </table>
        {f.flag && <p className="ta-flag">{f.flag}</p>}
        {f.note && <p className="ta-fig-note">{f.note}</p>}
      </div>
    );
  }

  function Para({ body }) {
    if (!body) return null;
    return <>{body.map((p, i) => <p key={i}>{p}</p>)}</>;
  }

  function EntryBlock({ b, live, onPass }) {
    const derive = !!b.derive;
    const [shown, setShown] = React.useState(!derive);
    React.useEffect(() => { if (!live) setShown(true); }, [live]);
    const cols = b.columns;
    const chips = [];
    b.groups.forEach((g) => g.inputs.forEach((f, fi) => {
      const lab = [g.label, f.label || (cols ? cols[fi] : '')].filter(Boolean).join(' · ');
      chips.push({ id: f.id, lab: lab, v: f.expect });
    }));
    return (
      <div className={'ta-b ta-entry' + (live ? '' : ' is-past')}>
        <span className="ta-b-tag">{b.tab} · {derive ? 'you work this out' : 'do this in the tool'}</span>
        <h4 className="ta-b-title">{b.title}</h4>
        <Para body={b.body} />
        {shown && (
          <div className="ta-script">
            <span className="ta-script-k">In your own tab, set:</span>
            <div className="ta-chips">
              {chips.map((c) => (
                <span className="ta-chip" key={c.id}><span className="ta-chip-l">{c.lab}</span><span className="ta-chip-v">{c.v}{b.unit || ''}</span></span>
              ))}
            </div>
          </div>
        )}
        {live && !shown && (
          <>
            <p className="ta-probe-hint">Work out the move the readiness figures point to before you look. Then reveal the figures and enter them in your own tab.</p>
            <div className="ta-act"><button className="ta-btn is-ghost" onClick={() => setShown(true)}>Reveal the figures</button></div>
          </>
        )}
        {live && shown && (
          <div className="ta-act">
            <button className="ta-btn" onClick={onPass}>Done, what's next?</button>
            <span className="ta-act-note">Enter these in {b.tab} in your own tab, then continue to see the state you should be looking at.</span>
          </div>
        )}
      </div>
    );
  }

  function ProbeBlock({ b, live, onPass }) {
    const [shown, setShown] = React.useState(!live);
    const qb = (window.QBANK && window.QBANK.byId && window.QBANK.byId[b.qb]) || null;
    const principle = qb && qb.principle && window.QBANK.principleById ? window.QBANK.principleById[qb.principle] : null;
    React.useEffect(() => { if (!live) setShown(true); }, [live]);
    return (
      <div className="ta-b ta-probe">
        <span className="ta-b-tag">Stop and diagnose</span>
        <p className="ta-probe-q">{b.question}</p>
        {!shown && <p className="ta-probe-hint">There is nothing to submit and no right answer to score. Work out what you would ask, then reveal the question a learning designer would actually use here.</p>}
        {!shown && (
          <div className="ta-act">
            <button className="ta-btn is-ghost" onClick={() => setShown(true)}>Reveal the question an LD would ask</button>
          </div>
        )}
        {shown && qb && (
          <div className="ta-qb">
            <span className="ta-qb-k">What a learning designer asks here</span>
            <p className="ta-qb-p">“{qb.prompt}”</p>
            <p className="ta-qb-why"><b>Why here.</b> {b.why}</p>
            {qb.response && <p className="ta-qb-why" style={{ marginTop: 8 }}><b>What it usually produces.</b> {qb.response}</p>}
            {principle && <span className="ta-qb-chip">{principle.label}</span>}
          </div>
        )}
        {shown && !qb && (
          <div className="ta-qb"><p className="ta-qb-why">{b.why}</p></div>
        )}
        {live && shown && (
          <div className="ta-act"><button className="ta-btn" onClick={onPass}>OK, what's next?</button></div>
        )}
      </div>
    );
  }

  function Block({ b, live, values, setValue, onPass }) {
    if (b.k === 'entry') return <EntryBlock b={b} live={live} onPass={onPass} />;
    if (b.k === 'probe') return <ProbeBlock b={b} live={live} onPass={onPass} />;
    if (b.k === 'brief') return (
      <div className="ta-b">
        {b.title && <h4 className="ta-b-title">{b.title}</h4>}
        <Para body={b.body} />
        <Figures f={b.figures} />
      </div>
    );
    if (b.k === 'result') return (
      <div className="ta-b">
        <span className="ta-b-tag">{b.tab} · what the tool shows</span>
        {b.shot && <div className="ta-shot"><img src={b.shot} alt={b.alt || ''} /></div>}
        {b.readout && <Figures f={b.readout} />}
        {b.headline && (
          <div className="ta-headline">
            <span className="ta-headline-l">{b.headline.label}</span>
            <span className="ta-headline-v">{b.headline.value}</span>
            <span className="ta-headline-n">{b.headline.note}</span>
          </div>
        )}
        {b.cap && <p className="ta-cap">{b.cap}</p>}
        {b.caveat && <p className="ta-caveat">{b.caveat}</p>}
      </div>
    );
    return (
      <div className="ta-b">
        {b.title && <h4 className="ta-b-title">{b.title}</h4>}
        <Para body={b.body} />
        {b.principle && (
          <div className="ta-principle">
            <span className="ta-principle-n">Principle · {b.principle.name}</span>
            <p className="ta-principle-t">{b.principle.text}</p>
          </div>
        )}
      </div>
    );
  }

  function Closing({ c }) {
    return (
      <div className="ta-sec">
        <span className="ta-sec-eyebrow">{c.eyebrow}</span>
        <h3 className="ta-sec-title">{c.title}</h3>
        <p className="ta-sec-blurb">{c.blurb}</p>
        <div className="ta-close-grid">
          {c.groups.map((g, i) => (
            <div className="ta-close-item" key={i}>
              <span className="ta-close-l">{g.label}</span>
              <p className="ta-close-t">{g.text}</p>
            </div>
          ))}
        </div>
        <div className="ta-coda">
          <h4 className="ta-coda-t">{c.coda.title}</h4>
          {c.coda.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    );
  }

  function TutorialA() {
    const T = window.TUTORIAL_A;
    const flat = React.useMemo(() => flatten(T), [T]);
    const gates = React.useMemo(() => flat.items.filter((x) => x.kind === 'block' && (x.b.k === 'entry' || x.b.k === 'probe')).map((x) => x.i), [flat]);
    const [st, setSt] = React.useState(loadState);

    React.useEffect(() => { try { localStorage.setItem(STORE, JSON.stringify(st)); } catch (e) {} }, [st]);

    const done = Math.min(st.done, gates.length);
    const limit = done < gates.length ? gates[done] : Infinity;
    const setValue = React.useCallback((id, v) => setSt((s) => ({ done: s.done, values: Object.assign({}, s.values, { [id]: v }) })), []);
    const pass = React.useCallback(() => setSt((s) => ({ done: s.done + 1, values: s.values })), []);
    const pct = gates.length ? Math.round((done / gates.length) * 100) : 0;

    return (
      <div className="ta">
        <p className="ta-lede">This is the tool, worked through properly. You open Pathway A in your own tab, enter the figures each step hands you, and then reveal the capture of what you should be seeing. <strong>Doing it in the real tool is the labour that produces the insight</strong>, the same reason the Teaching Readiness Mapping Template only works when you build the sequence yourself rather than reading a finished one.</p>
        <p className="ta-lede">It is deliberately slower than a demo. The slowness is where the learning is.</p>
        <div className="ta-open">
          <div>
            <span className="ta-open-k">Before you start</span>
            <p className="ta-open-t">Open Pathway A in a new tab and keep it beside this page. Every step gives you figures to enter there, then reveals the state your own screen should be in.</p>
          </div>
          <a className="ta-btn" href="https://mediaproduction.adelaide.edu.au/pace-interactives/#/clos" target="_blank" rel="noopener">Open Pathway A ↗</a>
        </div>
        <div className="ta-how">
          <div className="ta-how-item"><span className="ta-how-n">1 · Context</span><span className="ta-how-t">You are given the figures</span><span className="ta-how-d">A short course brief and the exact numbers for that step.</span></div>
          <div className="ta-how-item"><span className="ta-how-n">2 · Entry</span><span className="ta-how-t">You enter them in the tool</span><span className="ta-how-d">In your own tab, in the tab of the tool the step names.</span></div>
          <div className="ta-how-item"><span className="ta-how-n">3 · Check</span><span className="ta-how-t">The capture is revealed</span><span className="ta-how-d">Compare your screen against the real state, so you know you are on track.</span></div>
          <div className="ta-how-item"><span className="ta-how-n">4 · Diagnose</span><span className="ta-how-t">You work out the question</span><span className="ta-how-d">Then reveal the one a learning designer would actually ask, and why.</span></div>
        </div>
        <div className="ta-progress">
          <span className="ta-progress-txt">{done} of {gates.length} steps</span>
          <span className="ta-progress-bar"><span className="ta-progress-fill" style={{ width: pct + '%' }}></span></span>
          {done > 0 && <button className="ta-reset" onClick={() => { if (window.confirm('Clear your progress and start the tutorial again?')) setSt({ done: 0, values: {} }); }}>Start again</button>}
        </div>

        {flat.items.map((it, idx) => {
          if (it.i > limit) return null;
          if (it.kind === 'sechead') return (
            <div className="ta-sec" key={idx}>
              <span className="ta-sec-eyebrow">{it.sec.eyebrow}</span>
              <h3 className="ta-sec-title">{it.sec.title}</h3>
              <p className="ta-sec-disc">{it.sec.discipline}</p>
              <p className="ta-sec-blurb">{it.sec.blurb}</p>
            </div>
          );
          if (it.kind === 'iterhead') return (
            <div className="ta-iter" key={idx}>
              <div className="ta-iter-head">
                <span className="ta-iter-n">Iteration {it.it.n}</span>
                <h4 className="ta-iter-t">{it.it.title}</h4>
              </div>
              <p className="ta-iter-aim">{it.it.aim}</p>
            </div>
          );
          if (it.kind === 'closing') return <Closing c={T.closing} key={idx} />;
          return (
            <div className="ta-blocks" key={idx} style={{ marginTop: 16 }}>
              <Block b={it.b} live={it.i === limit} values={st.values} setValue={setValue} onPass={pass} />
            </div>
          );
        })}
      </div>
    );
  }

  window.TutorialA = TutorialA;
})();
