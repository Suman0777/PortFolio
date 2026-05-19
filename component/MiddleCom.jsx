import React from 'react'
import { Mail } from 'lucide-react'
import { PixelImage } from "@/components/ui/pixel-image"
import { Highlighter } from "@/components/ui/highlighter"
import { WordRotate } from "@/components/ui/word-rotate"
import { TextAnimate } from "@/components/ui/text-animate"

const MiddleCom = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:py-28">

      <div className="flex flex-col-reverse md:flex-row md:items-center gap-12 md:gap-16">

        {/* ── Left: Text ── */}
        <div className="flex-1 flex flex-col gap-5">

          {/* Greeting */}
          <TextAnimate
            animation="slideLeft"
            by="word"
            duration={1.0}
            as="p"
            className="text-xs font-mono text-cyan-500 tracking-[0.25em] uppercase"
          >
            {"Hello, world — I'm"}
          </TextAnimate>

          {/* Name */}
          <TextAnimate
            animation="slideLeft"
            by="word"
            duration={1.2}
            delay={0.3}
            as="h1"
            style={{ color: 'var(--text-primary)' }}
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
          >
            {"Suman Basak"}
          </TextAnimate>

          {/* Role with Highlighter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Highlighter color="#0e7490" strokeWidth={2} animationDuration={900} padding={4}>
              <TextAnimate
                animation="slideLeft"
                by="word"
                duration={1.2}
                delay={0.7}
                as="span"
                className="text-lg sm:text-xl font-semibold text-white/70 "
              >
                {"Full-Stack + AI Developer"}
              </TextAnimate>
            </Highlighter>
          </div>

          {/* WordRotate tagline */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-cyan-500/50" />
            <WordRotate
              words={[
                "Building scalable apps.",
                "Crafting clean UI.",
                "Solving real problems.",
                "Shipping fast.",
              ]}
              duration={2400}
              className="text-xs font-mono text-cyan-500/60 tracking-widest uppercase"
            />
          </div>

          {/* Divider */}
          <div className="h-px w-full" style={{ background: 'linear-gradient(to right, var(--section-line), transparent)' }} />

          {/* Bio */}
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Based in{" "}
            <span className="relative inline-block group">
              <span className="text-cyan-600 underline underline-offset-2 cursor-pointer font-medium">
                Kolkata
              </span>

              {/* Hover Card */}
              <span
                className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-30 w-72
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-300 rounded-xl shadow-2xl p-4"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', backdropFilter: 'blur(16px)' }}
              >
                <span className="grid grid-cols-5 gap-3">
                  <span className="col-span-3">
                    <h3 className="font-semibold mb-1 text-sm" style={{ color: 'var(--text-primary)' }}>About Kolkata</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      A major cultural and tech hub in Eastern India.
                    </p>
                  </span>
                  <img src="/Kolkata.png" alt="Kolkata" className="col-span-2 rounded-lg object-cover" />
                </span>
                <a
                  href="https://en.wikipedia.org/wiki/Kolkata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  Read more →
                </a>
              </span>
            </span>
            {" "}— passionate about building clean, scalable, mobile-first
            web applications. I turn complex problems into reliable products
            that deliver real impact.
          </p>

          {/* Email CTA */}
          <a
            href="mailto:sumanbasakpl@gmail.com"
            aria-label="Send email to Suman Basak"
            className="group mt-2 self-start flex items-center gap-3 px-5 py-3 rounded-xl
              bg-cyan-500/10 border border-cyan-500/25
              hover:bg-cyan-500/20 hover:border-cyan-500/50
              hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]
              transition-all duration-300"
          >
            <Mail size={15} className="text-cyan-500" />
            <span className="text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
              sumanbasakpl@gmail.com
            </span>
          </a>

        </div>

        {/* ── Right: Image ── */}
        <div className="flex justify-center md:justify-end shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-2xl scale-110 -z-10" />
            <div className="w-[200px] h-[240px] sm:w-[220px] sm:h-[260px] md:w-[250px] md:h-[290px]
              rounded-3xl overflow-hidden border shadow-[0_0_40px_rgba(6,182,212,0.08)]"
              style={{ borderColor: 'var(--card-border)' }}
            >
              <PixelImage src="/pic2.jpeg" alt="Profile" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default MiddleCom
