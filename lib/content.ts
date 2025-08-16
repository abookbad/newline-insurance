export const servicesContent = {
  heading: "Coverage built around your life",
  subheading: "Clear options, straight answers, and guidance when you want it.",
  items: [
    {
      id: "term",
      icon: "Shield",
      title: "Protect Income — Term Life Insurance",
      lead: "Affordable coverage designed to protect your family during the years they need it most.",
      bullets: [
        "Level premiums for 10, 20, or 30 years",
        "High coverage amounts at budget‑friendly rates",
        "Great for income replacement, mortgage, and young families",
      ],
      ctaEstimateLabel: "Estimate my rate",
      ctaCallLabel: "Talk to an agent",
    },
    {
      id: "whole",
      icon: "PiggyBank",
      title: "Build Long‑Term Value — Whole Life Insurance",
      lead: "Lifetime protection with guaranteed premiums and cash value you can access.",
      bullets: [
        "Coverage that never expires if premiums are paid",
        "Fixed premiums and guaranteed cash value growth",
        "Optional riders to tailor protection over time",
      ],
      ctaEstimateLabel: "Estimate my rate",
      ctaCallLabel: "Talk to an agent",
    },
    {
      id: "final-expense",
      icon: "Feather",
      title: "Cover Final Costs — Final Expense Insurance",
      lead: "Smaller, simplified policies to help loved ones handle funeral and last expenses.",
      bullets: [
        "Simplified underwriting for faster decisions",
        "Modest coverage amounts fit for end‑of‑life needs",
        "Helps protect savings and family from sudden costs",
      ],
      ctaEstimateLabel: "Estimate my rate",
      ctaCallLabel: "Talk to an agent",
    },
    {
      id: "annuities",
      icon: "PieChart",
      title: "Plan Retirement Income — Fixed & Indexed Annuities",
      lead: "Turn savings into predictable income or grow tax‑deferred with downside protection.",
      bullets: [
        "Guaranteed income options for retirement planning",
        "Tax‑deferred growth; market‑linked choices with floors",
        "Customizable payout start dates and durations",
      ],
      ctaEstimateLabel: "Discuss options",
      ctaCallLabel: "Talk to an agent",
    },
    {
      id: "business",
      icon: "BriefcaseBusiness",
      title: "Protect Your Business — Key Person & Buy‑Sell",
      lead: "Policies that safeguard operations and ownership transitions.",
      bullets: [
        "Key person coverage to offset lost revenue",
        "Fund buy‑sell agreements with certainty",
        "Flexible structures for partners and lenders",
      ],
      ctaEstimateLabel: "Get a quick outline",
      ctaCallLabel: "Talk to an agent",
    },
  ],
  extras: {
    heading: "Riders & Add‑Ons",
    items: [
      { title: "Accelerated Benefit", detail: "Access a portion of the death benefit with qualifying illness." },
      { title: "Waiver of Premium", detail: "Premiums waived if you become disabled (eligibility applies)." },
      { title: "Child Rider", detail: "Add low‑cost protection for children under one policy." },
    ],
  },
  disclaimer: "Estimates are educational; final rates vary by underwriting.",
};

export type ServicesContent = typeof servicesContent;

export type ServiceTab = {
  id: string;
  label: string;
  title: string;
  subheading: string;
  image?: {
    src: string;
    alt: string;
    focal?: "center" | "left" | "right";
  };
  highlights?: string[];
  subservices?: { icon: string; heading: string; text: string }[];
  faqs?: { q: string; a: string }[];
  legalNote?: string;
};

