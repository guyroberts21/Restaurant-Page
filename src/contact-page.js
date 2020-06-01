import { main } from './index';

export function renderContact() {
    const container = document.createElement('div');
    container.id = "contact-info";
    
    // Phone no.
    const title = document.createElement('h2');
    title.textContent = 'Contact us: 0114 7496 0838';
    
    // Opening times
    const openingTimes = document.createElement('ul');

    const mon = document.createElement('li');
    mon.textContent = 'Mon: 08:00 - 20:00';
    openingTimes.appendChild(mon);

    const tues = document.createElement('li');
    tues.textContent = 'Tues: 08:00 - 20:00';
    openingTimes.appendChild(tues);

    const wed = document.createElement('li');
    wed.textContent = 'Wed: 08:00 - 19:00';
    openingTimes.appendChild(wed);

    const thurs = document.createElement('li');
    thurs.textContent = 'Thurs: 09:00 - 21:00';
    openingTimes.appendChild(thurs);

    const fri = document.createElement('li');
    fri.textContent = 'Fri: 10:00 - 22:00';
    openingTimes.appendChild(fri);

    const sat = document.createElement('li');
    sat.textContent = 'Sat: 11:00 - 22:00';
    openingTimes.appendChild(sat);

    const sun = document.createElement('li');
    sun.textContent = 'Sun: Closed';
    openingTimes.appendChild(sun);

    // append to container
    container.appendChild(title);
    container.appendChild(openingTimes);

    // append to main
    main.appendChild(container);
}