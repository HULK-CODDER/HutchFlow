let up = document.getElementById('up');
let nav_elements = document.getElementsByClassName('nav_elements')[0].getElementsByTagName('ul')[0].children;
let hamburger = document.getElementById('hamburger');
let hamburger_section = document.getElementById('hamburger_section');
let goto_cards = document.getElementsByClassName('goto_cards');
let click1 = true;
let cross5 = document.getElementsByClassName('cross5')[0];
let about_section = document.getElementsByClassName('about_section')[0];
let cross = document.getElementById('cross');
let show_section = document.getElementById('show_section');
let main_image_tag = document.getElementById('show_img');
let zoom = document.getElementById('zoom');
let image_section = document.getElementsByClassName('image_section')[0];
let chips = document.getElementsByClassName('chip_section')[0].getElementsByTagName('ul')[0].children;

// Reference to your search input field (Ensure <input id="search_input"> exists in your HTML)
let searchInput = document.getElementById('search_input');

const all =[
    {
        "name": "1 (2).png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/1 (2).png"
    },
    {
        "name": "1.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/1.png"
    },
    {
        "name": "2 (2).png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/2 (2).png"
    },
    {
        "name": "2.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/2.png"
    },
    {
        "name": "3 (2).png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/3 (2).png"
    },
    {
        "name": "3.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/3.png"
    },
    {
        "name": "ABBOT OF ENGLAND.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/ABBOT OF ENGLAND.png"
    },
    {
        "name": "ace depot.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/ace depot.png"
    },
    {
        "name": "ALL_GOLD_IMPORTS.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/ALL_GOLD_IMPORTS.png"
    },
    {
        "name": "ARA.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/ARA.png"
    },
    {
        "name": "atf.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/atf.png"
    },
    {
        "name": "best choice.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/best choice.png"
    },
    {
        "name": "CALENDAR.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/CALENDAR.png"
    },
    {
        "name": "CANTEX.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/CANTEX.png"
    },
    {
        "name": "CH ROBINSONS INTERNATIONAL.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/CH ROBINSONS INTERNATIONAL.png"
    },
    {
        "name": "ChargeCheck.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/ChargeCheck.png"
    },
    {
        "name": "CHARLES.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/CHARLES.png"
    },
    {
        "name": "CHROBINSON4.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/CHROBINSON4.png"
    },
    {
        "name": "CH_ROBI9NSONS2.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/CH_ROBI9NSONS2.png"
    },
    {
        "name": "CH_ROBINSON3.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/CH_ROBINSON3.png"
    },
    {
        "name": "CH_ROBINSONS.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/CH_ROBINSONS.png"
    },
    {
        "name": "CH_ROBINSONS_1.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/CH_ROBINSONS_1.png"
    },
    {
        "name": "CH_ROBINSONS_2.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/CH_ROBINSONS_2.png"
    },
    {
        "name": "containerpapers.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/containerpapers.png"
    },
    {
        "name": "CUSTOM EXAMS 2.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/CUSTOM EXAMS 2.png"
    },
    {
        "name": "custom.jpg",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/custom.jpg"
    },
    {
        "name": "CUSTOMS.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/CUSTOMS.png"
    },
    {
        "name": "CUSTOMS2.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/CUSTOMS2.png"
    },
    {
        "name": "CUSTOM_EXAMS_1.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/CUSTOM_EXAMS_1.png"
    },
    {
        "name": "custom_interchange.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/custom_interchange.png"
    },
    {
        "name": "custom_interchange2.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/custom_interchange2.png"
    },
    {
        "name": "Dahnay Logistics.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/Dahnay Logistics.png"
    },
    {
        "name": "day_cab.jpg",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/day_cab.jpg"
    },
    {
        "name": "day_cab2.jpg",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/day_cab2.jpg"
    },
    {
        "name": "DB_SCHENKER (2).png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/DB_SCHENKER (2).png"
    },
    {
        "name": "DB_SCHENKER.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/DB_SCHENKER.png"
    },
    {
        "name": "dg commodity.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/dg commodity.png"
    },
    {
        "name": "dg.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/dg.png"
    },
    {
        "name": "dg_paperwork.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/dg_paperwork.png"
    },
    {
        "name": "DocumentAttach.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/DocumentAttach.png"
    },
    {
        "name": "Drivercodes.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/Drivercodes.png"
    },
    {
        "name": "drivers_papers.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/drivers_papers.png"
    },
    {
        "name": "driver_runsheet.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/driver_runsheet.png"
    },
    {
        "name": "EFL.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/EFL.png"
    },
    {
        "name": "export.jpg",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/export.jpg"
    },
    {
        "name": "FinalChecks.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/FinalChecks.png"
    },
    {
        "name": "flatbed.jpg",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/flatbed.jpg"
    },
    {
        "name": "flaybed.jpg",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/flaybed.jpg"
    },
    {
        "name": "fromdriver.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/fromdriver.png"
    },
    {
        "name": "frommail.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/frommail.png"
    },
    {
        "name": "fromportal.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/fromportal.png"
    },
    {
        "name": "genset2.jpg",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/genset2.jpg"
    },
    {
        "name": "HAVELI.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/HAVELI.png"
    },
    {
        "name": "hunt.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/hunt.png"
    },
    {
        "name": "Import.jpg",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/Import.jpg"
    },
    {
        "name": "Instorage.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/Instorage.png"
    },
    {
        "name": "INSTORE PRODUCTS.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/INSTORE PRODUCTS.png"
    },
    {
        "name": "Instore.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/Instore.png"
    },
    {
        "name": "interattach.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/interattach.png"
    },
    {
        "name": "interchange_mail1.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/interchange_mail1.png"
    },
    {
        "name": "interchange_mail2.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/interchange_mail2.png"
    },
    {
        "name": "interchange_mail3.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/interchange_mail3.png"
    },
    {
        "name": "intercor.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/intercor.png"
    },
    {
        "name": "interdis.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/interdis.png"
    },
    {
        "name": "intermail.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/intermail.png"
    },
    {
        "name": "JETSEA.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/JETSEA.png"
    },
    {
        "name": "kc1.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/kc1.png"
    },
    {
        "name": "kc2.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/kc2.png"
    },
    {
        "name": "kc4.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/kc4.png"
    },
    {
        "name": "kc5.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/kc5.png"
    },
    {
        "name": "kc7.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/kc7.png"
    },
    {
        "name": "ko2.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/ko2.png"
    },
    {
        "name": "ko4.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/ko4.png"
    },
    {
        "name": "kr4.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/kr4.png"
    },
    {
        "name": "location.jpg",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/location.jpg"
    },
    {
        "name": "missing_note.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/missing_note.png"
    },
    {
        "name": "NCC.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/NCC.png"
    },
    {
        "name": "NUERA_LOGISTICS.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/NUERA_LOGISTICS.png"
    },
    {
        "name": "OAKVILLE.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/OAKVILLE.png"
    },
    {
        "name": "off hire cosco.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/off hire cosco.png"
    },
    {
        "name": "off hire from shipline.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/off hire from shipline.png"
    },
    {
        "name": "off hire order 2.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/off hire order 2.png"
    },
    {
        "name": "off hire order.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/off hire order.png"
    },
    {
        "name": "offhirehapag.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/offhirehapag.png"
    },
    {
        "name": "offhire_hapag.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/offhire_hapag.png"
    },
    {
        "name": "POD.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/POD.png"
    },
    {
        "name": "podattach.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/podattach.png"
    },
    {
        "name": "podcor.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/podcor.png"
    },
    {
        "name": "poddis.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/poddis.png"
    },
    {
        "name": "podmail.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/podmail.png"
    },
    {
        "name": "SEAFRIGO.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/SEAFRIGO.png"
    },
    {
        "name": "seaport.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/seaport.png"
    },
    {
        "name": "ShipmentApproval.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/ShipmentApproval.png"
    },
    {
        "name": "ShipmentSearch.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/ShipmentSearch.png"
    },
    {
        "name": "streetturn.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/streetturn.png"
    },
    {
        "name": "streeturn2.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/streeturn2.png"
    },
    {
        "name": "tendom.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/tendom.png"
    },
    {
        "name": "tendom2.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/tendom2.png"
    },
    {
        "name": "TRAFFIC_TECK_INC.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/TRAFFIC_TECK_INC.png"
    },
    {
        "name": "TRAFFIC_TECK_QC.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/TRAFFIC_TECK_QC.png"
    },
    {
        "name": "triaxle.jpg",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/triaxle.jpg"
    },
    {
        "name": "triaxle2.jpg",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/triaxle2.jpg"
    },
    {
        "name": "triaxle3.jpg",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/triaxle3.jpg"
    },
    {
        "name": "truckq.webp",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/truckq.webp"
    },
    {
        "name": "UNIVERSAL.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/UNIVERSAL.png"
    },
    {
        "name": "WHALE_LOGISTICS.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/WHALE_LOGISTICS.png"
    },
    {
        "name": "when.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/when.png"
    },
    {
        "name": "where.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/where.png"
    },
    {
        "name": "which.png",
        "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ALL/which.png"
    }
];

