import Link from 'next/link';
import Navbar from '@/components/Navbar';
import {
  Globe, Shield, Clock, FileCheck, Star,
  ArrowRight, Briefcase, BookOpen, Plane
} from 'lucide-react';

const stats = [
  { value: '15K+', label: 'Visas Processed' },
  { value: '98%', label: 'Success Rate' },
  { value: '60+', label: 'Countries Covered' },
  { value: '24h', label: 'Expert Response' },
];

const services = [
  {
    icon: BookOpen,
    title: 'Student Visas',
    desc: 'Study abroad with confidence. We handle F-1, Tier-4, and student visas for top destinations worldwide.',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-700',
    borderColor: 'border-sky-100',
  },
  {
    icon: Briefcase,
    title: 'Work Visas',
    desc: 'Advance your career globally. Expert guidance for H-1B, Skilled Worker, and employment visa applications.',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
    borderColor: 'border-emerald-100',
  },
  {
    icon: Plane,
    title: 'Tourist Visas',
    desc: 'Explore the world hassle-free. Fast-track tourist and visitor visa applications for 60+ countries.',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    borderColor: 'border-amber-100',
  },
];

const destinations = [
  { flag: '🇺🇸', name: 'United States', types: 3 },
  { flag: '🇬🇧', name: 'United Kingdom', types: 3 },
  { flag: '🇨🇦', name: 'Canada', types: 3 },
  { flag: '🇦🇺', name: 'Australia', types: 2 },
  { flag: '🇩🇪', name: 'Germany', types: 2 },
  { flag: '🇯🇵', name: 'Japan', types: 2 },
  { flag: '🇦🇪', name: 'UAE', types: 2 },
  { flag: '🇸🇬', name: 'Singapore', types: 2 },
];

const steps = [
  { num: '01', title: 'Select Destination', desc: 'Choose your destination country and visa category' },
  { num: '02', title: 'Review Checklist', desc: 'Get a precise document checklist for your visa type' },
  { num: '03', title: 'Submit Application', desc: 'Complete your application with expert guidance' },
];

const testimonials = [
  { name: 'Priya Sharma', from: 'India to UK', text: 'Got my Tier-4 student visa approved in just 3 weeks. The checklist feature saved me so much time!', stars: 5 },
  { name: 'Carlos Mendes', from: 'Brazil to USA', text: 'Incredible service. My F-1 visa was approved on the first attempt. Highly recommend Mz Global.', stars: 5 },
  { name: 'Yuki Tanaka', from: 'Japan to Germany', text: 'The document wizard was spot on — every item I needed was listed. Zero back-and-forth with the embassy.', stars: 5 },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient grid-pattern min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-sky-400/10" />
          <div className="absolute -top-16 -right-16 w-[350px] h-[350px] rounded-full border border-sky-400/15" />
          <div className="absolute top-1/4 -left-24 w-[300px] h-[300px] rounded-full border border-sky-400/10" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-sky-400/10 to-transparent" />
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-sky-400/8 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-sky-400/8 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-sky-500/15 border border-sky-400/30 rounded-full px-4 py-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-300 text-xs font-semibold tracking-wide">Expert Visa Consultants</span>
            </div>

            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Your Visa,
              <br />
              <span className="text-sky-400">Approved.</span>
            </h1>

            <p className="text-sky-100/80 text-lg leading-relaxed max-w-lg">
              Navigate global visa applications with precision. Instant document checklists, expert guidance, and a streamlined application process.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/apply"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-orbitron text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 transition-all duration-200 shadow-lg shadow-sky-900/50 hover:shadow-xl hover:scale-[1.02] active:scale-100"
              >
                Start Application
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#services"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-orbitron text-sm font-bold text-sky-200 border border-sky-400/30 hover:bg-sky-400/10 transition-all duration-200"
              >
                Our Services
              </a>
            </div>

            <div className="flex flex-wrap gap-5 pt-2">
              {[
                { icon: Shield, text: '100% Confidential' },
                { icon: FileCheck, text: 'Expert Review' },
                { icon: Clock, text: 'Fast Processing' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-sky-400" />
                  <span className="text-sky-200 text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl p-6 text-center"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div className="font-orbitron text-3xl font-black text-white mb-1">{value}</div>
                <div className="text-sky-300 text-xs font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats mobile */}
      <section className="bg-sky-700 lg:hidden">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 gap-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-orbitron text-2xl font-black text-white">{value}</div>
              <div className="text-sky-200 text-xs font-medium mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-orbitron text-3xl font-black text-slate-800 mb-3">How It Works</h2>
            <p className="text-slate-500 max-w-md mx-auto">Three simple steps to a successful visa application</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 h-full">
                  <div className="font-orbitron text-5xl font-black text-slate-400/70 mb-4">{s.num}</div>
                  <h3 className="font-orbitron text-base font-bold text-slate-800 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-orbitron text-sm font-bold text-white bg-sky-700 hover:bg-sky-600 transition-all duration-200 shadow-md shadow-sky-200"
            >
              Begin Your Application
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-orbitron text-3xl font-black text-slate-800 mb-3">Our Services</h2>
            <p className="text-slate-500 max-w-md mx-auto">Comprehensive visa solutions for every journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, iconBg, iconColor, borderColor }) => (
              <div
                key={title}
                className={`bg-white rounded-2xl p-8 border ${borderColor} hover:shadow-lg hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${iconBg}`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="font-orbitron text-base font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                <Link href="/apply" className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-sky-600 hover:text-sky-700">
                  Apply Now <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="countries" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-orbitron text-3xl font-black text-slate-800 mb-3">Top Destinations</h2>
            <p className="text-slate-500 max-w-md mx-auto">We cover visa applications for the world&apos;s most sought-after destinations</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {destinations.map(({ flag, name, types }) => (
              <Link
                key={name}
                href="/apply"
                className="group bg-slate-50 hover:bg-sky-50 border border-slate-100 hover:border-sky-200 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-sky-100"
              >
                <div className="text-4xl mb-3">{flag}</div>
                <div className="font-orbitron text-xs font-bold text-slate-700 group-hover:text-sky-700">{name}</div>
                <div className="text-xs text-slate-400 mt-1">{types} visa types</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-orbitron text-3xl font-black text-slate-800 mb-3">Success Stories</h2>
            <p className="text-slate-500 max-w-md mx-auto">Thousands of approved visas. Countless dreams realized.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, from, text, stars }) => (
              <div key={name} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">&ldquo;{text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{from}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="hero-gradient py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-sky-200 mb-8 text-base">
            Join thousands of successful applicants. Your visa is just a few steps away.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-orbitron text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 transition-all duration-200 shadow-xl shadow-sky-900/50 hover:shadow-2xl hover:scale-[1.03]"
          >
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#02143a] border-t border-sky-900/30 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-sky-400" />
            <span className="font-orbitron text-white font-bold text-sm">
              Visa<span className="text-sky-400">Path</span>
            </span>
          </div>
          <p className="text-sky-400/60 text-xs">
            &copy; {new Date().getFullYear()} Mz Global Consultancy. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy', 'Terms', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-sky-400/60 hover:text-sky-300 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
