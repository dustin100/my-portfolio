document.addEventListener('DOMContentLoaded', function () {
	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', '../json/particles.json', function () {
		console.log('callback - particles.js config loaded');
	});

	const navBar = document.querySelector('.navBar');
	const navBarLinks = document.querySelectorAll('.navBarLinks, .menuIcon');

	navBarLinks.forEach((item) => {
		item.addEventListener('click', () => {
			navBar.classList.toggle('change');
		});
		item.addEventListener('keyup', (e) => {
			if (e.keyCode === 13) {
				navBar.classList.toggle('change');
			}
		});
	});
});
