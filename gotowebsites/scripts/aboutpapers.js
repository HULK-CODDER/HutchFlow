let aboutus = document.getElementById("aboutus")
let why_paper = document.getElementById("why_paper")
let paper_process = document.getElementById("paper_process")
let rename = document.getElementById("rename")
let attach = document.getElementById("attach")
let disprency = document.getElementById("disprency")
let locdoc = document.getElementById("locdoc")
let chips = document.getElementsByClassName('chips')[0].children
let clicked = true
let expain = document.getElementById("explain")
let image_show_section_2 = document.getElementById('image_show_section_2')
let paperwork_main_image = document.getElementById('paperwork_main_image')
let image_show_main = document.getElementById('image_show_main')

let image_show_cross = document.getElementById('image_show_cross')


image_show_cross.addEventListener('click', () => {
    image_show_section_2.classList.add("image_show_section_2_active")
})

paperwork_main_image.addEventListener("dblclick", () => {
    image_show_section_2.classList.remove("image_show_section_2_active")
    image_show_main.src = paperwork_main_image.src
})




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



why_paper.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        why_paper.classList.add("active_button")
        heading1.innerText = "about paperwork"
        decription1.innerText = `Paperwork Process:> Paperwork is the process of gathering, organizing, and submitting official documents as proof of completed work to our clients through the dispatch panda system.
        
        Paperwork workstyle :> Paperwork is the process of collecting, organizing, and submitting official proof of our completed work to clients through the dispatch panel system. We gather these proofs from different sources, such as drivers (miss – Proof of Delivery) and terminals (pickup and return interchange receipts), and then attach them in the dispatch panel for recordkeeping and client reference.`
        expain.innerHTML = `<div  class="about_pic"><img id="img_tag" src="../images/paperwork/attaching_area.png" alt> <button id="picchange">➤</button></div>`
        let picchange = document.getElementById('picchange')
        let img_tag = document.getElementById('img_tag')
        const img_srcs = ["../images/paperwork/attaching_area.png", "../images/paperwork/sources_proof.png"]
        let pic_count = 1
        let src_sh = img_tag.src
        picchange.addEventListener('click', () => {

            img_tag.src = img_srcs[pic_count]

            src_sh = img_tag.src
            pic_count++
            if (pic_count > 1) {
                pic_count = 0
            }
        })

        img_tag.addEventListener("dblclick", () => {
          
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src =  src_sh
        })
            
          

    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})





