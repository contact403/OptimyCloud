(function () {
    var meta = document.querySelector('meta[name="service-cta"]');
    if (!meta) return;

    var label = meta.getAttribute('data-label') || 'Me contacter';
    var service = meta.getAttribute('data-service') || '';
    var href = 'index.html' + (service ? '?service=' + encodeURIComponent(service) : '') + '#contact';

    var bar = document.createElement('div');
    bar.className = 'sticky-cta';

    var link = document.createElement('a');
    link.href = href;
    link.className = 'sticky-cta__link';

    var icon = document.createElement('i');
    icon.className = 'fas fa-paper-plane';
    link.appendChild(icon);
    link.appendChild(document.createTextNode(' ' + label));

    bar.appendChild(link);
    document.body.appendChild(bar);
})();
