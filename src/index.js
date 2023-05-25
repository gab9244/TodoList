import {Nav,Note, Today, ThisWeek,AddProject,newprojectButton } from "./nav"
 import { Header } from "./header"
import { main,mainDiv, newTask, addTask, Adicionar, Cancelar,inputBox, TaskList} from "./main"
import { todayDiv, todayTaskList } from "./today"
import { ThisWeekDiv, weekList } from "./thisweek"
import { footer } from "./footer"
import moment from "moment/moment"
import { projectsname, addProjectsPanel, projectButtons, addProjectButton, cancelProjectButton,  projectsList } from "./addproject"
import {newProjectsDiv, newProjectTask, newProjectAddTask, newAdicionar, newCancelar, newInputBox, newTaskList, newProjectname} from "./newprojects"

const userInteractionSection = document.createElement("div")

let tasks = JSON.parse(localStorage.getItem("tasks")) ||[]




userInteractionSection.append(Nav)
userInteractionSection.append(main)

main.append(todayDiv)
main.append(ThisWeekDiv)




userInteractionSection.setAttribute("id", "UIS")


const body = document.querySelector("body")
body.append(Header)
body.append(userInteractionSection)
body.append(footer)

mainDiv.style.display = "inline"
newTask.style.display = "none"
todayDiv.style.display = "none"
ThisWeekDiv.style.display = "none"



function changeSection(section){
    if(section === "Note") {
        mainDiv.style.display = "inline"
        todayDiv.style.display = "none"
        ThisWeekDiv.style.display = "none"
    }
    if(section === "Today") {
        todayDiv.style.display = "grid"
        mainDiv.style.display = "none"
        ThisWeekDiv.style.display = "none"
    }
    if(section === "ThisWeek") {
        ThisWeekDiv.style.display = "grid"
        mainDiv.style.display = "none"
        todayDiv.style.display = "none"

    }

 
}




Note.addEventListener("click", ()=>{
    changeSection("Note")
})

Today.addEventListener("click", ()=>{
    changeSection("Today") 
})

ThisWeek.addEventListener("click", ()=>{
    changeSection("ThisWeek")  
})
addTask.addEventListener("click", ()=>{
    addTask.style.display = "none"
    newTask.style.display = "flex"
    TaskList.style.display = "none"
})


Adicionar.addEventListener("click", () =>{


    let TaskItem = document.createElement("button")
    let taskitemtext = TaskItem.innerHTML
localStorage.setItem(TaskItem, taskitemtext)
    let CheckBox = document.createElement("div")
    CheckBox.setAttribute("id", "checkbox") 

    let moment = require("moment")
    let date = moment()
    let currentDate = date.format("YYYY-MM-DD")
   

    
 
    let items = inputBox.value
   
    let task ={
        id:new Date().getTime(),
        name: items,
        isComplete: false
    }
    if(localStorage.getItem("tasks")){
        tasks.map((task) =>{
              createTask(task)
        })
    }
   
    
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))
 
    createTask(task)

    function createTask(task){
        TaskItem.setAttribute("id", task.id)
        if (task.isCompleted){
            TaskItem.classList.add("complete")
        }

    }

    CheckBox.setAttribute("class", task.id)


    let leftPart = document.createElement("div")
    leftPart.setAttribute("id", "leftPart")
    leftPart.append(CheckBox, items)
    

    TaskItem.setAttribute("id", "TaskItem")
   
    let rightPart = document.createElement("div")
    rightPart.setAttribute("id", "rightPart")
    const Dates = document.createElement("input")
    Dates.type = "date"

    let  spans = document.createElement('span');
    let txt = document.createTextNode('\u00D7')
    spans.appendChild(txt)
    
    rightPart.append(Dates,spans)
    if(inputBox.value.length ==0){
       alert("Please use at lest one charactere")
       return
    }

    spans.addEventListener("click", ()=>{
        spans.parentElement.parentElement.style.display = "none"
    })

    CheckBox.addEventListener("click", ()=>{
       if(task.isComplete) {
        CheckBox.setAttribute("checked")
       }
      

        const dayOne = new Date().getDate() + 1
        const dayTwo = new Date().getDate() + 2
        const dayThree = new Date().getDate() + 3
        const dayFour = new Date().getDate() + 4
        const dayFive = new Date().getDate() + 5
        const daySix = new Date().getDate() + 6
        const daySeven = new Date().getDate() + 7
        if(Dates.value == currentDate){
            todayTaskList.append(CheckBox.parentElement.parentElement)   
        }
        
        else if(Dates.value == date.format(`YYYY-MM-${dayOne}`) ||Dates.value == date.format(`YYYY-MM-${dayTwo}`)|| Dates.value == date.format(`YYYY-MM-${dayThree}`)|| Dates.value == date.format(`YYYY-MM-${dayFour}`) ||  Dates.value == date.format(`YYYY-MM-${dayFive}`) ||  Dates.value == date.format(`YYYY-MM-${daySix}`) ||  Dates.value == date.format(`YYYY-MM-${daySeven}`)) {
            weekList.append(CheckBox.parentElement.parentElement)
        }

      
       
    })
   
  


    addTask.style.display = "inline"
    newTask.style.display = "none"
    TaskList.style.display = "grid"
   
    TaskItem.append(leftPart)
    TaskItem.append(rightPart)
    

    
    TaskList.append(TaskItem)
    
    
   

    inputBox.value = ""


})

