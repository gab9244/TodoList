const ThisWeekDiv = document.createElement("div")
ThisWeekDiv.setAttribute("id", "ThisWeekDiv")
const weekTitle = document.createElement("div")
weekTitle.setAttribute("id", "weekTitle")
const Week = document.createElement("h2")
Week.setAttribute("id", "Week")
weekTitle.append(Week)

const weekList = document.createElement("div")
weekList.setAttribute("id", "weekList")

Week.textContent = "ThisWeek"
ThisWeekDiv.append(weekTitle, weekList)

export {ThisWeekDiv , weekList}