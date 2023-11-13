import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/global.css';
import { Commissioner, Jost, Poppins } from 'next/font/google';

const commissioner = Commissioner({
  subsets: ['latin'],
  variable: '--font-commissioner',
});
const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${commissioner.variable} ${jost.variable} ${poppins.variable} font-commissioner`}
    >
      <Component {...pageProps} />
    </main>
  );
}
