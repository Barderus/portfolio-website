import { obfuscatedEmail, resumeRequestPath } from "./contact";

export const siteIdentity = {
  name: "Gabriel dos Reis",
  role: "Computer science, data science, and research",
  location: "Chicago area",
};

const publicImage = (name) => `${import.meta.env.BASE_URL}images/${name}`;
const publicImages = (...names) => names.map((name) => publicImage(name));

export const navItems = [
  { label: "About", path: "/about" },
  { label: "Work", path: "/work" },
  { label: "Research", path: "/research" },
  { label: "Teaching", path: "/teaching" },
  { label: "Writing", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const aboutLinks = [
  { label: "Workshops", path: "/workshops" },
  { label: "Certifications", path: "/certifications" },
  { label: "Leadership", path: "/leadership" },
  { label: "Other Activities", path: "/other" },
];

export const profileLinks = {
  email: {
    label: "Email",
    action: "email",
    value: obfuscatedEmail,
  },
  resume: {
    label: "Resume",
    to: resumeRequestPath,
    value: "Request access through a short form",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/Barderus",
    value: "github.com/Barderus",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-dos-reis-401502224",
    value: "gabriel-dos-reis",
  },
};

export const homeHero = {
  eyebrow: "Reinforcement learning, applied AI, teaching, and research",
  title: "Building intelligent systems for shared decisions and practical impact.",
  links: [
    { label: "Selected Work", to: "/work", variant: "primary" },
    { label: "Research", to: "/research", variant: "secondary" },
    { label: "GitHub", href: profileLinks.github.href, variant: "secondary" },
    { label: "LinkedIn", href: profileLinks.linkedin.href, variant: "secondary" },
  ],
};

export const identitySections = [
  {
    title: "I build data-driven projects",
    body:
      "My portfolio spans reinforcement learning, simulation, predictive modeling, geospatial analysis, and software projects. I like work that connects technical depth with practical decisions.",
  },
  {
    title: "I teach and support students",
    body:
      "Teaching assistant work, assignment design, and workshop facilitation are central to how I think. I care about making technical material approachable without diluting it.",
  },
  {
    title: "I organize learning communities",
    body:
      "I have supported student communities, moderated career conversations, and helped run technical events that make computing and analytics feel more accessible.",
  },
  {
    title: "I'm preparing for graduate research",
    body:
      "I am especially drawn to reinforcement learning, multi-agent systems, and applied AI questions where individual decisions interact with shared outcomes.",
  },
];

export const selectedProjects = [
  {
    period: "Sports Analytics • Kaggle Competition",
    title: "March Madness Kaggle Prediction",
    summary:
      "A team-based machine learning project predicting NCAA March Madness tournament outcomes using historical basketball data, engineered team statistics, and classification models.",
    context:
      "Collaborated with a team to build a prediction workflow using regular-season statistics, Massey ratings, and engineered matchup features. We compared classification models, including Random Forest and XGBoost, and optimized predictions for the Kaggle competition.",
    methods: ["Python", "Scikit-learn", "XGBoost", "Feature Engineering"],
    impact:
      "Ranked 827th out of 3,462 competition entries, placing in approximately the top 24%.",
    links: [{ label: "View on GitHub", href: "https://github.com/Barderus/MarchMadness-Kaggle" }],
  },
  {
    period: "Academic Research • Machine Learning",
    title: "Recession Identification with Machine Learning",
    summary:
      "An interdisciplinary research project investigating recession identification across four advanced economies using macroeconomic indicators, Economic Policy Uncertainty, and machine learning.",
    context:
      "Conducted faculty-mentored research comparing country-specific and pooled Logistic Regression, Random Forest, XGBoost, and neural-network models. The study uses purged leave-one-recession-out evaluation, SHAP explanations, and feature ablation to assess performance, interpretability, and the incremental value of EPU.",
    methods: ["Python", "XGBoost", "LSTM", "SHAP", "Macroeconomics"],
    impact:
      "The highest observed country-level ROC-AUC scores ranged from 0.828 to 0.978. Neither country-specific nor pooled models consistently performed better, and EPU's additional value depended on the country and model architecture.",
    links: [{ label: "View on GitHub", href: "https://github.com/Barderus/Recession_Prediction" }],
  },
  {
    period: "Natural Language Processing • Machine Learning",
    title: "TrustNet — Fake News & Stance Detection",
    summary:
      "An explainable NLP application combining fake news classification and stance detection to analyze news content and provide interpretable model predictions.",
    context:
      "Developed and evaluated traditional machine learning, deep learning, and transformer-based models using news datasets and the Fake News Challenge stance task. The project combines text preprocessing, feature engineering, model calibration, explainability, and an interactive Streamlit interface.",
    methods: ["Python", "NLP", "Transformers", "Explainable AI", "Streamlit"],
    impact:
      "Combined news classification, stance detection, and model interpretability into an application for examining predictions and the features influencing them.",
    links: [{ label: "View on GitHub", href: "https://github.com/Barderus/TrustNet" }],
  },
  {
    period: "Data Analytics • Data Engineering",
    title: "Job Market Dashboard",
    summary:
      "A data analytics project exploring U.S. technology job market trends, including hiring demand, salary distributions, technical skills, and geographic differences.",
    context:
      "Developed Python workflows for web scraping, cleaning, and integrating job-posting datasets, alongside SQL scripts for transformation and analysis. The project includes exploratory analysis, visualizations, and a Streamlit dashboard prototype for comparing job-market trends.",
    methods: ["Python", "SQL", "Pandas", "Web Scraping", "Streamlit"],
    impact:
      "Built the foundation of an end-to-end analytics pipeline connecting job-posting collection, data processing, SQL analysis, and interactive reporting.",
    links: [{ label: "View on GitHub", href: "https://github.com/Barderus/job-market-dashboard" }],
  },
  {
    period: "Geospatial Analysis • Optimization",
    title: "eVTOL Air Route Risk Modeling",
    summary:
      "A geospatial research project investigating risk-aware route planning for urban air mobility using population density, airspace restrictions, and operational constraints.",
    context:
      "Developed a grid-based routing environment combining geographic datasets, population-density estimates, and airspace restrictions. Implemented A* pathfinding with weighted risk factors to compare routes under different cost priorities and illustrate urban air mobility tradeoffs.",
    methods: ["Python", "GeoPandas", "A*", "GIS", "Optimization"],
    impact:
      "Created a spatial routing model that incorporates population exposure and airspace constraints, demonstrating how different risk priorities influence route selection.",
    links: [{ label: "View on GitHub", href: "https://github.com/Barderus/eVTOL_Air_Route" }],
  },
  {
    period: "Software Development • Game Development",
    title: "Dungeons and the Ur-Dragon",
    summary:
      "A Python-based, turn-based RPG featuring party combat, magic, inventory management, and rule-based enemy AI, with an experimental graphical implementation using Pygame.",
    context:
      "Designed a modular combat system using Python classes for characters, spells, items, inventories, and battle interactions. Implemented randomized damage, critical hits, resource management, enemy targeting, and an experimental graphical version with Pygame animations and sprites.",
    methods: ["Python", "Object-Oriented Programming", "Pygame", "Game Logic"],
    impact:
      "Implemented a playable terminal RPG with multiple encounters, party management, and enemy AI, alongside an experimental Pygame graphical prototype.",
    links: [{ label: "View on GitHub", href: "https://github.com/Barderus/Dungeons-and-the-Ur-Dragon/tree/main" }],
  },
];

export const researchAreas = [
  {
    period: "Learning and control",
    title: "Reinforcement learning",
    body:
      "I am interested in how agents learn policies through interaction, especially when rewards are delayed, constraints matter, and the objective extends beyond a benchmark score.",
  },
  {
    period: "Shared environments",
    title: "Multi-agent reinforcement learning",
    body:
      "My current work explores decentralized agents whose actions affect one another, including reward design, coordination, and the tension between local incentives and shared outcomes.",
  },
  {
    period: "Real-world systems",
    title: "Applied AI",
    body:
      "I want to translate AI methods into useful systems for environmental, economic, and social questions while keeping assumptions, tradeoffs, and limitations visible.",
  },
].map((area) => ({
  ...area,
  role: "Research direction",
  description: area.body,
}));

export const teachingTimeline = [
  {
    period: "Teaching • 2026–Present",
    title: "Adjunct Faculty / Teaching Assistant — College of DuPage",
    role: "CIS 1400 • CIS 1221 • CIS 1230 • CIS 2571",
    description:
      "Support Programming Logic and Technique, Data Analysis with Spreadsheets, Database Application, and Introduction to Java through classroom assistance, assignment evaluation, office hours, and individual guidance. Help students develop practical programming and problem-solving skills. Contributed to the design of AI and robotics programs and courses.",
  },
  {
    period: "Workshops",
    title: "Data Science & Technical Workshops",
    role: "Humble Data • Orange Data Mining",
    description:
      "Facilitated hands-on workshops introducing data analysis and visualization tools to participants with different technical backgrounds. Sessions included Humble Data at College of DuPage in October 2025, Orange Data Mining in April 2026, and a second Humble Data workshop in April 2026. Emphasized accessible, practical learning through guided exercises.",
  },
  {
    period: "Student Leadership",
    title: "Computer Science Club — College of DuPage",
    role: "Faculty Co-Advisor • Advisor of the Year nominee",
    description:
      "Help organize technical workshops, student activities, and career-focused events. Support student engagement and connect club members with learning and professional development opportunities. Received a nomination for Advisor of the Year for this work.",
  },
  {
    period: "Community Engagement",
    title: "Academic Events & Outreach",
    role: "ASA DataFest • Career Panels • Student Outreach",
    description:
      "Served as an organizer and judge for ASA DataFest and moderated the Data Analytics Career Panel on May 2, 2026. Support student collaboration and engagement with computing and data science communities through academic and professional events.",
  },
];

export const projectTimeline = selectedProjects.map((project) => ({
  period: project.period,
  title: project.title,
  role: project.summary,
  description: project.context,
  impact: project.impact,
  methods: project.methods,
  links: project.links,
}));

const projectByTitle = (title) => selectedProjects.find((project) => project.title === title);

const pokemonProject = {
  title: "Pokémon Analysis",
  summary:
    "A classification project exploring the attributes that distinguish legendary Pokémon from the rest of the dataset.",
  context:
    "Used exploratory analysis, feature engineering, clustering, and leakage-aware modeling pipelines to compare Pokémon statistics and metadata.",
  impact:
    "Demonstrates a disciplined classification workflow on an approachable dataset, with attention to feature leakage and model interpretation.",
  methods: ["Python", "Scikit-learn", "Pandas", "Classification", "Clustering"],
  links: [{ label: "GitHub", href: "https://github.com/Barderus/pokemon-analysis" }],
};

const regionalPollutionProject = {
  title: "Regional Pollution MARL",
  summary:
    "A simulated four-region environment for studying how independent agents balance local interests with shared environmental outcomes.",
  context:
    "Compares local, global, and mixed reward structures across emissions coordination and economic sustainability studies using independent Q-learning agents.",
  impact:
    "Provides an experimental framework for examining coordination, spillover effects, and the tradeoff between regional priorities and system-wide outcomes.",
  methods: ["Python", "Multi-Agent Reinforcement Learning", "Q-Learning", "Simulation"],
  links: [{ label: "GitHub", href: "https://github.com/Barderus/regional-pollution-marl" }],
};

const runItProject = {
  title: "RUN IT Discord Bot",
  summary: "A Discord bot software project included in my software-development portfolio.",
  context:
    "The current portfolio source does not yet contain a verified technical description or public repository link for this project.",
  impact: "Project details will be expanded after the implementation and repository information are verified.",
  methods: ["Discord Bot", "Software Development"],
};

export const workAreas = [
  {
    id: "machine-learning",
    title: "Machine Learning & Predictive Analytics",
    description:
      "Exploring predictive models, statistical methods, and data-driven approaches to understanding complex problems.",
    projects: [
      projectByTitle("Recession Identification with Machine Learning"),
      projectByTitle("March Madness Kaggle Prediction"),
      pokemonProject,
    ],
  },
  {
    id: "natural-language-processing",
    title: "Natural Language Processing & Explainable AI",
    description:
      "Exploring natural language processing, misinformation detection, and techniques for interpreting machine learning predictions.",
    projects: [projectByTitle("TrustNet — Fake News & Stance Detection")],
  },
  {
    id: "intelligent-systems",
    title: "Intelligent Systems & Optimization",
    description:
      "Applying algorithms and reinforcement learning to routing, coordination, and decision-making problems.",
    projects: [projectByTitle("eVTOL Air Route Risk Modeling"), regionalPollutionProject],
  },
  {
    id: "software-development",
    title: "Software Development & Data Applications",
    description:
      "Building software applications, data processing tools, and interactive systems using a variety of programming technologies.",
    projects: [
      projectByTitle("Job Market Dashboard"),
      projectByTitle("Dungeons and the Ur-Dragon"),
      runItProject,
    ],
  },
];

export const contactEntries = [
  {
    title: "Email",
    value: profileLinks.email.value,
    description: "Best for collaboration, teaching, research, or speaking opportunities.",
    action: profileLinks.email.action,
    label: "Start an email",
  },
  {
    title: "LinkedIn",
    value: profileLinks.linkedin.value,
    description: "Professional profile and a direct way to stay in touch.",
    href: profileLinks.linkedin.href,
    label: "Open LinkedIn",
  },
  {
    title: "GitHub",
    value: profileLinks.github.value,
    description: "Repositories for projects, research prototypes, and experiments.",
    href: profileLinks.github.href,
    label: "Open GitHub",
  },
  {
    title: "Resume",
    value: profileLinks.resume.value,
    description: "Available through a short request form.",
    to: profileLinks.resume.to,
    label: "Request resume",
  },
];

export const featuredProjects = [
  {
    title: "Regional Pollution MARL",
    category: "Research",
    description:
      "A four-region simulation exploring how local, global, and mixed rewards shape decentralized pollution mitigation and sustainability decisions.",
    tags: ["MARL", "Q-Learning", "Simulation", "Reward Design"],
    result:
      "Tests how independent agents balance regional priorities with shared environmental outcomes.",
    visualType: "network",
    links: [
      { label: "View Work", to: "/work" },
      { label: "GitHub", href: "https://github.com/Barderus/regional-pollution-marl", variant: "secondary" },
    ],
  },
  {
    title: "Dungeons and the Ur-Dragon",
    category: "Projects",
    description:
      "A Python turn-based RPG combining party combat, magic, inventory, dungeon progression, rule-based enemy behavior, and a Pygame prototype.",
    tags: ["Python", "OOP", "Game Systems", "Pygame"],
    result:
      "Connects object-oriented design with a playable set of interdependent combat and progression systems.",
    visualType: "branch",
    links: [
      { label: "View Work", to: "/work" },
      { label: "GitHub", href: "https://github.com/Barderus/Dungeons-and-the-Ur-Dragon/tree/main", variant: "secondary" },
    ],
  },
  {
    title: "Recession Prediction with EPU and Machine Learning",
    category: "Research",
    description:
      "A recession forecasting project centered on economic policy uncertainty, macroeconomic indicators, and interpretable machine learning models.",
    tags: ["Python", "Time Series", "Macroeconomics", "ML"],
    result:
      "Frames recession risk as a practical decision-support problem rather than a purely academic forecast.",
    visualType: "chart",
    imageSrc: publicImage("recession_best_feature_per_model.png"),
    links: [
      { label: "View Work", to: "/work" },
      {
        label: "GitHub",
        href: "https://github.com/Barderus/Recession_Prediction",
        variant: "secondary",
      },
    ],
  },
  {
    title: "eVTOL / UAM Air Route Cost Analysis",
    category: "Research",
    description:
      "Low-altitude route analysis around Chicago using population density, airspace constraints, flight-density costs, and A* pathfinding.",
    tags: ["Geospatial", "Routing", "Aviation", "Optimization"],
    result:
      "Combines route planning with real-world operational constraints in a research-oriented aviation workflow.",
    visualType: "route",
    imageSources: publicImages(
      "aviation_project_1.png",
      "aviation_project_2.png",
      "aviation_project_3.png",
      "aviation_project_4.png",
    ),
    links: [
      { label: "View Work", to: "/work" },
      {
        label: "GitHub",
        href: "https://github.com/Barderus/eVTOL_Air_Route",
        variant: "secondary",
      },
    ],
  },
  {
    title: "March Madness Kaggle Prediction",
    category: "Projects",
    description:
      "Tournament prediction built from regular-season data, engineered matchup features, and model comparison notebooks.",
    tags: ["Sports Analytics", "Feature Engineering", "Python", "Modeling"],
    result:
      "Turns noisy matchup data into a structured prediction pipeline designed for fast experimentation.",
    visualType: "bracket",
    imageSources: publicImages(
      "march_madness_models_features.png",
      "march_madness_kaggle_placement.png",
    ),
    links: [
      { label: "View Work", to: "/work" },
      {
        label: "GitHub",
        href: "https://github.com/Barderus/MarchMadness-Kaggle",
        variant: "secondary",
      },
    ],
  },
];

export const focusAreas = [
  {
    title: "Reinforcement Learning",
    description:
      "I study how agents learn from interaction when decisions unfold over time, rewards are delayed, and uncertainty shapes the outcome.",
    visualType: "chart",
    showPreview: false,
  },
  {
    title: "Multi-Agent Systems",
    description:
      "I am especially interested in coordination, reward design, and the tradeoffs that appear when independent agents share an environment.",
    visualType: "network",
    showPreview: false,
  },
  {
    title: "Applied AI",
    description:
      "I like end-to-end work that connects data pipelines, modeling, visualization, and decision support into something people can actually use.",
    visualType: "dashboard",
    showPreview: false,
  },
  {
    title: "Teaching & Data Literacy",
    description:
      "Teaching matters to me because technical work becomes more useful when it is understandable, approachable, and shared well.",
    visualType: "document",
    showPreview: false,
  },
];

export const homeHighlights = [
  {
    title: "Teaching",
    description:
      "Course support, assignment design, office hours, and project-based guidance for students learning technical material.",
    tags: ["Mentorship", "Curriculum", "Student Support"],
    visualType: "document",
    showPreview: false,
    links: [{ label: "Explore Teaching", to: "/teaching" }],
  },
  {
    title: "Writing",
    description:
      "A personal writing space for reflection on projects, research, machine learning, and academic growth.",
    tags: ["Blog", "Reflection", "Communication"],
    visualType: "signal",
    showPreview: false,
    links: [{ label: "Visit Writing", to: "/blog" }],
  },
  {
    title: "Leadership & Community",
    description:
      "Work that supports technical communities through advising, events, moderation, workshops, and judging.",
    tags: ["Leadership", "Community", "Events"],
    visualType: "constellation",
    showPreview: false,
    links: [{ label: "See About", to: "/about" }],
  },
];

export const contactCards = [
  {
    title: "Email",
    description: "Best for collaboration, teaching, research, or speaking opportunities.",
    visualType: "document",
    links: [
      {
        label: "Email",
        action: profileLinks.email.action,
        variant: "primary",
      },
    ],
    helper: profileLinks.email.value,
    showPreview: false,
  },
  {
    title: "Resume",
    description: "Use this for a concise overview of projects, research, and teaching experience.",
    visualType: "document",
    links: [
      {
        label: "Request Resume",
        to: profileLinks.resume.to,
        variant: "primary",
      },
    ],
    helper: profileLinks.resume.value,
    showPreview: false,
  },
  {
    title: "GitHub",
    description: "Code repositories for projects, research prototypes, and data-focused experiments.",
    visualType: "dashboard",
    links: [{ label: "Open GitHub", href: profileLinks.github.href }],
    helper: profileLinks.github.value,
    showPreview: false,
  },
  {
    title: "LinkedIn",
    description: "Professional profile and a direct way to follow updates or reach out.",
    visualType: "signal",
    links: [{ label: "Open LinkedIn", href: profileLinks.linkedin.href }],
    helper: profileLinks.linkedin.value,
    showPreview: false,
  },
];

export const pageContent = {
  work: {
    title: "Work",
    eyebrow: "Projects and research",
    intro:
      "Projects and research live together here so the portfolio is faster to scan. These entries keep the focus on the problem, method, and outcome.",
    cards: [
      {
        title: "Regional Pollution MARL",
        category: "Research",
        meta: "Multi-agent reinforcement learning | environmental simulation",
        description:
          "A four-region simulation that compares local, global, and mixed rewards as independent agents make pollution mitigation and economic sustainability decisions.",
        tags: ["Research", "MARL", "Q-Learning", "Reward Design", "Simulation"],
        result:
          "Builds a controlled setting for studying coordination, spillover effects, and the tradeoff between regional priorities and shared outcomes.",
        visualType: "network",
        links: [{ label: "GitHub", href: "https://github.com/Barderus/regional-pollution-marl" }],
      },
      {
        title: "Dungeons and the Ur-Dragon",
        category: "Project",
        meta: "Python | object-oriented design | game development",
        description:
          "A turn-based RPG with party combat, spells, consumable items, dungeon progression, and rule-based enemy decisions, plus an experimental Pygame interface.",
        tags: ["Project", "Python", "OOP", "Game Systems", "Pygame"],
        result:
          "Grew from an OOP exercise into a playable system connecting characters, combat, inventory, progression, and enemy behavior.",
        visualType: "branch",
        links: [{ label: "GitHub", href: "https://github.com/Barderus/Dungeons-and-the-Ur-Dragon/tree/main" }],
      },
      {
        title: "Recession Prediction",
        category: "Research",
        meta: "Macroeconomics | forecasting | machine learning",
        description:
          "A recession forecasting project built around economic policy uncertainty, macroeconomic indicators, and interpretable machine learning models.",
        tags: ["Research", "Forecasting", "Macroeconomics", "Interpretable ML", "Python"],
        result:
          "Treats recession prediction as an interpretable risk signal that supports clearer reasoning about uncertainty.",
        visualType: "chart",
        imageSrc: publicImage("recession_best_feature_per_model.png"),
        links: [
          {
            label: "GitHub",
            href: "https://github.com/Barderus/Recession_Prediction",
          },
        ],
      },
      {
        title: "eVTOL Air Route",
        category: "Research",
        meta: "Aviation research | routing | geospatial analysis",
        description:
          "Low-altitude route analysis around Chicago using population density, airspace constraints, flight-density costs, and A* pathfinding.",
        tags: ["Research", "Aviation", "Geospatial", "Routing", "Optimization"],
        result:
          "Models route selection as a tradeoff between operational practicality, safety, and spatial cost.",
        visualType: "route",
        imageSources: publicImages(
          "aviation_project_1.png",
          "aviation_project_2.png",
          "aviation_project_3.png",
          "aviation_project_4.png",
        ),
        links: [
          {
            label: "GitHub",
            href: "https://github.com/Barderus/eVTOL_Air_Route",
          },
        ],
      },
      {
        title: "March Madness Kaggle",
        category: "Project",
        meta: "Predictive modeling | sports analytics",
        description:
          "NCAA tournament prediction built from regular-season data, engineered matchup features, and model comparison notebooks.",
        tags: ["Project", "Python", "Kaggle", "Feature Engineering", "Sports"],
        result: "Built for rapid experimentation with matchup features and predictive baselines.",
        visualType: "bracket",
        imageSources: publicImages(
          "march_madness_models_features.png",
          "march_madness_kaggle_placement.png",
        ),
        links: [
          {
            label: "GitHub",
            href: "https://github.com/Barderus/MarchMadness-Kaggle",
          },
        ],
      },
      {
        title: "Job Market Dashboard",
        category: "Project",
        meta: "Labor analytics | dashboard pipeline",
        description:
          "Multi-source analysis of U.S. tech hiring trends across roles, skills, salaries, and geography, with an interactive dashboard direction.",
        tags: ["Project", "Dashboards", "Labor Data", "Analytics", "Visualization"],
        result:
          "Designed to make broad job-market patterns easier to compare across roles and locations.",
        visualType: "dashboard",
        imageSources: publicImages(
          "job_market_salary_distribution_dashboard.png",
          "job_market_top10_skills.png",
        ),
        links: [
          {
            label: "GitHub",
            href: "https://github.com/Barderus/job-market-dashboard",
          },
        ],
      },
      {
        title: "Pokemon Analysis",
        category: "Project",
        meta: "Classification | feature engineering",
        description:
          "A playful but serious modeling project on what separates legendary Pokemon from the rest using stats, metadata, and leakage-safe pipelines.",
        tags: ["Project", "Classification", "EDA", "Pipelines", "Python"],
        result:
          "Uses a familiar dataset to demonstrate disciplined modeling and leakage-aware feature work.",
        visualType: "chart",
        imageSrc: publicImage("pokemon_cluster.png"),
        links: [
          {
            label: "GitHub",
            href: "https://github.com/Barderus/pokemon-analysis",
          },
        ],
      },
      {
        title: "UFO Data Analysis",
        category: "Project",
        meta: "EDA | geospatial analysis | text analysis",
        description:
          "Large-scale UFO sighting analysis using temporal trends, mapping, and text analysis to turn an unusual dataset into interpretable patterns.",
        tags: ["Project", "Geospatial", "Text Analysis", "EDA", "Visualization"],
        result:
          "Transforms a novelty dataset into a serious exercise in exploratory analysis and communication.",
        visualType: "constellation",
        imageSources: publicImages("ufo_map.png", "ufo_wordcloud.png"),
        links: [
          {
            label: "GitHub",
            href: "https://github.com/Barderus/UFO-Data-Analysis",
          },
        ],
      },
    ],
  },
  teaching: {
    title: "Teaching & Academic Engagement",
    eyebrow: "College of DuPage",
    intro:
      "My academic work at College of DuPage spans classroom instruction, program development, technical workshops, student advising, and community-facing events.",
    cards: [
      {
        title: "Adjunct Faculty / Teaching Assistant",
        meta: "College of DuPage | 2026–Present",
        description:
          "Support CIS 1400 Programming Logic and Technique, CIS 1221 Data Analysis with Spreadsheets, CIS 1230 Database Application, and CIS 2571 Introduction to Java through classroom assistance, evaluation, office hours, and individual guidance.",
        tags: ["Programming Logic", "Spreadsheets", "Database Applications", "Java"],
        result:
          "Also contributed to the design of AI and robotics programs and courses.",
        visualType: "dashboard",
        showPreview: false,
      },
      {
        title: "Computer Science Club Co-Advisor",
        meta: "Student leadership | Advisor of the Year nominee",
        description:
          "Help organize technical workshops, student activities, and career-focused events while connecting members with learning and professional development opportunities.",
        tags: ["Faculty Advising", "Student Leadership", "Events", "Professional Development"],
        result:
          "Nominated for Advisor of the Year in recognition of this work.",
        visualType: "constellation",
        showPreview: false,
      },
      {
        title: "Humble Data Workshops",
        meta: "College of DuPage and Lewis University | 2025–2026",
        description:
          "Led hands-on data literacy sessions at two institutions and returned for a second College of DuPage workshop, adapting the material for learners with different backgrounds.",
        tags: ["Workshops", "Data Literacy", "Cross-Campus", "Facilitation"],
        result:
          "Made practical data work approachable through guided exercises, live explanation, and repeatable workflows.",
        visualType: "signal",
        imageSources: publicImages(
          "humble_data_cod_2025.jpg",
          "humble_data_lewis_2025_1.jpg",
          "humble_data_lewis_2025_2.jpg",
          "humble_data_cod_2026.jpg",
        ),
        links: [{ label: "View Workshops", to: "/workshops" }],
      },
      {
        title: "Orange Data Mining Workshop",
        meta: "Visual analytics | approachable machine learning | April 2026",
        description:
          "Introduced participants to Orange through a guided visual workflow for exploring data and understanding machine learning concepts without requiring a code-first entry point.",
        tags: ["Orange", "Visual Analytics", "Machine Learning", "Technical Communication"],
        result:
          "Used visual workflows to lower the barrier to experimentation while keeping the analytical reasoning visible.",
        visualType: "dashboard",
        imageSources: publicImages("orange_data_mining.jpg", "orange_data_mining_2.jpg"),
        links: [{ label: "View Workshops", to: "/workshops" }],
      },
      {
        title: "CS Club Co-Advisor",
        meta: "Student leadership | advising | community building",
        description:
          "Support student-led technical programming, event coordination, and continuity for a learning community that gives students room to collaborate outside formal coursework.",
        tags: ["Leadership", "Advising", "Community", "Student Programs"],
        result:
          "Helps sustain an active, welcoming technical community and gives student organizers support without taking ownership away from them.",
        visualType: "constellation",
        showPreview: false,
        links: [{ label: "View Leadership", to: "/leadership" }],
      },
      {
        title: "DataFest, Career Panels, and Outreach",
        meta: "Organizer | judge | moderator | facilitator",
        description:
          "Organized and judged ASA DataFest, moderated career conversations, and supported events that connect students with practitioners and broader analytics communities.",
        tags: ["DataFest", "Moderation", "Judging", "Outreach"],
        result:
          "Extends teaching beyond course content by helping students present work, ask better questions, and see pathways into technical careers.",
        visualType: "constellation",
        imageSources: publicImages(
          "asa_datafest_2026.jpg",
          "asa_datafest_2026_2.jpg",
          "asa_datafest_2026_3.jpg",
          "career_panel_2026.jpg",
          "career_panel_2026_1.jpg",
          "career_panel_2026_2.jpg",
        ),
        links: [{ label: "View Related Activities", to: "/other" }],
      },
    ],
  },
  workshops: {
    title: "Workshops",
    eyebrow: "Technical facilitation",
    intro:
      "These workshops reflect hands-on technical teaching across institutions, with a focus on making data tools approachable through guided, practical sessions.",
    cards: [
      {
        title: "Humble Data Workshop | College of DuPage",
        meta: "Saturday, October 11, 2025 | data literacy workshop",
        description:
          "Led a Humble Data workshop focused on practical, accessible data work and helping participants engage with data tools in a hands-on setting.",
        tags: ["Workshop", "Data Literacy", "Facilitation"],
        visualType: "signal",
        imageSrc: publicImage("humble_data_cod_2025.jpg"),
      },
      {
        title: "Humble Data Workshop | Lewis University",
        meta: "Saturday, November 22, 2025 | cross-campus workshop",
        description:
          "Ran the same Humble Data workshop at Lewis University, adapting the session for a different audience while keeping the emphasis on approachable data practice.",
        tags: ["Workshop", "Teaching", "Cross-Campus"],
        visualType: "signal",
        imageSources: publicImages(
          "humble_data_lewis_2025_1.jpg",
          "humble_data_lewis_2025_2.jpg",
        ),
      },
      {
        title: "Orange Data Mining Workshop",
        meta: "Tuesday, April 14, 2026 | visual analytics workshop",
        description:
          "Introduced participants to Orange Data Mining through a guided workshop centered on visual workflows, data exploration, and approachable machine learning concepts.",
        tags: ["Visual Analytics", "Orange", "Workshop"],
        visualType: "dashboard",
        imageSources: publicImages("orange_data_mining.jpg", "orange_data_mining_2.jpg"),
      },
      {
        title: "Humble Data Workshop | College of DuPage | Spring 2026",
        meta: "Saturday, April 25, 2026 | repeat workshop",
        description:
          "Ran the Humble Data workshop again in Spring 2026, reinforcing core data literacy concepts through another live, hands-on session.",
        tags: ["Workshop", "Repeat Session", "Data Literacy"],
        visualType: "signal",
        imageSrc: publicImage("humble_data_cod_2026.jpg"),
      },
    ],
  },
  certifications: {
    title: "Certifications",
    eyebrow: "Formal upskilling",
    intro:
      "I keep certifications selective and relevant. The emphasis is on credentials that directly support the analytical side of my portfolio.",
    cards: [
      {
        title: "Google Data Analytics Certificate",
        meta: "Google Career Certificates | data analytics",
        description:
          "Completed Google's eight-course data analytics program covering data cleaning, analysis, visualization, spreadsheets, SQL, R, and data-driven communication.",
        tags: ["SQL", "R", "Visualization", "Analytics"],
        visualType: "document",
        showPreview: false,
        links: [
          {
            label: "View Credential",
            href:
              "https://www.credly.com/badges/87f1e441-a64b-4e6d-befc-7a3661d4bba1/linked_in_profile",
          },
        ],
      },
    ],
  },
  leadership: {
    title: "Leadership",
    eyebrow: "Community and coordination",
    intro:
      "Leadership here is focused on the work of helping technical communities stay active, organized, and student-centered.",
    cards: [
      {
        title: "CS Club Co-Advisor",
        meta: "Student leadership | advising | community support",
        description:
          "Served as Co-Advisor for the CS Club, supporting programming, coordination, and continuity for student-led technical events and activities.",
        tags: ["Advising", "Community", "Student Leadership"],
        result:
          "Helped maintain continuity for student technical programming and collaborative club activity.",
        visualType: "constellation",
        showPreview: false,
      },
    ],
  },
  blog: {
    title: "Writing",
    eyebrow: "Writing and reflection",
    intro:
      "My writing extends the portfolio into longer-form reflection. It is where I connect projects, research, student life, and what I am learning through data-focused work.",
    cards: [
      {
        title: "Learning with Data",
        meta: "gabriel-dos-reis.com | blog and reflections",
        description:
          "A personal blog built around the idea of turning data into knowledge one step at a time, with posts on projects, research, machine learning, and academic growth.",
        tags: ["Writing", "Reflection", "Communication"],
        visualType: "signal",
        showPreview: false,
        links: [{ label: "Visit Blog", href: "https://gabriel-dos-reis.com/" }],
      },
    ],
  },
  other: {
    title: "Other Activities",
    eyebrow: "Additional signal",
    intro:
      "This page holds the experience that strengthens the overall portfolio without needing its own top-level category, including event leadership, moderation, judging, and community volunteering.",
    cards: [
      {
        title: "ASA DataFest Organizer and Judge",
        meta: "College of DuPage | Saturday, May 2, 2026",
        description:
          "Helped support ASA DataFest through event organization and judging, contributing to a collaborative data analytics competition environment for students.",
        tags: ["DataFest", "Judging", "Event Support"],
        visualType: "bracket",
        imageSources: publicImages(
          "asa_datafest_2026.jpg",
          "asa_datafest_2026_2.jpg",
          "asa_datafest_2026_3.jpg",
        ),
        links: [
          {
            label: "View Event",
            href:
              "https://www.cod.edu/calendar/event-details/2747de96-3839-41b9-a7a3-fcc2a81070b7/instances/2026-05-02",
          },
        ],
      },
      {
        title: "Data Analytics Career Panel Moderator",
        meta: "College of DuPage | Wednesday, April 29, 2026",
        description:
          "Moderated a data analytics career panel, helping guide discussion around pathways, professional development, and opportunities in analytics-related fields.",
        tags: ["Moderation", "Career Development", "Community"],
        visualType: "signal",
        imageSources: publicImages("career_panel_2026_1.jpg", "career_panel_2026_2.jpg"),
        links: [
          {
            label: "View Event",
            href: "https://www.cod.edu/calendar/event-details/f685cfee-0fb1-4f98-81c1-28add61ad9dd",
          },
        ],
      },
      {
        title: "DuPage Wildlife Conservation Center Volunteer",
        meta: "Community volunteering",
        description:
          "Volunteer experience that reflects service, consistency, and involvement outside of academic and technical work.",
        tags: ["Volunteering", "Community"],
        visualType: "constellation",
        showPreview: false,
      },
    ],
  },
  about: {
    title: "About",
    eyebrow: "Broader portfolio identity",
    intro:
      "This portfolio sits at the intersection of data science, research, teaching, and technical community work. The pages below preserve the broader record behind the main navigation.",
    cards: [
      {
        title: "Workshops",
        meta: "Data literacy | outreach | facilitation",
        description:
          "Hands-on teaching sessions designed to make technical topics approachable through guided and practical work.",
        tags: ["Workshops", "Facilitation", "Data Literacy"],
        visualType: "signal",
        showPreview: false,
        links: [{ label: "Open Workshops", to: "/workshops" }],
      },
      {
        title: "Certifications",
        meta: "Formal upskilling",
        description:
          "Selective credentials that reinforce the analytics side of the portfolio without overwhelming the core project and research story.",
        tags: ["Certificates", "Analytics"],
        visualType: "document",
        showPreview: false,
        links: [{ label: "Open Certifications", to: "/certifications" }],
      },
      {
        title: "Leadership",
        meta: "Advising | coordination | community",
        description:
          "Student-facing leadership and advising that support continuity, programming, and technical community building.",
        tags: ["Leadership", "Advising", "Community"],
        visualType: "constellation",
        showPreview: false,
        links: [{ label: "Open Leadership", to: "/leadership" }],
      },
      {
        title: "Other Activities",
        meta: "Panels | judging | volunteering",
        description:
          "Additional work that strengthens the overall professional picture through service, moderation, and event support.",
        tags: ["Panels", "Judging", "Volunteering"],
        visualType: "dashboard",
        showPreview: false,
        links: [{ label: "Open Other Activities", to: "/other" }],
      },
    ],
  },
  contact: {
    title: "Contact",
    eyebrow: "Collaboration and conversation",
    intro:
      "Interested in research, data science, teaching, or collaboration? These are the cleanest ways to reach me or review my work.",
    cards: contactCards.map((card) => ({ ...card, showPreview: false })),
  },
};

export const contactLinks = [
  {
    label: "LinkedIn",
    value: profileLinks.linkedin.value,
    href: profileLinks.linkedin.href,
  },
  {
    label: "GitHub",
    value: profileLinks.github.value,
    href: profileLinks.github.href,
  },
  {
    label: "Resume",
    value: profileLinks.resume.value,
    to: profileLinks.resume.to,
  },
];
