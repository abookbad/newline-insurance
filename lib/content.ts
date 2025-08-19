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
    id: "life",
    label: "Life Insurance",
    title: "Life Insurance",
    subheading: "Protect income and family goals with term or permanent options.",
    image: { src: "/services/insurance-planning.jpeg", alt: "Parents reviewing life insurance", focal: "right" },
    highlights: ["Term • Whole • IUL", "Living Benefits", "Return of Premium"],
    subservices: [
      { icon: "Shield", heading: "Term (incl. ROP)", text: "Affordable protection for 10/20/30 years—option to return premiums." },
      { icon: "PiggyBank", heading: "Whole Life", text: "Lifetime coverage with guaranteed premiums and cash value." },
      { icon: "Activity", heading: "Indexed UL", text: "Flexible premiums with market‑linked crediting and living benefits." },
    ],
    faqs: [
      { q: "How much coverage do I need?", a: "A common guideline is 10–15× income, refined for debts, savings, and goals." },
      { q: "Term vs. permanent?", a: "Term maximizes coverage per dollar; permanent offers lifetime protection and cash value." },
    ],
  },
  {
    id: "medicare",
    label: "Medicare",
    title: "Medicare",
    subheading: "Compare plan types and enroll with confidence—no jargon.",
    image: { src: "/services/retirement-investment.jpeg", alt: "Advisor reviewing Medicare" },
    highlights: ["Timing", "Advantage vs. Medigap", "Drug coverage"],
    subservices: [
      { icon: "HeartPulse", heading: "Timeline check", text: "Confirm eligibility and ideal enrollment window." },
      { icon: "Shield", heading: "Plan comparisons", text: "Review costs, networks, and prescriptions side by side." },
      { icon: "ScrollText", heading: "Annual review", text: "Re‑check plans so coverage stays aligned to needs." },
    ],
    faqs: [
      { q: "When do I enroll?", a: "Most enroll around 65. Special rules apply with employer coverage—we’ll confirm the right timing." },
      { q: "Can I change later?", a: "Yes, typically during AEP or with special events." },
    ],
  },
  {
    id: "final-expense",
    label: "Final Expense",
    title: "Final Expense",
    subheading: "Smaller, simplified policies to help loved ones handle last expenses.",
    image: { src: "/services/estate-legacy.jpeg", alt: "Family supporting each other" },
    highlights: ["Simplified underwriting", "Reliable payout", "Modest coverage"],
    subservices: [
      { icon: "Feather", heading: "Simplified approval", text: "Many applicants qualify without exams—fast decisions." },
      { icon: "Shield", heading: "Level benefits", text: "Fixed premiums and coverage sized for needs." },
      { icon: "HeartPulse", heading: "Ease for family", text: "Funds arrive quickly to help with urgent costs." },
    ],
    faqs: [
      { q: "How much do people choose?", a: "Common amounts $5k–$25k depending on area costs." },
      { q: "Will premiums increase?", a: "Level‑benefit policies keep premiums the same for life; we focus on those when possible." },
    ],
  },
  {
    id: "disability",
    label: "Disability Insurance",
    title: "Disability Insurance",
    subheading: "Protect your paycheck if illness or injury keeps you from working.",
    image: { src: "/services/business-owner.jpeg", alt: "Professional reviewing disability options" },
    highlights: ["Income protection", "Own‑occupation", "Family goals"],
    subservices: [
      { icon: "Shield", heading: "Income replacement", text: "Replace 40–60% (or more) of income depending on the policy." },
      { icon: "Calculator", heading: "Policy design", text: "Choose benefit %, elimination period, and length—add riders." },
      { icon: "Users", heading: "Protect goals", text: "Keep essentials and savings plans on track during recovery." },
    ],
    faqs: [
      { q: "Do I need coverage if I have group DI?", a: "Group plans often cap benefits and aren’t portable; a personal policy can fill gaps." },
      { q: "How long do benefits last?", a: "Options range from a couple years to retirement age—your plan sets the term." },
    ],
  },
  {
    id: "ltc",
    label: "Long‑term Care",
    title: "Long‑term Care",
    subheading: "Plan for care costs and protect family from financial strain.",
    image: { src: "/services/college-planning.jpeg", alt: "Senior receiving support" },
    highlights: ["Home & facility care", "Protect nest egg", "Family relief"],
    subservices: [
      { icon: "HeartPulse", heading: "Choice & dignity", text: "Resources to choose where and how you receive care." },
      { icon: "ShieldCheck", heading: "Protect savings", text: "Reduce the risk of depleting retirement assets due to care costs." },
      { icon: "Users", heading: "Family relief", text: "Ease time and money burden on loved ones." },
    ],
    faqs: [
      { q: "When should I buy?", a: "Earlier can mean better health and pricing; many review options in their 50s–60s." },
      { q: "Hybrid policies?", a: "Linked‑benefit life insurance can provide LTC benefits—worth comparing." },
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
  {
    title: "Insurance Solutions",
    children: [
      { title: "Life Insurance", href: "/solutions/insurance/life-insurance" },
      { title: "Medicare", href: "/solutions/insurance/medicare" },
      { title: "Final Expense", href: "/solutions/insurance/final-expense" },
      { title: "Disability Insurance", href: "/solutions/insurance/disability-insurance" },
      { title: "Long-Term Care", href: "/solutions/insurance/long-term-care" },
    ],
  },
  {
    title: "Business Solutions",
    children: [
      { title: "Business planning", href: "/solutions/business/business-planning" },
      { title: "Group Benefits", href: "/solutions/business/group-benefits" },
      { title: "Retirement solutions", href: "/solutions/business/retirement" },
      { title: "Strategic Tax Planning", href: "/solutions/business/strategic-tax" },
    ],
  },
  {
    title: "Planning Services",
    children: [
      { title: "Insurance planning", href: "/solutions/planning/insurance-planning" },
      { title: "Retirement planning", href: "/solutions/planning/retirement-planning" },
      { title: "College planning", href: "/solutions/planning/college-planning" },
      { title: "Estate & Legacy Planning", href: "/solutions/planning/estate-legacy-planning" },
      { title: "Strategic Tax Planning", href: "/solutions/planning/tax-strategy" },
      { title: "Business planning", href: "/solutions/planning/business-planning" },
      { title: "Investment Planning", href: "/solutions/planning/investment-planning" },
      { title: "Real Estate Planning", href: "/solutions/planning/real-estate-planning" },
    ],
  },
  { title: "Agency Platform", href: "/solutions/agency" },
  { title: "About Us", href: "/about" },
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
      image: { src: "/business-solutions/retirement-solutions.jpeg", alt: "Couple reviewing retirement plan" },
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
      image: { src: "/business-solutions/business-planning.jpeg", alt: "Family discussing estate plans" },
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
    id: "insurance-planning",
    route: "/services/insurance-planning",
    seoTitle: "Insurance Planning | Newline Financial",
    hero: {
      title: "Insurance Planning",
      tagline: "Protect income, assets, and goals with coverage tailored to your life.",
      image: { src: "/business-solutions/group-benefits.jpeg", alt: "Family reviewing insurance plan at a kitchen table" },
    },
    overview: [
      "We match policy designs to your budget and goals today—with room to adjust tomorrow.",
      "From term and whole life to indexed options and long-term care, we help you compare in plain English.",
    ],
    benefits: [
      { icon: "Shield", title: "Right‑sized protection", text: "Coverage aligned to income, debt, and family needs." },
      { icon: "PiggyBank", title: "Cash‑value choices", text: "Explore permanent options that can build accessible value." },
      { icon: "HeartPulse", title: "Living benefits", text: "Access benefits for qualifying illness on many modern policies." },
    ],
    steps: [
      { title: "1) Quick consult", text: "Clarify goals, budget, and timeline." },
      { title: "2) Compare options", text: "We shop carriers and outline trade‑offs." },
      { title: "3) Apply & place", text: "Paperwork handled with updates throughout." },
      { title: "4) Review annually", text: "Adjust as life changes so protection stays current." },
    ],
    faqs: [
      { q: "How much coverage do I need?", a: "A common guideline is 10–15× income, refined for debts, savings, and goals." },
      { q: "Term vs. permanent?", a: "Term maximizes coverage per dollar; permanent provides lifetime coverage and cash value." },
    ],
  },
  {
    id: "investment-planning",
    route: "/services/investment-planning",
    seoTitle: "Investment Planning | Newline Financial",
    hero: {
      title: "Investment Planning",
      tagline: "Align portfolios to your goals, time horizon, and risk comfort.",
      image: { src: "/business-solutions/retirement-solutions.jpeg", alt: "Couple reviewing investments at a desk" },
    },
    overview: [
      "We design risk‑aware allocations, coordinate accounts, and focus on what you can control.",
      "Clarity around diversification, costs, and taxes helps keep your plan durable through cycles.",
    ],
    benefits: [
      { icon: "PieChart", title: "Goal‑based allocations", text: "Portfolios mapped to timelines for spending and growth." },
      { icon: "Calculator", title: "Tax awareness", text: "Asset location and rebalancing designed to reduce drag." },
      { icon: "Shield", title: "Risk management", text: "Guardrails to help limit drawdowns and behavior mistakes." },
    ],
    steps: [
      { title: "1) Goals & inventory", text: "Clarify accounts, timelines, and priorities." },
      { title: "2) Build & allocate", text: "Construct diversified portfolios with clear roles." },
      { title: "3) Implement", text: "Transition holdings thoughtfully to minimize costs and taxes." },
      { title: "4) Monitor", text: "Rebalance and review annually or after life changes." },
    ],
    faqs: [
      { q: "Can you manage all my accounts?", a: "We can advise across accounts and coordinate with your custodian and tax professional." },
      { q: "Active or passive?", a: "We use evidence‑based building blocks and risk controls suited to your plan and preferences." },
    ],
  },
  {
    id: "real-estate-planning",
    route: "/services/real-estate-planning",
    seoTitle: "Real Estate Planning | Newline Financial",
    hero: {
      title: "Real Estate Planning",
      tagline: "Integrate property decisions with your cash flow, taxes, and legacy.",
      image: { src: "/business-solutions/business-planning.jpeg", alt: "Clients reviewing documents with advisor" },
    },
    overview: [
      "We evaluate buy/sell/hold choices, debt structure, and how properties fit the broader plan.",
      "Coordinate titling, beneficiaries, and estate considerations with qualified professionals.",
    ],
    benefits: [
      { icon: "Calculator", title: "Cash‑flow clarity", text: "Understand income, expenses, reserves, and risk." },
      { icon: "ScrollText", title: "Titling & legacy", text: "Coordinate with attorneys on ownership and beneficiary goals." },
      { icon: "Shield", title: "Risk controls", text: "Insurance, liquidity, and structure aligned to your plan." },
    ],
    steps: [
      { title: "1) Inventory", text: "Review properties, mortgages, cash flows, and goals." },
      { title: "2) Scenarios", text: "Model hold vs. sell vs. buy with taxes and cash flow in mind." },
      { title: "3) Implement", text: "Coordinate financing, titling, and coverage." },
      { title: "4) Review", text: "Update as markets and goals change." },
    ],
    faqs: [
      { q: "Do you sell real estate?", a: "We don’t broker property; we coordinate planning with your real‑estate and tax pros." },
      { q: "Primary vs. rentals?", a: "We evaluate both, focusing on net cash flow, risk, and long‑term fit." },
    ],
  },
  {
    id: "tax-strategy",
    route: "/services/tax-strategy",
    seoTitle: "Tax Strategy & Optimization | Newline Financial",
    hero: {
      title: "Tax Strategy & Optimization",
      tagline: "Keep more of what you earn with coordinated, compliant strategies.",
      image: { src: "/business-solutions/strategic-tax-planning.jpeg", alt: "Professional analyzing taxes" },
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

