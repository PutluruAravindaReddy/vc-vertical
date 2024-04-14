import React ,{ useEffect, useState } from 'react';
import Focuses from './components/Homepage/Focuses/Focuses';
import Header from './components/Homepage/Header/Header'
import UpcomingEvents from './components/Homepage/UpcomingEvents/UpcomingEvents';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <html>
      <head>

      </head>
      <body>
        <NavBar/>
        <Header/>
        <Focuses/>
        <UpcomingEvents/>
        <Footer/>
      </body>
    </html>
  );
}
