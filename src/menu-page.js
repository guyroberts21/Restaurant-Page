import { main } from './index';

export function renderMenu() {
    renderBreakfast();
    renderLunch();
    renderDinner();
}

function renderBreakfast() {
    // Breakfast container
    const breakfast = document.createElement('div');
    breakfast.id= 'breakfast';
    // Breakfast items
    const items = document.createElement('div');
    items.classList.add('breakfast-items');

    const item1 = document.createElement('div');
    item1.textContent = 'Toasted Bagel';
    items.appendChild(item1);

    const item1Tag = document.createElement('div');
    item1Tag.textContent = '£3.99';
    items.appendChild(item1Tag);

    const item2 = document.createElement('div');
    item2.textContent = 'Gingerbread man';
    items.appendChild(item2);

    const item2Tag = document.createElement('div');
    item2Tag.textContent = '£1.49';
    items.appendChild(item2Tag);

    const item3 = document.createElement('div');
    item3.textContent = 'Waffle (with maple syrup)';
    items.appendChild(item3);

    const item3Tag = document.createElement('div');
    item3Tag.textContent = '£3.99';
    items.appendChild(item3Tag);

    const item4 = document.createElement('div');
    item4.textContent = 'Sausage and Eggs';
    items.appendChild(item4);

    const item4Tag = document.createElement('div');
    item4Tag.textContent = '£6.99';
    items.appendChild(item4Tag);

    const item5 = document.createElement('div');
    item5.textContent = 'Fruit Salad';
    items.appendChild(item5);

    const item5Tag = document.createElement('div');
    item5Tag.textContent = '£2.99';
    items.appendChild(item5Tag);

    const item6 = document.createElement('div');
    item6.textContent = 'Full English Breakfast';
    items.appendChild(item6);

    const item6Tag = document.createElement('div');
    item6Tag.textContent = '£8.99';
    items.appendChild(item6Tag);

    breakfast.appendChild(items);
    main.appendChild(breakfast);
}

function renderLunch() {
    // Lunch container
    const lunch = document.createElement('div');
    lunch.id= 'lunch';
    // Lunch items
    const items = document.createElement('div');
    items.classList.add('lunch-items');

    const item1 = document.createElement('div');
    item1.textContent = 'Ham Sandwich';
    items.appendChild(item1);

    const item1Tag = document.createElement('div');
    item1Tag.textContent = '£5.99';
    items.appendChild(item1Tag);

    const item2 = document.createElement('div');
    item2.textContent = 'Classic Burger';
    items.appendChild(item2);

    const item2Tag = document.createElement('div');
    item2Tag.textContent = '£11.99';
    items.appendChild(item2Tag);

    const item3 = document.createElement('div');
    item3.textContent = 'Roasted Chicken (served with brioche bun)';
    items.appendChild(item3);

    const item3Tag = document.createElement('div');
    item3Tag.textContent = '£8.99';
    items.appendChild(item3Tag);

    lunch.appendChild(items);
    main.appendChild(lunch);
}

function renderDinner() {
    // Dinner container
    const dinner = document.createElement('div');
    dinner.id= 'dinner';
    // Dinner items
    const items = document.createElement('div');
    items.classList.add('dinner-items');

    const item1 = document.createElement('div');
    item1.textContent = 'Steak and Chips';
    items.appendChild(item1);

    const item1Tag = document.createElement('div');
    item1Tag.textContent = '£10.99';
    items.appendChild(item1Tag);

    const item2 = document.createElement('div');
    item2.textContent = 'Mushroom Risotto';
    items.appendChild(item2);

    const item2Tag = document.createElement('div');
    item2Tag.textContent = '£9.99';
    items.appendChild(item2Tag);

    const item3 = document.createElement('div');
    item3.textContent = 'Pepperoni Pizza';
    items.appendChild(item3);

    const item3Tag = document.createElement('div');
    item3Tag.textContent = '£10.99';
    items.appendChild(item3Tag);

    const item4 = document.createElement('div');
    item4.textContent = 'Spaghetti Bolognaise';
    items.appendChild(item4);

    const item4Tag = document.createElement('div');
    item4Tag.textContent = '£7.99';
    items.appendChild(item4Tag);

    dinner.appendChild(items);
    main.appendChild(dinner);
}