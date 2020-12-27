const videos = document.querySelectorAll('[data-time]');

const totalSeconds = [ ...videos ].reduce((acc, el) => {
	const minutes = +el.dataset.time.split(':')[0];
	const seconds = +el.dataset.time.split(':')[1];
	//const [mins, secs] = el.dataset.time.split(':').map(parseFloat);
	return acc + minutes * 60 + seconds;
}, 0);

const h = Math.floor(totalSeconds / 60 / 60);
const m = Math.floor(totalSeconds / 60) - h * 60;
const s = totalSeconds - m * 60 - h * 60 * 60;
console.log(`${h} hours ${m} minutes ${s} seconds`);
