const $body = document.querySelector('body')
const $menu = document.querySelector('.nav-mobile')
const $btnMenuOpen = document.querySelector('.open-menu')
const $btnMenuClose = document.querySelector('.close-menu')

$btnMenuOpen.addEventListener('click', function() {
    $menu.classList.add('active'),
    $body.classList.add('menu-opened')
})

$btnMenuClose.addEventListener('click', function() {
    $menu.classList.remove('active'),
    $body.classList.remove('menu-opened')
})