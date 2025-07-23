export default function SkillSection() {
  const skills = [
    {
      title: "Frontend",
      description: "React, Next.js, Tailwind CSS, Framer Motion",
      color: "bg-blue-700",
    },
    {
      title: "Backend",
      description: "Node.js, Express",
      color: "bg-blue-800",
    },
    {
      title: "Databases",
      description: "PostgreSQL, MySQL, Supabase",
      color: "bg-blue-700",
    },
    
    {
      title: "Languages",
      description: "JavaScript, TypeScript",
      color: "bg-blue-800",
    },
    {
      title: "Design",
      description: "Figma, Adobe Ai/Ps, Canva",
      color: "bg-blue-700",
    },
    {
      title: "Tools",
      description: "Git, GitHub, VS Code, Postman",
      color: "bg-blue-800",
    },
  ];

  return (
    <section id="skill-section" className="relative bg-blue-950 py-20">
      <div
        className="bg-grid-white/[0.03] absolute inset-0"
        style={{ backgroundSize: "30px 30px" }}
      ></div>

      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-900 px-4 py-1 text-sm font-medium text-blue-300">
            My Skills
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Technical Expertise
          </h2>

          <p className="mx-auto max-w-2xl text-blue-200">
            With a diverse skill set spanning frontend, backend, and everything
            in between, I bring a holistic approach to development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.color} rounded-xl p-6 transition-transform duration-300 hover:translate-y-[-5px]`}
            >
              <h3 className="mb-2 text-xl font-bold text-white">
                {skill.title}
              </h3>
              <p className="text-sm text-blue-200">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
