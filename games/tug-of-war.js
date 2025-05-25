let raf, ropeOffset = 0, p1 = 0, p2 = 0, container, ctx;
const WIN_DIST = 200;

export function init(parent) {
  container = parent;
  const cvs = document.createElement('canvas');
  cvs.width = 600; cvs.height = 200;
  parent.appendChild(cvs);
  ctx = cvs.getContext('2d');

  // key handlers
  const onKey = e => {
    if (e.key === 'a' || e.key === 'A') p1++;
    if (e.key === 'l' || e.key === 'L') p2++;
    ropeOffset = (p1 - p2);
    checkWin();
  };
  window.addEventListener('keydown', onKey);
  listeners.push({el: window, ev:'keydown', fn:onKey});

  raf = requestAnimationFrame(loop);
}

function update() {
  // no extra physics
}

function render() {
  ctx.clearRect(0,0,600,200);
  // draw rope
  const x = 300 + ropeOffset;
  ctx.fillStyle = '#444';
  ctx.fillRect(x - 100, 90, 200, 20);
  // draw markers
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
  listeners.forEach(({el,ev,fn}) => el.removeEventListener(ev,fn));
  container.innerHTML = '';
}

