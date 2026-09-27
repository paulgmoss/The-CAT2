/* Pathway-level context selector for the guide pages. Reads ?ctx=verifying|refining|designing */
const PC_CONTENT = {
  A: {
    verifying: {
      tab: 'I’m verifying',
      title: 'Verifying with Pathway A',
      text: [
        'Verifying with Pathway A tests the existing assessment and teaching sequence against what the course intended, showing where design and delivery have drifted apart.',
        'It suits cases where the intent is already clear.',
      ],
      need: ['The course’s CLOs', 'A rough sense of how much each one matters', 'The teaching schedule and assignment due weeks', 'The current assignment weights, to compare against'],
    },
    refining: {
      tab: 'I’m refining',
      title: 'Refining with Pathway A',
      text: [
        'Refining starts with verifying. Enter the course as it stands first, so you know what is there before deciding what to change.',
        'Pathway A suits refinement when the change is upstream, an input rather than an output. Change one and the rest re-derive, so you can see the consequences across the course before committing',
      ],
      need: ['Everything for verifying', 'The change you have in mind, or the question you want answered'],
    },
    designing: {
      tab: 'I’m designing new',
      title: 'Designing a new course with Pathway A',
      text: [
        'New design only runs through Pathway A. There is nothing yet to verify, and no finished rubrics for Pathway B to read from.',
        'Starting from outcomes means the assignment weights and rubric composition are built from intent rather than inherited, before a single brief is written.',
      ],
      need: ['Draft CLOs', 'A planned teaching sequence', 'The assignments expected, even roughly'],
    },
  },
  B: {
    verifying: {
      tab: 'I’m verifying',
      title: 'Verifying with Pathway B',
      text: [
        'Pathway B starts from what already exists: the assignments and rubric criteria students actually meet. From those it derives the CLO weighting they imply.',
        'It suits verification when the assessments are finished and you want a read of what they emphasise before bringing intent into it. Where the derived weighting surprises is where to look.',
      ],
      need: ['The assignments and their weights', 'Rubrics or marking guides with criteria you can tag to CLOs'],
    },
    refining: {
      tab: 'I’m refining',
      title: 'Refining with Pathway B',
      text: [
        'Refining starts with verifying. Enter the assignments and rubrics as they stand first, so you know what the course currently emphasises.',
        'Pathway B suits refinement when the change sits in the rubrics or criteria. Retag or reweight a criterion and watch the implied CLO weighting move.',
      ],
      need: ['Everything for verifying', 'The criteria or rubric changes you are considering'],
    },
  },
};

function PathwayContext({ pathway }) {
  const data = PC_CONTENT[pathway];
  const keys = Object.keys(data);
  const q = new URLSearchParams(location.search).get('ctx');
  const redirected = q === 'designing' && !data.designing;
  const [ctx, setCtx] = React.useState(keys.includes(q) ? q : 'verifying');
  const choose = (k) => {
    setCtx(k);
    const u = new URL(location.href);
    u.searchParams.set('ctx', k);
    history.replaceState(null, '', u);
  };
  const c = data[ctx];
  return (
    <section className={`pc is-${pathway.toLowerCase()}`} aria-label="Context">
      <div className="pc-head">
        <span className="pc-label">Context</span>
        <div className="pc-tabs" role="tablist">
          {keys.map((k) => (
            <button key={k} role="tab" aria-selected={ctx === k} className={`pc-tab ${ctx === k ? 'is-on' : ''}`} onClick={() => choose(k)}>{data[k].tab}</button>
          ))}
        </div>
      </div>
      {redirected && <p className="pc-redirect">New design runs through Pathway A only. <a href="stream-a-guide.html?ctx=designing">Go to How Pathway A works</a></p>}
      <div className="pc-body">
        <div className="pc-main">
          <h2 className="pc-title">{c.title}</h2>
          {c.text.map((t, i) => <p className="pc-text" key={i}>{t}</p>)}
        </div>
        <div className="pc-side">
          <span className="pc-label">You’ll need</span>
          <ul className="pc-need">{c.need.map((n, i) => <li key={i}>{n}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PathwayContext });
