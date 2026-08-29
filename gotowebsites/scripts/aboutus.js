let aboutus = document.getElementById("aboutus")
let extras = document.getElementById("extras")
let start_basic = document.getElementById("start_basic")
let contaienr = document.getElementById("contaienr")
let important_things = document.getElementById('important_things')
let important_keyowrds = document.getElementById('import_keywords')
let start_order = document.getElementById('start_order')
let abnormals = document.getElementById('abnormals')
let img_show = document.getElementById('img_show')
let main_img1 = document.getElementsByClassName('show_img')[0]
let crossimg = document.getElementById('crossimg')
// let chips = document.getElementsByClassName('chips')[0].children
let clicked = true
aboutus.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        aboutus.classList.add("active_button")
        heading1.innerText = "about us"
        decription1.innerText = `We are Hutch Transportation, providing reliable trucks and equipment for the timely transportation of containers.
        we specialize in safe and efficient container movement, ensuring smooth pickup and delivery operations while meeting customer scheduling requirements.`
        expain.innerHTML = ` <div class="about_pic"><img src="../images/hutch.png" alt=""></div>`

    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})
start_order.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        start_order.classList.add("active_button")
        heading1.innerText = "Standard Order Creation Process"
        decription1.innerText = `BASIC ORDER
                    DATA ENTERING

                    1. CHECK THE MAIL FOR THE ORDER
                    2. PRINT THE MAIL OR ATTACHMENT WHERE EVER THE ORDER DETAILS ARE GIVEN.
                    3. TRACE THE CONTAINER IN TERMINAL SITE WHICH IS GIVEN .AND WRITE IT DOWN ON PRINTTED ORDER
                    4. SAVE THE ORDER IN TERMINAL DISPATCH INDIAN NEW ORDER SECTION.
                    5. HIGHLIGHT THE REQUIRED *10 DETAILS IN ORDER
                    6. FILL ALL THE DETAILS ONE BY ONE IN DISPATCH PANDA
                    7. SUMBIT TO SAVE .
                    8. WRITE DOWN THE SHIPMENT NUMBER OF SAVED ORDER
                    9. RECHEKH ALL THE DETAILS YOU FILLED
                    10. WRITE DOWN THE ORDER NUMBER [SHIP. NO.] CONT. NO. ,TRACING 
                               MY ADDITION
                    11. COMMUDITY {TO KNOW THE DG/ REEFER}

                        {IF GROUNDED CHECK PLACE OF IT AND CHANGE TERMINAL ACC TO IT}
                        (CHANGE IT IN STARTING TERMINAL TYPE)
                        [NOT IN DROP AND MOVE ]
                        [NEED TO ADD RV TOO][SAME DAY]`
        expain.innerHTML = `<div class="explain_card">
                    <img src="../images/important_things/1.png" alt="">
                      <div class="set">
                        <h1>order from mail</h1>
                        <p>• Open and review the full email carefully.<br>
• Verify container and reference numbers with the delivery order.<br>
• Check off-hire instructions.<br>
• Confirm whether there are any DG indications.</p>
                    </div>
                </div>
               <div class="explain_card">
                    <img src="../images/important_things/2.png" alt="">
                      <div class="set">
                        <h1>print the order</h1>
                        <p>• Print the information provided in the email.<br>
• The order may be attached or written directly in the email.<br>
• Check both and print the information accordingly. </p>
                    </div>
                </div>
                <div class="explain_card">
                    <img src="../images/important_things/3.png" alt="">
                      <div class="set">
                        <h1>trace the container </h1>
                        <p>• Check the container number in the delivery order.<br>
• Visit the terminal [CN/CP] website mentioned in the delivery order.<br>
• Trace the container there.<br>
• Write the tracing details on the printed paper.</p>
                    </div>
                </div>
                 <div class="explain_card">
                    <img src="../images/important_things/4.png" alt="">
                      <div class="set">
                        <h1>SAVE THE ORDER</h1>
                        <p>• After tracing, save the container number on the terminal website.<br>
• Use the India Dispatch New Order folder for both terminals.<br>
• Make sure the container is saved on the site. </p>
                    </div>
                </div>
                 <div class="explain_card">
                    <img src="../images/important_things/5.png" alt="">
                      <div class="set">
                        <h1>HIGHLIGHT  the order</h1>
                        <p>• Highlight all key information required.<br>
• Make sure to check off-hire instructions.<br>
• Check the commodity for any DG  </p>
                    </div>
                </div>
                 <div class="explain_card">
                    <img src="../images/important_things/6.png" alt="">
                      <div class="set">
                        <h1>enter the data in dispatch panda</h1>
                        <p>• Fill all order details in Dispatch Panda.<br>
• Review line by line to avoid missing anything.<br>
• Confirm container type and size through tracing.<br>
• Report any discrepancies to the client for confirmation. </p>
                    </div>
                </div>
                 <div class="explain_card">
                    <img src="../images/important_things/7.png" alt="">
                      <div class="set">
                        <h1>SUMBIT TO SAVE</h1>
                        <p>• Make sure to click Submit to save the details.<br>
• Any order changes or modifications will only be saved after clicking Submit. </p>
                    </div>
                </div>
                 <div class="explain_card">
                    <img src="../images/important_things/8.png" alt="">
                      <div class="set">
                        <h1>write down the shipment number</h1>
                        <p>• Write the shipment number on the printed order.</p>
                    </div>
                </div>
                 <div class="explain_card">
                    <img src="../images/important_things/9.png" alt="">
                      <div class="set">
                        <h1>RECHEKH the details</h1>
                        <p>• Recheck all filled details carefully.<br>
• Make sure to add notes for any discrepancies. </p>
                    </div>
                </div>
                 <div class="explain_card">
                    <img src="../images/important_things/10.png" alt="">
                      <div class="set">
                        <h1>write down your order details</h1>
                        <p>• Write the filled order details in the record book.<br>
• Include the following:<br><br>

SHIP. NO.<br>
CONT. NO.<br>
Container Tracing Details </p>
                    </div>
                </div>
                 <div class="explain_card">
                    <img src="../images/important_things/11.png" alt="">
                      <div class="set">
                        <h1>my addition : commudity check</h1>
                        <p>• Always check the commodity on the delivery order.<br>
• This helps identify if the shipment is DG.<br>
• It also helps confirm if it is a reefer container.<br>
• Temperature details may sometimes be mentioned in the commodity description.</p>
                    </div>
                </div>
                 <div class="explain_card">
                    <img src="../images/important_things/12.png" alt="">
                      <div class="set">
                        <h1>special case :: grounded </h1>
                        <p>• Make sure to forward the order to the Appointment Team.<br>
• If the order is from CN, attach the RV with it.<br>
• If there is a customs hold, add a red note mentioning it.</p>
                    </div>
                </div>
                
                `
        //  let imgs=expain.getElementsByTagName('img')
        // for (const i of imgs) {
        //     i.parentElement.addEventListener("click",()=>{
        //         let src = i.src
        //         console.log(i.src);

        //         img_show.src= src
        //         main_img1.classList.add('show_img_now');
        //     })

        // }
    } else {
        for (const e of chips) {
            e.classList.remove("active_button")
        }
        clicked = true
    }
})
contaienr.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")
        }
        clicked = false;
        contaienr.classList.add("active_button")
        heading1.innerText = "containers"
        decription1.innerText = `Containers are mainly divided into three major types based on the cargo they carry:  


Dry Containers  
These are the most commonly used containers for general cargo such as boxes, pallets, machinery, furniture, textiles, and other dry goods.  
  
Reefer Containers  
Reefer containers are temperature-controlled containers used for transporting frozen or chilled cargo such as food products, fruits, vegetables, meat, dairy items, and pharmaceuticals.  
  
Special Containers  
These containers are designed for special types of cargo. Examples include:  
  
Open Top Containers – used for oversized cargo loaded from the top  
Flat Rack Containers – used for heavy machinery and project cargo  
Tank Containers – used for liquid cargo  
  
Containers are also classified by their height into two categories:  
  
Standard Containers – Height of 8'6" ft  
High Cube Containers – Height of 9'6" ft, providing extra cargo space  
  
In addition, containers are divided by their length sizes, such as:  
  
20 FT Container  
40 FT Container  
45 FT Container  
53 FT Container  
  
Each container size and type is selected according to the cargo requirement, weight, volume, and transportation needs.  `
        expain.innerHTML = `  <div id="explain_crads">
                
                <div id="explain_crads">
                <div class="explain_card">
                    <img src="../images/kc1.png" alt="">
                      <div class="set">
                        <h1>20ft standard</h1>
                        <p>CN: KC1 <br> CP: dry cube 8x6x20 </p>
                    </div>
                </div>
                <div class="explain_card">
                    <img src="../images/kc2.png" alt="">
                      <div class="set">
                        <h1>40ft standard</h1>
                        <p>CN: KC2 <br> CP: dry cube 8x6x40 </p>
                    </div>
                </div>
                <div class="explain_card">
                    <img src="../images/kc4.png" alt="">
                    <div class="set">

                        <h1>40ft HIGH CUBE </h1>
                        <p>CN: KC4 <br> CP: dry high cube 9x6x40 </p>
                    </div>
                
                </div>
                <div class="explain_card">
                    <img src="../images/kr4.png" alt="">
                    <div class="set">

                        <h1>40ft  reefer</h1>
                        <p>CN: KR4 <br> CP: electric reefer high cube  9x6x40 </p>
                    </div>
                </div>
                <div class="explain_card">
                    <img src="../images/ko4.png" alt="">
                    <div class="set">

                        <h1>40ft  open top</h1>
                        <p>CN: KO4 <br> CP: open top high cube  9x6x40 </p>
                    </div>
        </div>
        <div class="explain_card">
    <img src="../images/kc5.png" alt="Standard 20ft Dry">
    <div class="set">
        <h1>45ft Standard Dry</h1>
        <p>CN: KC5 <br> CP: standard dry 9x6x45 </p>
    </div>
</div>

<div class="explain_card">
    <img src="../images/kc7.png" alt="53ft Dry">
    <div class="set">
        <h1>high cube 53ft  Dry</h1>
        <p>CN: KC7 <br> CP: high cube 9x6x53 </p>
    </div>
</div>

<div class="explain_card">
    <img src="../images/ko2.png" alt="40ft Open Top">
    <div class="set">
        <h1>20ft Open Top</h1>
        <p>CN: KO2 <br> CP: open top standard 8x6x40 </p>
    </div>
</div>`
        let imgs = expain.getElementsByTagName('img')
        for (const i of imgs) {
            i.parentElement.addEventListener("click", () => {
                let src = i.src
                console.log(i.src);

                img_show.src = src
                main_img1.classList.add('show_img_now');
            })

        }



    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})



