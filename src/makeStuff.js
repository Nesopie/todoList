function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = "To-Do List";

    header.appendChild(title);

    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    nav.classList.add("sidebar");

    const today = document.createElement("div");
    today.classList.add("today");
    today.classList.add("navElement");
    today.innerText = "Today";

    const thisWeek = document.createElement("div");
    thisWeek.classList.add("thisWeek");
    thisWeek.classList.add("navElement");
    thisWeek.innerText = "This Week";

    nav.appendChild(today);
    nav.appendChild(thisWeek);

    return nav;
}

export {createHeader, createNav};
