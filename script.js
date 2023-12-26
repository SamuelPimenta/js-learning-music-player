const songs = ["hey", "summer", "ukelele"];
let currentSongIndex = 2;
const audioContext = new AudioContext();
const audioElement = document.getElementById("audio");
const playButton = document.getElementById("play");
const musicContainer = document.getElementById("music-container");
const nextButton = document.getElementById("next");

const playTrack = () => {
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  if (playButton.dataset.playing === "false") {
    audioElement.play();
    playButton.dataset.playing = "true";
  } else if (playButton.dataset.playing === "true") {
    audioElement.pause();
    playButton.dataset.playing = "false";
  }
  musicContainer.classList.toggle("play");
};

const playNextTrack = () => {
  currentSongIndex = currentSongIndex === 2 ? 0 : currentSongIndex + 1;
  audioElement.src = `music/${songs[currentSongIndex]}.mp3`;
};

playButton.addEventListener("click", playTrack);
nextButton.addEventListener("click", playNextTrack);
