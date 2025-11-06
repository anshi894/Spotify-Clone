# 🎵 Spotify Clone

A sleek and responsive **Spotify-like music player** built using **HTML, CSS, and JavaScript**.  
This project allows users to browse featured albums, play songs, and enjoy a realistic music player interface — all in a smooth, visually appealing design.

---

## 🌟 Features

- 🎧 **Music Player Functionality**
  - Play, pause, next, and previous controls
  - Dynamic progress bar with time tracking
  - Auto-play next song on completion

- 🖼️ **Interactive UI**
  - Animated album covers
  - Hover effects on album cards
  - Responsive layout for all devices

- 🔍 **Search Section**
  - Simulated search box for exploring songs and artists

- ❤️ **Custom Design**
  - Gradient backgrounds and elegant typography
  - Smooth transitions and modern UI inspired by Spotify

---

## 📁 Folder Structure
```
project-root/
│
├── index.html # Homepage with hero, featured albums, and search
├── SongPlayer.html # Main music player page
├── style.css # Styling for the homepage
├── home.css # Styling for the music player
├── script.js # JavaScript logic for the player
│
├── images/ # Album covers, logo, and UI images
│ ├── logo1.png
│ ├── ehsaas.jpg
│ ├── kashish.webp
│ ├── kantara.jpg
│ ├── khoobsurat.jpg
│ ├── ...
│
└── songs/ # Audio files
├── ehsaas.mp3
├── kashish.mp3
├── barbaad.mp3
├── ...
```


---

## 🚀 How to Run

1. **Clone or download** this repository.  
2. **Download songs in `.mp3` format** and **name them exactly as defined in the code** (e.g., `ehsaas.mp3`, `kashish.mp3`, etc.).  
   - *(in ./ script.js at line 12 in let songs = [...] name them same as written in code.)*
   - Find This Line of Code:
   - ```
     { songName: "Ehsaas - Faheen,Duha", filePath: "./songs/ehsaas.mp3", coverPath: "./images/ehsaas.jpg" }
     ```
3. Move all song files into the **`/songs`** folder.  
4. Make sure the **images** are in the `/images` folder.  
5. Open **`index.html`** in your browser.  
6. Click **“Open Music Player”** to go to the song player page.  
7. Enjoy your custom Spotify-like experience!

---

## 🧠 Tech Stack

- **HTML5** — Structure and layout  
- **CSS3** — Styling and responsiveness  
- **JavaScript (ES6)** — Music player logic and interactivity  
- **Font Awesome** — Icons and controls  

---

## 🎨 Design Highlights

- Gradient background (`#1f1c2c → #928dab`)
- Modern typography using **Ubuntu** and **Varela Round**
- Smooth hover and button animations
- Fully responsive design for mobile and desktop

---

## 👩‍💻 Developer

**Developed with ❤️ by [Anshika Pal](#)**  
> “Your personal music world — listen, feel, and vibe like never before.”

---

## 📜 License

This project is created for educational and learning purposes.  
You can freely use or modify it for personal projects.
