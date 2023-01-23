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

    makeImageCard(itemNum, itemName, itemDescription, menuPrice) {
        const menuCardContainer = document.createElement('div');
        const menuCard = document.createElement('div');
        const menuItemName = document.createElement('h2');
        const menuItemDescription = document.createElement('p');
        const menuItemPrice = document.createElement('p');

        menuCard.classList.add(`menu-card-${itemNum}`, 'menu-card');
        menuCardContainer.classList.add('menu-card-container');
        menuItemName.classList.add('menu-item-name');
        menuItemDescription.classList.add('menu-item-description');
        menuItemPrice.classList.add('menu-item-price');

        menuItemName.textContent = itemName;
        menuItemDescription.textContent = itemDescription;
        menuItemPrice.textContent = menuPrice;
        menuCardContainer.append(menuCard);
        menuCardContainer.append(menuItemName);
        menuCardContainer.append(menuItemDescription);
        menuCardContainer.append(menuItemPrice);
        return menuCardContainer;
    }

    loadAllMenuItems() {
        this.menuItemContainer.innerHTML = '';

        //images

        const menuCard1 = this.makeImageCard(1, 'Bacon Jalapeño Burger', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', '$14.99');
        const menuCard2 = this.makeImageCard(2, 'Turkey Sandwich Sub', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', '$12.49');
        const menuCard3 = this.makeImageCard(3, 'Vanilla Cheesecake', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', '$5.99');
        const menuCard4 = this.makeImageCard(4, 'New York Style Pizza', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', '$18.00');
        const menuCard5 = this.makeImageCard(5, 'Cappuccino', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', '$3.99');
        const menuCard6 = this.makeImageCard(6, 'Buttermilk Pancakes', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', '$8.50');
        const menuCard7 = this.makeImageCard(7, 'Mohito', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', '$11.00');
        const menuCard8 = this.makeImageCard(8, 'Avocado Burger Sliders', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', '$12.99');


        this.menuItemContainer.append(menuCard1, menuCard2, menuCard3, menuCard4, menuCard5, menuCard6, menuCard7, menuCard8);
        this.menuContainer.append(this.menuItemContainer);

    }
}