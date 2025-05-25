const menu = document.getElementById('menu');
const container = document.getElementById('game-container');

const games = {
  'tug-of-war': () => import('../games/tug-of-war.js'),
  'click-duel': () => import('../games/click-duel.js'),
  // … other imports …
  'mini-rts':    () => import('../games/mini-rts.js'),
};

menu.addEventListener('click', async e => {
  if (e.target.matches('button[data-game]')) {
    const key = e.target.dataset.game;
    container.innerHTML = ''; // clear
    menu.style.display = 'none';
    const mod = await games[key]();
    mod.init(container);
  }
});

// allow returning to menu
export function exitToMenu() {
  for (let game of Object.values(games)) {
    if (game.destroy) game.destroy();
  }
  container.innerHTML = '';
  menu.style.display = 'block';
}