paper_process.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        paper_process.classList.add("active_button")
        heading1.innerText = "paper_process"
        decription1.innerText = `
        # Paperwork Handling Process

Currently, we have **three major steps** for handling transportation paperwork:

## Step 1: Renaming Documents

The first step is to properly rename all transportation-related documents and proofs, such as:

* Interchanges
* misss (Proof of Delivery)
* Driver run sheets
* Log sheets
* Other supporting documents

The main reason for renaming these documents is to make them **easy to find and access**.

Instead of manually searching through multiple files and checking each document, we can simply search for the **container number, date, or other relevant information** and quickly locate the required proof.

This helps us save time and keeps our paperwork organized.

---

## Step 2: Attaching Documents

The second step is to attach all required proofs to **Dispatch Panda**.

We use the **driver's run sheet** to identify the moves completed on specific dates. Based on those moves, we locate the corresponding paperwork and attach the required documents to the appropriate move in Dispatch Panda.

This ensures that each transportation move has the necessary supporting documentation attached to it.

---

## Step 3: Discrepancy Handling

The third step is handling any **discrepancies or inconsistencies** found in the paperwork.

Our goal is to identify and correct these issues so that the information remains accurate and clear for both **our team and our clients**.

Common discrepancies include:

* Incorrect date on the miss
* Incorrect container number on the miss
* Driver forgetting to submit or drop off paperwork
* Interchange not being provided by the terminal
* Missing or incomplete documentation

It is our responsibility to identify these issues, obtain the missing documents when necessary, and correct any errors.

Proper discrepancy handling ensures that our records remain **accurate, complete, and easy to verify** when required.

        `
        expain.innerHTML = `

        <h5>steps for paperwork</h5>
       <!-- STEP 1: RENAMING -->
<div id="Renaming"  class="explain_card">
    <img src="../images/paperwork/renaming.png" alt="">
    <div class="set">
        <h1>Renaming</h1>
        <p>
            • Rename all transportation-related proofs.<br>
            • Examples: Interchanges, misss, Driver Run Sheets, Log Sheets, etc.<br>
            • Proper naming makes documents easy to find.<br>
            • Search by container number, date, or other relevant information.<br>
            • This saves time and avoids manually checking multiple files.
        </p>
    </div>
</div>


<!-- STEP 2: ATTACHING -->
<div id="Attaching"  class="explain_card">
   <img src="../images/paperwork/attaching.png" alt="">
    <div class="set">
        <h1>Attaching</h1>
        <p>
            • Attach transportation proofs to Dispatch Panda.<br>
            • Use the driver's Run Sheet to identify completed moves.<br>
            • Match the paperwork with the correct move and date.<br>
            • Attach all required documents to the corresponding move.<br>
            • This ensures every move has the proper supporting documents.
        </p>
    </div>
</div>


<!-- STEP 3: DISCREPANCY HANDLING -->
<div  id="Discrepancy" class="explain_card">
    <img src="../images/paperwork/discrepancy.png" alt="">
    <div class="set">
        <h1>Discrepancy Handling</h1>
        <p>
            • Identify and correct discrepancies in paperwork.<br>
            • Examples: Wrong date or container number on a miss.<br>
            • Drivers may sometimes forget to submit their paperwork.<br>
            • Interchanges may sometimes be missing from the terminal.<br>
            • Obtain missing documents and correct errors when required.<br>
            • Keep our records accurate and clear for both our team and clients.
        </p>
    </div>
</div>
        `
        let Renaming = document.getElementById('Renaming')
        let Attaching = document.getElementById('Attaching')
        let Discrepancy = document.getElementById('Discrepancy')

        Renaming.addEventListener('dblclick', () => {
            show_main.classList.add("show_now_secton")
            let hed = Renaming.getElementsByTagName('h1')[0].innerText
            let para = Renaming.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
            show_content.style.animation = `textFade 2.5s linear`;
        })
        Attaching.addEventListener('dblclick', () => {
            show_main.classList.add("show_now_secton")
            let hed = Attaching.getElementsByTagName('h1')[0].innerText
            let para = Attaching.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
            show_content.style.animation = `textFade 2.5s linear`;
        })
        Discrepancy.addEventListener('dblclick', () => {
            show_main.classList.add("show_now_secton")
            let hed = Discrepancy.getElementsByTagName('h1')[0].innerText
            let para = Discrepancy.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
            show_content.style.animation = `textFade 2.5s linear`;
        })

    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})



