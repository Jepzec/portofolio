"use client";

import { useState } from "react";

import Image from "next/image";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Naufal is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills make him a valuable asset to any project.",
      name: "Mas Rusdi",
      position: "JMK, Tech Innovations",
      avatar: "/rusdi.jpg",
    },
    {
      quote:
        "Working with Naufal was a game-changer for our startup. He not only built a robust platform but also provided valuable insights that helped shape our product strategy.",
      name: "Super Diddy",
      position: "Founder, Baby Oil",
      avatar: "/diddy.webp",
    },
    {
      quote:
        "Naufal technical expertise and ability to translate complex requirements into elegant solutions is impressive. He's a collaborative team player who elevates the entire project.",
      name: "Ashton Hole",
      position: "CEO, Ice Facewash",
      avatar: "/asston.jpeg",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials-section"
      className="relative overflow-hidden bg-blue-900 py-20"
    >
      <div
        className="bg-grid-white/[0.03] absolute inset-0"
        style={{ backgroundSize: "30px 30px" }}
      ></div>

      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-800 px-4 py-1 text-sm font-medium text-blue-300">
            Testimonials
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            What People Say
          </h2>

          <p className="mx-auto max-w-2xl text-blue-200">
            Feedback from clients and colleagues who I've had the pleasure of
            working with throughout my career.
          </p>
        </div>

        <div className="relative">
          <div className="relative rounded-xl border border-blue-700/30 bg-blue-800/50 p-8 backdrop-blur-sm md:p-12">
            <div className="absolute top-8 left-8 text-blue-500 opacity-30"></div>

            <div className="relative z-10">
              <div className="text-center transition-opacity duration-300">
                <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100 italic md:text-2xl">
                  "{testimonials[activeIndex].quote}"
                </p>

                <div className="flex flex-col items-center">
                  <div className="mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-blue-400">
                    <Image
                      src={
                        testimonials[activeIndex].avatar || "/placeholder.svg"
                      }
                      alt={testimonials[activeIndex].name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-blue-300">
                    {testimonials[activeIndex].position}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-0 -bottom-23 left-0 flex justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white transition-colors hover:bg-blue-600"
                aria-label="Previous testimonial"
              >
                <Image
                  src={"/right.svg"}
                  alt="left"
                  width={25}
                  height={25}
                  className="flex rotate-180 items-center justify-center"
                ></Image>
              </button>
              <button
                onClick={nextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white transition-colors hover:bg-blue-600"
                aria-label="Next testimonial"
              >
                <Image
                  src={"/right.svg"}
                  alt="right"
                  width={25}
                  height={25}
                  className="flex items-center justify-center"
                ></Image>
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-blue-400" : "bg-blue-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
