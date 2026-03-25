import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const THUMBNAILS = [
  {
    id: 1,
    src: "/assets/uploads/thumbnail_1-019d2277-b83c-705b-94dc-f23a9877e80a-7.jpg",
    alt: "Thumbnail 1",
  },
  {
    id: 2,
    src: "/assets/uploads/thumbnail_2-019d2277-b82a-752a-a8e4-695ed7806c0e-6.jpg",
    alt: "Thumbnail 2",
  },
  {
    id: 3,
    src: "/assets/uploads/thumbnail_3-019d2277-b35f-72ca-b725-45637425ddd9-5.jpg",
    alt: "Thumbnail 3",
  },
  {
    id: 4,
    src: "/assets/uploads/thumbnail_4-019d2277-b348-728d-a9d6-57c6e35e078e-4.jpg",
    alt: "Thumbnail 4",
  },
  {
    id: 5,
    src: "/assets/uploads/thumbnail_5-019d2277-b25e-762c-9075-8db65726a6e9-2.jpg",
    alt: "Thumbnail 5",
  },
  {
    id: 6,
    src: "/assets/uploads/thumbnail_6-019d2277-bc12-72bb-98dc-df2223f887a3-9.png",
    alt: "Thumbnail 6",
  },
  {
    id: 7,
    src: "/assets/uploads/thumbnail_7-019d2277-b8f5-7232-8d19-e084d98bcd1d-8.jpg",
    alt: "Thumbnail 7",
  },
  {
    id: 8,
    src: "/assets/uploads/thumbnail_8-019d2277-b280-7179-92de-e436c7d1aa84-3.jpg",
    alt: "Thumbnail 8",
  },
];

interface YouTubeThumbnailsPageProps {
  onBack: () => void;
}

export default function YouTubeThumbnailsPage({
  onBack,
}: YouTubeThumbnailsPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <button
          type="button"
          data-ocid="thumbnails.back.button"
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
          <h1 className="font-display font-black text-4xl md:text-6xl leading-tight mb-4">
            YouTube Thumbnails{" "}
            <span className="text-primary yellow-text-glow">
              (High CTR Focused)
            </span>
          </h1>
          <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-xl">
            Designed to maximize clicks, engagement, and visual impact for
            educational content.
          </p>
        </motion.div>
      </section>

      {/* Thumbnails Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {THUMBNAILS.map((thumb, i) => (
            <motion.div
              key={thumb.id}
              data-ocid={`thumbnails.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="w-full aspect-video rounded-xl overflow-hidden group cursor-default bg-zinc-900 p-3"
              style={{
                boxShadow: "0 0 0 1px hsl(var(--border))",
                transition: "box-shadow 0.4s ease",
              }}
              whileHover={{
                boxShadow:
                  "0 0 20px rgba(250, 204, 21, 0.3), 0 0 0 1px hsl(var(--border))",
              }}
            >
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img
                  src={thumb.src}
                  alt={thumb.alt}
                  className="w-full h-full object-contain transition-transform duration-[400ms] ease-out group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
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
              data-ocid="thumbnails.cta.section"
              className="font-body text-muted-foreground text-xl md:text-2xl mb-8 leading-relaxed"
            >
              Want similar high-performing thumbnails for your channel?
            </p>
            <a
              href="mailto:shivangi1065@gmail.com"
              data-ocid="thumbnails.cta.button"
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
