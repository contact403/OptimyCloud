(function () {
    var main = document.querySelector('main');
    if (!main) return;
    var en = document.documentElement.lang.indexOf('en') === 0;

    var headings = main.querySelectorAll('h2');
    if (headings.length < 3) return;

    var target = headings[Math.floor(headings.length * 0.6)];
    var section = target.closest('.reveal') || target.parentElement;
    if (!section || !section.parentNode) return;

    var banner = document.createElement('div');
    banner.className = 'blog-cta-banner';

    var inner = document.createElement('div');
    inner.className = 'blog-cta-banner__inner';

    var text = document.createElement('div');
    var title = document.createElement('p');
    title.className = 'blog-cta-banner__title';
    title.textContent = en ? 'Need help with this?' : 'Besoin d\'aide sur ce sujet ?';
    var subtitle = document.createElement('p');
    subtitle.className = 'blog-cta-banner__subtitle';
    subtitle.textContent = en ? 'I reply within 24 hours with a free first assessment.' : 'Je vous r\u00e9ponds sous 24h avec une premi\u00e8re analyse gratuite.';
    text.appendChild(title);
    text.appendChild(subtitle);

    var link = document.createElement('a');
    link.href = '../index.html#contact';
    link.className = 'blog-cta-banner__link';
    link.textContent = en ? 'Contact me' : 'Me contacter';

    inner.appendChild(text);
    inner.appendChild(link);
    banner.appendChild(inner);

    section.parentNode.insertBefore(banner, section);
})();
