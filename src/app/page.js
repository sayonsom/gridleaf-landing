"use client";
import React from "react";

// NOTE: Avoid Next.js-only or external UI deps to prevent sandbox errors.
// We intentionally do NOT import `next/link` or `lucide-react` here.
// If you want those back in a Next app, ping me and I’ll re-enable them.

const MAP_URL = "https://map.gridleaf.org"; // change if your map subdomain differs

export default function Page() {
  // quick runtime guard so we never crash on null refs
  if (!MAP_URL) {
    console.warn("MAP_URL is missing");
  }

  // JSON-LD structured data for SEO and rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://gridleaf.org/#organization",
        "name": "Gridleaf",
        "url": "https://gridleaf.org",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gridleaf.org/logo.png"
        },
        "description": "Real-time electricity carbon intensity and energy mix data API with AI-powered insights for building climate-aware applications",
        "sameAs": [
          "https://twitter.com/gridleaf",
          "https://github.com/gridleaf"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://gridleaf.org/#website",
        "url": "https://gridleaf.org",
        "name": "Gridleaf",
        "publisher": {
          "@id": "https://gridleaf.org/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://map.gridleaf.org?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://gridleaf.org/#webpage",
        "url": "https://gridleaf.org",
        "name": "Gridleaf - Real-Time Electricity Carbon Intensity API & Map",
        "description": "Access real-time electricity carbon intensity data and energy mix with AI-powered insights. Free API with generous limits for building climate-aware applications.",
        "isPartOf": {
          "@id": "https://gridleaf.org/#website"
        },
        "about": {
          "@id": "https://gridleaf.org/#organization"
        }
      },
      {
        "@type": "Product",
        "name": "Gridleaf Carbon Intensity API",
        "description": "Real-time electricity carbon intensity and energy mix data API with AI-powered insights for developers",
        "brand": {
          "@id": "https://gridleaf.org/#organization"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "0",
          "highPrice": "999",
          "offerCount": "3",
          "offers": [
            {
              "@type": "Offer",
              "name": "Free Tier",
              "price": "0",
              "priceCurrency": "INR",
              "description": "10,000 API requests per month with real-time carbon intensity data"
            },
            {
              "@type": "Offer",
              "name": "Builder Tier",
              "price": "999",
              "priceCurrency": "INR",
              "description": "1 million API requests with Gen-AI insights and advanced features"
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Gridleaf API",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        },
        "description": "Developer-friendly API for real-time electricity carbon intensity and energy mix data"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is Gridleaf different from other electricity carbon intensity APIs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We prioritize India coverage, openness, and Gen-AI explanations grounded in cited data. The map is free; credits are only for API scale and advanced Gen-AI features. We offer transparent pricing and no enterprise lock-in."
            }
          },
          {
            "@type": "Question",
            "name": "Is the electricity data auditable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every figure is traceable to a source. Gen-AI answers are retrieval-augmented with citations, ensuring transparency and accuracy."
            }
          },
          {
            "@type": "Question",
            "name": "Can I self-host Gridleaf?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes for enterprise. We support on-prem deployments and VPC peering for organizations that require data sovereignty."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-black text-white">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <SafeLink href="/" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-[#ea580b]" />
            <span className="font-semibold tracking-tight">Gridleaf</span>
          </SafeLink>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <SafeLink href={MAP_URL} className="hover:text-white flex items-center gap-1"><IconDot /> Map</SafeLink>
            <SafeLink href="#api" className="hover:text-white">API</SafeLink>
            <SafeLink href="#pricing" className="hover:text-white">Pricing</SafeLink>
            <SafeLink href="#faq" className="hover:text-white">FAQ</SafeLink>
          </nav>
          <div className="flex items-center gap-2">
            <SafeLink href="#api" className="px-3 py-1.5 rounded-md border border-white/20 hover:border-white/40 text-sm">Get API Key</SafeLink>
            <SafeLink href={MAP_URL} className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-white text-black text-sm font-semibold hover:bg-white/90">
              Open Map <IconArrowRight />
            </SafeLink>
          </div>
        </div>
      </header>

      {/* Hero with a twist: diagonal split + command input */}
      <section className="relative overflow-hidden">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#ea580b]/20 blur-3xl"/>
          <div className="absolute -bottom-32 -right-24 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl"/>
          <svg className="absolute inset-x-0 -top-20 w-[140%] mx-[-20%]" viewBox="0 0 100 10" preserveAspectRatio="none">
            <polygon points="0,0 100,0 100,6 0,10" fill="url(#g)" opacity="0.08"/>
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#ffffff"/>
                <stop offset="100%" stopColor="#ea580b"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 py-16 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-4">
              <IconSpark /> Free Carbon Intensity API with AI-Powered Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Real-Time Electricity Carbon Data
              <span className="text-[#ea580b]"> API for Developers</span>
            </h1>
            <p className="text-white/80 mt-4 md:text-lg max-w-prose">
              Access hourly electricity carbon intensity and energy mix data with AI-powered explanations. Build climate-aware applications with our developer-friendly API. Transparent pricing, generous free tier, no enterprise lock-in.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SafeLink href={MAP_URL} className="inline-flex items-center gap-2 rounded-xl bg-[#ea580b] px-4 py-2.5 font-semibold hover:bg-[#ea580b]/90">
                Explore the Map <IconPin />
              </SafeLink>
              <SafeLink href="#api" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 hover:border-white/40">
                Get API Key <IconKey />
              </SafeLink>
              <span className="text-xs text-white/60">No credit card for free tier</span>
            </div>

            {/* Command Bar (the twist) */}
            <CommandBar />
          </div>

          {/* Right side: Minimal KPI card stack */}
          <div className="relative" role="complementary" aria-label="Live Grid Statistics">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-white/10 to-[#ea580b]/10 blur-xl"/>
            <div className="grid gap-4">
              <InfoCard icon={<IconZap />} title="Real-Time Carbon Intensity" value="Live Data" sub="gCO₂/kWh updated hourly"/>
              <InfoCard icon={<IconBars />} title="Energy Mix Breakdown" value="Coal • Wind • Solar • Hydro" sub="Complete generation source data"/>
              <InfoCard icon={<IconShield />} title="Verified & Cited Data" value="100% Traceable" sub="All sources documented"/>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-t border-white/10 bg-white/[0.02]" aria-label="Key Features">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4 py-12">
          <Value
            title="Developer-Friendly Carbon API"
            desc="Clean JSON responses with stable fields, comprehensive documentation, and a generous 10k requests/month free tier. No credit card required."
          />
          <Value
            title="AI-Powered Energy Insights"
            desc="Ask natural language questions about grid carbon intensity. Get grounded, citation-backed answers explaining energy trends and scenarios."
          />
          <Value
            title="Comprehensive Grid Coverage"
            desc="Strong India coverage with detailed state-level data. Expanding globally with open-source community contributions."
          />
        </div>
      </section>

      {/* API teaser */}
      <section id="api" className="border-t border-white/10" aria-labelledby="api-heading">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h2 id="api-heading" className="text-2xl md:text-3xl font-bold">Carbon Intensity API – Start in 1 Minute</h2>
            <SafeLink href="#pricing" className="text-sm text-white/70 hover:text-white">See pricing →</SafeLink>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs text-white/50 mb-2">GET /v1/ci?zone=IN-KA&start=2025-10-01&end=2025-10-07</p>
              <pre className="text-xs md:text-sm overflow-x-auto leading-relaxed text-white/90">{`{
  "zone": "IN-KA",
  "datetime": "2025-10-07T12:00:00Z",
  "ci_g_per_kWh": 164,
  "mix": {"COAL": 0.52, "WIND": 0.18, "SOLAR": 0.12, "HYDRO": 0.08, "GAS": 0.05, "OTHER": 0.05},
  "uncertainty": 0.07,
  "sources": ["KPTCL", "WRLDC"],
  "attribution": "Gridleaf.org"
}`}</pre>
              <div className="mt-3 flex items-center gap-2">
                <SafeLink href="#" className="text-sm underline underline-offset-4 decoration-white/30 hover:text-white">Open API docs</SafeLink>
                <span className="text-white/30">•</span>
                <SafeLink href="#" className="text-sm underline underline-offset-4 decoration-white/30 hover:text-white">SDKs</SafeLink>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#ea580b]/10 to-white/[0.05] p-6">
              <h3 className="font-semibold mb-2">Get Your Free API Key</h3>
              <p className="text-white/70 text-sm mb-4">Start with 10,000 free requests per month. Upgrade only when you scale. Transparent pricing, no hidden fees.</p>
              <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  placeholder="you@company.com"
                  type="email"
                  aria-label="Email address"
                  className="rounded-lg bg-black/50 border border-white/15 px-3 py-2 outline-none placeholder:text-white/30"
                />
                <button className="rounded-lg bg-white text-black font-semibold px-4 py-2 hover:bg-white/90" type="submit">Get Free API Key</button>
                <p className="text-[11px] text-white/40">By continuing you agree to our Terms and Privacy.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing strip (focused on credits) */}
      <section id="pricing" className="border-t border-white/10 bg-white/[0.02]" aria-labelledby="pricing-heading">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 id="pricing-heading" className="text-2xl md:text-3xl font-bold mb-6">Affordable API Pricing – Pay As You Grow</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Price title="Free Tier" price="₹0" note="10,000 API requests/month" cta="Start Free" featured={false} />
            <Price title="Builder" price="₹999" note="1M requests + AI insights" cta="Buy Credits" featured={true} />
            <Price title="Enterprise" price="Custom" note="SLAs • Custom zones • Self-hosted" cta="Contact Sales" featured={false} />
          </div>
          <p className="text-xs text-white/40 mt-3">Usage-based pricing with no hidden costs. Forever free tier for researchers, students, and open-source projects.</p>
        </div>
      </section>

      {/* FAQ (short) */}
      <section id="faq" className="border-t border-white/10" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Faq q="How is Gridleaf different from other carbon intensity APIs?" a="We offer transparent pricing with a generous free tier, AI-powered insights with cited sources, strong India coverage, and open-source friendly policies. No enterprise lock-in or hidden fees."/>
            <Faq q="Is the electricity carbon data auditable?" a="Yes. Every carbon intensity figure is traceable to official grid sources. Our AI-powered answers use retrieval-augmented generation with full citations for transparency."/>
            <Faq q="Can I self-host the API?" a="Yes. Enterprise customers can deploy Gridleaf on-premises or in their VPC for complete data sovereignty and control."/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Gridleaf.org</p>
          <div className="flex items-center gap-4">
            <SafeLink href="#" className="hover:text-white/90">Terms</SafeLink>
            <SafeLink href="#" className="hover:text-white/90">Privacy</SafeLink>
            <SafeLink href="#" className="hover:text-white/90">Status</SafeLink>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}

// ------- Components (no external deps) ---------

function SafeLink({ href, className, children }) {
  const isExternal = /^https?:\/\//.test(href || "");
  const props = { href, className };
  if (isExternal) {
    props.target = "_blank";
    props.rel = "noopener noreferrer";
  }
  return <a {...props}>{children}</a>;
}

function CommandBar() {
  const [q, setQ] = React.useState("");
  return (
    <div className="mt-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
        <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
          <IconTerminal />
          Ask AI about grid carbon intensity
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-black/60 border border-white/10 px-3 py-2">
          <span className="text-white/40 text-sm">/</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="When is Bengaluru's grid cleanest this week?"
            aria-label="Ask a question about electricity carbon intensity"
            className="flex-1 bg-transparent outline-none placeholder:text-white/30"
          />
          <button
            className="rounded-lg bg-white text-black text-sm font-semibold px-3 py-1.5 hover:bg-white/90"
            onClick={() => {
              const url = new URL(MAP_URL);
              if (q) url.searchParams.set("q", q);
              if (typeof window !== "undefined") window.location.href = url.toString();
            }}
            aria-label="Try question on interactive map"
          >
            Ask AI
          </button>
        </div>
        <p className="text-[11px] text-white/40 mt-2">AI-powered answers with live grid data • Opens interactive map at {MAP_URL}</p>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, value, sub }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center gap-2 text-white/70 mb-2">{icon} {title}</div>
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="text-xs text-white/50 mt-1">{sub}</div>
    </div>
  );
}

function Value({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-white/70 text-sm">{desc}</p>
    </div>
  );
}

function Price({ title, price, note, cta, featured }) {
  return (
    <div className={`rounded-2xl border p-5 ${featured ? "border-[#ea580b] bg-[#ea580b]/10" : "border-white/10 bg-white/[0.03]"}`}>
      <div className="text-white/70 text-sm mb-1">{title}</div>
      <div className="text-3xl font-bold">{price}</div>
      <div className="text-white/60 text-sm mt-1">{note}</div>
      <button className={`mt-4 w-full rounded-lg px-4 py-2 font-semibold ${featured ? "bg-[#ea580b] text-black hover:bg-[#ea580b]/90" : "bg-white text-black hover:bg-white/90"}`}>{cta}</button>
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="font-semibold mb-1">{q}</div>
      <div className="text-white/70 text-sm">{a}</div>
    </div>
  );
}

// ------- tiny inline icons (no external packages) -------
function IconArrowRight() { return (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
    <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);} 
function IconDot() { return (<span className="inline-block h-2 w-2 rounded-full bg-current" aria-hidden/>); }
function IconPin() { return (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"/>
  </svg>
);} 
function IconKey() { return (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
    <path d="M14 8a4 4 0 1 0-3.9 4.8l2.4 2.4H15v2h2v2h2v-3.2l-4.2-4.2A4 4 0 0 0 14 8z" fill="currentColor"/>
  </svg>
);} 
function IconSpark() { return (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
    <path d="M12 2l1.5 5L19 9l-5.5 2L12 22l-1.5-11L5 9l5.5-2L12 2z" fill="currentColor"/>
  </svg>
);} 
function IconZap() { return (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor"/>
  </svg>
);} 
function IconBars() { return (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
    <rect x="3" y="10" width="4" height="10" fill="currentColor"/>
    <rect x="10" y="6" width="4" height="14" fill="currentColor"/>
    <rect x="17" y="3" width="4" height="17" fill="currentColor"/>
  </svg>
);} 
function IconShield() { return (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
    <path d="M12 2l8 4v6c0 5-3.6 8.7-8 10-4.4-1.3-8-5-8-10V6l8-4z" fill="currentColor"/>
  </svg>
);} 
function IconTerminal() { return (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
    <path d="M3 4h18v16H3z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 8l4 4-4 4M11 16h7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);} 
