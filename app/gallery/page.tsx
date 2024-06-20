import React ,{ useEffect, useState } from 'react';

import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';

export default function Home() {
  return (
    <html>
      <head>

      </head>
      <body>
        <NavBar/>

        <Gallery/>

        <Footer/>
      </body>
    </html>
  );
}
