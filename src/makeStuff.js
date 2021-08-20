function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const img = document.createElement("img");
    img.classList.add("tick");
    img.src = "../dist/images/tick.svg";

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
    ul.appendChild(createSidebarItem("projects"));

    return ul;
}

function createSidebarItem(itemName) {
    const item = document.createElement("li");
    item.classList.add(`${itemName}`);
    item.classList.add("navElement");

    const text = document.createElement("div");
    text.innerText = itemName[0].toUpperCase() + itemName.slice(1);
    const img = document.createElement("img");
    img.src = `../dist/images/${itemName}.svg`;

    item.appendChild(text);
    item.appendChild(img);

    return item;
}

export {createHeader, createSidebar};
