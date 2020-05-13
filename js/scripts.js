/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../json/particles.json', function () {
	console.log('callback - particles.js config loaded');
});


const menuIcon = document.querySelector
('.menuIcon')
const navBar = document.querySelector('.navBar')

menuIcon.addEventListener('click', ()=> {
navBar.classList.toggle('change')
})