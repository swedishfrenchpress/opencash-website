'use client'

import Image from "next/image";
import { Roboto_Mono as RobotoMono } from 'next/font/google';
import { Crimson_Text as CrimsonText } from 'next/font/google';
import { RevealOnScroll } from './components/RevealOnScroll';

const robotoMono = RobotoMono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto-mono', // This is optional but useful if you want to use it as a CSS variable
});

const crimsonText = CrimsonText({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-crimson-text',
});

export default function Home() {
  return (
    <div className="min-h-screen">
      Navigation
      <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/30 rounded-b-xl">
        <div className="flex justify-between items-center p-4 md:p-6 max-w-7xl mx-auto px-6 md:px-28">
          <div className="p-2 rounded">
            <Image 
              src="/opencash-logomark.svg" 
              alt="OpenCash Logo" 
              width={40} 
              height={40}
              className="md:w-[50px] md:h-[50px]"
            />
          </div>
          <div className="flex gap-6 md:gap-12 items-center">
            <a href="#vision" className={`text-zinc-800 text-sm md:text-lg font-medium hover:text-zinc-900 uppercase ${robotoMono.className}`}>The Vision</a>
            <a href="#board" className={`text-zinc-800 text-sm md:text-lg font-medium hover:text-zinc-900 uppercase ${robotoMono.className}`}>Our Board</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        {/* Background layers remain the same */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100 [filter:invert(100%)_contrast(100%)_brightness(100%)_blur(2px)]"
        >
          <source src="/pattern-1.mp4" type="video/mp4" />
        </video>
        
        {/* Noise effect and other background layers remain unchanged */}
        <div className="absolute inset-0 [background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-[0.15] mix-blend-overlay" />
        <div className="absolute inset-0 bg-white opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-200/40 to-blue-400/40" />

        <div className="relative h-full flex flex-col justify-end z-10 max-w-7xl mx-auto px-6 md:px-28 pb-12 md:pb-48">
          <RevealOnScroll>
            <div className="max-w-8xl">
              <Image 
                src="/opencash-logo.svg" 
                alt="OpenCash Large Logo" 
                width={280} 
                height={42}
                className="mb-4 md:mb-8 md:w-[400px] md:h-[60px]"
              />
              <h1 className="text-4xl md:text-7xl text-zinc-800 font-regular mb-4 text-left">
                Support the open-source development of digital cash.
              </h1>
              <button className="bg-zinc-800 text-white font-semibold text-lg md:text-xl px-6 py-4 md:px-8 md:py-6 rounded-md hover:bg-zinc-700 mt-4">
                Donate now
              </button>
              
              {/* Supported By Logos */}
              <div className="mt-8 md:mt-16">
                <p className={`text-gray-600 text-xl md:text-3xl mb-4 md:mb-8 text-left uppercase ${robotoMono.className}`}>Supported by</p>
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                  <div className="bg-white p-4 md:p-8 rounded-lg shadow-sm flex items-center justify-center w-full md:w-64 h-24 md:h-32">
                    <Image
                      src="/spiral.svg"
                      alt="Spiral Logo"
                      width={90}
                      height={60}
                      className="object-contain md:w-[110px] md:h-[80px]"
                    />
                  </div>
                  <div className="bg-white p-4 md:p-8 rounded-lg shadow-sm flex items-center justify-center w-full md:w-64 h-24 md:h-32">
                    <Image
                      src="/hrf.png"
                      alt="Human Rights Foundation Logo"
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-white p-4 md:p-8 rounded-lg shadow-sm flex items-center justify-center w-full md:w-64 h-24 md:h-32">
                    <Image
                      src="/strike.webp"
                      alt="Strike Logo"
                      width={260}
                      height={90}
                      className="object-contain invert"
                    />
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-28">
          <RevealOnScroll>
            <p className="text-gray-600 uppercase tracking-wider text-sm mb-4 md:mb-8">Our Vision</p>
            <h2 className="text-4xl md:text-[64px] mb-12 md:mb-24 text-zinc-800">A world with digital cash</h2>
          </RevealOnScroll>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 relative select-text">
            {/* Hide vertical lines on mobile */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block">
              <div className="grid grid-cols-3 h-full">
                <div className="border-l border-r border-gray-200 h-full"></div>
                <div className="border-r border-gray-200 h-full"></div>
                <div></div>
              </div>
            </div>

            {/* Content columns with standardized mobile padding */}
            {[
              {
                number: "01",
                title: "Privacy-first payments",
                content: "We support the development of free and open-source digital cash projects using the Cashu protocol. This system prioritizes privacy, scalability, and efficiency for bitcoin and beyond."
              },
              {
                number: "02",
                title: "Digital cash matters",
                content: "Digital cash will shape the future of payments and financial services. Cashu makes secure, private, and scalable transactions accessible to everyone. We believe this technology should be free and open for all."
              },
              {
                number: "03",
                title: "Open tools",
                content: "The Cashu protocol exemplifies the promise of privacy-respecting digital cash. Its open-source design ensures that anyone can participate in creating a sustainable and inclusive financial system. Dive deeper into the Cashu protocol and discover its transformative potential here."
              }
            ].map((column, index) => (
              <RevealOnScroll key={index}>
                <div className={`px-0 md:${index === 0 ? 'pl-16 pr-8' : index === 2 ? 'pl-4 pr-0' : 'px-8'}`}>
                  <p className="text-2xl md:text-3xl text-gray-400 mb-8 md:mb-32">{column.number}</p>
                  <h4 className="text-2xl text-gray-800 font-semibold mb-6">
                    {column.title}
                  </h4>
                  <p className="text-gray-600 font-medium">
                    {column.content}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-black text-white py-24 md:py-48">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-6 md:px-28 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-1/3">
              <Image 
                src="/chaum.jpg" 
                alt="Quote Author" 
                width={200}
                height={200}
                className="grayscale rounded-sm w-full md:w-[300px] md:h-[300px]"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-4 md:space-y-6">
              <blockquote className={`text-xl md:text-3xl leading-relaxed ${crimsonText.className}`}>
                "...in one direction lies unprecedented scrutiny and control of people's lives; in the other, secure parity between individuals and organizations. The shape of society in the next century may depend on which approach predominates."
              </blockquote>
              <p className="text-gray-400 text-lg md:text-xl">— David Chaum 1992</p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Board Section */}
      <section id="board" className="py-12 md:py-20 bg-zinc-50">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-6 md:px-28">
            <p className="text-gray-600 uppercase tracking-wider text-sm">Our Board</p>
            <h2 className="text-[64px] mb-8 text-zinc-800">Who we are</h2>
            <p className="text-gray-600 mt-2 text-lg font-medium max-w-6xl mb-12">
            The OpenCash Association, based in Switzerland, is governed by a board who have earned a strong reputation in the field of Bitcoin and Chaumian ecash systems. The key board members' names are not public as a security measure and to preserve their privacy. If you consider sponsoring OpenCash, they can contact you directly to confirm their identities.
            </p>
            <div className="flex justify-center items-center">
              <Image 
                src="/board.jpg" 
                alt="Board Members" 
                width={400} 
                height={400}
                className="rounded-sm"
              />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-28">
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16 space-y-8 md:space-y-0 md:divide-x divide-gray-800">
            {/* Location Section */}
            <div className="md:pr-32">
              <p className="text-gray-400 uppercase tracking-wider text-sm mb-4">Location</p>
              <p className="whitespace-nowrap">Opencash Association</p>
              <p className="whitespace-nowrap">4613 Rickenbach, Switzerland</p>
            </div>
            
            {/* Contact Section */}
            <div className="px-32">
              <p className="text-gray-400 uppercase tracking-wider text-sm mb-4">Contact</p>
              <p className="whitespace-nowrap">opencash@protonmail.ch</p>
            </div>

            {/* Cashu Ecosystem */}
            <div className="pl-32">
              <p className="text-gray-400 uppercase tracking-wider text-sm mb-4">Cashu</p>
              <a href="https://www.cashu.space" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                Cashu.space
              </a>
            </div>
          </div>

          {/* Logomark below */}
          <div className="flex justify-center">
            <Image 
              src="/opencash-logomark.svg" 
              alt="OpenCash Logo" 
              width={400} 
              height={40}
              className="invert"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
