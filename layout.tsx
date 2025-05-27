import './globals.css';

export const metadata = {
  title: 'Florian Maillard - Photographe',
  description: 'Portfolio photo portrait, mariage, événementiel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
