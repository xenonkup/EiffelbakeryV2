'use client';

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import News from "./components/News";
import Ourproduct from "./components/Ourproduct";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
})


const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  return (

    <div className={`${roboto.className}`}>
      <Navbar />
      <Hero />
      <About />
      <News />
      <Ourproduct />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Page;
