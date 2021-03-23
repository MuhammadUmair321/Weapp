const togglButton = document.getElementsByClassName('toggle-button')[0]
const navBarLink = document.getElementsByClassName("navbar-link")[0]

togglButton.addEventListener('click',() => {

navBarLink.classList.toggle('active')


})
