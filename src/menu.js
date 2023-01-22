export default class Menu {
    content = document.querySelector('#content');
    menuContainer = document.createElement('div');
    heading = document.createElement('h1');

    menuButtonContainer = document.createElement('div');
    menuAllButton = document.createElement('button');
    menuStartersButton = document.createElement('button');
    menuEntreesButton = document.createElement('button');
    menuDrinksButton = document.createElement('button');
    menuDessertsButton = document.createElement('button');
    constructor() {
        this.showHeading();
        this.loadMenuButtons();
    }

    showHeading () {
        this.menuContainer.classList.add('menu-container');
        this.heading.classList.add('menu-heading');
        this.heading.textContent = 'MENU';
        this.menuContainer.append(this.heading);
        this.content.append(this.menuContainer);
    }

    loadMenuButtons () {
        this.menuButtonContainer.classList.add('menu-button-container');
        this.menuAllButton.classList.add('menu-all-button', 'menu-button-active', 'menu-button');
        this.menuStartersButton.classList.add('menu-starter-button', 'menu-button');
        this.menuEntreesButton.classList.add('menu-entrees-button', 'menu-button');
        this.menuDrinksButton.classList.add('menu-drinks-button', 'menu-button');
        this.menuDessertsButton.classList.add('menu-desserts-button', 'menu-button');

        this.menuAllButton.textContent = 'ALL ITEMS';
        this.menuStartersButton.textContent = 'STARTERS';
        this.menuEntreesButton.textContent = 'ENTREES';
        this.menuDrinksButton.textContent = 'DRINKS';
        this.menuDessertsButton.textContent = 'DESSERTS'

        this.menuButtonContainer.append(this.menuAllButton, 
                                        this.menuStartersButton,
                                        this.menuEntreesButton,
                                        this.menuDrinksButton,
                                        this.menuDessertsButton);
        this.menuContainer.append(this.menuButtonContainer);


    }
}