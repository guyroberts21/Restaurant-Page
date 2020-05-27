export function render() {
    const content = document.getElementById('content');

    // Center text
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('center-text-container');
    const title = document.createElement('h1');
    title.classList.add('center-text');
    title.textContent = 'Indulge Yourself.';
    titleContainer.appendChild(title);

    // Top Left Nav //
    const home = document.createElement('div');
    home.classList.add('home')

    // Logo 
    const logo = document.createElement('img');
    logo.id = 'logo';
    logo.src = '../img/logo.png';
    home.appendChild(logo);

    // Restaurant
    const restaurant = document.createElement('span');
    restaurant.classList.add('restaurant-name');
    restaurant.textContent = 'Parallax Restaurant';
    home.appendChild(restaurant);

    // Top Right Nav //
    const nav = document.createElement('ul');
    nav.classList.add('top-navigation');

    // Menu 
    const menu = document.createElement('li')
    menu.textContent = 'Menu';
    nav.appendChild(menu);

    // About 
    const about = document.createElement('li')
    about.textContent = 'About';
    nav.appendChild(about);

    // Contact 
    const contact = document.createElement('li')
    contact.textContent = 'Contact';
    nav.appendChild(contact);

    content.appendChild(titleContainer);
    content.appendChild(home);
    content.appendChild(nav);
}