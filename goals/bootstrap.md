# 1) Save the script
cat <<'EOF' > /home/richard/code/bootstrap-archy.sh
#!/usr/bin/env bash
set -euo pipefail

APP_ROOT="/home/richard/code"
APP_NAME="d-next"
APP_DIR="$APP_ROOT/$APP_NAME"
ASSET_SRC="${ASSET_SRC:-}"   # set to your Landio export path before running, e.g. ASSET_SRC=/home/richard/landio-export

echo "▶ Bootstrapping Archy site at $APP_DIR"
mkdir -p "$APP_ROOT"
cd "$APP_ROOT"

# Node check
if ! command -v node >/dev/null 2>&1; then
  echo "⚠ Node.js not found. Install Node 20+ and re-run."; exit 1
fi

# Create Next app (App Router + TS + Tailwind)
if [ -d "$APP_DIR" ]; then
  echo "⚠ $APP_DIR already exists. Remove it or change APP_NAME."; exit 1
fi

npx --yes create-next-app@latest "$APP_NAME" --ts --eslint --tailwind --app
cd "$APP_DIR"

# Deps: motion, gsap, carousel, marquee, smooth scroll, lottie
npm i motion gsap embla-carousel-react react-fast-marquee lenis lottie-react

# Lenis provider
cat > app/lenis-provider.tsx <<'TSX'
'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });
    let raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }, []);
  return <>{children}</>;
}
TSX

# Layout wrapper (inject Lenis)
cat > app/layout.tsx <<'TSX'
import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "./lenis-provider";

export const metadata: Metadata = {
  title: "Archy — AI Automation that Ships",
  description: "Self-hosted Landio-style site for Archy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
TSX

# Home page skeleton
mkdir -p components
cat > components/Hero.tsx <<'TSX'
'use client';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"       // replace with your actual filename
        autoPlay muted loop playsInline preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, easing: 'ease-out' }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl font-semibold text-white">Archy — AI Automation that Ships</h1>
          <p className="mt-6 text-lg text-white/80">
            Real-time intelligence, measurable impact, production-grade delivery.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#contact" className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90">Book a Call</a>
            <a href="#proof" className="rounded-xl border border-white/25 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">See Proof</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
TSX

cat > components/LogoMarquee.tsx <<'TSX'
export default function LogoMarquee({ logos }: { logos: string[] }) {
  return (
    <div className="overflow-hidden py-8">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {logos.concat(logos).map((src, i) => (
          <img key={i} src={src} alt="" className="mx-8 h-8 opacity-70" />
        ))}
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
TSX

cat > components/SiteFooter.tsx <<'TSX'
export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-20 py-8 text-center">
      <p className="text-xs text-white/50">
        Some design elements adapted from the Landio template by Author Name. Used with attribution.
      </p>
    </footer>
  );
}
TSX

cat > app/page.tsx <<'TSX'
import Hero from "@/components/Hero";
import SiteFooter from "@/components/SiteFooter";

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Hero />
      {/* TODO: add LogoMarquee, ValueProps, Features, Pricing, FAQ, etc. */}
      <SiteFooter />
    </main>
  );
}
TSX

# Prepend global CSS imports for tokens/base if you have them later
# (safe if files don't exist yet; you can add them after copying assets)
perl -0777 -pe 'BEGIN{undef $/} s/^/@import url("\/styles\/fonts.css");\n@import url("\/styles\/landio-tokens.css");\n@import url("\/styles\/landio-base.css");\n/s' app/globals.css > app/globals.css.tmp && mv app/globals.css.tmp app/globals.css

# Public assets
mkdir -p public/{images,icons,fonts,styles,videos}

# Optional: copy assets from your export (set ASSET_SRC env var before running)
if [ -n "${ASSET_SRC}" ] && [ -d "${ASSET_SRC}" ]; then
  echo "▶ Copying assets from ${ASSET_SRC}"
  for d in images icons fonts styles videos; do
    if [ -d "${ASSET_SRC}/${d}" ]; then
      cp -r "${ASSET_SRC}/${d}/." "public/${d}/"
    fi
  done
fi

echo "✅ Bootstrap complete."
echo "Next steps:"
echo "  1) Put your hero video at public/videos/hero.mp4 (or update components/Hero.tsx)."
echo "  2) Start dev server:  cd $APP_DIR && npm run dev"
echo "  3) Build & run prod:  npm run build && npm start"
EOF

# 2) Run it (set ASSET_SRC if you want it to copy from your export path)
chmod +x /home/richard/code/bootstrap-archy.sh
ASSET_SRC="/path/to/your/landio-export" bash /home/richard/code/bootstrap-archy.sh
