const addProjectsPanel = document.createElement("div")
addProjectsPanel.setAttribute("id", "addProjectsPanel")
addProjectsPanel.style.display = "none"
const projectsname = document.createElement("input")
projectsname.type = "text"
projectsname.setAttribute("id", "projectsname")

const projectButtons = document.createElement("div")
const addProjectButton = document.createElement("button")
const cancelProjectButton = document.createElement("button")
const projectsList = document.createElement("div")


projectsList.setAttribute("id", "projectsList")
projectButtons.setAttribute("id", "projectButtons")
addProjectButton.setAttribute("id" , "addProjectButton")
cancelProjectButton.setAttribute("id", "cancelProjectButton")

addProjectButton.textContent = "Add"
cancelProjectButton.textContent = "Cancel"

addProjectsPanel.append(projectsname,projectButtons )
projectButtons.append(addProjectButton, cancelProjectButton)

export {
    projectsname, addProjectsPanel, projectButtons,addProjectButton, cancelProjectButton, projectsList
}