let show_main = document.getElementById("show_main")
let show_content = document.getElementById("show_content")
let show_cross = document.getElementById("show_cross")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")



// let textMagnifier1 = document.getElementById("text_magnifier");



decription1.addEventListener("dblclick",()=>{
    let innervalue = decription1.innerText
    show_main.classList.add("show_now_secton")
    show_content.innerText=`${innervalue}`
    show_content.style.animation=`textFade 2.5s linear`;
})


show_cross.addEventListener("click",()=>{
    show_main.classList.remove("show_now_secton");
    show_content.style.animation='';
    show_content.style.fontSize= "120%"
})

plus.addEventListener('click', () => {
    let currentSize = parseFloat(getComputedStyle(show_content).fontSize);

    show_content.style.fontSize = `${currentSize * 1.30}px`;
});
minus.addEventListener('click', () => {
    let currentSize = parseFloat(getComputedStyle(show_content).fontSize);

    show_content.style.fontSize = `${currentSize * 0.80}px`;
});
















// let zoom2 = 2.5;

// show_main.addEventListener("mousemove", function (e) {

//     const rect = show_content.getBoundingClientRect();

//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     // Show magnifier
//     textMagnifier.style.display = "block";

//     // Put magnifier around cursor
//     textMagnifier.style.left = `${e.clientX - 125}px`;
//     textMagnifier.style.top = `${e.clientY - 60}px`;

//     // Copy text
//     textMagnifier.innerText = show_content.innerText;

//     // Zoom the text
//     textMagnifier.style.fontSize = `${25 * zoom2}px`;

// });






// const magnifier1 = document.getElementById("text_magnifier");

// show_main.addEventListener("mousemove", (e) => {

//     const rect = show_content.getBoundingClientRect();

//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     magnifier1.style.display = "block";

//     magnifier1.style.left = `${e.clientX - 125}px`;
//     magnifier1.style.top = `${e.clientY - 60}px`;

//     magnifier1.innerText = show_content.innerText;

//     magnifier1.style.fontSize = "50px";

//     // Move enlarged text opposite to cursor
//     magnifier1.style.transform =
//         `translate(${-x}px, ${-y}px) scale(1)`;
// });




// const show_main = document.getElementById("show_main");
// const show_content = document.getElementById("show_content");
// const magnifier1 = document.getElementById("text_magnifier");

// const ZOOM_LEVEL = 2; // Magnification factor
// let clone = null;

// show_main.addEventListener("mouseenter", () => {
//     magnifier1.style.display = "block";

//     // Clone target HTML structure inside the lens
//     magnifier1.innerHTML = "";
//     clone = show_content.cloneNode(true);
//     clone.classList.add("magnified-clone");

//     // Fix clone size to parent width/height before scaling
//     clone.style.width = `${show_content.offsetWidth}px`;
//     clone.style.height = `${show_content.offsetHeight}px`;
//     clone.style.transform = `scale(${ZOOM_LEVEL})`;

//     magnifier1.appendChild(clone);
// });

// show_main.addEventListener("mouseleave", () => {
//     magnifier1.style.display = "none";
// });

// show_main.addEventListener("mousemove", (e) => {
//     const rect = show_content.getBoundingClientRect();

//     // Mouse coordinates relative to target element
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const lensWidth = magnifier1.offsetWidth;
//     const lensHeight = magnifier1.offsetHeight;

//     // Center lens over cursor
//     magnifier1.style.left = `${x - lensWidth / 3}px`;
//     magnifier1.style.top = `${y - lensHeight / 2}px`;

//     // Offset scaled clone inside lens to center focused area
//     if (clone) {
//         const cloneX = -x * ZOOM_LEVEL + lensWidth / 2;
//         const cloneY = -y * ZOOM_LEVEL + lensHeight / 2;
//         clone.style.left = `${cloneX}px`;
//         clone.style.top = `${cloneY}px`;
//     }
// });