start_basic.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        start_basic.classList.add("active_button")
        heading1.innerText = "lets begin"
        decription1.innerHTML = `RAILWAYS<br>
<br>

CN = CANADIAN NATIONAL RAILWAY<br>
TERMINALS: MALPORT / MISC / BRAMPTON<br><br>

CP = CANADIAN PACIFIC RAILWAY<br>
TERMINAL: VAUGHAN<br><br>

--------------------------------------------------<br>
<br>

YARDS<br>
<br>

HUTCH = MAIN YARD<br>
KIMBLE = KIMBLE STREET YARD<br><br>

--------------------------------------------------<br>
<br>

CONTAINER TYPES<br>
<br>

KC1 = 20FT STD = 8'6" = 24,000 KG<br>
KC2 = 40FT STD = 8'6" = 27,000 KG<br>
KC4 = 40FT HC = 9'6" = 27,000 KG<br>
KC5 = 45FT HC = 9'6" = 27,000 KG<br>
KR4 = 40FT REEFER / HC = 27,000 KG<br>
KC7 = 53FT (RARE) = 27,000 KG<br>
KC8 = 20FT HC = 9'6" = 27,000 KG<br>
KO4 = 40FT OPEN TOP = 27,000 KG<br><br>

STD = STANDARD<br>
HC = HIGH CUBE<br><br>

--------------------------------------------------<br>
<br>

CONTAINER INFO<br>
<br>

VALID CONTAINER FORMAT:<br>
4 LETTERS + 7 NUMBERS = 11 CHARACTERS<br><br>

EXAMPLE:<br>
TCNU6800095<br><br>

PICKUP NUMBER:<br>
6 DIGITS ONLY<br><br>

--------------------------------------------------<br>
<br>

REEFER NOTES<br>
<br>

KR4 = REEFER / TEMP CONTROLLED<br>
CHECK FOR:<br>
FROZEN / CHILLED / TEMP CONTROLLED CARGO<br><br>

--------------------------------------------------<br>
<br>

DG CHECK<br>
<br>

ALWAYS CHECK:<br>
COMMODITY<br>
DO REMARKS<br>
DG STICKER<br>
UN NUMBER<br><br>

COMMON DG:<br>
CHEMICALS<br>
BATTERIES<br>
FLAMMABLES<br>
CORROSIVES<br>
AEROSOLS<br><br>`
        expain.innerHTML = `<div class="basic_start" >RAILWAYS<br>
<br>

CN — CANADIAN NATIONAL RAILWAY<br>
Commonly called CN<br>
Main terminals:<br>
• MALPORT<br>
• MISC (MISSISSAUGA INTERMODAL)<br>
• BRAMPTON INTERMODAL<br> <br>
CP — CANADIAN PACIFIC RAILWAY<br>
Commonly called CP<br>
Main terminal:<br>
• VAUGHAN INTERMODAL<br> <br>

--------------------------------------------------<br>
<br>
COMPANY YARDS<br>
<br>

HUTCH YARD<br>
Main company yard<br>
Used for container parking and dispatch<br> <br>
KIMBLE YARD<br>
Located on KIMBLE STREET<br>
Secondary container yard<br> <br>

--------------------------------------------------<br>
<br>
CONTAINER TYPES<br>
<br>
KC1<br>

20FT STANDARD CONTAINER<br>
HEIGHT: 8’6”<br>
WEIGHT LIMIT: 24,000 KG<br> <br>

KC2<br>

40FT STANDARD CONTAINER<br>
HEIGHT: 8’6”<br>
WEIGHT LIMIT: 27,000 KG<br> <br>

KC4<br>

40FT HIGH CUBE CONTAINER<br>
HEIGHT: 9’6”<br>
WEIGHT LIMIT: 27,000 KG<br> <br>

KC5<br>

45FT HIGH CUBE CONTAINER<br>
HEIGHT: 9’6”<br>
WEIGHT LIMIT: 27,000 KG<br> <br>

KR4<br>

40FT REEFER / HIGH CUBE CONTAINER<br>
HEIGHT: 9’6”<br>
REFRIGERATED CONTAINER<br>
CAN SOMETIMES BE STANDARD TOO<br>
WEIGHT LIMIT: 27,000 KG<br> <br>

KC7<br>

53FT CONTAINER<br>
RARE CASE<br>
WEIGHT LIMIT: 27,000 KG<br> <br>

KC8<br>

20FT HIGH CUBE CONTAINER<br>
HEIGHT: 9’6”<br>
WEIGHT LIMIT: 27,000 KG<br> <br>

KO4<br>

40FT OPEN TOP CONTAINER<br>
USED FOR OVERSIZED CARGO<br>
WEIGHT LIMIT: 27,000 KG<br> <br>

--------------------------------------------------<br>
<br>
IMPORTANT CONTAINER INFORMATION<br>
<br>

A valid container number always contains:<br>
• 4 alphabets at the beginning<br>
• 7 numbers at the end<br>
• Total = 11 characters<br> <br>

EXAMPLES:<br>

TCNU6800095<br>
MSCU1234567<br> <br>

--------------------------------------------------<br>
<br>
PICKUP NUMBER INFORMATION<br>
<br>

Pickup number always contains:<br>
• 6 digits only<br>
• No alphabets<br>
• Integers only<br> <br>

EXAMPLES:<br>

456789<br>
908712<br> <br>

--------------------------------------------------<br>
<br>
REEFER CONTAINER NOTES<br>
<br>

Usually identified by code KR4<br>
Reefer containers are temperature controlled<br>
Commodity may mention:<br>
• Frozen<br>
• Chilled<br>
• Temperature controlled cargo<br> <br>

--------------------------------------------------<br>
<br>
DG (DANGEROUS GOODS) CHECK<br>
<br>
Always check:<br>

Commodity description<br>
Delivery order remarks<br>
DG sticker/placard on container<br>
UN number if mentioned<br> <br>

Common DG commodities include:<br>

Chemicals<br>
Batteries<br>
Flammable liquids<br>
Corrosive materials<br>
Aerosols<br> <br>

--------------------------------------------------<br>
<br>
IMPORTANT OPERATIONS CHECKLIST<br>
<br>
Before processing any order:<br>
<br>

Verify container number<br>
Verify pickup number<br>
Check railway terminal (CN or CP)<br>
Check container type<br>
Confirm reefer or standard container<br>
Check DG status<br>
Check customs hold<br>
Review rail billing instructions<br>
Attach RV for CN shipments if required<br>
Add important notes in red if necessary<br></div>`
        let eplain = document.getElementsByClassName("basic_start")[0]
        eplain.addEventListener("dblclick", () => {
            let innervalue = eplain.innerText
            show_main.classList.add("show_now_secton")
            show_content.innerText = `${innervalue}`
            show_content.style.animation = `textFade 2.5s linear`;
        })
        // document.getElementsByClassName("basic_start")[0].addEventListener("dblclick")
    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})
