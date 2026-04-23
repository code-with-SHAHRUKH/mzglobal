'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, ArrowLeft, Search, Filter, Eye, X, Loader as Loader2, Mail, Phone, Calendar, CreditCard, FileText, Clock } from 'lucide-react';

interface Application {
  id: string;
  applicantName: string;
  email: string;
  phone: string;
  date_of_birth: string | null;
  nationality: string;
  passport_number: string;
  status: string;
  notes: string;
  created_at: string;
  destination_country: {
    id: string;
    name: string;
    flag_emoji: string;
  };
  visa_type: {
    id: string;
    name: string;
    category: string;
  };
}

const statusColors: Record<string, string> = {
  pending: 'bg-amber-100 text-amber-700 border-amber-200',
  under_review: 'bg-sky-100 text-sky-700 border-sky-200',
  approved: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  rejected: 'bg-red-100 text-red-700 border-red-200',
};

export default function AdminPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  console.log("applications in admin pannel",applications);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  useEffect(() => {
    fetchApplications();
  }, [statusFilter]);

  const fetchApplications = async () => {
    setLoading(true);
    const url = statusFilter === 'all'
      ? '/api/applications'
      : `/api/applications?status=${statusFilter}`;
    const res = await fetch(url);
    const data = await res.json();
    setApplications(data);
    setLoading(false);
  };

  const filtered = applications.filter(app =>
    app.applicantName.toLowerCase().includes(search.toLowerCase()) ||
    app.email.toLowerCase().includes(search.toLowerCase()) ||
    app.nationality.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const formatDateTime = (date: string) =>
    new Date(date).toLocaleString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
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
          <div className="flex items-center gap-3">
            <span className="text-sky-300 text-xs font-medium">Admin Dashboard</span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="font-orbitron text-2xl font-bold text-slate-800">Applications</h1>
          <p className="text-slate-500 text-sm mt-1">View and manage submitted visa applications</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, email, or nationality..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-sky-500 bg-white"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="under_review">Under Review</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <div className="text-sm text-slate-500">
            {filtered.length} application{filtered.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-6 h-6 animate-spin text-sky-600" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              No applications found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Applicant</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Destination</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Visa Type</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Submitted</th>
                    <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="font-medium text-slate-800 text-sm">{app.applicantName}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{app.email}</div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{app.destination_country?.flag_emoji}</span>
                          <span className="text-sm text-slate-700">{app.destination_country?.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="text-sm text-slate-700">{app.visa_type?.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{app.visa_type?.category}</div>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[app.status] || 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                          {app.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-500">
                        {formatDate(app.created_at)}
                      </td>
                      <td className="px-5 py-4 text-right">
                        <button
                          onClick={() => setSelectedApp(app)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <h2 className="font-orbitron text-lg font-bold text-slate-800">Application Details</h2>
              <button
                onClick={() => setSelectedApp(null)}
                className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Status */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Status</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[selectedApp.status] || 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                  {selectedApp.status.replace('_', ' ')}
                </span>
              </div>

              {/* Applicant Info */}
              <div className="space-y-3">
                <h3 className="font-orbitron text-xs font-bold text-slate-400 uppercase tracking-wider">Applicant</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-400 w-4"><Mail className="w-4 h-4" /></span>
                    <span className="text-slate-700">{selectedApp.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-400 w-4"><Phone className="w-4 h-4" /></span>
                    <span className="text-slate-700">{selectedApp.phone || '—'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-400 w-4"><Calendar className="w-4 h-4" /></span>
                    <span className="text-slate-700">{selectedApp.date_of_birth ? formatDate(selectedApp.date_of_birth) : '—'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-400 w-4"><CreditCard className="w-4 h-4" /></span>
                    <span className="text-slate-700 font-mono">{selectedApp.passport_number || '—'}</span>
                  </div>
                </div>
                <div className="text-sm">
                  <span className="text-slate-400">Nationality: </span>
                  <span className="text-slate-700 font-medium">{selectedApp.nationality}</span>
                </div>
              </div>

              {/* Visa Info */}
              <div className="space-y-3">
                <h3 className="font-orbitron text-xs font-bold text-slate-400 uppercase tracking-wider">Visa Details</h3>
                <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{selectedApp.destination_country?.flag_emoji}</span>
                    <div>
                      <div className="font-medium text-slate-800">{selectedApp.destination_country?.name}</div>
                      <div className="text-xs text-slate-500">{selectedApp.visa_type?.category} Visa</div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-600">{selectedApp.visa_type?.name}</div>
                </div>
              </div>

              {/* Timestamps */}
              <div className="space-y-3">
                <h3 className="font-orbitron text-xs font-bold text-slate-400 uppercase tracking-wider">Timeline</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock className="w-4 h-4" />
                  Submitted {formatDateTime(selectedApp.created_at)}
                </div>
              </div>

              {/* Notes */}
              {selectedApp.notes && (
                <div className="space-y-2">
                  <h3 className="font-orbitron text-xs font-bold text-slate-400 uppercase tracking-wider">Notes</h3>
                  <p className="text-sm text-slate-600 bg-slate-50 rounded-lg p-3">{selectedApp.notes}</p>
                </div>
              )}
            </div>

            <div className="sticky bottom-0 bg-white border-t border-slate-200 px-6 py-4 flex justify-end gap-3">
              <button
                onClick={() => setSelectedApp(null)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
