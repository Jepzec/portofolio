import Link from "next/link";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact-section" className="relative bg-blue-950 py-20">
      <div className="container mx-auto flex max-w-5xl flex-col items-center px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-900 px-4 py-1 text-sm font-medium text-blue-300">
            Get In Touch
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Let&apos;s Connect
          </h2>

          <p className="mx-auto max-w-2xl text-blue-200">
            Interested in working together? Feel free to reach out through any
            of the platforms below.
          </p>
        </div>

        <div className="flex w-sm flex-col items-center justify-center gap-3 font-bold">
          <div className="flex items-center gap-2 text-xl">
            <Link href="http://wa.me/+628119112942">
              <Image
                src={"/whatsapp.svg"}
                alt={"logo email"}
                width={40}
                height={40}
              />
            </Link>
            <p>+62 8119112942</p>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <Link href="mailto:mnaufalkadisatria13@gmail.com">
              <Image
                src={"/email.svg"}
                alt={"logo email"}
                width={50}
                height={50}
              />
            </Link>
            <p>mnaufalkadisatria13@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
