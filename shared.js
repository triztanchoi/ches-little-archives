/* Lily drawings shared by every page.
   Injected from here so the three pages don't each carry a copy.
   Colors are set in shared.css through the .l-* classes. */
(function () {
  var sprite =
    '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">' +

    /* Open lily, seen from above */
    '<symbol id="lily-open" viewBox="-120 -120 240 240">' +
      '<defs>' +
        '<path id="lp" d="M0 0 C-25 -28 -31 -72 0 -110 C31 -72 25 -28 0 0Z"/>' +
        '<g id="lv"><path d="M0 -8 L0 -92"/><path d="M0 -30 C-7 -36 -12 -42 -15 -50 M0 -30 C7 -36 12 -42 15 -50"/></g>' +
        '<g id="ls"><circle cx="-6" cy="-24" r="1.6"/><circle cx="5" cy="-31" r="1.4"/><circle cx="-4" cy="-42" r="1.7"/><circle cx="7" cy="-50" r="1.3"/><circle cx="-2" cy="-60" r="1.4"/><circle cx="4" cy="-70" r="1.1"/></g>' +
        '<radialGradient id="lg"><stop offset="0" stop-color="#C98A93" stop-opacity=".75"/><stop offset="1" stop-color="#C98A93" stop-opacity="0"/></radialGradient>' +
      '</defs>' +
      '<g class="l-petal">' +
        '<use href="#lp" transform="rotate(0)"/><use href="#lp" transform="rotate(120)"/><use href="#lp" transform="rotate(240)"/>' +
      '</g>' +
      '<g class="l-petal l-inner">' +
        '<use href="#lp" transform="rotate(60) scale(.97)"/><use href="#lp" transform="rotate(180) scale(.97)"/><use href="#lp" transform="rotate(300) scale(.97)"/>' +
      '</g>' +
      '<circle r="40" fill="url(#lg)" class="l-glow"/>' +
      '<g class="l-vein">' +
        '<use href="#lv" transform="rotate(0)"/><use href="#lv" transform="rotate(60)"/><use href="#lv" transform="rotate(120)"/>' +
        '<use href="#lv" transform="rotate(180)"/><use href="#lv" transform="rotate(240)"/><use href="#lv" transform="rotate(300)"/>' +
      '</g>' +
      '<g class="l-speck">' +
        '<use href="#ls" transform="rotate(0)"/><use href="#ls" transform="rotate(60)"/><use href="#ls" transform="rotate(120)"/>' +
        '<use href="#ls" transform="rotate(180)"/><use href="#ls" transform="rotate(240)"/><use href="#ls" transform="rotate(300)"/>' +
      '</g>' +
      '<g class="l-filament">' +
        '<path d="M0 0 Q4 -26 1 -50" transform="rotate(30)"/><path d="M0 0 Q4 -26 1 -50" transform="rotate(90)"/><path d="M0 0 Q4 -26 1 -50" transform="rotate(150)"/>' +
        '<path d="M0 0 Q4 -26 1 -50" transform="rotate(210)"/><path d="M0 0 Q4 -26 1 -50" transform="rotate(270)"/><path d="M0 0 Q4 -26 1 -50" transform="rotate(330)"/>' +
        '<path d="M0 0 Q-3 -34 0 -66"/>' +
      '</g>' +
      '<g class="l-anther">' +
        '<ellipse cx="1" cy="-55" rx="3.6" ry="9" transform="rotate(30)"/><ellipse cx="1" cy="-55" rx="3.6" ry="9" transform="rotate(90)"/><ellipse cx="1" cy="-55" rx="3.6" ry="9" transform="rotate(150)"/>' +
        '<ellipse cx="1" cy="-55" rx="3.6" ry="9" transform="rotate(210)"/><ellipse cx="1" cy="-55" rx="3.6" ry="9" transform="rotate(270)"/><ellipse cx="1" cy="-55" rx="3.6" ry="9" transform="rotate(330)"/>' +
      '</g>' +
      '<circle cx="0" cy="-67" r="3.8" class="l-stigma"/>' +
    '</symbol>' +

    /* Lily bud on a stem, upright */
    '<symbol id="lily-bud" viewBox="-70 -130 140 270">' +
      '<path class="l-stem" d="M0 0 C6 40 -6 85 0 135"/>' +
      '<path class="l-leaf" d="M0 72 C-30 62 -56 42 -63 10 C-36 26 -12 46 0 72Z"/>' +
      '<path class="l-leaf" d="M0 104 C30 96 53 78 61 50 C35 62 12 80 0 104Z"/>' +
      '<path class="l-petal" d="M0 2 C-18 -26 -18 -72 0 -120 C18 -72 18 -26 0 2Z"/>' +
      '<path class="l-vein" d="M0 -2 L0 -112 M-8 -22 C-12 -60 -6 -96 0 -118 M8 -22 C12 -60 6 -96 0 -118"/>' +
      '<path class="l-tint" d="M-5 -100 C-3 -112 -1 -116 0 -120 C1 -116 3 -112 5 -100 C2 -104 -2 -104 -5 -100Z"/>' +
      '<ellipse class="l-sepal" cx="0" cy="3" rx="6" ry="4"/>' +
    '</symbol>' +

    '</svg>';

  function add() { document.body.insertAdjacentHTML('afterbegin', sprite); }
  if (document.body) add(); else document.addEventListener('DOMContentLoaded', add);
})();

/* Drifting photo background */
(function () {
  var script = document.currentScript;
  if (!script) return;
  var base = new URL('bg/', script.src).href;
  // Each column gets its own mix of photos, speed and direction.
  var columns = [
    { files: [1, 4, 10, 7, 13, 12], dur: 20, down: false },
    { files: [6, 2, 9, 5, 11, 3],   dur: 30, down: true  },
    { files: [8, 12, 4, 13, 1, 10], dur: 25, down: false }
  ];
  var tilts = [-2.2, 1.6, -1, 2.4, -1.8, 1.2];

  function build() {
    var wrap = document.createElement('div');
    wrap.className = 'drift';
    wrap.setAttribute('aria-hidden', 'true');
    columns.forEach(function (col, ci) {
      var el = document.createElement('div');
      el.className = 'drift-col' + (col.down ? ' down' : '');
      el.style.setProperty('--dur', col.dur + 's');
      // The list is written twice so the loop has no visible seam.
      col.files.concat(col.files).forEach(function (n, i) {
        var img = new Image();
        img.alt = '';
        img.decoding = 'async';
        img.loading = 'lazy';
        img.src = base + 'photo' + (n < 10 ? '0' : '') + n + '.jpg';
        img.style.setProperty('--tilt', tilts[(i + ci) % tilts.length] + 'deg');
        el.appendChild(img);
      });
      wrap.appendChild(el);
    });
    document.body.insertBefore(wrap, document.body.firstChild);
  }
  if (document.body) build(); else document.addEventListener('DOMContentLoaded', build);
})();
