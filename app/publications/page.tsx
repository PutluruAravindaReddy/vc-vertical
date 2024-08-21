import { Metadata } from 'next';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Publications from '../components/Publications/Publications';

export const metadata : Metadata = {
  title: 'Publications - Visual Computing Lab | SRM Institute of Science and Technology',
  description: 'Explore publications, patents, books, courses, workshops, research proposals, and outcomes from the Visual Computing Lab at SRM Institute of Science and Technology.',
  twitter: {
    card: 'summary_large_image',
    title: 'Publications and Research - Visual Computing Lab at SRM Institute of Science and Technology',
    description: 'Discover publications, patents, books, courses, workshops, research proposals, and outcomes from the Visual Computing Lab at SRM Institute of Science and Technology.',
    images: ['/img/Logo/srm_logo.svg'],
  },
  openGraph: {
    url: 'https://vc-vertical.vercel.app/publications',
    title: 'Publications and Research - Visual Computing Lab | SRM Institute of Science and Technology',
    description: 'Explore publications, patents, books, courses, workshops, research proposals, and outcomes from the Visual Computing Lab at SRM Institute of Science and Technology.',
    images: [
      {
        url: '/img/Logo/srm_logo.svg',
        width: 800,
        height: 600,
        alt: 'SRM Institute of Science and Technology Logo',
      },
    ],
    siteName: 'SRM Institute of Science and Technology',
  },
  metadataBase: new URL('https://vc-vertical.vercel.app/publications'),
  themeColor: '#000000',
  keywords: [
    'Publications',
    'Patents',
    'Books',
    'Book chapters',
    'Certificate courses',
    'FDP',
    'STTP',
    'Workshops',
    'Research proposals',
    'Research outcomes',
    'Visual Computing Lab',
    'SRM Institute of Science and Technology',
    'academic research'
  ],
  robots: 'index,follow',
  authors: [{ name: 'SRM Institute of Science and Technology' }],
};


export default function Home() {
  return (
      <div className='dark:bg-black'>
        <NavBar/>

        <Publications/>

        <Footer/>
      </div>
  );
}
