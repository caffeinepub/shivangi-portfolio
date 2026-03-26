import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const CASE_STUDY = {
  objective: "Create high-impact print collateral for brands.",
  approach:
    "Mood-board driven layouts with brand-consistent palettes and typography.",
  execution:
    "Brochures, menu cards, hoardings, and standees tailored to each brand.",
  result: "Improved brand perception and offline engagement.",
};

interface PrintDesignPageProps {
  onBack: () => void;
}

export default function PrintDesignPage({ onBack }: PrintDesignPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <button
          type="button"
          data-ocid="print.back.button"
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm tracking-widest uppercase group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          BACK TO PORTFOLIO
        </button>
      </div>

      {/* Hero Header */}
      <section className="pt-8 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary text-xs font-bold tracking-widest uppercase font-body">
              PORTFOLIO
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h1 className="font-display font-black text-4xl md:text-6xl leading-tight mb-2">
            Print Design
          </h1>
          <h2 className="font-display font-bold text-xl md:text-2xl text-primary yellow-text-glow mb-4">
            Brochures, Menu Cards, Hoardings
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-xl">
            High-impact print collateral designed for brand visibility and
            offline engagement.
          </p>
        </motion.div>
      </section>

      {/* Case Study Details */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-display font-black text-2xl md:text-3xl mb-8">
            CASE STUDY <span className="text-primary">BREAKDOWN</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { k: "Objective", v: CASE_STUDY.objective },
              { k: "Approach", v: CASE_STUDY.approach },
              { k: "Execution", v: CASE_STUDY.execution },
              { k: "Result", v: CASE_STUDY.result },
            ].map(({ k, v }, i) => (
              <motion.div
                key={k}
                data-ocid={`print.case.item.${i + 1}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l-2 border-primary pl-5"
              >
                <span className="text-primary font-semibold uppercase tracking-wider text-xs font-body block mb-2">
                  {k}
                </span>
                <p
                  className={`font-body text-base leading-relaxed ${
                    k === "Result"
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground"
                  }`}
                >
                  {v}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <div className="border-t border-border pt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              data-ocid="print.cta.section"
              className="font-body text-muted-foreground text-xl md:text-2xl mb-8 leading-relaxed"
            >
              Have a print project in mind?
            </p>
            <a
              href="mailto:shivangi1065@gmail.com"
              data-ocid="print.cta.button"
            >
              <Button className="bg-primary text-primary-foreground font-display font-black uppercase tracking-widest px-10 py-6 text-sm rounded-full yellow-glow hover:bg-primary/90">
                START A PROJECT <ChevronRight size={16} className="ml-1" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
