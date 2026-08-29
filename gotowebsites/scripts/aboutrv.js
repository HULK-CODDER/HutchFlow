let image_show_main = document.getElementById('image_show_main')
let rv_main_image = document.getElementById('rv_main_image')
let image_show_cross = document.getElementById('image_show_cross')
let aboutus = document.getElementById("aboutus")
let whyrv = document.getElementById("whyrv")
let rvworks = document.getElementById("rvworks")
let newrv = document.getElementById("newrv")
let etarv = document.getElementById("etarv")
let dispatchrv = document.getElementById("dispatchrv")
let xtrarv = document.getElementById("xtrarv")

let clicked = true



image_show_cross.addEventListener('click', () => {
    image_show_section_2.classList.add("image_show_section_2_active")
})

rv_main_image.addEventListener("dblclick", () => {
    image_show_section_2.classList.remove("image_show_section_2_active")
    image_show_main.src = rv_main_image.src
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



whyrv.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        whyrv.classList.add("active_button")
        heading1.innerText = "Why CN uses RV"
        decription1.innerText = `1. Prevents too many trucks arriving at once

Without reservations, 100 trucks could show up at the terminal at the same time. RVs spread truck arrivals across available time slots.

2. CN knows what the truck is coming for

The reservation is connected to the move, such as:

Pick up an import container
Return an empty
Drop off an export container
Pick up an empty
Other terminal transactions

So CN has information about the expected move before the driver arrives.

3. Helps CN plan the container

Suppose your driver has:

Container: ABCU1234567
Move: Import pickup
RV: 456789
Time: 10:00 AM

CN can prepare/coordinate that transaction so the container can be located and handled.

4. Controls terminal capacity

CN terminals have limited:

Gates
Crane capacity
Yard space
Truck processing capacity

RV appointments help CN manage that capacity.

5. Reduces truck waiting time

Ideally:

No RV → uncontrolled truck arrival → congestion → waiting

RV → scheduled arrival → controlled traffic → smoother operation

In your dispatch work

You can think of the process like this:

Customer order
↓
Container available at CN
↓
Get RV / reservation
↓
Give RV + move information to driver
↓
Driver goes to CN at appointment time
↓
CN processes the transaction
↓
Container pickup/drop
↓
Outgate

One important point

An RV does NOT necessarily mean the container is guaranteed to be physically ready.

For example, you can have a valid RV, but the driver can still encounter issues such as:

Container not grounded
Container not released
Container location unavailable
Customs hold
Bad order
Terminal system problem
Incorrect pickup information

So remember:

RV = permission/scheduling for the truck transaction, not proof that every condition for the container move has been satisfied`
        expain.innerHTML = `
     
<!-- Why CN Uses RV -->
<div id="WhyRV" class="explain_card">
    <img src="../images/rv/whyrv/attach/whyrv.gif" alt="">
    <div class="set">
        <h1>Why CN Uses RV</h1>
        <p>
            • CN uses RVs to control truck traffic at the terminal.<br>
            • It prevents too many trucks from arriving at the same time.<br>
            • It helps CN manage gate and yard capacity.<br>
            • It allows CN to plan truck transactions more efficiently.<br>
            • This helps reduce congestion and unnecessary waiting.
        </p>
    </div>
</div>


<!-- RV Appointment -->
<div id="RVAppointment" class="explain_card">
     <img src="../images/rv/whyrv/attach/rv_app.gif" alt="">
    <div class="set">
        <h1>RV Appointment</h1>
        <p>
            • An RV is normally associated with a specific appointment time.<br>
            • The driver should arrive within the assigned appointment window.<br>
            • The appointment tells CN when the truck is expected.<br>
            • Always provide the correct RV information to the driver.<br>
            • Arriving outside the required time may cause delays or issues.
        </p>
    </div>
</div>


<!-- RV for Pickup -->
<div id="RVPickup" class="explain_card">
     <img src="../images/rv/whyrv/attach/pick.gif" alt="">
    <div class="set">
        <h1>RV for Pickup</h1>
        <p>
            • RVs can be used when picking up containers from CN.<br>
            • Confirm that the container is available before arranging the move.<br>
            • Enter the required container and pickup information correctly.<br>
            • Give the driver the RV and other required pickup information.<br>
            • The driver uses this information when arriving at CN.
        </p>
    </div>
</div>


<!-- RV for Return -->
<div id="RVreturn" class="explain_card">
<img src="../images/rv/whyrv/attach/return.gif" alt="">
    <div class="set">
        <h1>RV for Return</h1>
        <p>
            • RVs may also be required for returning containers to CN.<br>
            • Confirm the correct return terminal before making the reservation.<br>
            • Check the container, move type, and return instructions.<br>
            • Provide the correct RV information to the driver.<br>
            • The driver should follow the assigned terminal appointment.
        </p>
    </div>
</div>


<!-- RV vs Pickup Number -->
<div id="RVvsPickup" class="explain_card">
    <img src="../images/rv/whyrv/attach/vs.gif" alt="">
    <div class="set">
        <h1>RV vs Pickup Number</h1>
        <p>
            • RV and Pickup Number are not the same thing.<br>
            • RV refers to the terminal reservation or appointment.<br>
            • Pickup Number identifies the specific pickup transaction.<br>
            • Both may be required to complete a container move.<br>
            • Always make sure the correct numbers are provided to the driver.
        </p>
    </div>
</div>


<!-- Important RV Check -->
<div id="RVCheck" class="explain_card">
    <img src="../images/rv/whyrv/attach/check.gif" alt="">
    <div class="set">
        <h1>Important RV Check</h1>
        <p>
            • An RV does not automatically mean the container is ready.<br>
            • Check whether the container has been released by CN.<br>
            • Confirm there are no customs or terminal holds.<br>
            • Check the container status and available location when required.<br>
            • If something does not match, investigate before sending the driver.
        </p>
    </div>
</div>


<!-- RV Problems -->
<div id="RVProblems" class="explain_card">
     <img src="../images/rv/whyrv/attach/problem.gif" alt="">
    <div class="set">
        <h1>RV Problems</h1>
        <p>
            • The RV may be unavailable if all appointment slots are full.<br>
            • The container may not be released even when an RV is available.<br>
            • The driver may arrive and find the transaction is not available.<br>
            • Incorrect information can cause the terminal to reject the move.<br>
            • Always investigate the issue and contact CN when necessary.
        </p>
    </div>
</div>


<!-- RV Workflow -->
<div id="RVWorkflow" class="explain_card">
   <img src="../images/rv/whyrv/attach/flow.gif" alt="">
    <div class="set">
        <h1>RV Workflow</h1>
        <p>
            • Check the container and move requirements.<br>
            • Obtain the required CN RV reservation.<br>
            • Confirm the appointment details.<br>
            • Provide the RV and move information to the driver.<br>
            • Driver arrives at CN and completes the terminal transaction.
        </p>
    </div>
</div>
        `

let set = document.getElementsByClassName('set')

for (const e of set) {
    e.addEventListener('dblclick',()=>{
      show_main.classList.add("show_now_secton")
            let hed = e.getElementsByTagName('h1')[0].innerText
            let para = e.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
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







rvworks.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        rvworks.classList.add("active_button")
        heading1.innerText = "RV related works "
        decription1.innerText = `RV-Related Work Responsibilities

Our RV-related responsibilities can be divided into three major areas:

# 1. New ETA RVs

Every day, except weekends, CN releases new capacity for RV appointments. This capacity is available for only a few minutes, so it is critical that we act quickly and secure as many RV appointments as possible during this window.

**Priority:** This is our first RV-related duty each day because the available capacity is limited and fills very quickly.

### 2. ETA RVs

Our second responsibility is to ensure that every container that is eligible for an RV appointment has an RV assigned.

We should continuously review upcoming containers and secure new RV appointments for the containers that need them most, particularly those scheduled for the upcoming days.

**Goal:** Make sure no eligible container is left without an RV and prioritize the most urgent upcoming moves.

### 3. Dispatch RVs

Around **2:30 PM–3:00 PM**, we begin preparing RVs for the next day's dispatches.

RV appointments must be reviewed and assigned according to the required pickup/delivery times and the planned dispatch schedule.

As a general guideline:

* **Local loads:** Maintain approximately a **2-hour gap** between appointments.
* **Out-of-town loads:** Maintain approximately a **3-hour gap** between appointments.

The objective is to ensure that RV appointments are properly aligned with the dispatch schedule and that drivers have sufficient time to complete each move without unnecessary delays.
`
        expain.innerHTML = ` 
        <h5>RV related works</h5>
        <!-- Card 1: New ETA RVs -->
<div id="NewETARVs" class="explain_card">
    <img src="../images/rv/rvworks/attach/new.gif" alt="New ETA RVs">
    <div class="set">
        <h1>1. New ETA RVs</h1>
        <p>
            • CN releases new RV appointment capacity every weekday.<br>
            • Capacity is available for only a few minutes, requiring fast action.<br>
            • This is the highest daily priority to secure scarce capacity.<br>
            • Objective is to secure as many appointments as possible during the window.
        </p>
    </div>
</div>

<!-- Card 2: ETA RVs -->
<div id="ETARVs" class="explain_card">
    <img src="../images/rv/rvworks/attach/eta.gif"" alt="ETA RVs">
    <div class="set">
        <h1>2. ETA RVs</h1>
        <p>
            • Ensure every eligible container has an assigned RV.<br>
            • Continuously review upcoming containers needing appointments.<br>
            • Prioritize urgent moves scheduled for the upcoming days.<br>
            • Objective is to guarantee no eligible container is left without an RV.
        </p>
    </div>
</div>

<!-- Card 3: Dispatch RVs -->
<div id="DispatchRVs" class="explain_card">
    <img src="../images/rv/rvworks/attach/dispatch.gif" alt="Dispatch RVs">
    <div class="set">
        <h1>3. Dispatch RVs</h1>
        <p>
            • Prepared between 2:30 PM–3:00 PM for the next day's dispatches.<br>
            • Align RV appointments with required pickup/delivery times.<br>
            • Local loads: Maintain ~2-hour gaps between appointments.<br>
            • Out-of-town loads: Maintain ~3-hour gaps between appointments.<br>
            • Objective is to avoid delays and give drivers sufficient operational time.
        </p>
    </div>
</div>`
let set = document.getElementsByClassName('set')

for (const e of set) {
    e.addEventListener('dblclick',()=>{
      show_main.classList.add("show_now_secton")
            let hed = e.getElementsByTagName('h1')[0].innerText
            let para = e.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
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




newrv.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        newrv.classList.add("active_button")
        heading1.innerText = "NEW RV'S"
        decription1.innerText = `This guide breaks down how CN Rail appointment (RV) slot bookings work step-by-step.

What Are We Doing?
We are reserving time slots (RVs) at the rail terminal so our drivers can go in and pick up import containers.

1. Where to Book
• CN Brampton (YES): Always book here. This is where all our active import containers arrive.
• CN Malport (NO): Never book here. Slots open too late (12:00 PM), and we don't have enough containers there to make late pickups worth it.
• CN Misc (NO): Never book here. This yard is strictly for empty containers, so there are no import loads to pick up.

2. When to Book
CN releases new slots at 8:46 AM every weekday morning. Be logged in and ready right on time.
• Monday: Book for Tuesday.
• Tuesday: Book for Wednesday.
• Wednesday (Most Important Day): CN opens slots for Saturday, Sunday, AND next Monday all at once.
• Thursday & Friday: Book remaining weekend and next-day slots before the cycle resets.

3. Which Time Slots to Pick
• Top Target (Grab First):
• 05:00 AM – 06:00 AM
• 06:00 AM – 07:00 AM
• 07:00 AM – 08:00 AM
(Early slots beat morning rush-hour traffic and leave time for drivers to do a second trip).
(Also first two slots are Storage slots as we know CN start storage charges at 7 AM ).
• Backup Target (Grab Second):
• 08:00 AM – 09:00 AM
• 09:00 AM – 10:00 AM
(Only pick these if all the 5:00 AM – 8:00 AM slots are already taken).`
expain.innerHTML = `

<h5>NEW RV'S</h5>        
         <div id="WhereToBook" class="explain_card">
    <img src="../images/rv/newrv/attach/where.gif" alt="Where to Book">
    <div class="set">
        <h1>1. Where to Book</h1>
        <p>
            • <b>CN Brampton (YES):</b> Always book here. All active import containers arrive at this terminal.<br>
            • <b>CN Malport (NO):</b> Never book here. Slots open too late (12:00 PM) and lack volume for late pickups.<br>
            • <b>CN Misc (NO):</b> Never book here. Strictly an empty yard with no import loads to pick up.
        </p>
    </div>
</div>

<div id="WhenToBook" class="explain_card">
    <img src="../images/rv/newrv/attach/When.gif" alt="When to Book">
    <div class="set">
        <h1>2. When to Book</h1>
        <p>
            • <b>Release Schedule:</b> CN releases slots at 8:46 AM every weekday. Be logged in and ready.<br>
            • <b>Mon & Tue:</b> Mon books for Tue; Tue books for Wed.<br>
            • <b>Wednesday (Most Important):</b> Slots open for Sat, Sun, AND next Mon all at once.<br>
            • <b>Thu & Fri:</b> Book remaining weekend and next-day slots before the weekly cycle resets.
        </p>
    </div>
</div>

<div id="WhichTimeSlotsToPick" class="explain_card">
    <img src="../images/rv/newrv/attach/which.gif" alt="Which Time Slots to Pick">
    <div class="set">
        <h1>3. Which Time Slots</h1>
        <p>
            • <b>Top Target (Grab First):</b> 05:00–06:00 AM, 06:00–07:00 AM, 07:00–08:00 AM.<br>
            • <b>Why Top Target:</b> Beats rush-hour traffic, allows a second trip, and beats 7:00 AM CN storage charges.<br>
            • <b>Backup Target (Grab Second):</b> 08:00–09:00 AM, 09:00–10:00 AM.<br>
            • <b>Backup Rules:</b> Only select backup windows if all 5:00 AM – 8:00 AM slots are fully booked.
        </p>
    </div>
</div>`

 let WhereToBook = document.getElementById('WhereToBook')
 let WhenToBook = document.getElementById('WhenToBook')
 let WhichTimeSlotsToPick = document.getElementById('WhichTimeSlotsToPick')

   WhereToBook.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/rv/newrv/where.png'
        })
   WhenToBook.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/rv/newrv/when.png'
        })
   WhichTimeSlotsToPick.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/rv/newrv/which.png'
        })

    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})





