"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
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
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between font-medium text-white">
        <h1>
          Jepzec.web
          <Link href="#profile-section"></Link>
        </h1>
        <nav>
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
        <nav>
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
    </header>
  );
}