important_things.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        important_things.classList.add("active_button")
        heading1.innerText = `important things in order`
        decription1.innerText = `
                        1. CLIENT NAME {CAN BE DIFFERENT FROM WRITTER ONE}
                        2. PICKUP LOCATION {USUALLY TERMINAL}
                        3. SHIPLINE/CARRIER
                        4. CONTAINER NUMBER {11 TOKENS}
                        5. PICKUP NUMBER {6 INTEGERS}
                        6. REFERENCE/FILE NUMBER {FEW ORDER DOESN'T REQUIRED IT }
                        7. DELIVERY ADDRESSS {SIMMILER AND DIFFERENT IN OUR SYSYTEM}
                        8. CONTAINER TYPE/SIZE
                        9. CONTAINER WEIGHT {CAN RECHANGE TO ROUND IT }
                        10. NOTE/INSTRUCTION {MOST HUSTLE GIVVER/ EXCEPTION}
                                MY ADDITION
                        11. COMMUDITY {TO KNOW THE DG/ REEFER}`
        expain.innerHTML = ` <div  class="about_pic"><img id="img_tag" src="../images/highlighted_order.png" alt> <button id="picchange">➤</button></div>`
        let picchange = document.getElementById('picchange')
        let img_tag = document.getElementById('img_tag') 
        const img_srcs=["../images/highlighted_order.png","../images/highlighted_order2.png","../images/highlighted_order3.png"]
        let pic_count= 1
        let src_sh =img_tag.src
        picchange.addEventListener('click',()=>{
            
            img_tag.src=img_srcs[pic_count]
            
           src_sh =img_tag.src
            pic_count++
            if (pic_count>2) {
                pic_count=0
            }
        })
        
          img_tag.addEventListener("click", () => {
                img_show.src = src_sh
                main_img1.classList.add('show_img_now');
                
         })
        //  let imgs = expain.getElementsByTagName('img')
        
        // for (const i of imgs) {
        //     i.parentElement.addEventListener("click", () => {
        //         let src = i.src
        //         console.log(i.src);

        //         img_show.src = src
        //         main_img1.classList.add('show_img_now');
        //     })

        // }

    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})
important_keyowrds.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        important_keyowrds.classList.add("active_button")
        heading1.innerText = "Container & Logistics Terms"
        decription1.innerHTML = `IN BOND<br>
Container is under customs hold in CN.<br><br>

CANADA CUSTOMS (CC)<br>
Container is in customs hold at CP.<br><br>

MULTIPLE<br>
Container is held by multiple parties<br>
(e.g. shipping line, customs, terminal, etc.).<br><br>

ETA (Estimated Time of Arrival)<br>
Expected time for the container to arrive at the determined destination.<br><br>

AT DESTINATION<br>
Container has arrived at the location and is about to be grounded.<br><br>

PAD PLACEMENT<br>
Container has arrived at the determined destination but has not been grounded yet.<br><br>

GROUNDED<br>
Container is ready for pickup from the terminal.<br><br>

LFD (Last Free Day)<br>
Last free day after grounding.<br>
Storage charges will apply after this date.<br><br>

PREPULL<br>
Taking the container out before storage charges begin.<br><br>

RV (Reservation)<br>
Booking number used to reserve time for terminal entry and exit.<br><br>

DG (Dangerous Goods)<br>
DG containers must always be confirmed with the client.<br><br>

STOP SIGN (CN)<br>
Need to recheck with the client.<br>
Can occur for multiple reasons.<br><br>

REMANIFEST<br>
Container/customs status has been cleared or updated.<br><br>

TO FREIGHT FORWARDER<br>
Shipment has been transferred to the freight forwarder.<br><br>

EMPTY DEREMED<br>
Usually means the system is showing an old or incorrect status.<br><br>

DEREMED / NOTIFIED / LOAD ON CHASSIS<br>
Usually indicates the container is grounded.<br><br>

CP TRACING IDENTIFICATIONS
GROUNDED {Waiting for Delivery}
AT DESTINATION {Arrived Inbound Train}
PAD PLACED {Placed Inbound Train}
NORMAL {IN TRANS} 

SOC (Shipper Owned Container)<br>
Container owned by the shipper instead of the shipping line.<br>`
        expain.innerHTML = `<div class="explain_card">
                    <img src="../images/important_things/111.png" alt="">
                      <div class="set">
                        <h1>custom hold</h1>
                        <p>• CN : IN BOND<br>
• CP : CANADA CUSTOMS || MULTIPLE.<br>
•Container is in customs hold <br>
• Customs are like a security check for containers and shipments entering or leaving the country.</p>
                    </div>
                </div>
                <div class="explain_card">
                    <img src="../images/important_things/122.png" alt="">
                      <div class="set">
                        <h1>ETA : Estimate time of arrival</h1>
                        <p>• its the time and date when a container might come to destination.<br>
• its not 100% accurate.<br>
•Container can come little bit early or late too. <br></p>
                    </div>
                </div>
                   <div class="explain_card">
                    <img src="../images/important_things/33.png" alt="">
                      <div class="set">
                        <h1>AT DESTINATION || PAD PLACEMENT</h1>
                        <p>• it is the state of a container before grounding.<br>
• at destination : means container is at destined terminal .<br>
• pad placement: means container is unloaded from rail but not grounded yet <br>
• after pad placement next situtaion of a container is to be grounded</p>
                    </div>
                </div>
                <div class="explain_card">
                    <img src="../images/important_things/44.png" alt="">
                      <div class="set">
                        <h1>grounded </h1>
                        <p>•it means container is good to pickup now<br>
• but it is only gopod by terminal.<br>
•Container can stil be paused by shipline or custom hold<br>
• and sometimes custom exams.</p>
                    </div>
                 </div>
                   <div class="explain_card">
                    <img src="../images/important_things/55.png" alt="">
                      <div class="set">
                        <h1>STD & LFD </h1>
                        <p>• STD : STORAGE DATE<br>
• its the date of storage charges occuring in terminal on container.<br>
• LFD: LAST FREE DAY<br>
• it is day before storage charges occur <br>
• EXAMPLE: if STD is 15 AUG then LFD is 15 AUG</p>
                    </div> </div>
                      <div class="explain_card">
                    <img src="../images/important_things/66.png" alt="">
                      <div class="set">
                        <h1>Prepull</h1>
                        <p>• we pick container from terminal before storage date and bring back to our yard<br>
sometimes we don't have appointments for delivery or appointments are late <br>
 then we usually do prepull <br> </div>
</p>
                    </div>
                         <div id = "rv_click_only" class=" explain_card">
                    <img src="../images/important_things/77.png" alt="">
                      <div class="set">
                        <h1>RV'S : RESERVATIONS</h1>
                        <p>• rv's are reservations in terminal <br>
its like a appointment which for our drivers to enter<br>
drivers can only enters in that given time  <br>
•rv systtem is madded to control; traffic in terminal so they can work efficiently.
• you can understand more about this by going to rv page .<br>
            >>>> click me <<<<
</p>
                    </div> </div>
                       <div class="explain_card">
                    <img src="../images/important_things/88.png" alt="">
                      <div class="set">
                        <h1>DG : DANGEROUS GOODS</h1>
                        <p>• some containers contaione dangerous goods<br>
• these goods need special paperwork to be transported <br>
 • we also need these paperworks and also we charge extra for DG shipments<br>
</p>
                    </div> </div>
                        <div class="explain_card">
                    <img src="../images/important_things/99.png" alt="">
                      <div class="set">
                        <h1>STOP SIGN</h1>
                        <p>• only occurs in CN tracing<br>
• it has two major reasons  <br>
 • reason 1 : it is a off hire container<br>
  • reason 2 : custom wanted to examine this container physically before clearing it to import pickup <br>
</p> </div>
                    </div> 
                      <div class="explain_card">
                    <img src="../images/important_things/1010.png" alt="">
                      <div class="set">
                        <h1>REMANIFEST || CUSTOM CLEAR</h1>
                        <p>• both of these mean custom is cleared<br>
• only occur in CN tracing <br>
</p> </div>
                    </div> 
                        <div class="explain_card">
                    <img src="../images/important_things/1111.png" alt="">
                      <div class="set">
                        <h1>empty deremed</h1>
                        <p>• it means terminal have its old tracing status <br>
• both in CP and CN tracing <br>
</p> </div>
                    </div> 
                           <div class="explain_card">
                    <img src="../images/important_things/1212.png" alt="">
                      <div class="set">
                        <h1>DEREAMED||NOTIFIED||LOAD ON CHASSIS</h1>
                        <p>• it means container is grounded <br>
•  CN tracing <br>
</p> </div></div> 
          <div class="explain_card">
                    <img src="../images/important_things/1414.png" alt="">
                      <div class="set">
                        <h1>CP TRACING IDENTIFICATIONS</h1>
                        <p>• Waiting for Delivery -- GROUNDED  <br>
                        •  Arrived Inbound Train -- AT DESTINATION  <br>
•  Placed Inbound Train -- PAD PLACED <br>
•  IN TRANS  -- NORMAL  <br>
</p> </div></div> 
                         <div class="explain_card">
                    <img src="../images/important_things/1313.png" alt="">
                      <div class="set">
                        <h1>SOC||OFF HIRE</h1>
                        <p>• if any one of this come to us that mean its empty return locatiuon is predecided <br>
•  SOC : SHIPPEER OWN <br>
•  OFF HIRE : means container is no longer in use for export <br>
</p> </div>
                    </div> 
                `
        document.getElementById("rv_click_only").addEventListener("dblclick", () => {
            window.open("file:///E:/temporary/FILE%20TO%20TEXT/HUTCH%20TURORIAL%20NEW/gotowebsites/step1/rv.html","_self")
        })
    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})


