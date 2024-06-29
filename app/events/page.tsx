import NavBar from '../components/NavBar/NavBar';
import { Metadata } from 'next';
import Footer from '../components/Footer/Footer';
import Eventspage from '../components/Eventspage/Eventspage';

export default function Home() {
    return (
      <>
      <NavBar/>
      <Eventspage/>
      <Footer/>
      </>
    );
  }
