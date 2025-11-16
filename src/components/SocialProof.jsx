import { ShieldCheck, BadgeCheck, Lock } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    title: 'Debate Champion',
    quote: 'AllSeeing-AI transformed my preparation. I walk into debates with total confidence.',
  },
  {
    name: 'Marcus Chen',
    title: 'Legal Analyst',
    quote: 'The bias and fallacy detection is unparalleled. It elevates every argument I write.',
  },
  {
    name: 'Dr. Amanda Rodriguez',
    title: 'Political Strategist',
    quote: 'Real-time propaganda detection is a game-changer for rapid response teams.',
  },
]

const stats = [
  { label: 'Active Users', value: '10,000+' },
  { label: 'Success Rate', value: '98%' },
  { label: 'Arguments Analyzed', value: '500K+' },
  { label: 'Average Rating', value: '4.9/5' },
]

export default function SocialProof() {
  return (
    <section className="relative py-20 md:py-28 border-t border-[var(--border)]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] text-center">Trusted by experts</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur-xl p-6">
              <p className="text-[var(--foreground)]/90">“{t.quote}”</p>
              <div className="mt-4 text-sm text-[var(--muted-foreground)]">{t.name} — {t.title}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-xl p-5 text-center">
              <div className="text-2xl font-extrabold text-[var(--foreground)]">{s.value}</div>
              <div className="text-xs text-[var(--muted-foreground)]">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[var(--muted-foreground)]">
          <div className="flex items-center gap-2 justify-center"><ShieldCheck size={18}/> SOC2 Type II</div>
          <div className="flex items-center gap-2 justify-center"><BadgeCheck size={18}/> GDPR</div>
          <div className="flex items-center gap-2 justify-center"><BadgeCheck size={18}/> ISO27001</div>
          <div className="flex items-center gap-2 justify-center"><Lock size={18}/> 256-bit Encryption</div>
        </div>
      </div>
    </section>
  )
}
