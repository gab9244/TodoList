const Header = document.createElement("header")
const Logo = document.createElement("div")
Logo.setAttribute("id", "Logo")
const LogoImage = document.createElement("div")


LogoImage.setAttribute("id", "LogoImage")
const LogoText = document.createElement("h1")
LogoText.textContent = "To-Do List"

Logo.append(LogoImage, LogoText)

const hamburgerMenu = document.createElement("div")
hamburgerMenu.setAttribute("id", "hamburgerMenu")
const hamburgerImage = document.createElement("img")
hamburgerImage.src = "/imagens/cardapio.png"
hamburgerImage.style.width = "40px"
hamburgerMenu.append(hamburgerImage)

hamburgerMenu.addEventListener("click", ()=>{
    const nav = document.querySelector("nav")
    if( nav.classList.contains("active")) {
        nav.classList.remove("active")
    }
    else {
        nav.classList.add("active")
    }
   
})

Header.append(Logo,hamburgerMenu)

export {Header}