crossimg.addEventListener("click", () => {
    // console.log("random");
    // window.location.reload();
   document.getElementsByTagName('html')[0].scrollTo(0, 0);
    
    
    main_img1.classList.remove('show_img_now')
})

abnormals.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        abnormals.classList.add("active_button")
        heading1.innerText = 'Abnormals Loads'
        decription1.innerText = `1. Reefer Container Protocol
Data Entry & Verification Steps
Container Type Selection: Always select REEFER-HC-40 in the system.

Temperature Verification: Verify and fill in the required temperature [+ or -].

Genset Requirement: Verify if a Genset is required.

Double-Check Rule: Both Temperature and Genset details are required. If either or both are missing, you must immediately email the client to confirm.

Genset Billing & Pricing
CH. & SEAFRIGO: Charge $230

All Other Customers: Charge $275

Mandatory System Notes
You must log notes in three locations: Web Note, Driver Note, and Red Tail.

Format: GENSET IS REQUIRED, TEMP: [Insert Temperature]

Special Customer Exceptions
Invader Storage: Do NOT send a confirmation email for the Genset. It is always required for this client.

All Gold: A Genset is always required, and the temperature must always be set between 18°C and 20°C.

2. Dangerous Goods (DG) Container Protocol
Documentation & Verification
Check both the customer email and the commodity description to identify if it is a DG container. Write these details down on paper as well.

Verify if the DG Paperwork has been provided.

Notification & Action Plan
If DG Paperwork is NOT provided:

Send an email to the client requesting the documents.

Update Web Note, Driver Note, and Red Tail: DG CONTAINER, DG PAPER WORK PENDING.

If DG Paperwork IS provided:

Note in the system/email: DG CONTAINER: DG PAPER WORK IN EMAIL.

System Charges: Update the DG charge to $150.

Key DG Commodities & Target Customers to Watch For
Keywords: Lithium Battery, Hedge Grass Trimmer, Chainsaw, Forklift Charger, Forklift, Flammable Liquid, Aerosols, Battery Operated Vehicles, Tiger Desert Edition TX.

Key Customers: Farrow Logistics, Hangcha Forklift Canada Inc, Accuristic, Zodiac.

3. Terminal Tracing Protocols (CN vs. CP Rail)
CN Railway Tracing
Check the tracking status to see if the container is Grounded.

If Grounded, verify the exact location (Malport or Brampton).

Ensure the container has the following indicators: INBOND, STOP, or STOP STORAGE.

CP Railway Tracing
Verify the following fields: Type/Size, Hold Status [CC, MULTIPLE], Grounded Status [YES], and LFD (Last Free Day).

Note: Always extend the LFD by one day in your tracking.

Standard Data Fields to Fill (CP Rail)
Only fill out these specific fields:

Terminal & Container Number

Reference Number

Delivery Date & Storage Date

Drops and Moves (Check and update the last drop to match the first terminal).

4. Special Escalations & Missing Information
Reefer Escalations
If a Reefer container arrives, confirm details directly with Anika Ma'am verbally. Do not send an email, and leave the Delivery Date blank until confirmed.

Process Note: Always confirm with Ma'am first before self-mailing the Genset and Temp details.

DG Paperwork at Terminals
DG paperwork is typically provided directly by the terminal. No client email is required for this. Just add the system note: DG CONTAINER in Driver Note and Red Tail, and update DG charges.

Missing System Information ("No Info" Orders)
Missing Line/Pickup: Look out for missing Shipline or Pickup Numbers.

Multiple Orders: Check if the container number belongs to multiple orders (e.g., Customs Exam or specific clients). If duplicates exist, log a note in Red Tail.

Pad Placement / Destination Status: If the container is on "Pad Placement" or "Destination", add a Red Tail note: Container is on Pad Placement/Destination yet, please trace before dispatch. Do not change anything in Drops and Moves.

5. "No Info" Order Creation
If an order is received with No Info:

Save the order under both terminals (CP and CN) within the designated "No Info" folders.

Complete standard order filling, then add the note [NO INFO] to the Red Tail and Web Note sections.

Missing ETA: If the ETA is missing from the email, email the client immediately to request it. Log the ETA in the notes once received.

6. Container Off-Hire Protocol
3 Major Requirements
Before processing an off-hire, you must secure:

Last Drop Location

Expiry Date

Reference Number

Terminal Specific Workflows
Seatainer Terminal: Do not email. Inform Ma'am directly; she will call the terminal to secure verbal confirmation.

Other Terminals: Send an email to the return location to confirm acceptance.

Mandatory Off-Hire System Notes
Driver Note: OFF HIRE CONTAINER NEED CONFIRMATION, REFERENCE NUMBER: [X], EXPIRY DATE: [Date], DELIVERY ADDRESS: [Address]

Red Tail: OFF HIRE CONFIRMATION

Dispatch Note: OFF HIRE REFERENCE NUMBER: [X], EXPIRY DATE: [Date]

Post-Confirmation: Once confirmed, change the text NEED CONFIRMATION to GOOD TO DELIVER across all notes, and add it to the Dispatch Board Note. Update the last location in Drops and Moves accordingly.

7. Accessorial & Zone-Based Charges
Highway 427 Border Rule
Criteria: If the customer is located on the opposite side of Highway 427 AND the container return location is Musket or Elite.

Action: Update the cartage/accessorial charges by adding $75.

Applicability: This applies to all Zone 2 customers and select Zone 1 customers meeting these geographical criteria.

Notification: Ensure the customer is emailed regarding this additional charge.

8. Others Protocol
Documentation & Printing
Always print exactly two physical copies of the order documents. Route one copy for your personal records and deliver the second copy directly to appointment team.

Terminal Matching Rules
Select the designated available terminal as detailed on the manifest paperwork.

If the provided terminal is completely missing or unavailable in the system dropdown options, manually select the "OTHER" terminal category.

Manual Routing Workflow
Whenever an order is categorized under the "OTHER" terminal option, you must manually construct, configure, and execute the entire routing steps within the Drops and Moves section yourself.`
        expain.innerHTML = `<div class="explain_card">
    <img src="../images/abnormals/1.png" alt="Reefer Container Processing">
    <div class="set">
        <h1>REEFER</h1>
        <p class="abnormals_p">
            • <strong>Container Type:</strong> Select and fill <strong>REEFER-HC-40</strong> in the system.<br>
            • <strong>Temperature:</strong> Verify and fill in the required temperature [+ / -].<br>
            • <strong>Genset Verification:</strong> Verify if Genset is required. Both Temp and Genset details are mandatory. If either or both are missing, you <strong>MUST</strong> email the client immediately to confirm and document the missing details in the note sections.<br>
            • <strong>Genset Billing:</strong> Update charges to <strong>$230</strong> for CH. & SEAFRIGO, and <strong>$275</strong> for all other customers.<br>
            • <strong>Mandatory System Notes:</strong> Log [GENSET IS REQUIRED, TEMP: (Given Temp)] in <strong>WEB NOTE, DRIVER NOTE, and RED TAIL</strong>.<br>
            • <strong>Invader Storage Exception:</strong> Genset is always required. Do not send a confirmation email.<br>
            • <strong>All Gold Exception:</strong> Genset is always required. Set temperature strictly between <strong>18-20°C</strong>.
        </p>
    </div>
</div>
<div class="explain_card">
    <img src="../images/abnormals/2.png" alt="Dangerous Goods Container Processing">
    <div class="set">
        <h1>DANGEROUS GOODS (DG)</h1>
        <p class="abnormals_p">
            • <strong>Initial Screening:</strong> Scan the customer email and commodity descriptions for DG indicators. <strong>Always write these details down on physical paper too.</strong><br>
            • <strong>Paperwork Audit:</strong> Verify if the official DG Paperwork has been provided.<br>
            • <strong>If Paperwork IS Given:</strong> Document <code>DG CONTAINER: DG PAPER WORK IN EMAIL</code> in your system/email logs.<br>
            • <strong>If Paperwork IS NOT Given:</strong> Immediately email the client to request it. Update <strong>WEB NOTE, DRIVER NOTE, and RED TAIL</strong> with: <code>DG CONTAINER, DG PAPER WORK PENDING</code>.<br>
            • <strong>Billing Update:</strong> Ensure the DG accessorial charge is updated to <strong>$150</strong>.<br>
            • <strong>High-Risk Clients & Commodities:</strong> Cross-check class descriptions for lithium batteries, hedge grass trimmers, chainsaws, forklifts/chargers, flammable liquids, aerosols, battery-operated vehicles, or Tiger Desert Edition TX. Flag immediately for target accounts: <em>Farrow Logistics, Hangcha Forklift Canada Inc, Accuristic, and Zodiac</em>.
        </p>
    </div>
</div>
<div class="explain_card">
    <img src="../images/abnormals/3.png" alt="Customs Container Tracking and Entry">
    <div class="set">
        <h1>CUSTOMS</h1>
        <p class="abnormals_p">
            • <strong>Terminal Tracing Basics:</strong> Run tracing to verify if the container is Grounded.<br>
            • <strong>CN Rail Specifics:</strong> If Grounded, identify the specific yard (<strong>Malport</strong> or <strong>Brampton</strong>). It must display <code>INBOND</code> and <code>STOP</code> or <code>STOP STORAGE</code>.<br>
            • <strong>CP Rail Specifics:</strong> Verify Type/Size, confirm Hold status reads <code>CC</code> or <code>MULTIPLE</code>, confirm Grounded is <code>YES</code>, and manually <strong>extend the LFD (Last Free Day) by one day</strong>.<br>
            • <strong>System Fields to Fill:</strong> Enter Terminal, Container No., Reference Number, Delivery Date, Storage Date (for CP orders), and Drops & Moves (<em>update the final drop location to match the initial terminal</em>).<br>
            • <strong>Omitted Fields:</strong> Leave Shipline and Pickup Number blank.<br>
            • <strong>Reefer Exceptions:</strong> Confirm arrival status directly with Anika Ma'am instead of emailing. <strong>Do not fill in the Delivery Date</strong>. Self-mail the Genset and Temp details only after getting Ma'am's direct approval.<br>
            • <strong>DG Exception:</strong> Paperwork comes from the terminal, so do not email the client. Add <code>DG CONTAINER</code> to <strong>DRIVER NOTE & RED TAIL</strong> and update DG charges.<br>
            • <strong>Duplicate Order Audit:</strong> Check for multiple orders under the same container number (e.g., Customs Exam vs Client drop). If found, log a warning in <strong>RED TAIL</strong>.<br>
            • <strong>Pad Placement Warning:</strong> If tracing displays "Pad Placement" or "Destination", add a <strong>RED TAIL</strong> note: <code>CONTAINER IS ON PAD PLACEMENT/DESTINATION YET PLEASE TRACE BEFORE DISPATCH</code>. Do not alter anything in Drops and Moves.
        </p>
    </div>
</div>
<div class="explain_card">
    <img src="../images/abnormals/4.png" alt="No Info Order Processing">
    <div class="set">
        <h1>NO INFO</h1>
        <p class="abnormals_p">
            • <strong>Folder System Filing:</strong> If an order arrives with no information, you must save it under <strong>both</strong> terminals (CP and CN) inside the designated <strong>"No Info" folders</strong>.<br>
            • <strong>Data Entry & Flags:</strong> Process and fill the order details as normally as possible, then manually add the tag <code>[NO INFO]</code> into both the <strong>RED TAIL</strong> and <strong>WEB NOTE</strong> sections.<br>
            • <strong>Missing ETA Protocol:</strong> Check the client email for arrival dates. If the ETA is missing, immediately send an email to the client to request it.<br>
            • <strong>ETA Logging:</strong> Once obtained, you must document and fill the ETA details clearly within the system notes.
        </p>
    </div>
</div>
<div class="explain_card">
    <img src="../images/abnormals/5.png" alt="Off Hire Container Processing">
    <div class="set">
        <h1>OFF HIRE</h1>
        <p class="abnormals_p">
            • <strong>Three Core Requirements:</strong> You must locate and verify the <strong>Last Drop Location</strong>, <strong>Expiry Date</strong>, and <strong>Reference Number</strong> before proceeding.<br>
            • <strong>Terminal Confirmation Rules:</strong> If the delivery point is <em>Seatainer Terminal</em>, inform Ma'am immediately so she can confirm via phone. For all other terminals, you must send an email to verify where the container is going.<br>
            • <strong>Initial System Notes (Pending):</strong><br>
            &nbsp;&nbsp;&nbsp;&nbsp;- <strong>DRIVER NOTE:</strong> <code>OFF HIRE CONTAINER NEED CONFIRMATION, REFERENCE NUMBER: [X], EXPIRY DATE: [Date], DELIVERY ADDRESS: [Address]</code><br>
            &nbsp;&nbsp;&nbsp;&nbsp;- <strong>RED TAIL:</strong> <code>OFF HIRE CONFIRMATION</code><br>
            &nbsp;&nbsp;&nbsp;&nbsp;- <strong>DISPATCH NOTE:</strong> <code>OFF HIRE REFERENCE NUMBER: [X], EXPIRY DATE: [Date]</code><br>
            • <strong>Post-Confirmation Action:</strong> Once confirmed, update the last location in <em>Drops and Moves</em>. Replace the phrase <code>NEED CONFIRMATION</code> with <strong><code>GOOD TO DELIVER</code></strong> across all notes, and add it directly to the Dispatch Board Note.<br>
            • <strong>Highway 427 Surcharge Rule:</strong> If the customer is located on the opposite side of Highway 427 AND the return location is either <strong>Musket</strong> or <strong>Elite</strong>, manually update the system charges by adding <strong>$75</strong>. This applies to all Zone 2 accounts and select Zone 1 accounts matching this route. <strong>Email the customer to notify them of this charge.</strong>
        </p>
    </div>
</div>
<div class="explain_card">
    <img src="../images/abnormals/6.png" alt="Other Terminal Order Processing">
    <div class="set">
        <h1>OTHERS</h1>
        <p class="abnormals_p">
            • <strong>Printing Protocol:</strong> Always print exactly two physical copies of the order—one copy for your own records and the second copy for Jot Ma'am.<br>
            • <strong>Terminal Matching:</strong> Select the designated available terminal provided on the manifest documentation.<br>
            • <strong>System Exceptions ("Other"):</strong> If the designated terminal is missing or completely unavailable inside Panda, manually select <strong>"OTHER"</strong> from the terminal dropdown options.<br>
            • <strong>Manual Routing Action:</strong> Whenever an order is assigned to the "OTHER" terminal category, you must manually build, configure, and add the entire <strong>Drops and Moves</strong> routing steps yourself.
        </p>
    </div>
</div>`
        let paras = document.getElementsByClassName('abnormals_p')

        for (const e of paras) {
            e.addEventListener("dblclick", () => {
                let innervalue = e.innerText
                show_main.classList.add("show_now_secton")
                show_content.innerText = `${innervalue}`
                show_content.style.animation = `textFade 2.5s linear`;
            })
        }
    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})

