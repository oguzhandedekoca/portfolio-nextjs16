const projects = [
  {
    title: "Nova Commerce",
    type: "Headless E-commerce Platform",
    summary:
      "Yüksek trafikli kampanya dönemleri için tasarlanmış, segment bazlı vitrin ve hızlı checkout deneyimi sunan commerce arayüzü.",
    stack: ["Next.js", "React", "TypeScript", "Design System"],
    metric: "38% daha hızlı ürün keşfi",
  },
  {
    title: "Atlas Insight",
    type: "Analytics Dashboard",
    summary:
      "Operasyon ekipleri için gerçek zamanlı metrikleri okunabilir, filtrelenebilir ve aksiyon alınabilir hale getiren veri paneli.",
    stack: ["React", "Charts", "Tailwind", "State Machines"],
    metric: "12 modüler dashboard",
  },
  {
    title: "Pulse Banking",
    type: "Fintech Web App",
    summary:
      "Karmaşık finans akışlarını sadeleştiren, erişilebilirlik ve güven hissi üzerine kurulmuş modern müşteri deneyimi.",
    stack: ["Next.js", "A11y", "Testing", "Micro Frontends"],
    metric: "WCAG odaklı arayüz",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Performance",
  "Accessibility",
  "Design Systems",
  "Tailwind CSS",
  "Testing",
  "SSR / RSC",
  "Frontend Architecture",
  "Web Vitals",
  "UI Engineering",
];

const experience = [
  {
    year: "2019 — Bugün",
    title: "Senior Frontend Developer",
    text: "Ölçeklenebilir arayüz mimarileri, tasarım sistemleri, performans iyileştirmeleri ve ürün odaklı frontend geliştirme.",
  },
  {
    year: "2017 — 2019",
    title: "Frontend Developer",
    text: "React ekosistemi, component mimarisi, responsive arayüzler ve kullanıcı deneyimi odaklı web uygulamaları.",
  },
  {
    year: "Sürekli",
    title: "Craft & Product Mindset",
    text: "Sadece çalışan ekranlar değil; hızlı, anlaşılır, sürdürülebilir ve detayları düşünülmüş ürün deneyimleri.",
  },
];

export default function Home() {
  return (
    <main className="noise relative min-h-screen overflow-hidden">
      <div className="grid-shell absolute inset-0" />
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <nav className="glass sticky top-5 z-20 flex items-center justify-between rounded-full px-4 py-3 text-sm text-white/76 sm:px-5">
          <a className="font-semibold tracking-tight text-white" href="#top">
            Oğuzhan DEDEKOCA
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a className="transition hover:text-white" href="#work">
              Projeler
            </a>
            <a className="transition hover:text-white" href="#skills">
              Yetkinlikler
            </a>
            <a className="transition hover:text-white" href="#contact">
              İletişim
            </a>
          </div>
        </nav>

        <div id="top" className="grid flex-1 items-center gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-10">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm text-white/72 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(110,231,183,0.9)]" />
              Senior Frontend Developer · 6+ yıl deneyim
            </div>

            <h1 className="text-balance max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              Hızlı, zarif ve ürün hissi güçlü frontend deneyimleri tasarlıyorum.
            </h1>

            <p className="text-pretty mt-7 max-w-2xl text-lg leading-8 text-white/64 sm:text-xl">
              Ben Oğuzhan DEDEKOCA. Modern React ve Next.js ekosisteminde ölçeklenebilir arayüzler, temiz component mimarileri ve performans odaklı web ürünleri geliştiriyorum.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[#d8b46a] px-7 py-4 text-center font-semibold text-zinc-950 shadow-[0_18px_60px_rgba(216,180,106,0.28)] transition hover:scale-[1.02] hover:bg-[#ffcf86]"
                href="#work"
              >
                Seçili işleri gör
              </a>
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#d8b46a]/24 blur-3xl" />
            <div className="absolute -bottom-24 left-8 h-56 w-56 rounded-full bg-sky-300/18 blur-3xl" />
            <div className="relative rounded-[1.5rem] border border-white/12 bg-zinc-950/55 p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-white/48">Portfolio Snapshot</p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">Oğuzhan DEDEKOCA</h2>
                </div>
                <div className="rounded-2xl bg-white/10 px-4 py-3 text-right">
                  <p className="text-3xl font-semibold text-[#ffcf86]">6+</p>
                  <p className="text-xs text-white/52">yıl</p>
                </div>
              </div>

              <div className="grid gap-3 py-5 sm:grid-cols-3">
                {[
                  ["Focus", "Frontend"],
                  ["Level", "Senior"],
                  ["Mode", "Product"],
                ].map(([label, value]) => (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4" key={label}>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/38">{label}</p>
                    <p className="mt-2 font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {experience.map((item) => (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4" key={item.title}>
                    <p className="text-sm text-[#ffcf86]">{item.year}</p>
                    <h3 className="mt-1 font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/56">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#d8b46a]">Selected Work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
              Dummy ama gerçek ürün gibi düşünülmüş projeler.
            </h2>
          </div>
          <p className="max-w-md text-pretty leading-7 text-white/58">
            İçerikleri sonra değiştirebilirsin; yapı case-study mantığıyla genişlemeye hazır bırakıldı.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              className="glass group relative overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2"
              key={project.title}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d8b46a] via-sky-300 to-violet-300 opacity-70" />
              <p className="font-mono text-sm text-white/36">0{index + 1}</p>
              <h3 className="mt-8 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-[#ffcf86]">{project.type}</p>
              <p className="mt-5 min-h-28 text-pretty leading-7 text-white/58">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/66" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-white/[0.05] p-4 text-sm font-medium text-white/78">
                {project.metric}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="relative mx-auto grid w-full max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#d8b46a]">Capabilities</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Sadece UI değil, sürdürülebilir frontend sistemi.
          </h2>
        </div>
        <div className="glass rounded-[2rem] p-5 sm:p-7">
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div className="rounded-2xl border border-white/10 bg-zinc-950/35 p-4 text-white/78" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="glass overflow-hidden rounded-[2.25rem] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#d8b46a]">Contact</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
              Üretim yaklaşımım ve deneyimlerim hakkında daha fazlası.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/60">
              Frontend odağımı, çalışma biçimimi ve güncel profesyonel profilimi buradan takip edebilirsin.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-full bg-white px-7 py-4 text-center font-normal text-amber-500! transition hover:bg-[#ffcf86]"
              href="mailto:oguzhandedekoca@gmail.com"
            >
              oguzhandedekoca@gmail.com
            </a>
            <a
              className="rounded-full border border-white/14 px-7 py-4 text-center font-semibold text-white/84 transition hover:bg-white/8"
              href="https://www.linkedin.com/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn profili
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
