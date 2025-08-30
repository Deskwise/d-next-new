'use client';
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: PillNavItem[];
  className?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  initialLoadAnimation?: boolean;
}

const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
  baseColor = "#fff",
  pillColor = "#060010",
  hoveredPillTextColor = "#060010",
  pillTextColor,
  initialLoadAnimation = true,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [triangleIndex, setTriangleIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const pillRefs = useRef<(HTMLLIElement | null)[]>([]);
  
  const logoRotation = useMotionValue(0);
  const springRotation = useSpring(logoRotation, { stiffness: 400, damping: 30 });

  // Buttery smooth triangle animation - slower & more luxurious
  const triangleX = useMotionValue(0);
  const springTriangleX = useSpring(triangleX, { stiffness: 200, damping: 30 });

  // Find active index for fallback position
  const activeIndex = items.findIndex(item => item.href === pathname);

  // Update triangle position based on hover or active state with precise measurements
  useEffect(() => {
    const targetIndex = triangleIndex !== null ? triangleIndex : activeIndex;
    if (targetIndex >= 0 && pillRefs.current[targetIndex]) {
      const pill = pillRefs.current[targetIndex];
      const navContainer = pill?.parentElement?.parentElement;
      
      if (pill && navContainer) {
        const pillRect = pill.getBoundingClientRect();
        const navRect = navContainer.getBoundingClientRect();
        const offset = pillRect.left - navRect.left + (pillRect.width / 2);
        triangleX.set(offset);
      }
    }
  }, [triangleIndex, activeIndex, triangleX, items]);

  const handleLogoEnter = () => {
    logoRotation.set(360);
  };

  const handleLogoLeave = () => {
    logoRotation.set(0);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isExternalLink = (href: string) =>
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: resolvedPillTextColor,
    ["--nav-h"]: "28px",
    ["--logo"]: "24px", 
    ["--pill-pad-x"]: "12px",
    ["--pill-gap"]: "2px",
  } as React.CSSProperties;

  return (
    <nav
      className={`w-max flex items-center justify-start box-border ${className}`}
      aria-label="Primary"
      style={cssVars}
    >

        {/* Desktop Navigation */}
        <div
          className="relative items-center rounded-full hidden md:flex ml-2"
          style={{
            height: "var(--nav-h)",
            background: "var(--base, #000)",
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: "var(--pill-gap)" }}
          >
            {items.map((item, i) => {
              const isActive = pathname === item.href;

              const pillStyle: React.CSSProperties = {
                background: (hoveredIndex === i || isActive) ? "#ffffff" : "var(--pill-bg, #fff)",
                color: (hoveredIndex === i || isActive) ? "#04070C" : "var(--pill-text, var(--base, #000))",
                paddingLeft: "var(--pill-pad-x)",
                paddingRight: "var(--pill-pad-x)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                transition: "background-color 0.2s ease, color 0.2s ease",
              };

              const basePillClasses =
                "relative overflow-visible inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-xs leading-[0] tracking-[0.2px] whitespace-nowrap cursor-pointer px-0";

              return (
                <li 
                  key={item.href} 
                  role="none" 
                  className="flex h-full"
                  ref={(el) => { pillRefs.current[i] = el; }}
                >
                  <motion.div
                    className="relative h-full"
                    transition={{ duration: 0.2 }}
                  >
                    {/* Massive invisible hover zone */}
                    <div
                      className="absolute inset-x-0 -inset-y-8 z-20"
                      onMouseEnter={() => {
                        setHoveredIndex(i);
                        setTriangleIndex(i);
                      }}
                      onMouseLeave={() => {
                        setHoveredIndex(null);
                        setTriangleIndex(null);
                      }}
                      style={{
                        left: '-16px',
                        right: '-16px',
                        top: '-32px',
                        bottom: '-32px',
                      }}
                    />
                    {isExternalLink(item.href) ? (
                      <a
                        role="menuitem"
                        href={item.href}
                        className={basePillClasses}
                        style={pillStyle}
                        aria-label={item.ariaLabel || item.label}
                      >
                        <span className="relative z-[2] inline-block leading-[1]">
                          {item.label}
                        </span>
                      </a>
                    ) : (
                      <Link
                        role="menuitem"
                        href={item.href}
                        className={basePillClasses}
                        style={pillStyle}
                        aria-label={item.ariaLabel || item.label}
                      >
                        <span className="relative z-[2] inline-block leading-[1]">
                          {item.label}
                        </span>
                      </Link>
                    )}
                  </motion.div>
                </li>
              );
            })}
          </ul>
          
          {/* Buttery Smooth Sliding Triangle */}
          <motion.div
            className="absolute -bottom-[8px] z-[10]"
            style={{
              x: springTriangleX,
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent", 
              borderBottom: "6px solid #ffffff",
              transformOrigin: "center bottom",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: activeIndex >= 0 || triangleIndex !== null ? 1 : 0 }}
            transition={{ 
              scale: { duration: 0.3 },
            }}
          />
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative"
          style={{
            width: "var(--nav-h)",
            height: "var(--nav-h)",
            background: "var(--base, #000)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="w-4 h-0.5 rounded origin-center"
            style={{ background: "var(--pill-bg, #fff)" }}
            animate={isMobileMenuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-4 h-0.5 rounded origin-center"
            style={{ background: "var(--pill-bg, #fff)" }}
            animate={isMobileMenuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Mobile Menu */}
      <motion.div
        className="md:hidden absolute top-[3em] left-4 right-4 rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-[998] origin-top"
        style={{
          ...cssVars,
          background: "var(--base, #f0f0f0)",
        }}
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={isMobileMenuOpen ? 
          { opacity: 1, y: 0, scale: 1, visibility: "visible" } : 
          { opacity: 0, y: 10, scale: 0.95, visibility: "hidden" }
        }
        transition={{ duration: 0.3 }}
      >
        <ul className="list-none m-0 p-[3px] flex flex-col gap-[3px]">
          {items.map((item) => {
            const linkClasses =
              "block py-3 px-4 text-[16px] font-medium rounded-[50px] transition-all duration-200";

            const linkStyle: React.CSSProperties = {
              background: "var(--pill-bg, #fff)",
              color: "var(--pill-text, #fff)",
            };

            return (
              <motion.li key={item.href} whileHover={{ scale: 1.02 }}>
                {isExternalLink(item.href) ? (
                  <a
                    href={item.href}
                    className={linkClasses}
                    style={linkStyle}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={linkClasses}
                    style={linkStyle}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </nav>
  );
};

export default PillNav;