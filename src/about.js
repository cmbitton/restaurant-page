export default class About {
    content = document.querySelector('#content');
    aboutContainer = document.createElement('div');
    heading = document.createElement('h1');
    aboutContentContainer = document.createElement('div');
    aboutImage = document.createElement('div');
    aboutRightContainer = document.createElement('div')
    aboutSubHeading = document.createElement('h2');
    aboutParagraphContainer = document.createElement('div');
    aboutParagraph1 = document.createElement('p');
    aboutParagraph2 = document.createElement('p');
    aboutParagraph3 = document.createElement('p');
    iconContainer = document.createElement('div');
    constructor () {
        this.aboutContainer.classList.add('about-container');
        this.heading.classList.add('about-heading');
        this.aboutContentContainer.classList.add('about-content-container');
        this.aboutImage.classList.add('about-image');
        this.aboutSubHeading.classList.add('about-subheading');
        this.aboutParagraphContainer.classList.add('paragraph-container')
        this.iconContainer.classList.add('icons-container');
        this.aboutRightContainer.classList.add('about-right-container');
        this.showAboutInfo();
        this.showAboutIcons();

    }


    showAboutInfo () {

        this.heading.textContent = 'ABOUT US';
        this.aboutSubHeading.textContent = 'GOOD FOOD FOR YOUR ALL DAY GOOD MOOD';
        this.aboutParagraph1.textContent = 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Itaque dolore nisi ipsa neque? Dolorem incidunt fugiat temporibus animi nobis, vero expedita voluptate dignissimos officiis quis pariatur earum voluptas quia sed.'
        this.aboutParagraph2.textContent = 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Itaque dolore nisi ipsa neque? Dolorem incidunt fugiat temporibus animi nobis, vero expedita voluptate dignissimos officiis quis pariatur earum voluptas quia sed.'
        this.aboutParagraph3.textContent = 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Itaque dolore nisi ipsa neque? Dolorem incidunt fugiat temporibus animi nobis, vero expedita voluptate dignissimos officiis quis pariatur earum voluptas quia sed.'


        this.aboutParagraphContainer.append(this.aboutParagraph1, this.aboutParagraph2, this.aboutParagraph3);
        this.aboutRightContainer.append(this.aboutSubHeading, this.aboutParagraphContainer, this.iconContainer);
        this.aboutContentContainer.append(this.aboutImage, this.aboutRightContainer);
        this.aboutContainer.append(this.aboutContentContainer);
        this.content.append(this.heading, this.aboutContainer);
    }

    makeIcon (number) {
        for(let i = 1; i <= number; i++){
            const container = document.createElement('div');
            const image = document.createElement('div');
            const text = document.createElement('p');
            image.classList.add(`icon-${i}-image`);
            container.classList.add(`icon-${i}-container`);
            text.classList.add(`icon-${i}-text`, 'icon-text');
            container.append(image, text);
            this.iconContainer.append(container);
        }
    }

    showAboutIcons () {
        this.makeIcon(3);
        document.querySelector('.icon-1-text').textContent = 'EXPERIENCED CHEFS';
        document.querySelector('.icon-2-text').textContent = 'ORIGINAL RECIPES';
        document.querySelector('.icon-3-text').textContent = 'FRESH INGREDIENTS';
    }

}