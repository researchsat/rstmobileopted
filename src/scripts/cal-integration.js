// Cal.com integration script
export default function initCalendar() {
  // Only initialize once
  if (window.calInitialized) return;

  // Define the Cal.com embed code
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
        if(typeof namespace === "string"){
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");

  // Initialize Cal.com with the specified configuration
  if (window.Cal) {
    window.Cal("init", "30min", {origin:"https://cal.com"});

    // Configure the UI
    window.Cal.ns["30min"]("ui", {
      "cssVarsPerTheme": {
        "light": {
          "cal-brand": "#cf1414"
        }
      },
      "hideEventTypeDetails": false,
      "layout": "month_view"
    });
  }

  // Mark as initialized to prevent duplicate initialization
  window.calInitialized = true;

  // Add click event listeners to all Cal.com buttons
  setTimeout(() => {
    const calButtons = document.querySelectorAll('[data-cal-link]');

    calButtons.forEach(button => {
      // Remove any existing click listeners to prevent duplicates
      button.removeEventListener('click', handleCalButtonClick);

      // Add click event listener
      button.addEventListener('click', handleCalButtonClick);
    });
  }, 500); // Small delay to ensure DOM is ready
}

// Handle Cal.com button clicks
function handleCalButtonClick(event) {
  event.preventDefault();

  const button = event.currentTarget;
  const calLink = button.getAttribute('data-cal-link');
  const namespace = button.getAttribute('data-cal-namespace');
  const configStr = button.getAttribute('data-cal-config');

  if (!calLink) return;

  let config = {};
  if (configStr) {
    try {
      config = JSON.parse(configStr);
    } catch (e) {
      console.error('Invalid Cal.com config:', e);
    }
  }

  // Open the Cal.com popup
  if (window.Cal && namespace) {
    window.Cal.ns[namespace]("floatingButton", { calLink, config });
  }
}
