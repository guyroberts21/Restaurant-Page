import { main } from './index';

export function renderMenu() {
    renderBreakfast();
    renderLunch();
    renderDinner();
}

function renderBreakfast() {
    // Breakfast container
    const breakfast = document.createElement('div');
    breakfast.id = 'breakfast';
    breakfast.classList.add('menu');

    // Header
    const breakfastTitle = document.createElement('h3');
    breakfastTitle.textContent = 'Breakfast';
    breakfast.appendChild(breakfastTitle);

    // Breakfast items
    const items = document.createElement('div');
    items.classList.add('breakfast-items');

    const item1 = document.createElement('div');
    item1.textContent = 'Toasted Bagel';
    items.appendChild(item1);

    const item2 = document.createElement('div');
    item2.textContent = 'Gingerbread man';
    items.appendChild(item2);

    const item3 = document.createElement('div');
    item3.textContent = 'Waffle (with maple syrup)';
    items.appendChild(item3);

    const item4 = document.createElement('div');
    item4.textContent = 'Sausage and Eggs';
    items.appendChild(item4);

    const item5 = document.createElement('div');
    item5.textContent = 'Fruit Salad';
    items.appendChild(item5);

    const item6 = document.createElement('div');
    item6.textContent = 'Full English Breakfast';
    items.appendChild(item6);

    breakfast.appendChild(items);
    main.appendChild(breakfast);
}

function renderLunch() {
    // Lunch container
    const lunch = document.createElement('div');
    lunch.id = 'lunch';
    lunch.classList.add('menu');

    // Header
    const dinnerTitle = document.createElement('h3');
    dinnerTitle.textContent = 'Lunch';
    lunch.appendChild(dinnerTitle);

    // Lunch items
    const items = document.createElement('div');
    items.classList.add('lunch-items');

    const item1 = document.createElement('div');
    item1.textContent = 'Ham Sandwich';
    items.appendChild(item1);

    const item2 = document.createElement('div');
    item2.textContent = 'Classic Burger';
    items.appendChild(item2);

    const item3 = document.createElement('div');
    item3.textContent = 'Roasted Chicken';
    items.appendChild(item3);

    lunch.appendChild(items);
    main.appendChild(lunch);
}

function renderDinner() {
    // Dinner container
    const dinner = document.createElement('div');
    dinner.id = 'dinner';
    dinner.classList.add('menu');

    // Header
    const dinnerTitle = document.createElement('h3');
    dinnerTitle.textContent = 'Dinner';
    dinner.appendChild(dinnerTitle);

    // Dinner items
    const items = document.createElement('div');
    items.classList.add('dinner-items');

    const item1 = document.createElement('div');
    item1.textContent = 'Steak and Chips';
    items.appendChild(item1);

    const item2 = document.createElement('div');
    item2.textContent = 'Mushroom Risotto';
    items.appendChild(item2);

    const item3 = document.createElement('div');
    item3.textContent = 'Pepperoni Pizza';
    items.appendChild(item3);

    const item4 = document.createElement('div');
    item4.textContent = 'Spaghetti Bolognaise';
    items.appendChild(item4);

    dinner.appendChild(items);
    main.appendChild(dinner);
}