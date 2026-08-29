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
  "https://docs.google.com/spreadsheets/d/1JP93BxzMYsn_2LZQkUAws2cQ6snAQQfDFgih9wGWsb4/edit?usp=sharing",
  "https://docs.google.com/spreadsheets/d/1tJsPpMn4ZWI-03zNJzMVTtvSdqvF2ljtYHgDg7cXpTw/edit?usp=sharing",
  "https://docs.google.com/spreadsheets/d/1E9ZAPq2Zjr8BgvCBk3gZZpa4lAivj5KU4l3cAx22xRk/edit?usp=sharing",
  "https://docs.google.com/spreadsheets/d/1kbRawCRBXhIzfgvjWuzu75Lpslfmuk5HmIfAQyyPv_0/edit?usp=sharing",
  "https://docs.google.com/spreadsheets/d/1sWKCg7-3vtKZ3kHkrrR1XB_daXPvXde1Efxh3V9yOCI/edit?usp=sharing",
  "https://docs.google.com/spreadsheets/d/1n9Iq7Gl0TQanw-FTmEwPYAFzGHPfr2hCNAzQ50t_zzQ/edit?usp=sharing",
  "https://docs.google.com/spreadsheets/d/1kUb98B6zDuJE4oIx1iVt8OBz_bPPLGRd_lEfSTYlh_4/edit?usp=sharing",
  "https://docs.google.com/spreadsheets/d/1rmqlfu-F6Hgq7ifI7CJIc9RdifA29h5y0ArZhDPSpPM/edit?usp=sharing",
  "https://docs.google.com/spreadsheets/d/1tgywDg1N7fHwBuv1ZQa3CGlzGJJwbMIXO9Z-rg9Pf2E/edit?usp=sharing",
  "https://docs.google.com/spreadsheets/d/1A_QwDjr_xpQnXilOlNFA8C3mE68N8O_iZsRLmnF1ZvA/edit?usp=sharing"
];



for (const key in doc_section_btns) {
    // if (!Object.hasOwn(object, key)) continue;
    
    const element = doc_section_btns[key];
    // console.log(element,key);

    element.addEventListener('click',()=>{
       window.open(`${sheetLinks[key]}`, "_blank")
        
    })
    
    
}


