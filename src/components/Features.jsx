import { Brain, FileText, Library, Shield, History, Settings, Lock } from 'lucide-react'

const features = [
  { title: 'Multi-Expert Analysis', desc: 'Logical, bias, rhetorical, emotional, narrative, fallacy, contextual, source', icon: Brain },
  { title: 'Argument Editor', desc: 'Live issue spotting, AI-powered analysis, rewrite', icon: FileText },
  { title: 'Argumentation Armory', desc: 'Repository, tags, search, import/export', icon: Library },
  { title: 'Propaganda Shield', desc: 'Claim catalog, counter-strategies', icon: Shield },
  { title: 'Analysis History', desc: 'Past analyses, comparison, cleanup', icon: History },
  { title: 'Settings & User Management', desc: 'Account, preferences', icon: Settings },
]

export default function Features() {
  return (
    <section className="relative py-20 md:py-28 border-t border-[var(--border)]" id="features">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_0%,rgba(255,170,0,0.18),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)]">Features</h2>
          <div className="text-xs text-[var(--muted-foreground)] flex items-center gap-3"><Lock size={14}/> Enterprise-grade security, zero-knowledge, SOC2, GDPR, local processing</div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur-xl p-6 hover:shadow-[0_0_36px_var(--glow-orange)] transition-all">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--accent)] text-[var(--accent-foreground)] shadow-[0_0_20px_var(--glow-orange)]">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{title}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
