export default class LoadDom {
    content = document.querySelector('#content');
    headingContainer = document.createElement('div');
    constructor() {
        this.loadHeader();
        this.loadHeaderSubText();
    }

    loadHeader() {
        const heading = document.createElement('h1');
        this.headingContainer.classList.add('heading-container');
        heading.classList.add('main-heading');
        heading.textContent = 'Downtown Delicacy';
        this.headingContainer.append(heading);
        this.content.append(this.headingContainer);
    }

    loadHeaderSubText() {
        const subtext = document.createElement('h2');
        subtext.classList.add('heading-subtext');
        subtext.textContent = 'Restaurant landing page';
        this.headingContainer.append(subtext);
    }
}