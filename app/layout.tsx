import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import ActiveSectionContextProvider from '@/context/ActiveSectionContextProvider';
import Footer from '@/components/Footer';
import ThemeSwitch from '@/components/ThemeSwitch';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kathleen Mercado | Portfolio',
  description: 'Kathleen Mercado is a physical therapist turned software engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-slate-200 text-slate-950 relative h-100 pt-38 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        {/* background styles */}
        <div className="bg-[#f3e2fb] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#8CABFF]"></div>
        <div className="bg-[#d7f0fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:legt-[-33rem] lg:left=[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#37306B]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>

        <ThemeSwitch />
      </body>
    </html>
  )
}
