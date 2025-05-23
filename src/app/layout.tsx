import { Montserrat } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans min-h-screen flex flex-col`}>
        <header className="bg-gray-100 text-center p-4">
          <Link href='/' className='text-xl font-bold'>
            MiniAirbnb
          </Link>
        </header>
        <main className='flex-grow'>{children}</main>
        <footer className='bg-gray-100 text-center p-4 text-sm'>
          &copy; {new Date().getFullYear()} MiniAirbnb
        </footer>
      </body>
    </html>
  );
}
