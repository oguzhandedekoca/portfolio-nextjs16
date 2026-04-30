"use client";

import { ScrollToTopButton } from "./ScrollToTopButton";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Kadronu Kur",
    type: "Online Kadro Kurma Oyunu",
    summary:
      "Çevrimiçi olarak karşılıklı spor oyunları için kadro oluşturma ve yönetme imkanı sunan uygulama.",
    stack: ["React", "Vite", "Tailwind", "TypeScript", "WebSocket"],
    accent: "from-emerald-400 via-teal-400 to-cyan-400",
    link: "https://kadronukur.netlify.app/",
  },
  {
    title: "Saksıcı Patron Oyunu",
    type: "Multiplayer Simülasyon Oyunu",
    summary:
      "Çalışanlarına saksı atan bir patron simülasyonu ve arkadaşlarınızla kapışabileceğiniz multiplayer oyun.",
    stack: ["React", "Vite", "Antd", "Tailwind", "TypeScript", "WebSocket"],
    accent: "from-violet-500 via-indigo-400 to-purple-300",
    link: "https://langirtrezervasyon.netlify.app/",
  },
  {
    title: "Langırt Rezervasyonu",
    type: "Rezervasyon ve Multiplayer Oyun",
    summary:
      "Ofisler için langırt rezervasyonu ve multiplayer online oyun deneyimini bir araya getiren web uygulaması.",
    stack: ["React", "Vite", "Tailwind", "TypeScript", "WebSocket"],
    accent: "from-sky-500 via-emerald-400 to-fuchsia-400",
    link: "https://firfir.netlify.app/login",
  },
  {
    title: "Finrota Açık Bankacılık",
    type: "Web Geliştirme",
    summary:
      "Yenilikçi online tahsilat ve açık bankacılık çözümleri sunan Açık Bankacılık arayüzleri.",
    stack: ["React", "Antd.js", "JavaScript", "TypeScript", "WebSocket"],
    accent: "from-orange-400 via-white to-purple-500",
  },
  {
    title: "ChatBot",
    type: "Müşteri Temsilcisi Chatbot",
    summary:
      "Müşterilerin hem AI hem de müşteri temsilcileriyle görüşebildiği uçtan uca chatbot deneyimi.",
    stack: ["React", "Vite", "TypeScript", "JavaScript", "WebSocket"],
    accent: "from-zinc-100 via-amber-100 to-orange-400",
  },
  {
    title: "Chatbot BackOffice",
    type: "Yönetim Paneli",
    summary:
      "Chatbot'u yöneten paneller, Chatbot ayarları ve müşteri görüşmelerinin yönetildiği backoffice uygulaması.",
    stack: ["React", "Antd.js", "JavaScript", "TypeScript", "WebSocket", "Vite"],
    accent: "from-cyan-300 via-violet-500 to-purple-600",
  },
  {
    title: "Halısaha Skor",
    type: "Apple Watch Uygulaması",
    summary:
      "Halısaha maçlarında skoru Apple Watch üzerinden hızlıca takip etmeyi ve maç akışını pratik şekilde yönetmeyi sağlayan uygulama.",
    stack: ["Swift", "SwiftUI", "watchOS", "Apple Watch"],
    accent: "from-lime-400 via-emerald-500 to-sky-500",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Vite",
  "Webpack",
  "Performance",
  "Accessibility",
  "Design Systems",
  "shadcn/ui",
  "Styled Components",
  "Tailwind CSS",
  "Ant Design",
  "Material UI",
  "Less / Sass",
  "Testing",
  "React Testing Library",
  "Cypress",
  "State Management",
  "REST API Integration",
  "WebSocket",
  "SSR / RSC",
  "Frontend Architecture",
  "Micro Frontends",
  "Web Vitals",
  "Responsive UI",
  "Cross-browser Compatibility",
  "AI-assisted Development",
  "Prompt Engineering",
  "AI Tooling",
  "LLM Integration",
  "Code Review",
  "Technical Leadership",
  "UI Engineering",
];

