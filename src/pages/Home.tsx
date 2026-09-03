import { useState } from 'react'
import { translations, type Lang } from '../i18n'

const COMMAND = 'npx laplateforme-starter my-app'
const GITHUB_URL = 'https://github.com/konstantine-garozashvili/ci-cd-kube'
const NPM_URL = 'https://www.npmjs.com/package/laplateforme-starter'

function CopyCommand({ copyLabel, copiedLabel }: { copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COMMAND)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = COMMAND
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto flex w-full max-w-xl items-center justify-between gap-3 rounded-xl border border-blue-200 bg-slate-950 px-5 py-4 shadow-lg shadow-blue-100">
      <code data-testid="install-command" className="select-all font-mono text-sm text-blue-300 sm:text-base">
        <span className="text-slate-500">$ </span>
        {COMMAND}
      </code>
      <button
        onClick={handleCopy}
        data-testid="copy-button"
        className="shrink-0 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 active:scale-95"
      >
        {copied ? `✓ ${copiedLabel}` : copyLabel}
      </button>
    </div>
  )
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex rounded-lg border border-blue-200 bg-white p-0.5 text-sm font-semibold">
      {(['fr', 'en'] as const).map((l) => (
        <button
          key={l}
          data-testid={`lang-${l}`}
          onClick={() => setLang(l)}
          className={`rounded-md px-3 py-1.5 uppercase transition ${
            lang === l ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('fr')
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      {/* ── Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-10 border-b border-blue-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <img src="logo.png" alt="La Plateforme" className="h-7 w-auto" data-testid="logo" />
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#how" className="transition hover:text-blue-600">{t.nav.howItWorks}</a>
            <a href="#stack" className="transition hover:text-blue-600">{t.nav.stack}</a>
            <a href="#pipeline" className="transition hover:text-blue-600">{t.nav.pipeline}</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="transition hover:text-blue-600">
              {t.nav.github}
            </a>
          </nav>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-20 text-center sm:pt-28">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
            {t.hero.badge}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
            {t.hero.title}
            <br />
            <span className="text-blue-600">{t.hero.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">{t.hero.subtitle}</p>
          <div className="mt-10">
            <CopyCommand copyLabel={t.hero.copy} copiedLabel={t.hero.copied} />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700"
            >
              {t.hero.cta}
            </a>
            <a
              href="#how"
              className="rounded-lg border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────── */}
      <section id="how" className="border-t border-blue-100 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900">{t.how.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">{t.how.subtitle}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.how.steps.map((step, i) => (
              <div
                key={i}
                className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/60 to-white p-7 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stack matrix ───────────────────────────────────── */}
      <section id="stack" className="border-t border-blue-100 bg-blue-50/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900">{t.stack.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">{t.stack.subtitle}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { label: t.stack.backend, items: t.stack.backends },
              { label: t.stack.frontend, items: t.stack.frontends },
              { label: t.stack.database, items: t.stack.databases },
            ].map((col) => (
              <div key={col.label} className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600">{col.label}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pipeline ───────────────────────────────────────── */}
      <section id="pipeline" className="border-t border-blue-100 bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold">{t.pipeline.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400">{t.pipeline.subtitle}</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.pipeline.items.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500"
              >
                <div className="flex items-center gap-2 font-mono text-sm font-semibold text-blue-400">
                  <span className="text-green-400">✔</span> {item.name}
                </div>
                <p className="mt-1.5 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">{t.pipeline.note}</p>
        </div>
      </section>

      {/* ── Kubernetes-native ──────────────────────────────── */}
      <section className="border-t border-blue-100 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900">{t.k8s.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">{t.k8s.subtitle}</p>
          <ul className="mx-auto mt-10 max-w-2xl space-y-4">
            {t.k8s.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-sm text-slate-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Credits / Footer ───────────────────────────────── */}
      <footer className="border-t border-blue-100 bg-blue-600 py-14 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <img src="logo.png" alt="La Plateforme" className="mx-auto h-8 w-auto rounded bg-white px-3 py-1.5" />
          <h2 className="mt-8 text-xl font-bold">{t.credits.title}</h2>
          <p className="mt-3 text-sm text-blue-100">
            {t.credits.author}{' '}
            <a
              href="https://github.com/konstantine-garozashvili"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white underline decoration-blue-300 underline-offset-4 hover:decoration-white"
            >
              Konstantine Garozashvili
            </a>
          </p>
          <p className="mt-1.5 text-sm text-blue-100">
            {t.credits.school}{' '}
            <a href="https://laplateforme.io" target="_blank" rel="noreferrer" className="font-semibold text-white underline decoration-blue-300 underline-offset-4 hover:decoration-white">
              La Plateforme_
            </a>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="transition hover:text-blue-200">GitHub</a>
            <a href={NPM_URL} target="_blank" rel="noreferrer" className="transition hover:text-blue-200">npm</a>
            <span className="text-blue-200">{t.credits.license}</span>
          </div>
          <p className="mt-8 text-xs text-blue-200">{t.footer}</p>
        </div>
      </footer>
    </div>
  )
}
