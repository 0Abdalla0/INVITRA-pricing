import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import {
  Check,
  Sparkles,
  Crown,
  Heart,
  PenLine,
  Mic,
  Download,
  Languages,
  Zap,
  LayoutDashboard,
  Film,
  Globe,
  Plus,
  MessageSquareQuote,
  CalendarClock,
  MapPin,
  Smartphone,
  ShieldCheck,
  CalendarHeart,
  Link2,
  Flower2,
} from "lucide-react";
import { FloralCorner, Sprig } from "@/components/FloralCorner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INVITRA Pricing — Digital Wedding Invitations" },
      {
        name: "description",
        content:
          "Choose the perfect digital wedding invitation package for your special day. Essential, Premium and Signature collections by INVITRA.",
      },
      { property: "og:title", content: "INVITRA Pricing" },
      {
        property: "og:description",
        content: "Digital wedding invitations crafted for your story.",
      },
    ],
  }),
  component: PricingPage,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className={`relative px-5 sm:px-8 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div variants={fadeUp} className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div className="flex items-center justify-center gap-3 text-gold">
          <Sprig className="h-3 w-12 opacity-70" />
          <span className="font-script text-2xl leading-none">{eyebrow}</span>
          <Sprig className="h-3 w-12 opacity-70 -scale-x-100" />
        </div>
      )}
      <h2 className="mt-3 font-serif-display text-4xl sm:text-5xl text-charcoal">{title}</h2>
      {subtitle && <p className="mt-4 text-charcoal/70 leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}

const packages = [
  {
    name: "Essential",
    price: "2,000",
    desc: "Choose from our signature invitation templates.",
    features: [
      "Couple names and event details",
      "RSVP form",
      "Countdown timer",
      "Google Maps location",
      "Mobile responsive",
      "Download invitation card",
      "1 revision round",
    ],
    cta: "Choose Essential",
    popular: false,
  },
  {
    name: "Premium",
    price: "3,500",
    desc: "Personalized invitation built within our premium framework.",
    features: [
      "Everything in Essential",
      "Customized colors and typography",
      "Photo gallery",
      "Background music",
      "Written note from the couple",
      "Additional custom sections",
      "2 revision rounds",
    ],
    cta: "Choose Premium",
    popular: true,
  },
  {
    name: "Signature",
    price: "5,000",
    desc: "Fully custom invitation designed around your story.",
    features: [
      "Everything in Premium",
      "Handwritten note support",
      "Voice message feature",
      "Premium animations",
      "Advanced personalization",
      "Priority support",
      "3 revision rounds",
    ],
    cta: "Choose Signature",
    popular: false,
  },
];

const addons = [
  { icon: PenLine, name: "Written Note", price: "150" },
  { icon: Heart, name: "Handwritten Note", price: "250" },
  { icon: Mic, name: "Voice Note", price: "350" },
  { icon: Download, name: "Downloadable Invitation Card", price: "250" },
  { icon: Languages, name: "Arabic + English Version", price: "500" },
  { icon: Zap, name: "Express Delivery (24 Hours)", price: "500" },
  { icon: LayoutDashboard, name: "RSVP Dashboard", price: "750" },
  { icon: Film, name: "Wedding Intro Animation", price: "750" },
  { icon: Globe, name: "Custom Domain", price: "500" },
  { icon: Plus, name: "Extra Section", price: "250" },
];

const included = [
  { icon: MessageSquareQuote, label: "RSVP Form" },
  { icon: CalendarClock, label: "Countdown Timer" },
  { icon: MapPin, label: "Google Maps Integration" },
  { icon: Smartphone, label: "Mobile Friendly Design" },
  { icon: ShieldCheck, label: "Secure Hosting" },
  { icon: CalendarHeart, label: "Personalized Event Info" },
  { icon: Link2, label: "Shareable Link" },
  { icon: Flower2, label: "Beautiful Wedding Theme" },
];

const terms = [
  "Delivery time depends on booking availability.",
  "50% deposit required before work begins.",
  "Remaining balance due before final delivery.",
  "Clients receive a live preview before launch.",
  "INVITRA may showcase designs in its portfolio unless requested otherwise.",
  "Personal information can be hidden before publication.",
];

function PricingPage() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal overflow-hidden">
      {/* HERO */}
      <header className="relative px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <FloralCorner className="pointer-events-none absolute -top-4 -left-4 w-40 sm:w-64 text-sage-deep/40" />
        <FloralCorner
          flip
          className="pointer-events-none absolute -top-4 -right-4 w-40 sm:w-64 text-sage-deep/40"
        />
        <FloralCorner className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 sm:w-96 rotate-180 text-gold/30" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-gold">
            <span className="h-px w-10 bg-gold/50" />
            <span className="font-script text-2xl leading-none">Invitra</span>
            <span className="h-px w-10 bg-gold/50" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-serif-display text-5xl sm:text-7xl leading-[1.05] text-charcoal"
          >
            INVITRA <span className="italic text-sage-deep">Pricing</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg text-charcoal/70 leading-relaxed max-w-xl mx-auto"
          >
            Choose the perfect digital wedding invitation package for your special day.
          </motion.p>

          <motion.p variants={fadeUp} className="mt-3 font-script text-2xl text-gold">
            crafted for your story
          </motion.p>
        </motion.div>
      </header>

      {/* PRICING */}
      <Section className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 lg:grid-cols-3 lg:items-stretch">
          {packages.map((p) => (
            <motion.article
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={[
                "relative flex flex-col rounded-3xl p-8 sm:p-10 transition-shadow",
                p.popular
                  ? "bg-sage/40 border border-gold/40 shadow-[var(--shadow-glow)] lg:scale-[1.04] lg:-my-2"
                  : "bg-card border border-border shadow-[var(--shadow-soft)]",
              ].join(" ")}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-ivory shadow-md">
                    <Crown className="h-3.5 w-3.5" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center">
                <p className="font-script text-2xl text-gold">{p.name}</p>
                <h3 className="mt-1 font-serif-display text-3xl sm:text-4xl text-charcoal">
                  {p.name} Invitation
                </h3>
                <div className="mt-6 flex items-baseline justify-center gap-1.5">
                  <span className="text-xs uppercase tracking-[0.2em] text-charcoal/60">EGP</span>
                  <span className="font-serif-display text-5xl sm:text-6xl text-charcoal">
                    {p.price}
                  </span>
                </div>
                <p className="mt-4 text-sm text-charcoal/70 leading-relaxed">{p.desc}</p>
              </div>

              <div className="my-7 flex items-center gap-3">
                <span className="h-px flex-1 bg-border" />
                <Flower2 className="h-3.5 w-3.5 text-gold/70" />
                <span className="h-px flex-1 bg-border" />
              </div>

              <ul className="space-y-3.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-charcoal/80">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sage/60 text-sage-deep">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={[
                  "mt-8 w-full rounded-full px-6 py-3.5 text-sm uppercase tracking-[0.18em] transition-all duration-300",
                  p.popular
                    ? "bg-gold text-ivory hover:bg-charcoal hover:shadow-lg"
                    : "border border-charcoal/80 text-charcoal hover:bg-charcoal hover:text-ivory",
                ].join(" ")}
              >
                {p.cta}
              </button>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* ADD-ONS */}
      <Section className="bg-beige/50 py-20 sm:py-28">
        <SectionTitle
          eyebrow="extras"
          title="Enhance Your Invitation"
          subtitle="Thoughtful add-ons to make every detail feel uniquely yours."
        />
        <motion.div
          variants={stagger}
          className="mx-auto mt-12 sm:mt-16 grid max-w-6xl gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {addons.map(({ icon: Icon, name, price }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-4 rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-soft)] transition-all hover:border-gold/50 hover:shadow-[var(--shadow-gold)]"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sage/40 text-sage-deep transition-colors group-hover:bg-gold/20 group-hover:text-gold">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-serif-display text-lg text-charcoal">{name}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-charcoal/55">
                  Add-on service
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-serif-display text-xl text-charcoal">{price}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">EGP</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* INCLUDED */}
      <Section className="py-20 sm:py-28">
        <SectionTitle
          eyebrow="every package"
          title="Included In Every Invitation"
          subtitle="The essentials your guests deserve — beautifully delivered every time."
        />
        <motion.div
          variants={stagger}
          className="mx-auto mt-12 sm:mt-16 grid max-w-5xl gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        >
          {included.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
            >
              <div className="grid h-14 w-14 place-items-center rounded-full bg-sage/40 text-sage-deep transition-colors group-hover:bg-gold/20 group-hover:text-gold">
                <Icon className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <p className="font-serif-display text-base sm:text-lg leading-snug text-charcoal">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* TERMS */}
      <Section className="pb-24 sm:pb-32">
        <motion.div
          variants={fadeUp}
          className="relative mx-auto max-w-3xl rounded-3xl border border-gold/40 bg-card p-8 sm:p-12 shadow-[var(--shadow-soft)]"
        >
          <div className="pointer-events-none absolute inset-3 rounded-[1.4rem] border border-gold/15" />
          <div className="relative">
            <div className="text-center">
              <Sprig className="mx-auto h-3 w-20 text-gold/60" />
              <h2 className="mt-4 font-serif-display text-3xl sm:text-4xl text-charcoal">
                Terms & Conditions
              </h2>
              <p className="mt-2 text-sm text-charcoal/60">A simple, transparent agreement</p>
            </div>
            <ul className="mt-8 space-y-4">
              {terms.map((t, i) => (
                <li
                  key={t}
                  className="flex items-start gap-4 text-sm sm:text-base text-charcoal/80 leading-relaxed"
                >
                  <span className="mt-1 font-script text-xl leading-none text-gold">{i + 1}.</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-beige/40 px-5 py-12 text-center">
        <p className="font-script text-3xl text-gold">Invitra</p>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-charcoal/60">
          Digital Wedding Invitations · Crafted for Your Story
        </p>
      </footer>
    </main>
  );
}
