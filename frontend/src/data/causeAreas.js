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
      "Preventing engineered pandemics — among the few plausible extinction-level risks facing humanity this century.",
    image: biosecurityImg,
    itn: [
      {
        label: "Importance",
        body: "Engineered pandemics represent one of the few plausible extinction-level risks facing humanity this century. Andrew Snyder-Beattie, formerly head of Open Philanthropy's biosecurity programme, estimated a 1–3% lifetime probability of biological catastrophe, and believes a targeted programme of interventions could halve that risk. COVID-19, a prime example, caused tens of millions of excess deaths and nearly collapsed global health infrastructure. We must be prepared; a deliberately engineered one could be far worse.",
      },
      {
        label: "Tractability",
        body: "There are specific, concrete interventions that could substantially reduce risk: DNA synthesis screening to intercept dangerous orders at the point of manufacture, and far-UVC light deployment in indoor public spaces. Additionally, vaccines and other diagnostics designed to work across entire pathogen families could help provide resilience against threats we haven't yet encountered.",
      },
      {
        label: "Neglectedness",
        body: "Despite the scale of the risk, projects specifically targeting engineered pathogens receive only a small fraction of health security funding, with the vast majority directed at naturally occurring outbreaks. The intersection of AI and biosecurity, and how LLMs and biological design tools change the threat landscape is even more neglected.",
      },
    ],
    work: [
      "Engineered pathogen risk modelling and forecasting",
      "Biosurveillance design and outbreak detection systems",
      "Mandatory AI biosecurity evaluations for frontier models",
    ],
    links: [
      {
        text: "80,000 Hours: Preventing Catastrophic Pandemics",
        note: "Comprehensive overview of why this is a priority cause",
        url: null,
      },
      {
        text: "A Biosecurity & Biorisk Reading List (EA Forum)",
        note: "Curated reading group syllabus covering the whole field",
        url: null,
      },
      {
        text: "A Beginner's Introduction to AI-Driven Biorisk (EA Forum)",
        note: "How LLMs and biological design tools change the threat model",
        url: null,
      },
      {
        text: "Bluedot Impact Biosecurity Course",
        note: "Bluedot impact biosecurity course",
        url: "https://bluedot.org/courses/biosecurity/1/1",
      },
      {
        text: "Giving What We Can: Biosecurity",
        note: "Summary including historical models of conflict severity and biological risk",
        url: null,
      },
    ],
  },
  {
    slug: "global-health",
    title: "Global Health & Development",
    short:
      "Around ten million people die every year from conditions that are cheaply and reliably preventable.",
    image: globalHealthImg,
    itn: [
      {
        label: "Importance",
        body: "Around ten million people die every year from conditions that are cheaply and reliably preventable. 610,000 people died from malaria alone in 2024; malaria accounts for an estimated 45 million disability-adjusted life-years (DALYs) annually, and this is before accounting for the burden of tuberculosis, diarrheal disease, and other conditions that disproportionately kill the global poor. These deaths are not inevitable. They are the result of insufficient funding and weak health systems.",
      },
      {
        label: "Tractability",
        body: "GiveWell's top-rated charities — organisations like the Against Malaria Foundation and the Malaria Consortium — are estimated to save a statistical life for roughly $3,500–$5,500 in donations, based on randomised controlled trials of the underlying interventions. Open Philanthropy estimates that the best global health interventions achieve somewhere between 1,000 and 2,000 times the impact per dollar of unconditional cash transfers.",
      },
      {
        label: "Neglectedness",
        body: "Total foreign aid sounds large, but the fraction directed by evidence of cost-effectiveness is tiny. Most charitable giving stays local and goes to overhead-heavy organisations with weak evidence of impact. GiveWell directed $397 million in 2024, which seems like a substantial sum but is actually surprisingly small relative to the scale of preventable death and suffering it is trying to address.",
      },
    ],
    work: [
      "Undernutrition and micronutrient deficiencies (iodine, iron, vitamin A, zinc)",
      "Smoking prevalence in LMICs",
      "Vitamin A supplementation access and coverage modelling",
    ],
    links: [
      {
        text: "GiveWell: Cost-Effectiveness Methodology",
        note: "How cost-per-impact estimates are constructed and what assumptions drive them",
        url: null,
      },
      {
        text: "Our World in Data: Global Health",
        note: "Data-rich overview of mortality, disease burden, and health trends across countries",
        url: null,
      },
      {
        text: "80,000 Hours: Global Health & Poverty",
        note: "Overview of the cause area from a career-impact perspective",
        url: null,
      },
      {
        text: "The Life You Can Save",
        note: "Peter Singer's accessible moral and practical case for global health giving",
        url: null,
      },
    ],
  },
  {
    slug: "ai-safety",
    title: "AI Safety & Governance",
    short:
      "Advanced AI systems could, if misaligned with human values or deliberately misused, cause irreversible harm at global scale.",
    image: aiSafetyImg,
    itn: [
      {
        label: "Importance",
        body: "Advanced AI systems are developing capabilities that could, if misaligned with human values or deliberately misused, cause irreversible harm at global scale. 80,000 Hours rates AI safety as one of the most pressing problems of our time, citing the potential for catastrophic power concentration and potentially existential catastrophe.",
      },
      {
        label: "Tractability",
        body: "Mechanistic interpretability (understanding the internal computations of neural networks) has produced concrete results already. 80,000 Hours specifically highlights theoretical AI safety as a high-priority track that is tractable and has room for more researchers and mathematicians. Organisations like Timaeus exist to develop rigorous mathematical foundations for the problem.",
      },
      {
        label: "Neglectedness",
        body: "Despite the stakes, the number of people working seriously on AI safety remains tiny. The 2025 AI Safety Field Growth Analysis documents a field that has grown but remains understaffed relative to the scale of the challenge. The ratio of researchers working to advance AI capabilities versus those working to ensure AI safety is skewed. Especially theoretical safety research, where mathematicians can play a crucial role, is one of the most neglected sub-areas within an already neglected field.",
      },
    ],
    work: [
      "Interpretability benchmarks for frontier models",
      "Theoretical AI safety research",
      "Capability evaluations and deployment gates",
    ],
    links: [
      {
        text: "80,000 Hours: The Case for AI Safety",
        note: "Accessible argument for why AI risk is a priority cause area",
        url: null,
      },
      {
        text: "The Theoretical Reward Learning Research Agenda (Alignment Forum)",
        note: "A concrete mathematical research programme with explicit open problems",
        url: null,
      },
      {
        text: "Announcing Timaeus (EA Forum)",
        note: "Singular learning theory and developmental interpretability as a bridge between mathematics and alignment",
        url: null,
      },
    ],
  },
  {
    slug: "animal-welfare",
    title: "Animal Welfare",
    short:
      "More than 80 billion land animals are slaughtered annually, the vast majority in factory farm conditions involving extreme confinement and chronic pain.",
    image: animalWelfareImg,
    itn: [
      {
        label: "Importance",
        body: "The numbers here are almost impossible to process. More than 80 billion land animals are slaughtered annually for food, the vast majority in factory farm conditions involving extreme confinement and chronic pain. An estimated 124 billion fish are farmed each year, with wild-caught fish adding one to two trillion more. At any given moment, more than 23 billion land animals are alive on factory farms — a number comparable to the total count of humans who have ever lived. The aggregate scale of suffering almost certainly exceeds the total DALY burden of all human disease combined.",
      },
      {
        label: "Tractability",
        body: "Corporate campaigns, coordinated by organisations like the Humane League and the Open Wing Alliance, have secured cage-free pledges from thousands of food companies. Cost-effectiveness analyses of these campaigns suggest that for every dollar donated, the lives of between 10 and 160 birds are meaningfully affected. Alternative proteins have attracted billions in investment and represent an intervention that could reduce demand for factory-farmed products at scale.",
      },
      {
        label: "Neglectedness",
        body: "Only about 3% of US charitable donations to animal causes go to farmed animal organisations, despite farmed animals comprising over 99% of all animals killed by humans. Unlike global health, where the default trajectory is improvement, the default trajectory for factory farming is worsening, driven by rising global meat demand and population growth.",
      },
    ],
    work: [
      "Alternative protein adoption",
      "Wild animal suffering from fires and habitat loss",
      "Humane pesticide research and impact assessment",
    ],
    links: [
      {
        text: "Our World in Data: Animal Welfare",
        note: "Data-rich overview of slaughter numbers, factory farming prevalence, and trends over time",
        url: null,
      },
      {
        text: "80,000 Hours: Factory Farming Career Review",
        note: "Career-oriented overview of the cause and where leverage lies",
        url: null,
      },
      {
        text: "Lewis Bollard: 7 Most Promising Ways to End Factory Farming (80,000 Hours Podcast)",
        note: "In-depth interview on the most tractable interventions",
        url: null,
      },
      {
        text: "The Default Trajectory for Animal Welfare (EA Forum)",
        note: "Why the default is worsening, not improving, unlike global health",
        url: null,
      },
    ],
  },
  {
    slug: "climate-change",
    title: "Climate Change",
    short:
      "Warming already drives measurable harm globally — and specific neglected niches remain highly tractable for mathematicians.",
    image: climateChangeImg,
    itn: [
      {
        label: "Importance",
        body: "Warming is already producing measurable increases in extreme heat events, floods and droughts, with consequences falling most heavily on the world's poorest people and most biodiverse regions. More critically, climate change functions as a risk multiplier — it can destabilise food systems and increase the probability of resource conflicts. 80,000 Hours rates reducing extreme climate risks as a \"second-highest priority area.\"",
      },
      {
        label: "Tractability",
        body: "Major cost declines in solar and wind power show that technical progress on energy is achievable. This makes the problem tractable for those who can work on targeted technical interventions in neglected niches.",
      },
      {
        label: "Neglectedness",
        body: "Climate change as a whole is arguably the least neglected cause on this list. Global climate finance now exceeds $1 trillion annually, and enormous amounts of high-impact mitigation work have already been done. However, specific sub-areas remain dramatically underfunded.",
      },
    ],
    work: [
      "Extinguishing or preventing coal seam fires",
      "Coral reef adaptation",
      "Reducing hurricane risk via climate system interventions",
    ],
    links: [
      {
        text: "80,000 Hours: Climate Change Problem Profile",
        note: "Honest assessment of why climate change is less neglected than other EA priorities, and where leverage remains",
        url: null,
      },
      {
        text: "EA Forum: Climate Change Topic Page",
        note: "Overview of EA-relevant climate research and recommendations",
        url: null,
      },
      {
        text: "Does Climate Change Deserve More Attention Within EA? (EA Forum)",
        note: "Debate including discussion of where neglected cost-effective niches exist",
        url: null,
      },
      {
        text: "Our World in Data: CO₂ and Greenhouse Gas Emissions",
        note: "Data on emissions trends, by country and sector",
        url: null,
      },
    ],
  },
];
