//navibar functionality
//Selects the navbar element within the .header container
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
    // adds the active class to the navbar element
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}
//SearchForm functionality
//Selects the search form element with the class .search-form
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
}
//Header scroll behavior
//Adds a scroll event listener to the window
window.onscroll = () => {
    navbar.classList.remove('active');
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};
//Adds a load event listener to the window
window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};
