let showbox= document.querySelector(".show_box")
let showbox_button = document.getElementById("cross3")
let showbox_p =document.getElementById("showbox_p")
let showbox_html=``

let core_mission_cards=document.querySelector(".second_section_cards").children
let load_cycle_cards=document.querySelector(".load_cycle_cards").children

core_mission_cards[0].addEventListener('click',()=>{
    showbox.classList.add("show_now")
    showbox_html=` <b>Driver & Equipment Support : </b>We provide professional drivers along with chassis to ensure smooth and safe container transportation`
    showbox_p.innerHTML=showbox_html
})
core_mission_cards[1].addEventListener('click',()=>{
    showbox.classList.add("show_now")
    showbox_html=`<b>Container Pickup & Delivery : </b>We handle the complete process of picking up containers from terminals, delivering them to consignee locations, and returning empty containers as required`
    showbox_p.innerHTML=showbox_html
})
core_mission_cards[2].addEventListener('click',()=>{
    showbox.classList.add("show_now")
    showbox_html=`<b>Dispatch Coordination : </b>We manage dispatch operations by assigning loads, tracking container movements, and ensuring timely updates between drivers, terminals, and customers`
    showbox_p.innerHTML=showbox_html
})

load_cycle_cards[0].addEventListener('click',()=>{
    showbox.classList.add("show_now")
    showbox_html=`<b>Origin & Shipping : </b>The container is loaded at the shipper’s facility. Through coordination with international logistics partners, it is transported via shipping lines to the destination country.`
    showbox_p.innerHTML=showbox_html
})
load_cycle_cards[1].addEventListener('click',()=>{
    showbox.classList.add("show_now")
    showbox_html=`  <b>Import & Supply : </b>Once imported, the container is transferred to rail networks and distributed across multiple regions. In Canada, containers are routed to different provinces based on final delivery locations.`
    showbox_p.innerHTML=showbox_html
})
load_cycle_cards[2].addEventListener('click',()=>{
    showbox.classList.add("show_now")
    showbox_html=`  <b>Arrival at Terminal : </b>In our operating region (Ontario), containers arrive at rail terminals where they are made available for pickup.`
    showbox_p.innerHTML=showbox_html
})
load_cycle_cards[3].addEventListener('click',()=>{
    showbox.classList.add("show_now")
    showbox_html=` <b>Pickup & Delivery : </b>We pick up the container from the terminal and deliver it to the consignee’s location safely and on time.`
    showbox_p.innerHTML=showbox_html
})
load_cycle_cards[4].addEventListener('click',()=>{
    showbox.classList.add("show_now")
    showbox_html=`<b>Empty Return : </b>After unloading, the empty container is returned to the designated terminal or yard before the shipping line’s detention deadline.`
    showbox_p.innerHTML=showbox_html
})

orders1.addEventListener('click',()=>{
    showbox.classList.add("show_now")
    showbox_html=`<b>Step 1: Order Fulfillment
  : </b>Orders are entered into the system, verified for accuracy, and prepared for processing and dispatch.`
    showbox_p.innerHTML=showbox_html
})
Appointment1.addEventListener('click',()=>{
    showbox.classList.add("show_now")
    showbox_html=`<b>Step 2: Appointment Scheduling
  : </b>Delivery appointments are coordinated with the consignee to ensure a convenient and confirmed time slot.`
    showbox_p.innerHTML=showbox_html
})
dispatch1.addEventListener('click',()=>{
    showbox.classList.add("show_now")
    showbox_html=`<b>Step 3: Driver Dispatch
  : </b>Drivers are assigned based on availability and location, and dispatched with complete delivery instructions.`
    showbox_p.innerHTML=showbox_html
})
account1.addEventListener('click',()=>{
    showbox.classList.add("show_now")
    showbox_html=`<b>Step 4: Accounting & Invoicing
  : </b>Invoices are generated, billing is processed, and all payment transactions are accurately recorded and tracked.`
    showbox_p.innerHTML=showbox_html
})











showbox_button.addEventListener('click',()=>{
 showbox.classList.remove("show_now")
})