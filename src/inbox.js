// const inbox = () => {
//     let inboxTaskList = [];
//     const updateInbox = (taskObj,taskNode) => {
//         const main = document.querySelector("main");
//         const addTask = document.querySelector(".addTask");
//
//         main.insertBefore(taskNode,addTask);
//
//         inboxTaskList.push(taskObj);
//     }
//     const removeInboxTask = (nodeName, index) => {
//         inboxTaskList.splice(index,1);
//         nodeName.remove();
//     }
//     const loadInbox = () =>  {
//         const main = document.querySelector("main");
//
//         const headerMain = document.createElement("h2");
//         headerMain.classList.add("headerMain");
//         headerMain.innerText = "Inbox";
//
//         taskForm();
//
//         const addTask = task()
//         main.appendChild(headerMain);
//         main.appendChild(addTask);
//
//         const inboxLength = inboxTaskList.length;
//         for(let i = 0; i < inboxLength; i++) {
//             const name = inboxTaskList[i].name;
//             const description = inboxTaskList[i].description;
//
//             const node = createTaskNode(name,description);
//
//             main.insertBefore(node,addTask);
//         }
//     }
//
//     const createTaskNode = (taskName, taskDescription) => {
//         const taskDivContainer = document.createElement("div");
//         taskDivContainer.classList.add("taskDivContainer");
//
//         const taskDiv = document.createElement("div");
//         taskDiv.classList.add("taskDiv");
//
//         const taskDivName = document.createElement("div");
//         taskDivName.classList.add("taskName");
//         taskDivName.innerText = `${taskName}`;
//
//         const taskDivDesc = document.createElement("div");
//         taskDivDesc.classList.add("taskDesc");
//         taskDivDesc.innerText = `${taskDescription}`;
//
//         const removeTaskButton = document.createElement("button");
//         removeTaskButton.classList.add("removeTask");
//
//         removeTaskButton.addEventListener("click", () => {
//             const nodeName = removeTaskButton.parentNode.parentNode;
//             const index = getIndex(nodeName);
//             removeInboxTask(nodeName, index);
//         });
//         const editTaskButton = document.createElement("button");
//         editTaskButton.classList.add("editTask");
//
//         const buttons = document.createElement("div");
//         buttons.classList.add("taskBtns");
//         buttons.appendChild(editTaskButton);
//         buttons.appendChild(removeTaskButton);
//
//         editTaskButton.addEventListener("click", () => {
//
//         });
//
//         taskDiv.appendChild(taskDivName);
//         taskDiv.appendChild(taskDivDesc);
//
//         taskDivContainer.appendChild(taskDiv);
//         taskDivContainer.appendChild(buttons);
//
//         const main = document.querySelector("main");
//         const addTask = document.querySelector(".addTask");
//
//         return taskDivContainer;
//     }
//
//     const getIndex = (nodeName) => {
//         let i = 0;
//         while((nodeName = nodeName.previousSibling)) {
//             i++;
//         }
//         return i - 1;
//     }
//
//     const createTaskObject = (name, description) => {
//         return {name, description};
//     }
//
//     const taskForm = () => {
//         const body = document.querySelector("body");
//         const content = document.querySelector(".content");
//
//         const form = document.querySelector(".taskForm");
//         const cancel = document.querySelector(".cancelTask");
//
//         cancel.addEventListener("click", (e) => {
//             e.preventDefault();
//             form.style.visibility = "hidden";
//             // content.style.opacity = "1";
//             div.style.zIndex = -1;
//             form.reset();
//         });
//
//         const taskText = document.querySelector(".taskText");
//         const createTaskButton = document.querySelector(".submitTask");
//         const taskDescription = document.querySelector(".taskDescription");
//
//         createTaskButton.addEventListener("click", (e) => {
//             e.preventDefault();
//             updateInbox(createTaskObject(taskText.value,taskDescription.value),createTaskNode(taskText.value,taskDescription.value));
//             form.style.visibility = "hidden";
//             content.style.opacity = "1";
//             form.reset();
//             div.style.zIndex = -1;
//         });
//     }
//     return {createTaskNode,loadInbox,createTaskObject,updateInbox};
// }
//
// function task() {
//     const addTask = document.createElement("div");
//     addTask.classList.add("addTask");
//
//     const addTaskText = document.createElement("div");
//     addTaskText.innerText = "Add Task";
//
//     const addTaskButton = document.createElement("button");
//     addTaskButton.classList.add("addTaskButton");
//
//     addTaskButton.addEventListener("click", () => {
//         const taskForm = document.querySelector(".taskForm");
//         const taskFormDiv = document.querySelector(".taskFormDiv");
//         const content = document.querySelector(".content");
//
//         taskForm.style.visibility = "visible";
//         taskForm.style.zIndex = "100";
//         content.style.opacity = "0.2";
//         taskFormDiv.style.zIndex = "100";
//     });
//
//     addTask.appendChild(addTaskText);
//     addTask.appendChild(addTaskButton);
//
//     return addTask;
// }
//
// const Inbox = inbox();
//
// function taskForm() {
//     const body = document.querySelector("body");
//     const content = document.querySelector(".content");
//
//     const form = document.querySelector(".taskForm");
//     const cancel = document.querySelector(".cancelTask");
//
//     cancel.addEventListener("click", (e) => {
//         e.preventDefault();
//         form.style.visibility = "hidden";
//         // content.style.opacity = "1";
//         div.style.zIndex = -1;
//         form.reset();
//     });
//
//     const taskText = document.querySelector(".taskText");
//     const createTaskButton = document.querySelector(".submitTask");
//     const taskDescription = document.querySelector(".taskDescription");
//
//     createTaskButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         Inbox.updateInbox(Inbox.createTaskObject(taskText.value,taskDescription.value),Inbox.createTaskNode(taskText.value,taskDescription.value));
//         form.style.visibility = "hidden";
//         content.style.opacity = "1";
//         form.reset();
//         div.style.zIndex = -1;
//     });
// }
//
// export {Inbox};
