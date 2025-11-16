import { useEffect, useState } from 'react'
import { Menu, X, LogIn, UserPlus } from 'lucide-react'

function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const stored = localStorage.getItem('asai-theme')
    const initial = stored || 'dark'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('asai-theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <button onClick={toggle} className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:shadow-[0_0_24px_var(--glow-orange)] transition-all">
      <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: theme === 'dark' ? 'var(--accent)' : 'var(--primary)' }}></span>
      {theme === 'dark' ? 'Dark' : 'Light'}
    </button>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-[var(--border)]/60 bg-[color:var(--background)/0.6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[var(--cognitive-orange)] shadow-[0_0_30px_var(--glow-orange)]">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[var(--highlight-orange)]/70 to-[var(--glow-orange)]/20 blur-md"></span>
              <span className="relative text-[var(--optical-white)] font-black">A</span>
            </span>
            <div className="leading-tight">
              <div className="text-lg font-extrabold tracking-tight text-[var(--foreground)]">AllSeeing-AI</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Your AI Advantage in Argument</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">Features</a>
            <a href="#pricing" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">Pricing</a>
            <a href="#blog" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">Blog</a>
            <a href="#contact" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">Contact Us</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a href="#login" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--secondary)]/60 transition-colors"><LogIn size={16}/> Login</a>
            <a href="#register" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[var(--primary-foreground)] bg-[var(--primary)] hover:brightness-110 shadow-[0_0_24px_var(--glow-orange)] transition-all"><UserPlus size={16}/> Register</a>
          </div>

          <button className="md:hidden p-2 rounded-lg border border-[var(--border)]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="text-[var(--foreground)]"/> : <Menu className="text-[var(--foreground)]"/>}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-slide-in">
            <div className="flex flex-col gap-2 p-3 rounded-xl border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur-xl">
              <a href="#features" className="px-3 py-2 rounded-lg hover:bg-[var(--secondary)]/60">Features</a>
              <a href="#pricing" className="px-3 py-2 rounded-lg hover:bg-[var(--secondary)]/60">Pricing</a>
              <a href="#blog" className="px-3 py-2 rounded-lg hover:bg-[var(--secondary)]/60">Blog</a>
              <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-[var(--secondary)]/60">Contact Us</a>
              <div className="h-px bg-[var(--border)]/60 my-2"/>
              <a href="#login" className="px-3 py-2 rounded-lg border border-[var(--border)]">Login</a>
              <a href="#register" className="px-3 py-2 rounded-lg text-center text-[var(--primary-foreground)] bg-[var(--primary)]">Register</a>
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
