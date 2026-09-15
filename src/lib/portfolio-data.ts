export type Project = {
  id: string;
  title: string;
  category: "Product" | "Platform" | "Community" | "Digital";
  description: string;
  outcome: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Karbaar",
    category: "Product",
    description: "An online-to-offline product discovery concept that helps buyers find products at nearby physical stores while giving verified sellers a digital storefront.",
    outcome: "Built from business model to working product prototype with buyer, seller, and administrator journeys.",
    tags: ["Marketplace", "Business Model", "Product Strategy"],
    link: "https://karbaar.app",
    linkLabel: "Visit Karbaar",
    accent: "from-[#fde68a] to-[#f59e0b]",
  },
  {
    id: "02",
    title: "Internship Intelligence Portal",
    category: "Platform",
    description: "A student-focused opportunity portal organizing verified internships across technology, design, marketing, and business disciplines.",
    outcome: "Structured a growing directory of 350+ Pakistan-based and international internship opportunities.",
    tags: ["Student Access", "Research", "Data Curation"],
    accent: "from-[#c7d2fe] to-[#6366f1]",
  },
  {
    id: "03",
    title: "LUB Digital Presence",
    category: "Community",
    description: "A professional digital presence for Let's Uplift Balochistan, designed to communicate its mission, partnerships, programs, and youth impact.",
    outcome: "Turned organizational activities into a clearer public story and more credible online identity.",
    tags: ["Community", "Content Strategy", "Web Presence"],
    link: "https://lubm.vercel.app",
    linkLabel: "View website",
    accent: "from-[#a7f3d0] to-[#10b981]",
  },
  {
    id: "04",
    title: "AI Prompting Masterclass",
    category: "Digital",
    description: "A practical digital learning product created for freelancers, marketers, and entrepreneurs who want to use AI more effectively.",
    outcome: "Packaged structured guidance with 100+ ready-to-use prompts for real business workflows.",
    tags: ["Digital Product", "AI", "Marketing"],
    accent: "from-[#fecdd3] to-[#f43f5e]",
  },
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  intro: string;
  sections: Array<{ heading: string; paragraphs: string[]; points?: string[] }>;
};

export const articles: Article[] = [
  {
    slug: "financial-markets-beginner-guide",
    category: "Finance",
    title: "Financial markets, explained without the noise",
    excerpt: "A practical introduction to how capital moves, why markets exist, and what a new learner should understand first.",
    date: "September 8, 2026",
    readTime: "6 min read",
    intro: "Financial markets can look complicated because they contain thousands of instruments and participants. Underneath that complexity is a simple purpose: connecting people who have capital with people and organizations that can use it.",
    sections: [
      { heading: "Start with the purpose", paragraphs: ["Companies use markets to raise money, governments use them to finance public activity, and investors use them to preserve or grow capital. Prices constantly adjust as these groups respond to information and risk."] },
      { heading: "Know the main market types", paragraphs: ["Stocks represent ownership, bonds represent lending, commodities represent physical resources, and foreign exchange represents the relative value of currencies."], points: ["Equity markets", "Bond and debt markets", "Commodity markets", "Foreign-exchange markets"] },
      { heading: "Risk comes before return", paragraphs: ["A strong process starts by deciding how much loss you can tolerate. Diversification, position sizing, and a long-term perspective matter more than chasing an exciting prediction."] },
    ],
  },
  {
    slug: "marketing-myopia",
    category: "Marketing",
    title: "Marketing myopia: when a business sees the product, not the customer",
    excerpt: "Why successful companies can still lose relevance—and how customer-centered thinking keeps a brand useful.",
    date: "September 12, 2026",
    readTime: "5 min read",
    intro: "Marketing myopia happens when a company defines itself by what it sells instead of the customer need it solves. The product becomes the focus, while changing behavior and new alternatives are ignored.",
    sections: [
      { heading: "The narrow view", paragraphs: ["A transport company is not only in the bus business; it is in the mobility business. This wider view encourages it to notice ride-hailing, delivery, and digital booking before competitors do."] },
      { heading: "Warning signs", paragraphs: ["The problem often appears slowly. Sales may still look healthy while customer expectations move elsewhere."], points: ["Product features dominate every discussion", "Customer feedback is treated as a complaint", "Success is measured only by short-term sales", "New substitutes are dismissed"] },
      { heading: "A better question", paragraphs: ["Instead of asking how to sell more of the existing product, ask what progress the customer is trying to make. That question creates room for better services, clearer positioning, and innovation."] },
    ],
  },
  {
    slug: "from-idea-to-business-model",
    category: "Entrepreneurship",
    title: "From idea to business model: the questions that sharpen a startup",
    excerpt: "A simple framework for testing whether a promising idea can become a useful, sustainable business.",
    date: "September 14, 2026",
    readTime: "7 min read",
    intro: "A good idea is a starting point, not a business. Turning it into a model requires clear answers about the customer, the problem, delivery, costs, and the reason someone would choose your solution.",
    sections: [
      { heading: "Define the problem precisely", paragraphs: ["Describe who experiences the problem, when it happens, and what they currently do about it. A specific problem is easier to test than a broad ambition."] },
      { heading: "Map how value moves", paragraphs: ["A business model should explain both sides of the exchange: how customers receive value and how the organization receives enough revenue or support to continue operating."], points: ["Customer segments", "Value proposition", "Channels and relationships", "Revenue and cost structure"] },
      { heading: "Test the riskiest assumption", paragraphs: ["Do not build everything first. Identify the belief that would make the idea fail if it were wrong, then design the smallest credible experiment to test it."] },
    ],
  },
];
