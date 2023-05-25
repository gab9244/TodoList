import { addProjectsPanel, projectsList } from "./addproject"
const Nav = document.createElement("nav")
let Note = document.createElement("button")
let Today = document.createElement("button")
let ThisWeek = document.createElement("button")
let AddProject = document.createElement("button")

Note.textContent = "Notes"
Today.textContent = "Today"

ThisWeek.textContent = "ThisWeek"
AddProject.textContent = "AddProject"

const projectTitle = document.createElement("h2")
projectTitle.innerHTML = "Projects"

const newprojectButton = document.createElement("button")
newprojectButton.classList.add("newprojectButton")

let  spans = document.createElement('span');
let txt = document.createTextNode('\u00D7')
spans.appendChild(txt)


Note.addEventListener("click", ()=>{
    const nav = document.querySelector("nav")
    if( nav.classList.contains("active")) {
        nav.classList.remove("active")
    }
})

Today.addEventListener("click", ()=>{
    const nav = document.querySelector("nav")
    if( nav.classList.contains("active")) {
        nav.classList.remove("active")
    }
})

ThisWeek.addEventListener("click", ()=>{
    const nav = document.querySelector("nav")
    if( nav.classList.contains("active")) {
        nav.classList.remove("active")
    }
})



Nav.append(Note, Today, ThisWeek,projectTitle, AddProject, addProjectsPanel, projectsList   
)

export {Nav, Note, Today, ThisWeek,AddProject, spans,newprojectButton}