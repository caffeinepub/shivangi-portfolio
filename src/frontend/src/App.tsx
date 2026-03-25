import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  ChevronRight,
  Eye,
  Layers,
  Layout,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  Target,
  TrendingUp,
  Type,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import YouTubeThumbnailsPage from "./YouTubeThumbnailsPage";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Works", id: "works" },
  { label: "Results", id: "results" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

const SKILLS = [
  {
    id: "ctr",
    icon: <TrendingUp size={28} />,
    label: "YouTube Thumbnail Strategy & CTR Optimization",
  },
  { id: "social", icon: <Layers size={28} />, label: "Social Media Creatives" },
  {
    id: "ads",
    icon: <Target size={28} />,
    label: "Ad Banners",
  },
  {
    id: "print",
    icon: <Layout size={28} />,
    label: "Print Design (Brochures, Menu Cards, Hoardings)",
  },
  {
    id: "branding",
    icon: <Eye size={28} />,
    label: "Branding & Visual Identity",
  },
  { id: "type", icon: <Type size={28} />, label: "Typography & Layout" },
];

const TOOLS = [
  {
    name: "Photoshop",
    logo: "/assets/uploads/photoshop-019d2120-9f6a-70ac-960f-fa93db87af9e-5.png",
  },
  {
    name: "Illustrator",
    logo: "/assets/uploads/illustrator-019d2120-9d26-7529-b07c-03e3a4fa3daa-1.png",
  },
  {
    name: "Canva",
    logo: "/assets/uploads/canva-019d2120-9d21-75b9-bcdd-d4965725b555-2.png",
  },
  {
    name: "ChatGPT",
    logo: "/assets/uploads/chatgpt-019d2120-a4fe-73b9-a30f-c166d1a9d964-6.png",
  },
  {
    name: "Freepik",
    logo: "/assets/uploads/freepik-019d2120-9e3e-72ed-b67f-772cc68c9032-4.png",
  },
  {
    name: "Premiere Pro",
    logo: "/assets/uploads/premiere_pro-019d2120-9e3f-700e-ac3a-f0a7d660c703-3.png",
  },
];

const CASE_STUDIES = [
  {
    id: 1,
    title: "YouTube Thumbnails (EdTech)",
    tag: "YouTube / CTR",
    image:
      "/assets/uploads/youtube_thumbnail-019d2106-9d5d-7579-9da8-a2acc30d4fb5-1.jpg",
    objective: "Boost CTR for educational video content.",
    approach:
      "Analyzed high-performing thumbnail patterns, A/B tested facial expressions and text overlays.",
    execution:
      "Bold typography, high-contrast backgrounds, emotion-driven layouts.",
    result: "CTR improved from 3.2% to 10.3% within 60 days.",
    link: "https://drive.google.com/drive/folders/1CFrXdqun77k-DiNvehcgFeEedGLvA5zC?usp=drive_link",
  },
  {
    id: 2,
    title: "Print Design (Brochures, Menu Cards, Hoardings)",
    tag: "Branding / Print",
    image:
      "/assets/uploads/print_design-019d2107-ef10-747e-98d1-93af7a894d77-3.jpg",
    objective: "Create high-impact print collateral for brands.",
    approach:
      "Mood-board driven layouts with brand-consistent palettes and typography.",
    execution:
      "Brochures, menu cards, hoardings, and standees tailored to each brand.",
    result: "Improved brand perception and offline engagement.",
    link: "https://drive.google.com/drive/folders/1hVEbppj2K0fkJzw7aGDcuujdIEin2sdT?usp=drive_link",
  },
  {
    id: 3,
    title: "Social Media Creatives",
    tag: "Social / Ads",
    image:
      "/assets/uploads/social-media1-019d211a-8e88-70b8-ae90-87a1f0e1c59e-1.jpg",
    objective: "Design scroll-stopping creatives for social media campaigns.",
    approach:
      "Platform-native aesthetics with strong CTA placement and targeted messaging.",
    execution: "Ad creatives, carousel posts, and branded content.",
    result: "Improved engagement and conversion performance.",
    link: "https://drive.google.com/drive/folders/1dw4-LXialAmKp3bDRupTsg_tj9tEyGzS?usp=drive_link",
  },
];

const DESIGN_PILLARS = [
  {
    id: "bold",
    icon: <Eye size={24} />,
    title: "Bold Visuals",
    desc: "High contrast, striking imagery that commands attention and stops the scroll.",
  },
  {
    id: "clean",
    icon: <Layout size={24} />,
    title: "Clean Layout",
    desc: "Organized grid structure with purposeful white space guiding the viewer.",
  },
  {
    id: "perf",
    icon: <BarChart2 size={24} />,
    title: "Performance-Focused",
    desc: "Every design element serves a measurable business goal — CTR, ROAS, conversions.",
  },
  {
    id: "typo",
    icon: <Type size={24} />,
    title: "Strong Typography",
    desc: "Type as design — hierarchy that guides the eye and drives the message home.",
  },
];

const STATS = [
  { value: "10.3%", label: "Peak CTR" },
  { value: "2.3x", label: "ROAS" },
  { value: "65%", label: "Engagement Lift" },
  { value: "50+", label: "Projects Delivered" },
];

const TESTIMONIALS = [
  {
    id: "ravi",
    quote:
      "Shivangi's thumbnails transformed our channel. CTR improved significantly.",
    name: "Ravi Vishwas",
    role: "Founder (Vishwas GS Academy & Pareeksha Gurukul)",
    initials: "RV",
  },
  {
    id: "gaurav",
    quote:
      "The branding she delivered was strategic, not just pretty. Real results.",
    name: "Gaurav Raj",
    role: "Founder (Morning Owl)",
    initials: "GR",
  },
  {
    id: "shyamli",
    quote:
      "Her ad creatives drove real bookings. One of the best design investments we made.",
    name: "Shyamli",
    role: "Founder (Digital People)",
    initials: "SH",
  },
];

const ABOUT_STATS = [
  { val: "8+", sub: "Years" },
  { val: "50+", sub: "Projects" },
  { val: "98%", sub: "Client Satisfaction" },
];

function SectionDivider() {
  return (
    <div className="flex items-center gap-4 my-2">
      <div className="h-px flex-1 bg-border" />
      <div className="w-8 h-0.5 bg-primary" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-primary text-xs font-bold tracking-widest uppercase font-body">
        {children}
      </span>
      <div className="h-px w-12 bg-primary" />
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentPage, setCurrentPage] = useState<"home" | "youtube-thumbnails">(
    "home",
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );
    for (const { id } of NAV_LINKS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  if (currentPage === "youtube-thumbnails") {
    return <YouTubeThumbnailsPage onBack={() => setCurrentPage("home")} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        data-ocid="nav.section"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <button
            type="button"
            data-ocid="nav.link"
            onClick={() => scrollTo("home")}
            className="text-primary font-display font-black text-sm tracking-widest uppercase whitespace-nowrap"
          >
            SHIVANGI &bull; GRAPHIC DESIGNER
          </button>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                type="button"
                key={id}
                data-ocid={`nav.${id}.link`}
                onClick={() => scrollTo(id)}
                className={`font-body text-sm tracking-wider uppercase transition-colors ${
                  activeSection === id
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
          <Button
            data-ocid="nav.cta.button"
            onClick={() => scrollTo("contact")}
            className="hidden md:flex bg-primary text-primary-foreground font-display font-black text-xs tracking-widest uppercase rounded-full px-6 hover:bg-primary/90 yellow-glow"
          >
            LET&apos;S WORK
          </Button>
          <button
            type="button"
            data-ocid="nav.menu.toggle"
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {NAV_LINKS.map(({ label, id }) => (
                  <button
                    type="button"
                    key={id}
                    onClick={() => {
                      scrollTo(id);
                      setMenuOpen(false);
                    }}
                    className="text-left font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </button>
                ))}
                <Button
                  onClick={() => {
                    scrollTo("contact");
                    setMenuOpen(false);
                  }}
                  className="bg-primary text-primary-foreground font-display font-black text-xs uppercase rounded-full w-full yellow-glow"
                >
                  LET&apos;S WORK
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="min-h-screen flex items-center pt-24 pb-16 px-6 max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-center w-full"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-primary text-xs font-bold tracking-widest uppercase font-body">
                Portfolio 2026
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h1 className="font-display font-black text-7xl md:text-8xl lg:text-9xl leading-none mb-4 yellow-text-glow">
              <span className="text-primary">SHIVANGI</span>
            </h1>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground/80 mb-6 tracking-widest">
              GRAPHIC DESIGNER
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-2">
              I design visuals that don&apos;t just look good &mdash;{" "}
              <span className="text-primary font-semibold">they perform.</span>
            </p>
            <p className="font-body text-muted-foreground/70 text-sm mb-4">
              Available for freelance &amp; full-time opportunities.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm mb-10">
              <MapPin size={14} className="text-primary" />
              Lucknow, India
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                data-ocid="hero.works.button"
                onClick={() => setCurrentPage("youtube-thumbnails")}
                className="bg-primary text-primary-foreground font-display font-black uppercase tracking-widest px-8 py-6 text-sm rounded-full yellow-glow hover:bg-primary/90"
              >
                VIEW MY WORK <ChevronRight size={16} className="ml-1" />
              </Button>
              <a
                href="https://drive.google.com/drive/folders/1MA-I1Z6y47wllD5Amw31_twfqASlsUML?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.cv.button"
              >
                <Button
                  variant="outline"
                  className="border-foreground/40 text-foreground font-display font-black uppercase tracking-widest px-8 py-6 text-sm rounded-full hover:bg-foreground/5"
                >
                  DOWNLOAD CV
                </Button>
              </a>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionDivider />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>About Me</SectionLabel>
              <h2 className="font-display font-black text-4xl md:text-5xl mb-6">
                DESIGN THAT <span className="text-primary">DRIVES</span> RESULTS
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4 text-base">
                With{" "}
                <span className="text-foreground font-semibold">
                  8+ years of experience
                </span>{" "}
                since 2016, I&apos;ve partnered with brands across edtech,
                hospitality, cafes, and e-commerce to create visuals that
                don&apos;t just look good &mdash; they convert.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-base">
                My work is rooted in performance-driven design &mdash; every
                layout decision, color choice, and typographic hierarchy is made
                with one goal:{" "}
                <span className="text-primary font-semibold">
                  measurable impact.
                </span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex justify-center gap-4"
            >
              {ABOUT_STATS.map((s) => (
                <div
                  key={s.sub}
                  className="bg-card border border-border rounded-xl p-6 card-hover text-center flex-1"
                >
                  <div className="font-display font-black text-4xl text-primary mb-1">
                    {s.val}
                  </div>
                  <div className="font-body text-muted-foreground text-sm uppercase tracking-wider">
                    {s.sub}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionDivider />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <SectionLabel>What I Do</SectionLabel>
            <h2 className="font-display font-black text-4xl md:text-5xl mb-12">
              CORE <span className="text-primary">SKILLS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.id}
                  data-ocid={`skills.item.${i + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-card border border-primary/30 rounded-xl p-6 card-hover group"
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform inline-block">
                    {skill.icon}
                  </div>
                  <p className="font-body text-sm text-foreground leading-snug">
                    {skill.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* TOOLS */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <SectionDivider />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <SectionLabel>Toolkit</SectionLabel>
            <h2 className="font-display font-black text-4xl md:text-5xl mb-10">
              TOOLS I <span className="text-primary">MASTER</span>
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {TOOLS.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  data-ocid={`tools.item.${i + 1}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.08 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  className="bg-card border border-border rounded-xl p-5 flex flex-col items-center gap-3 cursor-default transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_18px_rgba(234,179,8,0.25)]"
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="font-body text-xs text-muted-foreground text-center">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* WORKS */}
        <section id="works" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionDivider />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="font-display font-black text-4xl md:text-5xl mb-12">
              SELECTED <span className="text-primary">WORKS</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {CASE_STUDIES.map((cs, i) =>
                cs.id === 1 ? (
                  <motion.div
                    key={cs.id}
                    data-ocid={`works.item.${i + 1}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    onClick={() => setCurrentPage("youtube-thumbnails")}
                    className="bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col h-full cursor-pointer"
                  >
                    <div className="w-full h-52 overflow-hidden flex-shrink-0">
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display font-black text-lg text-foreground leading-tight">
                          {cs.title}
                        </h3>
                        <Badge className="bg-primary text-primary-foreground font-display text-xs uppercase tracking-wider shrink-0">
                          {cs.tag}
                        </Badge>
                      </div>
                      <div className="space-y-3 text-sm font-body">
                        {[
                          { k: "Objective", v: cs.objective, bold: false },
                          { k: "Approach", v: cs.approach, bold: false },
                          { k: "Execution", v: cs.execution, bold: false },
                          { k: "Result", v: cs.result, bold: true },
                        ].map(({ k, v, bold }) => (
                          <div key={k}>
                            <span className="text-primary font-semibold uppercase tracking-wider text-xs">
                              {k}
                            </span>
                            <p
                              className={`mt-1 ${
                                bold
                                  ? "text-foreground font-semibold"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {v}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.a
                    key={cs.id}
                    href={cs.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`works.item.${i + 1}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    className="bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col h-full cursor-pointer"
                  >
                    <div className="w-full h-52 overflow-hidden flex-shrink-0">
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display font-black text-lg text-foreground leading-tight">
                          {cs.title}
                        </h3>
                        <Badge className="bg-primary text-primary-foreground font-display text-xs uppercase tracking-wider shrink-0">
                          {cs.tag}
                        </Badge>
                      </div>
                      <div className="space-y-3 text-sm font-body">
                        {[
                          { k: "Objective", v: cs.objective, bold: false },
                          { k: "Approach", v: cs.approach, bold: false },
                          { k: "Execution", v: cs.execution, bold: false },
                          { k: "Result", v: cs.result, bold: true },
                        ].map(({ k, v, bold }) => (
                          <div key={k}>
                            <span className="text-primary font-semibold uppercase tracking-wider text-xs">
                              {k}
                            </span>
                            <p
                              className={`mt-1 ${
                                bold
                                  ? "text-foreground font-semibold"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {v}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>
        </section>

        {/* DESIGN STYLE */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <SectionDivider />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <SectionLabel>Design Philosophy</SectionLabel>
            <h2 className="font-display font-black text-4xl md:text-5xl mb-12">
              MY DESIGN <span className="text-primary">STYLE</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {DESIGN_PILLARS.map((p, i) => (
                <motion.div
                  key={p.id}
                  data-ocid={`style.item.${i + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-5">
                    {p.icon}
                  </div>
                  <h3 className="font-display font-black text-base mb-3 text-foreground">
                    {p.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* RESULTS SECTION */}
        <section id="results" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionDivider />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <SectionLabel>Proof of Work</SectionLabel>
            <h2 className="font-display font-black text-4xl md:text-5xl mb-12">
              RESULTS THAT <span className="text-primary">SPEAK</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  data-ocid={`results.item.${i + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center yellow-glow"
                >
                  <div className="font-display font-black text-4xl md:text-5xl text-primary mb-2">
                    {s.value}
                  </div>
                  <div className="font-body text-muted-foreground text-xs uppercase tracking-widest">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionDivider />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <SectionLabel>Client Love</SectionLabel>
            <h2 className="font-display font-black text-4xl md:text-5xl mb-12">
              WHAT CLIENTS <span className="text-primary">SAY</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.id}
                  data-ocid={`testimonials.item.${i + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-primary rounded-2xl p-7 card-hover"
                >
                  <div className="flex gap-1 mb-5">
                    {([0, 1, 2, 3, 4] as const).map((si) => (
                      <Star
                        key={si}
                        size={14}
                        className="fill-primary-foreground text-primary-foreground"
                      />
                    ))}
                  </div>
                  <p className="font-body text-primary-foreground font-medium leading-relaxed mb-6 text-sm">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <span className="font-display font-black text-primary-foreground text-xs">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-display font-black text-primary-foreground text-sm">
                        {t.name}
                      </div>
                      <div className="font-body text-primary-foreground/70 text-xs">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
          <SectionDivider />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-center"
          >
            <h2 className="font-display font-black text-5xl md:text-7xl leading-tight mb-6">
              LET&apos;S CREATE DESIGNS
              <br />
              THAT{" "}
              <span className="text-primary yellow-text-glow">PERFORM.</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-12">
              Available for freelance projects. Based in Lucknow, India.
            </p>
            <div className="flex flex-wrap justify-center gap-5 mb-16">
              <a
                data-ocid="contact.email.link"
                href="mailto:shivangi1065@gmail.com"
                className="flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 text-sm font-body hover:border-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                shivangi1065@gmail.com
              </a>
              <a
                data-ocid="contact.phone.link"
                href="tel:+918840835581"
                className="flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 text-sm font-body hover:border-primary transition-colors"
              >
                <Phone size={16} className="text-primary" />
                8840835581
              </a>
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 text-sm font-body">
                <MapPin size={16} className="text-primary" />
                Lucknow, India
              </div>
            </div>
            <a
              href="mailto:shivangi1065@gmail.com"
              data-ocid="contact.cta.button"
            >
              <Button className="bg-primary text-primary-foreground font-display font-black uppercase tracking-widest px-12 py-6 text-base rounded-full yellow-glow hover:bg-primary/90">
                START A PROJECT
              </Button>
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-display font-black text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Shivangi. All rights reserved.
          </span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Built with &hearts; using caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
