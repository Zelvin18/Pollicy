export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Events", href: "/events" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 3306, label: "Women Surveyed", suffix: "+" },
  { value: 15, label: "Countries Reached", suffix: "+" },
  { value: 8, label: "Years of Impact", suffix: "" },
  { value: 50, label: "Projects Completed", suffix: "+" },
];

export const workPillars = [
  {
    number: "01",
    title: "Movement Building",
    description:
      "We engage with individuals and organisations to catalyze movements for social change, building coalitions that amplify African voices in the digital space.",
    icon: "🌍",
    color: "from-orange-500 to-orange-400",
  },
  {
    number: "02",
    title: "Connect With People",
    description:
      "We work with people on their terms, meeting their needs where they are — from grassroots communities to government institutions across Africa.",
    icon: "🤝",
    color: "from-amber-500 to-orange-400",
  },
  {
    number: "03",
    title: "Ask Difficult Questions",
    description:
      "We ask the difficult questions around what our future looks like and challenge the status quo of data use, technology governance, and digital rights.",
    icon: "💡",
    color: "from-orange-600 to-amber-500",
  },
  {
    number: "04",
    title: "Work With Marginalised Groups",
    description:
      "We ensure that all people can equitably benefit from improved data sharing — centering women, LGBTQ+ communities, persons with disabilities, and other marginalised groups.",
    icon: "✊",
    color: "from-red-500 to-orange-500",
  },
];

export const featuredProjects = [
  {
    id: "alternate-realities",
    number: "01",
    title: "Alternate Realities, Alternate Internets",
    category: "Data Rights & Safety",
    description:
      "Feminist Research for a Feminist Internet — a landmark study of 3,306 women across Ethiopia, Kenya, Uganda, Senegal, and South Africa exploring online lived experiences.",
    metrics: [
      { value: "3,306", label: "Women Surveyed" },
      { value: "5", label: "Countries" },
      { value: "28%", label: "Experienced OGBV" },
    ],
    tags: ["#Research", "#OGBV", "#OnlineViolence", "#FeministInternet"],
    href: "/projects/alternate-realities",
    image: "https://pollicy.org/wp-content/uploads/2021/08/top_1.jpg",
  },
  {
    id: "datafest-africa",
    number: "02",
    title: "DataFest Africa",
    category: "Events & Community",
    description:
      "Africa's premier annual data festival celebrating data science and its impact on the continent. Bringing together 250+ stakeholders from government, civil society, academia, and industry.",
    metrics: [
      { value: "250+", label: "Attendees" },
      { value: "7", label: "Editions" },
      { value: "2", label: "Cities (2025)" },
    ],
    tags: ["#DataScience", "#Community", "#Africa", "#AnnualEvent"],
    href: "/events/datafest",
    image: "https://pollicy.org/wp-content/uploads/2021/08/First-Data-Fest-1-1.jpg",
    color: "bg-brand-dark",
  },
  {
    id: "digital-safetea",
    number: "03",
    title: "Digital SafeTea",
    category: "Digital Rights",
    description:
      "An interactive fiction game championing online safety for African women. Players navigate scenarios with characters Goitse, Aisha, and Dami to learn about digital safety.",
    metrics: [
      { value: "3", label: "Characters" },
      { value: "∞", label: "Scenarios" },
      { value: "🎮", label: "Interactive" },
    ],
    tags: ["#DigitalSafety", "#InteractiveFiction", "#WomenOnline"],
    href: "/projects/digital-safetea",
    image: "/images/digital-safetea.jpg",
    color: "bg-amber-600",
  },
  {
    id: "vote-women",
    number: "04",
    title: "VOTE: Women",
    category: "Women in Politics",
    description:
      "A leadership springboard for women political aspirants and incumbents. Using digital tools to support women's civic leadership across Tanzania, Uganda, and Senegal.",
    metrics: [
      { value: "3", label: "Countries" },
      { value: "100+", label: "Women Supported" },
      { value: "🗳️", label: "Democracy" },
    ],
    tags: ["#WomenLeadership", "#Politics", "#Democracy"],
    href: "/projects/vote-women",
    image: "/images/vote-women.jpg",
    color: "bg-rose-600",
  },
  {
    id: "choose-fake-news",
    number: "05",
    title: "Choose Your Own Fake News",
    category: "Media Literacy",
    description:
      "Mozilla Creative Media Award-winning web game showing how misinformation spreads. Players explore scenarios revealing real-life consequences of fake news.",
    metrics: [
      { value: "🏆", label: "Mozilla Award" },
      { value: "CNN", label: "Featured" },
      { value: "🌐", label: "Web Game" },
    ],
    tags: ["#Misinformation", "#MediaLiteracy", "#Mozilla"],
    href: "/projects/choose-fake-news",
    image: "/images/fake-news.jpg",
    color: "bg-purple-600",
  },
  {
    id: "are-we-together",
    number: "06",
    title: "Are We Together?",
    category: "Language & Inclusion",
    description:
      "Research on the impact of language on digital platform usability, accessibility, and moderation in East Africa (Ethiopia, Tanzania, Uganda) and India.",
    metrics: [
      { value: "4", label: "Countries" },
      { value: "🌐", label: "Languages" },
      { value: "ISOC", label: "Funded" },
    ],
    tags: ["#Language", "#DigitalInclusion", "#NonDominantLanguages"],
    href: "/projects/are-we-together",
    image: "/images/are-we-together.jpg",
    color: "bg-teal-600",
  },
];

