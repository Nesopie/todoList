import {createHeader, createSidebar} from './makeStuff.js';
import {project} from './projects.js';

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

    //inbox is the first element of the projects list
    // const Inbox = Projects.projectsList[0].proj;
    //
    // //load inbox by default
    // Inbox.loadProject("Inbox");

    project.loadInbox();

    const inbox = document.querySelector(".inbox");
    inbox.addEventListener("click", () => {
        main.innerText = "";
        // Inbox.loadProject("Inbox");
        project.loadProject("Inbox");
    });
}

loadHome();