const experience = [
  {
    year: "Nis 2023 — Devam ediyor",
    title: "Frontend Team Lead · ParamTech",
    text: "Hibrit çalışma modeliyle frontend ekibine liderlik ediyor, ürün arayüzleri ve ölçeklenebilir frontend mimarileri geliştiriyorum.",
  },
  {
    year: "Eyl 2022 — May 2023",
    title: "Frontend Developer · ParamTech",
    text: "İstanbul Davutpaşa lokasyonunda ParamTech ürünleri için frontend geliştirme süreçlerinde görev aldım.",
  },
  {
    year: "Eyl 2019 — Eyl 2022",
    title: "Frontend Developer · Eçözüm Bilgi Teknolojileri A.Ş.",
    text: "Yıldız Teknik Üniversitesi Teknopark'ta web arayüzleri ve kullanıcı deneyimi odaklı frontend geliştirme yaptım.",
  },
  {
    year: "Oca 2019 — Mar 2021",
    title: "Frontend Developer · Practicable",
    text: "Web Uygulamaları ve responsive arayüz geliştirme süreçlerine katkı sağladım.",
  },
];

const education = [
  {
    school: "Kırklareli Üniversitesi",
    degree: "Önlisans, Bilgisayar Programcılığı",
    year: "2013 — 2015",
  },
  {
    school: "Büyükçekmece Teknik ve Endüstri Meslek Lisesi",
    degree: "Bilgi Teknolojileri, Veritabanı",
    year: "2009 — 2013",
  },
];