etarv.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        etarv.classList.add("active_button")
        heading1.innerText = "ETA RV's"
        decription1.innerText = ` ETA RV's

 1. Why ETA RV's Are Important

ETA RV's are one of the most important tasks related to RV management.

Without properly preparing ETA RV's, the next stage — Dispatch RV's — becomes much more difficult.

The main goal of ETA RV's is:

> Make sure containers that are available in ETA and are likely to be needed have RV's attached to them in advance.

We do not randomly attach RV's to containers.

Instead, we try to attach RV's to containers that will actually be needed later.

 Why?

When we reach the Dispatch RV stage, it is usually difficult to create new RV's because other companies are also trying to secure RV capacity at the same time.

Therefore, during ETA RV's, we try to create and secure as many useful RV's as possible for future dispatch.

---

 2. Start by Checking Expired RV's

The first thing to do during ETA RV's is to check the current day's expired RV's.

 Important Note

The RV's shown in Dispatch Panda are raw data.

They do not necessarily represent the actual RV's currently existing in the CN system.

Sometimes Dispatch deletes or modifies an RV directly in the CN system but the old information remains in Panda.

Therefore, always verify the actual RV in CN before making changes in Panda.

 Step 1

Go to:

Dispatch Panda → RV Booking

Use the search bar and search for the current date.

Then check the expired time of the current day's RV's.

---

 3. Verify Each Container in CN

Take the containers from the expired RV list one by one.

Copy the container number and check it in CN Inquiry.

Determine what RV the container actually has in the CN system.

There are generally two possibilities:

 Possibility 1 — RV Expired

The RV shown in Panda has expired and the container no longer has an active RV.

In this case:

Remove the expired RV from Panda.

This gives us an accurate idea of which containers are currently empty and available for new RV's.

 Possibility 2 — RV Was Modified

Dispatch may have modified the RV or attached a new RV to the container.

In this case:

Update/modify the RV information in Panda so it matches the actual CN RV.

The goal is to make Panda as accurate as possible before creating new ETA RV's.

---

 4. Select Containers for New RV's

After checking the expired RV's, you should now have a list of containers that need new RV's.

Take those containers and set them in the CN RV system so they are ready for selecting new RV's.

Then:

1. Check the ETA of each container.
2. Determine which day the container will actually be needed.
3. Check what RV's are available for those dates.
4. Match the container ETA with the appropriate RV.
5. Decide which RV should be attached based on priority.

This is where the main judgment comes in.

Do not simply pick the first available RV.

You need to consider the ETA, RV date, time slot, future requirements, and which RV's will be most useful during Dispatch RV's.

---

 5. RV Priority for Future Dispatch

The following are the approximate minimum RV requirements we want to maintain for the different time periods:

| RV Time | Priority |
| ------- | -------: |
| 4–5     |        1 |
| 5–6     |      3–4 |
| 6–7     |      3–4 |
| 7–8     |        3 |
| 8–9     |      2–3 |
| 9–10    |      2–3 |
| 10–11   |        1 |

 General Rule

Try to have at least 1 RV between every 4–9 time period.

After that minimum coverage is achieved, prioritize additional RV's between 5–10.

These numbers are minimum requirements, not maximum limits.

If you have enough containers and extra useful RV's are available, you can take more.

---

 6. Malport RV Priority

Malport usually has fewer containers, so RV requirements are generally lower.

The main priority is the first three time slots:

| Time Slot | Priority |
| --------- | -------- |
| 0–6       | High     |
| 6–8       | High     |
| 8–10      | High     |

 Malport Strategy

Try to get:

 At least 1 RV from each of the three slots
 Extra RV's from 0–6
 Extra RV's from 6–8

Because Malport usually has fewer containers, take as many useful RV's as the available containers allow.

Again, these are minimum requirements.

If extra containers are available, extra RV's can be secured.

---

 7. Most Important Rule — Avoid Modifying RV's

 CAUTION

Try your best NOT to modify an RV unless absolutely necessary.

Whenever possible:

> Create a new RV instead of modifying an existing RV.

This is extremely important because modifying an existing RV can affect the availability of new capacity.

---

 8. The RV → Two RV Trick

There is a useful technique that can sometimes allow you to turn one RV into two RV's.

This can help us build enough RV capacity for future Dispatch.

 How It Works

This trick works when you have a:

> Completely new / non-modified RV

If you change the container from that RV to another RV and modify the original RV, CN may automatically open a new RV slot.

That newly opened RV can then be selected.

 Why Does This Work?

CN uses this process to convert RV's into additional capacity.

When the system opens the new capacity, CN may also try to take that newly available RV.

Therefore:

> You need to be faster than CN.

If you see the new RV open, select it immediately.

---

 9. Important — The Trick Does Not Always Work

Using this method does not guarantee that another RV will open.

Several factors can affect whether new capacity becomes available.

The timing is especially important.

 If the RV is 2+ Days Away

If the RV date is two or more days in the future:

Chance of a new RV opening: ~99%

 If the RV is the Next Day — Morning

If the RV is for the next day and the current time is around 08:00–11:00:

Chance: ~70–80%

 Around Dispatch Time

Around approximately 14:30–15:00:

Chance drops to ~40–50%

The closer we get to the actual RV date and dispatch time, the less reliable the trick becomes.

---

 10. How to Increase the Chance

You can sometimes increase the chance of getting new capacity by calling CN.

Ask CN to:

> Open capacity/space for the required RV date and time.

Once CN opens the capacity, the chance of getting a new RV becomes much higher.

This can be extremely useful when we need additional RV's for Dispatch.

---

 11. How to Use This Strategy

The purpose of this trick is to help us build enough RV's before Dispatch RV time.

The best approach is:

1. Secure useful RV's during ETA RV's.
2. Prioritize containers that will actually be needed.
3. Maintain the required time-slot coverage.
4. Avoid modifying RV's unless necessary.
5. When you have a completely new RV, consider using the RV → RV trick.
6. Watch for newly opened capacity.
7. Be faster than CN when a new RV becomes available.
8. If necessary, call CN and request additional capacity.

---

 12. Special Note

 When New RV's Open

Whenever new RV's become available, try to pick at least one RV from the newly opened capacity.

The reason is simple:

You may be able to use that new RV for the RV → RV trick later and potentially create additional capacity.

This can make the entire Dispatch RV process much easier.

---

 ETA RV — Quick Workflow

1. Search current date in Panda
↓
2. Check expired RV's
↓
3. Copy each container number
↓
4. Verify actual RV in CN Inquiry
↓
5. Remove expired RV's from Panda
↓
6. Update Panda if Dispatch modified the RV
↓
7. Identify containers needing new RV's
↓
8. Check each container's ETA
↓
9. Determine which RV dates can be used
↓
10. Check available RV's for those dates
↓
11. Apply time-slot priorities
↓
12. Attach RV's to containers that are actually needed
↓
13. Maintain minimum coverage for future Dispatch
↓
14. Avoid modifying RV's whenever possible
↓
15. Use the RV → Two RV trick when conditions are right
↓
16. Act quickly when new capacity opens
↓
17. Call CN if additional capacity is needed

 Main Objective

> ETA RV's = Prepare useful RV's in advance so Dispatch RV's becomes easier.

The goal is not simply to collect RV's.

The goal is to have the right RV's attached to the right containers at the right times.
`

        expain.innerHTML = `
        <h5>ETA RV's</h5>
        <div id="ETARVGuide" class="explain_card">
    <img src="../images/rv/etarv/attach/1.gif" alt="ETA RV Workflow Overview">
    <div class="set">
        <h1>1. Why ETA RVs Matter</h1>
        <p class='abnormals_p'>
            • <b>Advance Preparation:</b> Securing RVs during ETA prevents capacity competition during the Dispatch RV stage.<br>
            • <b>Targeted Attachment:</b> Only attach RVs to containers that are available in ETA and actually needed.<br>
            • <b>Core Objective:</b> Have the right RVs attached to the right containers at the optimal time slots.
        </p>
    </div>
</div>

<div id="ExpiredRVsPandaCN" class="explain_card">
    <img src="../images/rv/etarv/attach/2.gif" alt="Checking Expired RVs">
    <div class="set">
        <h1>2. Expired & Modified</h1>
        <p class='abnormals_p'>
            • <b>Check Panda:</b> Go to <i>Dispatch Panda → RV Booking</i>, search current date, and identify expired RVs.<br>
            • <b>Verify in CN Inquiry:</b> Cross-reference each container in CN as Panda raw data may be outdated.<br>
            • <b>Possibility 1 (RV Expired):</b> If no active RV exists in CN, remove it from Panda to free up the container.<br>
            • <b>Possibility 2 (RV Modified):</b> If Dispatch updated the RV in CN, update Panda to match CN exactly.
        </p>
    </div>
</div>

<div id="SelectingNewRVs" class="explain_card">
    <img src="../images/rv/etarv/attach/3.gif" alt="Selecting Containers for New RVs">
    <div class="set">
        <h1>3. Selection & Priority</h1>
        <p class='abnormals_p'>
            • <b>ETA Matching:</b> Check container ETA and select available RV dates matching delivery requirements.<br>
            • <b>General Slot Requirements:</b> Maintain minimum coverage across 4–9 time slots (4–5: 15–6 | 6–7: 3–4 | 7–8: 3 | 8–9: 2–3 | 9–10: 2–3 | 10–11: 1). Priority rule: At least 1 RV per 4–9 slot, then build extra in 5–10.<br>
            • <b>Malport Slots:</b> Lower volume. Focus on slots 0–6 (High), 6–8 (High), 8–10 (High). Secure at least 1 per slot and stack extra in 0–6 and 6–8.<br>
            • <b>Avoid Modifications:</b> Always create new RVs instead of modifying existing ones to protect overall capacity.
        </p>
    </div>
</div>

<div id="TwoRVTrick" class="explain_card">
    <img src="../images/rv/etarv/attach/4.gif" alt="The 1 RV to 2 RV Trick">
    <div class="set">
        <h1>4. Two RV Trick</h1>
        <p class='abnormals_p'>
            • <b>How it Works:</b> Moving a fresh, non-modified RV to another container and modifying the original can trigger CN to open a new RV slot. Select the new slot immediately before CN closes/takes it.<br>
            • <b>Success Rates by Timing:</b> 2+ Days Away (~99%) | Next Day Morning 08:00–11:00 (~70–80%) | Dispatch Time 14:30–15:00 (~40–50%).<br>
            • <b>Manual Boost:</b> Call CN directly to request open space for specific dates/times if automated capacity doesn't open.<br>
            • <b>Newly Opened Slots:</b> Grab at least one newly opened RV to use as leverage for future RV → RV conversions.
        </p>
    </div>
</div>`


        let ETARVGuide = document.getElementById('ETARVGuide')
        let ETARVGuidep = document.getElementById('ETARVGuide').getElementsByTagName('p')[0]
        let ETARVGuide_img = ETARVGuide.getElementsByTagName('img')[0]

  ETARVGuidep.addEventListener('dblclick', () => {
            show_main.classList.add("show_now_secton")
            let hed = ETARVGuide.getElementsByTagName('h1')[0].innerText
            let para = ETARVGuide.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
            show_content.style.animation = `textFade 2.5s linear`;
        })

   ETARVGuide_img.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/rv/etarv/1.png'
        
        })

        let ExpiredRVsPandaCN = document.getElementById('ExpiredRVsPandaCN')
        let ExpiredRVsPandaCNp = document.getElementById('ExpiredRVsPandaCN').getElementsByTagName('p')[0]
        let ExpiredRVsPandaCN_img = ExpiredRVsPandaCN.getElementsByTagName('img')[0]

  ExpiredRVsPandaCNp.addEventListener('dblclick', () => {
            show_main.classList.add("show_now_secton")
            let hed = ExpiredRVsPandaCN.getElementsByTagName('h1')[0].innerText
            let para = ExpiredRVsPandaCN.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
            show_content.style.animation = `textFade 2.5s linear`;
        })

   ExpiredRVsPandaCN_img.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/rv/etarv/2.png'
        
        })

        let SelectingNewRVs = document.getElementById('SelectingNewRVs')
        let SelectingNewRVsp = document.getElementById('SelectingNewRVs').getElementsByTagName('p')[0]
        let SelectingNewRVs_img = SelectingNewRVs.getElementsByTagName('img')[0]

  SelectingNewRVsp.addEventListener('dblclick', () => {
            show_main.classList.add("show_now_secton")
            let hed = SelectingNewRVs.getElementsByTagName('h1')[0].innerText
            let para = SelectingNewRVs.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
            show_content.style.animation = `textFade 2.5s linear`;
        })

   SelectingNewRVs_img.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/rv/etarv/3.png'
        
        })

        let TwoRVTrick = document.getElementById('TwoRVTrick')
        let TwoRVTrickp = document.getElementById('TwoRVTrick').getElementsByTagName('p')[0]
        let TwoRVTrick_img = TwoRVTrick.getElementsByTagName('img')[0]

  TwoRVTrickp.addEventListener('dblclick', () => {
            show_main.classList.add("show_now_secton")
            let hed = TwoRVTrick.getElementsByTagName('h1')[0].innerText
            let para = TwoRVTrick.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
            show_content.style.animation = `textFade 2.5s linear`;
        })

   TwoRVTrick_img.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/rv/etarv/4.png'
        
        })



    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})





