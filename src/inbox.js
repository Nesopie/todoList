function loadInbox() {
    const main = document.querySelector("main");

    const headerMain = document.createElement("h2");
    headerMain.classList.add("headerMain");
    headerMain.innerText = "Inbox";

    taskForm();
    main.appendChild(headerMain);
    main.appendChild(task());
}

function task() {
    const addTask = document.createElement("div");
    addTask.classList.add("addTask");

    const addTaskText = document.createElement("div");
    addTaskText.innerText = "Add Task";

    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("addTaskButton");

    addTaskButton.addEventListener("click", () => {
        const taskForm = document.querySelector(".taskForm");
        const taskFormDiv = document.querySelector(".taskFormDiv");
        const content = document.querySelector(".content");

        taskForm.style.visibility = "visible";
        taskForm.style.zIndex = "100";
        content.style.opacity = "0.2";
        taskFormDiv.style.zIndex = "100";
    });

    addTask.appendChild(addTaskText);
    addTask.appendChild(addTaskButton);

    return addTask;
}

function taskForm() {
    const body = document.querySelector("body");
    const content = document.querySelector(".content");

    const div = document.createElement("div");
    div.classList.add("taskFormDiv");

    const form = document.createElement("form");
    form.classList.add("taskForm");
    form.setAttribute("name", "taskForm");

    const formTitle = document.createElement("div");
    formTitle.classList.add("formTitle");
    formTitle.classList.add("formElement");
    formTitle.innerText = "Add Task";

    const cancel = document.createElement("button");
    cancel.classList.add("formElement");
    cancel.classList.add("cancelTask");
    cancel.innerText = "x";

    cancel.addEventListener("click", (e) => {
        e.preventDefault();
        form.style.visibility = "hidden";
        content.style.opacity = "1";
        div.style.zIndex = -1;
        form.reset();
    });

    const container = document.createElement("div");
    container.classList.add("formElement");
    container.classList.add("taskHeader");
    container.appendChild(formTitle);
    container.appendChild(cancel);

    const taskText = document.createElement("input");
    taskText.classList.add("formElement");
    taskText.classList.add("taskText");
    taskText.setAttribute("type","text");
    taskText.setAttribute("name","");
    taskText.setAttribute("maxlength","32");
    taskText.setAttribute("placeholder","Enter task name");

    const createTaskButton = document.createElement("button");

    const taskDescription = document.createElement("textarea");
    taskDescription.classList.add("formElement")
    taskDescription.classList.add("taskDescription");
    taskDescription.setAttribute("type","text");
    taskDescription.setAttribute("name","");
    taskDescription.setAttribute("maxlength","128");
    taskDescription.setAttribute("height","100");
    taskDescription.setAttribute("placeholder","Enter task description");

    createTaskButton.classList.add("formElement");
    createTaskButton.classList.add("submitTask");
    createTaskButton.innerText = "Create Task";

    createTaskButton.addEventListener("click", (e) => {
        e.preventDefault();
        const taskObj = taskObjectFactory(taskText.value, taskDescription.value);
        taskObj.createTask();
        form.style.visibility = "hidden";
        content.style.opacity = "1";
        form.reset();
        div.style.zIndex = -1;
    });

    form.appendChild(container);
    form.appendChild(taskText);
    form.appendChild(taskDescription);
    form.appendChild(createTaskButton);
    div.appendChild(form);

    body.insertBefore(div,content);
}

const taskObjectFactory = (taskName, taskDescription) => {
    const getTaskName = () => taskName;
    const getTaskDescription  = () => taskDescription;

    const createTask = () => {
        const taskDivContainer = document.createElement("div");
        taskDivContainer.classList.add("taskDivContainer");

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("taskDiv");

        const taskDivName = document.createElement("div");
        taskDivName.classList.add("taskName");
        taskDivName.innerText = `${getTaskName()}`;

        const taskDivDesc = document.createElement("div");
        taskDivDesc.classList.add("taskDesc");
        taskDivDesc.innerText = `${getTaskDescription()}`;

        const removeTaskButton = document.createElement("button");
        removeTaskButton.classList.add("removeTask");

        removeTaskButton.addEventListener("click", () => {
            removeTask(removeTaskButton.parentNode);
        });

        taskDiv.appendChild(taskDivName);
        taskDiv.appendChild(taskDivDesc);

        taskDivContainer.appendChild(taskDiv);
        taskDivContainer.appendChild(removeTaskButton);

        const main = document.querySelector("main");
        const addTask = document.querySelector(".addTask");

        main.insertBefore(taskDivContainer,addTask);
    }

    const removeTask = (nodeName) => {
        nodeName.remove();
    }

    return {createTask};
}

export {loadInbox};
