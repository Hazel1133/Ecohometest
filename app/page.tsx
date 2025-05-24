'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Playfair_Display, Inter } from 'next/font/google'
import Image from "next/image"

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTally();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f4ea] to-[rgb(13,134,44)] flex flex-col items-center py-8">
      {/* Main container with rounded corners */}
      <div className="w-full max-w-[1200px] bg-white rounded-[40px] shadow-2xl overflow-hidden">
        {/* Header */}
        <header className="flex justify-between items-center px-12 py-8">
          <div className="text-2xl font-bold flex items-center gap-2 font-serif" style={{ color: 'rgb(13,134,44)' }}>
            EcoHomes
            {/* EcoHomes SVG Logo: house with a leaf, now green */}
            <span className="inline-block align-middle">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="14" width="16" height="12" rx="2" fill="rgb(13,134,44)"/>
                <path d="M16 6L6 16H10V26H22V16H26L16 6Z" fill="#15803d"/>
                <path d="M20 20C20 22.2091 18.2091 24 16 24C13.7909 24 12 22.2091 12 20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
          </div>
          <nav className="flex gap-8 items-center text-gray-800 font-medium">
            <Link href="/" className="relative after:absolute after:content-[''] after:w-full after:h-1 after:bg-[rgb(13,134,44)] after:left-0 after:-bottom-2 transition-all">Home</Link>
            <Link href="/floor-plans" className="relative after:absolute after:content-[''] after:w-full after:h-1 after:bg-transparent after:left-0 after:-bottom-2 hover:after:bg-[rgb(13,134,44)] transition-all">Floor Plans</Link>
            <Link href="#" className="relative after:absolute after:content-[''] after:w-full after:h-1 after:bg-transparent after:left-0 after:-bottom-2 hover:after:bg-[rgb(13,134,44)] transition-all">Gallery</Link>
            <Link href="#" className="relative after:absolute after:content-[''] after:w-full after:h-1 after:bg-transparent after:left-0 after:-bottom-2 hover:after:bg-[rgb(13,134,44)] transition-all">Contact us</Link>
          </nav>
        </header>
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center px-12 pt-8 pb-16 gap-8 relative">
          {/* Left: Text */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold leading-tight mb-6 font-serif text-gray-900">
              Discover <span style={{ color: 'rgb(13,134,44)' }}>Sustainable Living</span> with EcoHomes
            </h1>
            <p className="text-gray-700 mb-8 max-w-md">
              A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place.
            </p>
            <button className="px-6 py-2 border-2 rounded-lg font-semibold hover:bg-green-50 transition mb-8" style={{ borderColor: 'rgb(13,134,44)', color: 'rgb(13,134,44)' }}>
              Discover Now
            </button>
            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-4 p-4 w-full max-w-xl mt-4 text-gray-800">
              <div className="flex-1 min-w-[120px]">
                <label className="block text-xs text-gray-600 mb-1">Location <span style={{ color: 'rgb(13,134,44)' }}>▼</span></label>
                <input className="w-full border-none outline-none text-gray-700 bg-transparent" placeholder="Where are you going" />
              </div>
              <div className="flex-1 min-w-[120px]">
                <label className="block text-xs text-gray-600 mb-1">Date <span style={{ color: 'rgb(13,134,44)' }}>▼</span></label>
                <input className="w-full border-none outline-none text-gray-700 bg-transparent" placeholder="When you will go" />
              </div>
              <div className="flex-1 min-w-[120px]">
                <label className="block text-xs text-gray-600 mb-1">Guest <span style={{ color: 'rgb(13,134,44)' }}>▼</span></label>
                <input className="w-full border-none outline-none text-gray-700 bg-transparent" placeholder="Number of guest" />
              </div>
              <button className="px-6 py-3 text-white rounded-lg shadow font-semibold hover:brightness-90 transition" style={{ backgroundColor: 'rgb(13,134,44)' }}>
                Explore Now
              </button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-[400px] h-[400px] rounded-2xl overflow-hidden bg-white">
              <Image src="/images/ecohome-hero.jpg" alt="Eco-friendly Home" width={400} height={400} className="object-cover w-full h-full" />
            </div>
          </div>
        </section>
      </div>
      {/* Things you need to do Section */}
      <section className="w-full max-w-[1200px] bg-[#f7f8fc] rounded-[32px] mt-12 p-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4 text-center font-serif text-gray-900">
          Things you need <span style={{ color: 'rgb(13,134,44)' }}>to do</span>
        </h2>
        <p className="text-gray-700 mb-10 text-center max-w-xl">
          We ensure that you'll embark on a perfectly planned, safe vacation at a price you can afford.
        </p>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 min-w-[240px] flex flex-col items-center border" style={{ borderColor: 'rgba(13,134,44,0.15)' }}>
            <div className="absolute right-0 top-0 w-24 h-24 opacity-10 pointer-events-none" style={{background: 'url(/card-bg1.svg) no-repeat center/cover'}} />
            <div className="rounded-full p-4 mb-4" style={{ backgroundColor: 'rgba(13,134,44,0.10)' }}>
              <span role="img" aria-label="sign up" className="text-2xl">📝</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Sign Up</h3>
            <p className="text-gray-700 text-center text-sm">Completes all the work associated with planning and processing</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 min-w-[240px] flex flex-col items-center border" style={{ borderColor: 'rgba(13,134,44,0.15)' }}>
            <div className="absolute right-0 top-0 w-24 h-24 opacity-10 pointer-events-none" style={{background: 'url(/card-bg2.svg) no-repeat center/cover'}} />
            <div className="rounded-full p-4 mb-4" style={{ backgroundColor: 'rgba(13,134,44,0.10)' }}>
              <span role="img" aria-label="money" className="text-2xl">💰</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Worth of Money</h3>
            <p className="text-gray-700 text-center text-sm">After successful access, get exclusive offers from us</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 min-w-[240px] flex flex-col items-center border" style={{ borderColor: 'rgba(13,134,44,0.15)' }}>
            <div className="absolute right-0 top-0 w-24 h-24 opacity-10 pointer-events-none" style={{background: 'url(/card-bg3.svg) no-repeat center/cover'}} />
            <div className="rounded-full p-4 mb-4" style={{ backgroundColor: 'rgba(13,134,44,0.10)' }}>
              <span role="img" aria-label="travel" className="text-2xl">🌍</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Exciting Travel</h3>
            <p className="text-gray-700 text-center text-sm">Start and explore a wide range of exciting travel experience.</p>
          </div>
        </div>
      </section>
    </div>
  )
}