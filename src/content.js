export const navItems = [
  { label: "Projects", path: "/projects" },
  { label: "Research", path: "/research" },
  { label: "Teaching", path: "/teaching" },
  { label: "Workshops", path: "/workshops" },
  { label: "Certifications", path: "/certifications" },
  { label: "Leadership", path: "/leadership" },
  { label: "Blog", path: "/blog" },
  { label: "Other", path: "/other" },
];

export const highlightStats = [
  { value: "Data science", label: "Primary focus" },
  { value: "Forecasting + aviation", label: "Research" },
  { value: "Teaching + advising", label: "Leadership" },
];

export const pageContent = {
  projects: {
    title: "Projects",
    eyebrow: "Data products",
    intro:
      "A selected set of data science and analytics projects. Each card is intentionally short so visitors can scan fast, then jump straight to the GitHub repo for the full implementation.",
    cards: [
      {
        title: "March Madness Kaggle",
        meta: "Predictive modeling | sports analytics",
        description:
          "NCAA tournament prediction built from regular-season data, engineered matchup features, and model comparison notebooks.",
        visualLabel: "Modeling preview",
        linkLabel: "Open GitHub repo",
        linkUrl: "https://github.com/Barderus/MarchMadness-Kaggle",
      },
      {
        title: "Job Market Dashboard",
        meta: "Labor analytics | dashboard pipeline",
        description:
          "Multi-source analysis of U.S. tech hiring trends across roles, skills, salaries, and geography, with an interactive dashboard direction.",
        visualLabel: "Dashboard preview",
        linkLabel: "Open GitHub repo",
        linkUrl: "https://github.com/Barderus/job-market-dashboard",
      },
      {
        title: "Pokemon Analysis",
        meta: "Classification | feature engineering",
        description:
          "A playful but serious modeling project on what separates legendary Pokemon from the rest using stats, metadata, and leakage-safe pipelines.",
        visualLabel: "Analysis preview",
        linkLabel: "Open GitHub repo",
        linkUrl: "https://github.com/Barderus/pokemon-analysis",
      },
      {
        title: "TrustNet",
        meta: "NLP | misinformation detection",
        description:
          "An explainable fake-news analysis tool that scores trustworthiness and surfaces why the model flagged the text the way it did.",
        visualLabel: "Interface preview",
        linkLabel: "Open GitHub repo",
        linkUrl: "https://github.com/Barderus/TrustNet",
      },
      {
        title: "UFO Data Analysis",
        meta: "EDA | geospatial analysis | NLP",
        description:
          "Large-scale UFO sighting analysis using temporal trends, mapping, and text analysis to turn an unusual dataset into interpretable patterns.",
        visualLabel: "Map or chart preview",
        linkLabel: "Open GitHub repo",
        linkUrl: "https://github.com/Barderus/UFO-Data-Analysis",
      },
    ],
  },
  research: {
    title: "Research",
    eyebrow: "Data-driven inquiry",
    intro:
      "Two research tracks anchor the portfolio: economic forecasting and aviation systems. The summaries stay brief on purpose and point visitors to the GitHub repos for the full methodology and code.",
    cards: [
      {
        title: "Recession Prediction",
        meta: "Macroeconomics | forecasting | machine learning",
        description:
          "A recession forecasting project built around economic policy uncertainty, macroeconomic indicators, and interpretable machine learning models.",
        visualLabel: "Forecasting preview",
        linkLabel: "Open GitHub repo",
        linkUrl: "https://github.com/Barderus/Recession_Prediction",
      },
      {
        title: "eVTOL Air Route",
        meta: "Aviation research | routing | geospatial analysis",
        description:
          "Low-altitude route analysis around Chicago using population density, airspace constraints, flight-density costs, and A* pathfinding.",
        visualLabel: "Route map preview",
        linkLabel: "Open GitHub repo",
        linkUrl: "https://github.com/Barderus/eVTOL_Air_Route",
      },
    ],
  },
  teaching: {
    title: "Teaching",
    eyebrow: "Instruction and mentorship",
    intro:
      "My teaching experience centers on practical student support: grading, office hours, technical guidance, and assignment design that helps students apply concepts rather than just memorize them.",
    cards: [
      {
        title: "CIS 1230 | Database Application",
        meta: "TA support | databases | student guidance",
        description:
          "Supported a relational database management course covering database design, creation, maintenance, forms, reports, queries, macros, and application development. Responsibilities included grading assignments, holding office hours, and answering student questions.",
      },
      {
        title: "CIS 2571 | Introduction to Java",
        meta: "TA support | Java | project-based learning",
        description:
          "Supported an introductory Java course covering encapsulation, class design, objects, polymorphism, and GUI components. In addition to grading, office hours, and student support, I created project-based assignments to help students learn through implementation.",
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
        visualLabel: "Workshop photo preview",
      },
      {
        title: "Humble Data Workshop | Lewis University",
        meta: "Saturday, November 22, 2025 | cross-campus workshop",
        description:
          "Ran the same Humble Data workshop at Lewis University, adapting the session for a different audience while keeping the emphasis on approachable data practice.",
        visualLabel: "Workshop photo preview",
      },
      {
        title: "Orange Data Mining Workshop",
        meta: "Tuesday, April 14, 2026 | visual analytics workshop",
        description:
          "Introduced participants to Orange Data Mining through a guided workshop centered on visual workflows, data exploration, and approachable machine learning concepts.",
        visualLabel: "Workshop photo preview",
      },
      {
        title: "Humble Data Workshop | College of DuPage | Spring 2026",
        meta: "Saturday, April 25, 2026 | repeat workshop",
        description:
          "Ran the Humble Data workshop again in Spring 2026, reinforcing core data literacy concepts through another live, hands-on session.",
        visualLabel: "Workshop photo preview",
      },
    ],
  },
  certifications: {
    title: "Certifications",
    eyebrow: "Formal upskilling",
    intro:
      "I keep certifications selective and relevant. Right now, the focus is a single credential that directly supports the data analytics side of my portfolio.",
    cards: [
      {
        title: "Google Data Analytics Certificate",
        meta: "Google Career Certificates | data analytics",
        description:
          "Completed Google's eight-course data analytics program covering data cleaning, analysis, visualization, spreadsheets, SQL, R, and data-driven communication.",
        linkLabel: "View credential",
        linkUrl:
          "https://www.credly.com/badges/87f1e441-a64b-4e6d-befc-7a3661d4bba1/linked_in_profile",
      },
    ],
  },
  leadership: {
    title: "Leadership",
    eyebrow: "Community and coordination",
    intro:
      "Leadership here is focused on one role that mattered most: helping support and guide the CS Club through advising, coordination, and student-facing technical community work.",
    cards: [
      {
        title: "CS Club Co-Advisor",
        meta: "Student leadership | advising | community support",
        description:
          "Served as Co-Advisor for the CS Club, supporting programming, coordination, and continuity for student-led technical events and activities.",
        gallery: [
          "CS Club photo 1",
          "CS Club photo 2",
          "CS Club photo 3",
          "CS Club photo 4",
          "CS Club photo 5",
        ],
      },
    ],
  },
  blog: {
    title: "Blog",
    eyebrow: "Writing and reflection",
    intro:
      "My blog extends the portfolio into longer-form writing. It is where I reflect on projects, research, student life, and what I am learning through data-focused work.",
    cards: [
      {
        title: "Learning with Data",
        meta: "gabriel-dos-reis.com | blog and reflections",
        description:
          "A personal blog built around the idea of turning data into knowledge, one step at a time, with posts on projects, research, machine learning, and academic growth.",
        linkLabel: "Visit blog",
        linkUrl: "https://gabriel-dos-reis.com/",
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
        linkLabel: "View event page",
        linkUrl:
          "https://www.cod.edu/calendar/event-details/2747de96-3839-41b9-a7a3-fcc2a81070b7/instances/2026-05-02",
      },
      {
        title: "Data Analytics Career Panel Moderator",
        meta: "College of DuPage | Wednesday, April 29, 2026",
        description:
          "Moderated a data analytics career panel, helping guide discussion around pathways, professional development, and opportunities in analytics-related fields.",
        linkLabel: "View event page",
        linkUrl: "https://www.cod.edu/calendar/event-details/f685cfee-0fb1-4f98-81c1-28add61ad9dd",
      },
      {
        title: "DuPage Wildlife Conservation Center Volunteer",
        meta: "Community volunteering",
        description:
          "Volunteer experience that reflects service, consistency, and involvement outside of academic and technical work.",
      },
    ],
  },
};