dispatchrv.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        dispatchrv.classList.add("active_button")
        heading1.innerText = "DISPATCH RV'S"
        decription1.innerText = `~ Local GTA Loads (2-Hour Buffer Gap): Maintain a mandatory 2-hour gap between the RV start time and the customer delivery appointment. This buffer covers terminal gate delays, container chassis mounting, scale checks, and local city transit.

 Calculation Example: If local delivery is set for 7:00 AM, select a 05:00–06:00 AM RV slot.

~ Standard Out-of-Town Loads (3-Hour Buffer Gap): Maintain a mandatory 3-hour gap for regional deliveries outside the immediate GTA. The extra hour accounts for highway travel and potential morning rush-hour bottlenecks.

 Calculation Example: If out-of-town delivery is set for 9:00 AM, select a 06:00–07:00 AM RV slot.

~ Long-Distance Out-of-Town Loads (4-Hour Buffer Gap): Maintain a mandatory 4-hour gap for long-haul runs like London, ON (e.g., Tepperman's). Long travel distances demand an extended buffer to guarantee on-time customer arrival.

 Calculation Example: If a London delivery is set for 8:00 AM, select a 04:00–05:00 AM RV slot.

~ Storage Containers (CN 07:00 AM Strict Cutoff): If a container reaches its storage date on the day of delivery, the RV must start before 07:00 AM. CN Rail officially applies daily storage fees starting at 07:00 AM sharp.

 Override Rule: Even if the customer delivery isn't until 9:00 AM or 10:00 AM, ignore standard gap rules and book a pre-07:00 AM slot to get the container off the ramp before storage charges kick in. If delivery is before 08:00 AM, standard gaps naturally keep you clear of fees.

~ Dispatcher & Driver Manual Overrides: Specific instructions from dispatchers or drivers always supersede standard mathematical gap formulas. Directives are usually based on driver Hours of Service (HOS), terminal bottlenecks, or yard pre-pull strategies—always book the exact window requested.

~ Flexible Consignee Windows (Open Delivery Slots): When a customer allows flexible, open delivery windows, choose logical early RV slots that align with general fleet efficiency.

 Booking Strategy: Treat these as secondary priority . Secure critical tight-window and storage-sensitive containers first, then assign RVs to flexible loads.`
        expain.innerHTML = `

                <h5>DISPATCH RV'S</h5>
                
        <div id="DispatchLeadTimes" class="explain_card">
    <img src="../images/rv/dispatchrv/attach/1.gif" alt="Dispatch Lead-Time Gaps">
    <div class="set">
        <h1>1. Dispatch Time Gaps</h1>
        <p class='abnormals_p'>
            • <b>Local GTA Loads (2-Hour Gap):</b> Delivery at 7:00 AM → Book 05:00–06:00 AM RV to cover terminal gate delays and city transit.<br>
            • <b>Standard Out-of-Town (3-Hour Gap):</b> Delivery at 9:00 AM → Book 06:00–07:00 AM RV to account for highway travel.<br>
            • <b>Long-Distance Runs (4-Hour Gap):</b> Delivery at 8:00 AM (e.g., London / Tepperman's) → Book 04:00–05:00 AM RV.
        </p>
    </div>
</div>

<div id="DispatchStorage" class="explain_card">
    <img src="../images/rv/dispatchrv/attach/2.gif" alt="Storage Containers">
    <div class="set">
        <h1>2. Storage Containers </h1>
        <p class='abnormals_p'>
            • <b>Strict 07:00 AM Cutoff:</b> If storage date matches delivery date, RV must start before 07:00 AM to avoid CN storage fees.<br>
            • <b>Mandatory Override:</b> Force a pre-07:00 AM RV even if customer delivery is scheduled for 09:00 AM or later.<br>
            • <b>Early Deliveries:</b> Deliveries scheduled before 08:00 AM naturally remain fee-free using standard gap calculations.
        </p>
    </div>
</div>

<div id="DispatchOverrides" class="explain_card">
    <img src="../images/rv/dispatchrv/attach/3.gif" alt="Overrides and Flexible Windows">
    <div class="set">
        <h1>3. Overrides & Flexible </h1>
        <p class='abnormals_p'>
            • <b>Dispatcher/Driver Directives:</b> Direct instructions always supersede formulas—book the exact RV slot requested.<br>
            • <b>Flexible Consignee Windows:</b> Select logical early RV slots based on fleet efficiency when delivery windows are open.<br>
            • <b>Booking Priority:</b> Treat flexible loads as secondary priority.
        </p>
    </div>
</div>

        `


        let DispatchLeadTimes = document.getElementById('DispatchLeadTimes')
        let DispatchLeadTimesp = document.getElementById('DispatchLeadTimes').getElementsByTagName('p')[0]
        let DispatchLeadTimes_img = DispatchLeadTimes.getElementsByTagName('img')[0]

  DispatchLeadTimesp.addEventListener('dblclick', () => {
            show_main.classList.add("show_now_secton")
            let hed = DispatchLeadTimes.getElementsByTagName('h1')[0].innerText
            let para = DispatchLeadTimes.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
            show_content.style.animation = `textFade 2.5s linear`;
        })

   DispatchLeadTimes_img.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/rv/dispatchrv/1.png'
        
        })

        let DispatchStorage = document.getElementById('DispatchStorage')
        let DispatchStoragep = document.getElementById('DispatchStorage').getElementsByTagName('p')[0]
        let DispatchStorage_img = DispatchStorage.getElementsByTagName('img')[0]


  DispatchStoragep.addEventListener('dblclick', () => {
            show_main.classList.add("show_now_secton")
            let hed = DispatchStorage.getElementsByTagName('h1')[0].innerText
            let para = DispatchStorage.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
            show_content.style.animation = `textFade 2.5s linear`;
        })

   DispatchStorage_img.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/rv/dispatchrv/2.png'
        })


                let DispatchOverrides = document.getElementById('DispatchOverrides')
        let DispatchOverridesp = document.getElementById('DispatchOverrides').getElementsByTagName('p')[0]
        let DispatchOverrides_img = DispatchOverrides.getElementsByTagName('img')[0]


  DispatchOverridesp.addEventListener('dblclick', () => {
            show_main.classList.add("show_now_secton")
            let hed = DispatchOverrides.getElementsByTagName('h1')[0].innerText
            let para = DispatchOverrides.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
            show_content.style.animation = `textFade 2.5s linear`;
        })

   DispatchOverrides_img.addEventListener("dblclick", () => {
            image_show_section_2.classList.remove("image_show_section_2_active")
            image_show_main.src = '../images/rv/dispatchrv/3.png'
        })



    } else {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = true
    }
})





