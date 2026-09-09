let fhome = document.getElementById('fhome')
let ftutorial = document.getElementById('ftutorial')
let fgallary = document.getElementById('fgallary')
let ffaq = document.getElementById('ffaq')
let fresource = document.getElementById('fresource')
let fcontacts = document.getElementById('fcontacts')
let fhutch_logo = document.getElementById('fhutch_logo')



fhome.addEventListener("click",()=>{
    window.scrollTo({
  top: 0,
  behavior: "smooth"
});
  tutorial_show_screen.classList.remove("tutorial_show_screen_active")
})


ftutorial.addEventListener('click',()=>{
  tutorial_show_screen.classList.toggle("tutorial_show_screen_active")
  tutorial_nav.classList.toggle("color_exchange")
})

fgallary.addEventListener('click',()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/gallary/gallary.html","_self")
})

ffaq.addEventListener("click", () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight * 0.20,
        behavior: "smooth"
    });

    tutorial_show_screen.classList.remove("tutorial_show_screen_active");
});

fresource.addEventListener('click',()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/notes/orders.html","_self")
})

fcontacts.addEventListener('click', () => {
  window.open("https://www.hutchtransportation.com/index.php","_self")
});
fhutch_logo.addEventListener('click', () => {
  mainimg.classList.add("show_img_now")
});
