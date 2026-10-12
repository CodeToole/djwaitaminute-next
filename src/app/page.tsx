import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Image
            src="/logo-wordmark.jpg"
            alt="DJ Waitaminute"
            width={220}
            height={48}
            className="h-10 w-auto"
            priority
          />
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#live" className="text-sm uppercase tracking-wider hover:text-primary">
              Live
            </Link>
            <Link href="#services" className="text-sm uppercase tracking-wider hover:text-primary">
              Services
            </Link>
            <Link href="#about" className="text-sm uppercase tracking-wider hover:text-primary">
              About
            </Link>
            <Link
              href="#contact"
              className="border border-primary px-5 py-2 text-sm font-semibold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-black"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/media/djwaitaminutevisz.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 font-[family-name:var(--font-display)] text-xl uppercase tracking-[0.25em] text-primary md:text-2xl">
            Drum & Bass • Audio Engineer • Visuals
          </p>
          <h1 className="mb-6 font-[family-name:var(--font-display)] text-6xl font-bold uppercase leading-none tracking-tight md:text-8xl lg:text-9xl">
            <span className="text-accent">DJ</span>
            <span className="text-primary">WAITAMINUTE</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-xl">
            Immersive sonic experiences from Mobile, AL.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="bg-primary px-8 py-4 font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-widest text-black shadow-[0_0_20px_rgba(255,90,0,0.45)] transition hover:-translate-y-1 hover:bg-white"
            >
              Book DJWaitaminute
            </Link>
            <Link
              href="#live"
              className="border border-gray-500 px-8 py-4 font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-widest backdrop-blur-sm transition hover:border-primary hover:text-primary"
            >
              Watch Live
            </Link>
          </div>
        </div>
      </section>

      {/* VIP Signup */}
      <section className="relative border-y border-primary/30 bg-[#111] py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="mb-3 font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-primary md:text-5xl">
              VIP Dubplate Access
            </h2>
            <p className="text-lg text-gray-300">
              Exclusive Drum & Bass mixes, unreleased tracks, and private event invites.
            </p>
          </div>
          <form className="flex w-full flex-col gap-4 sm:flex-row md:w-1/2" action="#" method="post">
            <input
              type="email"
              required
              placeholder="ENTER YOUR EMAIL"
              className="w-full border border-gray-700 bg-black px-5 py-4 font-[family-name:var(--font-display)] uppercase tracking-wide text-white placeholder-gray-600 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary px-10 py-4 font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-widest text-black transition hover:bg-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Live */}
      <section id="live" className="bg-[#111] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-bold uppercase text-primary md:text-5xl">
            Live from IN2GROOVERADIO
          </h2>
          <p className="mb-10 text-lg text-gray-300">
            Catch the vibes live from Mobile, AL on the global airwaves.
          </p>
          <div className="relative mb-10 aspect-video overflow-hidden rounded-lg border-2 border-primary">
            <iframe
              src="https://player.kick.com/in2grooveradio"
              className="absolute inset-0 h-full w-full"
              allowFullScreen
              title="Live Stream"
            />
          </div>
          <div className="mx-auto max-w-md rounded-lg bg-[#222] p-6">
            <h3 className="mb-4 border-b border-gray-700 pb-3 font-bold uppercase">Show Schedule (CST)</h3>
            <ul className="space-y-3 text-lg">
              <li><strong>Tuesdays:</strong> 5:00 PM – 7:00 PM</li>
              <li><strong>Wednesdays:</strong> 6:00 PM – 8:00 PM</li>
            </ul>
            <p className="mt-4 italic text-gray-400">Drum & Bass | Jungle | Electronic</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-5xl font-bold uppercase tracking-tighter md:text-6xl">
              Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Professional audio and visual solutions for events, artists, and brands.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Event DJing", desc: "High-energy sets specializing in Drum & Bass, Techno, and Breakbeat. Available for clubs, festivals, and private events in Mobile, AL and beyond." },
              { title: "Audio Engineering", desc: "Mixing, mastering, and sound design for artists and labels. Clean, powerful results tailored to electronic music." },
              { title: "Videography", desc: "High-quality video production and editing for music videos, event recaps, and promotional content." },
            ].map((s) => (
              <div
                key={s.title}
                className="group border border-gray-800 bg-surface p-8 transition hover:border-primary"
              >
                <h3 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide">
                  {s.title}
                </h3>
                <p className="mb-6 text-gray-400">{s.desc}</p>
                <Link href="#contact" className="font-bold uppercase tracking-wider text-primary hover:text-white">
                  Book Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#111] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-5xl font-bold uppercase tracking-tighter md:text-6xl">
            About
          </h2>
          <div className="mx-auto mb-8 max-w-xs">
            <Image
              src="/logo-icon.jpg"
              alt="DJ Waitaminute Icon"
              width={280}
              height={280}
              className="mx-auto"
            />
          </div>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300">
            DJ Waitaminute brings high-energy Drum & Bass, Jungle, and electronic sets to the Gulf Coast and beyond. Based in Mobile, AL, he delivers immersive live performances, professional audio engineering, and visuals built for the dancefloor.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-5xl font-bold uppercase tracking-tighter md:text-6xl">
            Contact
          </h2>
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-700 bg-black px-5 py-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-700 bg-black px-5 py-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                required
              />
            </div>
            <select className="w-full border border-gray-700 bg-black px-5 py-4 text-white focus:border-primary focus:outline-none">
              <option>Event DJing</option>
              <option>Audio Engineering</option>
              <option>Videography</option>
              <option>Other</option>
            </select>
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full border border-gray-700 bg-black px-5 py-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-primary py-4 font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-widest text-black transition hover:bg-white"
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 flex justify-center gap-8 text-sm uppercase tracking-wider">
            <a href="https://www.instagram.com/djwaitaminute84/" target="_blank" rel="noreferrer" className="hover:text-primary">
              Instagram
            </a>
            <a href="https://www.youtube.com/@DJWaitaminute84" target="_blank" rel="noreferrer" className="hover:text-primary">
              YouTube
            </a>
            <a href="https://www.mixcloud.com/DjWaitaminutemix/" target="_blank" rel="noreferrer" className="hover:text-primary">
              Mixcloud
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DJ Waitaminute. All rights reserved.
      </footer>
    </main>
  );
}