const ORDERS = [
    { "name": "ABBOT OF ENGLAND.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/ABBOT OF ENGLAND.png" },
    { "name": "ALL_GOLD_IMPORTS.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/ALL_GOLD_IMPORTS.png" },
    { "name": "ARA.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/ARA.png" },
    { "name": "CALENDAR.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/CALENDAR.png" },
    { "name": "CANTEX.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/CANTEX.png" },
    { "name": "CH ROBINSONS INTERNATIONAL.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/CH ROBINSONS INTERNATIONAL.png" },
    { "name": "CHARLES.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/CHARLES.png" },
    { "name": "CHROBINSON4.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/CHROBINSON4.png" },
    { "name": "CH_ROBI9NSONS2.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/CH_ROBI9NSONS2.png" },
    { "name": "CH_ROBINSON3.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/CH_ROBINSON3.png" },
    { "name": "CH_ROBINSONS.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/CH_ROBINSONS.png" },
    { "name": "CH_ROBINSONS_1.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/CH_ROBINSONS_1.png" },
    { "name": "CH_ROBINSONS_2.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/CH_ROBINSONS_2.png" },
    { "name": "CUSTOM EXAMS 2.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/CUSTOM EXAMS 2.png" },
    { "name": "CUSTOMS.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/CUSTOMS.png" },
    { "name": "CUSTOMS2.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/CUSTOMS2.png" },
    { "name": "CUSTOM_EXAMS_1.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/CUSTOM_EXAMS_1.png" },
    { "name": "Dahnay Logistics.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/Dahnay Logistics.png" },
    { "name": "DB_SCHENKER (2).png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/DB_SCHENKER (2).png" },
    { "name": "DB_SCHENKER.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/DB_SCHENKER.png" },
    { "name": "EFL.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/EFL.png" },
    { "name": "HAVELI.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/HAVELI.png" },
    { "name": "Instorage.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/Instorage.png" },
    { "name": "INSTORE PRODUCTS.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/INSTORE PRODUCTS.png" },
    { "name": "Instore.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/Instore.png" },
    { "name": "JETSEA.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/JETSEA.png" },
    { "name": "NCC.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/NCC.png" },
    { "name": "NUERA_LOGISTICS.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/NUERA_LOGISTICS.png" },
    { "name": "OAKVILLE.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/OAKVILLE.png" },
    { "name": "SEAFRIGO.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/SEAFRIGO.png" },
    { "name": "TRAFFIC_TECK_INC.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/TRAFFIC_TECK_INC.png" },
    { "name": "TRAFFIC_TECK_QC.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/TRAFFIC_TECK_QC.png" },
    { "name": "UNIVERSAL.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/UNIVERSAL.png" },
    { "name": "WHALE_LOGISTICS.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/ORDERS/WHALE_LOGISTICS.png" }
];

