const PIXEL_ID = "1168799437651546";

function genEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function trackBrowser(eventName: string, eventId: string) {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as Record<string, unknown>).fbq;
  if (typeof fbq !== "function") return;
  (fbq as Function)("track", eventName, {}, { eventID: eventId });
}

export function trackEvent(eventName: string) {
  trackBrowser(eventName, genEventId());
}

export { PIXEL_ID };
