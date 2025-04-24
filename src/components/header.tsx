"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

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

  const navLinks = [];
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

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navItems = [
//     { name: "Home", href: "#hero-sections" },
//     { name: "About", href: "#about-sections" },
//     { name: "Skills", href: "#skills-sections" },
//     { name: "Portfolio", href: "#portfolio-sections" },
//     { name: "Experience", href: "#experience-sections" },
//     { name: "Testimonials", href: "#testimonials-sections" },
//     { name: "Contact", href: "#contact-sections" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-blue-900 bg-blue-950 shadow-md">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex items-center">
//               <div className="relative mr-2 h-8 w-8">
//                 <Image
//                   src="/placeholder.svg?height=32&width=32"
//                   alt="Logo"
//                   width={32}
//                   height={32}
//                   className="rounded-md"
//                 />
//               </div>
//               <span className="hidden text-xl font-bold text-white sm:block">
//                 DevPortfolio
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Navigation - Center */}
//           <nav className="hidden flex-1 items-center justify-center px-8 lg:flex">
//             <ul className="flex space-x-6">
//               {navItems.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="border-b-2 border-transparent px-2 py-1 text-sm font-medium text-blue-200 transition-colors hover:border-blue-400 hover:text-white"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Social Links and GitHub Button - Right */}
//           <div className="hidden items-center space-x-4 sm:flex">
//             <LinkclassName=
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-300 transition-colors hover:text-white"
//               aria-label="LinkedIn"
//             >
//               </LinkclassName="h-5 w-5" />
//             </Link>
//             <button
//               asChild
//               variant="outline"
//               size="sm"
//               className="border-blue-700 bg-transparent text-blue-200 hover:bg-blue-800 hover:text-white"
//             >
//               <Link
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2"
//               >
//                 <Github className="h-4 w-4" />
//                 <span>GitHub</span>
//               </Link>
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="flex items-center lg:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center rounded-md p-2 text-blue-300 hover:bg-blue-800 hover:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset"
//               aria-expanded={isMenuOpen}
//               onClick={toggleMenu}
//             >
//               <span className="sr-only">
//                 {isMenuOpen ? "Close menu" : "Open menu"}
//               </span>
//               {isMenuOpen ? (
//                 <X className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`lg:hidden ${
//           isMenuOpen ? "block" : "hidden"
//         } absolute w-full border-t border-blue-800 bg-blue-950 shadow-lg`}
//       >
//         <div className="space-y-1 px-2 pt-2 pb-3">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="block rounded-md px-3 py-2 text-base font-medium text-blue-200 transition-colors hover:bg-blue-800 hover:text-white"
//               onClick={toggleMenu}
//             >
//               {item.name}
//             </Link>
//           ))}

//           {/* Mobile Social Links */}
//           <div className="mt-2 flex items-center space-x-4 border-t border-blue-800 px-3 py-3">
//             <Link
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-300 transition-colors hover:text-white"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="h-5 w-5" />
//               <span className="sr-only">LinkedIn</span>
//             </Link>
//             <Button
//               asChild
//               variant="outline"
//               size="sm"
//               className="border-blue-700 bg-transparent text-blue-200 hover:bg-blue-800 hover:text-white"
//             >
//               <Link
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2"
//               >
//                 <Github className="h-4 w-4" />
//                 <span>GitHub</span>
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
