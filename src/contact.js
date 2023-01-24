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
        //first name input
        const firstNameContainer = document.createElement('div');
        const firstNameInput = document.createElement('input');
        const firstNameLabel = document.createElement('label');

        firstNameContainer.classList.add('first-name-container');
        firstNameInput.type = 'text';
        firstNameInput.name = 'firstname';
        firstNameInput.id = 'firstname';
        firstNameLabel.setAttribute('for', 'firstname');
        firstNameLabel.textContent = 'First Name';

        firstNameContainer.append(firstNameLabel, firstNameInput)

        //last name input
        const lastNameContainer = document.createElement('div');
        const lastNameInput = document.createElement('input');
        const lastNameLabel = document.createElement('label');

        lastNameContainer.classList.add('last-name-container');
        lastNameInput.type = 'text';
        lastNameInput.name = 'lastname';
        lastNameInput.id = 'lastname';
        lastNameLabel.setAttribute('for', 'lastname');
        lastNameLabel.textContent = 'Last Name';

        lastNameContainer.append(lastNameLabel, lastNameInput);

        //phone input
        const phoneContainer = document.createElement('div');
        const phoneInput = document.createElement('input');
        const phoneLabel = document.createElement('label');

        phoneContainer.classList.add('phone-num-container');
        phoneInput.type = 'tel';
        phoneInput.name = 'phone-number';
        phoneInput.id = 'phone-number';
        phoneLabel.setAttribute('for', 'phone-number');
        phoneLabel.textContent = 'Phone Number';

        phoneContainer.append(phoneLabel, phoneInput);


        this.bookTableForm.append(firstNameContainer, lastNameContainer);
        this.bookTableContainer.append(this.bookHeading, this.bookTableForm);
        this.contactContainer.append(this.bookTableContainer);
    }
}