export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} F1 Studio. All rights reserved.</p>
        <a href="#contact" className="inline-flex items-center rounded-full bg-brand px-4 py-2 text-[13px] font-medium text-white shadow-sm hover:opacity-90">
          Start a project
        </a>
      </div>
    </footer>
  );
}