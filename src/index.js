import {createHeader, createNav} from './makeStuff.js';

function loadHome() {
    const content = document.querySelector(".content");
    const hr = document.createElement("hr");

    content.appendChild(createHeader());
    content.appendChild(hr);
    content.appendChild(createNav());
}

loadHome();