export const allProjects = [
  {
    id: "fairwork-uganda",
    title: "Fairwork Uganda Ratings 2023",
    category: "DATA GOVERNANCE",
    date: "AUG 2023",
    description: "A need for pro-worker change — research among twelve digital location-based platforms in Uganda.",
    href: "/projects/fairwork-uganda",
  },
  {
    id: "byte-bullies",
    title: "Byte Bullies",
    category: "DATA RIGHTS AND SAFETY",
    date: "MAY 2023",
    description: "The malignant influence of social media as a ubiquitous and powerful medium of communication.",
    href: "/projects/byte-bullies",
  },
  {
    id: "data-ladies",
    title: "Data Ladies",
    category: "DATA TRAININGS",
    date: "APR 2023",
    description: "A community engagement initiative focused on upskilling women in data and AI.",
    href: "/projects/data-ladies",
  },
  {
    id: "digital-justice",
    title: "Behind the Work of Digital Justice",
    category: "DATA RIGHTS AND SAFETY",
    date: "MAR 2023",
    description: "Perspectives from digital rights and security practitioners across Africa.",
    href: "/projects/digital-rights-lab",
  },
  {
    id: "are-we-together",
    title: "Are We Together",
    category: "DATA RIGHTS AND SAFETY",
    date: "JAN 2023",
    description: "A user-first internet for those who do not speak dominant languages.",
    href: "/projects/are-we-together",
  },
  {
    id: "digital-rights-lab",
    title: "Digital Rights Lab",
    category: "DATA RIGHTS AND SAFETY",
    date: "JUL 2022",
    description: "A creative virtual space for learning, exchanging ideas, and commemorating digital rights.",
    href: "/projects/digital-rights-lab",
  },
  {
    id: "invisible",
    title: "(In)Visible",
    category: "DATA RIGHTS AND SAFETY",
    date: "MAY 2022",
    description: "Digital threats Muslim Women Human Rights Defenders face online.",
    href: "/projects/invisible",
  },
  {
    id: "vote-women",
    title: "VOTE: Women",
    category: "DATA PRODUCTS",
    date: "AUG 2021",
    description: "Building data skills among women politicians. More women voting, running and leading.",
    href: "/projects/vote-women",
  },
  {
    id: "digital-safetea",
    title: "Digital SafeTea",
    category: "DATA RIGHTS AND SAFETY",
    date: "SEP 2021",
    description: "An interactive fiction game championing online safety for African women.",
    href: "/projects/digital-safetea",
  },
  {
    id: "automated-imperialism",
    title: "Automated Imperialism, Expansionist Dreams",
    category: "DATA GOVERNANCE",
    date: "OCT 2021",
    description: "Identifying key methods of digital extractivism in Africa.",
    href: "/projects/automated-imperialism",
  },
  {
    id: "afro-feminist-data",
    title: "Afro Feminist Data Futures",
    category: "DATA GOVERNANCE",
    date: "AUG 2021",
    description: "Exploring the use of data by feminist movements in Africa.",
    href: "/projects/afro-feminist-data",
  },
  {
    id: "alternate-realities",
    title: "Alternate Realities, Alternate Internets",
    category: "DATA RIGHTS AND SAFETY",
    date: "AUG 2021",
    description: "Feminist research for a feminist internet across 5 African countries.",
    href: "/projects/alternate-realities",
  },
];

