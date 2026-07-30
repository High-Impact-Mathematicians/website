/**
 * Content for the "Example Projects" section on the home page.
 *
 * These entries are drawn from the projects board, which is opt-in: a project
 * only appears after every member of its team has consented to publication.
 * Anything added here must come from that board — do not add a project that is
 * not already listed on it.
 *
 * Titles, links and cover images are copied from projects.json. `pill` is the
 * project's method or form rather than its cause area, because the cause area
 * is already the accordion heading it sits under.
 *
 * A cause area with an empty `projects` array still renders its accordion, and
 * a project with `image: null` falls back to a cream tile with a maths glyph.
 */

/** The projects board lives in-app, so this is a router path, not a URL. */
export const PROJECTS_BOARD_URL = '/take-action';

export const causeAreas = [
  {
    id: 'climate-change',
    name: 'Climate Change',
    projects: [
      {
        title: 'To what extent are poorer countries vulnerable to global environmental dangers, and how can charities help?',
        pill: 'OPTIMISATION',
        href: 'https://drive.google.com/drive/folders/1nkp_mqbFwpe-DwQLWeIiNEWB37iX7MBi',
        image: '/projects/2026-poorer-countries-environmental.webp',
        alt: 'Title slide of the project\'s presentation',
      },
      {
        title: 'Chakra',
        pill: 'DECISION ANALYSIS',
        href: 'https://drive.google.com/file/d/10wJ4XwYDFW3C_DCEVxcDJBnDZae08a2B/view?usp=sharing',
        image: '/projects/2026-chakra.webp',
        alt: 'First page of the Chakra research paper',
      },
      {
        title: 'Data Center Environmental Impact Prediction',
        pill: 'FORECASTING',
        href: 'https://docs.google.com/document/d/1KjvV9-9o4POhnSkHzDJGgl6OZnbutQPJ2EITZ0-080Q/edit',
        image: '/projects/2026-data-centre-impact.webp',
        alt: 'First page of the project write-up',
      },
    ],
  },
  {
    id: 'biosecurity',
    name: 'Biosecurity',
    projects: [
      {
        title: 'Estimating the Cost-Effectiveness of Pandemic Surveillance Systems',
        pill: 'SIMULATION',
        href: 'https://drive.google.com/file/d/1RwflXg7zUBeqXc09nMS90DCMlssS-mIS/view?usp=sharing',
        image: '/projects/2026-pandemic-surveillance-cost.webp',
        alt: 'First page of the cost-effectiveness paper',
      },
      {
        title: 'Surveillance Debt',
        pill: 'DATA ANALYSIS',
        href: 'https://docs.google.com/presentation/d/14q3QXeFWe4ex2gVW7kpcEHHt5XsKrgd6j1d4T3r9XBc/edit?usp=sharing',
        image: '/projects/2026-surveillance-debt.webp',
        alt: 'Title slide of the Surveillance Debt deck',
      },
      {
        title: 'Where Mathematics Meets Medicine: Spectral Graph Theory and Dose-Response Modelling to Tackle AMR in Hospitals',
        pill: 'MODELLING',
        href: 'https://docs.google.com/document/d/1xUQjBhuyUV9C3cuyOAYVXSlRJ1XyeZM_aIMxwmq6Lko/edit?usp=sharing',
        image: '/projects/2026-amr-hospitals.webp',
        alt: 'First page of the AMR modelling write-up',
      },
    ],
  },
  {
    id: 'ai-safety',
    name: 'AI Safety & Governance',
    projects: [
      {
        title: 'Identifiable Recovery of Conditional Features by Tensor Decomposition of a Layer\'s Weights',
        pill: 'RESEARCH',
        href: 'https://docs.google.com/document/d/1jF-z_mn2qj0QJFomzF29jYy7XfwB4TDuWqrPgNXVqq4/edit?usp=sharing',
        image: '/projects/2026-conditional-features.webp',
        alt: 'First page of the tensor decomposition paper',
      },
      {
        title: 'Linguistically-Informed Morphological Segmentation: Expanding AI Technologies to Under-Resourced Languages',
        pill: 'MODELLING',
        href: 'https://drive.google.com/drive/folders/11dKg6UxX5NqCuyn02tR9G9XBF-2W-77d?usp=sharing',
        image: '/projects/2026-morphological-segmentation.webp',
        alt: 'Title slide of the project\'s presentation',
      },
      {
        title: 'AI Safety Funding Is Misaligned with Catastrophic Risk',
        pill: 'DATA ANALYSIS',
        href: 'https://docs.google.com/document/d/1tXz3Z-l0u6GtmCo0mKpwjXZb2abal7-kgbJBlpcKNig/edit?usp=sharing',
        image: '/projects/2026-ai-safety-funding.webp',
        alt: 'First page of the funding analysis',
      },
    ],
  },
  {
    id: 'animal-welfare',
    name: 'Animal Welfare',
    projects: [
      {
        title: 'Does the ice actually kill?',
        pill: 'RESEARCH',
        href: 'https://drive.google.com/file/d/18bsjshUfohmhNpCC5PAybGiCcRjKjeHf/view?usp=sharing',
        image: '/projects/2026-does-the-ice-kill.webp',
        alt: 'First page of the shrimp welfare write-up',
      },
    ],
  },
  {
    id: 'institutional-resilience',
    name: 'Institutional Resilience',
    projects: [
      {
        title: 'Feeding the world without the sun',
        pill: 'MODELLING',
        href: 'https://drive.google.com/file/d/1X9hxfyLLyDMiNATLElBtytaCYYU8LCT3/view?usp=sharing',
        image: '/projects/2026-feeding-without-sun.webp',
        alt: 'Heat map of calorie shortfall against production doubling time',
      },
      {
        title: 'Which Origami Patterns Can Become Disaster Shelters?',
        pill: 'RESEARCH',
        href: 'https://drive.google.com/file/d/1En5-3n4AZInsQS9wbTa4r-DQQX1eXqpT/view?usp=sharing',
        image: '/projects/2026-origami-shelters.webp',
        alt: 'Scatter plot screening origami patterns by degrees of freedom',
      },
      {
        title: 'Tairseach: Machine Learning for Social Housing Equity in Ireland',
        pill: 'DATA ANALYSIS',
        href: 'https://drive.google.com/file/d/1UP_PAGHviHqJLqCu8CPBJcx1-AhDysPo/view?usp=sharing',
        image: '/projects/2026-tairseach.webp',
        alt: 'Title slide of the Tairseach presentation',
      },
    ],
  },
  {
    id: 'global-health',
    name: 'Global Health & Development',
    projects: [
      {
        title: 'CHX Cord Care Analysis',
        pill: 'SIMULATION',
        href: 'https://docs.google.com/presentation/d/1XMkgEe2lzSLa67Q9Fu-gseD2QxyFFbdX/edit?usp=sharing',
        image: '/projects/2026-chx-cord-care.webp',
        alt: 'Monte Carlo histogram of net monetary benefit against the AMF threshold',
      },
      {
        title: 'Prioritizing Under Constraint: Targeting Menstrual Health Resources in Climate-Vulnerable Communities',
        pill: 'OPTIMISATION',
        href: 'https://drive.google.com/file/d/1B6QlP_hfi67_PjbBAj4pk4YTMo1JmYvy/view?usp=sharing',
        image: '/projects/2026-menstrual-health-targeting.webp',
        alt: 'First page of the resource allocation paper',
      },
      {
        title: 'The Green Guard',
        pill: 'RESEARCH',
        href: 'https://docs.google.com/presentation/d/1X7y2Bd2zqHN_UD-_ua7tm_ZcobwFZtmeHvK05gM6fow/edit?usp=sharing',
        image: '/projects/2026-green-guard.webp',
        alt: 'Title slide of The Green Guard presentation',
      },
    ],
  },
];
