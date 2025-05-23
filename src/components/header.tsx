"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full py-3 shadow-md backdrop-blur-2xl transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-[72px]"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-4 font-medium text-white">
        <h1 className="text-lg font-semibold">
          Jepzec.web
          <Link href="#profile-section"></Link>
        </h1>

        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                  fill="#FFFFFF"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                  fill="#FFFFFF"
                />
              </svg>
            )}
          </svg>
        </button>

        <nav className="hidden md:block">
          <ul className="flex gap-6 rounded-full">
            <li>
              <Link href="#profile-section">Home</Link>
            </li>
            <li>
              <Link href="#about-section">About</Link>
            </li>
            <li>
              <Link href="#skill-section">Skill</Link>
            </li>
            <li>
              <Link href="#portfolio-section">Portfolio</Link>
            </li>
            <li>
              <Link href="#experience-section">Experience</Link>
            </li>
            <li>
              <Link href="#testimonials-section">Testimonials</Link>
            </li>
            <li>
              <Link href="#contact-section">Contact</Link>
            </li>
          </ul>
        </nav>

        <nav className="hidden md:block">
          <ul className="flex gap-3">
            <li>
              <Link
                className="relative block h-[30px] w-[30px]"
                href="https://www.linkedin.com/in/naufal-khadhi-satria-2a8786345/"
              >
                <Image src={"/linkedin.svg"} alt="linkedin logo" fill />
              </Link>
            </li>
            <li>
              <Link  
                className="relative block h-[30px] w-[30px]"
                href="https://github.com/Jepzec"
              >
                <Image src={"/github.svg"} alt="Github logo" fill />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="mt-3 px-4 md:hidden">
          <nav className="px-4 py-3 text-center text-black">
            <ul className="space-y-8">
              <li>
                <Link
                  href="#profile-section"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about-section"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#skill-section"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Skill
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio-section"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#experience-section"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials-section"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#contact-section"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Contact
                </Link>
              </li>
              <li className="flex justify-center gap-3 pt-2">
                <Link
                  className="relative block h-[30px] w-[30px]"
                  href="https://www.linkedin.com/in/naufal-khadhi-satria-2a8786345/"
                >
                  <Image src={"/linkedin.svg"} alt="linkedin logo" fill />
                </Link>
                <Link
                  className="relative block h-[30px] w-[30px]"
                  href="https://github.com/Jepzec"
                >
                  <Image src={"/github.svg"} alt="Github logo" fill />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
