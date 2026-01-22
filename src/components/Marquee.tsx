export function Marquee() {
  const text = "NO BULLSHIT JUST FOOD • BESTE BURGERS IN TOWN • AUTHENTIC MUNICH VIBES • ";

  return (
    <section className="w-full flex items-center h-[72px] bg-[var(--color-primary)] border-b-2 border-[var(--color-primary)] overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-white text-[40px] leading-none tracking-wider">{text}</span>
        <span className="text-white text-[40px] leading-none tracking-wider">{text}</span>
        <span className="text-white text-[40px] leading-none tracking-wider">{text}</span>
      </div>
    </section>
  );
}
