const nav = document.querySelector('#main');
const toggleHeight = nav.offsetTop;

function stickNav() {
	if (window.scrollY > toggleHeight) {
		document.body.classList.add('fixed-nav');
		document.body.style.paddingTop = nav.offsetHeight + 'px';
	} else {
		document.body.classList.remove('fixed-nav');
		document.body.style.paddingTop = 0;
	}
}

window.addEventListener('scroll', stickNav);
