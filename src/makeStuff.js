function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = "To-Do List";

    header.appendChild(title);

    return header;
}

function createSidebar() {
    const ul = document.createElement("ul");
    ul.classList.add("sidebar");

    ul.appendChild(createListItem("inbox"));
    ul.appendChild(createListItem("today"));
    ul.appendChild(createListItem("projects"));

    return ul;
}

function createListItem(itemName) {
    const item = document.createElement("li");
    item.classList.add(`${itemName}`);
    item.classList.add("navElement");
    item.innerText = itemName.charAt(0).toUpperCase() + itemName.slice(1);

    return item;
}

export {createHeader, createSidebar};
