import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="text-lg font-extrabold text-[var(--foreground)]">AllSeeing-AI</div>
            <p className="mt-2 text-[var(--muted-foreground)]">Your AI Advantage in Argumentation. Lose no Argument. Ever.</p>
          </div>
          <div>
            <div className="font-semibold text-[var(--foreground)]">Brand</div>
            <ul className="mt-3 space-y-2 text-[var(--muted-foreground)]">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-[var(--foreground)]">Resources</div>
            <ul className="mt-3 space-y-2 text-[var(--muted-foreground)]">
              <li><a href="#">Docs</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-[var(--foreground)]">Company</div>
            <ul className="mt-3 space-y-2 text-[var(--muted-foreground)]">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-4 text-[var(--muted-foreground)]">
            <a href="#" aria-label="Twitter" className="hover:text-[var(--foreground)]"><Twitter size={18}/></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[var(--foreground)]"><Linkedin size={18}/></a>
            <a href="#" aria-label="GitHub" className="hover:text-[var(--foreground)]"><Github size={18}/></a>
            <a href="mailto:hello@allseeing.ai" aria-label="Email" className="hover:text-[var(--foreground)]"><Mail size={18}/></a>
          </div>
          <div className="text-xs text-[var(--muted-foreground)] text-center">Privacy • Terms • Cookies • Accessibility</div>
        </div>

        <div className="mt-6 text-xs text-[var(--muted-foreground)]">©2025 AllSeeing-AI. All rights reserved.</div>
      </div>
    </footer>
  )
}