rename.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        rename.classList.add("active_button")
        heading1.innerText = "(SOP): Document Naming Conventions"
        decription1.innerText = `RENAMING

Why Do We Rename Documents

The purpose of renaming documents is very simple. We rename documents so that we can easily find and retrieve the required paperwork whenever we need it.

A proper naming system helps us keep documents organized and makes it easier to identify the driver, container, movement, and type of shipment.

There are two main types of renaming.

1. Driver Paperwork

2. Container Movement Paperwork

DRIVER PAPERWORK RENAMING

For driver paperwork, we mainly rename two types of documents.

1. Run Sheet
2. Log Sheet

For Run Sheet, we use the letter R.

For Log Sheet, we use the letter L.

After the letter, we add the driver's name and then the date of the document.

The naming format is:

R Driver Name Date

L Driver Name Date

Examples:

R ANKUSH 3 MAY

L ROSHAN 5 MAY

SPECIAL NOTE FOR DRIVER PAPERWORK

Some drivers do not write their names directly on the Run Sheet. Instead, they use driver codes.

You must check the driver code and identify which driver it belongs to before renaming the document.

Always make sure that the correct driver's name is used when renaming the document.

RENAMING PROOF OF CONTAINER MOVEMENTS

Before understanding the renaming format, it is important to understand the major container movements.

We mainly have three container movements.

1. Pickup of the container
2. Delivery of the container
3. Return of the container

Because of these three movements, there are normally three required proofs for one shipment.

The three standard proofs are:

1. Pickup from terminal
2. Delivery to customer
3. Return to terminal

These three proofs are normally compulsory.

There can be some exceptions where more than three proofs are required, but these situations are very rare. You will become familiar with these exceptions as you gain more experience.

CONTAINER MOVEMENT RENAMING FORMAT

The standard naming format is:

Container Number Proof Number

For example:

MSMU8273463 1

The proof number identifies the movement.

1 means Pickup

2 means Delivery

3 means Return

Examples:

MSMU8273463 1

MSMU8273463 2

MSMU8273463 3

IMPORT, EXPORT AND CUSTOMS

We mainly handle three types of work.

1. Import
2. Export
3. Customs

Because the container movements are different for each type of work, the documents are renamed slightly differently.

IMPORT PAPERWORK

For Import shipments, we simply use the container number followed by the proof number.

Examples:

MSMU8273463 1

MSMU8273463 2

MSMU8273463 3

EXPORT PAPERWORK

For Export shipments, we add X after the proof number.

Examples:

MSMU8273463 1X

MSMU8273463 2X

MSMU8273463 3X

The X identifies the document as an Export document.

CUSTOMS PAPERWORK

For Customs shipments, we add C after the proof number.

Examples:

MSMU8273463 1C

MSMU8273463 2C

MSMU8273463 3C

The C identifies the document as a Customs document.

UNDERSTANDING IMPORT MOVEMENTS

For an Import shipment, we normally pick up a loaded container from the terminal.

The loaded container is then delivered to the customer.

After the customer unloads the container, the empty container is returned to the designated empty return location.

The normal Import movement is:

Terminal to Customer to Empty Return Location

UNDERSTANDING EXPORT MOVEMENTS

For an Export shipment, the process is generally the opposite of an Import shipment.

We pick up an empty container.

The empty container is delivered to the shipper or customer.

After the shipper loads the container, the loaded container is returned to the terminal.

The normal Export movement is:

Empty Container Location to Customer to Terminal

UNDERSTANDING CUSTOMS MOVEMENTS

For a Customs shipment, we normally pick up a loaded container from the terminal.

The loaded container is taken to the Customs facility.

After the Customs process is completed, the loaded container is returned to the terminal.

The normal Customs movement is:

Terminal to Customs Facility to Terminal

IMPORTANT NOTE ABOUT CUSTOMS

For Customs shipments, the pickup and return location is normally the same terminal.

However, there can be exceptions in certain situations.

IMPORTANT NOTE ABOUT IMPORT AND EXPORT

For Import and Export shipments, the pickup location and return location can be either the same or different.

Always check the shipment instructions and carrier information before assuming that the pickup and return locations are the same.

QUICK REFERENCE

Proof Number 1 means Pickup

Proof Number 2 means Delivery

Proof Number 3 means Return

Import uses the container number followed by the proof number.

Example:

MSMU8273463 1

Export uses the container number followed by the proof number and X.

Example:

MSMU8273463 1X

Customs uses the container number followed by the proof number and C.

Example:

MSMU8273463 1C

The main purpose of renaming is to keep all paperwork organized and make it easy to locate the correct document whenever it is required. Always check the document carefully before renaming it to make sure the correct driver, container number, movement number, and shipment type are used.
`
        expain.innerHTML = ` 
<div id="DriverRenaming" class="explain_card">
    <img src="../images/paperwork/rename/driver_paper.png" alt="">
    <div class="set">
        <h1>Driver Paperwork</h1>
        <p>
            • Run Sheet uses R.<br>
            • Log Sheet uses L.<br>
            • Add driver name and date.<br>
            • Example: R ANKUSH 3 MAY
        </p>
    </div>
</div>

<div id="DriverCodes" class="explain_card">
   <img src="../images/paperwork/rename/driver_codespng.png" alt="">
    <div class="set">
        <h1>Driver Codes</h1>
        <p>
            • Some drivers use codes instead of names.<br>
            • Check the code before renaming.<br>
            • Always use the correct driver name.
        </p>
    </div>
</div>


<div id="ContainerRenaming" class="explain_card">
    <img src="../images/paperwork/rename/cont_paper.png" alt="">
    <div class="set">
        <h1>Container Paperwork</h1>
        <p>
            • Use container number and proof number.<br>
            • 1 means Pickup.<br>
            • 2 means Delivery.<br>
            • 3 means Return.
        </p>
    </div>
</div>


<div id="ImportRenaming" class="explain_card">
    <img src="../images/paperwork/rename/import.png" alt="">
    <div class="set">
        <h1>Import</h1>
        <p>
            • Use container number and proof number.<br>
            • Example: MSMU8273463 1<br>
            • Loaded container is picked up and delivered to the customer.
        </p>
    </div>
</div>


<div id="ExportRenaming" class="explain_card">
    <img src="../images/paperwork/rename/export.png" alt="">
    <div class="set">
        <h1>Export</h1>
        <p>
            • Add X after the proof number.<br>
            • Example: MSMU8273463 1X<br>
            • Empty container is picked up and returned loaded to the terminal.
        </p>
    </div>
</div>


<div id="CustomsRenaming" class="explain_card">
    <img src="../images/paperwork/rename/customs.png" alt="">
    <div class="set">
        <h1>Customs</h1>
        <p>
            • Add C after the proof number.<br>
            • Example: MSMU8273463 1C<br>
            • Loaded container goes to the Customs facility and returns loaded.
        </p>
    </div>
</div>




<div id="LocationRules" class="explain_card">
   <img src="../images/paperwork/rename/terminal.png" alt="">
    <div class="set">
        <h1>Location Rules</h1>
        <p>
            • Customs normally uses the same terminal for pickup and return.<br>
            • Import and Export locations can be different.<br>
            • Always check the shipment instructions.
        </p>
    </div>
</div>
        `
        let DriverRenaming = document.getElementById('DriverRenaming')
        let DriverCodes = document.getElementById('DriverCodes')
        let ContainerRenaming = document.getElementById('ContainerRenaming')
        let ImportRenaming = document.getElementById('ImportRenaming')
        let ExportRenaming = document.getElementById('ExportRenaming')
        let CustomsRenaming = document.getElementById('CustomsRenaming')
        let LocationRules = document.getElementById('LocationRules')






        DriverRenaming.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/rename/rename_clicks/drivers_papers.png'
        })
        DriverCodes.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/rename/rename_clicks/Drivercodes.png'
        })
        ContainerRenaming.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/rename/rename_clicks/containerpapers.png'
        })
        ImportRenaming.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/rename/rename_clicks/import.jpg'
        })
        ExportRenaming.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/rename/rename_clicks/export.jpg'
        })
        CustomsRenaming.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/rename/rename_clicks/custom.jpg'
        })
        LocationRules.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/rename/rename_clicks/location.jpg'
        })



    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})



