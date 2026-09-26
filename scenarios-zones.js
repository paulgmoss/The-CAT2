/* CAT, Scenarios page content, restructured to the three-zone brief.
   Screenshots are reused from scenarios-data.js by id. */
window.ZONES = {
  sarah: {
    pathway: 'A',
    summary: 'The course runs well, but Sarah has a nagging sense the campaign proposal is doing more work than the other two assignments.',
    z1: {
      context: 'Sarah coordinates a second-year Marketing course with three assignments: a brand audit (30%), a campaign proposal (40%), and a pitch presentation (30%), mapped against four equally weighted CLOs covering consumer behaviour analysis, strategic communication, market research methods, and professional presentation.',
      rationale: 'She enters her existing mapping by distributing each CLO’s budget directly as percentages (image opposite), and in combination with the CLO weightings, produces the output below.',
      statLabel: 'Implied split, brand audit / campaign / pitch',
      statValue: '28 / 47 / 26',
      statNote: 'vs. the 30 / 40 / 30 Sarah intended',
    },
    z2: 'The campaign proposal appears to have been carrying 7 percentage points more than stated. The teaching and assessment architecture may have been treating it as a 47% task while students were told it was worth 40%. That extra emphasis could have been going into the campaign proposal rather than into the brand audit and pitch, with students preparing accordingly. She alters the mapping (image opposite) and it changes the implied assignment weightings below.',
    z3: {
      statLabel: 'Revised implied split, brand audit / campaign / pitch',
      statValue: '29 / 41 / 30',
      statNote: 'now close to the intended 30 / 40 / 30',
      impacts: [
        { label: 'Assessment load and student effort', lead: 'Students may have been allocating effort against a 47% campaign proposal without knowing it.', text: 'The revised mapping suggests where that investment might usefully move: into the brand audit and pitch, which may have been under-resourced.' },
        { label: 'Tutorial time and teaching sequence', lead: 'Tutorials 5 and 6 now need new content.', text: 'Consumer behaviour analysis belongs in pitch preparation, audience segmentation, consumer motivation applied to pitch audiences, work that was never built because the old mapping did not recognise the pitch as a consumer behaviour task.' },
        { label: 'LMS resources', lead: 'Resources may have drifted toward the campaign proposal stream.', text: 'The pitch module could benefit from auditing and rebuilding: consumer behaviour frameworks may need to extend into pitch preparation, not just the brand audit and campaign proposal streams.' },
        { label: 'Feedback', lead: 'Literature review feedback on CLO 1 now needs to signal how consumer behaviour analysis will apply differently in the pitch.', text: 'That connection was never made explicit before, but now the revised mapping makes it a requirement.' },
      ],
      quote: 'The mapping was not wrong, it was honest. It recorded a course that had drifted from what students were told they were taking.',
    },
  },

  omar: {
    pathway: 'A',
    summary: "Omar's course has run successfully for three years. He enters his mapping to create a record for an upcoming accreditation cycle, and discovers something he did not expect.",
    z1: {
      context: 'Omar coordinates a third-year Environmental Science course with three assignments: a field report (30%), a data analysis (40%), and a policy brief (30%). He has four equally weighted CLOs covering ecological systems analysis, quantitative data interpretation, stakeholder communication, and evidence-based policy reasoning.',
      rationale: "He uses the relative emphasis approach (image opposite), entering a ratio for each CLO across the three assignments to reflect where it carries more of the assessment, revealing the assignment weights below.",
      statLabel: 'Implied split, field report / data analysis / policy brief',
      statValue: '18 / 31 / 51',
      statNote: 'vs. the 30 / 40 / 30 Omar intended',
    },
    z2: 'The policy brief appears to have been carrying 21 percentage points more than stated. Omar had been running a course with a stated 30/40/30 structure that his own mapping implied was closer to 18/31/51, where the final assignment may have carried more than half the course grade. Students who had been allocating effort in proportion to the stated weights may have been under-investing in the policy brief for three years. He altered the mapping as shown (image opposite) resulting in the new assignment weightings.',
    z3: {
      statLabel: 'Revised implied split, field report / data analysis / policy brief',
      statValue: '23 / 36 / 41',
      statNote: 'now closer to the intended 30 / 40 / 30',
      note: 'The revised mapping included one deliberate sufficiency decision: ecological systems analysis was fully covered by the field report and data analysis and did not need to be carried into the policy brief. Setting it to zero there released weight back toward the earlier assignments.',
      impacts: [
        { label: 'Assessment load and student effort', lead: 'Students can now allocate effort much closer to the stated 30/40/30 split.', text: 'The policy brief remains the heaviest assignment, but it no longer carries more than the other two combined.' },
        { label: 'Tutorial time and teaching sequence', lead: 'Ecological systems analysis no longer needs to be developed toward the policy brief.', text: 'The final teaching weeks can redirect toward stakeholder communication and evidence-based policy reasoning, the CLOs that genuinely culminate there. The teaching sequence becomes more focused and more honest about what the policy brief is actually for.' },
        { label: 'LMS resources', lead: 'Ecological systems resources can be concentrated in the weeks leading into the field report and data analysis.', text: 'Resources in the final weeks can be rebuilt around policy writing, stakeholder analysis, and evidence-based argumentation, the CLOs the policy brief now appears to be primarily assessing.' },
        { label: 'Feedback', lead: 'Feedback on the data analysis becomes the final formal feedback students receive on ecological systems analysis.', text: 'It needs to be complete and developmental rather than provisional, as it cannot assume another opportunity will follow.' },
      ],
      quote: 'The ratios I entered reflect how I actually teach this course. I did not realise their combined effect was concentrating so much of the grade in the policy brief, and that students had been experiencing a very different course from the one I described to them.',
    },
  },

  tom: {
    pathway: 'B',
    summary: 'Tom has always felt that case analysis is the core intellectual work of this course. He enters his existing rubric criteria to find out whether they agree.',
    z1: {
      context: 'Tom coordinates a second-year Law course with three assignments: a problem question (40%), a moot (20%), and a research essay (40%). He has four equally weighted CLOs covering legal reasoning, case analysis, statutory interpretation, and research and argumentation.',
      rationale: 'He uses Pathway B (image opposite), entering his existing rubric criteria and mapping each to its primary CLO, producing the implied CLO distribution below.',
      statLabel: 'Implied CLO distribution',
      statValue: 'legal reasoning 40% · case analysis 28% · statutory interpretation 19% · research and argumentation 12%',
      statNote: 'vs. the equal 25% weighting Tom intended for each',
    },
    z2: 'Legal reasoning was dominating at 40%, not because Tom had prioritised it, but because it threaded through multiple criteria across all three assignments, accumulating weight invisibly. Case analysis, which Tom considers the course\u2019s primary intellectual demand, sat at 28%. Research and argumentation, a foundational academic law skill, was the least weighted CLO at 12% with no presence in the moot at all. He adjusts the criteria (image opposite), producing the revised distribution below.',
    z3: {
      statLabel: 'Revised CLO distribution',
      statValue: 'legal reasoning 34% · case analysis 32% · statutory interpretation 18% · research and argumentation 16%',
      statNote: 'case analysis now second only to legal reasoning',
      note: 'Three targeted criteria changes produced this shift: case citation in the moot (mapped to CLO2) increased from 35 to 50 marks, advocacy structure (mapped to CLO 1) reduced from 25 to 10; case analysis in the research essay (mapped to CLO 2) increased from 25 to 30 marks; research and argumentation (CLO 4) consolidated across both assignments, increasing from 10 to 20 marks each.',
      impacts: [
        { label: 'Assessment load and student effort', lead: 'Students may have been allocating significant time to advocacy performance, structure, delivery, presentation.', text: 'With advocacy structure reduced to 10 marks that effort is no longer proportionate. Students may need to redirect toward case application and legal argument, which is the primary moot skill at second-year level.' },
        { label: 'Tutorial time and teaching sequence', lead: 'Case analysis now needs a clearer through-line across all three assessment points.', text: 'Tutorials spending significant time on advocacy skills and research techniques can redirect toward case analysis practice, structured exercises, peer critique of legal arguments, case application to novel fact scenarios.' },
        { label: 'LMS resources', lead: 'Resources supporting advocacy performance were proportionate to a 25-mark criterion.', text: 'At 10 marks they are now over-represented. The LMS needs to redirect depth toward case analysis and research and argumentation, case law databases, analytical frameworks, research methodology guides.' },
        { label: 'Feedback', lead: "Tom's feedback across all three assignments needs to foreground case analysis and research and argumentation more explicitly.", text: 'If students have been receiving detailed feedback on legal reasoning and advocacy while case analysis feedback was lighter, the revised criteria require a rebalancing of where feedback depth is invested.' },
      ],
      quote: 'My rubrics were not saying what I think this course is. Legal reasoning was dominant not by design but by accumulation, and nobody knew, including me.',
    },
  },

  maya: {
    pathway: 'A',
    summary: 'After two iterations Maya has noticed students performing better on the exam than on the case analysis. She suspects the teaching emphasis has drifted.',
    z1: {
      context: 'Maya coordinates a second-year Business Ethics course with three assignments: a literature review (30%), a case analysis (40%), and a final exam (30%). She has four CLOs covering ethical reasoning (30%), stakeholder analysis (25%), applied judgement (25%), and written communication (20%).',
      rationale: 'She enters her mapping (image opposite) to test that suspicion, producing the implied split below.',
      statLabel: 'Implied split, literature review / case analysis / exam',
      statValue: '30 / 33 / 37',
      statNote: 'vs. the 30 / 40 / 30 Maya intended',
    },
    z2: 'The mapping was consistent with her suspicion. Ethical reasoning and applied judgement were both pointing toward the exam rather than the case analysis, suggesting the course as taught may have been directing more intellectual energy toward exam preparation than the case analysis demands. The case analysis was sitting at 33% against its stated 40%, and the exam at 37% against its stated 30%. She alters the mapping (image opposite), producing the revised split below.',
    z3: {
      statLabel: 'Revised implied split, literature review / case analysis / exam',
      statValue: '27 / 41 / 31',
      statNote: 'now close to the intended 30 / 40 / 30',
      impacts: [
        { label: 'Assessment load and student effort', lead: 'Students may have been under-investing in the case analysis relative to its implied weight of 33%.', text: 'The revised architecture signals more clearly that the case analysis is the primary assessment moment, and students need to know that from the start.' },
        { label: 'Tutorial time and teaching sequence', lead: 'Tutorials that had been building toward exam preparation need to rebalance toward case analysis skills.', text: 'Applied ethical reasoning, stakeholder mapping in real business contexts, and structured analytical argumentation. The weeks preceding the case analysis need to be explicitly developmental rather than exam-focused.' },
        { label: 'LMS resources', lead: 'The course site has likely accumulated more exam preparation resources than the revised architecture warrants.', text: 'The case analysis stream needs deeper support: real business ethics cases, analytical scaffolding tools, and formative activities that give students low-stakes practice in applied ethical reasoning.' },
        { label: 'Feedback', lead: 'Literature review feedback becomes the critical formative moment that shapes how students approach the case analysis.', text: 'That feedback now needs to be explicitly developmental, directing what students need to do differently in the case analysis that follows.' },
      ],
      quote: 'The mapping reflects how I have actually been teaching this course. Ethical reasoning and applied judgement were both pointing toward the exam. That is where the energy had been going, and it is not where I want it.',
    },
  },

  priya: {
    pathway: 'A',
    summary: 'Priya wants to concentrate clinical reasoning more heavily toward the case study exam, and discovers the proposed change makes things worse before finding what actually works.',
    z1: {
      context: 'Priya coordinates a third-year Nursing course with three assignments: a clinical reflection (20%), a care plan (40%), and a case study exam (40%). She has four CLOs covering clinical reasoning (30%), patient-centred care (25%), evidence-based practice (30%), and professional communication (15%).',
      rationale: 'She uses the relative emphasis approach throughout (image opposite), entering ratios that build toward the exam, testing whether her intended change produces the implied weights she wants, shown below.',
      statLabel: 'Implied split, clinical reflection / care plan / exam',
      statValue: '17 / 33 / 50',
      statNote: 'vs. the 20 / 40 / 40 Priya intended',
    },
    z2: 'Ratios that leaned toward the exam in every CLO row had concentrated too much weight there across all four CLOs simultaneously. Priya\u2019s intended change, concentrating clinical reasoning even further toward the exam, made things worse, shifting the split to 15/31/54. The problem was not one CLO row but the combined effect of all four. The tool showed her that her proposed change was moving in the wrong direction before she committed to it. She alters the mapping as shown (image opposite), producing the revised split below.',
    z3: {
      statLabel: 'Revised implied split, clinical reflection / care plan / exam',
      statValue: '20 / 40 / 40',
      statNote: 'exactly matching the intended split',
      note: 'The key insight was a sufficiency decision: professional communication was fully assessed by the care plan and did not need to continue into the exam. Setting it to zero there released weight back toward the earlier assignments, allowing the three remaining CLOs to carry the exam weight appropriately.',
      impacts: [
        { label: 'Assessment load and student effort', lead: 'Students had been operating under a stated 20/40/40 split while the mapping implied 17/33/50.', text: 'The exam appears to have been carrying 10 percentage points more than stated. The course as resourced said one thing; the course as experienced by students may have told a different story. The revised mapping is now coherent with what students have been told.' },
        { label: 'Tutorial time and teaching sequence', lead: 'Professional communication no longer needs to be developed toward the exam, its teaching arc closes at the care plan.', text: 'The final weeks can redirect toward clinical reasoning under pressure, evidence-based decision-making in complex scenarios, and patient-centred care in high-stakes contexts.' },
        { label: 'LMS resources', lead: 'Professional communication resources can be concentrated in the weeks leading into the clinical reflection and care plan.', text: 'The final weeks of the LMS can be rebuilt around the three CLOs that culminate in the exam, clinical reasoning, evidence-based practice, and patient-centred care.' },
        { label: 'Feedback', lead: 'Feedback on the care plan is the final formal feedback students receive on professional communication.', text: 'It needs to be complete and developmental. For the three CLOs that continue into the exam, care plan feedback becomes the critical formative moment that shapes exam preparation.' },
      ],
      quote: 'The sufficiency decision on professional communication was the key adjustment. Once I accepted that the care plan fully covers that CLO, the exam could carry the remaining three at the weight they deserve.',
    },
  },

  aisha: {
    pathway: 'A',
    summary: 'Aisha enters her mapping to check whether her assignment weights are coherent with her CLO design. Tab 3 shows a discrepancy, but the fix is not in the mapping. It is in Tab 1.',
    z1: {
      context: 'Aisha coordinates a second-year Research Methods in Psychology course with three assignments: a research proposal (30%), a data analysis report (40%), and a critical review (30%). She has four CLOs covering research design, statistical reasoning, critical evaluation of evidence, and academic communication.',
      rationale: "She distributes each CLO's budget directly as percentages (image opposite), reflecting where each skill is most directly assessed, producing the implied split below.",
      statLabel: 'Implied split, proposal / data analysis / critical review',
      statValue: '35 / 41 / 24',
      statNote: 'vs. the 30 / 40 / 30 Aisha intended',
    },
    z2: 'The critical review was implied at 24% rather than its stated 30%. Aisha\u2019s first instinct was to adjust the mapping, but the mapping was correct. Critical evaluation was already weighted most heavily toward the critical review, 60% of its budget. The problem was upstream: critical evaluation was weighted at only 20% in Tab 1. Even with 60% of its domain in the critical review, a 20% CLO can only contribute 12% to that assignment\u2019s total. The mapping was not the lever she needed.',
    z3: {
      statLabel: 'Revised implied split, proposal / data analysis / critical review',
      statValue: '31 / 40 / 29',
      statNote: 'now close to the intended 30 / 40 / 30',
      note: 'The fix was a single Tab 1 change: research design reduced from 40% to 30%, critical evaluation increased from 20% to 30%. The mapping was not touched.',
      impacts: [
        { label: 'What actually changed', lead: 'Aisha did not redesign her course.', text: 'The mapping was correct all along, it had been driving the teaching structure, assessment design, and resource allocation in ways that accurately reflected her pedagogical intentions. What was incorrect was the CLO weighting, a first guess that understated critical evaluation relative to research design.' },
        { label: 'How Aisha communicates the course', lead: 'The course outline and assessment overview now need to reflect three equally valued outcomes.', text: 'Students should understand from the outset that the critical review is as significant an assessment moment as the research proposal.' },
        { label: 'How Aisha gives feedback', lead: 'If feedback on the critical review has been lighter than feedback on the research proposal, that needs to rebalance.', text: 'The feedback investment across all three assignments should now reflect three equally primary CLOs.' },
        { label: 'How Aisha represents the course externally', lead: 'In programme mapping, AOL reporting, and accreditation submissions, 20% for critical evaluation sends a very different signal from 30%.', text: 'The revised weighting gives Aisha a more accurate and defensible account of her course priorities.' },
      ],
      quote: 'The mapping was correct all along. What was wrong was how much I said critical evaluation was worth, and fixing that was not a course redesign. It was an act of professional self-knowledge.',
    },
  },

  lin: {
    pathway: 'B',
    summary: 'Lin has a strong intuition that spatial reasoning is underweighted in her rubrics. They enter their criteria to find out by exactly how much.',
    z1: {
      context: 'Lin coordinates a second-year Architecture course with three assignments: a design concept (30%), a technical drawing (30%), and a portfolio (40%). They have four CLOs covering spatial reasoning, technical precision, design communication, and creative synthesis.',
      rationale: 'Lin inputs the rubric criteria mapping and weights for each assignment. Assignment 1 data is seen in the image opposite. The result for inputting the 3 assignments is the implied CLO weightings, shown below.',
      statLabel: 'Implied CLO distribution',
      statValue: 'spatial reasoning (CLO 1) 17.71% · technical precision (CLO 2) 29.57% · design communication (CLO 3) 20.57% · creative synthesis (CLO 4) 32.14%',
      statNote: 'spatial reasoning the least weighted CLO in the course',
    },
    z2: 'Lin knew CLO 1 was underweighted. What they did not know was by exactly how much, or what increasing criteria that were mapped to CLO 1 would do to every other CLO. A 10-mark increase in each assignment felt significant, but whether it was enough to bring spatial reasoning into meaningful prominence, or whether it would overcorrect, was not something they could calculate from the rubric alone. The added marks across the 3 assignments moved CLO 1 to 30% of the course weight.',
    z3: {
      statLabel: 'Revised CLO distribution',
      statValue: 'spatial reasoning 30% · technical precision 25% · design communication 17.5% · creative synthesis 27.5%',
      statNote: 'spatial reasoning now the most weighted CLO, a 12 percentage point shift from one criterion change',
      impacts: [
        { label: 'Assessment load and student effort', lead: 'At 20 marks spatial reasoning becomes the single most marks-bearing criterion in the design concept assignment (see image above opposite).', text: 'Students who may have been treating spatial reasoning as secondary may need to reorient their preparation across all three assignments.' },
        { label: 'Tutorial time and teaching sequence', lead: 'Spatial reasoning is now assessed at equal intensity across all three assignments.', text: 'It needs to be explicitly taught and practised from the first week of the course, not deferred to a later assessment block. Tutorials need to incorporate spatial reasoning exercises earlier and more consistently.' },
        { label: 'LMS resources', lead: 'The course site needs to reflect spatial reasoning as a primary CLO from the outset.', text: 'Resources supporting its development, site analysis frameworks, spatial perception exercises, three-dimensional modelling guides, need to be distributed across all three assessment streams.' },
        { label: 'Feedback', lead: 'Feedback on the design concept spatial reasoning criterion is now the first of three substantial feedback moments on this CLO.', text: 'It needs to be specific and developmental enough to inform how students approach spatial reasoning in the technical drawing and portfolio that follow.' },
      ],
      quote: 'Spatial reasoning is the most fundamental architectural capability I am developing in this course. At 17.71% it was not reflecting its importance. Now it does, and the course needs to be built around that.',
    },
  },

  rafael: {
    pathway: 'B',
    summary: 'Rafael feels quantitative analysis and policy evaluation need more weight. The tool shows him the lever he reached for barely moves the needle, and points him toward the one that does.',
    z1: {
      context: 'Rafael coordinates a third-year Economics course with three assignments: a literature review (25%), a policy analysis (40%), and a final exam (35%). He has four CLOs covering economic theory, quantitative analysis, policy evaluation, and academic communication.',
      rationale: 'His instinct is to increase the exam weighting, and he uses the tool (image opposite) to test that before committing, comparing against the distribution below.',
      statLabel: 'Implied CLO distribution',
      statValue: 'economic theory 34.25% · quantitative analysis 24.25% · policy evaluation 24.25% · academic communication 17.25%',
      statNote: 'economic theory dominant, quantitative analysis and policy evaluation underweighted',
    },
    z2: 'Rafael proposed shifting the exam from 35% to 40% and reducing the literature review from 25% to 20%. The tool showed him the result: quantitative analysis moved from 24.25% to 26%, and policy evaluation from 24.25% to 26%, less than 2 percentage points of movement from a 5 percentage point shift in assignment weights. The lever he reached for barely moved the needle.',
    z3: {
      textOnly: true,
      note: 'Rafael did not commit to a change. The tool did not just show him what his proposed change would do, it showed him that a different change would do more, and pointed him toward where it needed to happen.',
      impacts: [
        { label: 'The real lever', lead: 'In Pathway B, assignment weights are a multiplier on the criteria structure.', text: 'If the criteria proportions stay the same, shifting the assignment weight scales everything proportionally, the CLOs that were absent stay absent. The literature review has no quantitative analysis criterion at all. Adding one would introduce CLO 2 into an assignment where it currently has zero presence, producing a more substantial shift than any weight adjustment could achieve.' },
        { label: 'The question the tool surfaced', lead: 'Should a third-year Economics literature review require students to engage with quantitative evidence, even at an introductory level?', text: 'Rafael had never been asked to answer that question directly. The tool made it unavoidable.' },
        { label: 'What Rafael does next', lead: 'He does not commit to the assignment weight change.', text: 'Instead he opens the literature review criteria and considers adding a quantitative evidence engagement criterion. That is where the next iteration begins, not in the assignment weights, but in the rubric.' },
      ],
      quote: 'Shifting the exam weight from 35% to 40% felt like the obvious move. The tool showed me it barely moves the needle on the CLOs I care about. The real question is why quantitative analysis has no presence in the literature review at all.',
    },
  },

  james: {
    pathway: 'A',
    summary: 'James is building a new course from scratch. He uses the tool to test whether his CLO mapping produces the assignment weights he intends before writing a single assessment brief.',
    z1: {
      context: 'James is designing a new Civil Engineering course with three planned assignments: a design brief (30%), a lab report (35%), and a presentation (35%). He has four CLOs covering structural analysis (30%), materials science (25%), engineering design (30%), and professional communication (15%).',
      rationale: "He uses the direct approach (image opposite), distributing each CLO's budget across assignments as percentages, producing the implied split below.",
      statLabel: 'First attempt implied split, design brief / lab report / presentation',
      statValue: '35 / 40 / 25',
      statNote: 'vs. the 30 / 35 / 35 James intended',
    },
    z2: 'The direct approach feels intuitive, enter the percentages, get the split you intended. But the mapping values interact across all CLO rows simultaneously, and no single row can be set in isolation. James\u2019s first attempt concentrated structural analysis and materials science too heavily in the lab report, pulling it to 40% and leaving the presentation at only 25%. Two further iterations were needed before the implied weights came close to his intention.',
    z3: {
      statLabel: 'Third attempt implied split, design brief / lab report / presentation',
      statValue: '30 / 37 / 33',
      statNote: 'close enough to the intended 30 / 35 / 35 to build the course around',
      impacts: [
        { label: 'What Tab 4 revealed about the rubrics', lead: 'For a new course, Tab 4 is a specification for rubrics James has not yet written.', text: 'The design brief showed engineering design at 40% of that assignment\u2019s marks, confirming his intention. The lab report split almost equally between structural analysis and materials science. But the presentation showed professional communication at only 15.2%, in an assignment entirely delivered through communication.' },
        { label: 'The design question the tool surfaced', lead: 'Is the presentation primarily a technical synthesis task with communication as a secondary feature, or should professional communication carry more weight?', text: 'James had not been asked to answer that question before. The rubric composition made it unavoidable, and answerable, before the brief was written and distributed to students.' },
        { label: 'Why new design is the highest-value context', lead: 'For a new course, the first signal that a design is misaligned is usually student performance data.', text: 'That arrives after the course has run and after students have been affected. The tool moves that signal upstream into the design stage, where every adjustment is still costless.' },
      ],
      quote: 'Three iterations of mapping before the implied weights came close to my intention. And even then Tab 4 surfaced a question about the presentation I had not thought to ask. That is exactly where those questions should be answered, before the briefs go out.',
    },
  },

  david: {
    pathway: 'A',
    summary: 'David enters his mapping using relative emphasis values on a 1 to 10 scale, expressing pedagogical judgement rather than calculating percentages.',
    z1: {
      context: 'David is designing a new History course with three planned assignments: a source analysis (25%), an essay (35%), and a research portfolio (40%). He has four CLOs covering historical reasoning (30%), source analysis and evaluation (25%), historiographical understanding (25%), and research and argumentation (20%).',
      rationale: "He uses the relative emphasis approach (image opposite), rating each assignment's importance for each CLO on a scale of 1 to 10, producing the implied split below.",
      statLabel: 'Implied split, source analysis / essay / portfolio',
      statValue: '28 / 34 / 38',
      statNote: 'vs. the 25 / 35 / 40 David intended',
    },
    z2label: 'The confirmation',
    z2: 'David does not find a problem. The implied split at 28/34/38 is within 3 percentage points of his intended 25/35/40 on every assignment, a remarkably close result for a first attempt using intuitive values on a 1 to 10 scale. The relative ordering is exactly right: the source analysis is the lightest assignment, the essay sits in the middle, the portfolio carries the most weight. The tool is not surfacing a discrepancy. It is confirming that David\u2019s thinking about his course is internally coherent.',
    z3: {
      statLabel: 'Tab 4, rubric composition for a course not yet built',
      statValue: '28 / 34 / 38',
      statNote: 'a specification for rubrics David has not yet written',
      impacts: [
        { label: 'What Tab 4 provides', lead: 'For a new course, Tab 4 is not a verification of existing rubrics, it is a specification.', text: 'The implied CLO composition for each assignment tells David what proportion of each assignment\u2019s marks each CLO should carry, derived directly from his mapping decisions.' },
        { label: 'The confirmation is itself an impact', lead: 'David arrived with careful, considered thinking about his course.', text: 'He expressed that thinking as relative emphasis values, not precise calculations but pedagogical judgements. The tool converted those judgements into an implied architecture that closely matches his intentions. That confirmation tells David that the way he has been imagining his course is internally consistent.' },
        { label: 'What the tool is building toward', lead: 'The deeper value of repeated tool engagement is not that educators will always find a problem.', text: 'It is that the process of entering values, seeing consequences, confirming or adjusting, gradually internalises the alignment logic. David\u2019s near-perfect first attempt is not luck, it is the result of careful thinking before touching the tool.' },
      ],
      quote: 'The implied weights are close enough to my intentions that I am confident the mapping reflects how I have been thinking about this course. I am comfortable building around these numbers.',
    },
  },
};

window.CONTEXT_META = {
  verifying: { label: 'Verification', blurb: 'You are checking whether a course that already exists is doing what you think it is doing.' },
  refining: { label: 'Refinement', blurb: 'You already know something needs to change, you are using the tool to find out exactly what.' },
  designing: { label: 'New Design', blurb: 'You are building a course from scratch and using the tool to construct and verify alignment as you go, before briefs are written and rubrics are built.' },
};
