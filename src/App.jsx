import { useEffect } from 'react'
import { Leaf, ShoppingBag, Hand, Sparkles, Heart, ShieldCheck, TreePine, Recycle } from 'lucide-react'

// Indian-inspired color palette
// Saffron (amber), White (ivory), Green (emerald), with hints of indigo for depth

function TricolorBorder() {
  return (
    <div className="w-full">
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600" />
      <div className="h-1 w-full bg-amber-100" />
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700" />
    </div>
  )
}

function Nav() {
  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById('nav')
      if (!nav) return
      if (window.scrollY > 10) {
        nav.classList.add('bg-ivory/80', 'backdrop-blur', 'shadow')
      } else {
        nav.classList.remove('bg-ivory/80', 'backdrop-blur', 'shadow')
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="nav" className="fixed top-0 inset-x-0 z-50 transition-all">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-600 text-white shadow ring-2 ring-amber-200">
            <Leaf size={18} />
          </span>
          <span className="font-serif text-xl tracking-wide">Bāmbū Atelier</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#collection" className="hover:text-emerald-800 transition-colors">Collection</a>
          <a href="#craft" className="hover:text-emerald-800 transition-colors">Craft</a>
          <a href="#cause" className="hover:text-emerald-800 transition-colors">Our Cause</a>
          <a href="#contact" className="hover:text-emerald-800 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-emerald-700 text-white px-4 py-2 text-sm shadow-sm hover:bg-emerald-800 transition-colors">
          <ShoppingBag size={16} /> Enquire
        </a>
      </div>
      <TricolorBorder />
    </nav>
  )
}

