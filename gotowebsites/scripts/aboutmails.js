let image_show_main = document.getElementById('image_show_main')
let mail_main_image = document.getElementById('mail_main_image')
let image_show_cross = document.getElementById('image_show_cross')
let aboutus = document.getElementById("aboutus")
let pickupmails = document.getElementById("pickupmails")
let dgmails = document.getElementById("dgmails")
let offmails = document.getElementById("offmails")
let Reefermails = document.getElementById("Reefermails")
let noinfomails = document.getElementById("noinfomails")
let stopmails = document.getElementById("stopmails")
let weightmails = document.getElementById("weightmails")
let shiplinemails = document.getElementById("shiplinemails")
let contsizemails = document.getElementById("contsizemails")
let podmails = document.getElementById("podmails")
let interchangemails = document.getElementById("interchangemails")
let rvmails = document.getElementById("rvmails")

let clicked = true



image_show_cross.addEventListener('click', () => {
    image_show_section_2.classList.add("image_show_section_2_active")
})

mail_main_image.addEventListener("dblclick", () => {
    image_show_section_2.classList.remove("image_show_section_2_active")
    image_show_main.src = mail_main_image.src
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



pickupmails.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        pickupmails.classList.add("active_button")
        heading1.innerText = "pickup number mails"
        decription1.innerText = `Here is a clear, refined, and professionally structured Standard Operating Procedure (SOP) based on your instructions.

---

◇ Standard Operating Procedure: Requesting Missing Pickup Numbers

◇ Objective

To identify incoming containers approaching ETA that lack pickup numbers, and send email follow-ups to clients with tracing details.

---

◇ Step 1: Filter & Select Containers

Mail clients ◇only◇ if the container meets the following criteria:

◇ ◇ETA Status:◇ Container must show an active ETA during tracing.
◇ ◇Timing Window:◇
◇ ◇Monday–Thursday:◇ Send emails only if ETA is within ◇4 to 5 days◇. (If ETA is further out, hold off).
◇ ◇Friday:◇ Send emails if ETA is within ◇5 to 6 days◇.



---

◇ Step 2: Extract Containers (Dispatch Board)

◇ ◇For CN Containers (CON):◇
1. Navigate to the ◇Dispatch Board◇ $\rightarrow$ ◇RV Booking◇ section.
2. Sort by ◇ETA◇, then by ◇Pickup Numbers (PU)◇.
3. Select containers one by one where ETA is active and the PU number is missing.


◇ ◇For CP Containers:◇
1. Go to ◇Dispatch Board◇ $\rightarrow$ ◇CP Terminal◇.
2. Search booking, sort by ◇ETA◇, and select qualifying containers one by one.



---

◇ Step 3: Draft & Send Emails

1. ◇Locate Original Thread:◇ Search the container number in your email inbox to find the original thread where the Delivery Order (D/O) was received.
2. ◇Reply All:◇ Open the initial D/O email and click ◇Reply All◇.
3. ◇Update Subject Line:◇ Modify the subject line to:
◇ Need pickup number — [Original Subject Line]


4. ◇Compose Body:◇
◇ Copy and paste the standard blueprint/signature template into the body.
◇ Make any minor necessary adjustments (e.g., container details, date updates).


5. ◇Attach Proof:◇ Attach a clear screenshot of the container's active tracing page showing the ETA.
6. ◇Send:◇ Review all details and click send.`
        expain.innerHTML = `
        <div id="MissingPUCriteria" class="explain_card">
    <img src="../images/mail/pickup/attach/1.gif" alt="Missing Pickup Criteria">
    <div class="set">
        <h1>1. Identify & Timing Rules</h1>
        <p class='abnormals_p'>
            • <b>Target Containers:</b> Only process containers showing active ETA status with missing pickup numbers (PU).<br>
            • <b>Mon–Thu Window:</b> Email client only if ETA is <b>4–5 days</b> away. (Hold off if further out).<br>
            • <b>Friday Window:</b> Email client if ETA is <b>5–6 days</b> away to cover the weekend.
        </p>
    </div>
</div>

<div id="DispatchBoardSelection" class="explain_card">
    <img src="../images/mail/pickup/attach/2.gif" alt="Dispatch Board Selection">
    <div class="set">
        <h1>2. Selecting Containers</h1>
        <p class='abnormals_p'>
            • <b>CN Containers:</b> Go to Dispatch Board → RV Booking → Sort by ETA then PU → Select qualifying containers.<br>
            • <b>CP Containers:</b> Go to Dispatch Board → Select CP Terminal → Search booking → Sort by ETA → Select containers one by one.
        </p>
    </div>
</div>

<div id="EmailPURequest" class="explain_card">
    <img src="../images/mail/pickup/attach/3.gif" alt="Email PU Request">
    <div class="set">
        <h1>3. Client Email Process</h1>
        <p class='abnormals_p'>
            • <b>Thread Selection:</b> Search container  in email → Reply All to original Delivery Order (D/O) email.<br>
            • <b>Subject Update:</b> Prefix original subject with <i>Need pickup number — [Original Subject]</i>.<br>
            • <b>Body & Proof:</b> Paste standard blueprint template, adjust details, and attach tracing screenshot before sending.
        </p>
    </div>
</div>
        `

        let MissingPUCriteria = document.getElementById('MissingPUCriteria')
        let MissingPUCriteriap = document.getElementById('MissingPUCriteria').getElementsByTagName('p')[0]
        let MissingPUCriteria_img = MissingPUCriteria.getElementsByTagName('img')[0]

  MissingPUCriteriap.addEventListener('dblclick', () => {
            show_main.classList.add("show_now_secton")
            let hed = MissingPUCriteria.getElementsByTagName('h1')[0].innerText
            let para = MissingPUCriteria.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
            show_content.style.animation = `textFade 2.5s linear`;
        })

   MissingPUCriteria_img.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/mail/pickup/1.png'
        
        })


        let DispatchBoardSelection = document.getElementById('DispatchBoardSelection')
        let DispatchBoardSelectionp = document.getElementById('DispatchBoardSelection').getElementsByTagName('p')[0]
        let DispatchBoardSelection_img = DispatchBoardSelection.getElementsByTagName('img')[0]

  DispatchBoardSelectionp.addEventListener('dblclick', () => {
            show_main.classList.add("show_now_secton")
            let hed = DispatchBoardSelection.getElementsByTagName('h1')[0].innerText
            let para = DispatchBoardSelection.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
            show_content.style.animation = `textFade 2.5s linear`;
        })

   DispatchBoardSelection_img.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/mail/pickup/2.png'
        
        })


        let EmailPURequest = document.getElementById('EmailPURequest')
        let EmailPURequestp = document.getElementById('EmailPURequest').getElementsByTagName('p')[0]
        let EmailPURequest_img = EmailPURequest.getElementsByTagName('img')[0]

  EmailPURequestp.addEventListener('dblclick', () => {
            show_main.classList.add("show_now_secton")
            let hed = EmailPURequest.getElementsByTagName('h1')[0].innerText
            let para = EmailPURequest.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
            show_content.style.animation = `textFade 2.5s linear`;
        })

   EmailPURequest_img.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/mail/pickup/3.png'
        
        })









    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})


