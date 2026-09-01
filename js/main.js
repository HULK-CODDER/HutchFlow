window.addEventListener('scroll',()=>{
  if (window.scrollY!=0) {
    nav.classList.add("scrolled")
  }
  else{
    nav.classList.remove("scrolled")
  }
})
let nav_elements =document.getElementsByClassName("nav_list_element")[0].children[0].children;
let mainlogo = document.querySelector(".main_logo");
let mainimg = document.querySelector(".show_img");
let cross1 = document.querySelector(".cross1");
let cross2 = document.querySelector(".cross2");
let tutorial= document.querySelector(".tutorial");
let begin= document.getElementById("begin");
let orders1= document.getElementById("orders1");
let Appointment1= document.getElementById("Appointment1");
let dispatch1= document.getElementById("dispatch1");
let account1= document.getElementById("account1");
let orders2= document.getElementById("orders2");
let Appointment2= document.getElementById("Appointment2");
let dispatch2= document.getElementById("dispatch2");
let account2= document.getElementById("account2");
let orders11= document.getElementById("b1");
let Appointment11= document.getElementById("b2");
let dispatch11= document.getElementById("b3");
let account11= document.getElementById("b4");
let nav = document.getElementsByTagName("nav")[0];

let tutorial_show_screen =document.getElementsByClassName("tutorial_show_screen")[0];
let tutorial_nav= document.getElementsByClassName("nav_list_element")[0].children[0];

let launch_01= document.getElementById("launch_1")
let launch_02= document.getElementById("launch_2")
let launch_03= document.getElementById("launch_3")
let launch_04= document.getElementById("launch_4")

launch_01.addEventListener("click",()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step1/orders.html","_self")
})
launch_02.addEventListener("click",()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step2/step2.html","_self")
})
launch_03.addEventListener("click",()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step3/step3.html","_self")
})
launch_04.addEventListener("click",()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step4/step4.html","_self")
})


nav_elements[0].addEventListener("click",()=>{
    window.scrollTo({
  top: 0,
  behavior: "smooth"
});
  tutorial_show_screen.classList.remove("tutorial_show_screen_active")
})

nav_elements[1].addEventListener('click',()=>{
  tutorial_show_screen.classList.toggle("tutorial_show_screen_active")
  tutorial_nav.classList.toggle("color_exchange")
})
nav_elements[2].addEventListener('click',()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/gallary/gallary.html","_self")
})

nav_elements[3].addEventListener('click', () => {
  window.open("https://www.hutchtransportation.com/index.php","_self")
});
mainlogo.addEventListener('click', () => {
  mainimg.classList.add("show_img_now")
});

cross1.addEventListener('click', () => {
  mainimg.classList.remove("show_img_now")
});

// nav_elements[1].addEventListener('click', () => {
//   tutorial.classList.add("tutorial_show")
// });
begin.addEventListener('click', () => {
  tutorial.classList.add("tutorial_show")
});
cross2.addEventListener('click',()=>{
    tutorial.classList.remove("tutorial_show")

})

orders11.addEventListener('click',()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step1/orders.html","_self")
})
Appointment11.addEventListener('click',()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step2/step2.html","_self")
})
dispatch11.addEventListener('click',()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step3/step3.html","_self")
})
account11.addEventListener('click',()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step4/step4.html","_self")
})
orders2.addEventListener('click',()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step1/orders.html","_self")
})
Appointment2.addEventListener('click',()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step2/step2.html","_self")
})
dispatch2.addEventListener('click',()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step3/step3.html","_self")
})
account2.addEventListener('click',()=>{
  window.open("https://hulk-codder.github.io/HutchFlow/gotowebsites/step4/step4.html","_self")
})
