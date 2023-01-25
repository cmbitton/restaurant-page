export default class Navbar {
    content = document.querySelector('#content');
    navbar = document.createElement('div');
    logo = document.createElement('h3');
    navButtonContainer = document.createElement('div');
    homepage = document.createElement('p');
    menu = document.createElement('p');
    about = document.createElement('p');
    contact = document.createElement('p');
    searchform = document.createElement('form');
    search = document.createElement('input');
    constructor () {
        this.loadNavbar();
    }
    loadNavbar () {
        this.navbar.classList.add('navbar');
        this.logo.classList.add('logo');
        this.navButtonContainer.classList.add('nav-button-container');
        this.homepage.classList.add('homepage', 'navbutton', 'button-selected');
        this.menu.classList.add('menu', 'navbutton');
        this.about.classList.add('about', 'navbutton');
        this.contact.classList.add('contact', 'navbutton');
        this.searchform.classList.add('search-form');
        this.search.classList.add('search');

        this.logo.textContent = 'Your Logo';
        this.homepage.textContent = 'Home';
        this.menu.textContent = 'Menu';
        this.about.textContent = 'About';
        this.contact.textContent = 'Contact';

        //search form
        this.search.setAttribute('type', 'search');
        this.search.setAttribute('name', 'search');
        this.search.setAttribute('id', 'search');
        this.search.setAttribute('placeholder', 'Search');

        this.searchform.append(this.search);
        this.navbar.append(this.logo);
        this.navButtonContainer.append(this.homepage, this.menu, this.about, this.contact)
        this.navbar.append(this.navButtonContainer, this.searchform)
        this.content.append(this.navbar);
    }

    clearNavSelection () {
        const navButtons = [this.homepage, this.menu, this.about, this.contact];
        for(const button of navButtons){
            if(button.classList.contains('button-selected')) button.classList.remove('button-selected');
        }
    }
}