dgmails.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        dgmails.classList.add("active_button")
        heading1.innerText = "dg container mails"
        decription1.innerText = ` DG Container – Paperwork Procedure

For any °°DG (Dangerous Goods) container°°, we need to obtain the required DG paperwork before proceeding.

 1. If the Container Is Confirmed as DG

If you are °°sure that the container is DG°°, email the concerned party and request °°only the DG paperwork°°.

°°Example:°°

> Kindly provide us with the DG paperwork for the subject container.

 2. If You Are Unsure Whether the Container Is DG

If you have °°any doubt°° about whether the container is DG, ask them to °°confirm whether the container is DG°° and, at the same time, request the DG paperwork.

°°Example:°°

> Kindly confirm whether the subject container is DG. If it is DG, please provide us with the required DG paperwork as well.

 Important

• °°Confirmed DG → Ask for DG paperwork only.°°
• °°Unsure/Doubtful → Ask for DG confirmation + DG paperwork.°°
`
        expain.innerHTML = ` <div class="about_pic"><img id='dgmail' src="../images/mail/dg/dg.png" alt=""></div>`


            let dgmail = document.getElementById('dgmail')

           dgmail.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/mail/dg/dg.png'
           })
        



    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})


offmails.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        offmails.classList.add("active_button")
        heading1.innerText = "OFF-HIRE RETURN"
        decription1.innerText = ` OFF-HIRE RETURN CONFIRMATION EMAILS

Before returning an off-hire container to a terminal, we must confirm with the terminal that the container is approved for return.

To do this, create a new email and follow these steps:

1. Subject: Write the subject as “NEED CONFIRMATION – [Container Number]”.
2. Body: Mention that we have the subject container and ask the terminal to confirm whether we are good to return it to their facility.
3. Reference: Make sure to include the reference number provided for the return.
4. Terminal Address: Always include the exact address of the terminal where the container will be returned.
5. Reference Expiry: If an expiry date is not provided for the reference number, add an extra line asking the terminal to confirm the reference’s expiry date.

HINT: We have sent similar off-hire confirmation emails before. Search previous emails using “Off Hire” along with the terminal name. You can find a previous email for the same terminal and use it as a template.

IMPORTANT – HCT TERMINAL: HCT provides gate reservations for off-hire container returns. Since we usually request return confirmation well in advance, do not ask for the gate reservation in the initial confirmation email. Simply mention that we will obtain the gate reservation when we are ready to return the container.
`
        expain.innerHTML = ` <div class="about_pic"><img id='offmail' src="../images/mail/off/off.png" alt=""></div>`


        
            let offmail = document.getElementById('offmail')

           offmail.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/mail/off/off.png'
           })
        
    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})




