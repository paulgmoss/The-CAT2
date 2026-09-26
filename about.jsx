const ABOUT_PAPERS = [
  ['What the Tick Doesn’t Say: Toward a More Precise Account of Curriculum Mapping', 'Introduces the readiness and demand distinction the CAT is built on.'],
  ['Quantifying Education or Clarifying It? A Constructivist Defence of Assessment Architecture Precision in Course Design', 'The case for deliberate, explicit weighting of learning outcomes in assessment design.'],
  ['Designing as Learning: Constructive Alignment as a Constructivist Learning Experience for Practitioners', 'An autoethnographic study of how the CAT’s guiding principles were arrived at.'],
  ['Assurance of Learning in Higher Education: Structural Necessity, Interpretive Politics and Constructed Misalignment', 'On assurance of learning as a structural requirement complicated by how it plays out in practice.'],
  ['Beyond the Grade-as-Proxy Trap: The Case for Criterion-Level Outcome Attainment', 'The case for criterion-level outcome mapping over grades as a proxy for attainment.'],
];

function AboutSec({ k, h, children, label }) {
  return (
    <section className="ab-sec" data-screen-label={label}>
      <div><h2 className="ab-sec-h">{h}</h2></div>
      <div>{children}</div>
    </section>
  );
}

const ABOUT_PEOPLE = [
  { id: 'paul', name: 'Paul Moss', short: 'Manager, Educational Design', role: 'Manager, Educational Design, Teaching and Learning Innovation, Adelaide University',
    photo: { backgroundImage: 'url(assets/about/paul.webp)', backgroundSize: '222px auto', backgroundPosition: '-3px -55px' },
    bio: ['Paul Moss has over 20 years of experience in education across secondary and higher education, with specialisation in evidence-based learning design, constructive alignment, and assessment design informed by cognitive load and schema theory.',
      'He has led and co-designed large-scale pedagogical initiatives at school, faculty, and university levels, including assurance of learning strategies for accreditation, the Adelaide University Learning Environment Principles, and the development of institution-wide course design and alignment approaches.',
      'He is currently undertaking a PhD examining how engaging with the CAT, co-developed with Sasikala Rathnappulige, functions as a form of professional learning for academics designing their own courses. Paul is also a Senior Fellow of Advance HE.'] },
  { id: 'sasi', name: 'Dr Sasikala (Sasi) Rathnappulige', short: 'Lecturer in Academic Development', role: 'Lecturer in Academic Development, Teaching and Learning Innovation, Adelaide University',
    photo: { backgroundImage: 'url(assets/about/sasi.jpg)', backgroundSize: '182px auto', backgroundPosition: '-43px -14px' },
    bio: ['Sasi is a Lecturer in Academic Development within the Teaching and Learning Innovation unit at Adelaide University, with 17 years of collective experience working as an educator, learning designer and researcher. She has extensive experience in designing innovative curriculum and learning solutions for both undergraduate and postgraduate level programs and courses for hybrid and online delivery.',
      'Constructive alignment sits at the centre of her curriculum design practice. A central part of her work involves meeting academics where they are, providing pedagogical advice calibrated to their context, and co-developing design decisions collaboratively. Her PhD in Knowledge Management is from University of Adelaide. As an educational researcher, Sasi specialises in innovative curriculum design, constructive alignment and assessment design.',
      'She co-developed the CAT with Paul Moss to bring that same collaborative, in-context approach to constructive alignment into a tool academics can use directly.'] },
  { id: 'aaron', name: 'Aaron Honson', short: 'Teaching and Learning Innovation', role: 'Teaching and Learning Innovation, Adelaide University', bio: null },
  { id: 'daniel', name: 'Daniel Searson', short: 'Teaching and Learning Innovation', role: 'Teaching and Learning Innovation, Adelaide University', bio: null },
  { id: 'ryan', name: 'Ryan Barber', short: 'Teaching and Learning Innovation', role: 'Teaching and Learning Innovation, Adelaide University', bio: null },
];

