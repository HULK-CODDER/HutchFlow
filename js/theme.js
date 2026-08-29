let theme = document.getElementById("theme")
let themes = ["green_theme",'gold_theme','purple_theme','orange_theme','dark_theme']
let count = 0
function getrandomnumber() {
    let r = Math.ceil(Math.random()*5)
    return r
    
}

theme.addEventListener("click",()=>{
    let i= getrandomnumber()
    document.body.className = "";
    document.body.classList.toggle(themes[i-1])
    console.log(i-1);
    
})