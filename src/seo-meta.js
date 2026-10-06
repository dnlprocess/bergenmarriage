// Single source of truth for per-page SEO metadata. Used by the React pages
// (via useSEO) and by scripts/prerender.mjs, which bakes the same values into
// a static HTML file per route at build time.

export const SITE_NAME = 'Bergen Marriage & Couple Counseling';
export const SITE_ORIGIN = 'https://bergenmarriagecounselor.com';

export const buildTitle = (title) => (title ? `${title} | ${SITE_NAME}` : SITE_NAME);

export const PAGE_META = {
  home: {
    path: '/',
    title: 'Reuben E. Gross, PhD, LMFT | Teaneck, NJ',
    description:
      'Marriage, couples, and premarital counseling in Bergen County, NJ with Reuben E. Gross, PhD, LMFT — 39 years of experience, dually licensed marriage counselor and psychologist. Free 15-minute phone consultation.',
  },
  about: {
    path: '/about/',
    title: 'About & Credentials',
    description:
      'Reuben E. Gross, PhD, LMFT — dually licensed marriage counselor and clinical psychologist with 39 years of experience, Diplomate credentials, and AAMFT clinical membership.',
  },
  services: {
    path: '/services/',
    title: 'Marriage & Couples Counseling Services',
    description:
      'Marriage counseling, premarital counseling, communication training, and infidelity & trust recovery with Reuben E. Gross, PhD, LMFT in Bergen County, NJ.',
  },
  articles: {
    path: '/articles/',
    title: 'Articles & Insights on Marriage & Relationship Counseling',
    description:
      'Educational articles on marriage counseling, effective communication, infidelity recovery, and building a loving relationship, drawn from 39 years of counseling experience.',
  },
  contact: {
    path: '/contact/',
    title: 'Contact',
    description:
      'Reach Dr. Reuben E. Gross for a free 15-minute phone consultation. Office in Teaneck, NJ, offering in-person and online marriage and couples counseling.',
  },
};

export const articlePath = (id) => `/articles/${id}/`;
