'use client'
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Header from './components/Header';
import Hero from './components/Hero';
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {

  useEffect(() => {
    // Dynamically import jQuery after the page loads
    const loadJQuery = async () => {
      const $ = (await import('jquery')).default;

      $(function () {
        $('.about-v-btn').on('click', function () {
          $('.trascript-v-btn-sm').toggleClass('trascript-expand');
        });
      });
      // Dropdown Menu Fade
      $(function () {
        $('.dropdown').hover(
          function () {
            $('.dropdown-menu', this).stop(true, true).fadeIn('fast');
          },
          function () {
            $('.dropdown-menu', this).stop(true, true).fadeOut('fast');
          }
        );
      });

    };

    loadJQuery();
  }, []);

  const router = useRouter();

  return (
    <div>
      <main>
        <>
          <Header />
          <Hero />
          <Features />
          <Footer />
        </>
      </main>
    </div>
  )
}