const certifications = [
  {
    title: "Microsoft IT Academy",
    issuer: "Microsoft",
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setIsVisible((prev) => {
              if (prev[entry.target.id]) return prev; // Prevent unnecessary re-renders
              return { ...prev, [entry.target.id]: true };
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Delay observer setup to avoid blocking initial render
    const timeoutId = setTimeout(() => {
      document.querySelectorAll("[data-animate]").forEach((el) => {
        if (observerRef.current) observerRef.current.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <main id="top" className="noise relative min-h-screen overflow-hidden">
      <div className="grid-shell absolute inset-0" />
      <div className="pointer-events-none fixed left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ffcf86]/10 blur-3xl" />
      <div className="pointer-events-none fixed bottom-20 right-0 h-80 w-80 rounded-full bg-sky-300/10 blur-3xl" />
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <nav className="sticky top-5 z-20 flex items-center justify-between rounded-full border border-white/18 bg-zinc-950/76 px-5 py-3.5 text-sm font-medium text-white shadow-[0_18px_70px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(216,180,106,0.12)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_24px_90px_rgba(216,180,106,0.25),inset_0_1px_0_rgba(255,255,255,0.12),0_0_0_1px_rgba(216,180,106,0.18)] sm:px-6">
          <a className="font-bold tracking-tight text-[#ffcf86] transition-all hover:scale-105" href="#top">
            Oğuzhan DEDEKOCA
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a className="text-white/86 transition-all hover:scale-105 hover:text-[#ffcf86]" href="#work">
              Projeler
            </a>
            <a className="text-white/86 transition-all hover:scale-105 hover:text-[#ffcf86]" href="#skills">
              Yetkinlikler
            </a>
            <a className="text-white/86 transition-all hover:scale-105 hover:text-[#ffcf86]" href="#education">
              Eğitim
            </a>
            <a className="text-white/86 transition-all hover:scale-105 hover:text-[#ffcf86]" href="#contact">
              İletişim
            </a>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-10">
          <div data-animate id="hero-text" className={`transition-all duration-700 ${isVisible["hero-text"] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>

            <h1 className="hero-title text-balance max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Modern, sürdürülebilir ve ürün odaklı frontend deneyimleri geliştiriyorum.
            </h1>

            <p className="text-pretty mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Ben Oğuzhan Dedekoca. ParamTech şirketinde Frontend Team Lead olarak çalışıyor; React, Next.js ve TypeScript odağında ölçeklenebilir web arayüzleri geliştiriyorum.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="group rounded-full bg-[#d8b46a] px-6 py-3.5 text-center text-sm font-semibold text-zinc-950 shadow-[0_18px_60px_rgba(216,180,106,0.28),inset_0_1px_0_rgba(255,255,255,0.36)] transition-all duration-300 hover:scale-105 hover:bg-[#ffcf86] hover:shadow-[0_24px_80px_rgba(216,180,106,0.4)]"
                href="#work"
              >
                <span className="inline-block transition-transform group-hover:translate-x-1">Projelerim →</span>
              </a>
            </div>
          </div>

          <div data-animate id="hero-card" className={`glass animated-frame relative overflow-hidden rounded-[2rem] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.44)] transition-all duration-700 sm:p-7 ${isVisible["hero-card"] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
            <div className="animated-frame-cover absolute inset-0.5 rounded-[calc(2rem-2px)]" />
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#d8b46a]/24 blur-3xl" />
            <div className="absolute -bottom-24 left-8 h-56 w-56 rounded-full bg-sky-300/18 blur-3xl" />
            <div className="relative z-10 rounded-[1.5rem] border border-white/12 bg-zinc-950/62 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h2 className="mt-1 text-xl font-semibold text-white">Oğuzhan DEDEKOCA</h2>
                </div>
                <div className="rounded-[1.15rem] border border-white/12 bg-white/[0.035] px-3 py-2 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                  <p className="text-2xl font-semibold leading-none text-[#ffcf86]">7+</p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-white/48">yıl</p>
                </div>
              </div>

              <div className="grid gap-2 py-4 sm:grid-cols-3">
                {[
                  ["Focus", "Frontend"],
                  ["Role", "Team Lead"],
                  ["Location", "İstanbul"],
                ].map(([label, value]) => (
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3" key={label}>
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/38">{label}</p>
                    <p className="mt-1.5 text-sm font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5">
                {experience.map((item) => (
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3" key={item.title}>
                    <p className="text-[0.7rem] text-[#ffcf86]">{item.year}</p>
                    <h3 className="mt-1 text-sm font-semibold leading-snug text-white">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-white/62">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div data-animate id="work-header" className={`mb-10 flex flex-col justify-between gap-5 transition-all duration-700 md:flex-row md:items-end ${isVisible["work-header"] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#d8b46a]">Çalıştığım Projeler</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Tamamlanan projelerden öne çıkan çalışmalar.
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-7 text-white/64">
            Web uygulamaları, oyun deneyimleri ve yönetim panelleri için geliştirdiğim seçili frontend projeleri.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              data-animate
              id={`project-${index}`}
              className={`glass sheen-card glow-card group relative overflow-hidden rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:border-white/22 hover:shadow-[0_32px_110px_rgba(216,180,106,0.25)] ${isVisible[`project-${index}`] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
              key={project.title}
            >
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className={`relative z-10 h-44 bg-linear-to-br ${project.accent} p-5`}>
                    <div className="flex h-full flex-col justify-between rounded-2xl border border-white/25 bg-zinc-950/18 p-4 shadow-inner backdrop-blur-sm transition-all duration-300 group-hover:bg-zinc-950/24 group-hover:border-white/35">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-zinc-950">
                          0{index + 1}
                        </span>
                        <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm transition-all group-hover:border-white/50 group-hover:bg-white/20">
                          {project.type}
                        </span>
                      </div>
                      <div>
                        <div className="mb-3 h-2 w-24 rounded-full bg-white/70" />
                        <div className="grid grid-cols-3 gap-2">
                          <span className="h-8 rounded-lg bg-white/35" />
                          <span className="h-8 rounded-lg bg-white/25" />
                          <span className="h-8 rounded-lg bg-white/40" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#ffcf86]">{project.title}</h3>
                      <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#ffcf86]/30 bg-[#ffcf86]/10 px-3 py-1.5 transition-all duration-300 group-hover:border-[#ffcf86]/50 group-hover:bg-[#ffcf86]/20">
                        <svg className="h-3.5 w-3.5 text-[#ffcf86]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-[#ffcf86]">Ziyaret Et</span>
                      </div>
                    </div>
                    <p className="mt-5 min-h-24 text-pretty text-sm leading-7 text-white/64 transition-colors group-hover:text-white/78">{project.summary}</p>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/52">Teknolojiler</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/66 transition-all duration-300 group-hover:border-white/16 group-hover:bg-white/10 group-hover:text-white/78" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <>
                  <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className={`relative z-10 h-44 bg-linear-to-br ${project.accent} p-5`}>
                    <div className="flex h-full flex-col justify-between rounded-2xl border border-white/25 bg-zinc-950/18 p-4 shadow-inner backdrop-blur-sm transition-all duration-300 group-hover:bg-zinc-950/24 group-hover:border-white/35">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-zinc-950">
                          0{index + 1}
                        </span>
                        <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm transition-all group-hover:border-white/50 group-hover:bg-white/20">
                          {project.type}
                        </span>
                      </div>
                      <div>
                        <div className="mb-3 h-2 w-24 rounded-full bg-white/70" />
                        <div className="grid grid-cols-3 gap-2">
                          <span className="h-8 rounded-lg bg-white/35" />
                          <span className="h-8 rounded-lg bg-white/25" />
                          <span className="h-8 rounded-lg bg-white/40" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 p-6">
                    <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#ffcf86]">{project.title}</h3>
                    <p className="mt-5 min-h-24 text-pretty text-sm leading-7 text-white/64 transition-colors group-hover:text-white/78">{project.summary}</p>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/52">Teknolojiler</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/66 transition-all duration-300 group-hover:border-white/16 group-hover:bg-white/10 group-hover:text-white/78" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-20 sm:px-8 lg:px-10">
        <div data-animate id="skills-header" className={`max-w-4xl transition-all duration-700 ${isVisible["skills-header"] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#d8b46a]">Yetkinliklerim</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Sadece UI değil, sürdürülebilir frontend sistemi.
          </h2>
        </div>
        <div data-animate id="skills-grid" className={`glass glow-card relative overflow-hidden rounded-[2rem] p-3 transition-all duration-700 sm:p-4 ${isVisible["skills-grid"] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-[#ffcf86]/35 to-transparent" />
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ffcf86]/14 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-violet-300/12 blur-3xl" />
          <div className="relative grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skills.map((skill) => (
              <div 
                className="orb-hover group flex items-center gap-3 rounded-2xl border border-white/10 bg-linear-to-br from-white/7 to-white/2 px-4 py-3 text-sm text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ffcf86]/35 hover:from-[#ffcf86]/12 hover:to-white/4 hover:text-white hover:shadow-[0_18px_48px_rgba(216,180,106,0.26)]" 
                key={skill}
              >
                <span className="relative h-2 w-2 shrink-0 rounded-full bg-[#ffcf86] shadow-[0_0_18px_rgba(255,207,134,0.55)] transition-all duration-300 group-hover:scale-125" />
                <span className="relative z-10">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="relative mx-auto grid w-full max-w-7xl gap-5 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div data-animate id="education-card" className={`glass glow-card rounded-[2rem] p-6 transition-all duration-700 sm:p-8 ${isVisible["education-card"] ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#d8b46a]">Eğitim</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">Eğitim</h2>
          <div className="mt-8 space-y-4">
            {education.map((item) => (
              <div 
                className="orb-hover rounded-2xl border border-white/10 bg-zinc-950/35 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#ffcf86]/28 hover:bg-zinc-950/45" 
                key={item.school}
              >
                <h3 className="text-lg font-semibold text-white transition-colors hover:text-[#ffcf86]">{item.school}</h3>
                <p className="mt-2 text-sm leading-7 text-white/68">{item.degree}</p>
                <p className="mt-2 text-sm text-[#ffcf86]">{item.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-animate id="certifications-card" className={`glass glow-card rounded-[2rem] p-6 transition-all duration-700 sm:p-8 ${isVisible["certifications-card"] ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#d8b46a]">Sertifikalar</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">Lisanslar ve Sertifikalar</h2>
          <div className="mt-8 space-y-4">
            {certifications.map((item) => (
              <div className="orb-hover rounded-2xl border border-white/10 bg-zinc-950/35 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#ffcf86]/28 hover:bg-zinc-950/45" key={item.title}>
                <h3 className="text-lg font-semibold text-white transition-colors hover:text-[#ffcf86]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/68">{item.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div data-animate id="contact-card" className={`glass sheen-card glow-card relative overflow-hidden rounded-[2.25rem] p-8 transition-all duration-700 sm:p-12 lg:p-16 ${isVisible["contact-card"] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#ffcf86]/12 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sky-300/10 blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#d8b46a]">İletişim</p>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Üretim yaklaşımım ve deneyimlerim hakkında daha fazlası.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/66">
              Frontend odağımı, çalışma biçimimi, eğitim ve sertifika bilgilerimi güncel LinkedIn profilimden takip edebilirsin.
            </p>
          </div>
          <div className="relative z-10 mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              className="group rounded-full bg-[#d8b46a] px-6 py-3.5 text-center text-sm font-semibold text-zinc-950 shadow-[0_18px_60px_rgba(216,180,106,0.28),inset_0_1px_0_rgba(255,255,255,0.36)] transition-all duration-300 hover:scale-105 hover:bg-[#ffcf86] hover:shadow-[0_24px_80px_rgba(216,180,106,0.4)]"
              href="mailto:oguzhandedekoca@gmail.com"
            >
              oguzhandedekoca@gmail.com
            </a>
            <a
              className="group rounded-full border border-white/14 px-6 py-3.5 text-center text-sm font-semibold text-white/84 transition-all duration-300 hover:scale-105 hover:border-white/25 hover:bg-white/8"
              href="https://www.linkedin.com/in/oguzhandedekoca"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn profili
            </a>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </main>
  );
}
