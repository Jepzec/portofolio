// "use client";

// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     function controlNavbar() {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setIsVisible(false);
//       } else {
//         setIsVisible(true);
//       }

//       lastScrollY = currentScrollY;
//     }

//     window.addEventListener("scroll", controlNavbar);
//   }, []);

//   return (
//     <nav
//       className={`${
//         isVisible ? "translate-y-0" : "-translate-y-[24px]"
//       } fixed w-full h-12 bg-white shadow-md transition-transform duration-300 z-50`}
//     ></nav>
//   );
// }
