export default function ExperienceSection() {
  const experiences = [
    {
      position: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead developer for enterprise SaaS products, managing a team of 5 developers and implementing CI/CD pipelines that reduced deployment time by 40%.",
    },
    {
      position: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      description:
        "Developed and maintained multiple client projects using React, Node.js, and PostgreSQL. Improved application performance by 60% through code optimization.",
    },
    {
      position: "Frontend Developer",
      company: "Creative Web Agency",
      period: "2017 - 2019",
      description:
        "Created responsive web applications for clients across various industries. Implemented design systems that improved development consistency and speed.",
    },
    {
      position: "Junior Web Developer",
      company: "StartUp Ventures",
      period: "2016 - 2017",
      description:
        "Assisted in the development of web applications and gained experience in modern JavaScript frameworks and responsive design principles.",
    },
  ];

  return (
    <section id="experience-section" className="relative bg-blue-950 py-20">
      <div
        className="bg-grid-white/[0.03] absolute inset-0"
        style={{ backgroundSize: "30px 30px" }}
      ></div>

      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-900 px-4 py-1 text-sm font-medium text-blue-300">
            My Journey
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Work Experience
          </h2>

          <p className="mx-auto max-w-2xl text-blue-200">
            My professional journey through the tech industry, where I've
            contributed to impactful projects and grown as a developer.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-0 w-px transform bg-blue-700/50 md:left-1/2 md:translate-x-[-0.5px]"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative grid gap-8 md:grid-cols-2 md:gap-0"
              >
                <div
                  className={`md:text-right ${index % 2 === 1 ? "md:order-2" : ""} md:pr-12`}
                >
                  {index % 2 === 0 && (
                    <>
                      <h3 className="text-xl font-bold text-white">
                        {exp.position}
                      </h3>
                      <div className="mb-2 text-blue-300">{exp.company}</div>
                      <div className="mb-4 flex items-center text-sm text-blue-400 md:justify-end">
                        {exp.period}
                      </div>
                      <p className="text-blue-200">{exp.description}</p>
                    </>
                  )}
                </div>

                {/* Timeline dot */}
                <div className="absolute top-0 left-[-8px] h-4 w-4 transform rounded-full border-2 border-blue-300 bg-blue-600 md:left-1/2 md:translate-x-[-50%]"></div>

                <div
                  className={`${index % 2 === 0 ? "md:order-2" : ""} md:pl-12`}
                >
                  {index % 2 === 1 && (
                    <>
                      <h3 className="text-xl font-bold text-white">
                        {exp.position}
                      </h3>
                      <div className="mb-2 text-blue-300">{exp.company}</div>
                      <div className="mb-4 flex items-center text-sm text-blue-400">
                        {exp.period}
                      </div>
                      <p className="text-blue-200">{exp.description}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
