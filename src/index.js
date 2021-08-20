import {createHeader, createSidebar} from './makeStuff.js';
import {loadInbox} from './inbox.js';

function loadHome() {
    const content = document.querySelector(".content");
    const hr = document.createElement("hr");

    const container = document.createElement("div");
    container.classList.add("container");

    const main = document.createElement("main");

    container.appendChild(createSidebar());
    container.appendChild(main);

    content.appendChild(createHeader());
    content.appendChild(hr);
    content.appendChild(container);

    loadInbox();
    console.log("hi");
}

loadHome();
