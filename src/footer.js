const footer = document.createElement("footer")
const linkToGit = document.createElement("a")
const githubIcon = document.createElement("img")
githubIcon.src = "/imagens/icons8-github-30.png"
linkToGit.setAttribute("href", "https://github.com/gab9244")
linkToGit.append(githubIcon)
linkToGit.setAttribute("id", "linkToGit")
footer.textContent = `Copyright© gab9244 `
footer.append(linkToGit)
export {footer}