console.log("Welcome to Spotify Clone");

// Variables
let songIndex = 0;
let audioElement = new Audio('./songs/ehsaas.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Ehsaas - Faheen,Duha", filePath: "./songs/ehsaas.mp3", coverPath: "./images/ehsaas.jpg" },
    { songName: "Kashish - Ashish,Omkar", filePath: "./songs/kashish.mp3", coverPath: "./images/kashish.webp" },
    { songName: "Barbaad - Rish,Jubin", filePath: "./songs/barbaad.mp3", coverPath: "./images/barbaad.webp" },
    { songName: "Kantara Theme Song", filePath: "./songs/kantara.mp3", coverPath: "./images/kantara.jpg" },
    { songName: "Khoobsurat - Jubin", filePath: "./songs/khoobsurat.mp3", coverPath: "./images/khoobsurat.jpg" },
    { songName: "Raat Ke Shikari", filePath: "./songs/raat.mp3", coverPath: "./images/raatkshikari.jpg" },
    { songName: "Saiyaara - Tanishk", filePath: "./songs/saiyaara.mp3", coverPath: "./images/saiyaara.jpg" },
    { songName: "Pallo Latke Again", filePath: "./songs/pallo.mp3", coverPath: "./images/pallolatke.jpg" },
];

// Update covers
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Reset all small play icons
function makeAllPlays() {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

// Master Play Button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

        // sync the small play icon
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        makeAllPlays();
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Seek by clicking on progress bar
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Song item play/pause buttons
Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    });
});

// Next & Previous buttons
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) songIndex = 0;
    else songIndex += 1;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    makeAllPlays();
    document.getElementById(songIndex).classList.remove('fa-circle-play');
    document.getElementById(songIndex).classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) songIndex = songs.length - 1;
    else songIndex -= 1;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    makeAllPlays();
    document.getElementById(songIndex).classList.remove('fa-circle-play');
    document.getElementById(songIndex).classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});


const currentTimeDisplay = document.getElementById("currentTime");

// Function to format time (seconds → mm:ss)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update progress bar + time display
audioElement.addEventListener("timeupdate", () => {
    const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

    // Update time display
    const current = formatTime(audioElement.currentTime);
    const total = isNaN(audioElement.duration) ? "00:00" : formatTime(audioElement.duration);
    currentTimeDisplay.textContent = `${current} / ${total}`;
});


// Seek to specific position when clicking on progress bar
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});


// 🎧 Auto-play next song when current one ends (with icon sync fix)
let lastPlayedIndex = 0; // to track the previously played song

audioElement.addEventListener("ended", () => {
  // reset the icon of the last played song
  let prevButton = document.getElementById(lastPlayedIndex.toString());
  if (prevButton) {
    prevButton.classList.remove("fa-circle-pause");
    prevButton.classList.add("fa-circle-play");
  }

  // move to next song (loop if at end)
  songIndex = (songIndex + 1) % songs.length;
  lastPlayedIndex = songIndex; // update tracker

  // load and play the next song
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;
  audioElement.play();

  // update master song info
  masterSongName.innerText = songs[songIndex].songName;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");

  // reset all small play icons first
  Array.from(document.getElementsByClassName("songItemplay")).forEach((el) => {
    el.classList.remove("fa-circle-pause");
    el.classList.add("fa-circle-play");
  });

  // set the current song's icon to pause
  let currentButton = document.getElementById(songIndex.toString());
  if (currentButton) {
    currentButton.classList.remove("fa-circle-play");
    currentButton.classList.add("fa-circle-pause");
  }
});



