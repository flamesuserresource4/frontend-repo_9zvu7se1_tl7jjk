import { Package, Layers, ShieldCheck, Sword } from 'lucide-react'

const bundles = [
  { title: 'ASAI Edu & Training', desc: 'Expert-led modules, interactive exercises, feedback', icon: Layers },
  { title: 'ASAI Argument Ops', desc: 'Advanced AI tools, bias analysis, strategy', icon: ShieldCheck },
  { title: "You Don't Argue with Me Bundle", desc: 'Training + analysis tools', icon: Package },
  { title: 'Armory of Aristoteles Bundle', desc: 'Training, tools, AI agents, API access', icon: Sword },
]

export default function Bundles() {
  return (
    <section className="relative py-20 md:py-28" id="bundles">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_-10%,rgba(255,102,0,0.25),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(255,136,0,0.2),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] text-center">Bundles Showcase</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bundles.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-xl p-6 hover:shadow-[0_0_40px_var(--glow-orange)] transition-all">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[0_0_24px_var(--glow-orange)]">
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
