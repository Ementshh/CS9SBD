"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const products = [
    { name: "Scarlett Ultra Light Daily Sunscreen 50ml", image: "/sunscreen.png" },
    { name: "Scarlett Intense Brightening AHA Body Serum 5% AHA BHA PHA", image: "/serum.png" },
    { name: "Scarlett Extrait De Parfum Garden Of Whisper 30ml", image: "/parfum.png" },
    { name: "Scarlett Hair Soft and Shiny Sea Salt Conditioner", image: "/hair.png" }
  ];

  const quotes = [
    { text: "Aku jadi gatakut matahari depok lagi", author: "theyfun" },
    { text: "Aku pake parfum scarlett kemaren pas coachella ", author: "jb" },
    { text: "Body lotion favoritku pas marapthon", author: "arap" },
    { text: "Rambut aku jadi soft and shiny banget", author: "bigmuy" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="flex flex-col min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-pink-200/50">
        <div className="w-24"></div>
        <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-foreground/80">
          <li className="hover:text-pink-500 cursor-pointer transition-colors">Semua Produk</li>
          <li className="hover:text-pink-500 cursor-pointer transition-colors">Skincare</li>
          <li className="hover:text-pink-500 cursor-pointer transition-colors">Bodycare</li>
          <li className="hover:text-pink-500 cursor-pointer transition-colors">Tentang Kami</li>
        </ul>
        <div>
          <button className="px-5 py-2 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-600 transition-colors">
            SHOP NOW
          </button>
        </div>
      </nav>

      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <h1 className="font-playfair text-[15vw] lg:text-[18vw] font-black text-foreground/5 whitespace-nowrap select-none tracking-tighter">
            SCARLETT
          </h1>
        </div>

        <div className="relative z-20 w-full max-w-[800px] h-[65vh] lg:h-[85vh] flex items-center justify-center transition-all duration-500 ease-in-out group">
          <Image
            src={products[currentIndex].image}
            alt={products[currentIndex].name}
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            priority
            className="object-contain drop-shadow-2xl z-10"
            onError={(e) => {
              e.currentTarget.style.opacity = '0';
            }}
            onLoad={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          />
        </div>

        <div className="absolute left-6 lg:left-16 bottom-16 lg:bottom-24 z-30 max-w-sm">
          <p className="text-sm md:text-base text-foreground/80 mb-6 leading-relaxed font-medium">
            Solusi kecantikan lengkap dari produk lokal terpercaya. Temukan rangkaian perawatan terbaik untuk wajah, tubuh, rambut, hingga koleksi parfum eksklusif yang diciptakan khusus untuk menutrisi dan menyempurnakan hari Anda.
          </p>
          <button className="px-8 py-3 border border-pink-500 text-pink-600 font-medium hover:bg-pink-50 transition-colors uppercase tracking-widest text-xs lg:text-sm bg-background/50 backdrop-blur-sm">
            Lihat Produk Terbaru
          </button>
        </div>

        <div className="absolute right-6 lg:right-16 bottom-16 lg:bottom-24 z-30 flex flex-col items-end max-w-sm text-right">
          <h2 className="font-playfair text-xl lg:text-2xl font-bold mb-6 uppercase text-foreground leading-tight">
            {products[currentIndex].name}
          </h2>

          <div className="flex items-center gap-4">
            <button className="text-pink-600 font-bold uppercase tracking-widest hover:text-pink-800 transition text-xs lg:text-sm border border-pink-200 px-6 py-2.5 bg-background/50 backdrop-blur-sm">
              EXPLORE
            </button>
            <div className="flex gap-2">
              <button onClick={handlePrev} className="w-12 h-10 flex items-center justify-center border border-pink-200 hover:bg-pink-50 transition text-pink-600 bg-background/50 backdrop-blur-sm">
                &larr;
              </button>
              <button onClick={handleNext} className="w-12 h-10 flex items-center justify-center border border-pink-200 hover:bg-pink-50 transition text-pink-600 bg-background/50 backdrop-blur-sm">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-pink-500 py-6 overflow-hidden flex shadow-inner">
        <div className="animate-marquee items-center border-y border-pink-400 py-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="text-white text-3xl font-playfair font-bold mx-8 uppercase tracking-widest italic shrink-0 whitespace-nowrap">
                Level Up Your Beauty
              </span>
              <span className="text-white/50 text-2xl mx-4 shrink-0">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      <section className="py-24 px-6 md:px-16 container mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl lg:text-6xl font-medium text-foreground uppercase tracking-tight">Produk Kami</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="flex h-[350px] lg:h-[450px] bg-white group cursor-pointer relative">
            <div className="w-1/2 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-pink-900 uppercase tracking-wider mb-4">Face</h3>
                <p className="text-base lg:text-lg text-pink-900 font-bold">Biar kinclong.</p>
              </div>
              <div className="mt-auto">
                <button className="w-14 h-10 border border-pink-200 flex items-center justify-center group-hover:bg-pink-50 transition-colors text-pink-900">
                  &rarr;
                </button>
              </div>
            </div>
            <div className="w-1/2 relative overflow-hidden bg-pink-50">
              <Image src="/face.png" alt="Face" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] z-10"></div>
            </div>
          </div>

          <div className="flex h-[350px] lg:h-[450px] bg-white group cursor-pointer relative">
            <div className="w-1/2 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-pink-900 uppercase tracking-wider mb-4">Body</h3>
                <p className="text-base lg:text-lg text-pink-900 font-bold">Tubuhku kuat.</p>
              </div>
              <div className="mt-auto">
                <button className="w-14 h-10 border border-pink-200 flex items-center justify-center group-hover:bg-pink-50 transition-colors text-pink-900">
                  &rarr;
                </button>
              </div>
            </div>
            <div className="w-1/2 relative overflow-hidden bg-pink-50">
              <Image src="/body.png" alt="Body" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] z-10"></div>
            </div>
          </div>

          <div className="flex h-[350px] lg:h-[450px] bg-white group cursor-pointer relative">
            <div className="w-1/2 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-pink-900 uppercase tracking-wider mb-4">Perfume</h3>
                <p className="text-base lg:text-lg text-pink-900 font-bold">Biar ga bau aking.</p>
              </div>
              <div className="mt-auto">
                <button className="w-14 h-10 border border-pink-200 flex items-center justify-center group-hover:bg-pink-50 transition-colors text-pink-900">
                  &rarr;
                </button>
              </div>
            </div>
            <div className="w-1/2 relative overflow-hidden bg-pink-50">
              <Image src="/perfume.png" alt="Perfume" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] z-10"></div>
            </div>
          </div>

          <div className="flex h-[350px] lg:h-[450px] bg-white group cursor-pointer relative">
            <div className="w-1/2 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-pink-900 uppercase tracking-wider mb-4">Hair</h3>
                <p className="text-base lg:text-lg text-pink-900 font-bold">Lepek lau.</p>
              </div>
              <div className="mt-auto">
                <button className="w-14 h-10 border border-pink-200 flex items-center justify-center group-hover:bg-pink-50 transition-colors text-pink-900">
                  &rarr;
                </button>
              </div>
            </div>
            <div className="w-1/2 relative overflow-hidden bg-pink-50">
              <Image src="/hair.png" alt="Hair" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#151210] text-[#F3F2EE] py-32">
        <div className="container mx-auto px-6 max-w-6xl">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center pb-24 border-b border-white/5">
            <div>
              <p className="text-5xl lg:text-6xl font-bold mb-4 font-playfair">1M<span className="text-white/50">+</span></p>
              <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/60 font-bold">PRODUK TERJUAL</p>
            </div>
            <div>
              <p className="text-5xl lg:text-6xl font-bold mb-4 font-playfair">50<span className="text-white/50">+</span></p>
              <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/60 font-bold">PENGHARGAAN</p>
            </div>
            <div>
              <p className="text-5xl lg:text-6xl font-bold mb-4 font-playfair">100<span className="text-white/50">+</span></p>
              <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/60 font-bold">MITRA KLINIK</p>
            </div>
            <div>
              <p className="text-5xl lg:text-6xl font-bold mb-4 font-playfair">7</p>
              <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/60 font-bold">TAHUN BERKARYA</p>
            </div>
          </div>

          <div className="pt-24 relative overflow-hidden min-h-[350px]">
            <div className="absolute top-12 left-0 lg:left-12 opacity-5 text-9xl font-serif leading-none select-none z-0">"</div>

            <div
              className="flex transition-transform duration-700 ease-in-out z-10 relative"
              style={{ transform: `translateX(-${quoteIndex * 100}%)` }}
            >
              {quotes.map((quote, idx) => (
                <div key={idx} className="w-full shrink-0 flex flex-col items-center justify-center text-center px-4">
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-12 font-playfair">
                    “{quote.text}”
                  </h2>
                  <p className="text-xs md:text-sm tracking-[0.15em] uppercase text-white/70 font-bold flex items-center gap-4">
                    <span className="w-6 h-[1px] bg-white/30"></span>
                    {quote.author}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-20 relative z-20">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setQuoteIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === quoteIndex ? 'bg-white scale-125' : 'bg-white/20 hover:bg-white/50'}`}
                  aria-label={`Go to quote ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-pink-50 pt-24 pb-12 px-6 border-t border-pink-200">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold text-pink-600 mb-6 drop-shadow-sm">SCARLETT</h3>
            <p className="text-pink-600/70 max-w-sm mb-8 leading-relaxed text-lg">
              Skincare dan Body Care lokal terbaik untuk menemani perjalanan kecantikanmu setiap hari. Diformulasikan dengan perlindungan maksimal untuk skin barrier.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 hover:bg-pink-600 hover:text-white cursor-pointer transition shadow hover:shadow-lg font-bold">IG</div>
              <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 hover:bg-pink-600 hover:text-white cursor-pointer transition shadow hover:shadow-lg font-bold">TT</div>
              <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 hover:bg-pink-600 hover:text-white cursor-pointer transition shadow hover:shadow-lg font-bold">YT</div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-pink-600">Menu Navigasi</h4>
            <ul className="space-y-4 text-pink-600/70">
              <li><a href="#" className="hover:text-pink-500 transition font-medium">Beranda</a></li>
              <li><a href="#" className="hover:text-pink-500 transition font-medium">Cek Keaslian</a></li>
              <li><a href="#" className="hover:text-pink-500 transition font-medium">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-pink-500 transition font-medium">Karir</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-pink-600">Layanan Pelanggan</h4>
            <ul className="space-y-4 text-pink-600/70">
              <li><a href="#" className="hover:text-pink-500 transition font-medium">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-pink-500 transition font-medium">Kebijakan Privasi</a></li>
              <li><a href="mailto:cs@scarlett.id" className="hover:text-pink-500 transition font-medium text-lg">cs@scarlett.id</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-pink-600/50 text-sm border-t border-pink-200 pt-8 font-medium">
          © 2026 Clementheo Benaya Raya.
        </div>
      </footer>
    </main>
  );
}