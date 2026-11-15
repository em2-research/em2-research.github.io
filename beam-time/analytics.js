// Public GA4 web-stream ID for the lab's property.
(() => {
  const measurementId = 'G-KY24T28DEH';
  const production = location.hostname === 'www.em2-lab.com' || location.hostname === 'em2-lab.com';
  function gtag() { window.dataLayer.push(arguments); }

  if (production) {
    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', measurementId, { send_page_view: false });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.append(tag);
  }

  function record(name) {
    if (production) gtag('event', name, { send_to: measurementId, game_version: '2.7' });
    // Also observable on localhost, where the preview never sends analytics.
    window.dispatchEvent(new CustomEvent('beam-time:metric', { detail: name }));
  }

  if (document.currentScript.hasAttribute('data-landing')) {
    record('beam_time_view');
  } else {
    window.addEventListener('beam-time:begin', () => record('beam_time_play'), { once: true });
  }
})();