attach.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        attach.classList.add("active_button")
        heading1.innerText = "Attaching Documents"
        decription1.innerText = `

After completing the **renaming process**, we move to the document attaching process.

### 1. Open the Driver Runsheet

* [ ] Select the driver's runsheet.
* [ ] Open **Payroll** in Dispatch Panda.
* [ ] Select the correct **payroll period** based on the date of the driver's runsheet.
* [ ] Enter the **driver's name** and **runsheet date**.
* [ ] Click **Search**.
* [ ] All moves completed by that driver will be displayed.

### 2. Match the Move

* [ ] Select the **container number** from the driver's move.
* [ ] Open **Shipment List** in another window.
* [ ] Search the container number.
* [ ] Check the moves completed by the driver.
* [ ] Always make sure the **move date** is correct.
* [ ] Attach the documents according to the type and sequence of the move.

### 3. Document Attachment Order

* **Terminal → Consignee:** Attach **1st and 2nd attachments**.
* **Consignee → Terminal:** Attach **3rd attachment**.
* **Terminal → Yard:** Attach **1st attachment only**.
* **Yard → Terminal:** Follow the same process according to the move and required documents.

### 4. Check the Runsheet for Charges

Check the runsheet to see if the driver recorded any **waiting time** or additional charges for the container, such as:

* Waiting time
* DG
* GENSET
* Bobtail
* Dead run
* Other additional charges

If any charges or special situations are mentioned, check with the **Appointments Team** or **Accounts Team**. They will advise what action should be taken.

### 5. Approve the Shipment

If:

* [ ] All required attachments are completed.
* [ ] There are no pending charge issues.
* [ ] All move details are correct.

Then approve the shipment by clicking the **Thumbs Up** button.

> **Important:** Once the Thumbs Up is selected, the shipment can only move down in the process. It **cannot be reset to its original position**.

### 6. Repeat for Every Move

Complete the same process for **every move and every driver**.

## Important Checks

### Interchange

* [ ] Make sure the interchange is correct.
* [ ] For an **import interchange**, the 1st pickup should show the container as **loaded**.
* [ ] The interchange date must match the **date of the move**.

### miss

* [ ] Delivery date on the miss must match the move date.
* [ ] Container number must be **exactly correct**.
* [ ] miss must be **signed by the consignee**.

### Runsheet vs. Payroll

* [ ] Every move shown on the driver's runsheet must also appear in **Payroll**.
* [ ] Every move shown in Payroll should also be present on the **runsheet**.
* [ ] No move should be missing from either side.

**Always double-check the container number, move date, interchange, miss, attachments, and charges before approving the shipment.**
.`
        expain.innerHTML = ` 
     <div id="DriverAttaching" class="explain_card"> 
    <img src="../images/paperwork/attach/attach/driver_runsheet.png" alt=""> 
    <div class="set"> 
        <h1>Open Driver Runsheet</h1> 
        <p> 
            • Select the driver's runsheet.<br> 
            • Open Payroll in Dispatch Panda.<br> 
            • Select the correct payroll period.<br> 
            • Enter driver name and date.<br> 
            • Click Search. 
        </p> 
    </div> 
</div>


<div id="ShipmentSearch" class="explain_card"> 
     <img src="../images/paperwork/attach/attach/ShipmentSearch.png" alt="">
    <div class="set"> 
        <h1>Find the Move</h1> 
        <p> 
            • Select the container number.<br> 
            • Open Shipment List.<br> 
            • Search the container number.<br> 
            • Check the driver's move.<br> 
            • Confirm the move date. 
        </p> 
    </div> 
</div>


<div id="DocumentAttach" class="explain_card"> 
     <img src="../images/paperwork/attach/attach/DocumentAttach.png" alt=""> 
    <div class="set"> 
        <h1>Attach Documents</h1> 
        <p> 
            • Terminal → Consignee: 1st & 2nd.<br> 
            • Consignee → Terminal: 3rd.<br> 
            • Terminal → Yard: 1st only.<br> 
            • Check the correct attachment order. 
        </p> 
    </div> 
</div>


<div id="ChargeCheck" class="explain_card"> 
     <img src="../images/paperwork/attach/attach/ChargeCheck.png" alt="">
    <div class="set"> 
        <h1>Check Charges</h1> 
        <p> 
            • Check waiting time on runsheet.<br> 
            • Look for DG, GENSET or bobtail.<br> 
            • Check for dead runs.<br> 
            • Ask Appointments or Accounts Team. 
        </p> 
    </div> 
</div>


<div id="ShipmentApproval" class="explain_card"> 
     <img src="../images/paperwork/attach/attach/ShipmentApproval.png" alt=""> 
    <div class="set"> 
        <h1>Approve Shipment</h1> 
        <p> 
            • Check all attachments are complete.<br> 
            • Make sure no charges are pending.<br> 
            • Click the Thumbs Up.<br> 
            • Repeat for every move and driver. 
        </p> 
    </div> 
</div>


<div id="FinalChecks" class="explain_card"> 
     <img src="../images/paperwork/attach/attach/FinalChecks.png" alt=""> 
    <div class="set"> 
        <h1>Final Checks</h1> 
        <p> 
            • Check Interchange is correct.<br> 
            • Check miss date and container number.<br> 
            • Make sure miss is signed.<br> 
            • Runsheet and Payroll must match. 
        </p> 
    </div> 
</div> 
        `

        let DriverAttaching = document.getElementById('DriverAttaching')
        let ShipmentSearch = document.getElementById('ShipmentSearch')
        let DocumentAttach = document.getElementById('DocumentAttach')
        let ChargeCheck = document.getElementById('ChargeCheck')
        let ShipmentApproval = document.getElementById('ShipmentApproval')
        let FinalChecks = document.getElementById('FinalChecks')

        DriverAttaching.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/attach/driver_runsheet.png'
        })


        ShipmentSearch.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/attach/ShipmentSearch.png'
        })

        DocumentAttach.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/attach/DocumentAttach.png'
        })
        ChargeCheck.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/attach/ChargeCheck.png'
        })
        ShipmentApproval.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/attach/ShipmentApproval.png'
        })
        FinalChecks.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/attach/FinalChecks.png'
        })


    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})

