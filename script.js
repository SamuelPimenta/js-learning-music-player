const songs = ["hey", "summer", "ukulele"];
let currentSongIndex = 2;
const audioElement = document.getElementById("audio");
const playButton = document.getElementById("play");
const musicContainer = document.getElementById("music-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

const changePlayIcon = () => {
  playButton.querySelector("i.fas").classList.toggle("fa-play");
  playButton.querySelector("i.fas").classList.toggle("fa-pause");
};

const playTrack = () => {
  if (playButton.dataset.playing === "false") {
    audioElement.play();
    changePlayIcon();
    playButton.dataset.playing = "true";
  } else if (playButton.dataset.playing === "true") {
    audioElement.pause();
    changePlayIcon();
    playButton.dataset.playing = "false";
  }
  musicContainer.classList.toggle("play");
};

const changeSrcAndPlay = () => {
  audioElement.src = `music/${songs[currentSongIndex]}.mp3`;
  cover.src = `images/${songs[currentSongIndex]}.jpg`;
  audioElement.play();
  playButton.querySelector("i.fas").classList.remove("fa-play");
  playButton.querySelector("i.fas").classList.add("fa-pause");
  musicContainer.classList.add("play");
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

const updateProgressBar = (e) => {
  const { duration, currentTime } = e.srcElement;
  const percentagePlayed = (currentTime / duration) * 100;
  progress.style.width = `${percentagePlayed}%`;
};

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audioElement.duration;
  audioElement.currentTime = (clickX / width) * duration;
}

playButton.addEventListener("click", playTrack);
prevButton.addEventListener("click", playPrevTrack);
nextButton.addEventListener("click", playNextTrack);
audioElement.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgress);
