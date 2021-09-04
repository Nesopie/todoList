const projects = () => {
    let projectsList = [];

    const removeProject = (projectNode, index) => {
        projectsList.splice(index,1);
        projectNode.remove();
    }

    const projectForm = () => {
        const form = document.querySelector(".projectsForm");
        const cancel = document.querySelector(".cancelProject");
        const div = document.querySelector(".projectsFormDiv");

        cancel.addEventListener("click", (e) => {
            const content = document.querySelector(".content");
            e.preventDefault();
            form.style.visibility = "hidden";
            div.style.zIndex = -1;
            content.style.opacity = "1";
            form.reset();
        });

        const addProject = document.querySelector(".submitProject");

        addProject.addEventListener("click", (event) => {
            event.preventDefault();
            const sidebar = document.querySelector(".sidebar");

            const name = document.querySelector(".projectsText").value;

            const projectContainer = document.createElement("div");
            projectContainer.classList.add("projectContainer");
            console.log(name);
            console.log(typeof name)
            projectContainer.classList.add(`${name}`);
            projectContainer.classList.add("navElement");

            const projectName = document.createElement("div");
            projectName.classList.add("projectName");
            projectName.innerText = `${name}`;

            const removeProjectBtn = document.createElement("button");
            removeProjectBtn.classList.add("removeBtn");

            removeProjectBtn.addEventListener("click", () => {
                const index = getIndex(projectContainer);
                removeProject(projectContainer, index);
            });

            projectContainer.appendChild(projectName);
            projectContainer.appendChild(removeProjectBtn);

            sidebar.appendChild(projectContainer);

            projectsList.push(createProjectObject(projectContainer.classList[1],project(`${name}`)));

            projectName.addEventListener("click", (e) => {
                for(let i = 0; i < projectsList.length; i++) {
                    console.log(projectsList[i]);
                    if(projectsList[i].name == projectContainer.classList[1]) {
                        document.querySelector("main").innerText = "";
                        projectsList[i].proj.loadProject();
                    }
                }
            });

            const content = document.querySelector(".content");
            form.style.visibility = "hidden";
            div.style.zIndex = -1;
            content.style.opacity = "1";
            form.reset();
        });

        const getIndex = (projectName) => {
            let i = 0;
            while((projectName = projectName.previousSibling)) {
                i++;
            }
            return i - 1;
        }
    }

    const createProjectObject = (name,proj) => {
        return {name, proj};
    }

    return {projectForm};
}

const project = (name) => {
    let projectsTaskList = [];
    const updateProject = (taskObj, taskNode) => {
        const main = document.querySelector("main");
        const addTask = document.querySelector(".addTask")

        main.insertBefore(taskNode,addTask);
        projectsTaskList.push(taskObj);
    }

    const removeProjectTask = (nodeName, index) => {
        projectsTaskList.splice(index,1);
        nodeName.remove();
    }

    const loadProject = () => {
        const main = document.querySelector("main");

        const headerMain = document.createElement("h2");
        headerMain.classList.add("headerMain");
        headerMain.innerText = `${name}`;

        taskForm();

        const addTask = task();
        main.appendChild(headerMain);
        main.appendChild(addTask);

        const projectsLength = projectsTaskList.length;
        for(let i = 0; i < projectsLength; i++) {
            const name = projectsTaskList[i].name;
            const description = projectsTaskList[i].description;

            const node = createTaskNode(name,description);
            main.insertBefore(node,addTask);
        }
    }
    const createTaskNode = (taskName, taskDescription) => {
        const taskDivContainer = document.createElement("div");
        taskDivContainer.classList.add("taskDivContainer");

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("taskDiv");

        const taskDivName = document.createElement("div");
        taskDivName.classList.add("taskName");
        taskDivName.innerText = `${taskName}`;

        const taskDivDesc = document.createElement("div");
        taskDivDesc.classList.add("taskDesc");
        taskDivDesc.innerText = `${taskDescription}`;

        const removeTaskButton = document.createElement("button");
        removeTaskButton.classList.add("removeTask");

        removeTaskButton.addEventListener("click", () => {
            const nodeName = removeTaskButton.parentNode.parentNode;
            const index = getIndex(nodeName);
            removeProjectTask(nodeName, index);
        });
        const editTaskButton = document.createElement("button");
        editTaskButton.classList.add("editTask");

        const buttons = document.createElement("div");
        buttons.classList.add("taskBtns");
        buttons.appendChild(editTaskButton);
        buttons.appendChild(removeTaskButton);

        editTaskButton.addEventListener("click", () => {

        });

        taskDiv.appendChild(taskDivName);
        taskDiv.appendChild(taskDivDesc);

        taskDivContainer.appendChild(taskDiv);
        taskDivContainer.appendChild(buttons);

        const main = document.querySelector("main");
        const addTask = document.querySelector(".addTask");

        return taskDivContainer;
    }

    const getIndex = (nodeName) => {
        let i = 0;
        while((nodeName = nodeName.previousSibling)) {
            i++;
        }
        return i - 1;
    }

    const createTaskObject = (name, description) => {
        return {name, description};
    }

    function taskForm() {
        const body = document.querySelector("body");
        const content = document.querySelector(".content");

        const form = document.querySelector(".taskForm");
        const cancel = document.querySelector(".cancelTask");

        cancel.addEventListener("click", (e) => {
            e.preventDefault();
            form.style.visibility = "hidden";
            div.style.zIndex = -1;
            form.reset();
        });

        const taskText = document.querySelector(".taskText");
        const createTaskButton = document.querySelector(".submitTask");
        const taskDescription = document.querySelector(".taskDescription");

        createTaskButton.addEventListener("click", (e) => {
            e.preventDefault();
            updateProject(createTaskObject(taskText.value,taskDescription.value),createTaskNode(taskText.value,taskDescription.value));
            form.style.visibility = "hidden";
            content.style.opacity = "1";
            form.reset();
            div.style.zIndex = -1;
        });
    }

    return {loadProject};
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

const Inbox = project("Inbox");
const Projects = projects();

export {Inbox,Projects};
