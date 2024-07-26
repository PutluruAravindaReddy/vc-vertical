import { Metadata } from 'next';

import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';


export const metadata : Metadata= {
  title: 'Gallery - Visual Computing Lab | SRM Institute of Science and Technology',
  description: 'Explore the gallery of images showcasing projects and activities from the Visual Computing Lab at SRM Institute of Science and Technology.',
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery - Visual Computing Lab at SRM Institute of Science and Technology',
    description: 'Discover the diverse projects and activities of the Visual Computing Lab at SRM Institute of Science and Technology through our gallery of images.',
    images: ['/img/Logo/srm_logo.svg'],
  },
  openGraph: {
    url: 'https://vc-vertical.vercel.app/gallery',
    title: 'Gallery - Visual Computing Lab | SRM Institute of Science and Technology',
    description: 'Explore the gallery of images showcasing projects and activities from the Visual Computing Lab at SRM Institute of Science and Technology.',
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
  metadataBase: new URL('https://vc-vertical.vercel.app/gallery'),
  themeColor: '#000000',
  keywords: ['Visual Computing Lab', 'SRM Institute of Science and Technology', 'gallery', 'projects', 'activities', 'visual computing'],
  robots: 'index,follow',
  authors: [{ name: 'SRM Institute of Science and Technology' }],
};


export default function Home() {
  return (
    <div className='dark:bg-black'>
        <NavBar/>

        <Gallery/>

        <Footer/>
    </div>
  );
}
