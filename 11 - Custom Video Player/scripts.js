//Find All Elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//Define All Methods
function togglePlay() {
	if (video.paused) {
		video.play();
	} else video.pause();
}

function updatePlayButton() {
	const icon = this.paused ? '►' : '❚ ❚';
	toggle.textContent = icon;
}

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
	video[this.name] = this.value;
}

function handleProgressUpdate() {
	const percent = video.currentTime / video.duration * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
	const scrubTime = e.offsetX / progress.offsetWidth * video.duration;
	video.currentTime = scrubTime;
}

//Hook up Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('play', updatePlayButton);
video.addEventListener('timeupdate', handleProgressUpdate);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((skipButton) => skipButton.addEventListener('click', skip));

ranges.forEach((range) => {
	range.addEventListener('change', handleRangeUpdate);
	range.addEventListener('mousemove', handleRangeUpdate);
});

progress.addEventListener('click', scrub);

let mouseDown = false;
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => (mouseDown = true));
progress.addEventListener('mouseup', () => (mouseDown = false));
