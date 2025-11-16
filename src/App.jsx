import Header from './components/Header'
import Hero from './components/Hero'
import Bundles from './components/Bundles'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'
import './theme.css'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <main>
        <Hero />
        <Bundles />
        <Features />
        <SocialProof />
      </main>
      <Footer />
    </div>
  )
}
