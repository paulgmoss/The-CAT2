/* CAT, facilitated-session chapter content for the scenario wall (tab 4.2).
   Keyed by scenario id. Scenarios marked draft:true are derived from the older
   three-zone content and are placeholders until their session is written up.

   Beat kinds: {p} narration · {ld} learning designer line · {ac} academic line
               {shot:{tab,cap,src}} attachment card (src: 'before'|'after' pulls the
               real capture from scenarios-data.js; any other key is looked up in
               window.SHOTS[scenarioId] below; omit for a labelled placeholder)
               {zone:{...}} before/after teaching-sequence week strip
               {rows:[[label,value]]} demand entry block  */
/* Real tool captures, per scenario, keyed by the id used in {shot:{src}}. */
window.SHOTS = {
  omar: {
    t2before: 'assets/omar/t2-before.png',
    t2afterW4: 'assets/omar/t2-after-w4.png',
    t2afterW9: 'assets/omar/t2-after-w9.png',
    t4first: 'assets/omar/t4-first.png',
    t1: 'assets/omar/t1.png',
    t4clo1: 'assets/omar/t4-clo1.png',
    t4final: 'assets/omar/t4-final.png',
    t5first: 'assets/omar/t5-first.png',
    t5second: 'assets/omar/t5-second.png',
    t6: 'assets/omar/t6.png',
    t6before: 'assets/omar/t6-before.png',
  },
  priya: {
    t6before: 'assets/priya/t6-before.png',
    t6after: 'assets/priya/t6-after.png',
    t4first: 'assets/priya/t4-first.png',
    t5first: 'assets/priya/t5-first.png',
    t4clo1: 'assets/priya/t4-clo1.png',
    t5second: 'assets/priya/t5-second.png',
    t4revision: 'assets/priya/t4-revision.png',
    t5final: 'assets/priya/t5-final.png',
    t4final: 'assets/priya/t4-final.png',
  },
};

