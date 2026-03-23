import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  ChevronRight,
  Eye,
  Globe,
  Instagram,
  Layers,
  Layout,
  Linkedin,
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

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Works", id: "works" },
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
    label: "Ad Banners & Campaign Design",
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
  { name: "Photoshop", emoji: "\uD83C\uDFA8" },
  { name: "Illustrator", emoji: "\u270F\uFE0F" },
  { name: "Canva", emoji: "\uD83D\uDDBC\uFE0F" },
  { name: "ChatGPT", emoji: "\uD83E\uDD16" },
  { name: "Freepik", emoji: "\uD83D\uDDC2\uFE0F" },
  { name: "Premiere Pro", emoji: "\uD83C\uDFAC" },
];

const CASE_STUDIES = [
  {
    id: 1,
    title: "EdTech YouTube Channel Thumbnails",
    tag: "YouTube / CTR",
    objective: "Boost CTR for educational video content.",
    approach:
      "Analyzed high-performing thumbnail patterns, A/B tested facial expressions and text overlays.",
    execution:
      "Bold typography, high-contrast backgrounds, emotion-driven layouts.",
    result: "CTR improved from 3.2% to 8.7% within 60 days.",
    feedback:
      "Shivangi's thumbnails transformed our channel growth completely.",
    client: "EdTech Client",
    metric: "8.7% CTR",
  },
  {
    id: 2,
    title: "Cafe Branding & Menu Design",
    tag: "Branding / Print",
    objective: "Create cohesive brand identity for a Lucknow cafe.",
    approach: "Mood-board driven, vintage-modern aesthetic with warm palette.",
    execution: "Custom logo, menu cards, social media templates, standees.",
    result: "40% increase in social media engagement post-launch.",
    feedback: "The brand identity she created was exactly our vision.",
    client: "Cafe Owner",
    metric: "+40% Engagement",
  },
  {
    id: 3,
    title: "Hotel Social Media Campaign",
    tag: "Social / Ads",
    objective: "Drive bookings through Instagram ad creatives.",
    approach:
      "Luxury aesthetic with strong CTA placement and seasonal promotions.",
    execution: "Ad banners, carousel creatives, story templates.",
    result: "2.3x ROAS on paid campaigns, 65% increase in direct inquiries.",
    feedback: "Our Instagram went from dull to stunning overnight.",
    client: "Hotel Marketing Head",
    metric: "2.3x ROAS",
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
  { value: "8.7%", label: "Peak CTR" },
  { value: "2.3x", label: "ROAS" },
  { value: "65%", label: "Engagement Lift" },
  { value: "50+", label: "Projects Delivered" },
];

const TESTIMONIALS = [
  {
    id: "rahul",
    quote:
      "Shivangi's thumbnails transformed our channel. CTR doubled in 2 months.",
    name: "Rahul Sharma",
    role: "EdTech Founder",
    initials: "RS",
  },
  {
    id: "priya",
    quote:
      "The branding she delivered was strategic, not just pretty. Real results.",
    name: "Priya Mehta",
    role: "Cafe Owner, Lucknow",
    initials: "PM",
  },
  {
    id: "amit",
    quote:
      "Her ad creatives drove actual bookings. Best design investment we made.",
    name: "Amit Verma",
    role: "Hotel Marketing Head",
    initials: "AV",
  },
];

const ABOUT_STATS = [
  { val: "6+", sub: "Years" },
  { val: "50+", sub: "Projects" },
  { val: "20+", sub: "Brands" },
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
            SHIVANGI &bull; SENIOR GRAPHIC DESIGNER
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
                Portfolio 2024
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h1 className="font-display font-black text-7xl md:text-8xl lg:text-9xl leading-none mb-4 yellow-text-glow">
              <span className="text-primary">SHIVANGI</span>
            </h1>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground/80 mb-6 tracking-widest">
              SENIOR GRAPHIC DESIGNER
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-3">
              I design visuals that don&apos;t just look good &mdash;{" "}
              <span className="text-primary font-semibold">they perform.</span>
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm mb-10">
              <MapPin size={14} className="text-primary" />
              Lucknow, India
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                data-ocid="hero.works.button"
                onClick={() => scrollTo("works")}
                className="bg-primary text-primary-foreground font-display font-black uppercase tracking-widest px-8 py-6 text-sm rounded-full yellow-glow hover:bg-primary/90"
              >
                VIEW WORKS <ChevronRight size={16} className="ml-1" />
              </Button>
              <Button
                data-ocid="hero.cv.button"
                variant="outline"
                className="border-foreground/40 text-foreground font-display font-black uppercase tracking-widest px-8 py-6 text-sm rounded-full hover:bg-foreground/5"
              >
                DOWNLOAD CV
              </Button>
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
                  6+ years of experience
                </span>{" "}
                since 2018, I&apos;ve partnered with brands across edtech,
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
              className="grid grid-cols-2 gap-4"
            >
              {ABOUT_STATS.map((s) => (
                <div
                  key={s.sub}
                  className="bg-card border border-border rounded-xl p-6 card-hover text-center"
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
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-card border border-border rounded-xl p-5 flex flex-col items-center gap-2 card-hover"
                >
                  <span className="text-3xl">{tool.emoji}</span>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {CASE_STUDIES.map((cs, i) => (
                <motion.article
                  key={cs.id}
                  data-ocid={`works.item.${i + 1}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col"
                >
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                    <span className="font-display font-black text-6xl text-primary/10 select-none absolute">
                      {cs.id.toString().padStart(2, "0")}
                    </span>
                    <Badge className="relative z-10 bg-primary text-primary-foreground font-display text-xs uppercase tracking-wider">
                      {cs.tag}
                    </Badge>
                    <div className="absolute top-3 right-3 bg-primary/10 border border-primary/30 rounded-lg px-3 py-1">
                      <span className="text-primary font-display font-black text-sm">
                        {cs.metric}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <h3 className="font-display font-black text-lg text-foreground leading-tight">
                      {cs.title}
                    </h3>
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
                            className={`mt-1 ${bold ? "text-foreground font-semibold" : "text-muted-foreground"}`}
                          >
                            {v}
                          </p>
                        </div>
                      ))}
                    </div>
                    <blockquote className="border-l-2 border-primary pl-4 mt-auto">
                      <p className="text-muted-foreground text-sm italic">
                        &ldquo;{cs.feedback}&rdquo;
                      </p>
                      <footer className="text-primary text-xs mt-1 font-semibold">
                        &mdash; {cs.client}
                      </footer>
                    </blockquote>
                  </div>
                </motion.article>
              ))}
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

        {/* PROOF / TESTIMONIALS */}
        <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionDivider />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <SectionLabel>Proof of Work</SectionLabel>
            <h2 className="font-display font-black text-4xl md:text-5xl mb-10">
              RESULTS THAT <span className="text-primary">SPEAK</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  data-ocid={`proof.item.${i + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-primary/10 border border-primary/30 rounded-xl p-6 text-center yellow-glow"
                >
                  <div className="font-display font-black text-4xl text-primary mb-1">
                    {s.value}
                  </div>
                  <div className="font-body text-muted-foreground text-xs uppercase tracking-widest">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-16">
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
            {/* Before / After */}
            <div>
              <h3 className="font-display font-black text-2xl mb-6">
                BEFORE <span className="text-primary">/</span> AFTER
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-2xl border border-border overflow-hidden">
                  <div
                    className="h-48 flex flex-col items-center justify-center gap-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%)",
                    }}
                  >
                    <div className="text-[#888] font-body text-sm">
                      Generic thumbnail
                    </div>
                    <div className="bg-[#555] rounded px-6 py-2 text-[#aaa] font-body text-xs uppercase">
                      Episode 42
                    </div>
                    <div className="text-[#777] font-body text-xs">
                      Low contrast &middot; No hierarchy
                    </div>
                  </div>
                  <div className="bg-card p-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                    <span className="font-display font-black text-xs text-muted-foreground uppercase tracking-widest">
                      Before &mdash; 3.2% CTR
                    </span>
                  </div>
                </div>
                <div className="rounded-2xl border border-primary/50 overflow-hidden yellow-glow">
                  <div
                    className="h-48 flex flex-col items-center justify-center gap-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #0B0D0F 0%, #1a1400 100%)",
                    }}
                  >
                    <div
                      className="text-primary font-display font-black text-2xl uppercase"
                      style={{ textShadow: "0 0 20px #FFC400" }}
                    >
                      THE SECRET
                    </div>
                    <div className="bg-primary rounded px-6 py-2 text-primary-foreground font-display font-black text-sm uppercase tracking-wider">
                      WATCH NOW &rarr;
                    </div>
                    <div className="text-foreground/60 font-body text-xs">
                      Bold &middot; Emotional &middot; High-contrast
                    </div>
                  </div>
                  <div className="bg-card p-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-display font-black text-xs text-primary uppercase tracking-widest">
                      After &mdash; 8.7% CTR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CONTACT / CLOSING */}
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
            <div className="flex flex-wrap justify-center gap-5 mb-12">
              <a
                data-ocid="contact.email.link"
                href="mailto:shivangi.designs@gmail.com"
                className="flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 text-sm font-body hover:border-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                shivangi.designs@gmail.com
              </a>
              <a
                data-ocid="contact.phone.link"
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 text-sm font-body hover:border-primary transition-colors"
              >
                <Phone size={16} className="text-primary" />
                +91 XXXXX XXXXX
              </a>
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 text-sm font-body">
                <MapPin size={16} className="text-primary" />
                Lucknow, India
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-16">
              <a
                data-ocid="contact.linkedin.link"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                data-ocid="contact.behance.link"
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Behance"
              >
                <Globe size={18} />
              </a>
              <a
                data-ocid="contact.instagram.link"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            <Button
              data-ocid="contact.cta.button"
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground font-display font-black uppercase tracking-widest px-12 py-6 text-base rounded-full yellow-glow hover:bg-primary/90"
            >
              START A PROJECT
            </Button>
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
