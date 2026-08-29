
let importx = document.getElementById("import")
let exportx = document.getElementById("export")
let customx = document.getElementById("custom")
let chips = document.getElementsByClassName('chips')[0].children
let heading1 = document.getElementById("heading1")
let decription1 = document.getElementById("decription1")
let expain = document.getElementById("explain")

importx.addEventListener("click", () => {
    importx.style.fontSize = "25px";
    importx.innerText = "IMPORT :Import containers arrive at the terminal loaded with cargo and are returned empty after unloading at the consignee’s location"
})
exportx.addEventListener("click", () => {
    exportx.style.fontSize = "25px";
    exportx.innerText = "EXPORT :Export containers are picked up empty from the terminal, loaded at the shipper’s location, and returned to the terminal for export shipment."
})
customx.addEventListener("click", () => {
    customx.style.fontSize = "25px";
    customx.innerText = "CUSTOMS :containers are picked up loaded from the terminal and returned loaded to the designated location "
})


importx.addEventListener("dblclick", () => {
    importx.style.fontSize = "40px";
    importx.innerText = "IMPORT"
})
exportx.addEventListener("dblclick", () => {
    exportx.style.fontSize = "40px";
    exportx.innerText = "EXPORT"
})
customx.addEventListener("dblclick", () => {
    customx.style.fontSize = "40px";
    customx.innerText = "CUSTOMS"
})

// for (const e of chips) {
//     e.addEventListener('click',()=>{
//         e.classList.toggle("active_button")
//     })
// }