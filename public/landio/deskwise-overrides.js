(function deskwiseOverrides(){
  // Add a flag to prevent infinite loops
  let assetsRedirected = false;
  let observerActive = false;

  const replacements = [
    { selector: '[data-framer-component-type="RichTextContainer"]', from: /Automate Smarter/gi, to: 'Fix the question.' },
    { selector: '[data-framer-component-type="RichTextContainer"]', from: /Grow Faster/gi, to: 'Ship the proof.' },
    { selector: '[data-framer-component-type="RichTextContainer"]', from: /\bWith AI\b/gi, to: 'Listening‑First Decision Lab' },
    { selector: 'a, p, h1, h2, h3, h4, h5, h6, span', from: /Get Template/gi, to: 'Book A Free Call' },
    { selector: 'a, p, h1, h2, h3, h4, h5, h6, span', from: /©\s*2025\s*Landio Template/gi, to: '© 2025 Deskwise' },
    { selector: 'a, nav, p, span', from: /\bServices\b/gi, to: 'Why' },
    { selector: 'a, nav, p, span', from: /\bProcess\b/gi, to: 'Method' },
    { selector: 'a, nav, p, span', from: /\bPricing\b/gi, to: 'Plans' },
    { selector: 'a, nav, p, span', from: /\bBlog\b/gi, to: 'Proof' },

    // exact heading replacements (avoid affecting inline words like "Features")
    { selector: 'p, h2, h3, span', from: /^BENEFITS$/i, to: 'WHY WE\'RE DIFFERENT' },
    { selector: 'h2, h3', from: /^Why Choose Us\?$/i, to: 'Why We\'re Different' },
    { selector: 'p, h2, h3, span', from: /^SERVICES$/i, to: 'THE METHOD' },
    { selector: 'h2, h3', from: /^Smarter Services,.*Listening‑First Decision Lab$/i, to: 'The Method (Listen→Proof™)' },
    { selector: 'p, h2, h3, span', from: /^FEATURES$/i, to: 'WHAT\'S UNDER THE HOOD' },
    { selector: 'h2, h3', from: /^All features in one place$/i, to: 'What\'s Under the Hood' },
    { selector: 'p, h2, h3, span', from: /^PROCESS$/i, to: 'METHOD' },
    { selector: 'h2, h3', from: /^Our Simple \& Smart Process$/i, to: 'Our Simple & Smart Method' },
    { selector: 'p, h2, h3, span', from: /^PRICING$/i, to: 'PLANS & PAYMENTS' },
    { selector: 'h2, h3', from: /^Flexible Plans for Everyone$/i, to: 'Choose clarity now. Upgrade anytime.' },
    { selector: 'p, span', from: /^Choose a plan that fits your goals and scale as you grow$/i, to: 'Start with a reversible step. If we don\'t find a 5‑figure lever in your X‑Ray, you don\'t pay.' },

    // fix any accidental collisions
    { selector: 'p, h1, h2, h3, span', from: /Advanced AI Assistant WHAT'S UNDER THE HOOD/gi, to: 'Advanced AI Assistant Features' },

    // email normalization
    { selector: 'a, p, h1, h2, h3, h4, h5, h6, span', from: /landio@support\.com/gi, to: 'info@deskwise.com' },
    { selector: 'a[href^="mailto:"]', from: /mailto:landio@support\.com/gi, to: 'mailto:info@deskwise.com' },
    { selector: 'a[href*="__cf_email__"]', from: /\[email\s*&#160;protected\]/gi, to: 'info@deskwise.com' }
  ];

  const applyReplacements = () => {
    let changed = false;
    for (const { selector, from, to } of replacements) {
      document.querySelectorAll(selector).forEach((el) => {
        const before = el.innerHTML;
        const after = before.replace(from, to);
        if (after !== before) {
          el.innerHTML = after;
          changed = true;
        }
      });
    }

    // Route external links and "Book A Free Call" to local contact stub; normalize emails
    document.querySelectorAll('a[href]').forEach((a) => {
      const label = (a.textContent || '').trim().toLowerCase();
      const href = a.getAttribute('href') || '';

      // Normalize obfuscated Cloudflare email links
      if (a.classList.contains('__cf_email__') || href.startsWith('/cdn-cgi/')) {
        a.textContent = 'info@deskwise.com';
        a.setAttribute('href', 'mailto:info@deskwise.com');
        a.removeAttribute('data-cfemail');
        a.classList.remove('__cf_email__');
        return;
      }

      // Normalize any mailto
      if (/^mailto:/i.test(href)) {
        a.setAttribute('href', 'mailto:info@deskwise.com');
        a.textContent = 'info@deskwise.com';
        return;
      }

      // Skip known CDN/editor links unless explicitly the editor button we already remove
      const isFramerCdn = /framerusercontent\.com|framer\.website/i.test(href);
      const isEditor = /^edit\s*landio$/i.test(label);
      if (isFramerCdn && !isEditor) return;

      const isExternal = /^https?:\/\//i.test(href);
      const isCTA = /book\s*a\s*free\s*call/i.test(label);
      if (isExternal || isCTA) {
        a.setAttribute('href', '/contact');
        a.removeAttribute('target');
        a.removeAttribute('rel');
      }
    });

    return changed;
  };

  const applyMeta = () => {
    try {
      document.title = 'Fix the Question. Ship the Proof. | Listening‑First Decision Lab';
      let m = document.querySelector('meta[name="description"]');
      if (!m) {
        m = document.createElement('meta');
        m.setAttribute('name', 'description');
        document.head.appendChild(m);
      }
      m.setAttribute('content', 'We listen first, diagnose the real decision, then ship a proof you can deploy. Executive X‑Ray, Proof Sprint, and ResearchOps retainers. One conversation. Ten expert lenses.');
    } catch {}
  };

  const removeEditButtons = () => {
    try {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        const txt = (el.textContent || '').trim();
        if (/^edit\s*landio$/i.test(txt)) {
          el.remove();
        }
      });
    } catch {}
  };

  const blockFramerAPI = () => {
    try {
      // Block Framer API calls that cause 404s and spinning
      const originalFetch = window.fetch;
      window.fetch = function(...args) {
        const url = args[0];
        if (typeof url === 'string' && url.includes('api.framer.com')) {
          console.log('🚫 Blocked Framer API call:', url);
          return Promise.resolve(new Response('{}', { status: 200 }));
        }
        return originalFetch.apply(this, args);
      };
      
      // Block XMLHttpRequest calls too
      const originalXHROpen = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function(method, url, ...args) {
        if (typeof url === 'string' && url.includes('api.framer.com')) {
          console.log('🚫 Blocked Framer XHR call:', url);
          this.abort();
          return;
        }
        return originalXHROpen.apply(this, [method, url, ...args]);
      };
      
      console.log('🔒 Framer API calls blocked');
    } catch (error) {
      console.error('❌ Error blocking Framer API:', error);
    }
  };

  const redirectExternalAssets = () => {
    // Prevent infinite loops
    if (assetsRedirected) {
      return;
    }

    try {
      console.log('🔧 Redirecting external assets...');
      let redirected = 0;
      
      // Redirect all external Framer assets to local paths
      document.querySelectorAll('img[src*="framerusercontent.com"], video[src*="framerusercontent.com"]').forEach((el) => {
        const src = el.getAttribute('src');
        if (!src) return;
        
        // Extract filename from URL
        const urlParts = src.split('/');
        const filename = urlParts[urlParts.length - 1].split('?')[0]; // Remove query params
        
        console.log(`📁 Found external asset: ${filename}`);
        
        // Redirect to local paths
        if (filename.endsWith('.mp4')) {
          el.src = `/landio/videos/${filename}`;
          console.log(`🎥 Redirected video: ${filename}`);
          redirected++;
        } else if (filename.endsWith('.svg')) {
          el.src = `/landio/icons/${filename}`;
          console.log(`🎨 Redirected icon: ${filename}`);
          redirected++;
        } else if (filename.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
          el.src = `/landio/images/${filename}`;
          console.log(`🖼️ Redirected image: ${filename}`);
          redirected++;
        }
      });
      
      console.log(`✅ Redirected ${redirected} external assets to local paths`);
      
      // Mark as redirected to prevent infinite loops
      if (redirected > 0) {
        assetsRedirected = true;
      }
    } catch (error) {
      console.error('❌ Error redirecting assets:', error);
    }
  };

  const applyLogo = () => {
    try {
      const candidates = Array.from(document.querySelectorAll('a[href*="#hero"] img'));
      if (!candidates.length) return;
      // Choose the one closest to the top (header), leave footer intact
      const headerImg = candidates.reduce((best, el) => {
        const rect = el.getBoundingClientRect();
        return (!best || rect.top < best.rect.top) ? { el, rect } : best;
      }, null)?.el;
      if (headerImg) {
        headerImg.src = '/images/Deskwise_logo.svg';
        headerImg.alt = 'Deskwise logo';
        headerImg.style.filter = 'drop-shadow(0 0 4px rgba(148, 191, 255, 0.95)) drop-shadow(0 0 10px rgba(148, 191, 255, 0.6))';
        headerImg.style.mixBlendMode = 'normal';
      }
      // Inject CSS once for robustness (idempotent)
      if (!document.getElementById('deskwise-logo-glow-style')) {
        const style = document.createElement('style');
        style.id = 'deskwise-logo-glow-style';
        style.textContent = 'img[src$="Deskwise_logo.svg"]{image-rendering:auto;}';
        document.head.appendChild(style);
      }
    } catch {}
  };

  const start = () => {
    blockFramerAPI(); // Block API calls first
    applyMeta();
    applyReplacements();
    removeEditButtons();
    applyLogo();
    redirectExternalAssets();
    
    // Only set up observer if not already active
    if (!observerActive) {
      const target = document.getElementById('main') || document.body;
      const mo = new MutationObserver((mutations) => {
        // Only run replacements and logo updates, skip asset redirection to prevent loops
        let shouldUpdate = false;
        mutations.forEach(mutation => {
          if (mutation.type === 'childList' || mutation.type === 'characterData') {
            shouldUpdate = true;
          }
        });
        
        if (shouldUpdate) {
          applyMeta();
          applyReplacements();
          removeEditButtons();
          applyLogo();
          // Don't call redirectExternalAssets() here to prevent infinite loops
        }
      });
      mo.observe(target, { childList: true, subtree: true, characterData: true });
      observerActive = true;
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
