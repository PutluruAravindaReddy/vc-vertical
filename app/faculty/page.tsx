import React ,{ useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Faculty from "../components/Facultypage/Faculty/Faculty";
import Footer from '../components/Footer/Footer';
import VerticalHead from "../components/Facultypage/VerticalHead/VerticalHead"

export default function Home() {
  return (
    <>
    <NavBar/>
    <VerticalHead/>
    <Faculty/>
    <Footer/>
    </>
  );
}