export const servicesTabs: ServiceTab[] = [
  {
    id: "insurance",
    label: "Insurance Planning",
    title: "Insurance Planning",
    subheading: "Protect your life, assets, and income with tailored coverage.",
    image: {
      src: "/services/insurance-planning.jpeg",
      alt: "Family reviewing insurance plan at a kitchen table",
      focal: "right",
    },
    highlights: [
      "Term • Whole • IUL",
      "Living Benefits options",
      "Long‑Term Care strategies",
    ],
    subservices: [
      { icon: "Shield", heading: "Term Life (incl. ROP)", text: "Straightforward, affordable protection for 10/20/30 years—with an option to return premiums." },
      { icon: "PiggyBank", heading: "Whole Life", text: "Lifetime coverage with guaranteed premiums and cash value accumulation." },
      { icon: "Activity", heading: "Indexed UL (with Living Benefits)", text: "Flexible premiums, market‑linked crediting, and access to benefits for qualifying illnesses." },
      { icon: "HeartPulse", heading: "Long‑Term Care & Final Expense", text: "Plan for extended care needs and help loved ones cover end‑of‑life costs." },
    ],
    faqs: [
      { q: "How much coverage do I need?", a: "The right coverage depends on your income, debt, family needs, and long-term goals. A common guideline is 10–15 times your annual income, but we’ll tailor it to your exact financial situation and future plans." },
      { q: "What are living benefits?", a: "Living benefits allow you to access part of your life insurance policy’s death benefit while you’re still alive, in cases of serious illness or disability. This provides funds when you need them most—without taking on new debt." },
    ],
    legalNote: "Product availability and features vary by state and carrier.",
  },
  {
    id: "retirement",
    label: "Retirement & Investment",
    title: "Retirement & Investment",
    subheading: "Plan for dependable income and sustainable growth.",
    image: { src: "/services/retirement-investment.jpeg", alt: "Couple reviewing retirement plan", focal: "right" },
    highlights: ["Rollovers", "Annuity Income", "Risk‑Aligned Growth"],
    subservices: [
      { icon: "PieChart", heading: "Retirement Income Planning", text: "Map predictable income with annuities and structured withdrawals to cover essentials." },
      { icon: "Activity", heading: "Diversified Portfolios", text: "Align accounts to your goals and time horizon using risk‑aware, tax‑smart allocations." },
      { icon: "Shield", heading: "Risk Management", text: "Add protection and buffers so market swings don’t derail your plan." },
    ],
    faqs: [
      { q: "Can I roll over my 401(k)?", a: "Yes. Most 401(k) plans allow rollovers into IRAs or other retirement accounts. This can give you more investment flexibility and potentially lower fees, but the process must be done correctly to avoid taxes or penalties." },
      { q: "Are annuities right for me?", a: "Annuities can provide guaranteed income for life, making them useful for those seeking stability in retirement. Whether they’re right for you depends on your risk tolerance, income needs, and overall financial plan." },
    ],
  },
  {
    id: "estate",
    label: "Estate & Legacy",
    title: "Estate & Legacy",
    subheading: "Transfer wealth efficiently and leave a lasting legacy.",
    image: { src: "/services/estate-legacy.jpeg", alt: "Attorney reviewing estate documents with clients", focal: "center" },
    highlights: ["Trusts & Wills", "Family Bank", "Charitable Giving"],
    subservices: [
      { icon: "ScrollText", heading: "Trusts & Wills", text: "Coordinate documents with licensed professionals to direct wealth transfer and protect beneficiaries." },
      { icon: "Activity", heading: "Family Bank Frameworks", text: "Use structured strategies to fund goals, teach stewardship, and support future generations." },
      { icon: "PieChart", heading: "Charitable Giving", text: "Align giving with your values using tax‑aware strategies that support causes you care about." },
    ],
    faqs: [
      { q: "Do I need a trust or a will?", a: "A will outlines how your assets will be distributed, while a trust can help manage and protect those assets during your lifetime and after. Many families use both to ensure a smooth transfer of wealth and minimize legal challenges." },
      { q: "Can I update beneficiaries later?", a: "Yes. You can update your beneficiaries at any time to reflect changes such as marriage, divorce, or the birth of a child. Regular reviews ensure your plan stays aligned with your wishes." },
    ],
  },
  {
    id: "business",
    label: "Business Owner Planning",
    title: "Business Owner Planning",
    subheading: "Protect, optimize, and grow your business.",
    image: { src: "/services/business-owner.jpeg", alt: "Small business partners meeting", focal: "right" },
    highlights: ["Key Person", "Buy‑Sell", "Benefits & DB/CB Plans"],
    subservices: [
      { icon: "BriefcaseBusiness", heading: "Buy‑Sell Agreements", text: "Fund ownership transitions with certainty and protect both parties." },
      { icon: "Shield", heading: "Key Person Insurance", text: "Offset lost revenue and stabilize operations if a crucial leader is out." },
      { icon: "ScrollText", heading: "Succession Planning", text: "Create a clear path for leadership and ownership over time." },
    ],
    faqs: [
      { q: "Can lenders require coverage?", a: "Yes. Many lenders require life or key person insurance to secure business loans, ensuring the debt can be repaid if something happens to the owner or a critical team member." },
      { q: "How often should we review?", a: "We recommend reviewing your business protection strategies annually or whenever there’s a major change in ownership, revenue, or leadership." },
    ],
  },
];

