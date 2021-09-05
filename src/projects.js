const project = (() => {
    let projectsTaskList = [];
    //updates the display after the submitTask button has been clicked in the form
    const updateProject = (taskObj, taskNode) => {
        //this if statement is to fix the bug where multiple empty elements were being added
        if(taskObj.name === "") return;
        const main = document.querySelector("main");
        const addTask = document.querySelector(".addTask")

        main.insertBefore(taskNode,addTask);
        projectsTaskList.push(taskObj);
    }

    //removes the task from the array and removes it from the HTML dom
    const removeProjectTask = (nodeName, index) => {
        projectsTaskList.splice(index,1);
        nodeName.remove();
    }

    //this loads the project, everytime a project is clicked from the sideBar it reads the projectsTaskList and creates the task divs by reading from the taskList array
    const loadProject = (clickedProjectName) => {
        const main = document.querySelector("main");
        main.innerText = "";
        const headerMain = document.createElement("h2");
        headerMain.classList.add("headerMain");
        headerMain.innerText = `${clickedProjectName}`;
        // console.log("clickedProjectName");

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

    //creates the task, buttons, returns the div, this div is appended right before the addTask btn
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

    //gets the index of the node from the HTML document
    const getIndex = (nodeName) => {
        let i = 0;
        while((nodeName = nodeName.previousSibling)) {
            i++;
        }
        return i - 1;
    }

    const createTaskObject = (projectName, name, description) => {
        return {projectName, name, description};
    }

    //add event listeners to the task form
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

        //creates a project and appends it to the sidebar
        addProject.addEventListener("click", (event) => {
            event.preventDefault();
            const sidebar = document.querySelector(".sidebar");

            const name = document.querySelector(".projectsText").value;

            const projectContainer = document.createElement("div");
            projectContainer.classList.add("projectContainer");
            projectContainer.classList.add(`${name}`);
            projectContainer.classList.add("navElement");

            const projectName = document.createElement("div");
            projectName.classList.add("projectName");
            projectName.innerText = `${name}`;

            const removeProjectBtn = document.createElement("button");
            removeProjectBtn.classList.add("removeBtn");

            removeProjectBtn.addEventListener("click", () => {
                projectContainer.remove();
                for(let i = 1; i < projectsTaskList.length; i++) {
                    if(projectsTaskList[i].projectName == projectContainer.classList[1]) {
                        projectsTaskList[i].splice(i--,1);
                    }
                }
            });

            projectContainer.appendChild(projectName);
            projectContainer.appendChild(removeProjectBtn);

            sidebar.appendChild(projectContainer);

            //add the project to the list in the form of a {projectName,project()} pair
            // const newProject = project(`${name}`);
            // projectsList.push(createProjectObject(projectContainer.classList[1],newProject));

            projectName.addEventListener("click", (e) => {
                e.preventDefault();
                //go through the projectsList array and see which project has been clicked, find the project and then load it
                //projectContainer is the parent of projectName, it's second class element has the project name, from that, get the project() and load tasks
                console.log("Hi");
                loadProject(projectContainer.classList[1]);
                // for(let i = 0; i < projectsTaskList.length; i++) {
                //     if(projectsTaskList[i].projectName == projectContainer.classList[1]) {
                //         document.querySelector("main").innerText = "";
                //         loadProject(projectsContainer.classList[1]);
                //         break;
                //     }
                // }
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

//this function is to add a the AddTask div in the beginning of every page
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

//bugs -> line 36 gives Token must not be empty error when 2nd project is being added
//line 236 is being called multiple times, the first time, the value of projName in line 238 is "Inbox" for some reason
//Every element is being added to the inbox, and not the individual project
