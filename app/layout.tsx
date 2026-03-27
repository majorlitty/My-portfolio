import type {Metadata} from 'next';
import { Bricolage_Grotesque, BioRhyme } from 'next/font/google';
import './globals.css'; // Global styles

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

const biorhyme = BioRhyme({
  subsets: ['latin'],
  variable: '--font-biorhyme',
  weight: ['200', '300', '400', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Web Design Agency',
  description: 'We build high-converting websites for local and service businesses',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${biorhyme.variable}`}>
      <body className="font-body text-secondary bg-background antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