const reference_click = (reference) => {
    image_show_section_2.classList.remove("image_show_section_2_active")
    image_show_main.src = `../images/paperwork/dis/${reference}.png`

}

disprency.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        disprency.classList.add("active_button")
        heading1.innerText = "Paperwork Discrepancy Detection & Handling"
        decription1.innerText = `As we all know, there is no such thing as perfection in this world.

Throughout our work, we will face different types of discrepancies. Our responsibility is to identify these discrepancies, understand the issue, and take the necessary steps to correct them.

## 1. miss Related Discrepancies

The most common miss discrepancies include:

* Container number missing
* Container number incorrect
* miss date incorrect
* miss date missing
* miss date incomplete
* miss not signed by the customer

> Always check the container number, date, and customer signature before processing the miss.

## 2. Interchange Related Discrepancies

Interchange discrepancies are generally rare, but they still need to be checked carefully.

Common issues include:

* Incorrect date
* Incorrect load or empty status
* Incorrect container number

Example:

Load container -> Interchange shows Empty

Empty container -> Interchange shows Load

These types of discrepancies are rare, especially with CP and CN interchanges, but they should still be checked whenever the document is received.

## 3. Missing Documents

Sometimes a required document may be completely missing.

Before completing an order, always check whether all required paperwork has been received.

## 4. Where Do misss and Interchanges Come From?

misss and interchanges do not always come from one single source.

Different documents can come from different sources depending on the terminal, driver, or type of move.

Because of this, we will not always receive every document automatically.

### CP and CN Interchanges

CP and CN interchanges are generally received consistently, so missing interchanges from these sources are very rare.

### Other Terminals

Interchanges from other terminals may not come in as frequently.

Some interchanges are provided directly by the driver.

Sometimes drivers may forget to submit the interchange after completing the move.

The same can happen with misss when drivers forget to provide them.

## 5. Our Responsibility

Our job is to have a keen eye for these discrepancies.

Do not simply process paperwork without checking it.

Always:

* Check the container number
* Check the date
* Check the load or empty status
* Check the customer signature
* Check whether any document is missing
* Compare the paperwork with the order details
* Follow up when something is incorrect or missing

The goal is simple:

**Find the issue -> Understand the issue -> Fix the issue -> Complete the paperwork correctly**

Small discrepancies can become bigger problems if they are not caught early.

Always review the paperwork carefully and make sure everything is accurate before considering the order complete.
.`
        expain.innerHTML = `
         <div id="poddis" class="explain_card"> 
    <img src="../images/paperwork/dis/dis_attach/poddis.png" alt=""> 
    <div class="set"> 
        <h1>POD Discrepancy</h1> 
       <p > 
       
         • Check for missing or incorrect details <br>
         • such as container number or date.<br>
 • Correct, print, and scan the document.<br>
 • Email the corrected document to the customer.<br>
 • Attach the modified POD to the order.<br>

        </p> 
    <div class="explain_card_div">
 <button class="explain_card_btn" onclick="reference_click('poddis')" > Reference 1 </button>
<button class="explain_card_btn" onclick="reference_click('podcor')"> Reference 2 </button>
<button class="explain_card_btn" onclick="reference_click('podmail')"> Reference 3 </button>
<button class="explain_card_btn" onclick="reference_click('podattach')"> Reference 4 </button>

</div>
    </div> 
</div>



  <div id="interdis" class="explain_card"> 
    <img src="../images/paperwork/dis/dis_attach/interdis.png" alt=""> 
    <div class="set"> 
        <h1>Interchanges</h1> 
       <p > 
       
         • Check for missing or incorrect details <br>
         • Such as container number or date.<br>
 • Email to terminal to correct it.<br>
 • Wait for correct interchange.<br>
 • Attach that interchange.<br>

        </p> 
    <div class="explain_card_div">
 <button class="explain_card_btn" onclick="reference_click('interdis')" > Reference 1 </button>
<button class="explain_card_btn" onclick="reference_click('intercor')"> Reference 2 </button>
<button class="explain_card_btn" onclick="reference_click('intermail')"> Reference 3 </button>
<button class="explain_card_btn" onclick="reference_click('interattach')"> Reference 4 </button>

</div>
    </div> 
</div>



  <div id="misdis" class="explain_card"> 
    <img src="../images/paperwork/dis/dis_attach/misdis.png" alt=""> 
    <div class="set"> 
        <h1>Missing DOC</h1> 
       <p > 
         • If POD is missing <br>
         • Call the driver and ask him .<br>
 • Then ask mam who send us DOCs.<br>
 • If interchanges are missing.<br>
 • Mail to terminal and ask for it.<br>

        </p> 
    <div class="explain_card_div">
 <button class="explain_card_btn" onclick="reference_click('interchange_mail1')" > Reference 1 </button>
<button class="explain_card_btn" onclick="reference_click('interchange_mail2')"> Reference 2 </button>
<button class="explain_card_btn" onclick="reference_click('interchange_mail3')"> Reference 3 </button>
<button class="explain_card_btn" onclick="reference_click('missing_note')"> Reference 4 </button>

</div>
    </div> 
</div>
        `

    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})



