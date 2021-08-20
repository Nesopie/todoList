import {createHeader, createSidebar} from './makeStuff.js';
import {Inbox} from './inbox.js';

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

    Inbox.loadInbox();

    const inbox = document.querySelector(".inbox");
    inbox.addEventListener("click", () => {
        main.innerText = "";
        console.log(main);
        Inbox.loadInbox();
    });
}

loadHome();
