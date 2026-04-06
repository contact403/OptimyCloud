(function () {
    var main = document.querySelector('main');
    if (!main) return;

    var headings = main.querySelectorAll('h2');
    if (headings.length < 3) return;

    var target = headings[Math.floor(headings.length * 0.6)];
    var section = target.closest('.reveal') || target.parentElement;

    var banner = document.createElement('div');
    banner.className = 'blog-cta-banner';
    banner.innerHTML =
        '<div style="background:linear-gradient(135deg,#4f46e5,#6366f1);border-radius:12px;padding:24px 28px;margin:40px 0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px">' +
            '<div style="color:#fff">' +
                '<p style="font-weight:700;font-size:1.1rem;margin:0 0 4px">Besoin d\'aide sur ce sujet ?</p>' +
                '<p style="font-size:.9rem;opacity:.85;margin:0">Je vous r\u00e9ponds sous 24h avec une premi\u00e8re analyse gratuite.</p>' +
            '</div>' +
            '<a href="../index.html#contact" style="background:#fff;color:#4f46e5;padding:10px 24px;border-radius:8px;font-weight:600;font-size:.9rem;text-decoration:none;white-space:nowrap;transition:opacity .2s" onmouseover="this.style.opacity=\'0.9\'" onmouseout="this.style.opacity=\'1\'">Me contacter</a>' +
        '</div>';

    section.parentNode.insertBefore(banner, section);
})();
