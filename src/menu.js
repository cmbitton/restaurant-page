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
    menuItemContainer = document.createElement('div');
    constructor() {
        this.showHeading();
        this.loadMenuButtons();
        this.menuContainer.append(this.menuItemContainer);
        this.menuItemContainer.classList.add('menu-item-container');
        this.loadAllMenuItems();
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

    makeImageCard(num) {
        const menuCard = document.createElement('div');
        menuCard.classList.add(`menu-card-${num}`, 'menu-card');
        return menuCard;
    }

    loadAllMenuItems() {
        this.menuItemContainer.innerHTML = '';

        //images

        const menuCard1 = this.makeImageCard(1);
        const menuCard2 = this.makeImageCard(2);
        const menuCard3 = this.makeImageCard(3);
        const menuCard4 = this.makeImageCard(4);
        const menuCard5 = this.makeImageCard(5);
        const menuCard6 = this.makeImageCard(6);
        const menuCard7 = this.makeImageCard(7);
        const menuCard8 = this.makeImageCard(8);


        this.menuItemContainer.append(menuCard1, menuCard2, menuCard3, menuCard4, menuCard5, menuCard6, menuCard7, menuCard8);
        this.menuContainer.append(this.menuItemContainer);

    }
}