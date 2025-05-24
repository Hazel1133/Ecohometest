'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Playfair_Display, Inter } from 'next/font/google'

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

export default function FloorPlans() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f4ea] to-[rgb(13,134,44)] flex flex-col items-center py-8">
      {/* Main container with rounded corners */}
      <div className="w-full max-w-[1200px] bg-white rounded-[40px] shadow-2xl overflow-hidden">
        {/* Header */}
        <header className="flex justify-between items-center px-12 py-8">
          <div className="text-2xl font-bold flex items-center gap-2 font-serif" style={{ color: 'rgb(13,134,44)' }}>
            EcoHomes
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
            <Link href="/" className="relative after:absolute after:content-[''] after:w-full after:h-1 after:bg-transparent after:left-0 after:-bottom-2 hover:after:bg-[rgb(13,134,44)] transition-all">Home</Link>
            <Link href="/floor-plans" className="relative after:absolute after:content-[''] after:w-full after:h-1 after:bg-[rgb(13,134,44)] after:left-0 after:-bottom-2 transition-all">Floor Plans</Link>
            <Link href="#" className="relative after:absolute after:content-[''] after:w-full after:h-1 after:bg-transparent after:left-0 after:-bottom-2 hover:after:bg-[rgb(13,134,44)] transition-all">Gallery</Link>
            <Link href="#" className="relative after:absolute after:content-[''] after:w-full after:h-1 after:bg-transparent after:left-0 after:-bottom-2 hover:after:bg-[rgb(13,134,44)] transition-all">Contact us</Link>
          </nav>
        </header>

        {/* Floor Plans Section */}
        <section className="px-12 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center font-serif text-gray-900">
            Available <span style={{ color: 'rgb(13,134,44)' }}>Floor Plans</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Studio Apartment */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border" style={{ borderColor: 'rgba(13,134,44,0.15)' }}>
              <div className="relative h-48">
                <Image
                  src="/images/studio-floorplan.svg"
                  alt="Studio Apartment Floor Plan"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Studio Apartment</h3>
                <div className="space-y-2 text-gray-600">
                  <p>• 450 sq ft</p>
                  <p>• Open concept living</p>
                  <p>• Modern kitchen</p>
                  <p>• Spacious bathroom</p>
                  <p>• Large windows</p>
                </div>
                <Button className="w-full mt-4" style={{ backgroundColor: 'rgb(13,134,44)' }}>
                  View Details
                </Button>
              </div>
            </div>

            {/* 1 Bedroom Apartment */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border" style={{ borderColor: 'rgba(13,134,44,0.15)' }}>
              <div className="relative h-48">
                <Image
                  src="/images/1bed-floorplan.svg"
                  alt="1 Bedroom Apartment Floor Plan"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">1 Bedroom Apartment</h3>
                <div className="space-y-2 text-gray-600">
                  <p>• 650 sq ft</p>
                  <p>• Separate bedroom</p>
                  <p>• Full kitchen</p>
                  <p>• Walk-in closet</p>
                  <p>• Balcony access</p>
                </div>
                <Button className="w-full mt-4" style={{ backgroundColor: 'rgb(13,134,44)' }}>
                  View Details
                </Button>
              </div>
            </div>

            {/* 2 Bedroom Apartment */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border" style={{ borderColor: 'rgba(13,134,44,0.15)' }}>
              <div className="relative h-48">
                <Image
                  src="/images/2bed-floorplan.svg"
                  alt="2 Bedroom Apartment Floor Plan"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">2 Bedroom Apartment</h3>
                <div className="space-y-2 text-gray-600">
                  <p>• 850 sq ft</p>
                  <p>• Two bedrooms</p>
                  <p>• Open kitchen</p>
                  <p>• Two bathrooms</p>
                  <p>• Private balcony</p>
                </div>
                <Button className="w-full mt-4" style={{ backgroundColor: 'rgb(13,134,44)' }}>
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 