# 📊 Points Tracker

A simple team scoreboard for tracking daily points Monday through Friday. One HTML file, no build step.

## 🛠️ What was used

| Piece | Purpose |
|-------|---------|
| **HTML / CSS / JavaScript** 🌐 | The whole app lives in `index.html` |
| **[Chart.js](https://www.chartjs.org/)** 📈 | Weekly progress line chart |
| **[Plus Jakarta Sans](https://fonts.google.com/)** ✍️ | UI font |
| **localStorage** 💾 | Saves data in the browser |
| **Firebase Realtime Database** ☁️ (optional) | Syncs data across devices |
| **`data.json`** 📄 (optional) | Static fallback when hosted without Firebase |

## 🚀 How to run

1. Open `index.html` in a browser 🌍, or serve the folder with any static server.
2. (Optional) Copy `config.example.js` to `config.js` and add Firebase credentials for cloud sync ☁️

No `npm install` or build required ✨

## ⚙️ How it works

### 📅 Weekly scores

- Each person has **5 daily values** (Mon–Fri).
- The table stores **points per day** ✏️. The chart shows **running totals** through the week 📈.
- Use **Prev / Next / Today** ⏮️⏭️ to move between weeks.
- **Reset** 🔄 clears the current week. **+ Add** ➕ adds a participant.

### 📉 Chart behavior

- Every line starts at **0** before Monday, then grows through the week.
- On the **current week**, the chart only shows **completed days** (up to yesterday). Today and future days are hidden on the graph so the lines don’t run ahead of the week 🙈
- On **past weeks** (or on weekends), the full Mon–Fri week is shown ✅

### 💾 Data storage

```
Browser (localStorage) 💾
       ↕
Firebase (if config.js is set up) ☁️
       ↕
data.json (loaded on startup as a remote snapshot) 📄
```

- Edits save automatically to **localStorage** 💾
- If Firebase is configured, changes sync to the cloud for the whole team ☁️
- **Export / Import** 📤📥 downloads or uploads a JSON backup

### 📁 Main files

| File | Role |
|------|------|
| `index.html` 🏠 | App UI, logic, and styles |
| `config.js` ⚙️ | Firebase settings (create from `config.example.js`) |
| `data.json` 📄 | Optional shared data file for static hosting |
