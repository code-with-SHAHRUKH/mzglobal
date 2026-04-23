import Link from 'next/link';
import VisaWizard from '@/components/visa-wizard/VisaWizard';
import { Globe, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Apply for a Visa — Mz Global',
  description: 'Start your visa application with our guided multi-step wizard',
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen grid-pattern" style={{ background: 'linear-gradient(160deg, #f0f6ff 0%, #e8f0fe 50%, #f0f6ff 100%)' }}>
      {/* Minimal top bar */}
      <header className="bg-[#02143a] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-sky-500 rounded-lg flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-orbitron text-white font-bold text-base tracking-wide">
              Visa<span className="text-sky-400">Path</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sky-300 hover:text-white text-xs font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Page content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="font-orbitron text-3xl font-black text-slate-800 mb-2">
            Start Your Visa Application
          </h1>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Complete the form below to apply for your visa. Our experts will review your application within 24 hours.
          </p>
        </div>

        <VisaWizard />

        {/* Trust footer */}
        <div className="max-w-2xl mx-auto mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            { title: 'SSL Secured', sub: 'Bank-grade encryption' },
            { title: 'GDPR Compliant', sub: 'Your data is protected' },
            { title: 'Expert Support', sub: '24h response guarantee' },
          ].map(({ title, sub }) => (
            <div key={title} className="bg-white/60 rounded-xl py-3 px-2 border border-white/80">
              <div className="font-orbitron text-xs font-bold text-slate-700">{title}</div>
              <div className="text-xs text-slate-400 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
