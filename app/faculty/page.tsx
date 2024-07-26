import NavBar from '../components/NavBar/NavBar';
import { Metadata } from 'next';
import Faculty from "../components/Facultypage/Faculty/Faculty";
import Footer from '../components/Footer/Footer';
import VerticalHead from "../components/Facultypage/VerticalHead/VerticalHead"

export const metadata:Metadata = {
  title: 'Faculty - SRM Institute of Science and Technology',
  description: 'Meet the faculty members specializing in Computer Vision at SRM Institute of Science and Technology, dedicated to advancing the field through innovative research and teaching.',
  twitter: {
    card: 'summary_large_image',
    title: 'Faculty at SRM Institute of Science and Technology',
    description: 'Explore the faculty specializing in Computer Vision at SRM Institute of Science and Technology, driving innovation through research and education.',
    images: ['/img/Logo/srm_logo.svg'],
  },
  openGraph: {
    url: 'https://vc-vertical.vercel.app/faculty',
    title: 'Faculty - SRM Institute of Science and Technology',
    description: 'Meet the faculty members specializing in Computer Vision at SRM Institute of Science and Technology, dedicated to advancing the field through innovative research and teaching.',
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
  metadataBase: new URL('https://vc-vertical.vercel.app/faculty'),
  themeColor: '#000000',
  keywords: ['Computer Vision', 'Faculty', 'SRM Institute of Science and Technology', 'CV specialists', 'research', 'education'],
  robots: 'index,follow',
  authors: [{ name: 'SRM Institute of Science and Technology' }],
};



export default function Home() {
  return (
    <div className='dark:bg-black'>
    <NavBar/>
    <VerticalHead/>
    <Faculty/>
    <Footer/>
    </div>
  );
}