function AboutPeople() {
  const [open, setOpen] = React.useState(null);
  const p = ABOUT_PEOPLE.find(x => x.id === open);
  return (
    <div>
      <div className="ab-team">
        {ABOUT_PEOPLE.map(x => (
          <button key={x.id} type="button" className={'ab-tile' + (open === x.id ? ' is-on' : '')} aria-expanded={open === x.id} aria-controls="ab-bio" onClick={() => setOpen(open === x.id ? null : x.id)}>
            <span className="ab-photo">
              {x.photo ? <span className="ab-photo-img" role="img" aria-label={x.name} style={x.photo}></span>
                : <span className="ab-photo-img ab-photo-slot"><image-slot id={'about-photo-' + x.id} shape="circle" placeholder={'Photo of ' + x.name.split(' ')[0]}></image-slot></span>}
            </span>
            <span className="ab-tile-n">{x.name}</span>
            <span className="ab-tile-r">{x.short}</span>
            <span className="ab-tile-c">{open === x.id ? 'Close bio' : 'Read bio'}<svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </button>
        ))}
      </div>
      {p && (
        <article id="ab-bio" className="ab-bio">
          <h3 className="ab-name">{p.name}</h3>
          <p className="ab-role">{p.role}</p>
          <div className="ab-bio-body">
            {p.bio ? p.bio.map((t, i) => <p key={i}>{t}</p>) : <p className="ab-bio-tbc">Bio to come.</p>}
          </div>
        </article>
      )}
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <SiteNav current="about" />
      <main>
        <section className="ab-hero">
          <div className="ab-hero-in">
            <h1 className="ab-h1">Who made the CAT, and the research behind it</h1>
            <div className="ab-sig" aria-hidden="true"><i style={{ flexGrow: 20, background: '#C9BFFF' }}></i><i style={{ flexGrow: 30, background: 'var(--c-purple)' }}></i><i style={{ flexGrow: 30, background: '#C9BFFF' }}></i><i style={{ flexGrow: 20, background: 'rgba(255,255,255,.25)' }}></i></div>
          </div>
        </section>
        <div className="ab-main">
          <AboutSec k="01" h="The project" label="About · Project">
            <p className="ab-p">The CAT is a free tool that was conceptually co-developed by Paul Moss and Dr Sasikala Rathnappulige at Adelaide University, growing out of their collaborative work in academic development and curriculum design.</p>
            <p className="ab-p">Daniel Searson and Ryan Barber helped Paul translate the idea into a working Excel tool, and Aaron Honson turned that into the interactive tool it is today. All five work in the Teaching and Learning Innovation unit at Adelaide University.</p>
            <p className="ab-p">Paul’s doctoral research studies how engaging with the CAT itself functions as a form of professional learning for the academics who use it.</p>
          </AboutSec>
          <AboutSec k="02" h="The people" label="About · People">
            <AboutPeople />
          </AboutSec>
          <AboutSec k="03" h="Current papers" label="About · Papers">
            <ol className="ab-papers">
              {ABOUT_PAPERS.map(([t, d], i) => (
                <li key={i} className="ab-paper">
                  <span className="ab-paper-n">{String(i + 1).padStart(2, '0')}</span>
                  <div><p className="ab-paper-t">{t}</p><p className="ab-paper-d">{d}</p></div>
                </li>
              ))}
            </ol>
          </AboutSec>
          <AboutSec k="04" h="Get in touch" label="About · Contact">
            <div className="ab-contacts">
              <div className="ab-contact"><span className="ab-contact-n">Paul Moss</span><a href="mailto:paul.moss@adelaide.edu.au">paul.moss@adelaide.edu.au</a></div>
              <div className="ab-contact"><span className="ab-contact-n">Dr Sasikala Rathnappulige</span><a href="mailto:sasikala.rathnappulige@adelaide.edu.au">sasikala.rathnappulige@adelaide.edu.au</a></div>
            </div>
          </AboutSec>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('app')).render(<AboutPage />);
