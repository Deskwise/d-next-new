You are operating on Ubuntu as a competent DevOps/codegen assistant with full shell access. 
Your job: rebuild a Landio-style marketing site for “Archy” that is fully self-hosted (no Framer runtime), using the user’s legally licensed Landio assets (images/videos/fonts/icons/CSS/Lottie) and recreating motion with open-source libs. 
Constraints: 
- Output must be a Next.js (App Router) + TypeScript + Tailwind repo that runs on a VPS. 
- Use Motion (motion.dev) for reveals/hover; add GSAP only if needed later (we will install it now). 
- Keep everything deterministic and idempotent. If a target directory exists, fail with a clear message. 
- Include a footer attribution per the license. 
- Do not ask questions; do all steps below exactly. 
- Log every step with clear ▶/✅/⚠ messages. 
Environment assumptions:
- Node 20+ present.
- Project root: /home/richard/code
- Project name: d-next
- Landio export folder available on disk as ASSET_SRC (set below).

TASKS (do these exactly):
1) Create and run a bootstrap script that:
   - Scaffolds Next.js with TS/Tailwind/App Router.
   - Installs deps: motion, gsap, embla-carouYou are operating on Ubuntu as a competent DevOps/codegen assistant with full shell access. 
Your job: rebuild a Landio-style marketing site for “Archy” that is fully self-hosted (no Framer runtime), using the user’s legally licensed Landio assets (images/videos/fonts/icons/CSS/Lottie) and recreating motion with open-source libs. 
Constraints: 
- Output must be a Next.js (App Router) + TypeScript + Tailwind repo that runs on a VPS. 
- Use Motion (motion.dev) for reveals/hover; add GSAP only if needed later (we will install it now). 
- Keep everything deterministic and idempotent. If a target directory exists, fail with a clear message. 
- Include a footer attribution per the license. 
- Do not ask questions; do all steps below exactly. 
- Log every step with clear ▶/✅/⚠ messages. 
Environment assumptions:
- Node 20+ present.
- Project root: /home/richard/code
- Project name: d-next
- Landio export folder available on disk as ASSET_SRC (set below).

TASKS (do these exactly):
1) Create and run a bootstrap script that:
   - Scaffolds Next.js with TS/Tailwind/App Router.
   - Installs deps: motion, gsap, embla-carousel-react, react-fast-marquee, lenis, lottie-react.
   - Creates key files: app/layout.tsx, app/lenis-provider.tsx, app/page.tsx, components/Hero.tsx, components/LogoMarquee.tsx, components/SiteFooter.tsx.
   - Prepend global CSS imports for optional tokens/base CSS.
   - Creates public/{images,icons,fonts,styles,videos}.
   - Optionally copies assets from $ASSET_SRC/{images,icons,fonts,styles,videos} if those subfolders exist.
   - Prints next steps.
2) Run the script once with ASSET_SRC set.
3) After success, list the resulting tree and show how to run dev/build.

Now create this file EXACTLY and then execute it:

# WRITE FILE: /home/richard/code/bootstrap-archy.sh
# CONTENTS START
#!/usr/bin/env bash
set -euo pipefail

APP_ROOT="/home/richard/code"
APP_NAME="d-next"
APP_DIR="$APP_ROOT/$APP_NAME"
ASSET_SRC="${ASSET_SRC:-}"   # e.g. /home/richard/landio-export

echo "▶ Bootstrapping Archy site at $APP_DIR"
mkdir -p "$APP_ROOT"
cd "$APP_ROOT"

if ! command -v node >/dev/null 2>&1; then
  echo "⚠ Node.js not found. Install Node 20+ and re-run."; exit 1
fi

if [ -d "$APP_DIR" ]; then
  echo "⚠ $APP_DIR already exists. Remove it or change APP_NAME."; exit 1
fi

npx --yes create-next-app@latest "$APP_NAME" --ts --eslint --tailwind --app
cd "$APP_DIR"

npm i motion gsap embla-carousel-react react-fast-marquee lenis lottie-react

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

mkdir -p components
cat > components/Hero.tsx <<'TSX'
'use client';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"  // replace with your actual filename
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

# Prepend optional token/base CSS imports
perl -0777 -pe 'BEGIN{undef $/} s/^/@import url("\/styles\/fonts.css");\n@import url("\/styles\/landio-tokens.css");\n@import url("\/styles\/landio-base.css");\n/s' app/globals.css > app/globals.css.tmp && mv app/globals.css.tmp app/globals.css

mkdir -p public/{images,icons,fonts,styles,videos}

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
# CONTENTS END

# EXECUTE:
chmod +x /home/richard/code/bootstrap-archy.sh
ASSET_SRC="/home/richard/landio-export" bash /home/richard/code/bootstrap-archy.sh

# POST: Show the resulting structure
echo "▶ Project tree:"
cd /home/richard/code/d-next && find . -maxdepth 3 -type f | sort | sed 's|^\./||'
echo "✅ Done."
sel-react, react-fast-marquee, lenis, lottie-react.
   - Creates key files: app/layout.tsx, app/lenis-provider.tsx, app/page.tsx, components/Hero.tsx, components/LogoMarquee.tsx, components/SiteFooter.tsx.
   - Prepend global CSS imports for optional tokens/base CSS.
   - Creates public/{images,icons,fonts,styles,videos}.
   - Optionally copies assets from $ASSET_SRC/{images,icons,fonts,styles,videos} if those subfolders exist.
   - Prints next steps.
2) Run the script once with ASSET_SRC set.
3) After success, list the resulting tree and show how to run dev/build.

Now create this file EXACTLY and then execute it:

# WRITE FILE: /home/richard/code/bootstrap-archy.sh
# CONTENTS START
#!/usr/bin/env bash
set -euo pipefail

APP_ROOT="/home/richard/code"
APP_NAME="d-next"
APP_DIR="$APP_ROOT/$APP_NAME"
ASSET_SRC="${ASSET_SRC:-}"   # e.g. /home/richard/landio-export

echo "▶ Bootstrapping Archy site at $APP_DIR"
mkdir -p "$APP_ROOT"
cd "$APP_ROOT"

if ! command -v node >/dev/null 2>&1; then
  echo "⚠ Node.js not found. Install Node 20+ and re-run."; exit 1
fi

if [ -d "$APP_DIR" ]; then
  echo "⚠ $APP_DIR already exists. Remove it or change APP_NAME."; exit 1
fi

npx --yes create-next-app@latest "$APP_NAME" --ts --eslint --tailwind --app
cd "$APP_DIR"

npm i motion gsap embla-carousel-react react-fast-marquee lenis lottie-react

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

mkdir -p components
cat > components/Hero.tsx <<'TSX'
'use client';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"  // replace with your actual filename
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

# Prepend optional token/base CSS imports
perl -0777 -pe 'BEGIN{undef $/} s/^/@import url("\/styles\/fonts.css");\n@import url("\/styles\/landio-tokens.css");\n@import url("\/styles\/landio-base.css");\n/s' app/globals.css > app/globals.css.tmp && mv app/globals.css.tmp app/globals.css

mkdir -p public/{images,icons,fonts,styles,videos}

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
# CONTENTS END

# EXECUTE:
chmod +x /home/richard/code/bootstrap-archy.sh
ASSET_SRC="/home/richard/landio-export" bash /home/richard/code/bootstrap-archy.sh

# POST: Show the resulting structure
echo "▶ Project tree:"
cd /home/richard/code/d-next && find . -maxdepth 3 -type f | sort | sed 's|^\./||'
echo "✅ Done."
