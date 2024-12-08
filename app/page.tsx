'use client'

import Image from "next/image";
import { Roboto_Mono as RobotoMono } from 'next/font/google';
import { Crimson_Text as CrimsonText } from 'next/font/google';
import { RevealOnScroll } from './components/RevealOnScroll';
import { ScrambleText } from './components/ScrambleButton';

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
    <div className="min-h-screen w-full overflow-x-hidden">
      Navigation
      <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/30 rounded-b-xl">
        <div className="flex justify-between items-center p-4 md:p-6 max-w-7xl mx-auto px-6 md:px-28">
          <a href="/" className="p-2 rounded hover:opacity-80 transition-opacity">
            <Image 
              src="/opencash-logomark.svg" 
              alt="OpenCash Logo" 
              width={40} 
              height={40}
              className="md:w-[50px] md:h-[50px]"
            />
          </a>
          <div className="flex gap-6 md:gap-12 items-center">
            <ScrambleText 
              as="a"
              href="#vision" 
              text="THE VISION"
              className={`text-zinc-800 text-base lg:text-lg font-medium hover:text-zinc-900 uppercase relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-zinc-800 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${robotoMono.className}`}
            />
            <ScrambleText 
              as="a"
              href="#board" 
              text="OUR BOARD"
              className={`text-zinc-800 text-base lg:text-lg font-medium hover:text-zinc-900 uppercase relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-zinc-800 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${robotoMono.className}`}
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-y-auto overflow-x-hidden">
        {/* Change fixed to absolute for all background elements */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100 [filter:invert(100%)_contrast(100%)_brightness(100%)_blur(2px)]"
        >
          <source src="/pattern-1.mp4" type="video/mp4" />
        </video>
        
        {/* Background layers with absolute positioning */}
        <div className="absolute inset-0 [background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-[0.15] mix-blend-overlay" />
        <div className="absolute inset-0 bg-white opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-200/40 to-blue-400/40" />

        <div className="relative min-h-screen flex flex-col justify-start md:justify-end z-10 max-w-7xl mx-auto px-6 md:px-28 pb-12 md:pb-48">
          <RevealOnScroll>
            <div className="max-w-8xl pt-24 md:pt-0">
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
              <a 
                href="https://pay.withbitcoin.org/api/v1/invoices?storeId=RbgfGTkSr2o1hxjpAv11L6tzq2DHbztHX8BLrsN6Hmn&currency=BTC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ScrambleText 
                  text="Donate now"
                  className="bg-zinc-800 text-white font-semibold text-lg md:text-xl px-6 py-4 md:px-8 md:py-6 hover:bg-white hover:text-zinc-800 transition-colors duration-300 mt-4"
                />
              </a>
              
              {/* Supported By Logos */}
              <div className="mt-8 md:mt-16">
                <p className={`text-gray-600 text-xl md:text-3xl mb-4 md:mb-8 text-left uppercase ${robotoMono.className}`}>Supported by</p>
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                  <div className="bg-white p-4 md:p-8 shadow-sm flex items-center justify-center w-full md:w-64 h-24 md:h-32">
                    <Image
                      src="/spiral.svg"
                      alt="Spiral Logo"
                      width={90}
                      height={60}
                      className="object-contain md:w-[110px] md:h-[80px]"
                    />
                  </div>
                  <div className="bg-white p-4 md:p-8 shadow-sm flex items-center justify-center w-full md:w-64 h-24 md:h-32">
                    <Image
                      src="/hrf.png"
                      alt="Human Rights Foundation Logo"
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-white p-4 md:p-8 shadow-sm flex items-center justify-center w-full md:w-64 h-24 md:h-32">
                    <Image
                      src="/strike.webp"
                      alt="Strike Logo"
                      width={200}
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
      <section id="vision" className="py-12 md:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 md:px-28">
          <RevealOnScroll>
            <p className="text-gray-600 uppercase tracking-wider text-sm mb-4 md:mb-8">Our Vision</p>
            <h2 className="text-4xl md:text-[64px] mb-12 md:mb-48 text-zinc-800">A world with digital cash.</h2>
          </RevealOnScroll>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative select-text">
            {/* Hide vertical lines on mobile */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block">
              <div className="grid grid-cols-3 h-full mx-0">
                <div className="border-l border-r border-gray-200 h-full"></div>
                <div className="border-r border-gray-200 h-full"></div>
                <div></div>
              </div>
            </div>

            {/* Content columns with standardized mobile padding */}
            {[
              {
                number: "Why?",
                title: "The need for privacy",
                content: "People deserve payment systems that protect their privacy and ensure security. Digital cash meets this need by offering an alternative to surveillance-based financial systems."
              },
              {
                number: "What?",
                title: "Digital cash for everyone",
                content: "Digital cash is a scalable, private, and efficient way to transact. It’s an open tool that anyone can use to build a more secure financial future."
              },
              {
                number: "How?",
                title: "Open-source solutions",
                content: "We support the development of free and open tools like the Cashu protocol. This empowers individuals and communities to create better financial systems together."
              }
            ].map((column, index) => (
              <RevealOnScroll key={index}>
                <div className="px-4 md:px-8">
                  <p className="text-2xl md:text-3xl text-gray-400 mb-8 md:mb-32">{column.number}</p>
                  <h4 className="text-2xl text-gray-800 font-semibold mb-6">
                    {column.title}
                  </h4>
                  <p className="text-gray-600 text-lg font-medium">
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
                width={300}
                height={300}
                className="grayscale rounded-sm w-full md:w-[300px] object-cover"
              />
              <p className="text-gray-500 text-sm mt-2">Photo courtesy of Piaras Ó Mídheach</p>
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
            <p className="text-gray-600 uppercase tracking-wider text-sm mb-4 md:mb-8">Our Board</p>
            <h2 className="text-4xl md:text-[64px] mb-8 text-zinc-800">Who we are.</h2>
            <p className="text-gray-600 mt-2 text-lg font-medium max-w-6xl mb-6 md:mb-12">
              The OpenCash Association, based in Switzerland, is governed by a board who have earned a strong reputation in the field of Bitcoin and Chaumian ecash systems. The key board members' names are not public as a security measure and to preserve their privacy. If you consider sponsoring OpenCash, they can contact you directly to confirm their identities.
            </p>
            <RevealOnScroll blur>
              <div className="flex justify-center items-center max-w-6xl mx-auto h-[200px] md:h-[400px] w-full">
                <Image 
                  src="/board.jpg" 
                  alt="Board Members" 
                  width={1200} 
                  height={800}
                  className="rounded-sm w-full h-full object-contain"
                />
              </div>
            </RevealOnScroll>
          </div>
        </RevealOnScroll>
      </section>

      {/* Donation Section */}
      <section className="bg-black text-white py-24 md:py-48">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-6 md:px-28 flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Column - Header */}
            <div className="w-full md:w-1/3">
              <h2 className="text-4xl md:text-[64px] text-white leading-tight md:leading-[1.1]">
                Your donation makes a difference.
              </h2>
            </div>
            
            {/* Right Column - Content */}
            <div className="w-full md:w-2/3 space-y-8 md:space-y-8">
              <p className="text-lg font-medium">
                We provide funding to developers through our grants program, and we support the broader Cashu ecosystem through our research and events. All projects that we support are open-source and free to use. Help us provide sustainable support for Cashu projects by donating to our fund. Your donation will be used to support developers, fund research, and organize events.
              </p>
              <div className="mt-8">
                <a 
                  href="https://pay.withbitcoin.org/api/v1/invoices?storeId=RbgfGTkSr2o1hxjpAv11L6tzq2DHbztHX8BLrsN6Hmn&currency=BTC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ScrambleText 
                    text="Donate now"
                    className="bg-white text-black font-semibold text-lg md:text-xl px-6 py-4 md:px-8 md:py-6 hover:bg-black hover:text-white transition-colors duration-300 inline-block"
                  />
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 md:py-12">
        {/* Gradient Divider - Outside RevealOnScroll */}
        <div className="max-w-7xl mx-auto px-6 md:px-28 mb-8 md:mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-28">
          {/* Footer Content - Inside RevealOnScroll */}
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16 space-y-8 md:space-y-0 md:gap-24">
              {/* Location Section */}
              <div className="w-full md:w-auto">
                <p className={`text-gray-400 uppercase tracking-wider text-lg mb-4 ${robotoMono.className}`}>Location</p>
                <p className="text-xl">OpenCash Association</p>
                <p className="text-xl">4613 Rickenbach, Switzerland</p>
              </div>
              
              {/* Contact Section */}
              <div className="w-full md:w-auto">
                <p className={`text-gray-400 uppercase tracking-wider text-lg mb-4 ${robotoMono.className}`}>Contact</p>
                <p className="text-xl">opencash@protonmail.ch</p>
              </div>

              {/* Cashu Ecosystem */}
              <div className="w-full md:w-auto">
                <p className={`text-gray-400 uppercase tracking-wider text-lg mb-4 ${robotoMono.className}`}>Cashu</p>
                <a href="https://cashu.space/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-300">
                  Cashu.space
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Logomark below */}
          <div className="flex justify-center">
            <div 
              className="relative cursor-pointer select-none"
              onDragStart={(e) => e.preventDefault()}
              onClick={(e) => {
                // Create multiple emojis for an explosion effect
                for (let i = 0; i < 8; i++) {
                  const emojis = ['🥜', '🌰', '🐿️'];
                  const emoji = document.createElement('div');
                  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
                  emoji.style.position = 'absolute';
                  
                  // Randomize starting positions slightly around the click point
                  const startOffset = 20;
                  const randomStartX = e.nativeEvent.offsetX + (Math.random() * startOffset - startOffset/2);
                  const randomStartY = e.nativeEvent.offsetY + (Math.random() * startOffset - startOffset/2);
                  
                  emoji.style.left = `${randomStartX}px`;
                  emoji.style.top = `${randomStartY}px`;
                  emoji.style.fontSize = '2rem';
                  
                  // More random movement patterns
                  const angle = Math.random() * Math.PI * 2; // Completely random angles
                  const velocity = 50 + Math.random() * 100; // More variable velocities
                  const xDistance = Math.cos(angle) * velocity;
                  const yDistance = Math.sin(angle) * velocity + 100; // Added gravity bias
                  const rotation = Math.random() * 360; // Random rotation
                  
                  emoji.style.setProperty('--x-move', `${xDistance}px`);
                  emoji.style.setProperty('--y-move', `${yDistance}px`);
                  emoji.style.setProperty('--rotation', `${rotation}deg`);
                  
                  emoji.style.animation = 'emoji-explosion 1s cubic-bezier(0.15, 0.85, 0.45, 1) forwards';
                  e.currentTarget.appendChild(emoji);
                  setTimeout(() => emoji.remove(), 1000);
                }
              }}
            >
              <Image 
                src="/opencash-logomark.svg" 
                alt="OpenCash Logo" 
                width={400} 
                height={40}
                className="invert pointer-events-none"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Static animation keyframes */}
      <style jsx global>{`
        @keyframes emoji-explosion {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(var(--x-move), var(--y-move)) rotate(var(--rotation));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
