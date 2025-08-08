import './styles.css';
import picture from './assets/restaurant.jpg';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';

console.log('hrllow');

loadHome();

const buttons = document.querySelectorAll("button");
const div = document.querySelector("#content");

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        div.textContent = null;
        switch(event.target.id) {
            case 'home': loadHome();break;
            case 'menu': loadMenu();break;
            case 'about': loadAbout();break;
        }
    })
})