xtrarv.addEventListener("click", () => {
    if (clicked) {
        for (const e of chips) {
            e.classList.remove("active_button")

        }
        clicked = false;
        xtrarv.classList.add("active_button")
        heading1.innerText = "Additional RV Information"
        decription1.innerText = ` 
 1. Pickup Number Issues

 RVs can only be made using the pickup number.
 If the pickup number is missing, an RV cannot be created.
 If the pickup number is missing, email the client and request it.
 Before requesting a pickup number, make sure the container's ETA is approximately 3–4 days away.
 The ETA should generally not be later than 4 days when requesting a missing pickup number.

 2. Incorrect Pickup Number

 Sometimes the pickup number provided by the client may be incorrect.
 If the pickup number is wrong, email the client and request the correct pickup number.
 In this situation, ETA does not matter.
 Even if the ETA is 6 days or more away, email the client if a pickup-number correction is required.
 The important point is that there is a change/correction required to make the RV.

 3. CN MISS Issue — Cross-Border Containers

 Some containers arrive through cross-border movements.
 You cannot attach an RV to these containers until they have crossed the border and reached the appropriate status/location recognized by CN.
 CN will not allow the RV to be attached while the container is still considered cross-border.

Special Note:

 Always check the container number carefully when you receive a CN MISS error.
 If a zero (0) appears immediately after the alphabetic letters in the container number, remove the zero and try again.
 Example:

   ABC0XXXXXX → ABCXXXXXX
 An unnecessary 0 immediately after the letters can also cause a CN MISS error.

 4. ETA vs. Delivery Time Issue

 Sometimes the container's ETA does not match the required delivery time.
 Example:

   Delivery time: 9:00 AM
   Container ETA: 8:00 AM, 9:00 AM, or later
 In this situation, you may not be able to set an RV for 7:00–8:00 AM because the container is not expected to arrive early enough.

What to do:

 Add a note in the RV section stating that the RV could not be made due to the ETA.
 This lets Dispatch know about the issue when they are preparing the dispatch.
 Try to find a dummy container and attach the required RV to that container.

Why use a dummy container?

 Container ETAs can change.
 The actual container may arrive earlier than initially expected.
 If an extra RV has already been secured, it can potentially be transferred/attached to the required container when the ETA allows it.
 This helps ensure that we do not lose a useful RV opportunity.

 5. EDI Issue — CN Brampton vs. CN Malport

 CN does not always determine in advance whether a container will be coming to:

   CN Brampton
   CN Malport
 This can sometimes create an EDI issue.
 For example, the container may show at Brampton, while the RV you are trying to attach is for Malport.

What to check:

 Check the ETA shown in the RV system.
 Sometimes, because of the terminal mismatch, the container's ETA shown in the RV settings may appear one day later.
 If the ETA is shifted and the required RV cannot be attached, this may be the reason.

If the RV can still be attached:

 You can attach the required RV according to the delivery time.
 If the RV is pre-attached, it may still work at the terminal where the container is actually located.
 In some cases, an RV for one CN terminal can work even if the container ends up at the other CN terminal.

 6. Export RVs

 Delivery RVs can be picked using the booking number.
 Normally, you will not be responsible for doing this.
 However, if someone specifically instructs you to make an export RV using the booking, you can do so.

Important:

 Export delivery RVs are paid RVs.
 If the RV is not used, CN may charge us for the expiration or deletion of the RV.
 Therefore, before picking an RV for the same day, make sure the person who requested it has specifically instructed you to pick it for that day.
 Do not create a same-day paid RV unless you have confirmation that it is required.

Note:

 If the RV is for a future date other than the current day, there will generally be no charge for the RV not being used.

 7. Asking CN for RVs

 We can request additional RVs from CN.
 This can be done by:

   Calling CN
   Sending an email to CN
 There is no guarantee that CN will provide an additional RV.
 However, it is still worth trying, especially when an RV is urgently required.

 8. Quick RV Rules to Remember

 RVs require a valid pickup number.
 Missing pickup number → email the client.
 Wrong pickup number → email the client for correction.
 Pickup-number correction → ETA does not matter.
 Check for the extra zero after the container letters if you receive a CN MISS error.
 Cross-border container → RV may not be attachable until it reaches the required CN status.
 ETA too late for the delivery RV → add an RV note + try a dummy container.
 CN Brampton/Malport mismatch → check the ETA and try attaching the RV if the system allows it.
 Same-day export RV → confirm it is actually required because it is a paid RV.
 Future-date RV → normally no charge if unused.
 Need an extra RV → call or email CN and ask.
`
        expain.innerHTML = `
        <h5>Additional RV Info</h5>
        <div id="PickupNumberIssues" class="explain_card">
    <img src="../images/rv/Discrepancyrv/attach/1.gif" alt="Pickup Number Issues">
    <div class="set">
        <h1>1. Pickup Number Issues</h1>
        <p class='abnormals_p'>
            • <b>Requirement:</b> RVs can only be created using a valid pickup number.<br>
            • <b>Missing Pickup Number:</b> Email the client to request the pickup number.<br>
            • <b>ETA Check:</b> Before requesting, ensure the container's ETA is approximately 3–4 days away (generally not later than 4 days).
        </p>
    </div>
</div>

<div id="IncorrectPickupNumber" class="explain_card">
    <img src="../images/rv/Discrepancyrv/attach/2.gif" alt="Incorrect Pickup Number">
    <div class="set">
        <h1>2. Incorrect Pickup NO</h1>
        <p class='abnormals_p'>
            • <b>Correction Required:</b> Email the client immediately to request the correct pickup number.<br>
            • <b>ETA Exemption:</b> ETA does not matter here. Email even if the ETA is 6+ days away since a correction is necessary to make the RV.
        </p>
    </div>
</div>

<div id="CNMissIssue" class="explain_card">
    <img src="../images/rv/Discrepancyrv/attach/3.gif" alt="CN MISS Issue">
    <div class="set">
        <h1>3. CN MISS Issue</h1>
        <p class='abnormals_p'>
            • <b>Cross-Border Delay:</b> RVs cannot be attached until the container crosses the border and reaches a recognized CN status/location.<br>
            • <b>Zero Removal Fix:</b> If you receive a CN MISS error, check for an extra zero immediately after the prefix (e.g., ABC0XXXXXX → ABCXXXXXX) and remove it.
        </p>
    </div>
</div>

<div id="ETAvsDeliveryTime" class="explain_card">
    <img src="../images/rv/Discrepancyrv/attach/4.gif" alt="ETA vs Delivery Time">
    <div class="set">
        <h1>4. ETA vs. Delivery Time</h1>
        <p class='abnormals_p'>
            • <b>ETA Mismatch:</b> If container ETA is too late for the delivery time, add an RV note to inform Dispatch.<br>
            • <b>Dummy Container Strategy:</b> Attach the needed RV to a dummy container so the slot is secured if the actual container arrives early.
        </p>
    </div>
</div>

<div id="EDIIssue" class="explain_card">
    <img src="../images/rv/Discrepancyrv/attach/5.gif" alt="EDI Issue">
    <div class="set">
        <h1>5. EDI Issue</h1>
        <p class='abnormals_p'>
            • <b>Terminal Mismatch:</b> System terminal confusion between Brampton and Malport may shift the displayed ETA by 1 day.<br>
            • <b>Pre-Attaching RVs:</b> If allowed, attach the required RV anyway—it may still function at the actual terminal location.
        </p>
    </div>
</div>

<div id="ExportRVs" class="explain_card">
    <img src="../images/rv/Discrepancyrv/attach/6.gif" alt="Export RVs">
    <div class="set">
        <h1>6. Export RVs</h1>
        <p class='abnormals_p'>
            • <b>Booking Numbers:</b> Export delivery RVs are picked using the booking number (typically only done upon specific instruction).<br>
            • <b>Same-Day Paid RVs:</b> Same-day export RVs incur charges if unused. Confirm explicit instruction before picking.<br>
            • <b>Future-Date RVs:</b> Generally carry no charge if left unused.
        </p>
    </div>
</div>

<div id="AskingCNForRVs" class="explain_card">
    <img src="../images/rv/Discrepancyrv/attach/7.gif" alt="Asking CN For RVs">
    <div class="set">
        <h1>7. Requesting RVs</h1>
        <p class='abnormals_p'>
            • <b>Direct Request:</b> Call or email CN directly when an RV is urgently required.<br>
            • <b>Availability:</b> Provision is not guaranteed by CN, but it is always worth attempting.
        </p>
    </div>
</div>

<div id="QuickRVRules" class="explain_card">
    <img src="../images/rv/Discrepancyrv/attach/8.gif" alt="Quick RV Rules">
    <div class="set">
        <h1>8. Quick View</h1>
        <p class='abnormals_p'>
            • <b>Pickup Numbers:</b> Missing/Wrong → Email client (ETA ignored for corrections; max 3-4 days out for missing).<br>
            • <b>CN MISS:</b> Check for extra zero after prefix; wait for cross-border status update.<br>
            • <b>Workarounds & Edits:</b> Use dummy containers for late ETAs; attach RVs despite Brampton/Malport glitches.<br>
            • <b>Export & Extra RVs:</b> Confirm same-day export RVs to avoid fees; call/email CN directly for emergency RVs.
        </p>
    </div>
</div>`
let set = document.getElementsByClassName('set')

for (const e of set) {
    e.addEventListener('dblclick',()=>{
      show_main.classList.add("show_now_secton")
            let hed = e.getElementsByTagName('h1')[0].innerText
            let para = e.getElementsByTagName('p')[0].innerText
            show_content.innerText = `${hed}\n ${para}`
            show_content.style.animation = `textFade 2.5s linear`;
    })}

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