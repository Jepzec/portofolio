import Image from "next/image";

export default function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.",
      image: "/ProjectImg.jpg",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team workspaces.",
      image: "/ProjectImg.jpg",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered application that generates marketing copy, blog posts, and social media content.",
      image: "/ProjectImg.jpg",
      tags: ["Vue.js", "Python", "OpenAI", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate Platform",
      description:
        "A property listing and management platform with virtual tours and mortgage calculator.",
      image: "/ProjectImg.jpg",
      tags: ["Next.js", "PostgreSQL", "Mapbox", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="portfolio-section" className="relative bg-blue-900 py-20">
      <div
        className="bg-grid-white/[0.03] absolute inset-0"
        style={{ backgroundSize: "30px 30px" }}
      ></div>

      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-800 px-4 py-1 text-sm font-medium text-blue-300">
            My Work
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Featured Projects
          </h2>

          <p className="mx-auto max-w-2xl text-blue-200">
            A selection of my recent work, showcasing my skills in full-stack
            development, UI/UX design, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-blue-700/30 bg-blue-800/50 backdrop-blur-sm transition-colors duration-300 hover:border-blue-500/50"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-blue-200">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-blue-700/50 px-3 py-1 text-xs text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