extras.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button");
        }
        clicked = false;
        extras.classList.add("active_button");

        heading1.innerText = 'Bonus Insights';
        decription1.innerText = `1. Pad Placement / Destination Protocol
Tracing & Location Verification
Location Check: If container tracing shows "PAD PLACEMENT" or "DESTINATION", your first step is to verify the exact pad or terminal destination area where it is sitting.

Data Entry & System Flags
Standard Entry: Process and fill out the system fields for the order normally.
Mandatory Warning Note: You must add a specific alert in the RED TAIL section: CONTAINER IS ON PAD PLACEMENT/DESTINATION YET, PLEASE TRACE BEFORE DISPATCH. Do not alter details in Drops and Moves.

Reservation (RV) Window Settings
RV Scheduling: Set the appointment/RV to whatever open slot is available for that specific day. 
Alternative Action: You can also ask Jot Ma'am directly to confirm which window to use.

2. Container Check Digit Calculation (ISO 6346)
What is it?
The standalone final digit on a container number used to prevent data entry errors across shipping lines, billing systems, and EDI terminal platforms.

Quick Calculation Steps:
1. Convert Letters: Assign values from A=10 to Z=38 (skipping numbers 11, 22, and 33).
2. Apply Multipliers: Multiply each of the 10 core characters from left to right by increasing powers of 2 (1, 2, 4, 8, 16... up to 512).
3. Sum & Divide: Add all 10 results together and divide the grand total by 11 to isolate the remainder.
4. Determine Digit: The remainder is your check digit. (Note: If the remainder is 10, the check digit defaults to 0).

Quick Example (MSCU 663987 [?]):
• Converting and multiplying all characters gives a grand sum of 7656.
• 7656 ÷ 11 leaves a remainder of 0.
• Final verified container number: MSCU 663987 0
3. Appointment Team Routing Rules
Tepperman (Traffic Tech) Orders
Criteria: If the consignee address belongs to TEPPERMAN and the client/broker is TRAFFIC TECH.
Action: Immediately route this order to the dedicated Appointment Team for booking.

Friday ETA Window (Weekend Runs)
Friday Rule: On Friday, look at all orders with an ETA scheduled from Friday through Sunday.
Exception: Exclude ALL GOLD orders from this weekend sweep. All other clients matching this window must go to the Appointment Team.

Same-Day (Today) ETA
Current Day Orders: Any order with an ETA matching the exact same day you are processing/filling it must be handed to the Appointment Team instantly.

Costco Shipments
Criteria: If the consignee on the order is COSTCO, route it to the Appointment Team immediately. (Note: The specific client name does not matter; focus entirely on the Costco consignee name).

Grounded Container Priorities
Action: Filter and prioritize orders where the container tracing status explicitly shows "GROUNDED". These must be handed off to secure immediate appointments.

"Other" Terminals
Rule: For any order arriving or departing from a terminal designated as "OTHER", route it to the Appointment Team and ensure you make an extra physical print copy of the documentation.
4. Shiplines on Order Configuration
COSCO
• Code/Alias: COSCO SHIPLINE
• Official System Name: COSCO

Ocean Network Express (ONE)
• Code/Alias: ONE LINE
• Official System Name: OCEAN NETWORK EXPRESS / ONE

Yang Ming
• Code/Alias: YANG MING LINE
• Official System Name: YANG MING

Hapag-Lloyd
• Code/Alias: HAPAG, HLCU
• Official System Name: HAPAG LLOYD

MSC
• Code/Alias: MSCU / MEDITERRANEAN SHIPPING CO ESPAA SL (MSC)
• Official System Name: MSC

HMM
• Code/Alias: HMM / HYUNDAI MERCHANT MARINE
• Official System Name: HMM CO., LTD.

CMA CGM
• Code/Alias: CMA
• Official System Name: CMA-CGM

SM Line
• Code/Alias: SM LINES
• Official System Name: SM Lines

OOCL
• Code/Alias: OCEAN CARRIERS ORIENTED / OOCL []
• Official System Name: OOCL

Evergreen
• Code/Alias: EVERGREEN
• Official System Name: Evergreen

Maersk
• Code/Alias: MAERSK [ MAEU ]
• Official System Name: MAERSK

ZIM
• Code/Alias: ZIM CONTAINER SERVICE
• Official System Name: Zim Shipping Line

Swire Shipping
• Code/Alias: SS: Swire Shipping
• Official System Name: SWIRE SHIPPING LINE

ACL
• Code/Alias: ACL
• Official System Name: ACL

Eimskip
• Code/Alias: EIMSKIP
• Official System Name: Eimskip Shipping Line

5. Client System Mapping
DB SCHENKER
• Code/Alias: DB SCHENKER
• Official System Name: SCHENKER OF CANADA, VANCOVER

CH. ROBINSONS
• Code/Alias: CH. ROBINSONS
• Official System Name: CH ROBINSONS LTD {MOSTLY}

TRAFFIC TECH
• Code/Alias: TRAFFIC TECH
• Official System Name: TRAFFIC TECH Q.C {MOSTLY}

NUERA LOGISTICS
• Code/Alias: NUERA LOGISTICS
• Official System Name: NUERA LOGISTICS

ALL GOLD IMPORT
• Code/Alias: ALL GOLD IMPORT
• Official System Name: ALL GOLD IMPORTS

CUSTOM EXAM
• Code/Alias: CUSTOM EXAM
• Official System Name: Schenker Of Canada , Toronto

SEAFRIGO
• Code/Alias: SEAFRIGO
• Official System Name: SEAFRIGO

TAFFIC TECH INC.
• Code/Alias: TAFFIC TECH INC.
• Official System Name: Traffic Tech Inc.

CHARLES MASSON
• Code/Alias: CHARLES MASSON
• Official System Name: CHARLES MASSOMN [Note: Mark as NO REFERENCE]

ARA ENETER
• Code/Alias: ARA ENETER
• Official System Name: ARA Enterprises Ltd. ( TWO WAY ) [Note: Mark as NO REFERENCE]

WHALE LOGISTICS
• Code/Alias: WHALE LOGISTICS
• Official System Name: Whale Logistics Canada Inc. [Note: Mark as NO REFERENCE]

Jet-Sea
• Code/Alias: Jet-Sea
• Official System Name: Jet-Sea International

NCC Logistics
• Code/Alias: NCC Logistics
• Official System Name: NCC Logistics

Dahnay Logistics
• Code/Alias: Dahnay Logistics
• Official System Name: Dahnay Logistics Canada Limted

SAIMA CANEDAS
• Code/Alias: SAIMA CANEDAS
• Official System Name: SAIMAA CANADA INC [Note: Mark as NO REFERENCE]

OHS
• Code/Alias: OHS
• Official System Name: Ontario Hard Woods [Note: Mark as NO REFERENCE]

JW SMITH
• Code/Alias: JW SMITH
• Official System Name: J.W. SMITH CUSTOMS BROKER LTD.

LOOT INTERNATIONAL
• Code/Alias: LOOT INTERNATIONAL
• Official System Name: LOOT INTERNATIONAL INC [Note: Mark as NO REFERENCE]
6. Client to Consignee Operational Rules
OAK VILLE
• Mapping: Map CLIENT "OAK VILLE" to CONSIGNEE "OAK-VILLE".
• Critical Rule: REF NO. IS PO NO. Weight is 24000 WEIGHT ALWAYS.

ABBORT OF ENGLAND
• Mapping: Map CLIENT "ABBORT OF ENGLAND" to CONSIGNEE "AOE".
• Critical Rule: NO REFERANCE NUMBER.

BIO NUCLEAR
• Mapping: Map CLIENT "BIO NUCLEAR" to CONSIGNEE "BIO".
• Critical Rule: NO REFERANCE NUMBER.

INSTORE PRODUCTS LTD(CHRISH MICHEL)
• Mapping: Map CLIENT "INSTORE PRODUCTS LTD(CHRISH MICHEL)" to CONSIGNEE "TCM".
• Critical Rule: NO REFERANCE NUMBER. Commodity is SHOPPING CARTS.

Cantex Distribution Inc
• Mapping: Map CLIENT "Cantex Distribution Inc" to CONSIGNEE "CANTEX SALES".
• Critical Rule: NO REFERANCE NUMBER.

UNIVERSAL FASTENING SYSTEMS INC.
• Mapping: Map CLIENT "UNIVERSAL FASTENING SYSTEMS INC." to CONSIGNEE "UNIVERSAL FASTENING SYSTEM".
• Critical Rule: NO REFERANCE NUMBER.

Instore Products Ltd.(RAKESH)
• Mapping: Map CLIENT "Instore Products Ltd.(RAKESH)" to CONSIGNEE "TRINITY PLASTIC".
• Critical Rule: NO REFERANCE NUMBER. Commodity is PLASTIC BAGS.

Instorage Distribution
• Mapping: Map CLIENT "Instorage Distribution" to CONSIGNEE "INSTORAGE".
• Critical Rule: NO REFERANCE NUMBER.

LOCHER EVERS INTERNATIONAL
• Mapping: Map CLIENT "LOCHER EVERS INTERNATIONAL" to CONSIGNEE "MAERSK".
• Critical Rule: NO REFERANCE NUMBER.

HAVELI
• Mapping: Map CLIENT "HAVELI" to CONSIGNEE "HAVELI".
• Critical Rule: NO REFERANCE NUMBER.

CALENDAR CLUB
• Mapping: Map CLIENT "CALENDAR CLUB" to CONSIGNEE "CALENDAR CLUB".
• Critical Rule: NO REFERANCE NUMBER.

Ontario Hard Woods
• Mapping: Map CLIENT "Ontario Hard Woods" to CONSIGNEE "Ontario Hardwood Products".
• Critical Rule: NO REFERANCE NUMBER.

ARA Enterprises Ltd. ( TWO WAY )
• Mapping: Map CLIENT "ARA Enterprises Ltd. ( TWO WAY )" to CONSIGNEE "polar solar".
• Critical Rule: NO REFERANCE NUMBER.

EFL
• Mapping: Map CLIENT "EFL" to CONSIGNEE "VFC".
• Critical Rule: NO REFERANCE NUMBER.`;

        // Removed inner HTML template string
        expain.innerHTML = `<div class="explain_card">
    <img src="../images/extras/1.png" alt="Pad Placement and Destination Tracking">
    <div class="set">
        <h1>PAD PLACEMENT / DESTINATION</h1>
        <p class="extra_p">
            • <strong>Tracing Verification:</strong> If a container flags as "PAD PLACEMENT" or "DESTINATION" during tracking, immediately verify the exact physical yard pad or destination location slot.<br>
            • <strong>System Logging:</strong> Process the data entry and save the order fields as normal, but you must manually log a critical operational warning inside the <strong>RED TAIL</strong> system section.<br>
            • <strong>System Note Format:</strong> <code>CONTAINER IS ON PAD PLACEMENT/DESTINATION YET, PLEASE TRACE BEFORE DISPATCH</code>. Do not alter details inside the Drops and Moves routing tables.<br>
            • <strong>Reservation Window:</strong> Set the appointment or RV confirmation window to whichever open slot is actively available for that tracking day. If you run into scheduling conflicts, verify directly with Jot Ma'am before finalizing.
        </p>
    </div>
</div>
        <div class="explain_card">
    <img src="../images/extras/2.png" alt="Container Check Digit Calculation">
    <div class="set">
        <h1>CONTAINER CHECK DIGIT (ISO 6346)</h1>
        <p class="extra_p">
            • <strong>Purpose:</strong> The final standalone digit prevents data entry errors across shipping systems, manifest bookings, and EDI terminal transfers.<br>
            • <strong>Calculation Workflow:</strong> <br>
            &nbsp;&nbsp;&nbsp;&nbsp;1. Convert letters to values from A=10 to Z=38 (skipping 11, 22, and 33).<br>
            &nbsp;&nbsp;&nbsp;&nbsp;2. Multiply the 10 characters from left to right by increasing powers of 2 (1, 2, 4, 8... up to 512).<br>
            &nbsp;&nbsp;&nbsp;&nbsp;3. Sum all the results up and divide the grand total by 11.<br>
            &nbsp;&nbsp;&nbsp;&nbsp;4. The <strong>remainder</strong> is your check digit. <em>(Exception: If the remainder is 10, use 0)</em>.<br>
            • <strong>Example Verification (MSCU 663987):</strong> Converting and multiplying elements yields a total sum of 7,656. Dividing 7,656 by 11 leaves a remainder of 0. Verified final number: <strong>MSCU 663987 0</strong>.
        </p>
    </div>
</div>
<div class="explain_card">
    <img src="../images/extras/3.png" alt="Appointment Team Routing Rules">
    <div class="set">
        <h1>APPOINTMENT TEAM ROUTING</h1>
        <p class="extra_p">
            • <strong>Tepperman (Traffic Tech):</strong> Route the order immediately to the Appointment Team if the consignee is <em>Tepperman</em> and the client/broker is <em>Traffic Tech</em>.<br>
            • <strong>Friday ETA Window:</strong> On Fridays, transfer all orders with ETAs falling between Friday and Sunday directly to the Appointment Team. <strong>(Exception: Exclude All Gold accounts)</strong>.<br>
            • <strong>Same-Day (Today) ETA:</strong> If an order's ETA matches the exact same day you are filling out the details, it must be handed off to the Appointment Team immediately.<br>
            • <strong>Costco Shipments:</strong> Any order where the consignee is <em>Costco</em> goes straight to the Appointment Team, regardless of who the billing client is.<br>
            • <strong>Grounded Containers:</strong> Prioritize and push orders to the Appointment Team if container tracing explicitly shows the status as <strong>GROUNDED</strong>.<br>
            • <strong>"Other" Terminal Orders:</strong> Any order routed through a terminal marked as <strong>OTHER</strong> must be sent to the Appointment Team. <em>(Remember to print an extra physical copy of these documents)</em>.
        </p>
    </div>
</div>
<div class="explain_card">
    <img src="../images/extras/4.png" alt="Shipline Mapping Configurations">
    <div class="set">
        <h1>SHIPLINES ON ORDER MAPPING</h1>
        <p class="extra_p">
            • <strong>COSCO:</strong> Map <em>COSCO SHIPLINE</em> to the official system name <strong>COSCO</strong>.<br>
            • <strong>Ocean Network Express:</strong> Map <em>ONE LINE</em> to the official system name <strong>OCEAN NETWORK EXPRESS / ONE</strong>.<br>
            • <strong>Yang Ming:</strong> Map <em>YANG MING LINE</em> to the official system name <strong>YANG MING</strong>.<br>
            • <strong>Hapag-Lloyd:</strong> Map aliases <em>HAPAG, HLCU</em> to the official system name <strong>HAPAG LLOYD</strong>.<br>
            • <strong>MSC:</strong> Map <em>MSCU / MEDITERRANEAN SHIPPING CO ESPAA SL (MSC)</em> to the official system name <strong>MSC</strong>.<br>
            • <strong>HMM:</strong> Map <em>HMM / HYUNDAI MERCHANT MARINE</em> to the official system name <strong>HMM CO., LTD.</strong>.<br>
            • <strong>CMA CGM:</strong> Map short code <em>CMA</em> to the official system name <strong>CMA-CGM</strong>.<br>
            • <strong>SM Line:</strong> Map <em>SM LINES</em> to the official system name <strong>SM Lines</strong>.<br>
            • <strong>OOCL:</strong> Map <em>OCEAN CARRIERS ORIENTED / OOCL []</em> to the official system name <strong>OOCL</strong>.<br>
            • <strong>Evergreen:</strong> Map <em>EVERGREEN</em> to the official system name <strong>Evergreen</strong>.<br>
            • <strong>Maersk:</strong> Map system tags <em>MAERSK [ MAEU ]</em> to the official system name <strong>MAERSK</strong>.<br>
            • <strong>ZIM:</strong> Map <em>ZIM CONTAINER SERVICE</em> to the official system name <strong>Zim Shipping Line</strong>.<br>
            • <strong>Swire Shipping:</strong> Map <em>SS: Swire Shipping</em> to the official system name <strong>SWIRE SHIPPING LINE</strong>.<br>
            • <strong>ACL:</strong> Map <em>ACL</em> to the official system name <strong>ACL</strong>.<br>
            • <strong>Eimskip:</strong> Map <em>EIMSKIP</em> to the official system name <strong>Eimskip Shipping Line</strong>.
        </p>
    </div>
</div>
<div class="explain_card">
    <img src="../images/extras/5.png" alt="Client Mapping Configurations">
    <div class="set">
        <h1>CLIENT SYSTEM MAPPING</h1>
        <p class="extra_p">
            • <strong>DB SCHENKER:</strong> Map <em>DB SCHENKER</em> to the official system name <strong>SCHENKER OF CANADA, VANCOVER</strong>.<br>
            • <strong>CH. ROBINSONS:</strong> Map <em>CH. ROBINSONS</em> to the official system name <strong>CH ROBINSONS LTD {MOSTLY}</strong>.<br>
            • <strong>TRAFFIC TECH:</strong> Map <em>TRAFFIC TECH</em> to the official system name <strong>TRAFFIC TECH Q.C {MOSTLY}</strong>.<br>
            • <strong>NUERA LOGISTICS:</strong> Map <em>NUERA LOGISTICS</em> to the official system name <strong>NUERA LOGISTICS</strong>.<br>
            • <strong>ALL GOLD IMPORT:</strong> Map <em>ALL GOLD IMPORT</em> to the official system name <strong>ALL GOLD IMPORTS</strong>.<br>
            • <strong>CUSTOM EXAM:</strong> Map <em>CUSTOM EXAM</em> to the official system name <strong>Schenker Of Canada , Toronto</strong>.<br>
            • <strong>SEAFRIGO:</strong> Map <em>SEAFRIGO</em> to the official system name <strong>SEAFRIGO</strong>.<br>
            • <strong>TAFFIC TECH INC.:</strong> Map <em>TAFFIC TECH INC.</em> to the official system name <strong>Traffic Tech Inc.</strong>.<br>
            • <strong>CHARLES MASSON:</strong> Map <em>CHARLES MASSON</em> to <strong>CHARLES MASSOMN</strong>. <strong>(NO REFERENCE)</strong>.<br>
            • <strong>ARA ENETER:</strong> Map <em>ARA ENETER</em> to <strong>ARA Enterprises Ltd. ( TWO WAY )</strong>. <strong>(NO REFERENCE)</strong>.<br>
            • <strong>WHALE LOGISTICS:</strong> Map <em>WHALE LOGISTICS</em> to <strong>Whale Logistics Canada Inc.</strong>. <strong>(NO REFERENCE)</strong>.<br>
            • <strong>Jet-Sea:</strong> Map <em>Jet-Sea</em> to the official system name <strong>Jet-Sea International</strong>.<br>
            • <strong>NCC Logistics:</strong> Map <em>NCC Logistics</em> to the official system name <strong>NCC Logistics</strong>.<br>
            • <strong>Dahnay Logistics:</strong> Map <em>Dahnay Logistics</em> to the official system name <strong>Dahnay Logistics Canada Limted</strong>.<br>
            • <strong>SAIMA CANEDAS:</strong> Map <em>SAIMA CANEDAS</em> to <strong>SAIMAA CANADA INC</strong>. <strong>(NO REFERENCE)</strong>.<br>
            • <strong>OHS:</strong> Map <em>OHS</em> to <strong>Ontario Hard Woods</strong>. <strong>(NO REFERENCE)</strong>.<br>
            • <strong>JW SMITH:</strong> Map <em>JW SMITH</em> to the official system name <strong>J.W. SMITH CUSTOMS BROKER LTD.</strong>.<br>
            • <strong>LOOT INTERNATIONAL:</strong> Map <em>LOOT INTERNATIONAL</em> to <strong>LOOT INTERNATIONAL INC</strong>. <strong>(NO REFERENCE)</strong>.
        </p>
    </div>
</div>
<div class="explain_card">
    <img src="../images/extras/6.png" alt="Client and Consignee Operational Rules">
    <div class="set">
        <h1>CLIENT & CONSIGNEE OPERATIONAL RULES</h1>
        <p class="extra_p">
            • <strong>OAK VILLE:</strong> Map to <em>OAK-VILLE</em>. REF NO. IS PO NO. Weight is <strong>24000 WEIGHT ALWAYS</strong>.<br>
            • <strong>ABBORT OF ENGLAND:</strong> Map to <em>AOE</em>. Mark as <strong>NO REFERANCE NUMBER</strong>.<br>
            • <strong>BIO NUCLEAR:</strong> Map to <em>BIO</em>. Mark as <strong>NO REFERANCE NUMBER</strong>.<br>
            • <strong>INSTORE PRODUCTS LTD(CHRISH MICHEL):</strong> Map to <em>TCM</em>. Mark as <strong>NO REFERANCE NUMBER</strong>. Commodity: <strong>SHOPPING CARTS</strong>.<br>
            • <strong>Cantex Distribution Inc:</strong> Map to <em>CANTEX SALES</em>. Mark as <strong>NO REFERANCE NUMBER</strong>.<br>
            • <strong>UNIVERSAL FASTENING SYSTEMS INC.:</strong> Map to <em>UNIVERSAL FASTENING SYSTEM</em>. Mark as <strong>NO REFERANCE NUMBER</strong>.<br>
            • <strong>Instore Products Ltd.(RAKESH):</strong> Map to <em>TRINITY PLASTIC</em>. Mark as <strong>NO REFERANCE NUMBER</strong>. Commodity: <strong>PLASTIC BAGS</strong>.<br>
            • <strong>Instorage Distribution:</strong> Map to <em>INSTORAGE</em>. Mark as <strong>NO REFERANCE NUMBER</strong>.<br>
            • <strong>LOCHER EVERS INTERNATIONAL:</strong> Map to <em>MAERSK</em>. Mark as <strong>NO REFERANCE NUMBER</strong>.<br>
            • <strong>HAVELI:</strong> Map to <em>HAVELI</em>. Mark as <strong>NO REFERANCE NUMBER</strong>.<br>
            • <strong>CALENDAR CLUB:</strong> Map to <em>CALENDAR CLUB</em>. Mark as <strong>NO REFERANCE NUMBER</strong>.<br>
            • <strong>Ontario Hard Woods:</strong> Map to <em>Ontario Hardwood Products</em>. Mark as <strong>NO REFERANCE NUMBER</strong>.<br>
            • <strong>ARA Enterprises Ltd. ( TWO WAY ):</strong> Map to <em>polar solar</em>. Mark as <strong>NO REFERANCE NUMBER</strong>.<br>
            • <strong>EFL:</strong> Map to <em>VFC</em>. Mark as <strong>NO REFERANCE NUMBER</strong>.
        </p>
    </div>
</div>`;
        let e_paras = document.getElementsByClassName('extra_p')

        for (const e of e_paras) {
            e.addEventListener("dblclick", () => {
                let innervalue = e.innerText
                show_main.classList.add("show_now_secton")
                show_content.innerText = `${innervalue}`
                show_content.style.animation = `textFade 2.5s linear`;
            })
        }
    } else {
        for (const e of chips) {
            e.classList.remove("active_button");
        }
        clicked = true;
    }
});
