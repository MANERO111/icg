"use client";
import { Book } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "NOS MARQUES", href: "/nos-marques" },
  { label: "À PROPOS", href: "/notre-histoire", hasDropdown: true },
  { label: "INNOVATION & SCIENCE", href: "#" },
  { label: "ÉCOSYSTÈME ICG", href: "#" },
  { label: "ACTUALITÉS", href: "#" },
  { label: "BOUTIQUE", href: "#" },
];

const A_PROPOS_DROPDOWN = [
  {
    title: "Notre histoire",
    image: "/img/notre_histoire.png", // Replace with your actual path
    href: "/notre-histoire",
  },
  {
    title: "ADN & Philosophie and Mission",
    image: "/img/vision_hero.png", // Replace with your actual path
    href: "/mission-vision",
  },
  {
    title: "Mot de la Présidente",
    image: "/img/presidente_hero.png", // Replace with your actual path
    href: "/motdepresidente",
  },
];

export default function ICGHeader() {
  const [searchValue, setSearchValue] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <header className="w-full font-sans relative z-50">
        {/* Top Banner */}
        <div className="bg-linear-to-r from-[#e0296a] to-[#8761a1] text-white text-center py-2 px-4 tracking-widest text-lg font-semibold uppercase">
          -20% et Livraison gratuite sur Casablanca à partir de 200 dh
        </div>

        {/* Main Header */}
        <div className="bg-white px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/img/logo.png"
                alt="icg logo"
                height={60}
                width={190}
                loading="eager"
                style={{ width: "auto", height: "auto" }}
              />
            </a>

            {/* Center Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-[#e05080] transition-colors">Se connecter</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-[#e05080] transition-colors">Centre d'aide</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-[#e05080] transition-colors">Devenir partenaire</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-[#e0296a] hover:text-[#e05080] flex items-center gap-2 transition-colors">
                <Book className="w-4 h-4" />
                <span className="font-bold">Notre Catalogue</span>
              </a>
            </nav>

            {/* Search + Icons */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center border border-gray-200 rounded-full px-3 py-1.5 bg-gray-50 gap-2 w-56">
                <input
                  type="text"
                  placeholder="Recherche de +100 produits de beauté"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="bg-transparent text-xs text-gray-500 placeholder:text-gray-400 outline-none w-full"
                />
                <button className="text-gray-500 hover:text-[#e05080] transition-colors shrink-0">
                  <SearchIcon />
                </button>
              </div>
              <button className="text-gray-500 hover:text-[#e05080] transition-colors p-1">
                <WishlistIcon />
              </button>
              <button className="text-gray-500 hover:text-[#e05080] transition-colors p-1">
                <CartIcon />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600 hover:text-[#e05080]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <MenuIcon open={mobileMenuOpen} />
            </button>
          </div>
        </div>

        {/* Bottom Nav */}
        <nav className="hidden md:block bg-white border-b border-black px-6 relative">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-0">
            {NAV_ITEMS.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`px-4 py-3 text-[11px] font-semibold tracking-widest uppercase transition-all border-b-2 whitespace-nowrap flex items-center gap-1 ${
                        isDropdownOpen 
                        ? "text-[#e05080] border-[#e05080]" 
                        : "text-gray-700 border-transparent hover:text-[#e05080] hover:border-[#e05080]"
                      }`}
                    >
                      {item.label}
                    </button>
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-[11px] font-semibold tracking-widest text-gray-700 uppercase hover:text-[#e05080] hover:border-b-2 hover:border-[#e05080] transition-all border-b-2 border-transparent whitespace-nowrap"
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mega Dropdown Panel */}
          {isDropdownOpen && (
            <div 
              className="absolute left-0 right-0 top-full w-full md:w-6xl mx-auto bg-white border-b border-gray-200 shadow-xl rounded-2xl py-10 px-6 animate-in fade-in slide-in-from-top-2 duration-200"
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {A_PROPOS_DROPDOWN.map((card) => (
                  <a 
                    key={card.title} 
                    href={card.href} 
                    className="group block flex flex-col focus:outline-none"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {/* Card Image Wrapper */}
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        draggable={false}
                        sizes="(max-w-768px) 100vw, 33vw"
                      />
                    </div>
                    {/* Text elements matching template */}
                    <h3 className="mt-4 text-base font-medium text-gray-800 transition-colors group-hover:text-[#e05080]">
                      {card.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-[#e0296a] font-semibold text-sm">
                      <span>découvrez plus</span>
                      <span className="text-xs transform transition-transform group-hover:translate-x-1">&gt;</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-3">
            <div className="flex items-center border border-gray-200 rounded-full px-3 py-2 bg-gray-50 gap-2">
              <input
                type="text"
                placeholder="Recherche de produits..."
                className="bg-transparent text-xs text-gray-500 placeholder:text-gray-400 outline-none w-full"
              />
              <SearchIcon />
            </div>
            <div className="flex gap-4 text-sm text-gray-500 py-1 border-b border-gray-100 pb-3">
              <a href="#" className="hover:text-[#e05080]">Se connecter</a>
              <a href="#" className="hover:text-[#e05080]">Centre d'aide</a>
              <a href="#" className="hover:text-[#e05080]">Devenir partenaire</a>
            </div>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold tracking-widest text-gray-700 uppercase hover:text-[#e05080] transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-4 pt-2 border-t border-gray-100">
              <button className="text-gray-500 hover:text-[#e05080]"><WishlistIcon /></button>
              <button className="text-gray-500 hover:text-[#e05080]"><CartIcon /></button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

// ── SVG Icons ──────────────────────────────────────────────


function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function WishlistIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}