const songs = ["hey", "summer", "ukulele"];
let currentSongIndex = 2;
const audioElement = document.getElementById("audio");
const playButton = document.getElementById("play");
const musicContainer = document.getElementById("music-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const cover = document.getElementById("cover");

const playTrack = () => {
  if (playButton.dataset.playing === "false") {
    audioElement.play();
    playButton.dataset.playing = "true";
  } else if (playButton.dataset.playing === "true") {
    audioElement.pause();
    playButton.dataset.playing = "false";
  }
  musicContainer.classList.toggle("play");
};

const changeSrcAndPlay = () => {
  audioElement.src = `music/${songs[currentSongIndex]}.mp3`;
  cover.src = `images/${songs[currentSongIndex]}.jpg`;

  audioElement.play();
  playButton.dataset.playing = "true";
};

const playPrevTrack = () => {
  currentSongIndex = currentSongIndex === 0 ? 2 : currentSongIndex - 1;
  changeSrcAndPlay();
};

const playNextTrack = () => {
  currentSongIndex = currentSongIndex === 2 ? 0 : currentSongIndex + 1;
  changeSrcAndPlay();
};

playButton.addEventListener("click", playTrack);
prevButton.addEventListener("click", playPrevTrack);
nextButton.addEventListener("click", playNextTrack);
