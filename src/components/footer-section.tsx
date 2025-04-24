export default function FooterSection() {
  return (
    <footer className="border-t border-blue-800/50 bg-blue-950 py-8">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <p className="font-semibold text-blue-400">
          &copy; {new Date().getFullYear()} Naufal Satria. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-blue-500">
          Designed and built with Next.js, Tailwind CSS, and Faith.
        </p>
      </div>
    </footer>
  );
}
