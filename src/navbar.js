export default class Navbar {
    content = document.querySelector('#content');
    navbar = document.createElement('div');
    logo = document.createElement('h3');
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
        this.homepage.classList.add('homepage');
        this.menu.classList.add('menu');
        this.about.classList.add('about');
        this.contact.classList.add('contact');
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
        this.navbar.append(this.homepage)
        this.navbar.append(this.menu);
        this.navbar.append(this.about);
        this.navbar.append(this.contact);
        this.navbar.append(this.searchform);
        this.content.append(this.navbar);
    }
}