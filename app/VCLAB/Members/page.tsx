import { Metadata } from 'next';
import NavBar from '@/app/components/NavBar/NavBar';
import Footer from '@/app/components/Footer/Footer';
import LabStudents from '@/app/components/LabMembers/LabStudents/LabStudents';
import LabFaculty from '@/app/components/LabMembers/LabFaculty/LabFaculty';

export const metadata :Metadata= {
    title: 'VCLab Members - SRM Institute of Science and Technology',
    description: 'Explore faculty mentoring and student projects under the Visual Computing Lab (VCLab) at SRM Institute of Science and Technology, fostering innovation and collaboration in computer vision.',
    twitter: {
      card: 'summary_large_image',
      title: 'VCLab Members - SRM Institute of Science and Technology',
      description: 'Discover faculty mentoring and student projects under the Visual Computing Lab (VCLab) at SRM Institute of Science and Technology, fostering innovation and collaboration in computer vision.',
      images: ['/img/Logo/srm_logo.svg'],
    },
    openGraph: {
      url: 'https://vc-vertical.vercel.app/vclab/members',
      title: 'VCLab Members - SRM Institute of Science and Technology',
      description: 'Explore faculty mentoring and student projects under the Visual Computing Lab (VCLab) at SRM Institute of Science and Technology, fostering innovation and collaboration in computer vision.',
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
    metadataBase: new URL('https://vc-vertical.vercel.app/vclab/members'),
    themeColor: '#000000',
    keywords: [
      'VCLab Members',
      'Faculty mentoring',
      'Student projects',
      'Visual Computing Lab',
      'SRM Institute of Science and Technology',
      'computer vision',
      'innovation',
      'collaboration'
    ],
    robots: 'index,follow',
    authors: [{ name: 'SRM Institute of Science and Technology' }],
  };
  

export default function Members(){
    return(
        <>
        <NavBar/>
        <LabFaculty/>
        <LabStudents title=''/>
        <Footer/>
        </>
    )
}