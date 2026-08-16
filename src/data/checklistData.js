export const FRESHERS_CHECKLIST = [
  {
    phase: 'Pre-Arrival',
    items: [
      {
        id: 'chk-visa-cas',
        title: 'Complete Student Visa & CAS verification',
        desc: 'International students: ensure your BRP or digital eVisa status is confirmed before traveling.',
        category: 'Admin',
        essential: true
      },
      {
        id: 'chk-college-contract',
        title: 'Sign & return Jesus College Financial Declaration and Tenancy',
        desc: 'Submit your signed college contract and accommodation agreement to the Academic Office.',
        category: 'College',
        essential: true
      },
      {
        id: 'chk-ox-single-sign-on',
        title: 'Activate Oxford Single Sign-On (SSO) & Email',
        desc: 'Activate your @ox.ac.uk email and set up two-factor authentication on Oxford SSO.',
        category: 'IT',
        essential: true
      },
      {
        id: 'chk-vaccinations',
        title: 'Verify immunisations (Meningitis ACWY & MMR)',
        desc: 'Ensure your required university vaccinations are up to date before arriving in Oxford.',
        category: 'Health',
        essential: false
      }
    ]
  },
  {
    phase: 'First 48 Hours',
    items: [
      {
        id: 'chk-collect-bod-card',
        title: 'Collect Bodleian (Bod) Card & Room Keys from Porters’ Lodge',
        desc: 'Visit the Jesus College Lodge on Turl Street with photo ID to collect your keys and Bod Card.',
        category: 'College',
        essential: true
      },
      {
        id: 'chk-register-gp',
        title: 'Register with Jericho Health Centre / College GP',
        desc: 'Complete the online registration with the college-linked medical surgery in Jericho.',
        category: 'Health',
        essential: true
      },
      {
        id: 'chk-connect-eduroam',
        title: 'Connect laptops and phones to Eduroam Wi-Fi',
        desc: 'Generate remote access credentials via Oxford IT and connect all devices.',
        category: 'IT',
        essential: true
      },
      {
        id: 'chk-mcr-pidge',
        title: 'Check your College Pigeonhole (Pidge)',
        desc: 'Check your physical pidge in the Lodge for college welcome letters, library guides, and freshers packet.',
        category: 'College',
        essential: false
      }
    ]
  },
  {
    phase: 'Freshers Week (Week 0)',
    items: [
      {
        id: 'chk-attend-mcr-welcome',
        title: 'Attend MCR President Welcome & Drinks',
        desc: 'Join the Harold Wilson Room gathering on Wednesday evening of Week 0.',
        category: 'Social',
        essential: false
      },
      {
        id: 'chk-buy-sub-fusc',
        title: 'Acquire Sub Fusc & Graduate Gown for Matriculation',
        desc: 'Visit Shepherd & Woodward or Walters of Oxford to purchase or rent your Oxford graduate gown and mortarboard.',
        category: 'Academic',
        essential: true
      },
      {
        id: 'chk-setup-upay',
        title: 'Set up Upay / EPOS account for Formal Dining & Cafeteria',
        desc: 'Link your Bod Card to the college dining portal for meal booking and buttery payments.',
        category: 'Dining',
        essential: true
      },
      {
        id: 'chk-library-induction',
        title: 'Meyricke & Bodleian Library Induction',
        desc: 'Tour the Jesus College Meyricke Library and Radcliffe Camera / Weston Library.',
        category: 'Academic',
        essential: false
      }
    ]
  }
];

export const SUB_FUSC_RULES = [
  {
    element: 'Gown',
    rule: 'Oxford Advanced Student / Graduate Gown (for DPhil, MSc, MSt, BCL candidates).'
  },
  {
    element: 'Headwear',
    rule: 'Mortarboard (held under the arm indoors) or Black Soft Cap.'
  },
  {
    element: 'Top',
    rule: 'Plain white collared shirt or blouse with long sleeves and stiff collar.'
  },
  {
    element: 'Neckwear',
    rule: 'White bow tie, black bow tie, black ribbon tie, or black necktie.'
  },
  {
    element: 'Bottom',
    rule: 'Dark suit, dark skirt with black tights/stockings, or dark tailored trousers with black socks.'
  },
  {
    element: 'Footwear',
    rule: 'Plain, smart black polished shoes (no casual trainers or open sandals).'
  }
];
