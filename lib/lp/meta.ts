const PIXEL_ID = "1168799437651546";
const CAPI_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

function genEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function trackBrowser(eventName: string, eventId: string) {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as Record<string, unknown>).fbq;
  if (typeof fbq !== "function") return;
  (fbq as Function)("track", eventName, {}, { eventID: eventId });
}

async function trackCapi(eventName: string, eventId: string) {
  const token = process.env.NEXT_PUBLIC_META_ACCESS_TOKEN;
  if (!token) return;

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url:
          typeof window !== "undefined" ? window.location.href : "",
        action_source: "website",
      },
    ],
  };

  try {
    await fetch(`${CAPI_URL}?access_token=${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // best-effort
  }
}

export function trackEvent(eventName: string) {
  const eventId = genEventId();
  trackBrowser(eventName, eventId);
  trackCapi(eventName, eventId);
}

export { PIXEL_ID };
