let appElement = document.getElementById("app-root");

if(appElement){
    startApp(appElement);
}

function startApp(parent){
    let spanElement = document.createElement("span");
    spanElement.style.backgroundColor = "red";
    spanElement.innerHTML = "SPAN HELLO WORLD";
    parent.append(spanElement);
}

//Handle change Theme

document.getElementById("themeButton").addEventListener("click", getTheme);

function getTheme(){
    let theme = window.localStorage.getItem("theme");
    theme = (theme !== "dark") ? "dark" : "light";
    let style = document.querySelector("link");
    style.href = "./assets/css/" + theme + ".css";
    window.localStorage.setItem("theme",theme);
}