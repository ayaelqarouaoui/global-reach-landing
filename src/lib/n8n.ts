// n8n webhook integration. Replace with your production webhook URL when ready.
export const N8N_WEBHOOK_URL = ""; // e.g. "https://n8n.example.com/webhook/adsdo-contact"

export type ContactPayload = {
  name: string;
  email: string;
  service: string;
  message: string;
  language: "en" | "fr";
  submittedAt: string;
};

export async function sendToN8n(payload: ContactPayload): Promise<void> {
  if (!N8N_WEBHOOK_URL) {
    // Placeholder: log locally until webhook URL is configured.
    console.info("[n8n placeholder] Contact submission:", payload);
    return;
  }
  const res = await fetch(N8N_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`n8n webhook failed: ${res.status}`);
}
