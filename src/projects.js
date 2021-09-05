const project = (() => {
    let projectsTaskList = [];
    const updateProject = (taskObj, taskNode) => {
        if(taskObj.name === "") return;
        console.log(projectsTaskList);
        const main = document.querySelector("main");
        const addTask = document.querySelector(".addTask")

        main.insertBefore(taskNode,addTask);
        projectsTaskList.push(taskObj);
    }

    const removeProjectTask = (nodeName, index) => {
        projectsTaskList.splice(index,1);
        nodeName.remove();
    }

    const loadProject = (clickedProjectName) => {
        const main = document.querySelector("main");
        main.innerText = "";
        const headerMain = document.createElement("h2");
        headerMain.classList.add("headerMain");
        headerMain.innerText = `${clickedProjectName}`;

        taskForm();

        const addTask = task();
        main.appendChild(headerMain);
        main.appendChild(addTask);

        for(let i = 0; i < projectsTaskList.length; i++) {
            const name = projectsTaskList[i].name;
            const description = projectsTaskList[i].description;

            const node = createTaskNode(name,description);
            if(clickedProjectName == "Inbox") {
                main.insertBefore(node,addTask);
            }else if(projectsTaskList[i].projectName == clickedProjectName) {
                main.insertBefore(node,addTask);
            }
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
            console.log(projectsTaskList);
            const nodeName = removeTaskButton.parentNode.parentNode;
            const name = nodeName.firstChild.firstChild.innerText;
            let index = getIndex(name);
            console.log(index);
            removeProjectTask(nodeName, index);
            console.log(projectsTaskList);
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
        for(let i = 0; i < projectsTaskList.length; i++) {
            console.log("nodeName is : " + nodeName);
            console.log("current task list : " + projectsTaskList[i].name);
            console.log(i);
            if(nodeName == projectsTaskList[i].name) {
                return i;
            }
        }
    }

    const createTaskObject = (projectName, name, description) => {
        return {projectName, name, description};
    }

    function taskForm() {
        const body = document.querySelector("body");
        const content = document.querySelector(".content");

        const form = document.querySelector(".taskForm");
        const cancel = document.querySelector(".cancelTask");

        cancel.addEventListener("click", (e) => {
            e.preventDefault();
            form.style.visibility = "hidden";
            content.style.opacity = "1";
            // div.style.zIndex = -1;
            form.reset();
        });

        const taskText = document.querySelector(".taskText");
        const createTaskButton = document.querySelector(".submitTask");
        const taskDescription = document.querySelector(".taskDescription");

        createTaskButton.addEventListener("click", (e) => { //upon submitting update the display
            e.preventDefault();
            const projName = document.querySelector("h2").innerText;
            updateProject(createTaskObject(projName,taskText.value,taskDescription.value),createTaskNode(taskText.value,taskDescription.value));
            form.style.visibility = "hidden";
            content.style.opacity = "1";
            form.reset();
            console.log(projectsTaskList);
        });
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
            // projectContainer.classList.add(`${name}`);
            projectContainer.classList.add("navElement");

            const projectName = document.createElement("div");
            projectName.classList.add("projectName");
            projectName.innerText = `${name}`;
            if(projectName.innerText == "") return;

            const removeProjectBtn = document.createElement("button");
            removeProjectBtn.classList.add("removeBtn");

            removeProjectBtn.addEventListener("click", () => {
                projectContainer.remove();
                for(let i = 0; i < projectsTaskList.length; i++) {
                    if(projectsTaskList[i].projectName == projectName.innerText) {
                        projectsTaskList[i].splice(i--,1);
                    }
                }
            });

            projectContainer.appendChild(projectName);
            projectContainer.appendChild(removeProjectBtn);

            sidebar.appendChild(projectContainer);

            projectName.addEventListener("click", (e) => {
                e.preventDefault();
                // loadProject(projectContainer.classList[1]);
                loadProject(projectName.innerText);
            });

            const content = document.querySelector(".content");
            form.style.visibility = "hidden";
            div.style.zIndex = -1;
            content.style.opacity = "1";
            form.reset();
        });
    }

    const loadInbox = () => {
        const main = document.querySelector("main");
        const headerMain = document.createElement("h2");
        headerMain.classList.add("headerMain");
        headerMain.innerText = "Inbox";

        taskForm();

        const addTask = task();

        main.appendChild(headerMain);
        main.appendChild(addTask);
    }
    return {loadProject,projectsTaskList,loadInbox,projectForm};
})();

function task() {
    const addTask = document.createElement("div");
    addTask.classList.add("addTask");

    const addTaskText = document.createElement("div");
    addTaskText.innerText = "Add Task";

    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("addTaskButton");

    addTaskButton.addEventListener("click", (e) => {
        e.preventDefault();
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

export {project};
