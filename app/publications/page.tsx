import React ,{ useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Publications from '../components/Publications/Publications';

export default function Home() {
  return (
    <html>
      <head>

      </head>
      <body>
        <NavBar/>

        <Publications/>

        <Footer/>
      </body>
    </html>
  );
}
