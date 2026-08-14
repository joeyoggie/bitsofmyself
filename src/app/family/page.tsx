'use client'

import { useMemo, useState } from 'react'
import {
  Activity,
  BrainCircuit,
  ChevronRight,
  Cpu,
  Gauge,
  Maximize,
  Minimize,
  Network,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  Zap,
} from 'lucide-react'

// Replace these placeholders with your real family members/photos later.
// The app intentionally keeps all content local so it works without an internet connection.
const FAMILY = [
  { id: 'youssef', name: 'Youssef', role: 'Family Engineer', initials: 'Y', color: 'from-emerald-500/30 to-emerald-950', stats: { intelligence: 98, chaos: 61, dadEnergy: 94, snackDetection: 96 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Youssef is registered in the Family Intelligence System as Family Engineer.' },
  { id: 'dina', name: 'Dina', role: 'Chief Family Cook', initials: 'D', color: 'from-violet-500/30 to-violet-950', stats: { intelligence: 97, chaos: 48, dadEnergy: 88, snackDetection: 91 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Dina is registered in the Family Intelligence System as Family Sports Expert.' },
  { id: 'omar', name: 'Omar', role: 'Junior Chaos Engineer', initials: 'O', color: 'from-sky-500/30 to-sky-950', stats: { intelligence: 96, chaos: 97, dadEnergy: 52, snackDetection: 100 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Omar is registered in the Family Intelligence System as Junior Sweet Tooth.' },
  { id: 'mido', name: 'Mido', role: 'Family Consultant', initials: 'M', color: 'from-amber-500/30 to-amber-950', stats: { intelligence: 80, chaos: 74, dadEnergy: 78, snackDetection: 80 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Mido is registered in the Family Intelligence System as Family Consultant.' },
  { id: 'silvia', name: 'Silvia', role: 'Family Systems', initials: 'S', color: 'from-pink-500/30 to-pink-950', stats: { intelligence: 87, chaos: 87, dadEnergy: 89, snackDetection: 97 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Silvia is registered in the Family Intelligence System as Family Traveller.' },
  { id: 'happy', name: 'Happy', role: 'Social Intelligence', initials: 'H', color: 'from-cyan-500/30 to-cyan-950', stats: { intelligence: 94, chaos: 39, dadEnergy: 100, snackDetection: 78 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Happy is registered in the Family Intelligence System as Family Expert Banker.' },
  { id: 'hany', name: 'Hany', role: 'External Systems', initials: 'H', color: 'from-fuchsia-500/30 to-fuchsia-950', stats: { intelligence: 80, chaos: 52, dadEnergy: 55, snackDetection: 95 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Hany is registered in the Family Intelligence System as Family Ferarri Driver.' },
  { id: 'teefo', name: 'Teefo', role: 'Junior Beta Tester', initials: 'T', color: 'from-orange-500/30 to-orange-950', stats: { intelligence: 87, chaos: 65, dadEnergy: 66, snackDetection: 76 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Teefo is registered in the Family Intelligence System as Family Expert Cuber.' },
  { id: 'nina', name: 'Nina', role: 'Junior Beta Tester', initials: 'N', color: 'from-indigo-500/30 to-indigo-950', stats: { intelligence: 94, chaos: 78, dadEnergy: 77, snackDetection: 93 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Nina is registered in the Family Intelligence System as Family Junior Teaser.' },
  { id: 'nehad', name: 'Nehad', role: 'Family Operations', initials: 'N', color: 'from-teal-500/30 to-teal-950', stats: { intelligence: 80, chaos: 91, dadEnergy: 88, snackDetection: 74 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Nehad is registered in the Family Intelligence System as Family Godmother.' },
  { id: 'nannoo', name: 'Nannoo', role: 'Family Intelligence', initials: 'N', color: 'from-emerald-500/30 to-emerald-950', stats: { intelligence: 87, chaos: 43, dadEnergy: 99, snackDetection: 91 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Nannoo is registered in the Family Intelligence System as Family Events Manager.' },
  { id: 'omar-cousin', name: 'Omar', role: 'Cousin Systems', initials: 'O', color: 'from-violet-500/30 to-violet-950', stats: { intelligence: 94, chaos: 56, dadEnergy: 54, snackDetection: 72 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Omar is registered in the Family Intelligence System as Executive World Creator.' },
  { id: 'bobba', name: 'Bobba', role: 'Family Operations', initials: 'B', color: 'from-sky-500/30 to-sky-950', stats: { intelligence: 80, chaos: 69, dadEnergy: 65, snackDetection: 89 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Bobba is registered in the Family Intelligence System as Positive Energy Supplier.' },
  { id: 'rasha', name: 'Rasha', role: 'Family Intelligence', initials: 'R', color: 'from-amber-500/30 to-amber-950', stats: { intelligence: 87, chaos: 82, dadEnergy: 76, snackDetection: 70 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Rasha is registered in the Family Intelligence System as Family Magnet.' },
  { id: 'spider', name: 'Spider', role: 'External Systems', initials: 'S', color: 'from-pink-500/30 to-pink-950', stats: { intelligence: 94, chaos: 95, dadEnergy: 87, snackDetection: 87 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Spider is registered in the Family Intelligence System as DJ/Photographer.' },
  { id: 'reham', name: 'Reham', role: 'Family Intelligence', initials: 'R', color: 'from-cyan-500/30 to-cyan-950', stats: { intelligence: 80, chaos: 47, dadEnergy: 98, snackDetection: 68 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Reham is registered in the Family Intelligence System as Creative Writer.' },
  { id: 'ramy', name: 'Ramy', role: 'External Systems', initials: 'R', color: 'from-fuchsia-500/30 to-fuchsia-950', stats: { intelligence: 87, chaos: 60, dadEnergy: 53, snackDetection: 85 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Ramy is registered in the Family Intelligence System as Business Consultant.' },
  { id: 'ella', name: 'Ella', role: 'Junior Systems', initials: 'E', color: 'from-orange-500/30 to-orange-950', stats: { intelligence: 94, chaos: 73, dadEnergy: 64, snackDetection: 66 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Ella is registered in the Family Intelligence System as Junior Dancer.' },
  { id: 'mia', name: 'Mia', role: 'Junior Systems', initials: 'M', color: 'from-indigo-500/30 to-indigo-950', stats: { intelligence: 80, chaos: 86, dadEnergy: 75, snackDetection: 83 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Mia is registered in the Family Intelligence System as Junior Cook.' },
  { id: 'lilly', name: 'Lilly', role: 'Junior Systems', initials: 'L', color: 'from-teal-500/30 to-teal-950', stats: { intelligence: 87, chaos: 38, dadEnergy: 86, snackDetection: 100 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Lilly is registered in the Family Intelligence System as Family Expat.' },
  { id: 'zio', name: 'Zio', role: 'Junior Systems', initials: 'Z', color: 'from-emerald-500/30 to-emerald-950', stats: { intelligence: 94, chaos: 51, dadEnergy: 97, snackDetection: 81 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Zio is registered in the Family Intelligence System as Junior Gamer.' },
  { id: 'kimo', name: 'Kimo', role: 'Family Intelligence', initials: 'K', color: 'from-violet-500/30 to-violet-950', stats: { intelligence: 80, chaos: 64, dadEnergy: 52, snackDetection: 98 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Kimo is registered in the Family Intelligence System as Superior Family Intelligence.' },
  { id: 'sarah', name: 'Sarah', role: 'Family Systems', initials: 'S', color: 'from-sky-500/30 to-sky-950', stats: { intelligence: 87, chaos: 77, dadEnergy: 63, snackDetection: 79 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Sarah is registered in the Family Intelligence System as Laughing Distributer.' },
  { id: 'youssy', name: 'Youssy', role: 'Junior Systems', initials: 'Y', color: 'from-amber-500/30 to-amber-950', stats: { intelligence: 94, chaos: 90, dadEnergy: 74, snackDetection: 96 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Youssy is registered in the Family Intelligence System as World Capitals Expert.' },
  { id: 'malek', name: 'Malek', role: 'Junior Systems', initials: 'M', color: 'from-pink-500/30 to-pink-950', stats: { intelligence: 80, chaos: 42, dadEnergy: 85, snackDetection: 77 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Malek is registered in the Family Intelligence System as Prankster.' },
  { id: 'salma', name: 'Salma', role: 'Junior Systems', initials: 'S', color: 'from-cyan-500/30 to-cyan-950', stats: { intelligence: 87, chaos: 55, dadEnergy: 96, snackDetection: 94 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Salma is registered in the Family Intelligence System as Junior Systems.' },
  { id: 'nolly', name: 'Nolly', role: 'Family Operations', initials: 'N', color: 'from-fuchsia-500/30 to-fuchsia-950', stats: { intelligence: 94, chaos: 68, dadEnergy: 51, snackDetection: 75 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Nolly is registered in the Family Intelligence System as Family Royal Queen.' },
  { id: 'aya', name: 'Aya', role: 'Family Intelligence', initials: 'A', color: 'from-orange-500/30 to-orange-950', stats: { intelligence: 80, chaos: 81, dadEnergy: 62, snackDetection: 92 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Aya is registered in the Family Intelligence System as Family Patience In a Bottle.' },
  { id: 'mohamed', name: 'Mohamed', role: 'External Systems', initials: 'M', color: 'from-indigo-500/30 to-indigo-950', stats: { intelligence: 87, chaos: 94, dadEnergy: 73, snackDetection: 73 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Mohamed is registered in the Family Intelligence System as AI Manager.' },
  { id: 'silo', name: 'Silo', role: 'Junior Systems', initials: 'S', color: 'from-teal-500/30 to-teal-950', stats: { intelligence: 94, chaos: 46, dadEnergy: 84, snackDetection: 90 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Silo is registered in the Family Intelligence System as Gymnaster.' },
  { id: 'maya', name: 'Maya', role: 'Junior Systems', initials: 'M', color: 'from-emerald-500/30 to-emerald-950', stats: { intelligence: 80, chaos: 59, dadEnergy: 95, snackDetection: 71 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Maya is registered in the Family Intelligence System as Junior YouTube Expert.' },
  { id: 'osos', name: 'Osos', role: 'Family Intelligence', initials: 'O', color: 'from-violet-500/30 to-violet-950', stats: { intelligence: 87, chaos: 72, dadEnergy: 50, snackDetection: 88 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Osos is registered in the Family Intelligence System as Family Legal Advisor.' },
  { id: 'mizo', name: 'Mizo', role: 'Family Intelligence', initials: 'M', color: 'from-sky-500/30 to-sky-950', stats: { intelligence: 94, chaos: 85, dadEnergy: 61, snackDetection: 69 }, traits: ['Family Member', 'Personality Detected', 'Family System Online'], description: 'Mizo is registered in the Family Intelligence System as Egyptian Foreign Representative.' },
  { id: 'saleh', name: 'saleh', role: 'Family Intelligence', initials: 'M', color: 'from-sky-500/30 to-sky-950', stats: { intelligence: 94, chaos: 85, dadEnergy: 61, snackDetection: 69 }, traits: ['Family Friend', 'Personality Detected', 'Family System Online'], description: 'Saleh is registered in the Family Intelligence System as Vape Expert.' },
  { id: 'dodi', name: 'Dodi', role: 'Family Intelligence', initials: 'M', color: 'from-sky-500/30 to-sky-950', stats: { intelligence: 94, chaos: 85, dadEnergy: 61, snackDetection: 69 }, traits: ['Family Friend', 'Personality Detected', 'Family System Online'], description: 'Dodi is registered in the Family Intelligence System as Family Friend.' },
]

const PREDICTIONS = [
  ['Who is most likely to eat the last piece of pizza and pretend they didn’t?', 'Osos'],
  ['Who is most likely to say “I’m leaving now” while still sitting on the couch 30 minutes later?', 'Youssef'],
  ['Who is most likely to fall asleep during a movie they insisted everyone watch?', 'Nehad'],
  ['Who is most likely to buy something they absolutely did not need?', 'Nannoo'],
  ['Who is most likely to say “I told you so” before you even finish explaining?', 'Mido'],
  ['Who is most likely to turn a 2-minute story into a 20-minute story?', 'Kimo'],
  ['Who is most likely to ask “What are we eating for desert?” five minutes after eating?', 'Omariko'],
  ['Who is most likely to open the fridge, stare inside, and close it without taking anything?', 'Rasha'],
  ['Who is most likely to lose their phone while holding it?', 'Teefo'],
  ['Who is most likely to say “I know a shortcut” and make everyone late?', 'Hany'],
  ['Who is most likely to turn a family gathering into a photography session?', 'Spider'],
  ['Who is most likely to send a message and then immediately call to ask if you saw it?', 'Mido'],
  ['Who is most likely to know exactly where something is without looking?', 'Bobba'],
  ['Who is most likely to say “I’m not hungry” and then eat everyone else’s food?', 'Mido'],
  ['Who would be the best person to have in a zombie apocalypse?', 'Hany'],
  ['Who is most likely to laugh at the worst possible moment?', 'Osos'],
  ['Who really wants to become famous?', 'Rasha'],
  ['Who is most likely to negotiate their way out of trouble?', 'Malek'],
  ['Who is most likely to ask “Why?” 17 times in a row?', 'Omariko'],
  ['Who is most likely to start dancing when nobody else is dancing?', 'Maya'],
  ['Who is most likely to know all the family gossip?', 'Mizo'],
  ['Who is most likely to accidentally become the family group chat admin?', 'Nolly'],
  ['Who is most likely to have snacks hidden somewhere nobody knows about?', 'Nannoo'],
  ['Who would survive the longest on a deserted island?', 'Ramy'],
  ['Who would spend the most money in 10 minutes if given unlimited money?', 'Youssef'],
  ['Who would survive the longest without their phone?', 'Silvia'],
  ['Who would be most likely to become a YouTuber?', 'Teefo'],
  ['Who would be most likely to win a family dance competition?', 'Maya'],
  ['Who would be most likely to become an astronaut?', 'Omariko'],
  ['Who would be most likely to solve a murder mystery?', 'Reham'],
  ['Who would be most likely to get lost using Google Maps?', 'Happy'],
  ['Who would be most likely to know exactly what everyone wants for dinner?', 'Bobba'],
  ['Who would be most likely to say “I don’t want anything” and then steal your food?', 'Dina'],
];

const LOGS = [
  'Establishing secure family connection...',
  'Scanning behavioral patterns...',
  'Loading historical family data...',
  'Calculating chaos probability...',
  'Cross-referencing snack activity...',
  'Consulting advanced family heuristics...',
  'Generating personality model...',
  'Analysis complete.',
]

type Member = (typeof FAMILY)[number]

type Screen = 'wall' | 'analysis' | 'predictions' | 'rankings'

export default function FamilyPage() {
  const [screen, setScreen] = useState<Screen>('wall')
  const [selected, setSelected] = useState<Member | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [logIndex, setLogIndex] = useState(0)
  const [predictionIndex, setPredictionIndex] = useState(0)
  const [isPredictionRevealed, setIsPredictionRevealed] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const prediction = PREDICTIONS[predictionIndex]

  const runAnalysis = (member?: Member) => {
    const subject = member ?? FAMILY[Math.floor(Math.random() * FAMILY.length)]
    setSelected(subject)
    setScreen('analysis')
    setIsAnalyzing(true)
    setLogIndex(0)

    const timer = window.setInterval(() => {
      setLogIndex((current) => {
        if (current >= LOGS.length - 1) {
          window.clearInterval(timer)
          window.setTimeout(() => setIsAnalyzing(false), 350)
          return current
        }
        return current + 1
      })
    }, 260)
  }

  const randomAnalysis = () => runAnalysis()

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch {
      // Fullscreen is optional; keep the presentation usable if the browser blocks it.
    }
  }

  const nav = (next: Screen) => {
    setScreen(next)
    if (next === 'wall') setSelected(null)
    if (next === 'predictions') setIsPredictionRevealed(false)
  }

  return (
    <div className="relative -mx-4 -my-8 min-h-screen overflow-hidden bg-[#050807] text-white selection:bg-brand-500/30 selection:text-brand-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(34,197,94,0.16),transparent_38%),radial-gradient(circle_at_100%_100%,rgba(34,197,94,0.06),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-5 py-6 md:px-10 md:py-8">
        <header className="flex items-center justify-between border-b border-brand-500/15 pb-5">
          <button onClick={() => nav('wall')} className="group text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-500/30 bg-brand-500/10 text-brand-400 shadow-[0_0_30px_rgba(34,197,94,0.08)]">
                <BrainCircuit className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[10px] font-semibold tracking-[0.28em] text-brand-500">FAMILY INTELLIGENCE SYSTEM</div>
                <div className="mt-0.5 flex items-center gap-2 font-mono text-[10px] text-neutral-500">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" /> SYSTEM ONLINE · v1.0.0
                </div>
              </div>
            </div>
          </button>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-white/5 bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] text-neutral-500 md:flex">
              <Network className="h-3.5 w-3.5 text-brand-500" /> {FAMILY.length} SUBJECTS CONNECTED
            </div>
            <button onClick={toggleFullscreen} className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-neutral-400 transition hover:border-brand-500/40 hover:text-brand-400" title="Toggle fullscreen">
              {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
            </button>
          </div>
        </header>

        <div className="flex flex-1 flex-col py-7 md:py-10">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-brand-500">
                <Terminal className="h-3.5 w-3.5" /> {screen === 'wall' ? 'Family Database' : screen === 'analysis' ? 'Subject Analysis' : screen === 'predictions' ? 'Predictive Engine' : 'Family Metrics'}
              </div>
              <h1 className="text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
                {screen === 'wall' && <>Meet the <span className="text-brand-400">family.</span></>}
                {screen === 'analysis' && <>Intelligence <span className="text-brand-400">analysis.</span></>}
                {screen === 'predictions' && <>Future <span className="text-brand-400">forecast.</span></>}
                {screen === 'rankings' && <>Family <span className="text-brand-400">metrics.</span></>}
              </h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {([['wall', 'Family Wall'], ['predictions', 'Predictions'], ['rankings', 'Rankings']] as const).map(([id, label]) => (
                <button key={id} onClick={() => nav(id)} className={`rounded-lg border px-3.5 py-2 font-mono text-[10px] uppercase tracking-wider transition ${screen === id ? 'border-brand-500/50 bg-brand-500/10 text-brand-400' : 'border-white/10 bg-white/[0.02] text-neutral-500 hover:border-white/20 hover:text-white'}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {screen === 'wall' && (
            <section className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {FAMILY.map((member, index) => (
                  <button key={member.id} onClick={() => runAnalysis(member)} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-brand-500/[0.04] hover:shadow-[0_12px_60px_rgba(34,197,94,0.08)]">
                    <div className={`relative flex aspect-[1.35] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${member.color} ring-1 ring-inset ring-white/10`}>
                      <img src="/family/placeholder.svg" alt="Placeholder family member" className="h-full w-full object-cover opacity-60 mix-blend-screen" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.14),transparent_38%)]" />
                      <div className="absolute flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-black/40 text-4xl font-black text-white/80 shadow-2xl">{member.initials}</div>
                      <div className="absolute left-3 top-3 rounded-md border border-white/10 bg-black/40 px-2 py-1 font-mono text-[9px] text-neutral-400">SUBJECT_{String(index + 1).padStart(2, '0')}</div>
                      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-brand-400/20 bg-black/50 px-2 py-1 font-mono text-[9px] text-brand-400"><span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> ONLINE</div>
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-lg font-bold text-white">{member.name}</h2>
                        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500">{member.role}</p>
                      </div>
                      <ChevronRight className="mt-1 h-4 w-4 text-neutral-600 transition group-hover:translate-x-1 group-hover:text-brand-400" />
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand-500/20 bg-brand-500/[0.035] p-5 md:flex-row md:px-6">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-500"><Sparkles className="h-3.5 w-3.5" /> Advanced Family Heuristics</div>
                  <p className="mt-1 text-sm text-neutral-400">Select a family member or let the system choose a subject at random.</p>
                </div>
                <button onClick={randomAnalysis} className="flex shrink-0 items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-black shadow-[0_0_35px_rgba(34,197,94,0.18)] transition hover:bg-brand-400 active:scale-[0.98]">
                  <Zap className="h-4 w-4" /> RANDOM ANALYSIS
                </button>
              </div>
            </section>
          )}

          {screen === 'analysis' && selected && (
            <section className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 md:p-7">
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-neutral-600"><span>Subject ID: {selected.id}</span><ShieldCheck className="h-4 w-4 text-brand-500" /></div>
                <div className={`relative mt-5 flex aspect-square max-h-[430px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${selected.color} ring-1 ring-inset ring-white/10`}>
                  <img src="/family/placeholder.svg" alt="Placeholder family member" className="h-full w-full object-cover opacity-60 mix-blend-screen" />
                  <div className="absolute flex h-36 w-36 items-center justify-center rounded-full border border-white/15 bg-black/40 text-7xl font-black text-white/80 shadow-2xl md:h-44 md:w-44 md:text-8xl">{selected.initials}</div>
                </div>
                <div className="mt-5">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-brand-500">Analysis target</div>
                  <h2 className="mt-1 text-4xl font-black tracking-tight">{selected.name}</h2>
                  <p className="mt-1 text-sm text-neutral-500">{selected.role}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 md:p-7">
                {isAnalyzing ? (
                  <div className="flex min-h-[430px] flex-col justify-center">
                    <div className="mb-8 flex items-center gap-3"><Activity className="h-5 w-5 animate-pulse text-brand-400" /><span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-400">Analysis in progress</span></div>
                    <div className="space-y-3 font-mono text-xs">
                      {LOGS.slice(0, logIndex + 1).map((log, index) => <div key={log} className={`flex items-center gap-3 ${index === logIndex ? 'text-brand-400' : 'text-neutral-600'}`}><span>{index === logIndex ? '>' : '✓'}</span>{log}</div>)}
                    </div>
                    <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full bg-brand-500 transition-all duration-300" style={{ width: `${Math.min(100, ((logIndex + 1) / LOGS.length) * 100)}%` }} /></div>
                  </div>
                ) : (
                  <div className="animate-fade-in-up">
                    <div className="flex items-center justify-between"><div className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-500">Analysis complete</div><div className="rounded-full border border-brand-500/20 bg-brand-500/10 px-2.5 py-1 font-mono text-[9px] text-brand-400">CONFIDENCE 98.7%</div></div>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300">“{selected.description}”</p>
                    <div className="mt-7 flex flex-wrap gap-2">{selected.traits.map((trait) => <span key={trait} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-300">{trait}</span>)}</div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      <Stat label="Intelligence" value={selected.stats.intelligence} />
                      <Stat label="Chaos Probability" value={selected.stats.chaos} />
                      <Stat label="Dad Energy" value={selected.stats.dadEnergy} />
                      <Stat label="Snack Detection" value={selected.stats.snackDetection} />
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2 border-t border-white/5 pt-5">
                      <button onClick={randomAnalysis} className="flex items-center gap-2 rounded-lg border border-brand-500/30 bg-brand-500/10 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-brand-400 hover:bg-brand-500/15"><RefreshCw className="h-3.5 w-3.5" /> Analyze another</button>
                      <button onClick={() => { nav('predictions'); setIsPredictionRevealed(false); }} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-neutral-400 hover:text-white">Run predictions <ChevronRight className="h-3.5 w-3.5" /></button>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {screen === 'predictions' && (
            <section className="mx-auto w-full max-w-4xl">
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 text-center md:p-12">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400"><Sparkles className="h-6 w-6" /></div>
                <div className="mt-7 font-mono text-[10px] uppercase tracking-[0.28em] text-brand-500">Predictive engine</div>
                <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-tight md:text-5xl">{prediction[0]}</h2>
                <p className="mt-5 font-mono text-xs uppercase tracking-wider text-neutral-600">Audience prediction required before reveal</p>
                <div className="mt-10 min-h-24 flex items-center justify-center">
                  {!isPredictionRevealed ? (
                    <button onClick={() => setIsPredictionRevealed(true)} className="group rounded-2xl border border-brand-500/30 bg-brand-500/[0.06] px-8 py-5 transition hover:border-brand-500/60 hover:bg-brand-500/10 active:scale-95">
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Click to reveal prediction</div>
                    </button>
                  ) : (
                    <div className="animate-fade-in-up rounded-2xl border border-brand-500/50 bg-brand-500/10 px-8 py-5 shadow-[0_0_50px_rgba(34,197,94,0.1)]">
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-500">Prediction result</div>
                      <div className="mt-2 flex items-center justify-center gap-2 text-xl font-bold text-brand-400"><Trophy className="h-5 w-5" /> {prediction[1]}</div>
                    </div>
                  )}
                </div>
                <div className="mt-10 flex justify-center gap-2">
                  <button onClick={() => { setPredictionIndex((i) => (i - 1 + PREDICTIONS.length) % PREDICTIONS.length); setIsPredictionRevealed(false); }} className="rounded-lg border border-white/10 p-2 text-neutral-500 hover:text-white">←</button>
                  <div className="flex items-center px-3 font-mono text-[10px] text-neutral-600">{predictionIndex + 1} / {PREDICTIONS.length}</div>
                  <button onClick={() => { setPredictionIndex((i) => (i + 1) % PREDICTIONS.length); setIsPredictionRevealed(false); }} className="rounded-lg border border-white/10 p-2 text-neutral-500 hover:text-white">→</button>
                </div>
              </div>
            </section>
          )}

          {screen === 'rankings' && <Rankings />}
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4 font-mono text-[9px] uppercase tracking-widest text-neutral-700">
          <span>Family Intelligence System · For entertainment purposes only</span>
          <span className="flex items-center gap-2"><Cpu className="h-3 w-3" /> Local inference engine · No data transmitted</span>
        </footer>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5"><div className="flex justify-between gap-3 font-mono text-[9px] uppercase tracking-wider text-neutral-500"><span>{label}</span><span className="text-brand-400">{value}%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full bg-brand-500 transition-all duration-700" style={{ width: `${value}%` }} /></div></div>
}

function Rankings() {
  const rankings = useMemo(() => [
    ['🧠 Intelligence', 'Youssef', 99],
    ['🌪️ Chaos', 'Omar', 97],
    ['🍕 Snack Detection', 'Omar', 100],
    ['👨‍👦 Dad Energy', 'Mido', 100],
    ['🗺️ Family Knowledge', 'Kimo', 98],
    ['📡 Social Intelligence', 'Reham', 95],
  ], [])

  return <section className="mx-auto w-full max-w-4xl"><div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-brand-500"><Gauge className="h-4 w-4" /> Global family metrics</div><div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">{rankings.map(([category, winner, score], index) => <div key={String(category)} className="grid grid-cols-[1fr_auto] items-center gap-5 border-b border-white/5 p-5 last:border-b-0 md:grid-cols-[1fr_1fr_auto]"><div className="font-semibold text-neutral-200">{category}</div><div className="font-mono text-sm text-brand-400 md:text-right">{winner}</div><div className="hidden rounded-full border border-brand-500/15 bg-brand-500/5 px-3 py-1 font-mono text-[10px] text-brand-400 md:block">{score}%</div></div>)}</div><div className="mt-5 rounded-2xl border border-brand-500/20 bg-brand-500/[0.04] p-6 text-center"><Users className="mx-auto h-7 w-7 text-brand-400" /><div className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-brand-500">Final system status</div><div className="mt-2 text-3xl font-black">FAMILY: <span className="text-brand-400">EXCELLENT</span></div><p className="mt-2 text-sm text-neutral-500">Compatibility 98.7% · Chaos 94.3% · Happiness 100%</p></div></section>
}