export type ServicesTab = ServiceTab;

// Why Choose Newline content
export type LucideIconName =
  | "HeartPulse"
  | "MessageSquare"
  | "BadgeInfo"
  | "Users"
  | "PieChart"
  | "ShieldCheck";

export interface WhyChooseItem {
  id: string;
  icon: LucideIconName;
  title: string;
  blurb: string;
  details: string[];
}

export const whyChoose: WhyChooseItem[] = [
  {
    id: "coverage-adapts",
    icon: "Users",
    title: "Coverage built around you",
    blurb: "Plans fit your life and budget today, with room to adjust tomorrow.",
    details: [
      "Term, whole, indexed options",
      "Right‑sized coverage for your budget",
      "Easy adjustments as needs change",
    ],
  },
  {
    id: "straight-answers",
    icon: "BadgeInfo",
    title: "Straight answers, no runaround",
    blurb: "Clear guidance and plain English so you can choose with confidence.",
    details: [
      "Transparent pricing and trade‑offs",
      "What affects your rate",
      "No pressure — ever",
    ],
  },
  {
    id: "heavy-lifting",
    icon: "ShieldCheck",
    title: "We handle the heavy lifting",
    blurb: "We compare carriers, handle paperwork, and help you lock in coverage.",
    details: [
      "We shop multiple carriers",
      "Application and follow‑through",
      "Rate negotiations where possible",
    ],
  },
  {
    id: "goals-blueprint",
    icon: "PieChart",
    title: "Your goals, our blueprint",
    blurb: "Protection and planning aligned to your family and financial milestones.",
    details: [
      "Income, legacy, and tax awareness",
      "Beneficiary strategies",
      "Plan built around your timeline",
    ],
  },
  {
    id: "always-on-your-side",
    icon: "MessageSquare",
    title: "Always on your side",
    blurb: "Independent advice focused only on what’s right for you.",
    details: [
      "Independent access to carriers",
      "Options, not sales pressure",
      "You make the call",
    ],
  },
  {
    id: "here-when-life-changes",
    icon: "HeartPulse",
    title: "Here when life changes",
    blurb: "Check‑ins and updates to keep coverage in step with your life.",
    details: [
      "Annual reviews",
      "Life‑event updates",
      "Beneficiary and rider changes",
    ],
  },
];


// Testimonials content and types
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  location?: string;
};

export const content = {
  testimonials: [
    { id: 'mt-temecula', quote: 'Medicare review was easy. I finally felt confident choosing a plan.', author: 'M.T.', location: 'Temecula' },
    { id: 'jb-riverside', quote: 'They explained my options in plain English and found a better rate.', author: 'J.B.', location: 'Riverside' },
    { id: 'sg-menifee', quote: 'Quick, no pressure, and they handled the paperwork for me.', author: 'S.G.', location: 'Menifee' },
    { id: 'lc-murrieta', quote: 'We adjusted coverage after our baby arrived—simple and stress-free.', author: 'L.C.', location: 'Murrieta' },
    { id: 'ae-corona', quote: 'They shopped multiple carriers so I didn’t have to.', author: 'A.E.', location: 'Corona' },
  ] satisfies Testimonial[],
};

// Navbar content
export interface NavLinkItem {
  title: string;
  href?: string;
  children?: { title: string; href: string }[];
}

