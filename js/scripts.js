// Wait for Dom to load then run JS
document.addEventListener('DOMContentLoaded', function () {
	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', '../json/particles.json', function () {
		console.log('callback - particles.js config loaded');
	});
	dkPort.init();
});

// Name space for dk's portfolio
const dkPort = {};

dkPort.init = () => {
	dkPort.navBar = document.querySelector('.navBar');
	dkPort.navBarLinks = document.querySelectorAll('.navBarLinks, .menuIcon');

	// Hide and show menu bar after clicking the menuIcon or nav link
	dkPort.navBarLinks.forEach((item) => {
		item.addEventListener('click', () => {
			dkPort.navBar.classList.toggle('change');
		});
		item.addEventListener('keyup', (e) => {
			if (e.keyCode === 13) {
				dkPort.navBar.classList.toggle('change');
			}
		});
	});
};