function OrnateFrame({ children }) {
  return (
    <div className="relative">
      {/* Outer ornamental corners using gradients to hint at filigree */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[6px] bg-[linear-gradient(90deg,transparent,rgba(16,185,129,0.6),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-[6px] bg-[linear-gradient(90deg,transparent,rgba(245,158,11,0.6),transparent)]" />
        <div className="absolute inset-y-0 left-0 w-[6px] bg-[linear-gradient(180deg,transparent,rgba(16,185,129,0.6),transparent)]" />
        <div className="absolute inset-y-0 right-0 w-[6px] bg-[linear-gradient(180deg,transparent,rgba(245,158,11,0.6),transparent)]" />
      </div>
      <div className="rounded-[18px] border-2 border-emerald-700 bg-ivory shadow-[0_6px_20px_rgba(0,0,0,0.08)] p-1">
        <div className="rounded-[12px] border-2 border-amber-600 p-1">
          <div className="rounded-[8px] border border-emerald-300 bg-white">{children}</div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-16">
      <div className="absolute inset-0 -z-10">
        {/* Subtle jute/khadi texture via radial dots */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.035)_1px,transparent_1.2px)] bg-[length:16px_16px]" />
        <div className="absolute right-[-10%] top-[-20%] h-[60rem] w-[60rem] rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute left-[-10%] bottom-[-20%] h-[50rem] w-[50rem] rounded-full bg-emerald-200/25 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium shadow ring-1 ring-amber-200 w-max">
            <Sparkles size={14} className="text-amber-600" /> Handmade in India • Quiet Luxury
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight">
            Bamboo heirlooms with Indian soul
          </h1>
          <p className="text-slate-700 md:text-lg">
            Crafted by master weavers across Assam, Nagaland and Tripura. Natural dyes, brass accents, and time-honored patterns.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#collection" className="inline-flex items-center gap-2 rounded-full bg-amber-600 text-white px-6 py-3 shadow hover:bg-amber-700 transition-colors">
              <ShoppingBag size={18} /> Explore Pieces
            </a>
            <a href="#cause" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow ring-1 ring-emerald-600/40 hover:bg-emerald-50 transition-colors">
              <Heart size={18} className="text-emerald-700" /> Our Impact
            </a>
          </div>
          <div className="flex items-center gap-6 pt-6 text-slate-700">
            <div className="flex items-center gap-2"><ShieldCheck className="text-emerald-700" size={18}/> Lifetime craftsmanship</div>
            <div className="flex items-center gap-2"><TreePine className="text-emerald-700" size={18}/> Sustainable bamboo</div>
          </div>
        </div>
        <div className="relative">
          <OrnateFrame>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px]">
              <img
                src="https://images.unsplash.com/photo-1615485737657-2f1b330b06f2?q=80&w=1600&auto=format&fit=crop"
                alt="Handwoven bamboo luxury bag"
                className="h-full w-full object-cover"
              />
            </div>
          </OrnateFrame>
          <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow ring-1 ring-emerald-600/20 hidden md:block">
            <div className="flex items-center gap-3">
              <Hand className="text-amber-600" />
              <div>
                <p className="text-sm font-semibold">Artisan-made in India</p>
                <p className="text-xs text-slate-600">Assam • Nagaland • Tripura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Collection() {
  const products = [
    {
      title: 'Kāshi Basket',
      desc: 'Hand-finished storage with silk-lined lid',
      price: '₹18,500',
      img: 'https://images.unsplash.com/photo-1596461404969-9ae70d4a8b40?q=80&w=1400&auto=format&fit=crop'
    },
    {
      title: 'Monsoon Tray',
      desc: 'Tight-weave serving tray with brass inlay',
      price: '₹22,000',
      img: 'https://images.unsplash.com/photo-1615485737511-64f2d3eaf6d8?q=80&w=1400&auto=format&fit=crop'
    },
    {
      title: 'Nilgiri Lamp',
      desc: 'Ambient table lamp in smoked bamboo',
      price: '₹36,000',
      img: 'https://images.unsplash.com/photo-1600850056064-0f0b3f0ba1a0?q=80&w=1400&auto=format&fit=crop'
    },
  ]

  return (
    <section id="collection" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_20%_0%,rgba(245,158,11,0.10),transparent_60%),radial-gradient(35rem_35rem_at_100%_40%,rgba(16,185,129,0.10),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl">Signature Collection</h2>
            <p className="mt-3 text-slate-700 max-w-xl">Limited releases, numbered pieces, and bespoke commissions. Built to travel through generations.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-emerald-800 text-white px-5 py-2.5 hover:bg-emerald-900 transition-colors">Enquire</a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <div key={p.title} className="group">
              <OrnateFrame>
                <div className="relative overflow-hidden rounded-[6px]">
                  <img src={p.img} alt={p.title} className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <p className="text-sm opacity-90">{p.price}</p>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                  </div>
                </div>
              </OrnateFrame>
              <p className="mt-3 text-slate-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MotifBand({ accent = 'amber' }) {
  const band = accent === 'amber'
    ? 'bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(245,158,11,0.6)_10px,rgba(245,158,11,0.6)_20px)]'
    : 'bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(16,185,129,0.6)_10px,rgba(16,185,129,0.6)_20px)]'
  return <div className={`h-2 w-full ${band}`} />
}

function Craft() {
  const pillars = [
    {
      icon: <Hand className="text-emerald-800" size={22} />, title: 'Mastery',
      text: 'Every weave counts. We collaborate with guilds that preserve centuries-old patterns.'
    },
    {
      icon: <Recycle className="text-emerald-800" size={22} />, title: 'Materials',
      text: 'Responsibly harvested bamboo and natural dyes. Zero plastic. Zero compromise.'
    },
    {
      icon: <Sparkles className="text-emerald-800" size={22} />, title: 'Finish',
      text: 'Hand-sanded edges, silk lining, and brass details. Quiet luxury, made to last.'
    }
  ]

  return (
    <section id="craft" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-5xl">Crafted in small batches</h2>
            <MotifBand accent="amber" />
            <p className="text-slate-700 md:text-lg">We produce in limited numbers to honor the rhythm of handcraft. Your purchase sustains rural livelihoods and keeps endangered techniques alive.</p>
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-xl border-2 border-emerald-700 bg-ivory p-4 shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center mb-3 ring-1 ring-emerald-200">
                    {p.icon}
                  </div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-sm text-slate-700 mt-1">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <OrnateFrame>
              <div className="aspect-[16/12] overflow-hidden rounded-[6px]">
                <img src="https://images.unsplash.com/photo-1760328715276-13719b9a53a1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHx3ZWF2aW5nJTIwYmFtYm9vfGVufDB8MHx8fDE3NjI4OTQ1MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Artisan weaving bamboo" className="h-full w-full object-cover" />
              </div>
            </OrnateFrame>
          </div>
        </div>
      </div>
    </section>
  )
}

function Cause() {
  return (
    <section id="cause" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700" />
      <div className="mx-auto max-w-7xl px-6 text-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase">
              <Heart size={14} /> Our Cause
            </p>
            <h2 className="font-serif text-3xl md:text-5xl mt-4">1 purchase = 10 saplings planted</h2>
            <MotifBand accent="green" />
            <p className="mt-4 text-emerald-50/90">We dedicate a portion of every sale to afforestation drives across Northeast India, restoring bamboo groves and protecting biodiversity.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2"><Leaf size={16}/> Indigenous species</div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2"><TreePine size={16}/> Community-led</div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2"><ShieldCheck size={16}/> Transparent impact</div>
            </div>
          </div>
          <div className="relative">
            <OrnateFrame>
              <div className="aspect-[4/5] overflow-hidden rounded-[6px]">
                <img src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=1400&auto=format&fit=crop" alt="Bamboo forest in India" className="h-full w-full object-cover" />
              </div>
            </OrnateFrame>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl md:text-5xl">Bespoke commissions and trade</h2>
        <MotifBand accent="amber" />
        <p className="mt-4 text-slate-700">Looking for a custom weave, hospitality fit-out, or corporate gifting? Share your details and our concierge will be in touch within 24 hours.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Full name" className="w-full rounded-md border-2 border-emerald-700 bg-ivory px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600" />
            <input required type="email" placeholder="Email" className="w-full rounded-md border-2 border-emerald-700 bg-ivory px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600" />
          </div>
          <input placeholder="Company (optional)" className="w-full rounded-md border-2 border-emerald-700 bg-ivory px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600" />
          <textarea placeholder="Tell us about your project" rows="5" className="w-full rounded-md border-2 border-emerald-700 bg-ivory px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600" />
          <div className="flex items-center justify-between pt-2">
            <p className="text-sm text-slate-600">Every order plants trees in India and supports artisan families.</p>
            <button className="inline-flex items-center gap-2 rounded-full bg-amber-600 text-white px-6 py-3 shadow hover:bg-amber-700 transition-colors">
              <ShoppingBag size={18} /> Submit enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-ivory">
      <TricolorBorder />
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-600 text-white ring-2 ring-amber-200"><Leaf size={18} /></span>
          <span className="font-serif text-lg">Bāmbū Atelier</span>
        </div>
        <p className="text-slate-700">Crafted by hand in India. © {new Date().getFullYear()}</p>
        <div className="flex md:justify-end gap-4 text-sm">
          <a href="#craft" className="hover:text-emerald-800">Craft</a>
          <a href="#cause" className="hover:text-emerald-800">Cause</a>
          <a href="#contact" className="hover:text-emerald-800">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-slate-900">{/* ivory = warm white backdrop */}
      <Nav />
      <Hero />
      <Collection />
      <Craft />
      <Cause />
      <Contact />
      <Footer />
    </div>
  )
}
