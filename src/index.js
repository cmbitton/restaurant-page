import './style.css'
import LoadDom from './page-load'
import Navbar from './navbar';
import Menu from './menu';
import About from './about';

const landingLoader = new LoadDom();
const nav = new Navbar();

const menuButton = document.querySelector('.menu');
const homeButton = document.querySelector('.homepage');
const aboutButton = document.querySelector('.about');
const content = document.querySelector('#content');

function changeTabs (e) {
    content.innerHTML = "";
    nav.loadNavbar();
    nav.clearNavSelection();
    e.target.classList.add('button-selected');
}

menuButton.addEventListener('click', (e) => {
    changeTabs(e);
    if (content.classList.contains('content-primary')) content.classList.remove('content-primary');
    content.classList.add('content-secondary');
    const menu = new Menu();
})

homeButton.addEventListener('click', (e) => {
    changeTabs(e);
    if (content.classList.contains('content-secondary')) content.classList.remove('content-secondary');
    content.classList.add('content-primary');
    landingLoader.loadHomepage();
    e.target.classList.add('button-selected');
})

aboutButton.addEventListener('click', (e) => {
    content.innerHTML = "";
    changeTabs(e);
    if (content.classList.contains('content-primary')) content.classList.remove('content-primary');
    content.classList.add('content-secondary');
    const about = new About();
})