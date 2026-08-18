export const site = {
  name: 'CareVisible',
  url: 'https://www.carevisible.com',
  tagline: 'AI and local search visibility for independent home care agencies',
  email: 'dcallum4@gmail.com',
  founder: 'Dennis Callum',
  states: ['Iowa', 'Nebraska', 'Missouri', 'Kansas', 'Minnesota'],
};

export const nav = [
  { label: 'How it works', href: '/how-it-works/' },
  { label: 'Services', href: '/services/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Learn', href: '/learn/' },
  { label: 'About', href: '/about/' },
];

/** Research figures used across the site. Update in one place. */
export const research = {
  agenciesScored: 50,
  underFiveReviews: '70%',
  noWebsite: '16%',
  aiNamedShare: '1.2%',
  aiNamedSource: 'BrightLocal, 2026',
};

export const pillars = [
  {
    id: 'gbp',
    name: 'Google Business Profile',
    max: 30,
    summary: 'Completeness, categories, photos, review volume and velocity, posts, and Q&A.',
    why: 'This is the first thing a family sees and the field set AI assistants quote from when they describe your agency.',
  },
  {
    id: 'mappack',
    name: 'Map Pack visibility',
    max: 25,
    summary: 'Where you rank across a grid of real searches around your service area.',
    why: 'Roughly 42% of local searchers click a result inside the Map Pack. Outside the top three, most never see you.',
  },
  {
    id: 'website',
    name: 'Website and schema',
    max: 25,
    summary: 'Structured data, service page coverage, question-shaped content, and technical health.',
    why: 'Structured data is how search engines and AI assistants verify facts about you with enough confidence to cite you.',
  },
  {
    id: 'ai',
    name: 'AI answer visibility',
    max: 20,
    summary: 'Whether ChatGPT, Gemini, Perplexity, Claude, and Google AI name you when asked for a recommendation.',
    why: 'Only about 1.2% of local businesses are currently named by AI assistants. This is the least crowded channel available.',
  },
];
