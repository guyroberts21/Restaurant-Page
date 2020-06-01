import { renderMain } from './main-page';
import { renderMenu } from './menu-page';
import { renderAbout } from './about-page';
import { renderContact } from './contact-page';

// Global var container
export const content = document.getElementById('content');

// Main (default) landing page
renderMain();

// Main content to update
export const main = document.getElementById('main');

// Listen for click on logo
const home = document.querySelector('.home');
home.addEventListener('click', () => {
    main.innerHTML = "";
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('center-text-container');
    const title = document.createElement('h1');
    title.classList.add('center-text');
    title.textContent = 'Indulge Yourself.';
    titleContainer.appendChild(title);
    main.appendChild(titleContainer);
});

// Listen for click on separate tabs
const tabs = document.querySelectorAll('.top-navigation li');
tabs.forEach(tab => tab.addEventListener('click', e => {
    main.innerHTML = "";
    let target = e.target.id;
    switch (target) {
        case 'menu':
            renderMenu();
            break;
        case 'about':
            renderAbout();
            break;
        case 'contact':
            renderContact();
            break;
    }
}));