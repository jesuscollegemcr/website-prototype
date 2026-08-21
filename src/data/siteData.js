export const HERO_DATA = {
  title: 'Welcome to the Jesus College MCR',
  subtitle: 'The postgraduate community of Jesus College in the University of Oxford',
  intro: 'The Middle Common Room (MCR) is the community of graduate students at Jesus College, Oxford. We have a membership of over 300 graduate students representing a diverse range of cultures and backgrounds.',
  heroImage: '/pictures/first_quad.avif'
};

export const ABOUT_DATA = {
  title: 'About the Jesus Middle Common Room (MCR)',
  lead: 'The Middle Common Room (MCR) refers broadly to both a vibrant student community and a collection of dedicated physical spaces within Jesus College.',
  paragraphs: [
    'As a community, we are a collection of Doctoral, Master’s, Part II, Post-Doctoral, and mature Undergraduate students from across all disciplines offered at Jesus College.',
    'As a physical space, we offer a variety of locations, facilities, and services to have fun, socialise, study, and relax right in the heart of Oxford.'
  ],
  images: [
    {
      src: '/pictures/first_quad.avif',
      alt: 'Jesus College First Quadrangle',
      title: 'First Quadrangle',
      subtitle: 'Historic 16th-century heart of Jesus College on Turl Street'
    },
    {
      src: '/pictures/hall.jpg',
      alt: 'Jesus College Dining Hall',
      title: 'The Dining Hall',
      subtitle: 'Elizabethan hall for MCR formal dinners'
    },
    {
      src: '/pictures/mcr_wall.avif',
      alt: 'Jesus College Middle Common Room',
      title: 'Middle Common Room',
      subtitle: 'Dedicated common room, lounge, and social spaces for postgraduates'
    },
    {
      src: '/pictures/ship_street.avif',
      alt: 'Ship Street Centre, Jesus College',
      title: 'Ship Street Centre',
      subtitle: 'Postgraduate accommodation and modern college facilities'
    }
  ]
};

export const FACILITIES_DATA = [
  {
    id: 'upper-mcr',
    title: 'The Upper MCR',
    location: 'Staircase XI, Second Quad (Main Site)',
    description: 'The Upper MCR features comfortable Chesterfield sofas and wingback armchairs on which to relax or study. Enjoy a cup of tea or coffee prepared in our kitchenette and coffee machine.',
    tag: 'Social & Study Lounge',
    icon: 'coffee'
  },
  {
    id: 'bunker',
    title: 'The Bunker',
    location: 'Staircase XI (Basement), Second Quad',
    description: 'The Bunker contains a widescreen television, a sound system, games consoles, a library of board games, plus cosy couches. If you are feeling more active, challenge friends to pool, foosball, darts, or borrow supplies for croquet or spikeball.',
    tag: 'Games & Entertainment',
    icon: 'tv'
  },
  {
    id: 'study-room',
    title: 'Graduate Study Room',
    location: 'Top Floor, Cheng Yu Tung Building',
    description: 'A quiet, light-filled study sanctuary reserved exclusively for postgraduate members, offering panoramic views over the historic rooftops of Jesus College towards Radcliffe Square and the Bodleian Library.',
    tag: 'Quiet Academic Space',
    icon: 'book'
  },
  {
    id: 'welfare',
    title: 'Welfare & Wellbeing Provision',
    location: 'Throughout College & Welfare Lockers',
    description: 'Our welfare provision includes dedicated Welfare Reps whom you can approach confidentially with any concerns, as well as our weekly welfare teas, and regular welfare brunches. Welfare Lockers are also available on the main site.',
    tag: 'Support & Wellbeing',
    icon: 'heart'
  }
];

export const CALENDAR_DATA = {
  title: 'MCR Events & Social Calendar',
  term: 'Live MCR Calendar',
  notice: "Freshers' Week schedule and Michaelmas term card is coming soon!",
  description: 'From weekly formal dinners and exchange banquets with Oxford & Cambridge colleges, to BOPs, graduate colloquia, pub quizzes, and weekend outings, explore the live Jesus MCR calendar below.',
  calendarId: '07fa50fa3019ceb820889ca068b653cda9021fbba7d121c8ea0c0e967dcff484@group.calendar.google.com',
  cid: 'MDdmYTUwZmEzMDE5Y2ViODIwODg5Y2EwNjhiNjUzY2RhOTAyMWZiYmE3ZDEyMWM4ZWEwYzBlOTY3ZGNmZjQ4NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
  googleCalendarUrl: 'https://calendar.google.com/calendar/u/0?cid=MDdmYTUwZmEzMDE5Y2ViODIwODg5Y2EwNjhiNjUzY2RhOTAyMWZiYmE3ZDEyMWM4ZWEwYzBlOTY3ZGNmZjQ4NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
  googleCalendarAddUrl: 'https://calendar.google.com/calendar/r?cid=MDdmYTUwZmEzMDE5Y2ViODIwODg5Y2EwNjhiNjUzY2RhOTAyMWZiYmE3ZDEyMWM4ZWEwYzBlOTY3ZGNmZjQ4NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
  icalUrl: 'https://calendar.google.com/calendar/ical/07fa50fa3019ceb820889ca068b653cda9021fbba7d121c8ea0c0e967dcff484%40group.calendar.google.com/public/basic.ics',
  webcalUrl: 'webcal://calendar.google.com/calendar/ical/07fa50fa3019ceb820889ca068b653cda9021fbba7d121c8ea0c0e967dcff484%40group.calendar.google.com/public/basic.ics',
  highlights: [
    { title: 'MCR Formal Dinners', day: 'Twice a term', time: '18:30', desc: 'Four-course dining in the Elizabethan Hall with fellow postgraduates.' },
    { title: 'Welfare Tea', day: 'Tuesday', time: '18:00', desc: 'Snacks, drinks and chit-chat in the Upper MCR.' },
    { title: 'Exchange Dinners', day: 'Twice a term', time: '18:30', desc: 'Reciprocal dinners with sister colleges.' },
  ]
};

export const TERM_CARD_DATA = CALENDAR_DATA;

export const HONORARY_MEMBERSHIP_DATA = {
  title: 'Honorary Membership',
  email: 'mcr.secretary@jesus.ox.ac.uk',
  intro: 'The Jesus College MCR offers Honorary Membership to individuals who meet any of the following criteria:',
  criteria: [
    'Members of the Senior Common Room (SCR) of Jesus College.',
    'Visiting Graduate students who are affiliated with the College (such as through supervision) and/or staying in Jesus College accommodation and recommended for Honorary Membership by the Academic Director.',
    'Former Full Members of the Jesus College MCR.',
    'Holders of a degree from the University of Oxford who were members of Jesus College whilst reading for that degree.',
    'Those who, by virtue of their employment by or other close connection with the MCR, need regular access to the Common Room and other MCR facilities, and upon whom the MCR decides, by a majority vote at a General Meeting, to confer Honorary Membership.',
    'Spouses and partners of MCR members who reside with said member in the Oxford area.'
  ],
  applicationNote: 'To apply for Honorary Membership, please send an email with your details and affiliation to'
};

export const CONTACT_DATA = {
  title: 'Contact Us',
  address: {
    line1: 'Jesus College MCR',
    street: 'Turl Street',
    city: 'Oxford',
    postcode: 'OX1 3DW',
    country: 'United Kingdom'
  },
  email: 'mcr.president@jesus.ox.ac.uk',
  instagram: {
    name: 'Instagram',
    handle: '@jesuscollege_mcr',
    url: 'https://instagram.com/jesuscollege_mcr'
  }
};