window.CHAPTERS = {
  omar: {
    ld: { name: 'Naomi', role: 'Learning designer' },
    ac: { name: 'Omar', role: 'Course coordinator' },
    tags: [
      { t: 'Demand accumulation', k: 'amber' },
      { t: 'Deliberate zero', k: 'amber' },
      { t: 'Readiness conflict', k: 'red' },
      { t: 'Resequencing', k: 'green' },
      { t: 'Rubric check', k: 'purple' },
    ],
    context: [
      "Omar coordinates a third-year Environmental Science course. His three assignments are a field report (Week 4), a data analysis report (Week 8), and a policy brief (Week 12). He has four CLOs: CLO 1 (ecological systems analysis), CLO 2 (quantitative data interpretation), CLO 3 (stakeholder communication), and CLO 4 (evidence-based policy reasoning), each weighted equally at 25%. The course has been advertised to students at a stated 30/40/30 split across the three assignments for three years.",
      "Omar's course is due for its scheduled assurance of learning review, part of the college's rolling cycle rather than any flagged concern. His school has arranged time with Naomi, the learning designer supporting his programme, as part of this semester's review.",
      "Naomi opens by asking Omar to talk her through each assignment without looking at any numbers: what is the field report actually asking students to do, and which CLO does it draw on most? Omar answers confidently. He has taught this course for three years. He is not worried about this meeting.",
      "Working through Tab 2 (Teaching Readiness) and Tab 3 (Readiness Summary) together, Omar's readiness levels show a familiar pattern for a course that builds toward a synthesis task. CLO 1 is taught early: 60% by the field report in Week 4, 70% by Week 5, reaching Complete by the data analysis report in Week 8. CLO 2 starts lower, 23% by Week 4, 40% by Week 5, and also reaches Complete by Week 8. CLO 3 and CLO 4 both build slowly, sitting at only 10% and 8% respectively by Week 4, neither reaching Complete until Week 12.",
    ],
    chapters: [
      {
        q: 'Where is this number actually coming from?',
        beats: [
          { ld: "Okay. Then let's map how the course is currently being resourced, and what each CLO is contributing to each assignment.", qb: 'map-how-resourced' },
          { p: 'In Tab 4 (CLO Mapping), Naomi asks Omar to set demand himself, using the Direct approach.' },
          { ld: "Think of each CLO as its own 100%. For ecological systems analysis, what share of that CLO's assessment weight sits in each assignment?" },
          { p: 'Omar works through the four rows.' },
          { rows: [
            ['CLO 1 \u00b7 ecological systems analysis', '30 / 40 / 30'],
            ['CLO 2 \u00b7 quantitative data interpretation', '10 / 40 / 50'],
            ['CLO 3 \u00b7 stakeholder communication', '15 / 15 / 70'],
            ['CLO 4 \u00b7 evidence-based policy reasoning', '15 / 15 / 70'],
          ] },
          { shot: { tab: 'Tab 4 \u00b7 CLO Mapping, first pass', cap: 'Demand entered directly, note that the CLO 3 readiness bar is showing a warning, as the field report readiness is currently sitting at 10%, yet the level of demand requires a minimum readiness of 15%. This is the same for CLO 4, and also the same in the 2nd assignment for CLO 2 and 4 also.', src: 't4first' } },
          { p: 'With the mapping table complete, Tab 5 generates the implied assignment weightings from it.' },
          { shot: { tab: 'Tab 5 \u00b7 Assignment Weightings, first pass', cap: '17.5 / 27.5 / 55', src: 't5first' } },
          { ac: "That's not close. Not even in the neighbourhood." },
          { ld: "This number isn't something you entered directly. It's the sum of all four of your CLO rows in Tab 4. Every one of those rows is contributing to the policy brief's total, so if it's come out at 55%, that's four separate decisions adding up, not one obvious mistake. Can you see where the weight's coming from?", qb: 'sum-of-rows' },
          { p: 'Omar looks back through his own numbers.' },
          { ac: "Three of my four CLOs are all concentrated on the policy brief. I didn't plan that. Each one made sense on its own." },
          { ld: "That's the part that catches people out. Five per cent here, five per cent there, none of it looks significant on its own. But it accumulates fast, and this is exactly the layer of precision the tool is adding that a stated split like 30/40/30 never captured. Everything downstream, the tutorial time, the LMS resources, the feedback load, has been resourced around what you've told students the course is. If the actual mapping says something different, that's not a rounding error. That's a different course to the one being resourced.", qb: 'accumulates-fast' },
        ],
      },
      {
        q: 'Does this outcome need a third assessment point at all?',
        beats: [
          { ld: "If you want to reduce the weighting on the policy brief, you'll need to increase the weighting somewhere else, in the field report, the data analysis report, or both. But the first question is which CLO or CLOs could actually be reduced in the policy brief without leaving something unassessed.", qb: 'weight-has-to-move' },
          { p: 'Omar goes to CLO 1, ecological systems analysis.' },
          { ac: "By Week 8 this is already fully taught. I've assessed it in the data analysis report at 40. Does it need a third point in the policy brief at all?" },
          { ld: "What would it mean if it didn't?", qb: 'what-would-it-mean' },
          { ac: "That the field report and data analysis report have already done the work. The policy brief doesn't need to ask again." },
          { p: "He revises CLO 1 to 30/70/0. This is a deliberate zero: CLO 1 is not assessed in the policy brief at all. That is not an oversight, it is a considered decision, reached because the CLO's assessment work is already complete by the data analysis report, so nothing further needs to be tested." },
          { shot: { tab: 'Tab 4 \u00b7 after the CLO 1 change', cap: 'CLO 1 demand at 30 / 70 / 0.', src: 't4clo1' } },
          { shot: { tab: 'Tab 5 \u00b7 second pass', cap: '17.5 / 35 / 47.5', src: 't5second' } },
          { p: "Omar checks the other three CLOs for anything else he could shift toward the field report, but none of them offer a similar opening. CLO 2, CLO 3, and CLO 4 are all still building readiness well into the course; none has reached a point where its assessment work is already done elsewhere, the way CLO 1's was. He accepts the field report at its implied 17.5%, rounding to 20% against his stated 30%." },
          { ld: "That's a real drop from what you'd planned. Ten percentage points of assessment weight coming out of the first four weeks. What does that tell you about the field report itself?", qb: 'what-does-that-tell-you' },
          { p: 'Omar sits with that.' },
          { ac: "The task itself hasn't changed, so it's not that it was harder or easier than it should have been. It's that whatever a student scored on the field report was carrying more weight in their final grade than it should have. A student who did well there got more benefit from it than the field report actually earned them. A student who struggled with it took a bigger hit than they should have. Either way, the field report's been having more influence on the final grade than its actual place in the course justifies." },
          { ld: "That's a genuinely useful thing to have found. This is exactly what the review process is for, not catching mistakes, but finding the kind of adjustment that makes the course better for the next cohort. You've just identified a real improvement to student experience before it needed to be flagged by anyone else." },
          { p: 'Omar adds, almost as an afterthought:' },
          { ac: "It does mean there's less riding on those first four weeks going forward. Might be worth thinking about whether that changes what's possible to attempt early on, not just what's assessed." },
          { ld: "Let's actually check that. The readiness sequence will tell us whether there's genuine room there, or whether it just looks that way from the assignment weighting alone. Now that the mapping's settled, this is the right point to look.", qb: 'when-to-check-sequence' },
        ],
      },
      {
        q: "What happens when demand outruns what's been taught?",
        beats: [
          { p: "They move to Tab 4. CLO 1's readiness bar is comfortably clear at the field report, 60% against a required minimum of 30%." },
          { ld: "That's the room you were thinking of. But look at CLO 3." },
          { p: "Its demand row, unchanged at 15/15/70, shows a warning on the field report's readiness bar. The minimum required is 15%; Omar's readiness, set in Tab 2, sits at 10%." },
          { ac: "So it's not the whole four weeks that's loose. CLO 1's fine. It's specifically CLO 3 that isn't ready yet." },
          { ld: "There are two ways to close that. Increase the readiness, which means changing what's taught before Week 4. Or reduce the demand, since the field report's carrying less weight overall now anyway, maybe it makes sense for CLO 3 to ask less of it too. Want to test that first, before we touch the teaching sequence?", qb: 'accept-the-suggestion' },
          { p: "Omar tries reducing CLO 3's row to 10/15/75. The minimum readiness required drops to 10%, exactly matching what's currently taught. The warning clears. He doesn't take it." },
          { ac: "I've just seen CLO 1's got room to spare at this point. That tells me the answer isn't to ask less of CLO 3, it's to teach more of it before Week 4. There's space to do that." },
          { ld: "So the other lever is what's taught before Week 4. Where does stakeholder communication content currently sit?", qb: 'whats-taught-before' },
          { ac: 'Week 5. A teaching session on audience analysis.' },
          { ld: 'What happens if you move it to Week 4?', qb: 'move-it-earlier' },
          { p: 'He models it: readiness lifts to 35%, clear of the 15% minimum. He starts to say this solves it, then stops.' },
          { ac: 'But Week 4 already has something in it. A revision workshop on ecological survey techniques.' },
          { ld: 'So if audience analysis moves in, something has to move out. What happens to the revision workshop?', qb: 'something-has-to-move-out' },
          { p: 'This is the question Omar would not have asked on his own. He had been thinking about the readiness problem as something to fix at Week 4, not as a trade requiring a decision about where the displaced content goes. He looks at Tab 2 again. CLO 1 is already at 60% readiness by Week 4 and reaches Complete by Week 8 regardless of the revision workshop.' },
          { ac: "It's doing less work than I assumed. It could sit somewhere else. Maybe right before the policy brief, as a refresher, since that's the last time they'll need that material." },
          { zone: {
            caption: 'Audience analysis moves from Week 5 into Week 4; the survey techniques revision it displaces moves to Week 9, where it now serves as a refresher before the policy brief.',
            beforeLabel: 'Before \u00b7 readiness conflict at the field report',
            afterLabel: 'After \u00b7 conflict resolved',
            weeks: 13,
            before: [{ w: 4, t: 'Survey revision', k: 'conflict' }, { w: 5, t: 'Audience analysis' }],
            after: [{ w: 4, t: 'Audience analysis', k: 'resolved' }, { w: 9, t: 'Survey revision', k: 'resolved' }],
          } },
          { shot: { tab: 'Tab 4 \u00b7 final', cap: 'CLO 3 readiness at the field report lifts to 35%, clear of the 15% minimum.', src: 't4final' } },
          { p: 'Readiness for CLO 3 clears the conflict at the field report, and the survey techniques workshop now has a more deliberate purpose than it had in three years of sitting in Week 4 by default.' },
          { ld: "Ok, the mapping and the sequence are aligned now. One last thing before we close: your rubric." },
        ],
      },
      {
        q: 'Does your current rubric still reflect this mapping?',
        beats: [
          { p: 'Tab 6 (Marking Guide / Rubric Composition) reads straight off the finalised mapping, so it is only worth looking at once Tab 4 has settled. It is the last thing checked before the teaching and learning consequences are written up.' },
          { ld: "Before we look at the rubric, worth being clear about scope. You changed CLO 1's row, not just one number in it, the value at the data analysis report went from 40 to 70, and the value at the policy brief went from 30 to 0. Both of those assignments' rubric compositions will have shifted in Tab 6. The field report's untouched, since CLO 1's value there didn't move.", qb: 'scope-of-the-change' },
          { ac: "So it's not just the policy brief I should be checking." },
          { ld: "Not eventually, no. We'll walk through the policy brief now, since that's where the change was largest, but the data analysis report's worth the same check before you finalise anything." },
          { shots: [
            { tab: 'Tab 6 \u00b7 before', cap: 'CLO 1 at 30 / 40 / 30, the mapping as it stood.', src: 't6before' },
            { tab: 'Tab 6 \u00b7 after', cap: 'CLO 1 at 30 / 70 / 0, the deliberate zero applied.', src: 't6' },
          ] },
          { principle: { name: 'Which changes move Tab 6', text: 'Tab 6 is calculated per assignment from Tab 1 and Tab 4 only. Demand changes move the rubric composition; readiness changes do not. The resequencing Omar just did is a Tab 2 change, it clears readiness warnings and reshapes the teaching sequence, but Tab 6 is unaffected by it.' } },
          { ld: "Now that the mapping's settled, it's worth checking your actual rubric for the policy brief against what Tab 6 suggests. Do you have the current one?" },
          { principle: { name: 'Estimates, not exact targets', text: "Tab 6's percentages are derived from the mapping, not precise targets to hit. A rubric landing within about five percentage points of the tool's figure is close enough to leave alone. A gap larger than that is usually worth a look, not because the tool demands precision, but because a six or seven-point gap at the rubric level is often the accumulated effect of a real judgement call the academic hasn't yet made explicit." } },
          { ld: "So before we start: these are estimates, not exact targets. A gap of about five points or more is what we're looking for, anything under that isn't worth chasing.", qb: 'estimates-not-targets' },
          { p: 'Omar pulls up his rubric. Rubrics look different at every institution and in every LMS; what matters here is the marks, and which CLO each criterion is mapped to.' },
          { table: {
            title: "Omar's current rubric \u00b7 policy brief, 100 marks",
            cols: ['Criterion', 'Marks', 'Mapped to'],
            rows: [
              ['Evidence and data use', '20', 'CLO 2'],
              ['Argument and policy recommendation', '50', 'CLO 3 + CLO 4'],
              ['Structure and clarity of communication', '15', 'CLO 3'],
              ['Critical reflection on limitations', '15', 'CLO 2 + CLO 4'],
            ],
            note: 'Illustrative only, a stand-in for whatever rubric the academic brings to the session.',
          } },
          { p: 'The single-mapped criteria are easy: evidence and data use is 20 marks, entirely CLO 2. Structure and clarity is 15 marks, entirely CLO 3. The other two are not.' },
          { ld: "Argument and policy recommendation is 50 marks, mapped to both CLO 3 and CLO 4. When you're actually marking that criterion, how much of it is the quality of the reasoning, and how much is how well it's communicated?", qb: 'implicit-weighting' },
          { p: 'Omar thinks about how he actually marks it.' },
          { ac: "The reasoning carries more weight, honestly. A well-argued recommendation that's a bit clunky in style still scores well with me. A beautifully written one built on weak reasoning doesn't. I'd say 70% reasoning, 30% communication." },
          { ld: 'And critical reflection on limitations, mapped to CLO 2 and CLO 4?' },
          { ac: "That one's more even. Reflecting on a limitation usually means questioning either the data or the policy logic. I'd call that roughly 50/50." },
          { p: 'Naomi works the totals through with him. Out of 100 marks, each CLO\u2019s share of the marks is its percentage.' },
          { table: {
            title: 'What each CLO attracts as the rubric stands',
            cols: ['CLO', 'As marked', 'Tab 6', 'Gap'],
            rows: [
              { c: ['CLO 2', '27.5%', '26.3%', '+1'], k: 'ok' },
              { c: ['CLO 3', '30%', '36.8%', '\u22127'], k: 'flag' },
              { c: ['CLO 4', '42.5%', '36.8%', '+6'], k: 'flag' },
            ],
            note: 'CLO 2 is fine. CLO 3 is seven points short and CLO 4 six points over, so about seven marks need to move from the reasoning side to the communication side.',
          } },
          { ac: "I've been rewarding the reasoning more than the mapping says I should, and communication's been quietly losing ground. That matters for this CLO specifically, communicating findings to a non-specialist audience is half of what a policy brief is meant to demonstrate." },
          { ld: "There are two ways to handle it. You could split argument and policy recommendation into two separate criteria, one for reasoning, one for communication, so each is marked and weighted on its own terms. Or you could leave the criterion as it is and just move marks between your existing criteria until the totals land back where they should be. Plenty of academics don't want to restructure a whole rubric over this, moving marks around is often enough.", qb: 'two-ways-to-close' },
          { p: 'Omar tries the second option first. Only two criteria carry CLO 3 or CLO 4 marks, so that is where the seven points have to move. He takes ten marks off argument and policy recommendation, dropping it from 50 to 40 and keeping the same internal 70/30 split, and adds those ten to structure and clarity of communication, taking it from 15 to 25.' },
          { table: {
            title: 'Reweighted rubric, and where each CLO lands',
            cols: ['Criterion', 'Marks', 'Was'],
            rows: [
              ['Evidence and data use', '20', '20'],
              ['Argument and policy recommendation', '40', '50'],
              ['Structure and clarity of communication', '25', '15'],
              ['Critical reflection on limitations', '15', '15'],
              { c: ['CLO 3 now attracts', '37%', '30%'], k: 'ok', sep: true },
              { c: ['CLO 4 now attracts', '35.5%', '42.5%'], k: 'ok' },
            ],
            note: 'Both now within about a point of Tab 6. CLO 2 is untouched at 27.5%.',
          } },
          { ac: 'That works. The numbers land where they should without me touching how I actually judge the criterion itself.' },
          { p: 'He pauses.' },
          { ac: "I still don't love that argument and policy recommendation is doing two different jobs at once, though. Even with the marks rebalanced, whoever's marking that criterion is still making a reasoning judgement and a communication judgement and writing down one number for both. That's not really a mapping problem anymore, it's a marking consistency one. I might split it for that reason, separately, when I next revise the rubric properly." },
          { ld: "That's a fair distinction. Reweighting fixed the alignment. Splitting would be about clarity for whoever's marking it. They don't have to happen at the same time.", qb: 'alignment-vs-consistency' },
          { ld: "Ok, this is now looking really well aligned. Let's download what we have done so we can refer to it when we make the adjustments to the LMS.", qb: 'download-the-record' },
        ],
      },
    ],
    extraShots: [
      { tab: 'Tab 1 \u00b7 CLO Weightings', cap: '25 / 25 / 25 / 25.', src: 't1' },
      { tab: 'Tab 2 \u00b7 before', cap: 'Week 4 (revision workshop, CLO 1) and Week 5 (audience analysis, CLO 3). Readiness at Week 4: CLO 1 60%, CLO 2 23%, CLO 3 10%, CLO 4 8%.', src: 't2before' },
      { tab: 'Tab 2 \u00b7 after, Week 4', cap: 'Audience analysis moved into Week 4; CLO 3 readiness lifts to 35%.', src: 't2afterW4' },
      { tab: 'Tab 2 \u00b7 after, Week 9', cap: 'The displaced survey techniques revision now sits in Week 9, ahead of the policy brief, with CLO 1 shown at Complete.', src: 't2afterW9' },
    ],
    impacts: [
      { label: 'Assessment load and student effort', text: 'The original demand implied 17.5/27.5/55, a course where the final assignment was carrying more than half the grade, against a structure students had been told was 30/40/30. The revised mapping at 17.5/35/47.5 is a meaningful step toward the stated structure, with the field report still flagged for a second look.' },
      { label: 'Teaching sequence', text: 'The Week 4 revision workshop (CLO 1) moves to Week 9. The Week 5 audience analysis session (CLO 3) moves to Week 4. The LMS release schedule and the tutorial run sheets for Weeks 4, 5, and 9 all need updating.' },
      { label: 'Tutorial and workshop activity', text: 'Tutors running Week 4 need briefing on the new audience analysis content. The Week 9 tutorial, previously generic consolidation time, now has a specific purpose it did not have before.' },
      { label: 'LMS resources', text: 'CLO 1 materials move from Week 4 to Week 9. CLO 3 materials move from Week 5 to Week 4.' },
      { label: 'Feedback', text: 'With CLO 1 no longer assessed in the policy brief, feedback on the data analysis report for that CLO becomes the last formal feedback students receive on it, and needs to stand alone.' },
      { label: 'Marking guide and rubric', text: 'The policy brief rubric is reweighted: argument and policy recommendation drops from 50 to 40 marks, structure and clarity of communication rises from 15 to 25. The rubric in the LMS, and any marking guide issued to tutors, both need updating before the assignment is released.' },
    ],
    whatChanged: [
      'Omar came into the session expecting to confirm what he already knew. Instead, working through it with Naomi surfaced three things he would have been unlikely to catch alone: that small, individually reasonable demand decisions can accumulate into an assignment structure no one intended; that a deliberate zero is a legitimate design choice, not a gap; and that resolving a readiness conflict by resequencing content is never free, something displaced has to go somewhere, and deciding where is itself a design choice worth making on purpose.',
    ],
  },

  priya: {
    ld: { name: 'Kate', role: 'Learning designer' },
    ac: { name: 'Priya', role: 'Course coordinator' },
    tags: [
      { t: 'Demand accumulation', k: 'amber' },
      { t: 'Conservation of alignment', k: 'purple' },
      { t: 'Deliberate zero', k: 'amber' },
      { t: 'Readiness conflict', k: 'red' },
      { t: 'Resequencing', k: 'green' },
      { t: 'Rubric check', k: 'purple' },
    ],
    context: [
      'Priya coordinates a third-year Nursing course. Her three assignments are a clinical reflection (Week 4, 20%), a care plan (Week 8, 40%), and a case study exam (Week 12, 40%). She has four CLOs: CLO 1 (clinical reasoning, 30%), CLO 2 (patient-centred care, 25%), CLO 3 (evidence-based practice, 30%), and CLO 4 (professional communication, 15%). The course has been taught to a stated 20/40/40 distribution across the three assignments for several years.',
      'Priya has a strong instinct about this course, formed over several years of teaching it: clinical reasoning only shows its true depth under pressure, and the case study exam, sat individually under time constraints, is where nursing students demonstrate the kind of fast, high-stakes decision-making the profession actually demands. She wants her mapping to reflect that. Her school has scheduled time with Kate, the learning designer supporting the Faculty of Health, as part of this semester\u2019s assurance of learning cycle, and Priya has brought her instinct about CLO 1 as the specific question she wants to test before committing to it.',
      'Working through Tab 2 (Teaching Readiness) and Tab 3 (Readiness Summary) together, CLO 1 builds progressively: Foundational by the clinical reflection, Developing by the care plan, Complete only at the exam. CLO 2 and CLO 4 are both taught and consolidated early, reaching Complete by the care plan. CLO 3 builds slowly across the whole course, reaching Complete only at the exam, alongside CLO 1.',
    ],
    chapters: [
      {
        q: 'Where is this number actually coming from?',
        beats: [
          { p: 'In Tab 4 (CLO Mapping), Priya sets demand using the Direct approach, giving each CLO its own 100% and distributing that across the three assignments. Her first attempt reflects her instinct directly.' },
          { shot: { tab: 'Tab 4 \u00b7 first attempt', cap: 'Demand entered directly, CLO 1 at 15 / 15 / 70.', src: 't4first' } },
          { p: 'She moves to Tab 5. The course has been taught to a stated 20/40/40 distribution for years. Tab 5 shows 22/28/50.' },
          { shot: { tab: 'Tab 5 \u00b7 first pass', cap: '22 / 28 / 50', src: 't5first' } },
          { ac: "The exam's ten percentage points over what's stated. And the care plan's well under." },
          { ld: "That output is the sum of all four rows in Tab 4. Every row you entered is contributing to each assignment's total, so a number like this isn't one CLO's doing, it's four separate judgements all landing in the same place. Can you see which of your rows are doing that?", qb: 'sum-of-rows' },
          { p: 'Priya looks back through her four rows.' },
          { ac: "Clinical reasoning and evidence-based practice are both loaded toward the exam. So is professional communication, actually, at 40 for the care plan and 25 still going to the exam. Three out of four rows are all leaning the same way, and I didn't notice that while I was entering them one at a time." },
        ],
      },
      {
        q: 'What happens if we adjust just this one row?',
        beats: [
          { ld: "If one assignment's carrying more than it should, the fix is never just to lower it, the weight has to move somewhere. Reducing the exam's implied share by ten points means some CLO's demand needs to shift off the exam and onto one of the other two assignments. So the real question is: which CLO, and which assignment should absorb it?", qb: 'weight-has-to-move' },
          { ac: "Clinical reasoning. That's the one I care most about getting right, and it's the one I loaded hardest toward the exam. If I pull it back," },
          { ld: 'Where would it go instead?' },
          { ac: "The care plan, probably. Not the reflection, that's too early for anything close to real clinical reasoning." },
          { p: 'She revises CLO 1 to 5/10/85, in fact increasing the exam\u2019s share rather than reducing it, testing whether being more deliberate about her original intention closes the gap instead.' },
          { shot: { tab: 'Tab 4 \u00b7 isolated fix', cap: 'CLO 1 changed to 5 / 10 / 85.', src: 't4clo1' } },
          { shot: { tab: 'Tab 5 \u00b7 worse', cap: '19 / 26 / 55', src: 't5second' } },
          { ac: "That's worse." },
          { ld: 'Can you see how the exam went up without the other assignments coming down?', qb: 'went-up-without' },
          { p: "Priya looks at what she actually did. She reduced clinical reasoning's share at the reflection and the care plan, which freed up more of its budget to land on the exam." },
          { ac: "I moved it the wrong way. I wanted the exam lighter, so I should have increased clinical reasoning's share at the reflection or the care plan instead, that's what would have pulled the exam's share down. Reducing the other two just gave the exam more room to grow." },
          { principle: { name: 'Conservation of alignment', text: "Within any one CLO's row, the shares across assignments are drawn from that CLO's own fixed budget: increasing its share in one assignment necessarily decreases it elsewhere in the row. The direction matters. To reduce an assignment's total, increase that CLO's influence in the other assignments, which pulls its share down where you want it lower. To increase an assignment's total, reduce that CLO's influence elsewhere, which pushes more of its share into the assignment you want higher." } },
        ],
      },
      {
        q: 'What is this outcome actually asking of students, and when?',
        beats: [
          { p: 'Kate points back at Tab 3.' },
          { ld: 'You said clinical reasoning reaches Developing by the care plan, not just Foundational. Does the demand row reflect that?', qb: 'readiness-vs-demand' },
          { p: 'Priya looks again. Her original 15/15/70 for CLO 1 treats the care plan almost the same as the reflection, both low, with everything held back for the exam. But readiness says students are already well into this CLO\u2019s domain by the care plan.' },
          { p: 'She revises CLO 1 to 15/40/45.' },
          { ac: "It still needs to be demonstrated under pressure at the exam, but it doesn't need to carry as much weight there as I originally mapped. If anything, giving it more room in the care plan means students get feedback on their clinical reasoning before the exam, rather than the first real test of it being the one that counts most." },
          { p: 'She revises CLO 3, which follows a similar slow build, to 10/35/55. Then she turns to CLO 4, professional communication.' },
          { ac: "This one's fully taught and consolidated by the care plan. Does it need a third assessment point at the exam at all?" },
          { ld: "What would it mean if it didn't?", qb: 'what-would-it-mean' },
          { ac: 'That the care plan is where professional communication is genuinely, completely assessed. Not a placeholder before the real test at the exam.' },
          { p: 'She sets CLO 4 to 45/55/0. Kate is careful to name what the zero means before they move on: this is a deliberate zero. Professional communication is not assessed at the exam at all, and that absence is intentional. The care plan has already assessed it fully, so the exam does not need to test it again.' },
          { shot: { tab: 'Tab 4 \u00b7 full revision', cap: 'CLO 1 at 15 / 40 / 45, CLO 3 at 10 / 35 / 55, CLO 4 at 45 / 55 / 0, with the CLO 4 readiness bar for the clinical reflection showing a warning.', src: 't4revision' } },
          { shot: { tab: 'Tab 5 \u00b7 final', cap: '22 / 41 / 38', src: 't5final' } },
          { p: 'Close enough to the intended 20/40/40 that Priya is comfortable building the course around it.' },
        ],
      },
      {
        q: 'Does the teaching sequence still support the new mapping?',
        beats: [
          { p: 'Kate is looking at Tab 4 while Priya is still reading Tab 5.' },
          { ld: "Before we finish, CLO 4's readiness bar for the clinical reflection is showing a warning. Worth checking now, since everything you've just changed can shift what the teaching sequence needs to support." },
          { p: 'The new demand for CLO 4, 45% at the reflection, needs a minimum readiness of 45% by Week 4. The readiness Priya set in Tab 2 has professional communication at Foundational, 30%, by that point.' },
          { ld: 'Would you accept the tool\u2019s suggestion and lower the readiness level to match?', qb: 'accept-the-suggestion' },
          { ac: "Reflective writing is exactly where I'd want professional communication showing up early. Foundational at 30% feels too thin for what I'm asking of the reflection." },
          { ld: "So the other lever is what's taught before Week 4. What's currently there?", qb: 'whats-taught-before' },
          { ac: "A teaching session on structured clinical documentation, which supports CLO 4, currently sits in Week 6, two weeks after the reflection is due. That's backwards. Most of the teaching for this CLO happens after the first time I assess it." },
          { ld: 'What happens if you move it earlier?', qb: 'move-it-earlier' },
          { p: 'Modelled at Week 3, readiness lifts to Developing, 60%, clearing the 45% minimum. But Week 3 currently holds a teaching session orienting students to the electronic health record system, unrelated to any CLO under pressure at this point in the course.' },
          { ac: "That session doesn't actually need to be in Week 3. Students don't touch the EHR for anything assessed until the care plan in Week 8. If I move the documentation session to Week 3 and push the EHR orientation to Week 5, right after the reflection, it lands closer to when they'll actually need it." },
          { zone: {
            caption: 'Clinical documentation moves from Week 6 to Week 3; the EHR orientation it displaces moves to Week 5, closer to when students first need it.',
            beforeLabel: 'Before \u00b7 readiness conflict at the clinical reflection',
            afterLabel: 'After \u00b7 conflict resolved',
            weeks: 13,
            before: [{ w: 3, t: 'EHR orientation', k: 'conflict' }, { w: 6, t: 'Clinical documentation' }],
            after: [{ w: 3, t: 'Clinical documentation', k: 'resolved' }, { w: 5, t: 'EHR orientation', k: 'resolved' }],
          } },
          { shot: { tab: 'Tab 4 \u00b7 final', cap: 'CLO 4 readiness bar clear of the warning.', src: 't4final' } },
          { p: 'The swap clears the readiness conflict and gives the EHR orientation a more defensible position in the sequence than it had before.' },
          { p: 'The resequencing was not something the tool produced on its own, it was something the warning prompted Priya to work out. Most course documents record which CLO is mapped to which week, but not whether that mapping is actually achievable by then, the claim rests on intuition, unverified. What Priya and Kate have just produced is different: an explicit, evidence-based rationale for why the teaching sequence is arranged the way it is, tied to a specific readiness figure at a specific week, not a general sense of roughly when the content gets covered. Two or three weeks either way can be the difference between an assessment that matches what has actually been taught and one that does not. Once that rationale is written down against specific weeks, the whole teaching team is working from the same evidence, rather than someone\u2019s memory of how the course usually runs.' },
          { ld: 'That is the mapping and the sequence aligned. One last thing before we close: your rubric.' },
        ],
      },
      {
        q: 'Does your rubric still reflect the current mapping?',
        beats: [
          { p: 'Tab 6 (Marking Guide / Rubric Composition) reads straight off the finalised mapping, so it is only worth looking at once Tab 4 has settled.' },
          { ld: "Three of your four rows moved during this session: CLO 1, CLO 3 and CLO 4. Only CLO 2 stayed where it was, so every one of your assignments has had its rubric composition shift somewhere in Tab 6. Start with the clinical reflection, though. Its overall weighting in Tab 5 is roughly 22% before and after. If you were only watching assignment totals, you would assume its rubric needed no second look.", qb: 'stable-total-shifted-rubric' },
          { shots: [
            { tab: 'Tab 6 \u00b7 before', cap: 'Composition derived from the original demand values.', src: 't6before' },
            { tab: 'Tab 6 \u00b7 after', cap: 'Composition derived from the final demand values.', src: 't6after' },
          ] },
          { table: {
            title: 'Clinical reflection \u00b7 what each CLO attracts, before and after',
            cols: ['CLO', 'Before', 'After', 'Change'],
            rows: [
              { c: ['CLO 1 \u00b7 clinical reasoning', '20.7%', '20.7%', 'none'], k: 'ok' },
              { c: ['CLO 2 \u00b7 patient-centred care', '34.5%', '34.5%', 'none'], k: 'ok' },
              { c: ['CLO 3 \u00b7 evidence-based practice', '20.7%', '13.8%', '\u22127'], k: 'flag' },
              { c: ['CLO 4 \u00b7 professional communication', '24.1%', '31.0%', '+7'], k: 'flag' },
            ],
            note: 'The assignment total in Tab 5 sits at about 22% either way. Inside it, two CLOs have traded roughly seven percentage points.',
          } },
          { ac: "Clinical reasoning and patient-centred care haven't moved at all. But evidence-based practice has dropped from about 21% to 14%, and professional communication has gone from 24 up to 31. Seven points each way, inside an assignment whose total didn't change." },
          { principle: { name: 'A stable total can hide a shifted rubric', text: "Tab 5 reports each assignment's overall weighting; Tab 6 reports what each CLO attracts inside it. Changes in different CLO rows can offset each other at the assignment level while moving the composition underneath substantially. Check every assignment whose CLO rows changed, not only the ones whose overall weighting shifted." } },
          { ld: 'Do you have the current rubric for the clinical reflection?' },
          { table: {
            title: "Priya's current rubric \u00b7 clinical reflection, 100 marks",
            cols: ['Criterion', 'Marks', 'Mapped to'],
            rows: [
              ['Clinical decision-making described', '20', 'CLO 1'],
              ['Patient-centred approach demonstrated', '35', 'CLO 2'],
              ['Reflective writing quality (evidence use and professional voice)', '45', 'CLO 3 + CLO 4'],
            ],
            note: 'Illustrative only, a stand-in for whatever rubric the academic brings to the session.',
          } },
          { ld: "Before we start: Tab 6's figures are estimates, not exact targets. A gap of about five points or more is what we're looking for, anything under that isn't worth chasing.", qb: 'estimates-not-targets' },
          { p: 'The two single-mapped criteria are straightforward: 20 marks of CLO 1 against a Tab 6 figure of 20.7%, and 35 marks of CLO 2 against 34.5%. The third criterion carries two CLOs at once.' },
          { ld: 'Reflective writing quality is 45 marks across CLO 3 and CLO 4. When you are actually marking it, how much of that judgement is the critical use of evidence, and how much is the professional quality of the writing itself?', qb: 'implicit-weighting' },
          { ac: "About 45 per cent evidence use, 55 per cent reflective voice. That's how I've marked it for years." },
          { p: 'Kate works the marks through. Out of 100, each CLO\u2019s share of the marks is its percentage.' },
          { table: {
            title: 'What each CLO attracts as the rubric stands',
            cols: ['CLO', 'As marked', 'Tab 6', 'Gap'],
            rows: [
              { c: ['CLO 1', '20%', '20.7%', '\u22121'], k: 'ok' },
              { c: ['CLO 2', '35%', '34.5%', '+1'], k: 'ok' },
              { c: ['CLO 3', '20.3%', '13.8%', '+6'], k: 'flag' },
              { c: ['CLO 4', '24.8%', '31.0%', '\u22126'], k: 'flag' },
            ],
            note: 'The 45/55 balance inside the blended criterion was a close match for the original Tab 6 figures of about 21% and 24%. It was never revisited when the mapping changed.',
          } },
          { ld: 'That balance was a reasonable match once. Has anything changed since?', qb: 'reasonable-match-once' },
          { ac: "The targets moved and my marking guidance didn't. Evidence-based practice dropped to 14, professional communication climbed to 31, and I'm still weighing it 45/55 in my head." },
          { ld: "Two ways to handle it. Recalibrate the balance inside the one criterion, so your marking guidance reads roughly 30% evidence use and 70% reflective voice. Or separate it into two criteria, one per CLO, each with its own marks.", qb: 'two-ways-to-close' },
          { ac: "If I separated them I'd need about fourteen marks for critical use of evidence and thirty-one for professional reflective communication, out of the same forty-five. That's a change to the rubric document, not just my marking notes." },
          { table: {
            title: 'Recalibrated marking guidance, and where each CLO lands',
            cols: ['Criterion', 'Marks', 'Internal balance'],
            rows: [
              ['Clinical decision-making described', '20', 'CLO 1 only'],
              ['Patient-centred approach demonstrated', '35', 'CLO 2 only'],
              ['Reflective writing quality', '45', '30% CLO 3 / 70% CLO 4'],
              { c: ['CLO 3 now attracts', '13.5%', 'was 20.3%'], k: 'ok', sep: true },
              { c: ['CLO 4 now attracts', '31.5%', 'was 24.8%'], k: 'ok' },
            ],
            note: 'Both now within half a point of Tab 6, with no marks moved between criteria.',
          } },
          { ld: 'Would separating the criterion be useful beyond fixing the numbers?', qb: 'useful-beyond-the-numbers' },
          { ac: "Maybe. A criterion asking markers to weigh two quite different things at roughly 30/70 is harder to apply consistently than one doing a single job. I'd separate it for that reason, not this one. For now, updating the marking guidance gets the numbers back in line without waiting on a formal rubric revision." },
          { p: 'She sets the internal balance at 30/70 for this teaching period, and flags the rubric itself for a proper restructure before it next needs committee approval.' },
          { ld: 'That is one of three. The care plan and the exam both had CLO rows move too, so their rubrics need the same walk-through before either is released.', qb: 'stable-total-shifted-rubric' },
          { p: 'They work through both. The care plan carries the largest composition shift of the three: clinical reasoning climbs from 16.1% to 29.4% while patient-centred care drops from 35.7% to 24.5%, which Priya expected, since the care plan is where she deliberately gave clinical reasoning more room. Her rubric there already has separate criteria for each CLO, so closing the gap is a matter of moving marks between them rather than unpicking a blended judgement. The exam is simpler again: professional communication goes to zero, so the criterion carrying it comes out of the rubric entirely, and its marks redistribute across evidence-based practice and clinical reasoning, both of which have risen.' },
          { ac: "Three rubrics, and the only one I would have thought to check on my own is the exam, because that's the assignment that looks different. The reflection is the one I would have left alone." },
          { ld: "Let's download what we've done so we can refer to it when we make the adjustments to the LMS.", qb: 'download-the-record' },
        ],
      },
    ],
    extraShots: [
      { tab: 'Tab 2 \u00b7 before', cap: 'Week 3 (EHR orientation session) and Week 6 (documentation session), clinical reflection marker on Week 4.' },
      { tab: 'Tab 2 \u00b7 after', cap: 'Week 3 (documentation session), Week 5 (relocated EHR orientation session).' },
    ],
    impacts: [
      { label: 'Assessment load and student effort', text: 'The original demand implied 22/28/50, a case study exam carrying half the grade. The revised mapping at 22/41/38 is a substantial step toward the stated 20/40/40, and Priya has a clear rationale for the small remaining variance.' },
      { label: 'Teaching sequence', text: 'The Week 6 documentation session (CLO 4) moves to Week 3. The Week 3 EHR orientation session moves to Week 5. Both changes need reflecting in the LMS release schedule and the Week 3, 5, and 6 tutorial run sheets.' },
      { label: 'Tutorial and workshop activity', text: 'Tutors covering Week 3 need briefing on the new documentation content ahead of the semester the change takes effect.' },
      { label: 'LMS resources', text: 'CLO 4 documentation resources move from Week 6 to Week 3. EHR orientation materials move from Week 3 to Week 5.' },
      { label: 'Feedback', text: "With professional communication fully assessed by the care plan, Priya's feedback there becomes the last formal feedback students receive on that CLO, and needs to be complete rather than provisional." },
      { label: 'Marking guide and rubric', text: "All three rubrics are affected. The clinical reflection's overall weighting barely moved, but its composition did: the marking guidance for the blended reflective writing criterion is recalibrated from a 45/55 balance to 30/70 between evidence use and professional voice, with the criterion itself flagged for separation into two criteria at the next formal rubric revision. The care plan is reweighted between its existing criteria to reflect clinical reasoning rising from 16% to 29% and patient-centred care falling from 36% to 25%. The exam rubric loses its professional communication criterion entirely, with those marks redistributed across evidence-based practice and clinical reasoning. All three need updating in the LMS before release." },
    ],
    whatChanged: [
      'Priya arrived confident in one belief: clinical reasoning belongs at the exam. The tool did not contradict that belief, it sharpened it. Once readiness and demand were separated, she could see that \u201cfully demonstrable under pressure\u201d and \u201cnot ready to be assessed at all\u201d had been collapsed into a single low number for two assignments, when only the first was actually true.',
    ],
  },

  david: {
    ld: { name: 'Ben', role: 'Learning designer' },
    ac: { name: 'David', role: 'Course designer' },
    tags: [
      { t: 'Relative emphasis', k: 'amber' },
      { t: 'Clean pass, nothing to resolve', k: 'amber' },
    ],
    context: [
      'David is designing a new History course. His three planned assignments are a source analysis (Week 4, 25%), an essay (Week 8, 35%), and a research portfolio (Week 12, 40%). He has four CLOs: historical reasoning, source analysis and evaluation, historiographical understanding, and research and argumentation. As a new course, there is no existing teaching architecture to check against.',
      'David has spent considerable time thinking about this course before booking time with Ben, the learning designer supporting the Faculty of Arts, as part of the department\u2019s new-course design process. He already has a clear sense of what each assignment is for.',
      'Because there is no existing course to verify, David and Ben build Tab 2 together as part of the design itself, not as a check against something already taught. They agree CLO 2 should be front-loaded, reaching Complete by the source analysis in Week 4. CLO 1 and CLO 3 both build steadily, reaching Complete by the essay in Week 8. CLO 4 builds across the whole course, reaching Complete only at the portfolio in Week 12.',
    ],
    chapters: [
      {
        q: 'Does this feel close enough to build around?',
        beats: [
          { p: 'In Tab 4, David uses Relative Emphasis, rating each assignment\u2019s importance for each CLO on a scale of 1 to 10.' },
          { rows: [
            ['CLO 1 · historical reasoning', '5 / 8 / 7'],
            ['CLO 2 · source analysis and evaluation', '9 / 5 / 3'],
            ['CLO 3 · historiographical understanding', '3 / 6 / 9'],
            ['CLO 4 · research and argumentation', '3 / 5 / 9'],
          ] },
          { shot: { tab: 'Tab 4 \u00b7 CLO Mapping', cap: 'Relative emphasis ratings as entered, no readiness warnings visible.' } },
          { ld: 'Before Tab 5, what would you accept as close enough, given this hasn\u2019t run yet?' },
          { ac: "Within a few points of 25/35/40. I'm not expecting precision on a first pass." },
          { shot: { tab: 'Tab 5 \u00b7 Assignment Weightings', cap: '28 / 34 / 38, against the intended 25 / 35 / 40.' } },
          { ac: "The ordering's right, the source analysis is lightest, the portfolio's heaviest. The source analysis pulling a bit higher than 25 makes sense too: CLO 2's a 9 there, the strongest rating in the whole mapping. I'm comfortable with this." },
          { ld: "You don't want to adjust anything?" },
          { ac: "Not on the evidence of three points here and two there. If this were ten points off I'd want to know why. This is close enough that I trust the mapping reflects how I've actually been thinking about the course." },
          { p: 'Ben checks the readiness bars in Tab 4 against the new demand values. Every readiness figure clears its required minimum with room to spare.' },
          { ld: "No conflicts. Worth knowing that too, it means the sequence you've sketched can comfortably support this demand as it stands." },
        ],
      },
    ],
    extraShots: [
      { tab: 'Tab 2 \u00b7 Teaching Readiness', cap: 'The planned sequence: CLO 2 reaching Complete by Week 4, CLOs 1 and 3 by Week 8, CLO 4 by Week 12.' },
    ],
    impacts: [],
    whatChanged: [
      'David did not iterate, and that is itself worth noticing. He arrived with a carefully considered understanding of the course, expressed it as relative emphasis ratings rather than precise calculations, and the tool converted those judgements into an architecture close enough to his intention to confirm the thinking behind it was coherent. He moves on to Tab 6 to read the rubric composition, the specification for rubrics he has not yet written, with a mapping he is confident in and a teaching sequence that already supports it without adjustment.',
    ],
  },
};

