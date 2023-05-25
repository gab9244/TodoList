

const main = document.createElement("main")
const mainDiv = document.createElement("div")
const addTask = document.createElement("button")

addTask.setAttribute("id", "addTask")
mainDiv.setAttribute("id", "mainDiv")



const InBox = document.createElement("h2")
InBox.textContent = "InBox"

const projectName = document.createElement("div")
projectName.append(InBox)
projectName.setAttribute("id", "projectName")

const plusTask = document.createElement("img")
plusTask.src = "/imagens/plus.png"
plusTask.style.width = "15px"


 const buttonText = "Add Task"
 const TaskList = document.createElement("div")
 TaskList.setAttribute("id", "TaskList")

 localStorage.setItem("TaskList", "")
addTask.append(plusTask)
addTask.append(buttonText)

mainDiv.append(projectName)


const newTask = document.createElement("div")
let buttonsOfTask = document.createElement("div")



const inputBox = document.createElement("input")
inputBox.type = "text"
inputBox.setAttribute("id", "inputBox")


const Adicionar= document.createElement("button")
const Cancelar = document.createElement("button")

Adicionar.textContent = "Adicionar"
Cancelar.textContent = "Cancelar"

buttonsOfTask.append(Adicionar, Cancelar)

newTask.append(inputBox)
newTask.append(buttonsOfTask)



mainDiv.append(addTask)
mainDiv.append(newTask)
mainDiv.append(TaskList)

Adicionar.setAttribute("id", "Adicionar")
Cancelar.setAttribute("id", "Cancelar")
newTask.setAttribute("id", "newTask")



main.append(mainDiv)

export {main, mainDiv, newTask, addTask, Adicionar, Cancelar, inputBox, TaskList}