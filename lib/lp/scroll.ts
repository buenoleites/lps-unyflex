function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function scrollToId(id: string, { offset }: { offset?: number } = {}) {
  const target = document.getElementById(id);
  if (!target) return;

  const headerOffset = offset ?? (window.innerWidth <= 800 ? 80 : 72);
  const startTop = window.pageYOffset;
  const endTop = target.getBoundingClientRect().top + startTop - headerOffset;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, endTop);
    return;
  }

  const distance = endTop - startTop;
  const duration = 900;
  let startTime: number | null = null;

  function step(now: number) {
    if (startTime === null) startTime = now;
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, startTop + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function handleAnchorClick(event: React.MouseEvent<HTMLAnchorElement>) {
  const href = event.currentTarget.getAttribute("href") || "";
  if (href.charAt(0) !== "#" || href.length < 2) return;

  const id = href.slice(1);
  if (!document.getElementById(id)) return;

  event.preventDefault();
  scrollToId(id);
}
