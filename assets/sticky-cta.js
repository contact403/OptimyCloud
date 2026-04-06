(function () {
    var meta = document.querySelector('meta[name="service-cta"]');
    if (!meta) return;

    var label = meta.getAttribute('data-label') || 'Me contacter';
    var service = meta.getAttribute('data-service') || '';
    var href = 'index.html' + (service ? '?service=' + service : '') + '#contact';

    var bar = document.createElement('div');
    bar.className = 'sticky-cta';
    bar.innerHTML =
        '<a href="' + href + '" style="display:block;width:100%;text-align:center;background:#4f46e5;color:#fff;padding:14px 20px;font-weight:600;font-size:.9rem;text-decoration:none">' +
            '<i class="fas fa-paper-plane" style="margin-right:8px"></i>' + label +
        '</a>';

    document.body.appendChild(bar);
})();
