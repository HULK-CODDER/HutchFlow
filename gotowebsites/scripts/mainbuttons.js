let main_buttons = document.getElementsByClassName('main_card_section')[0].children

main_buttons[0].addEventListener("click",()=>{
    window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step1/orders.html", "_self")
})
main_buttons[1].addEventListener("click",()=>{
    window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step1/paperwork.html", "_self")
})
main_buttons[2].addEventListener("click",()=>{
    window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step1/rv.html", "_self")
})
main_buttons[3].addEventListener("click",()=>{
    window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step1/email.html", "_self")
})


let logo = document.querySelector('.logo')

logo.addEventListener('click',()=>{
    window.open('https://hulk-codder.github.io/HutchFlow/index.html','_self')
})
