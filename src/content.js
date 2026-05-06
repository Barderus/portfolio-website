export const siteIdentity = {
  name: "Gabriel dos Reis",
  role: "Data science, machine learning, and research portfolio",
  location: "Chicago area",
};

const publicImage = (name) => `${import.meta.env.BASE_URL}images/${name}`;
const publicImages = (...names) => names.map((name) => publicImage(name));

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Research", path: "/research" },
  { label: "Teaching", path: "/teaching" },
  { label: "Writing", path: "/blog" },
  { label: "About", path: "/about" },
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
    href: "mailto:reis.sev@gmail.com",
    value: "reis.sev@gmail.com",
    placeholder: false,
  },
  resume: {
    label: "Resume",
    href: "",
    value: "Available on request",
    placeholder: true,
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

export const heroStats = [
  { value: "ML + analytics", label: "Applied focus" },
  { value: "Forecasting + aviation", label: "Research direction" },
  { value: "Teaching + advising", label: "Community work" },
];

export const featuredProjects = [
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
      { label: "View Project", to: "/research" },
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
      { label: "View Project", to: "/research" },
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
      { label: "View Project", to: "/projects" },
      {
        label: "GitHub",
        href: "https://github.com/Barderus/MarchMadness-Kaggle",
        variant: "secondary",
      },
    ],
  },
  {
    title: "TrustNet / Fake News Detection",
    category: "Projects",
    description:
      "An explainable NLP tool that evaluates trustworthiness and surfaces why a piece of text was flagged by the model.",
    tags: ["NLP", "Explainability", "Classification", "Misinformation"],
    result:
      "Emphasizes transparent scoring and readable model reasoning instead of a black-box output.",
    visualType: "network",
    links: [
      { label: "View Project", to: "/projects" },
      {
        label: "GitHub",
        href: "https://github.com/Barderus/TrustNet",
        variant: "secondary",
      },
    ],
  },
];

export const focusAreas = [
  {
    title: "Forecasting & Uncertainty",
    description:
      "I am interested in models that help people reason under uncertainty, especially when the cost of being wrong affects planning and policy.",
    visualType: "chart",
  },
  {
    title: "NLP & Misinformation",
    description:
      "I care about language systems that do more than classify text. They should also help users understand credibility, framing, and model reasoning.",
    visualType: "network",
  },
  {
    title: "Applied Data Systems",
    description:
      "I like end-to-end work that connects data pipelines, modeling, visualization, and decision support into something people can actually use.",
    visualType: "dashboard",
  },
  {
    title: "Teaching & Data Literacy",
    description:
      "Teaching matters to me because technical work becomes more useful when it is understandable, approachable, and shared well.",
    visualType: "document",
  },
];

export const homeHighlights = [
  {
    title: "Teaching",
    description:
      "Course support, assignment design, office hours, and project-based guidance for students learning technical material.",
    tags: ["Mentorship", "Curriculum", "Student Support"],
    visualType: "document",
    links: [{ label: "Explore Teaching", to: "/teaching" }],
  },
  {
    title: "Writing",
    description:
      "A personal writing space for reflection on projects, research, machine learning, and academic growth.",
    tags: ["Blog", "Reflection", "Communication"],
    visualType: "signal",
    links: [{ label: "Visit Writing", to: "/blog" }],
  },
  {
    title: "Leadership & Community",
    description:
      "Work that supports technical communities through advising, events, moderation, workshops, and judging.",
    tags: ["Leadership", "Community", "Events"],
    visualType: "constellation",
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
        href: profileLinks.email.href,
        variant: "primary",
        placeholder: profileLinks.email.placeholder,
      },
    ],
    helper: profileLinks.email.value,
  },
  {
    title: "Resume",
    description: "Use this for a concise overview of projects, research, and teaching experience.",
    visualType: "document",
    links: [
      {
        label: "View Resume",
        href: profileLinks.resume.href,
        variant: "primary",
        placeholder: profileLinks.resume.placeholder,
      },
    ],
    helper: profileLinks.resume.value,
  },
  {
    title: "GitHub",
    description: "Code repositories for projects, research prototypes, and data-focused experiments.",
    visualType: "dashboard",
    links: [{ label: "Open GitHub", href: profileLinks.github.href }],
    helper: profileLinks.github.value,
  },
  {
    title: "LinkedIn",
    description: "Professional profile and a direct way to follow updates or reach out.",
    visualType: "signal",
    links: [{ label: "Open LinkedIn", href: profileLinks.linkedin.href }],
    helper: profileLinks.linkedin.value,
  },
];

