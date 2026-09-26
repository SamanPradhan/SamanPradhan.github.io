/* The Log — the only script on the site.
   1. Clock: HH:MM:SS in Pune (IST) into every [data-clock], once a second.
   2. Elapsed: MM:SS since load into every [data-elapsed].
   3. Copy address (contact page).
   4. 404 page: the requested path.
   Every reveal and every animation is CSS. No dependencies. */
(function () {
  'use strict';

  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };

  // The header says IST, so the clock is Pune's, not the visitor's.
  // If the browser lacks time-zone data it falls back to the local clock.
  var fmt = null;
  try {
    fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
  } catch (e) { fmt = null; }

  function now() {
    var d = new Date();
    if (fmt) return fmt.format(d);
    return pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  }

  var clocks = document.querySelectorAll('[data-clock]');
  var elapsed = document.querySelectorAll('[data-elapsed]');
  var t0 = Date.now();
  var lastMinute = -1;

  function write(list, text) {
    for (var i = 0; i < list.length; i++) list[i].textContent = text;
  }

  function tick() {
    write(clocks, now());
    var s = Math.floor((Date.now() - t0) / 1000);
    var m = Math.floor(s / 60);
    // The clock is information, so it always runs. Under reduced motion the
    // time-on-page counter only moves once a minute.
    if (!reduce.matches || m !== lastMinute) {
      write(elapsed, pad(m) + ':' + pad(s % 60));
      lastMinute = m;
    }
  }

  for (var i = 0; i < clocks.length; i++) clocks[i].setAttribute('aria-live', 'off');
  tick();
  setInterval(tick, 1000);

  // The IN stamp on the home page records the moment you arrived. Written once.
  write(document.querySelectorAll('[data-punched]'), now());

  // 404 page: log the address that was asked for. Nothing is sent anywhere.
  var reqPath = document.querySelector('[data-path]');
  if (reqPath) reqPath.textContent = location.pathname + location.search;

  // Copy address. If the clipboard API is unavailable the button renders
  // disabled; the mailto link beside it still works.
  var btn = document.querySelector('[data-copy]');
  if (btn) {
    var note = document.querySelector('[data-copy-note]');
    var addr = btn.getAttribute('data-copy');
    var idle = btn.textContent;
    var canCopy = !!(navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext);
    if (!canCopy) btn.setAttribute('aria-disabled', 'true');
    btn.addEventListener('click', function () {
      if (btn.getAttribute('aria-disabled') === 'true') return;
      navigator.clipboard.writeText(addr).then(function () {
        btn.textContent = 'Copied';
        btn.classList.add('is-done');
        if (note) note.textContent = 'logged ' + now();
        setTimeout(function () {
          btn.textContent = idle;
          btn.classList.remove('is-done');
          if (note) note.textContent = '';
        }, 2400);
      }, function () {
        btn.setAttribute('aria-disabled', 'true');
      });
    });
  }
})();
