import React from "react";
import biosecurityImg from "../assets/biosecurity.jpg";
import globalHealthImg from "../assets/global-health.jpg";
import aiSafetyImg from "../assets/ai-safety.jpg";
import animalWelfareImg from "../assets/animal-welfare.jpg";
import climateChangeImg from "../assets/climate-change.jpg";

const ext = (href, children) => (
  <a href={href} target="_blank" rel="noreferrer" className="em-link font-medium">
    {children}
  </a>
);

// Shared cause-area data used across Home and Cause Areas pages.
export const CAUSE_AREAS = [
  {
    slug: "biosecurity",
    title: "Biosecurity",
    short:
      "Preventing engineered pandemics and biosecurity threats that pose extinction-level risks facing humanity.",
    image: biosecurityImg,
    itn: [
      {
        label: "Importance",
        body: (
          <>
            Engineered pandemics represent one of the few plausible extinction-level risks facing humanity this century. In fact, Andrew Snyder-Beattie, formerly head of {ext("https://80000hours.org/podcast/episodes/andrew-snyder-beattie-four-pillars-biosecurity-pandemic/", "Open Philanthropy's biosecurity programme")}, estimated a 1-3% lifetime probability of biological catastrophe, and believes a targeted programme of interventions could halve that risk. COVID-19, a prime example, caused tens of millions of excess deaths and nearly collapsed global health infrastructure. We must be prepared; a deliberately engineered one could be far worse.
          </>
        ),
      },
      {
        label: "Tractability",
        body: (
          <>
            There are specific, concrete interventions that could substantially reduce risk: DNA synthesis screening to intercept dangerous orders at the point of manufacture, and far-UVC light deployment in indoor public spaces. Additionally, vaccines, and other diagnostics designed to work across entire pathogen families could help provide resilience against threats we haven't yet encountered.
          </>
        ),
      },
      {
        label: "Neglectedness",
        body: (
          <>
            Despite the scale of the risk, {ext("https://80000hours.org/problem-profiles/preventing-catastrophic-pandemics/", "projects specifically targeting engineered pathogens receive only a small fraction of health security funding")}, with the vast majority directed at naturally occurring outbreaks. The intersection of AI and biosecurity, and how LLMs and {ext("https://forum.effectivealtruism.org/posts/RidKuyF6EdK8AEhYn/a-beginner-s-introduction-to-ai-driven-biorisk-large", "biological design tools change the threat landscape")} is even more neglected.
          </>
        ),
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
        url: "https://80000hours.org/problem-profiles/preventing-catastrophic-pandemics/",
      },
      {
        text: "A Biosecurity & Biorisk Reading List (EA Forum)",
        url: "https://forum.effectivealtruism.org/posts/iAowzcZm87wNrTQCb/a-biosecurity-and-biorisk-reading-list",
      },
      {
        text: "A Beginner's Introduction to AI-Driven Biorisk (EA Forum)",
        url: "https://forum.effectivealtruism.org/posts/RidKuyF6EdK8AEhYn/a-beginner-s-introduction-to-ai-driven-biorisk-large",
      },
      {
        text: "Bluedot Impact's Biosecurity Course",
        url: "https://bluedot.org/courses/biosecurity/1/1",
      },
      {
        text: "Giving What We Can: Biosecurity",
        url: "https://www.givingwhatwecan.org/cause-areas/reducing-global-catastrophic-risks/biosecurity",
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
        body: (
          <>
            Around ten million people die every year from conditions that are {ext("https://www.givewell.org/charities/top-charities", "cheaply and reliably preventable")}. {ext("https://www.who.int/news-room/fact-sheets/detail/malaria", "610,000 people died from malaria alone in 2024")}; malaria accounts for {ext("https://pmc.ncbi.nlm.nih.gov/articles/PMC13072040/", "an estimated 45 million disability-adjusted life-years (DALYs) annually")}, and this is before accounting for the burden of tuberculosis, diarrheal disease, and other conditions that disproportionately kill the global poor. These deaths are not inevitable. They are the result of insufficient funding and weak health systems.
          </>
        ),
      },
      {
        label: "Tractability",
        body: (
          <>
            {ext("https://www.givewell.org/charities/top-charities", "GiveWell's top-rated charities")}:
            organisations like the Against Malaria Foundation and the Malaria Consortium are estimated to save a statistical life for roughly $3,500–$5,500 in donations, based on {ext("https://www.givewell.org/how-we-work/our-criteria/cost-effectiveness", "randomised controlled trials of the underlying interventions")}. {ext("https://www.openphilanthropy.org/research/technical-updates-to-our-global-health-and-wellbeing-cause-prioritization-framework/", "Open Philanthropy estimates")} that the best global health interventions achieve somewhere between 1,000 and 2,000 times the impact per dollar of unconditional cash transfers.
          </>
        ),
      },
      {
        label: "Neglectedness",
        body: (
          <>
            Total foreign aid sounds large, but the fraction directed by evidence of cost-effectiveness is tiny. Most charitable giving stays local and goes to overhead-heavy organisations with weak evidence of impact. {ext("https://blog.givewell.org/2025/08/13/givewells-2024-metrics-and-impact/", "GiveWell directed $397 million in 2024")}, which seems like a substantial sum but is actually surprisingly small relative to the scale of preventable death and suffering it is trying to address.
          </>
        ),
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
        url: "https://www.givewell.org/how-we-work/our-criteria/cost-effectiveness",
      },
      {
        text: "Our World in Data: Global Health",
        url: "https://ourworldindata.org/health-meta",
      },
      {
        text: "80,000 Hours: Global Health & Poverty",
        url: "https://80000hours.org/problem-profiles/health-in-poor-countries/",
      },
      {
        text: "The Life You Can Save",
        url: "https://www.thelifeyoucansave.org/",
      },
    ],
  },
  {
    slug: "ai-safety",
    title: "AI Safety & Governance",
    short:
      "Advanced AI systems could, if misaligned with human values, cause irreversible harm at global scale.",
    image: aiSafetyImg,
    itn: [
      {
        label: "Importance",
        body: (
          <>
            Advanced AI systems are developing capabilities that could, if misaligned with human values or deliberately misused, cause irreversible harm at global scale. {ext("https://80000hours.org/problem-profiles/artificial-intelligence/", "80,000 Hours rates AI safety as one of the most pressing problems of our time")}, citing the potential for catastrophic power concentration and potentially existential catastrophe.
          </>
        ),
      },
      {
        label: "Tractability",
        body: (
          <>
            {ext("https://arxiv.org/pdf/2404.14082", "Mechanistic interpretability")} (understanding the internal computations of neural networks) has produced concrete results already. {ext("https://80000hours.org/career-reviews/ai-safety-researcher/", "80,000 Hours specifically highlights theoretical AI safety")} as a high-priority track that is tractable and has room for more researchers and mathematicians. Organisations like {ext("https://forum.effectivealtruism.org/posts/aaa9pEwnvyeE2TYvg/announcing-timaeus", "Timaeus")} exist to develop rigorous mathematical foundations for the problem.
          </>
        ),
      },
      {
        label: "Neglectedness",
        body: (
          <>
            Despite the stakes, the number of people working seriously on AI safety remains tiny. {ext("https://forum.effectivealtruism.org/posts/7YDyziQxkWxbGmF3u/ai-safety-field-growth-analysis-2025", "The 2025 AI Safety Field Growth Analysis")} documents a field that has grown but remains understaffed relative to the scale of the challenge. The ratio of researchers working to advance AI capabilities versus those working to ensure AI safety is skewed. Especially theoretical safety research, where mathematicians can play a crucial role is {ext("https://80000hours.org/career-reviews/ai-safety-researcher/", "one of the most neglected sub-areas within an already neglected field")}.
          </>
        ),
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
        url: "https://80000hours.org/problem-profiles/artificial-intelligence/",
      },
      {
        text: "Announcing Timaeus (EA Forum)",
        url: "https://forum.effectivealtruism.org/posts/aaa9pEwnvyeE2TYvg/announcing-timaeus",
      },
    ],
  },
  {
    slug: "animal-welfare",
    title: "Animal Welfare",
    short:
      "More than 80 billion land animals are slaughtered annually, the vast majority in factory farm conditions involving extreme confinement and suffering.",
    image: animalWelfareImg,
    itn: [
      {
        label: "Importance",
        body: (
          <>
            The numbers here are almost impossible to process. {ext("https://ourworldindata.org/animal-welfare", "More than 80 billion land animals are slaughtered annually for food")}, the vast majority in factory farm conditions involving extreme confinement and chronic pain. {ext("https://animalcharityevaluators.org/blog/farmed-animals/", "An estimated 124 billion fish are farmed each year")}, with wild-caught fish adding one to two trillion more. {ext("https://ourworldindata.org/how-many-animals-are-factory-farmed", "At any given moment, more than 23 billion land animals are alive on factory farms")}, which is absolutely staggering and is a number comparable to the total count of humans who have ever lived. The aggregate scale of suffering almost certainly exceeds the total DALY burden of all human disease combined.
          </>
        ),
      },
      {
        label: "Tractability",
        body: (
          <>
            {ext("https://forum.effectivealtruism.org/posts/XgGkHmxEoetqCuqZF/185-the-7-most-promising-ways-to-end-factory-farming-and", "Corporate campaigns")}, coordinated by organisations like the Humane League and the Open Wing Alliance, have secured cage-free pledges from thousands of food companies. {ext("https://www.founderspledge.com/research/animal-welfare-cause-report", "Cost-effectiveness analyses of these campaigns")} suggest that for every dollar donated, the lives of between 10 and 160 birds are meaningfully affected. Alternative proteins have attracted billions in investment and represent an intervention that could reduce demand for factory-farmed products at scale.
          </>
        ),
      },
      {
        label: "Neglectedness",
        body: (
          <>
            {ext("https://animalcharityevaluators.org/charity-reviews/causes-we-consider/why-farmed-animals/", "Only about 3% of US charitable donations to animal causes go to farmed animal organisations")}, despite farmed animals comprising over 99% of all animals killed by humans. Unlike global health, where the default trajectory is improvement, {ext("https://forum.effectivealtruism.org/posts/QbRFwPks5nFLK8i2W/the-default-trajectory-for-animal-welfare-means-vastly-more", "the default trajectory for factory farming is worsening")}, driven by rising global meat demand and population growth.
          </>
        ),
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
        url: "https://ourworldindata.org/animal-welfare",
      },
      {
        text: "80,000 Hours: Factory Farming Career Review",
        url: "https://80000hours.org/problem-profiles/factory-farming/",
      },
      {
        text: "Lewis Bollard: 7 Most Promising Ways to End Factory Farming (80,000 Hours Podcast)",
        url: "https://forum.effectivealtruism.org/posts/XgGkHmxEoetqCuqZF/185-the-7-most-promising-ways-to-end-factory-farming-and",
      },
      {
        text: "The Default Trajectory for Animal Welfare (EA Forum)",
        url: "https://forum.effectivealtruism.org/posts/QbRFwPks5nFLK8i2W/the-default-trajectory-for-animal-welfare-means-vastly-more",
      },
    ],
  },
  {
    slug: "climate-change",
    title: "Climate Change",
    short:
      "Warming already drives measurable harm globally and specific neglected niches remain very pressing.",
    image: climateChangeImg,
    itn: [
      {
        label: "Importance",
        body: (
          <>
            Warming is already producing measurable increases in extreme heat events, floods and droughts, with consequences falling most heavily on the world's poorest people and most biodiverse regions. More critically, {ext("https://80000hours.org/problem-profiles/climate-change/", "climate change functions as a risk multiplier")} as it can destabilise food systems and increase the probability of resource conflicts. {ext("https://80000hours.org/problem-profiles/climate-change/", "80,000 Hours rates reducing extreme climate risks")} as a "second-highest priority area."
          </>
        ),
      },
      {
        label: "Tractability",
        body: (
          <>
            {ext("https://80000hours.org/problem-profiles/climate-change/", "Major cost declines in solar and wind power")} show that technical progress on energy is achievable. This makes the problem tractable for those who can work on targeted technical interventions in neglected niches.
          </>
        ),
      },
      {
        label: "Neglectedness",
        body: (
          <>
            Climate change as a whole is {ext("https://80000hours.org/problem-profiles/climate-change/", "arguably the least neglected cause on this list")}. {ext("https://forum.effectivealtruism.org/posts/B7dkgWfeqhojF8FJq/climate-stabilization-a-draft-itn-update", "Global climate finance now exceeds $1 trillion annually")}, and enormous amounts of high-impact mitigation work have already been done. However, specific sub-areas remain dramatically underfunded.
          </>
        ),
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
        url: "https://80000hours.org/problem-profiles/climate-change/",
      },
      {
        text: "EA Forum: Climate Change Topic Page",
        url: "https://forum.effectivealtruism.org/topics/climate-change",
      },
      {
        text: "Does Climate Change Deserve More Attention Within EA? (EA Forum)",
        url: "https://forum.effectivealtruism.org/posts/BwDAN9pGbmCYZGbgf/does-climate-change-deserve-more-attention-within-ea",
      },
      {
        text: "Our World in Data: CO₂ and Greenhouse Gas Emissions",
        url: "https://ourworldindata.org/co2-and-greenhouse-gas-emissions",
      },
    ],
  },
];
