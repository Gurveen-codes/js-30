function playAudio(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	if (!audio) {
		return;
	}
	key.classList.add('playing');
	audio.currentTime = 0; //rewind to the start
	audio.play();
}

function removeTransition(event) {
	if (event.propertyName != 'transform') return;
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playAudio);
