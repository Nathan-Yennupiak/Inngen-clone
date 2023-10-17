const Navigation = document.querySelector('.navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {
    const visibility = Navigation.getAttribute('data-visible')

    if (visibility === "false") {
        Navigation.setAttribute('data-visible', 'true')
        navToggle.setAttribute('aria-expanded', 'true')
    }

    else if ( visibility === "true") {
        Navigation.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false')
    }
})