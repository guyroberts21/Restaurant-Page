import { main } from './index';

export function renderAbout() {
    const container = document.createElement('div');
    container.id = 'about-info';

    const text = document.createElement('p');
    text.textContent = 'Founded in 2014, "we have always strived to provide the highest quality food to our customers". We currently have twelve restaurants around the world; all in separate countries. Although we traditionally serve English cuisine, we are beginning to develop new dishes since we have begun serving in a variety of different countries.';
    
    container.appendChild(text);
    main.appendChild(container);
}