const PROOFS = [
    { "name": "ace depot.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/PROOFS/ace depot.png" },
    { "name": "atf.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/PROOFS/atf.png" },
    { "name": "best choice.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/PROOFS/best choice.png" },
    { "name": "custom_interchange.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/PROOFS/custom_interchange.png" },
    { "name": "custom_interchange2.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/PROOFS/custom_interchange2.png" },
    { "name": "hunt.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/PROOFS/hunt.png" },
    { "name": "POD.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/PROOFS/POD.png" },
    { "name": "seaport.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/PROOFS/seaport.png" },
    { "name": "streetturn.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/PROOFS/streetturn.png" },
    { "name": "streeturn2.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/PROOFS/streeturn2.png" }
];

const REFERNCES = [
    { "name": "dg commodity.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/REFERNCES/dg commodity.png" },
    { "name": "dg_paperwork.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/REFERNCES/dg_paperwork.png" },
    { "name": "off hire cosco.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/REFERNCES/off hire cosco.png" },
    { "name": "off hire from shipline.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/REFERNCES/off hire from shipline.png" },
    { "name": "off hire order 2.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/REFERNCES/off hire order 2.png" },
    { "name": "off hire order.png", "url": "E:/temporary/FILE TO TEXT/HUTCH TURORIAL NEW/gotowebsites/gallary/images/REFERNCES/off hire order.png" }
];

// Active state tracker
let currentDataList = [...all].sort(() => Math.random() - 0.5);

