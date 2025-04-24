import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="relative overflow-hidden bg-blue-900 py-20"
    >
      <div
        className="bg-grid-white/[0.03] absolute inset-0"
        style={{ backgroundSize: "30px 30px" }}
      ></div>

      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 translate-x-4 translate-y-4 transform rounded-2xl border-2 border-blue-400"></div>
              <div className="absolute inset-0 overflow-hidden rounded-2xl bg-blue-800">
                <Image
                  src="/profil2.jpg"
                  alt="Developer Portrait"
                  height={200}
                  width={500}
                  className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="mb-2 inline-block rounded-full bg-blue-800 px-4 py-1 text-sm font-medium text-blue-300">
              About Me
            </div>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Crafting digital experiences with code and creativity
            </h2>

            <p className="text-justify leading-relaxed text-blue-200">
              I'm student full-stack developer at Purwadhika with over 100+
              years of experience building web applications that are both
              functional and beautiful. My journey in tech began with a
              curiosity about how things work, which evolved into a career
              creating digital solutions.
            </p>

            <p className="leading-relaxed text-blue-200">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor
              activities to recharge my creative energy.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <h3 className="font-medium text-blue-300">Name</h3>
                <p className="text-white">Naufal Satria</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-blue-300">Email</h3>
                <p className="text-white">mnaufalkadisatria13@gmail.com</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-blue-300">Location</h3>
                <p className="text-white">Jakarta, Indonesia</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-blue-300">Availability</h3>
                <p className="text-white">anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
