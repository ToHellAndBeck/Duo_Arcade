// /games/tug-of-war.js

let raf;
let ropeOffset = 0;
let p1 = 0;
let p2 = 0;
let container;
let ctx;
const WIN_DIST = 200;
const listeners = [];

export function init(parent) {
  container = parent;
  const cvs = document.createElement('canvas');
  cvs.width = 600;
  cvs.height = 200;
  container.appendChild(cvs);
  ctx = cvs.getContext('2d');

  const onKey = e => {
    const key = e.key.toLowerCase();
    if (key === 'a') p1++;
    else if (key === 'l') p2++;
    ropeOffset = p1 - p2;
    checkWin();
  };

  window.addEventListener('keydown', onKey);
  listeners.push({ el: window, ev: 'keydown', fn: onKey });

  raf = requestAnimationFrame(loop);
}

function loop() {
  update();
  render();
  raf = requestAnimationFrame(loop);
}

function update() {
  // no extra physics
}

function render() {
  ctx.clearRect(0, 0, 600, 200);

  // draw rope
  const x = 300 + ropeOffset;
  ctx.fillStyle = '#444';
  ctx.fillRect(x - 100, 90, 200, 20);

  // draw win markers
  ctx.fillStyle = '#f00';
  ctx.fillRect(300 - WIN_DIST - 5, 85, 10, 30);
  ctx.fillStyle = '#00f';
  ctx.fillRect(300 + WIN_DIST - 5, 85, 10, 30);
}

function checkWin() {
  if (ropeOffset >= WIN_DIST) return end('Player 1 wins!');
  if (ropeOffset <= -WIN_DIST) return end('Player 2 wins!');
}

function end(msg) {
  cancelAnimationFrame(raf);
  setTimeout(() => alert(msg), 10);
}

export function destroy() {
  if (raf) cancelAnimationFrame(raf);
  listeners.forEach(({ el, ev, fn }) => el.removeEventListener(ev, fn));
  container.innerHTML = '';
}