export const blogPosts = [
  {
    id: 1,
    number: "01",
    date: "FEB 2026",
    category: "FELLOWSHIP",
    title: "Meet the 2025 Fellows",
    excerpt: "At Pollicy, we believe in the power of data and technology to advance social justice, strengthen communities, and build a more equitable Africa.",
    href: "https://pollicy.medium.com/meet-the-2025-fellows-79aeff3ebfdb",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-b-05.png",
    external: true,
  },
  {
    id: 2,
    number: "02",
    date: "FEB 2026",
    category: "DATA GOVERNANCE",
    title: "Lessons of Resilience from Data Mtaani: Workers Navigating Risk and Opportunity in Digital Spaces",
    excerpt: "On a Saturday morning in Nairobi, Kenya, a domestic worker is scrolling through her WhatsApp messages and pauses at a string of alerts in her community group.",
    href: "https://pollicy.medium.com/lessons-of-resilience-from-data-mtaani-workers-navigating-risk-and-opportunity-online-9c2f41f44da3",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-08-1506x1536.png",
    external: true,
  },
  {
    id: 3,
    number: "03",
    date: "JAN 2026",
    category: "DATA GOVERNANCE",
    title: "Africa Owns the Data: Reclaiming Narratives, Redefining Power",
    excerpt: "At DataFest Africa 2025, I had the privilege of leading a session titled 'Africa Owns the Data' — exploring how communities can reclaim their digital narratives.",
    href: "https://pollicy.medium.com/africa-owns-the-data-reclaiming-narratives-redefining-power-b6561223c794",
    image: "https://pollicy.org/wp-content/uploads/2021/08/First-Data-Fest-1-1.jpg",
    external: true,
  },
  {
    id: 4,
    number: "04",
    date: "DEC 2025",
    category: "DATA ARTISTRY",
    title: "REDATA: Bringing TFGBV Data to Life Through Motion in the Afrofeminist Data Museum",
    excerpt: "Stepping into REDATA felt like crossing into an Afrofeminist future where data is no longer distant — it breathes, moves, and speaks.",
    href: "https://pollicy.medium.com/redata-bringing-tfgbv-data-to-life-through-motion-in-the-afrofeminist-data-museum-6e5eba5cf94f",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-b-08.png",
    external: true,
  },
  {
    id: 5,
    number: "05",
    date: "SEP 2025",
    category: "AI & TECHNOLOGY",
    title: "Beyond the Global AI Summit on Africa: Making AI Work for All of Us",
    excerpt: "In April this year, Kigali hosted the inaugural Global AI Summit on Africa, bringing together over 1,000 participants to discuss the continent's AI future.",
    href: "https://pollicy.medium.com/beyond-the-global-ai-summit-on-africa-making-ai-work-for-all-of-us-6b36c70f329c",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-07-1323x1536.png",
    external: true,
  },
  {
    id: 6,
    number: "06",
    date: "APR 2025",
    category: "DATA GOVERNANCE",
    title: "Lessons from West Africa Towards Robust Data Governance Structures",
    excerpt: "International Day of Data Privacy is a global campaign aimed at raising awareness and promoting best practices in data protection.",
    href: "https://pollicy.medium.com/lessons-from-west-africa-towards-robust-data-governance-structures-c881b010a75e",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-02-1536x1137.png",
    external: true,
  },
];

