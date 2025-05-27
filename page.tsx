'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <main className="min-h-screen bg-fondClair text-texteFonce dark:bg-fondSombre dark:text-texteClair transition-colors duration-500 px-6 py-10">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="border px-4 py-1 rounded-full text-sm hover:bg-jaune dark:hover:bg-rouge transition"
        >
          {theme === 'light' ? 'Mode sombre' : 'Mode clair'}
        </button>
      </div>

      <h1 className="text-4xl font-serif mb-4">Florian Maillard – Photographe</h1>
      <p className="mb-8 max-w-xl">Photographe passionné spécialisé en portrait, mariage et évènementiel. Découvrez mon univers visuel.</p>

      <nav className="mb-10 flex flex-wrap gap-4">
        {['Portrait', 'Mariage', 'Entreprise', 'Évènementiel'].map((cat) => (
          <Link
            key={cat}
            href={`/${cat.toLowerCase()}`}
            className="px-4 py-2 rounded-md bg-rouge text-white hover:bg-jaune hover:text-black transition"
          >
            {cat}
          </Link>
        ))}
      </nav>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div
            key={id}
            className="bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center text-2xl text-gray-500"
          >
            Photo {id}
          </div>
        ))}
      </section>

      <section className="bg-jaune text-black p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Tarifs express</h2>
        <ul className="space-y-2">
          <li>📸 Portrait : à partir de 120€</li>
          <li>💍 Mariage : à partir de 750€</li>
          <li>🏢 Entreprise : sur devis</li>
        </ul>
        <Link
          href="/tarifs"
          className="mt-4 inline-block underline text-rouge hover:text-black"
        >
          Voir tous les tarifs
        </Link>
      </section>
    </main>
  );
}
