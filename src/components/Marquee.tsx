export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-b border-line bg-paper py-5">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-sans text-[1.05rem] font-medium uppercase tracking-[-0.01em] text-ink sm:text-[1.35rem]">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-ash" />
          </span>
        ))}
      </div>
    </div>
  );
}
