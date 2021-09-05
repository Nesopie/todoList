import {project} from './projects.js';

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const img = document.createElement("img");
    img.classList.add("tick");
    img.src = "images/tick.svg";

    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = "To-Do List";

    header.appendChild(img);
    header.appendChild(title);

    return header;
}

function createSidebar() {
    const ul = document.createElement("ul");
    ul.classList.add("sidebar");

    ul.appendChild(createSidebarItem("inbox"));
    ul.appendChild(createSidebarItem("today"));
    const projects = createSidebarItem("projects");
    const projectsImg = projects.querySelector("img");

    projectsImg.addEventListener("click", (e) => {
        e.preventDefault();
        const projectsForm = document.querySelector(".projectsForm");
        const projectsFormDiv = document.querySelector(".projectsFormDiv");
        const content = document.querySelector(".content");

        projectsForm.style.visibility = "visible";
        projectsForm.style.zIndex = "100";
        content.style.opacity = "0.2";
        projectsFormDiv.style.zIndex = "100";
        project.projectForm();
    });

    ul.appendChild(projects);

    return ul;
}

function createSidebarItem(itemName) {
    const item = document.createElement("li");
    item.classList.add(`${itemName}`);
    item.classList.add("navElement");

    const text = document.createElement("div");
    text.innerText = itemName[0].toUpperCase() + itemName.slice(1);
    const img = document.createElement("img");
    img.src = `images/${itemName}.svg`;

    item.appendChild(text);
    item.appendChild(img);

    return item;
}

export {createHeader, createSidebar};
