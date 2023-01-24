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
        this.showOpeningHours();
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
        firstNameInput.setAttribute('autocomplete', 'name');
        firstNameInput.setAttribute('placeholder', 'First Name');
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
        lastNameInput.setAttribute('autocomplete', 'name');
        lastNameInput.setAttribute('placeholder', 'Last Name');
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
        phoneInput.setAttribute('placeholder', '123-456-7890');
        phoneLabel.setAttribute('for', 'phone-number');
        phoneLabel.textContent = 'Phone Number';

        phoneContainer.append(phoneLabel, phoneInput);

        //email input
        const emailContainer = document.createElement('div');
        const emailInput = document.createElement('input');
        const emailLabel = document.createElement('label');

        emailContainer.classList.add('email-container');
        emailInput.type = 'email';
        emailInput.name = 'email';
        emailInput.id = 'email';
        emailInput.setAttribute('placeholder', 'username@email.com');
        emailLabel.setAttribute('for', 'email');
        emailLabel.textContent = 'Email';

        emailContainer.append(emailLabel, emailInput);

        //date input
        const dateContainer = document.createElement('div');
        const dateInput = document.createElement('input');
        const dateLabel = document.createElement('label');

        dateContainer.classList.add('date-container');
        dateInput.type = 'date';
        dateInput.name = 'date';
        dateInput.id = 'date';
        dateLabel.setAttribute('for', 'date');
        dateLabel.textContent = 'Date';

        dateContainer.append(dateLabel, dateInput);

        //time input
        const timeContainer = document.createElement('div');
        const timeInput = document.createElement('input');
        const timeLabel = document.createElement('label');

        timeContainer.classList.add('time-container');
        timeInput.type = 'time';
        timeInput.name = 'time';
        timeInput.id = 'time';
        timeLabel.setAttribute('for', 'time');
        timeLabel.textContent = 'Time';

        timeContainer.append(timeLabel, timeInput);


        this.bookTableForm.append(firstNameContainer, lastNameContainer, phoneContainer, emailContainer, dateContainer, timeContainer);
        this.bookTableContainer.append(this.bookHeading, this.bookTableForm);
        this.contactContainer.append(this.bookTableContainer);

        //submit button
        const reservationSubmitButton = document.createElement('button');
        reservationSubmitButton.classList.add('reservation-submit-button');
        reservationSubmitButton.setAttribute('type', 'submit');
        reservationSubmitButton.textContent = 'Submit Reservation'
        this.bookTableForm.append(reservationSubmitButton);
    }

    showOpeningHours() {
        const hoursContainer = document.createElement('div');
        const hoursHeading = document.createElement('h2');
        const hoursText = document.createElement('p');
        hoursContainer.classList.add('hours-container');
        hoursHeading.classList.add('hours-heading');
        hoursText.classList.add('hours-text');

        hoursHeading.textContent = 'OPENING HOURS';
        hoursText.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, inventore hic nulla, provident laudantium voluptate ipsa eligendi commodi mollitia vero animi, repudiandae quidem minima est sint sapiente quas iure deleniti.'

        //weekday hours
        const weekdayHoursContainer = document.createElement('div');
        const weekdayLabel = document.createElement('h3');
        const weekdayHours = document.createElement('p');

        weekdayHoursContainer.classList.add('weekday-hours-container');
        weekdayHours.classList.add('weekday-hours');
        
        weekdayLabel.textContent = 'Monday - Friday';
        weekdayHours.textContent = '11AM - 9PM';

        weekdayHoursContainer.append(weekdayLabel, weekdayHours);

        //saturday hours
        const saturdayHoursContainer = document.createElement('div');
        const saturdayLabel = document.createElement('h3');
        const saturdayHours = document.createElement('p');

        saturdayHoursContainer.classList.add('saturday-hours-container');
        saturdayHours.classList.add('saturday-hours');
        
        saturdayLabel.textContent = 'Saturday';
        saturdayHours.textContent = '8AM - 11PM';
       
        saturdayHoursContainer.append(saturdayLabel, saturdayHours);

        //sunday hours
        const sundayHoursContainer = document.createElement('div');
        const sundayLabel = document.createElement('h3');
        const sundayHours = document.createElement('p');

        sundayHoursContainer.classList.add('sunday-hours-container');
        sundayHours.classList.add('sunday-hours');
        
        sundayLabel.textContent = 'Sunday';
        sundayHours.textContent = '8AM - 3PM';
       
        sundayHoursContainer.append(sundayLabel, sundayHours);

        hoursContainer.append(hoursHeading, hoursText, weekdayHoursContainer, saturdayHoursContainer, sundayHoursContainer);

        this.contactContainer.append(hoursContainer);
    }
}