import {createHeader, createSidebar} from './makeStuff.js';
import {Projects} from './projects.js';

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

    const Inbox = Projects.projectsList[0].proj;

    Inbox.loadProject("Inbox");

    const inbox = document.querySelector(".inbox");
    inbox.addEventListener("click", () => {
        main.innerText = "";
        Inbox.loadProject("Inbox");
    });
}

loadHome();
