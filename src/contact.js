export default class Contact {
    content = document.querySelector('#content');
    contactContainer = document.createElement('div');
    contactHeading = document.createElement('h1')
    bookTableContainer = document.createElement('div');
    bookHeading = document.createElement('h2');
    bookTableForm = document.createElement('form');
    constructor () {
        this.contactContainer.classList.add('contact-container');
        this.contactHeading.classList.add('contact-heading')
        this.bookTableContainer.classList.add('book-table-container');
        this.bookHeading.classList.add('book-heading')
        this.bookTableForm.classList.add('book-table-form');

        this.contactHeading.textContent = 'CONTACT';
        this.bookHeading.textContent = 'RESERVATIONS';
        this.content.append(this.contactHeading, this.contactContainer);
        this.showBookTableForm();
    }

    showBookTableForm () {
        this.bookTableContainer.append(this.bookHeading, this.bookTableForm);
        this.contactContainer.append(this.bookTableContainer);
    }
}