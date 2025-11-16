import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[var(--background)]/95" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="text-[var(--optical-white)]">Your AI Advantage in </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--cognitive-orange)] via-[var(--highlight-orange)] to-[var(--glow-orange)] drop-shadow-[0_0_20px_var(--glow-orange)]">Argument</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-[var(--optical-white)]/90">Lose no Argument. Ever.</p>
        <p className="mt-6 max-w-3xl mx-auto text-[var(--optical-white)]/80">
          Decode propaganda, defend against defamation, and win every debate with precision AI analysis. Real-time argumentation intelligence at your fingertips.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#register" className="inline-flex items-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-3 font-semibold shadow-[0_0_40px_var(--glow-orange)] hover:brightness-110 transition-all">Register (Try for Free!)</a>
        </div>
      </div>
    </section>
  )
}
