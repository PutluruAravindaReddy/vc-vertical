import React, { useEffect, useState } from "react";
import Focuses from "./components/Homepage/Focuses/Focuses";
import { Metadata } from "next";
import Header from "./components/Homepage/Header/Header";
import UpcomingEvents from "./components/Homepage/UpcomingEvents/UpcomingEvents";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { useSession } from "next-auth/react";

export const metadata: Metadata = {
  title:
    "Home - Visual Computing Vertical | SRM Institute of Science and Technology",
  description:
    "Explore the Computer Vision vertical and the Visual Computing Lab at SRM Institute of Science and Technology, where faculty and students collaborate on innovative CV projects.",
  twitter: {
    card: "summary_large_image",
    title: "Computer Vision at SRM Institute of Science and Technology",
    description:
      "Discover the Visual Computing Lab and the Computer Vision vertical at SRM Institute of Science and Technology, dedicated to cutting-edge research and student collaboration.",
    images: ["/img/Logo/srm_logo.svg"],
  },
  openGraph: {
    url: "https://vcvertical-srmist.vercel.app",
    title: "Home - SRM Institute of Science and Technology",
    description:
      "Explore the Computer Vision vertical and the Visual Computing Lab at SRM Institute of Science and Technology, where faculty and students collaborate on innovative CV projects.",
    images: [
      {
        url: "/img/Logo/srm_logo.svg",
        width: 800,
        height: 600,
        alt: "SRM Institute of Science and Technology Logo",
      },
    ],
    siteName: "SRM Institute of Science and Technology",
  },
  metadataBase: new URL("https://vcvertical-srmist.vercel.app"),
  themeColor: "#000000",
  keywords: [
    "Computer Vision",
    "srmist",
    "vclab srmist",
    "srm",
    "vertical srm",
    "Visual Computing Lab",
    "SRM University",
    "SRM Institute of Science and Technology",
    "CV projects",
    "research",
    "technology",
    "education",
  ],
  robots: "index,follow",
  authors: [{ name: "SRM Institute of Science and Technology" }],
};

export default function Home() {
  return (
    <>
      <div className="dark:bg-black">
        <NavBar />
      </div>
      <Header />
      <div className="dark:bg-black">
        <Focuses />
        <UpcomingEvents />
        <Footer />
      </div>
    </>
  );
}
