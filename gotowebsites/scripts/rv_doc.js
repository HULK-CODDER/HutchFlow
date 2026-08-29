let doc_button_on = true
let doc_button = document.getElementById('doc_button')
let doc_section = document.getElementById('doc_section')
let doc_section_btns= doc_section.children


doc_button.addEventListener("click",()=>{
    window.open("https://docs.google.com/spreadsheets/d/1EkL62jFl-ccyPaVb78A_s8ntFzv-2NsUPrzVVwyb8hw/edit?usp=sharing", "_blank")
})



// doc_button.addEventListener("click",()=>{
// if (doc_button_on) {
//     doc_section.classList.remove('doc_deactive')
//     doc_button_on=false
// } else {
//     doc_section.classList.add('doc_deactive')
//     doc_button_on=true
// }

// })


// const sheetLinks = [
//   "https://docs.google.com/spreadsheets/d/1EkL62jFl-ccyPaVb78A_s8ntFzv-2NsUPrzVVwyb8hw/edit?usp=sharing"
// ];



// for (const key in doc_section_btns) {
//     // if (!Object.hasOwn(object, key)) continue;
    
//     const element = doc_section_btns[key];
//     // console.log(element,key);

//     element.addEventListener('click',()=>{
//        window.open(`${sheetLinks[key]}`, "_blank")
        
//     })
    
    
// }