export const partners = [
  { name: "Hivos", href: "https://hivos.org/", logo: "/logos/hivos.png" },
  { name: "Mozilla Foundation", href: "https://foundation.mozilla.org/", logo: "/logos/mozilla.png" },
  { name: "Hewlett Foundation", href: "https://hewlett.org/", logo: "/logos/hewlett.png" },
  { name: "Internet Society Foundation", href: "https://isocfoundation.org/", logo: "/logos/isoc.png" },
  { name: "APC", href: "https://www.apc.org/", logo: "/logos/apc.png" },
  { name: "NED", href: "https://www.ned.org/", logo: "/logos/ned.png" },
  { name: "GIZ", href: "https://www.giz.de/", logo: "/logos/giz.png" },
  { name: "NDI", href: "https://www.ndi.org/", logo: "/logos/ndi.png" },
  { name: "Aga Khan University", href: "https://www.aku.edu/", logo: "/logos/aku.png" },
  { name: "Defend Defenders", href: "https://defenddefenders.org/", logo: "/logos/defend.png" },
  { name: "Voice Global", href: "https://voice.global/", logo: "/logos/voice.png" },
  { name: "Code for Science", href: "https://codeforscience.org/", logo: "/logos/cfs.png" },
];

export const teamMembers = [
  {
    name: "Irene Mwendwa",
    role: "Executive Director",
    bio: "A legal professional with a strong track record in fostering innovative collaborations and spearheading projects that advance policy and legal frameworks, particularly in digital inclusion, elections, and technology.",
    image: "/team/irene.jpg",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Neema Iyer",
    role: "Founder",
    bio: "Artist and technologist. Founder of Pollicy and co-host of the Terms and Conditions podcast. Fellow at Stanford PACS. Researcher on digital extractivism and feminist technology.",
    image: "/team/neema.jpg",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
];

export const events = [
  {
    id: "datafest-2025",
    title: "DataFest Africa 2025",
    theme: "Reclaiming Our Data Futures",
    date: "2025",
    location: "Nairobi, Kenya & Kampala, Uganda",
    description: "A two-city edition bringing together diverse voices from across the continent to reimagine how data can work for communities, not just institutions.",
    type: "Annual Conference",
    partners: ["Aga Khan University", "Pollicy Data Institute"],
    image: "/events/datafest-2025.jpg",
    href: "/events/datafest-2025",
  },
  {
    id: "datafest-2024",
    title: "DataFest Africa 2024",
    theme: "Data Governance",
    date: "2024",
    location: "Nairobi, Kenya",
    description: "250+ stakeholders from government, civil society, donors, academia, and private sector explored the future of data governance in Africa.",
    type: "Annual Conference",
    partners: ["Aga Khan University", "University of Michigan"],
    image: "/events/datafest-2024.jpg",
    href: "/events/datafest-2024",
  },
  {
    id: "data-governance-dialogues",
    title: "Data Governance Dialogues",
    theme: "Safeguarding Data in the Digital Age",
    date: "2025 — Ongoing",
    location: "Virtual",
    description: "A series of multi-stakeholder webinars addressing compliance and ethical challenges in data governance across Africa.",
    type: "Webinar Series",
    partners: ["Niyel"],
    image: "/events/dialogues.jpg",
    href: "/events/data-governance-dialogues",
  },
];

export const whyDataReasons = [
  {
    title: "Lag",
    description: "Despite significant advances in the use of data globally, many countries across Africa are still lagging behind in harnessing data for social good.",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-08-1506x1536.png",
  },
  {
    title: "Domination",
    description: "Many large and foreign technology companies have been able to dominate African markets through sophisticated technology and by taking advantage of weak regulatory environments.",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-07-1323x1536.png",
  },
  {
    title: "Empower",
    description: "Data has the ability to empower activists, civil society, private sector and governments to make better decisions and to promote social justice.",
    image: "https://pollicy.org/wp-content/uploads/2021/09/collage-b-08.png",
  },
];

export const socialLinks = [
  { name: "Medium", href: "https://pollicy.medium.com/", icon: "M" },
  { name: "Facebook", href: "https://www.facebook.com/pollicy/", icon: "F" },
  { name: "Twitter", href: "https://twitter.com/PollicyOrg", icon: "T" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/pollicy/", icon: "L" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCOdn9u9dFEnOIUDL10SESnQ", icon: "Y" },
];

export const projectCategories = [
  "ALL",
  "DATA ARTISTRY",
  "DATA PRODUCTS",
  "DATA TRAININGS",
  "DATA GOVERNANCE",
  "DATA RIGHTS AND SAFETY",
];

export const blogCategories = [
  "ALL",
  "DATA TRAININGS",
  "JOBS & OTHER OPPORTUNITIES",
  "DATA GOVERNANCE",
  "DATA RIGHTS AND SAFETY",
];