export const navLinks: NavLinkItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Insurance Solutions",
    children: [
      { title: "Life Insurance", href: "/products/life-insurance" },
      { title: "Medicare", href: "/products/medicare" },
      { title: "Final Expense", href: "/products/final-expense" },
      { title: "Disability Insurance", href: "/products/disability-insurance" },
      { title: "Long-Term Care", href: "/products/long-term-care" },
    ],
  },
  {
    title: "Planning Services",
    children: [
      { title: "Retirement Planning", href: "/services/retirement-planning" },
      { title: "Estate & Legacy Planning", href: "/services/estate-legacy-planning" },
      { title: "Tax Strategy & Optimization", href: "/services/tax-strategy" },
    ],
  },
  { title: "About Us", href: "/about" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact", href: "/contact" },
];

// Product/Service page content
export interface ServicePageContent {
  id: string;
  route: string;
  seoTitle: string;
  hero: {
    title: string;
    tagline: string;
    image: { src: string; alt: string };
  };
  overview: string[];
  benefits: { icon: string; title: string; text: string }[];
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

export const servicePages: ServicePageContent[] = [
  {
    id: "life-insurance",
    route: "/products/life-insurance",
    seoTitle: "Life Insurance Coverage | Newline Financial & Insurance Solutions",
    hero: {
      title: "Life Insurance",
      tagline: "Protect income, secure goals, and build a safety net your family can count on.",
      image: { src: "/services/insurance-planning.jpeg", alt: "Parents reviewing life insurance options at home" },
    },
    overview: [
      "Life insurance coverage replaces income and safeguards family goals if the unexpected happens.",
      "We help you compare term, whole life, and indexed options—explained in plain English—so you can choose what fits today and adapts for tomorrow.",
    ],
    benefits: [
      { icon: "Shield", title: "Income Protection", text: "Replace income for dependents and protect essentials like mortgage and tuition." },
      { icon: "PiggyBank", title: "Build Value", text: "Whole life can grow guaranteed cash value you can access when needed." },
      { icon: "Activity", title: "Flexible Options", text: "Term for affordability, permanent policies for lifetime needs, riders for customization." },
      { icon: "Users", title: "Beneficiary Clarity", text: "Set up beneficiaries and review regularly to keep your plan current." },
    ],
    steps: [
      { title: "1) Quick consult", text: "Share goals, budget, and timeline. We align the right policy type and amount." },
      { title: "2) Compare carriers", text: "We shop multiple carriers for solid value and underwriting fit." },
      { title: "3) Apply & review", text: "Paperwork handled; we guide you through underwriting and next steps." },
      { title: "4) Annual check‑in", text: "We review coverage as life changes so your plan stays on track." },
    ],
    faqs: [
      { q: "How much coverage do I need?", a: "A common guideline is 10–15× income, adjusted for debts, savings, and goals. We tailor a number to your situation." },
      { q: "Term vs. whole life—what's the difference?", a: "Term covers a set period at a lower cost; whole life offers lifetime protection with guaranteed cash value." },
      { q: "Are medical exams required?", a: "Some policies use simplified underwriting with no exam; others require labs for best pricing." },
      { q: "Can I add living benefits?", a: "Many policies include riders for chronic, critical, or terminal illness—eligibility applies." },
      { q: "Can coverage change later?", a: "Yes. You can adjust beneficiaries, amounts, and riders when life changes." },
    ],
  },
  {
    id: "medicare",
    route: "/products/medicare",
    seoTitle: "Medicare Review & Plan Selection | Newline Financial",
    hero: {
      title: "Medicare",
      tagline: "Compare plan types and enroll with confidence—no jargon, just clear guidance.",
      image: { src: "/services/retirement-investment.jpeg", alt: "Advisor reviewing Medicare options with client" },
    },
    overview: [
      "Your Medicare choices affect care, costs, and flexibility. We help you time enrollment, compare Medicare Advantage vs. Medigap + Part D, and review annually.",
    ],
    benefits: [
      { icon: "BadgeInfo", title: "Plain‑English guidance", text: "Understand deductibles, networks, and drug coverage." },
      { icon: "HeartPulse", title: "Annual reviews", text: "We re-check plans each year so coverage stays aligned to needs." },
      { icon: "ShieldCheck", title: "Avoid penalties", text: "Enrollment timing and creditable coverage checks to sidestep late fees." },
    ],
    steps: [
      { title: "1) Timeline check", text: "Confirm eligibility and ideal enrollment window." },
      { title: "2) Compare plans", text: "Review costs, networks, and prescriptions side by side." },
      { title: "3) Enroll", text: "Submit the application correctly and save confirmation." },
      { title: "4) Annual review", text: "Check changes and switch if a better fit appears." },
    ],
    faqs: [
      { q: "When do I enroll in Medicare?", a: "Most enroll around 65. Special rules apply if you have employer coverage. We’ll confirm the right timing." },
      { q: "Advantage vs. Medigap—how do I choose?", a: "We compare total costs, networks, and travel flexibility in plain English so the trade‑offs are clear." },
      { q: "Can I change plans later?", a: "Yes, typically during the Annual Election Period or special enrollment events." },
      { q: "What about prescriptions?", a: "We check your medications against plan formularies to estimate costs." },
      { q: "Do you charge for help?", a: "Consultations are no cost; we’re paid by carriers—your premiums aren’t higher." },
    ],
  },
  {
    id: "final-expense",
    route: "/products/final-expense",
    seoTitle: "Final Expense Insurance | Newline Financial",
    hero: {
      title: "Final Expense",
      tagline: "Affordable coverage to help loved ones handle funeral and last expenses.",
      image: { src: "/services/estate-legacy.jpeg", alt: "Family supporting each other" },
    },
    overview: [
      "Final expense insurance is a small, simplified policy designed to cover funeral and related costs so savings stay intact.",
    ],
    benefits: [
      { icon: "Feather", title: "Simplified approval", text: "Streamlined questions; many applicants qualify without exams." },
      { icon: "ShieldCheck", title: "Reliable payout", text: "Fixed premiums and coverage amounts sized for end‑of‑life needs." },
      { icon: "HeartPulse", title: "Ease for family", text: "Funds arrive quickly to help with urgent costs." },
    ],
    steps: [
      { title: "1) Quick call", text: "Confirm needs and budget." },
      { title: "2) Choose amount", text: "Pick a coverage level that fits your plan." },
      { title: "3) Simple application", text: "Answer a few health questions—no complex paperwork." },
      { title: "4) Policy issued", text: "Keep beneficiaries current and review yearly." },
    ],
    faqs: [
      { q: "How much do most people choose?", a: "Common amounts range $5k–$25k depending on costs in your area." },
      { q: "Is there a waiting period?", a: "Some plans have graded benefits early on; we’ll outline terms clearly." },
      { q: "Can I be denied?", a: "It depends on health and history. We screen options so you apply where approval odds are strongest." },
      { q: "Will premiums increase?", a: "Level-benefit policies keep premiums the same for life; we focus on those when possible." },
      { q: "Can I add riders?", a: "Some plans allow accidental death or child riders—availability varies by state." },
    ],
  },
  {
    id: "disability-insurance",
    route: "/products/disability-insurance",
    seoTitle: "Disability Insurance | Newline Financial",
    hero: {
      title: "Disability Insurance",
      tagline: "Protect your paycheck if illness or injury keeps you from working.",
      image: { src: "/services/business-owner.jpeg", alt: "Professional reviewing disability insurance" },
    },
    overview: [
      "Disability insurance replaces a portion of income if you can’t work due to illness or injury—essential protection for most earners.",
    ],
    benefits: [
      { icon: "Shield", title: "Income replacement", text: "Replace 40–60% (or more) of income depending on the policy." },
      { icon: "Calculator", title: "Own‑occupation options", text: "Tailor to your profession, elimination period, and benefit length." },
      { icon: "Users", title: "Protect family goals", text: "Keep essentials and savings plans on track during recovery." },
    ],
    steps: [
      { title: "1) Needs analysis", text: "Evaluate income, expenses, and employer coverage gaps." },
      { title: "2) Policy design", text: "Choose benefit % and duration; add riders like residual benefits." },
      { title: "3) Underwriting", text: "We guide paperwork and medical steps if required." },
      { title: "4) Annual review", text: "Adjust as income and responsibilities change." },
    ],
    faqs: [
      { q: "Do I need coverage if I have group DI?", a: "Group plans often cap benefits and aren’t portable; a personal policy can fill gaps." },
      { q: "How long do benefits last?", a: "Options range from a couple years to retirement age—your plan sets the term." },
      { q: "What about pre‑existing conditions?", a: "Underwriting varies by carrier; we’ll outline realistic options up front." },
      { q: "How are rates set?", a: "Age, health, occupation class, and coverage design drive cost—we optimize for value." },
      { q: "Can I increase benefits later?", a: "Many policies offer future increase options—eligibility applies." },
    ],
  },
  {
    id: "long-term-care",
    route: "/products/long-term-care",
    seoTitle: "Long‑Term Care Insurance | Newline Financial",
    hero: {
      title: "Long‑Term Care",
      tagline: "Plan for care costs and protect family from the financial and emotional strain.",
      image: { src: "/services/college-planning.jpeg", alt: "Senior receiving support from family" },
    },
    overview: [
      "Long‑term care insurance helps cover home care, assisted living, or nursing care so savings last and choices remain yours.",
    ],
    benefits: [
      { icon: "HeartPulse", title: "Choice & dignity", text: "Resources to choose where and how you receive care." },
      { icon: "ShieldCheck", title: "Protect nest egg", text: "Reduce the risk of depleting retirement savings due to care costs." },
      { icon: "Users", title: "Family relief", text: "Ease the time and money burden on loved ones." },
    ],
    steps: [
      { title: "1) Needs & budget", text: "Map likely care scenarios and cost ranges." },
      { title: "2) Policy design", text: "Set daily benefit, inflation protection, and benefit period." },
      { title: "3) Application", text: "Health review and placement with suitable carriers." },
      { title: "4) Review over time", text: "Adjust features as needs evolve." },
    ],
    faqs: [
      { q: "What does LTC cover?", a: "Typically home care, assisted living, memory care, and nursing facilities—per policy terms." },
      { q: "When should I buy?", a: "Earlier can mean better health and pricing; many review options in their 50s–60s." },
      { q: "Hybrid policies?", a: "Linked-benefit life insurance can provide LTC benefits—worth comparing." },
      { q: "Is it use‑it‑or‑lose‑it?", a: "Traditional policies are, hybrids are not. We’ll outline the trade‑offs." },
      { q: "Are benefits taxable?", a: "Generally tax‑advantaged up to limits; we coordinate with your tax professional." },
    ],
  },
  {
    id: "retirement-planning",
    route: "/services/retirement-planning",
    seoTitle: "Retirement Planning Services | Newline Financial",
    hero: {
      title: "Retirement Planning",
      tagline: "Turn savings into sustainable income and invest with risk awareness.",
      image: { src: "/services/retirement-investment.jpeg", alt: "Couple reviewing retirement plan" },
    },
    overview: [
      "We build retirement income strategies using annuities, Social Security timing, and tax‑aware withdrawals—aligned to your goals and comfort.",
    ],
    benefits: [
      { icon: "PieChart", title: "Predictable income", text: "Map essentials with annuity income and structured withdrawals." },
      { icon: "Shield", title: "Risk management", text: "Guardrails to reduce drawdown risk in volatile markets." },
      { icon: "Calculator", title: "Tax awareness", text: "Coordinate accounts to limit drag and extend portfolio life." },
    ],
    steps: [
      { title: "1) Goals & inventory", text: "Clarify lifestyle, accounts, and pensions." },
      { title: "2) Income map", text: "Sequence withdrawals, annuities, and buffers for stability." },
      { title: "3) Implement", text: "Transition accounts and set automation." },
      { title: "4) Monitor", text: "Track plan and adjust annually." },
    ],
    faqs: [
      { q: "When should I take Social Security?", a: "We model break‑evens and longevity to set a claiming strategy." },
      { q: "Do I need annuities?", a: "They can stabilize income; suitability depends on goals and risk tolerance." },
      { q: "How much can I safely withdraw?", a: "We test ranges against market history and your plan’s guardrails." },
      { q: "What about Roth conversions?", a: "We coordinate with your tax pro to target lower‑tax windows." },
      { q: "How often do we review?", a: "At least annually or after major life events." },
    ],
  },
  {
    id: "estate-legacy-planning",
    route: "/services/estate-legacy-planning",
    seoTitle: "Estate & Legacy Planning Services | Newline Financial",
    hero: {
      title: "Estate & Legacy Planning",
      tagline: "Transfer wealth efficiently and support what matters most.",
      image: { src: "/services/estate-legacy.jpeg", alt: "Family discussing estate plans" },
    },
    overview: [
      "Coordinate beneficiary designations, trusts, and policy strategies so assets flow as intended with minimal friction.",
    ],
    benefits: [
      { icon: "ScrollText", title: "Clear instructions", text: "Align accounts and beneficiaries with your will or trust." },
      { icon: "Users", title: "Family stewardship", text: "Build a values‑based plan that supports the next generation." },
      { icon: "ShieldCheck", title: "Risk controls", text: "Use tools that protect against taxes, creditors, and confusion." },
    ],
    steps: [
      { title: "1) Discovery", text: "Clarify assets, goals, and family wishes." },
      { title: "2) Coordinate pros", text: "Work with attorneys and tax pros to implement documents and titling." },
      { title: "3) Beneficiary review", text: "Update policies and accounts." },
      { title: "4) Maintain", text: "Review after life events and annually." },
    ],
    faqs: [
      { q: "Do I need a trust or a will?", a: "Many use both—trusts manage assets during life and after; wills direct remaining property." },
      { q: "What is probate?", a: "A court process for validating a will. Proper titling and beneficiaries can avoid it for many assets." },
      { q: "How are taxes handled?", a: "We design with tax awareness and coordinate with qualified professionals." },
      { q: "Can I name minors as beneficiaries?", a: "We’ll discuss options like trusts or custodial arrangements to protect minors." },
      { q: "How often should we update documents?", a: "After major changes and every few years." },
    ],
  },
  {
    id: "tax-strategy",
    route: "/services/tax-strategy",
    seoTitle: "Tax Strategy & Optimization | Newline Financial",
    hero: {
      title: "Tax Strategy & Optimization",
      tagline: "Keep more of what you earn with coordinated, compliant strategies.",
      image: { src: "/services/tax-strategy.jpeg", alt: "Professional analyzing taxes" },
    },
    overview: [
      "We coordinate with tax professionals to manage brackets, capital gains, and conversions—aiming to improve after‑tax outcomes, not just pre‑tax balances.",
    ],
    benefits: [
      { icon: "Calculator", title: "Bracket management", text: "Plan conversions and withdrawals to limit surprise bills." },
      { icon: "PieChart", title: "Account location", text: "Place assets across tax buckets to reduce drag." },
      { icon: "ShieldCheck", title: "Compliance first", text: "Strategies align with current rules and documentation." },
    ],
    steps: [
      { title: "1) Tax map", text: "Assess current and future‑expected brackets." },
      { title: "2) Strategy design", text: "Draft moves such as Roth conversions or gain harvesting." },
      { title: "3) Implement", text: "Coordinate with your CPA/EA to execute cleanly." },
      { title: "4) Review annually", text: "Update to reflect law changes and income." },
    ],
    faqs: [
      { q: "Do you file taxes?", a: "We don’t file returns; we collaborate with your tax professional to implement strategies." },
      { q: "Can tax strategies eliminate taxes?", a: "No strategy guarantees a zero‑tax outcome; we target better after‑tax results within the rules." },
      { q: "Are strategies high‑risk?", a: "No—we emphasize compliance, documentation, and suitability." },
      { q: "How do conversions affect Medicare premiums?", a: "We check IRMAA thresholds to avoid unintended surcharges." },
      { q: "What changes each year?", a: "Brackets and limits adjust; we review annually to stay aligned." },
    ],
  },
];

