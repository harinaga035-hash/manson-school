// =========================================================
// MSB Lead Submission — Google Apps Script endpoint
// All leads route to the same Google Sheet.
// =========================================================

const GAS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwj8RGXuoRlAI_CdQiAGaZ7yMBq7emUItODEgTPQ-a8xe8GvpA4ziSIJl2iDEwrb37hWw/exec";

/**
 * submitLead — sends lead data to the Google Apps Script endpoint.
 *
 * @param {{ data: object }} options
 *   data must contain at least { type, name, email, phone }.
 *   `source` may be passed directly; otherwise it is derived from `type`.
 *
 * Source values written to the sheet:
 *   "Enquiry Form" | "Download Brochure" | "Apply Now" |
 *   "WhatsApp"     | "Call Now"          | "Contact Form"
 */
export async function submitLead({ data }) {
  // Resolve source label
  const sourceMap = {
    enquiry: "Enquiry Form",
    brochure: "Download Brochure",
    apply: "Apply Now",
    whatsapp: "WhatsApp",
    call: "Call Now",
    contact: "Contact Form",
  };

  const source = data.source || sourceMap[data.type] || data.type || "Unknown";

  const payload = {
    fullName: (data.name || data.fullName || "").trim(),
    email: (data.email || "").trim(),
    phone: (data.phone || "").trim(),
    course: (data.course || "").trim(),
    message: (data.message || "").trim(),
    source,
  };

  // Basic client-side validation for form submissions
  if (data.type !== "whatsapp" && data.type !== "call") {
    if (!payload.fullName || !payload.email || !payload.phone) {
      throw new Error("Please complete all required fields.");
    }
  }

  try {
    // Google Apps Script requires no-cors mode for cross-origin POST.
    // We use "no-cors" so the browser doesn't block, but we cannot read the response.
    // The GAS endpoint must return 200 for this to succeed silently.
    await fetch(GAS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    // Network failure — surface to caller for error handling
    console.error("[submitLead] network error", err);
    throw err;
  }

  return { ok: true };
}

/**
 * trackLead — fire-and-forget lead ping (WhatsApp, Call Now).
 * No throw — errors are swallowed so the link still works.
 */
export function trackLead(type, extra = {}) {
  const sourceMap = {
    whatsapp: "WhatsApp",
    call: "Call Now",
  };

  const payload = {
    fullName: extra.name || "",
    email: extra.email || "",
    phone: extra.phone || "",
    course: extra.course || "",
    message: extra.message || "",
    source: sourceMap[type] || type,
  };

  fetch(GAS_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch((e) => console.warn("[trackLead] failed to ping", e));
}