locdoc.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        locdoc.classList.add("active_button")
        heading1.innerText = "Locations of Documents"
        decription1.innerText = `The proofs and documents we receive can come from different sources.

For example:

* Some interchanges are received through **email**.
* Some documents are available through **portals**.
* Some documents are provided directly by **drivers**.

Eventually, you will become familiar with where to find each document. However, to get started, I have organized the documents according to their respective sources.

### Important Note

If a document is missing, **do not immediately outsource the request**.

First, thoroughly check all available sources to locate the document before requesting it from the terminal or customer.

Outsourcing means requesting the document by:

* Emailing the **terminal**
* Emailing the **customer**

The reason is simple: **some terminals charge a fee for providing interchange documents.**

Therefore, always make sure you have fully checked your available sources before sending an email request.

### Terminals That Charge for Interchanges

The following are the main terminals that may charge for interchange documents:

* Seatainer  (CONTRANS // P&W // GUSGO) {THESE ARE SAME TERMINALS}
* ATS
* Musket
.`
        expain.innerHTML = `
          <div id="fromdriver" class="explain_card"> 
    <img src="../images/paperwork/loc/loc_attach/fromdriver.png" alt=""> 
    <div class="set"> 
        <h1>FROM DRIVERS</h1> 
       <p > 
         • We get POD from Drivers <br>
         • We get following inter-changes.<br>
 • MUSKET  // ATS <br>
 • SEATAINER // THE W<br>
 • WILL SCOT // MOBILE MINI <br>
 • BIG STEEL // CP {CUSTOMS ONLY}<br>
        </p> 
    </div> 
    </div>




    <div id="frommail" class="explain_card"> 
    <img src="../images/paperwork/loc/loc_attach/frommail.png" alt=""> 
    <div class="set"> 
        <h1>FROM MAILS</h1> 
       <p > 
       • We get following inter-changes.<br>
        • CP <br>
 • SEAPORT // ATF  <br>
 • AAA // AMAR <br>
 • HUNT // BEST CHOCIE <br>
 • ACE  // CFS<br>
 • HCT  // I-WAY<br>
        </p> 
    </div> 
</div>


    <div id="fromportal" class="explain_card"> 
    <img src="../images/paperwork/loc/loc_attach/fromportal.png" alt=""> 
    <div class="set"> 
        <h1>FROM PORTAL</h1> 
       <p > 
       • WE GET ONLY CN INTERCHANGES FROM POIRTAL <br>
       • AS OF NOW  
        </p> 
    </div> 
</div>
        `

         let fromportal = document.getElementById('fromportal')
         let frommail = document.getElementById('frommail')
         let fromdriver = document.getElementById('fromdriver')

        fromdriver.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/loc/fromdriver.png'
        })
        frommail.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/loc/frommail.png'
        })
        fromportal.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/paperwork/loc/fromportal.png'
        })

    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})









const magnifier = document.getElementById("magnifier");

const zoom = 1.6; //zoom

image_show_main.addEventListener("mousemove", function (e) {

    const rect = image_show_main.getBoundingClientRect();

    // Mouse position inside image
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Show magnifier
    magnifier.style.display = "block";

    // Position magnifier exactly around cursor
    magnifier.style.left = `${e.clientX - 200}px`;
    magnifier.style.top = `${e.clientY - 85}px`;

    // Set image
    magnifier.style.backgroundImage =
        `url("${image_show_main.src}")`;

    // 400% zoom
    magnifier.style.backgroundSize =
        `${rect.width * zoom}px ${rect.height * zoom}px`;

    // Calculate background position
    const bgX = -(x * zoom - 200);
    const bgY = -(y * zoom - 85);

    magnifier.style.backgroundPosition =
        `${bgX}px ${bgY}px`;
});

image_show_main.addEventListener("dblclick", () => {
    image_show_main.style.transform = "scale(1.5)";
})

image_show_main.addEventListener("mouseleave", function () {
    magnifier.style.display = "none";
    image_show_main.style.transform = "scale(1.0)";
});