/* Draft scenarios: the older three-zone content re-seated into the chapter layout so
   the wall reads consistently. Replaced scenario by scenario as sessions are written up. */
(function () {
  const Q1 = 'Does this match what you expected to see?';
  const Q2 = 'What happens if we look at where the weight is coming from?';
  const drafts = {
    sarah: { tags: [{ t: 'Direct percentages', k: 'amber' }, { t: 'Assignment carrying more than stated', k: 'red' }, { t: 'Demand redistributed', k: 'green' }] },
    maya: { tags: [{ t: 'Direct percentages', k: 'amber' }, { t: 'Suspicion confirmed', k: 'red' }, { t: 'Emphasis moved to the case analysis', k: 'green' }] },
    aisha: { tags: [{ t: 'Relative emphasis', k: 'amber' }, { t: 'Skew across CLOs', k: 'red' }, { t: 'Demand rebalanced', k: 'green' }] },
    james: { tags: [{ t: 'Relative emphasis', k: 'amber' }, { t: 'New design, no history to check', k: 'amber' }] },
    tom: { tags: [{ t: 'Rubric criteria entered', k: 'amber' }, { t: 'One CLO dominating by accumulation', k: 'red' }, { t: 'Criteria retagged and reweighted', k: 'green' }] },
    lin: { tags: [{ t: 'Rubric criteria entered', k: 'amber' }, { t: 'Foundational CLO underweighted', k: 'red' }, { t: 'Criteria rebalanced', k: 'green' }] },
    rafael: { tags: [{ t: 'Rubric criteria entered', k: 'amber' }, { t: 'Emphasis not where intended', k: 'red' }, { t: 'Criteria rebalanced', k: 'green' }] },
  };
  Object.keys(drafts).forEach((id) => {
    const z = window.ZONES && window.ZONES[id];
    if (!z) return;
    const ch = [{
      q: Q1,
      beats: [
        { p: z.z1.rationale },
        { shot: { tab: 'CLO Mapping \u00b7 as entered', cap: 'The mapping exactly as it stood before any change.', src: 'before' } },
        { stat: { label: z.z1.statLabel, value: z.z1.statValue, note: z.z1.statNote } },
      ],
    }];
    if (!z.z3.textOnly) {
      ch.push({
        q: Q2,
        beats: [
          { p: z.z2 },
          { shot: { tab: 'CLO Mapping \u00b7 revised', cap: 'The mapping after the changes described above.', src: 'after' } },
          { stat: { label: z.z3.statLabel, value: z.z3.statValue, note: z.z3.statNote, after: true } },
          ...(z.z3.note ? [{ p: z.z3.note }] : []),
        ],
      });
    }
    window.CHAPTERS[id] = {
      draft: true,
      tags: drafts[id].tags,
      context: [z.z1.context],
      chapters: ch,
      impacts: (z.z3.impacts || []).map((i) => ({ label: i.label, text: (i.lead ? i.lead + ' ' : '') + i.text })),
      whatChanged: z.z3.quote ? [z.z3.quote] : [],
    };
  });
})();
