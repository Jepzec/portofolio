import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative flex h-screen items-center justify-center overflow-hidden px-4"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-950 opacity-90"></div>
        <div
          className="bg-grid-white/[0.05] absolute inset-0"
          style={{ backgroundSize: "30px 30px" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl text-center">
        <div className="space-y-6">
          <div className="mb-4 inline-block rounded-full border-2 border-blue-400 px-6 py-2 text-blue-300 transition-transform duration-300 hover:scale-105">
            Full-Stack Developer
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            <span className="block text-white">Hello, I&apos;m</span>
            <span className="mt-2 block text-blue-300">Naufal Satria</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-200">
            I build exceptional digital experiences that live at the
            intersection of design and technology.
          </p>

          <div className="mt-10">
            <Link
              href="#portfolio-section"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-white transition-colors duration-300 hover:bg-blue-700"
            >
              Explore My Work?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
