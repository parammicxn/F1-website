import Link from "next/link";

type WorkCardProps = {
  title: string;
  category: string;
  href?: string;
};

export default function WorkCard({ title, category, href = "#" }: WorkCardProps) {
  return (
    <Link href={href} className="group block rounded-lg border border-white/10 overflow-hidden bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
      <div className="relative aspect-[16/10] bg-gradient-to-br from-white/10 via-white/0 to-white/10">
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-white/30 text-xs tracking-widest uppercase">Case Study</span>
        </div>
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold tracking-tight">{title}</h3>
          <span className="text-[11px] uppercase tracking-wider text-white/50">{category}</span>
        </div>
      </div>
    </Link>
  );
}