Cancelar.addEventListener("click", ()=>{
    addTask.style.display = "inline"
    newTask.style.display = "none"
    TaskList.style.display = "grid"
    inputBox.value = ""
})


AddProject.addEventListener("click", ()=>{
   addProjectsPanel.style.display = "flex"

    


  
})
addProjectButton.addEventListener("click", () =>{
    changeSection("newProjectsDiv")
   
        const nav = document.querySelector("nav")
        if( nav.classList.contains("active")) {
            nav.classList.remove("active")
        }
   

    const newprojectButton = document.createElement("button")
    newprojectButton.classList.add("newprojectButton")


    const leftSide = document.createElement("div")
    leftSide.append(projectsname.value)
    if(projectsname.value.length === 0) {
        alert("Please use one or more characters")
        return
    }
        projectsList.append(newprojectButton)
    
        let  spans = document.createElement('span');
        let txt = document.createTextNode('\u00D7')
        spans.appendChild(txt)

   

        spans.addEventListener("click", ()=>{
        
            const classes = document.querySelectorAll(`.${adding}`)
            classes.forEach(element =>{
                element.remove()
            })

          
        })

        const rightSide = document.createElement("div")
        rightSide.append(spans)

        newprojectButton.append(leftSide, rightSide)
        addProjectsPanel.style.display = "none"

        newProjectname.innerHTML = projectsname.value
    projectsname.value = ""
 




    newProjectAddTask.addEventListener("click", ()=>{
        newProjectTask.style.display = "flex"
          newProjectAddTask.style.display = "none"
          newTaskList.style.display = "none"
      
         
      
      
      
      })
      
      newAdicionar.addEventListener("click", () =>{
          let TaskItem = document.createElement("button")
          
          let CheckBox = document.createElement("div")
          CheckBox.setAttribute("id", "checkbox") 
      
          let moment = require("moment")
          let date = moment()
          let currentDate = date.format("YYYY-MM-DD")
         
      
         
      
          let items = newInputBox.value
      
          let leftPart = document.createElement("div")
          leftPart.setAttribute("id", "leftPart")
          leftPart.append(CheckBox, items)
          
      
          TaskItem.setAttribute("id", "TaskItem")
         
          let rightPart = document.createElement("div")
          rightPart.setAttribute("id", "rightPart")
          const Dates = document.createElement("input")
          Dates.type = "date"
      
          let  spans = document.createElement('span');
          let txt = document.createTextNode('\u00D7')
          spans.appendChild(txt)
          
          rightPart.append(Dates,spans)
          if(newInputBox.value.length ==0){
             alert("Please use at lest one charactere")
             return
          }
      
          spans.addEventListener("click", ()=>{
              spans.parentElement.parentElement.style.display = "none"
          })
      
          CheckBox.addEventListener("click", ()=>{
              const dayOne = new Date().getDate() + 1
              const dayTwo = new Date().getDate() + 2
              const dayThree = new Date().getDate() + 3
              const dayFour = new Date().getDate() + 4
              const dayFive = new Date().getDate() + 5
              const daySix = new Date().getDate() + 6
              const daySeven = new Date().getDate() + 7
              if(Dates.value == currentDate){
                  todayTaskList.append(CheckBox.parentElement.parentElement)   
              }
              
              else if(Dates.value == date.format(`YYYY-MM-${dayOne}`) ||Dates.value == date.format(`YYYY-MM-${dayTwo}`)|| Dates.value == date.format(`YYYY-MM-${dayThree}`)|| Dates.value == date.format(`YYYY-MM-${dayFour}`) ||  Dates.value == date.format(`YYYY-MM-${dayFive}`) ||  Dates.value == date.format(`YYYY-MM-${daySix}`) ||  Dates.value == date.format(`YYYY-MM-${daySeven}`)) {
                  weekList.append(CheckBox.parentElement.parentElement)
              }
      
            
             
          })
         
        
      
      
          newProjectAddTask.style.display = "inline"
          newProjectTask.style.display = "none"
          newTaskList.style.display = "grid"
         
          TaskItem.append(leftPart)
          TaskItem.append(rightPart)
          newTaskList.append(TaskItem)
         
          newInputBox.value = ""
      })
            
      
      newCancelar.addEventListener("click", () =>{
          newProjectTask.style.display = "none"
          newProjectAddTask.style.display = "inline"
          newTaskList.style.display = "grid"
      })
      

    
 
    


})
cancelProjectButton.addEventListener("click" ,()=>{
    addProjectsPanel.style.display = "none"
    projectsname.value = ""
})