export const pageContent = {
  projects: {
    title: "Projects",
    eyebrow: "Data products",
    intro:
      "A selected set of data science and analytics projects. The cards stay concise so the portfolio feels scannable while still showing what each project is trying to solve.",
    cards: [
      {
        title: "March Madness Kaggle",
        meta: "Predictive modeling | sports analytics",
        description:
          "NCAA tournament prediction built from regular-season data, engineered matchup features, and model comparison notebooks.",
        tags: ["Python", "Kaggle", "Feature Engineering", "Sports"],
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
        meta: "Labor analytics | dashboard pipeline",
        description:
          "Multi-source analysis of U.S. tech hiring trends across roles, skills, salaries, and geography, with an interactive dashboard direction.",
        tags: ["Dashboards", "Labor Data", "Analytics", "Visualization"],
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
        meta: "Classification | feature engineering",
        description:
          "A playful but serious modeling project on what separates legendary Pokemon from the rest using stats, metadata, and leakage-safe pipelines.",
        tags: ["Classification", "EDA", "Pipelines", "Python"],
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
        title: "TrustNet",
        meta: "NLP | misinformation detection",
        description:
          "An explainable fake-news analysis tool that scores trustworthiness and surfaces why the model flagged the text the way it did.",
        tags: ["NLP", "Explainability", "Trust Scoring", "ML"],
        result:
          "Keeps interpretability central so the system feels more useful than a one-number classification.",
        visualType: "network",
        imageSources: publicImages(
          "trustnet_average_word_length_1.png",
          "trustnet_average_word_length_2.png",
        ),
        links: [
          {
            label: "GitHub",
            href: "https://github.com/Barderus/TrustNet",
          },
        ],
      },
      {
        title: "UFO Data Analysis",
        meta: "EDA | geospatial analysis | NLP",
        description:
          "Large-scale UFO sighting analysis using temporal trends, mapping, and text analysis to turn an unusual dataset into interpretable patterns.",
        tags: ["Geospatial", "Text Analysis", "EDA", "Visualization"],
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
  research: {
    title: "Research",
    eyebrow: "Data-driven inquiry",
    intro:
      "Two research tracks anchor the portfolio: economic forecasting and aviation systems. Both focus on modeling under real constraints rather than purely theoretical exercises.",
    cards: [
      {
        title: "Recession Prediction",
        meta: "Macroeconomics | forecasting | machine learning",
        description:
          "A recession forecasting project built around economic policy uncertainty, macroeconomic indicators, and interpretable machine learning models.",
        tags: ["Forecasting", "Macroeconomics", "Interpretable ML", "Python"],
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
        meta: "Aviation research | routing | geospatial analysis",
        description:
          "Low-altitude route analysis around Chicago using population density, airspace constraints, flight-density costs, and A* pathfinding.",
        tags: ["Aviation", "Geospatial", "Routing", "Optimization"],
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
    ],
  },
  teaching: {
    title: "Teaching",
    eyebrow: "Instruction and mentorship",
    intro:
      "My teaching experience centers on practical student support: grading, office hours, technical guidance, and assignment design that helps students apply concepts rather than memorize them.",
    cards: [
      {
        title: "CIS 1230 | Database Application",
        meta: "TA support | databases | student guidance",
        description:
          "Supported a relational database management course covering database design, creation, maintenance, forms, reports, queries, macros, and application development.",
        tags: ["Databases", "Office Hours", "Assessment", "Student Support"],
        result:
          "Focused on helping students connect database concepts to usable applications and course projects.",
        visualType: "dashboard",
      },
      {
        title: "CIS 2571 | Introduction to Java",
        meta: "TA support | Java | project-based learning",
        description:
          "Supported an introductory Java course covering encapsulation, class design, objects, polymorphism, and GUI components, while also creating project-based assignments.",
        tags: ["Java", "Project-Based Learning", "TA Work", "Curriculum"],
        result:
          "Emphasized implementation-based learning so students could practice concepts through actual program design.",
        visualType: "document",
      },
      {
        title: "Workshops and Data Literacy",
        meta: "Facilitation | technical communication | outreach",
        description:
          "Workshop sessions in approachable data tools, data literacy, and visual analytics that complement formal course support.",
        tags: ["Workshops", "Data Literacy", "Facilitation"],
        visualType: "signal",
        links: [{ label: "View Workshops", to: "/workshops" }],
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
        imageSrc: publicImage("asa_datafest_2026.jpg"),
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
        links: [{ label: "Open Workshops", to: "/workshops" }],
      },
      {
        title: "Certifications",
        meta: "Formal upskilling",
        description:
          "Selective credentials that reinforce the analytics side of the portfolio without overwhelming the core project and research story.",
        tags: ["Certificates", "Analytics"],
        visualType: "document",
        links: [{ label: "Open Certifications", to: "/certifications" }],
      },
      {
        title: "Leadership",
        meta: "Advising | coordination | community",
        description:
          "Student-facing leadership and advising that support continuity, programming, and technical community building.",
        tags: ["Leadership", "Advising", "Community"],
        visualType: "constellation",
        links: [{ label: "Open Leadership", to: "/leadership" }],
      },
      {
        title: "Other Activities",
        meta: "Panels | judging | volunteering",
        description:
          "Additional work that strengthens the overall professional picture through service, moderation, and event support.",
        tags: ["Panels", "Judging", "Volunteering"],
        visualType: "dashboard",
        links: [{ label: "Open Other Activities", to: "/other" }],
      },
    ],
  },
  contact: {
    title: "Contact",
    eyebrow: "Collaboration and conversation",
    intro:
      "Interested in research, data science, teaching, or collaboration? These are the cleanest ways to reach me or review my work.",
    cards: contactCards,
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
    href: profileLinks.resume.href,
    placeholder: profileLinks.resume.placeholder,
  },
];