Reefermails.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        Reefermails.classList.add("active_button")
        heading1.innerText = "REEFER MAILS"
        decription1.innerText = ` 
For reefer containers, we mainly need to confirm two important pieces of information:

1. Temperature Information
2. GENSET Information

If either of these details is missing from the order or instructions, we need to email the client and request the missing information.

NOTE: There are some consignees and clients where the reefer temperature and GENSET information is already fixed/standard. Make sure to check the applicable client/consignee guidelines before sending an email. Do not email the client for temperature or GENSET information if it is already fixed for that client or consignee.
`
          expain.innerHTML = ` <div class="about_pic"><img id='reefmail' src="../images/mail/reef.png" alt=""></div>`


        
            let reefmail = document.getElementById('reefmail')

           reefmail.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/mail/reef.png'
           })

    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})


noinfomails.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        noinfomails.classList.add("active_button")
        heading1.innerText = "NO INFO EMAILS"
        decription1.innerText = ` NO INFO EMAILS

When you cannot find the container tracing at either CN or CP, you need to email the client to confirm where the container will be coming from.

The container may be arriving at CN, CP, or another terminal. The client should advise:

1. Which terminal the container will be available at
2. The ETA of the container

NOTE: Before sending the email, make sure the client has not already provided the terminal information and ETA somewhere else.

If the client has already provided the terminal and ETA, do not send an email. Simply enter the provided ETA in the Notes section of Dispatch Panda.
`
           expain.innerHTML = ` <div class="about_pic"><img id='noinfomail' src="../images/mail/noinfo.png" alt=""></div>`


        
            let noinfomail = document.getElementById('noinfomail')

           noinfomail.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/mail/noinfo.png'
           })


    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})


weightmails.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        weightmails.classList.add("active_button")
        heading1.innerText = "WEIGHT INFO EMAILS"
        decription1.innerText = `  WEIGHT INFO EMAILS

If the container weight information is missing or still pending, we need to email the client to request it.

Weight information is very important because it determines what type of chassis will be required for transportation.

NOTE: There are certain clients/consignees whose container weights are consistently below the required threshold. For these clients/consignees, do not send a weight request email. Make sure to follow the established client/consignee guidelines and do not send the email even by mistake.

`
           expain.innerHTML = ` <div class="about_pic"><img id='weight' src="../images/mail/weight.png" alt=""></div>`


        
            let weight = document.getElementById('weight')

           weight.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/mail/weight.png'
           })


    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})

shiplinemails.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        shiplinemails.classList.add("active_button")
        heading1.innerText = "SHIPLINE EMAILS"
        decription1.innerText = `

If the shipline information is missing or pending, make sure to email the client and request the correct shipline information.

Shipline information is very important because it determines the empty return location and detention requirements for the container.

Therefore, it is necessary to have the correct shipline information before proceeding with the container.


`
           expain.innerHTML = ` <div class="about_pic"><img id='shipline_info' src="../images/mail/shipline.png" alt=""></div>`


        
            let shipline_info = document.getElementById('shipline_info')

           shipline_info.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/mail/shipline.png'
           })


    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})

