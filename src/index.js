import './style.css'
import LoadDom from './page-load'
import Navbar from './navbar';

const landingLoader = new LoadDom();
const nav = new Navbar();

const menuButton = document.querySelector('.menu');
const homeButton = document.querySelector('.homepage');
const content = document.querySelector('#content');

menuButton.addEventListener('click', () => {
    content.innerHTML = "";
    if (content.classList.contains('content-primary')) content.classList.remove('content-primary');
    content.classList.add('content-secondary');
    nav.loadNavbar();
})

homeButton.addEventListener('click', () => {
    content.innerHTML = "";
    if (content.classList.contains('content-secondary')) content.classList.remove('content-secondary');
    content.classList.add('content-primary');
    nav.loadNavbar();
    landingLoader.loadHomepage();
})