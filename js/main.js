const toggleButton = document.getElementsByClassName('toggleButton')[0]
const Nav = document.getElementsByClassName('Nav')[0]

toggleButton.addEventListener('click', () => {
  Nav.classList.toggle('active')
})
