const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 500; //100px

function shadow(e) {
	const { offsetWidth: width, offsetHeight: height } = hero;
	let { offsetX: x, offsetY: y } = e;

	if (this != e.target) {
		x += e.offsetLeft;
		y += e.offsetTop;
	}
	const xWalk = Math.round(x / width * walk - walk / 2);
	const yWalk = Math.round(y / height * walk - walk / 2);

	text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(196,78,155,0.7),
                             ${yWalk}px ${xWalk}px 0 rgba(155,78,196,0.7),
                             ${xWalk * -1}px ${yWalk}px 0 rgba(78,96,155,0.7),
                             ${xWalk}px ${yWalk * -1}px 0 rgba(155,155,6,0.7)`;
}

hero.addEventListener('mousemove', shadow);
