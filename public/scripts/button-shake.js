// Public client script to initialize shake animations for buttons
document.addEventListener('DOMContentLoaded', function () {
  try {
    const nodes = document.querySelectorAll('[data-shake-interval]');
    console.debug('[button-shake] found', nodes.length);
    nodes.forEach(function (el) {
      const rawInterval = el.getAttribute('data-shake-interval');
      const rawDuration = el.getAttribute('data-shake-duration');
      const intervalMs = parseInt(rawInterval || '0', 10);
      const duration = parseInt(rawDuration || '700', 10);
      if (!intervalMs) {
        console.debug('[button-shake] invalid interval', rawInterval, el);
        return;
      }
      if (el.getAttribute('data-shake-inited')) return;
      el.setAttribute('data-shake-inited', '1');
      try { el.style.willChange = 'transform'; } catch (e) {}
      const keyframes = [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-6px)' },
        { transform: 'translateX(6px)' },
        { transform: 'translateX(-4px)' },
        { transform: 'translateX(4px)' },
        { transform: 'translateX(0)' }
      ];
      const run = function () {
        if (!el.isConnected) return;
        // offsetParent null indicates display:none or not rendered
        if (el.offsetParent === null) return;
        try {
          el.animate(keyframes, { duration: duration, easing: 'ease-in-out' });
        } catch (err) {
          console.error('[button-shake] animate failed', err);
        }
      };
      setTimeout(function () { run(); }, 800 + Math.floor(Math.random() * 800));
      setInterval(run, intervalMs);
    });
  } catch (e) {
    console.error('[button-shake] init failed', e);
  }
});
