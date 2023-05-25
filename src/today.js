const todayDiv = document.createElement("div")
todayDiv.setAttribute("id", "todayDiv")
const todayTitle = document.createElement("div")
const Today = document.createElement("h2")
Today.textContent = "Today"
Today.setAttribute("id", "Today")
todayTitle.setAttribute("id", "todayTitle")
todayTitle.append(Today)


const todayTaskList = document.createElement("div")
todayTaskList.setAttribute("id", "todayTaskList")
todayDiv.append(todayTitle)
todayDiv.append(todayTaskList)

 





export {todayDiv, todayTaskList}