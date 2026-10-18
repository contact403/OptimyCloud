(function (C, A, L) {
  let p = function (a, ar) { a.q.push(ar); };
  let d = C.document;
  C.Cal = C.Cal || function () {
    let cal = C.Cal;
    let ar = arguments;
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      d.head.appendChild(d.createElement("script")).src = A;
      cal.loaded = true;
    }
    if (ar[0] === L) {
      const api = function () { p(api, arguments); };
      const namespace = ar[1];
      api.q = api.q || [];
      if (typeof namespace === "string") {
        cal.ns[namespace] = cal.ns[namespace] || api;
        p(cal.ns[namespace], ar);
        p(cal, ["initNamespace", namespace]);
      } else {
        p(cal, ar);
      }
      return;
    }
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");

// Booking types (namespace -> brand colour). Each gets init, UI and lead tracking.
var CAL_EVENTS = {
  "diagnostic-finops": "#2563eb",
  "decouverte-agent-ia-gratuit": "#4f46e5",
  "audit-seo": "#059669"
};

Object.keys(CAL_EVENTS).forEach(function (ns) {
  Cal("init", ns, { origin: "https://app.cal.com" });
  Cal.ns[ns]("ui", {
    theme: "light",
    cssVarsPerTheme: { light: { "cal-brand": CAL_EVENTS[ns] } },
    hideEventTypeDetails: false,
    layout: "month_view"
  });
  Cal.ns[ns]("on", {
    action: "bookingSuccessful",
    callback: function () {
      if (typeof gtag === "function") gtag("event", "generate_lead", { method: "cal.com", cal_event: ns });
      if (typeof fbq === "function" && localStorage.getItem("cookieConsent") === "accepted") fbq("track", "Lead");
    }
  });
});

// GA4: booking modal opens
document.addEventListener("click", function (e) {
  var el = e.target.closest("[data-cal-link]");
  if (el && typeof gtag === "function") gtag("event", "cal_open", { cal_event: el.getAttribute("data-cal-namespace") });
});
