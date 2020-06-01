import { renderMain } from './main-page';
import { renderMenu } from './menu-page';

// Global var container
export const content = document.getElementById('content');

// Main (default) landing page
renderMain();

// Main content to update
export const main = document.getElementById('main');

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