let doc_button_on = true
let doc_button = document.getElementById('doc_button')
let doc_section = document.getElementById('doc_section')
let doc_section_btns= doc_section.children


doc_button.addEventListener("click",()=>{
if (doc_button_on) {
    doc_section.classList.remove('doc_deactive')
    doc_button_on=false
} else {
    doc_section.classList.add('doc_deactive')
    doc_button_on=true
}

})


const sheetLinks = [
  "https://docs.google.com/spreadsheets/d/1K6gkleEgJ8LLbI_63QvZ_unFiwMPxU4-c7NVu1Ou-U0/edit?usp=sharing",
  "https://docs.google.com/spreadsheets/d/1bEsIs145oz7E8TkUqt5b82VwJeErPH3ascTPFIlpc3A/edit?usp=sharing"
];



for (const key in doc_section_btns) {
    // if (!Object.hasOwn(object, key)) continue;
    
    const element = doc_section_btns[key];
    // console.log(element,key);

    element.addEventListener('click',()=>{
       window.open(`${sheetLinks[key]}`, "_blank")
        
    })
    
    
}


