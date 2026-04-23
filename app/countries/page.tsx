'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Country } from '@/lib/supabase';

export default function CountriesPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/countries');
      if (!response.ok) {
        throw new Error('Failed to fetch countries');
      }
      const data = await response.json();
      setCountries(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading countries...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 mb-4">Error: {error}</div>
          <button
            onClick={fetchCountries}
            className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Countries</h1>
          <p className="text-slate-600">Explore destinations for your visa applications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country) => (
            <div
              key={country.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-200"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{country.flag_emoji}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">{country.name}</h3>
                    <p className="text-sm text-slate-500">{country.code}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Region:</span>
                    <span className="font-medium text-slate-800">{country.region}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Destination:</span>
                    <span className={`font-medium ${country.is_destination ? 'text-green-600' : 'text-red-600'}`}>
                      {country.is_destination ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/apply?country=${country.id}`}
                  className="w-full mt-4 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium text-center block"
                >
                  Apply for Visa
                </Link>
              </div>
            </div>
          ))}
        </div>

        {countries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No countries found.</p>
          </div>
        )}
      </div>
    </div>
  );
}