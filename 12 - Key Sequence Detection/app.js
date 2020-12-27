const pressed = [];
const secret = [ 'ArrowUp', 'ArrowDown', 'Shift', 'a', 's', 'd' ];

window.addEventListener('keyup', (e) => {
	pressed.push(e.key);
	pressed.splice(-secret.length - 1, pressed.length - secret.length);
	console.log(pressed);
	if (pressed.join('').includes(secret.join(''))) {
		cornify_add();
	}
});