contsizemails.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        contsizemails.classList.add("active_button")
        heading1.innerText = "CONTAINER SIZE / TYPE CONFIRMATION EMAILS"
        decription1.innerText = `
Sometimes the client provides the wrong container type or size, while the terminal tracing shows a different type or size.

When there is a discrepancy between the client’s information and the tracing, we need to confirm the correct container type and size with the client before pickup.

This is important because terminals can sometimes enter the wrong container type or size in their tracing system. If the information is incorrect, we need to have it corrected before the driver picks up the container.

Picking up a container under the wrong type or size can create serious issues later, so it is our responsibility to identify and resolve the discrepancy beforehand.

NOTE: Sometimes the shipline arrival notice contains the correct container type and size. Always check the arrival notice before sending a confirmation email.

As mentioned earlier:

SHIPLINE → TRACING

If the shipline information and tracing information match, we can proceed accordingly. If they do not match, investigate and confirm the correct information before pickup.



`
           expain.innerHTML = ` <div class="about_pic"><img id='contsize_info' src="../images/mail/contsize.png" alt=""></div>`


        
            let contsize_info = document.getElementById('contsize_info')

           contsize_info.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/mail/contsize.png'
           })


    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})


podmails.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        podmails.classList.add("active_button")
        heading1.innerText = "POD DISCREPANCY EMAILS"
        decription1.innerText = `
If you find any type of POD discrepancy, you must email the consignee to get it corrected. This helps ensure the POD is properly cleared and avoids issues in the future.

Common POD discrepancies include:

Wrong or missing container number
Wrong or missing date on the POD
Missing signature on the POD
Missing POD
How to Handle Each Discrepancy

1. Wrong / Missing Container Number
Print the POD, correct the container number, and send the corrected POD to the consignee by email.

2. Wrong / Missing Date
Print the POD, correct the date, and send the corrected POD to the consignee by email.

3. Missing Signature
Email the consignee and request to sign the POD. [make sure t attach the POD you got from driver]

4. Missing POD
Email the consignee and request the signed POD.

IMPORTANT: Always send the POD discrepancy email to the same email address/account that send us the appointment.


`
           expain.innerHTML = ` <div class="about_pic"><img id='podmail_info' src="../images/mail/podmail.png" alt=""></div>`


        
            let podmail_info = document.getElementById('podmail_info')

           podmail_info.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/mail/podmail.png'
           })


    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})


interchangemails.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        interchangemails.classList.add("active_button")
        heading1.innerText = "INTERCHANGE EMAILS"
        decription1.innerText = `
If you did not receive the interchange from the terminal for a container movement, you need to email the terminal and request it.

In the email, make sure to provide:

Container number
Date of the movement
Movement type

The terminal will then provide the interchange for that movement.

NOTE: The movement type means what the driver did with the container, such as:

Picked up a loaded container
Picked up an empty container
Dropped off a loaded container
Dropped off an empty container
`
           expain.innerHTML = ` <div class="about_pic"><img id='interchangemail_info' src="../images/mail/interchangemail.png" alt=""></div>`


        
            let interchangemail_info = document.getElementById('interchangemail_info')

           interchangemail_info.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/mail/interchangemail.png'
           })


    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})
rvmails.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        rvmails.classList.add("active_button")
        heading1.innerText = "RV REQUEST EMAILS"
        decription1.innerText = `
        If you need an RV (Reservation) for a container at a CN terminal, you can email IMX to request it.

In the email, simply provide the following information:

Which day you need the RV
Which CN terminal you need it for
Which time slots you need
How many slots you need

Make sure all the required details are clearly mentioned so IMX can provide the appropriate RVs.
`
           expain.innerHTML = ` <div class="about_pic"><img id='rvmail_info' src="../images/mail/rvmail.png" alt=""></div>`


        
            let rvmail_info = document.getElementById('rvmail_info')

           rvmail_info.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/mail/rvmail.png'
           })


    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})
stopmails.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        stopmails.classList.add("active_button")
        heading1.innerText = "STOP SIGN EMAILS"
        decription1.innerText = `
      1. IMPORT STOP SIGN

If you see a STOP SIGN on an import container in CN tracing, you need to email the client and confirm the reason for the STOP SIGN.

Ask the client to confirm whether it is due to:

Off-hire
Customs
Or any other reason

We need to know the reason before proceeding with the container.

2. CUSTOMS EXAM CONTAINER – MISSING STOP SIGN

For a Customs Exam container, if the required STOP SIGN is missing, inform the Customs Exam team so they can place the STOP SIGN on the container.

IMPORTANT: We cannot pick up the Customs Exam container without the required STOP SIGN, so make sure this is resolved before sending the driver for pickup.
`
           expain.innerHTML = ` <div class="about_pic"><img id='stopmail_info' src="../images/mail/stopmail.png" alt=""></div>`


        
            let stopmail_info = document.getElementById('stopmail_info')

           stopmail_info.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/mail/stopmail.png'
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