// Rendering Helper Function
function renderCards(dataList) {
    image_section.innerHTML = ``;
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filtered = dataList.filter(item => {
        const cleanName = item.name.split('.')[0].toLowerCase();
        return cleanName.includes(searchTerm);
    });

    for (const e of filtered) {
        image_section.insertAdjacentHTML("afterbegin", `
            <div class="card">
                <img src="${e.url.replaceAll(" ", "%20")}" alt="${e.name}">
                <h1>${e.name.split('.')[0]}</h1>
            </div>
        `);
    }
}

// Show selection overlay handler
function image_click_handler(e) {
    let srce = e.getElementsByTagName('img')[0].src;
    main_image_tag.src = srce;
    show_section.classList.add('show_section_active');
}

// Event Delegation for clicking cards (Replaces setInterval)
image_section.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) {
        image_click_handler(card);
    }
});

// Search Event Listener
if (searchInput) {
    searchInput.addEventListener('input', () => {
        renderCards(currentDataList);
    });
}

// Modal and Navigation controls
cross.addEventListener('click', () => {
    show_section.classList.remove('show_section_active');
});

nav_elements[0].addEventListener('click', () => {
    window.open('file:///E:/temporary/FILE%20TO%20TEXT/HUTCH%20TURORIAL%20NEW/index.html', '_self');
});
nav_elements[1].addEventListener('click', () => {
    about_section.classList.remove('about_section_active');
});
nav_elements[2].addEventListener('click', () => {
    window.open('file:///E:/temporary/notes/orders.html', '_self');
});
nav_elements[3].addEventListener('click', () => {
    window.open('https://www.hutchtransportation.com/index.php', '_self');
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
});

up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

hamburger.addEventListener('click', () => {
    hamburger_section.classList.toggle('hamdeacitive');
});

goto_cards[0].addEventListener('click', () => {
    if (click1) {
        goto_cards[0].insertAdjacentHTML('beforeend', `
            <ul class='list'>
                <li>orders</li>
                <li>paperwork</li>
                <li>rv's</li>
                <li>emails</li>
            </ul>
        `);
        const img = goto_cards[0].querySelector('img');
        img.style.transition = 'transform 0.3s ease';
        img.style.transform = 'rotate(180deg)';
        click1 = false;
    } else {
        goto_cards[0].querySelector('.list').remove();
        const img = goto_cards[0].querySelector('img');
        img.style.transition = 'transform 0.3s ease';
        img.style.transform = 'rotate(360deg)';
        click1 = true;
    }

    let list = document.getElementsByClassName('list')[0].children;
    list[0].addEventListener('click', () => {
        window.open('file:///E:/temporary/FILE%20TO%20TEXT/HUTCH%20TURORIAL%20NEW/gotowebsites/step1/orders.html', '_self');
    });
    list[1].addEventListener('click', () => {
        window.open('file:///E:/temporary/FILE%20TO%20TEXT/HUTCH%20TURORIAL%20NEW/gotowebsites/step1/paperwork.html', '_self');
    });
    list[2].addEventListener('click', () => {
        window.open('file:///E:/temporary/FILE%20TO%20TEXT/HUTCH%20TURORIAL%20NEW/gotowebsites/step1/rv.html', '_self');
    });
    list[3].addEventListener('click', () => {
        window.open('file:///E:/temporary/FILE%20TO%20TEXT/HUTCH%20TURORIAL%20NEW/gotowebsites/step1/email.html', '_self');
    });
});

zoom.addEventListener('change', (e) => {
    let val = e.target.value;
    main_image_tag.style.transform = `scale(${val}%)`;
});

// Category Chips Listeners
function handleChipClick(chipIndex, dataArray, isShuffle = false) {
    if (!chips[chipIndex].classList.contains('activeli')) {
        for (const e of chips) {
            e.classList.remove('activeli');
        }
        chips[chipIndex].classList.add('activeli');
        currentDataList = isShuffle ? [...dataArray].sort(() => Math.random() - 0.5) : dataArray;
        renderCards(currentDataList);
    }
}

chips[0].addEventListener('click', () => handleChipClick(0, all, true));
chips[1].addEventListener('click', () => handleChipClick(1, ORDERS));
chips[2].addEventListener('click', () => handleChipClick(2, PROOFS));
chips[3].addEventListener('click', () => handleChipClick(3, EQUIPMENTS));
chips[4].addEventListener('click', () => handleChipClick(4, REFERNCES));

cross5.addEventListener('click', () => {
    about_section.classList.add('about_section_active');
});

// Initial Render
renderCards(currentDataList);