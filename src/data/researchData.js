export const COLLOQUIUM_TALKS = [
  {
    id: 'colloq-1',
    term: 'Michaelmas 2026',
    date: 'Tuesday, 20 October 2026',
    venue: 'Cheng Digital Hub Seminar Room 2',
    theme: 'Statistical Inference, Machine Learning & Algorithmic Ethics',
    presentations: [
      {
        speaker: 'Alexander Vance',
        degree: 'DPhil in Statistics (3rd Year)',
        title: 'Nonparametric Matrix Estimation in High-Dimensional Biological Networks',
        abstract: 'Addressing sample sparsity and noisy edge observation in single-cell transcriptomics through spectral shrinkage and minimax lower bound estimators.'
      },
      {
        speaker: 'Eleni Papadopoulos',
        degree: 'DPhil in Philosophy & Ethics of AI (2nd Year)',
        title: 'Hermeneutical Injustice in Algorithmic Decision-Making Systems',
        abstract: 'Examining how predictive risk models marginalize minority conceptual frameworks in automated public sector triage.'
      }
    ]
  },
  {
    id: 'colloq-2',
    term: 'Michaelmas 2026',
    date: 'Tuesday, 1 December 2026',
    venue: 'Cheng Digital Hub Auditorium',
    theme: 'Translational Medicine & Structural Biology',
    presentations: [
      {
        speaker: 'Dr. Megan Rhys-Jones',
        degree: 'DPhil in Clinical Neurosciences (3rd Year)',
        title: 'Synaptic Plasticity Disruption in Early Stage Neurodegenerative Tauopathies',
        abstract: 'Utilizing two-photon live imaging to track dendritic spine remodeling in transgenic murine models under targeted pharmacological inhibition.'
      },
      {
        speaker: 'Hao-Ran Chen',
        degree: 'DPhil in Materials Science (2nd Year)',
        title: 'Perovskite Tandem Photovoltaics: Interfacial Defect Passivation Mechanisms',
        abstract: 'Synthesizing novel 2D/3D heterostructures to achieve operational stability exceeding 3,000 hours under accelerated degradation protocols.'
      }
    ]
  },
  {
    id: 'colloq-3',
    term: 'Hilary 2027 (Upcoming)',
    date: 'Tuesday, 9 February 2027',
    venue: 'Cheng Digital Hub Seminar Room 1',
    theme: 'Law, Global Governance & Early Modern History',
    presentations: [
      {
        speaker: 'Alastair Montgomery',
        degree: 'BCL (Bachelor of Civil Law)',
        title: 'Restitution for Unjust Enrichment in Cross-Border Conflict of Laws',
        abstract: 'Comparative analysis of UK Supreme Court jurisprudence and civil law codifications on transnational asset tracing.'
      },
      {
        speaker: 'Eleanor Vance',
        degree: 'DPhil in History (3rd Year)',
        title: 'Printing, Welsh Identity & the Elizabethan Intellectual Circle at Jesus College',
        abstract: 'Archival investigation into Hugh Price’s founding benefactions and the dissemination of the 1588 Welsh Bible translation.'
      }
    ]
  }
];

export const GRANTS_AND_FUNDING = [
  {
    id: 'academic-travel',
    title: 'MCR Academic Conference & Travel Grant',
    maxAmount: 'Up to £600 per academic year',
    eligibility: 'All matriculated Jesus College graduate students (DPhil, MSc, MSt, BCL)',
    description: 'Subsidises travel, conference registration, accommodation, and presentation costs for national and international research symposia.',
    deadlines: 'Evaluated termly at 4th and 7th week MCR committee meetings.'
  },
  {
    id: 'book-grant',
    title: 'College Graduate Book & Equipment Allowance',
    maxAmount: 'Up to £150 per academic year',
    eligibility: 'All research and taught postgraduate members',
    description: 'Reimbursement for textbooks, academic monographs, specialized statistical software licences, and hardware peripherals directly relevant to your degree.',
    deadlines: 'Rolling submissions via the College Bursary.'
  },
  {
    id: 'hardship-fund',
    title: 'Graduate Hardship & Emergency Support Fund',
    maxAmount: 'Discretionary (up to £2,500)',
    eligibility: 'Postgraduates experiencing unforeseen financial distress',
    description: 'Confidential financial assistance for sudden exchange rate fluctuations, family emergencies, or unexpected living cost spikes.',
    deadlines: 'Reviewed continuously by the Senior Tutor and MCR President.'
  }
];
