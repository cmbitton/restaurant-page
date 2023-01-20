export default class LoadDom {

    loadLandingPage() {
        this.loadHeader();
    }

    loadHeader() {
        const content = document.querySelector('#content');
        const heading = document.createElement('h1');
        heading.classList.add('main-heading');
        heading.textContent = 'Downtown Delicacy';
        content.append(heading);
    }
}