# Beck’s 2-Player Arcade Bundle

No frills, just code. A single-page HTML/CSS/JS “arcade” with 12 quick two-player games plus a mini-RTS mode. Drop it on any static host or `file://` and go.

---

## 📂 Repository Structure

| Path                       | Description                                     |
|----------------------------|-------------------------------------------------|
| `/index.html`              | Launcher & menu UI                              |
| `/css/styles.css`          | Shared layout & styling                         |
| `/js/main.js`              | Router & module loader                          |
| `/games/*.js`              | Each game as ES module: `init(container)` / `destroy()` |
| `/assets/`                 | Sprites, sound effects, fonts, etc.             |
| `README.md`                | This file                                       |

---

## 🚀 Getting Started

1. **Clone** the repo  
   ```bash
   git clone https://github.com/your-org/arcade-bundle.git
   cd arcade-bundle
````

2. **Serve** it (optional)

   * Static host (Netlify, GitHub Pages)
   * Or run a quick Python server:

     ```bash
     python3 -m http.server 8000
     ```
3. **Open** `index.html` in your browser or navigate to `http://localhost:8000`

---

## 🎮 Included Games

| Name         | Controls              | Type   |
| ------------ | --------------------- | ------ |
| Tug of War   | `A` vs `L`            | Canvas |
| Click Duel   | Click left/right half | DOM    |
| Dot Chase    | WASD vs ◀︎▲︎▼︎▶︎      | Canvas |
| Grid Tactics | Click 5×5 grid        | DOM    |
| Hex Duel     | Click hex cell        | Canvas |
| Mirror Maze  | WASD vs ◀︎▲︎▼︎▶︎      | Canvas |
| Hot Potato   | `Q` vs `P`            | DOM    |
| Typing Duel  | Keyboard              | DOM    |
| Button Bash  | WASD vs ◀︎▲︎▼︎▶︎      | Canvas |
| Card Flip    | Click cards           | DOM    |
| Pong         | W/S vs ↑/↓            | Canvas |
| Snake Battle | WASD vs ◀︎▲︎▼︎▶︎      | Canvas |

---

## ⚔️ Mini-RTS Mode

| Feature         | Description                                  |
| --------------- | -------------------------------------------- |
| Canvas size     | 800×600 (16:9)                               |
| Resources       | Income ticks every 2 s                       |
| Units           | Spawn buttons (cost 5/10/20)                 |
| Towers          | Left & right with HP bars                    |
| Win Condition   | Enemy tower HP ≤ 0                           |
| Unique Mechanic | Lane-based combat → auto-attack on collision |

---

## 🛠️ How to Add a New Game

1. **Create** `/games/your-game.js` with:

   ```js
   export function init(container) { /* … */ }
   export function destroy() { /* … */ }
   ```
2. **Add** a `<button data-game="your-game">Your Game</button>` to `index.html`.
3. **Import** it in `js/main.js`:

   ```js
   'your-game': () => import('../games/your-game.js'),
   ```
4. **Implement** your game loop, input handling, rendering, cleanup.

---

## 🤝 Contributing

* Fork & branch
* Follow module API (init/destroy)
* Keep bundles lean: no heavy frameworks
* Submit PR with game name & short description

---

## 📄 License

MIT © Beckett McFarland

```

There you go—straight to the point.
```

