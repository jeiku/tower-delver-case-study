/* Click-to-load video facade.
   Without this file the poster is a plain link that opens the video on its host, so the
   demo is reachable with JavaScript disabled. With it, the iframe is created only when the
   visitor asks for it: nothing third-party is requested on page load, and nothing plays
   until that click. */
(function () {
  var slot = document.getElementById('video-slot');
  if (!slot) return;

  var facade = slot.querySelector('.video__facade');
  if (!facade) return;

  facade.addEventListener('click', function (event) {
    event.preventDefault();

    var frame = document.createElement('div');
    frame.className = 'video__frame';

    var iframe = document.createElement('iframe');
    iframe.src = slot.getAttribute('data-embed');
    iframe.title = slot.getAttribute('data-title');
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; web-share; fullscreen';
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');

    frame.appendChild(iframe);
    slot.replaceChild(frame, facade);
    iframe.focus();
  });
})();
