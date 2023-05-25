import {projectsname} from "./addproject"
 


const newProjectsDiv = document.createElement("div")
const newProjectAddTask = document.createElement("button")

newProjectsDiv.classList.add("newProjectsDiv")

newProjectAddTask.classList.add("newProjectAddTask")


const newProjectname = document.createElement("h2")
newProjectname.classList.add("newProjectname")

const newProjectnameDiv = document.createElement("div")
newProjectnameDiv.append(newProjectname)
newProjectnameDiv.classList.add("newProjectnameDiv")

const plusTask = document.createElement("img")
plusTask.src = "/imagens/plus.png"
plusTask.style.width = "10px"

const newButtonText = "Add Task" 
const newTaskList = document.createElement("div")
newTaskList.classList.add("newTaskList")

newProjectAddTask.append(plusTask)
newProjectAddTask.append(newButtonText)

newProjectsDiv.append(newProjectname)

const newProjectTask = document.createElement("div")
const newButtonsOfTask = document.createElement("div")


const newInputBox = document.createElement("input")
newInputBox.type = "text"
newInputBox.classList.add("newInputBox")



const newAdicionar = document.createElement("button")
const newCancelar = document.createElement("button")

newAdicionar.textContent = "Adicionar"
newCancelar.textContent = "Cancelar"

newButtonsOfTask.append(newAdicionar, newCancelar)

newProjectTask.append(newInputBox, newButtonsOfTask)

newProjectsDiv.append(newProjectAddTask, newProjectTask, newTaskList)

newAdicionar.classList.add("newAdicionar") 
newCancelar.classList.add("newCancelar")
newProjectTask.classList.add("newProjectTask")

newProjectTask.style.display = "none"


export{ newProjectsDiv, newProjectTask, newProjectAddTask, newAdicionar, newCancelar, newInputBox, newTaskList, newProjectname}



