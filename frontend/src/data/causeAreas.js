import biosecurityImg from "../assets/biosecurity.jpg";
import globalHealthImg from "../assets/global-health.jpg";
import aiSafetyImg from "../assets/ai-safety.jpg";
import animalWelfareImg from "../assets/animal-welfare.jpg";
import climateChangeImg from "../assets/climate-change.jpg";

// Shared cause-area data used across Home and Cause Areas pages.
export const CAUSE_AREAS = [
  {
    slug: "biosecurity",
    title: "Biosecurity",
    short:
      "Preventing and mitigating pandemics, including risks from engineered pathogens.",
    image: biosecurityImg,
    why:
      "Importance: pandemics can kill millions, and engineered pathogens are among the few extinction risks. COVID-19 was an example and future outbreaks could be far worse, especially as AI lowers the barrier to biodesign.\n\nTractable: interventions like DNA synthesis screening, metagenomic surveillance, and far-UVC are promising, but need translation into policy.\n\nNeglected: despite existing infrastructure, biosecurity remains underfunded relative to worst-case risks.",
    work: [
      "Engineered pathogen risk modeling and forecasting",
      "Biosurveillance design and outbreak detection systems",
      "Mandatory AI biosecurity evaluations for frontier models",
    ],
  },
  {
    slug: "global-health",
    title: "Global Health & Development",
    short:
      "Proven, cost-effective interventions against preventable disease and extreme poverty.",
    image: globalHealthImg,
    why:
      "Importance: around ten million people die each year from cheaply preventable conditions, and hundreds of millions more live with debilitating disease. The burden is on the order of hundreds of millions of DALYs annually.\n\nTractable: the strongest case is evidence. Many interventions have RCT backing and predictable impact per dollar.\n\nNeglected: total aid sounds large but is small relative to the problem, with most donors focused locally and only a small share of giving going to international charities.",
    work: [
      "Undernutrition and micronutrient deficiencies (iodine, iron, vitamin A, zinc)",
      "Smoking prevalence in LMICs",
      "Vitamin A supplementation access and coverage modeling",
    ],
  },
  {
    slug: "ai-safety",
    title: "AI Safety & Governance",
    short:
      "Reducing catastrophic risks from advanced AI systems.",
    image: aiSafetyImg,
    why:
      "Importance: misaligned or uncontrolled advanced AI could create existential risks and extreme power concentration.\n\nTractable: interpretability, evaluation science, and governance coordination are progressing, but must move faster than capability growth.\n\nNeglected: funding and talent remain tiny relative to the stakes.",
    work: [
      "Interpretability benchmarks for frontier models",
      "Capability evaluations and deployment gates",
    ],
  },
  {
    slug: "animal-welfare",
    title: "Animal Welfare",
    short:
      "Reducing large-scale suffering of farmed and wild animals.",
    image: animalWelfareImg,
    why:
      "Importance: around 60 billion land animals and roughly a trillion fish are killed each year, most in intensive conditions. The scale of suffering is enormous and largely unnecessary.\n\nTractable: corporate campaigns and policy shifts have improved welfare standards, and alternative proteins can reduce demand.\n\nNeglected: only a small fraction of charitable giving supports animals, and even less targets farmed animals.",
    work: [
      "Alternative protein adoption",
      "Wild animal suffering from fires and habitat loss",
      "Humane pesticide research and impact assessment",
    ],
  },
  {
    slug: "climate-change",
    title: "Climate Change",
    short:
      "Reducing greenhouse gas emissions and mitigating extreme climate risks.",
    image: climateChangeImg,
    why:
      "Importance: warming increases heat waves, severe storms, droughts, and resource conflicts, with large tail risks potentially.\n\nTractable: major cost declines in solar and wind show progress is possible, but coordination barriers slow implementation.\n\nNeglected: the funding required for net-zero far exceeds current global spending, despite high visibility.",
    work: [
      "Extinguishing or preventing coal seam fires",
      "Coral reef adaptation",
      "Reducing hurricane risk via climate system interventions",
    ],
  },
];
