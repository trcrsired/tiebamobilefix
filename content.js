// Inject a proper viewport meta tag for mobile rendering
(function () {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1, maximum-scale=1";
    document.head.appendChild(meta);
})();

// Prevent Tieba PC scripts from forcing zoom or fixed scaling
(function () {
    const style = document.createElement("style");
    style.innerHTML = `
        html {
            zoom: 1 !important;
        }
    `;
    document.head.appendChild(style);
})();

