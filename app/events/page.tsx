import NavBar from '../components/NavBar/NavBar';
import { Metadata } from 'next';
import Footer from '../components/Footer/Footer';
import Eventspage from '../components/Eventspage/Eventspage';


export const metadata: Metadata = {
  title: 'Events - Visual Computing Vertical | SRM Institute of Science and Technology',
  description: 'Discover the latest events in Computer Vision at SRM Institute of Science and Technology, where cutting-edge research and innovation are showcased.',
  twitter: {
    card: 'summary_large_image',
    title: 'Events at SRM Institute of Science and Technology',
    description: 'Stay updated with the latest events in the field of Computer Vision at SRM Institute of Science and Technology.',
    images: ['/img/Logo/srm_logo.svg'],
  },
  openGraph: {
    url: 'https://vc-vertical.vercel.app/events',
    title: 'Events - SRM Institute of Science and Technology',
    description: 'Explore upcoming events in Computer Vision hosted by SRM Institute of Science and Technology, where academic excellence meets innovation.',
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
  metadataBase: new URL('https://vc-vertical.vercel.app/events'),
  themeColor: '#000000',
  keywords: ['Computer Vision', 'Events', 'SRM Institute of Science and Technology', 'CV events', 'research', 'innovation'],
  robots: 'index,follow',
  authors: [{ name: 'SRM Institute of Science and Technology' }],
};


export default function Home() {
    return (
      <div className='dark:bg-black'>
      <NavBar/>
      <Eventspage/>
      <Footer/>
      </div>
    );
  }
