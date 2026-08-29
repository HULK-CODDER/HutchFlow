let change_theme = document.getElementById("change_theme")
let theme = [
    "Nordic_Frost",
    "Sunset_Ember",
    "Emerald_Forest",
    "Royal_Violet",
    "Crimson_Night",
    "Golden_Horizon",
    "Arctic_Ice",
    'Nordic_Frost',
     'Solarized_Amber', 
     'Midnight_Purple'
]
change_theme.addEventListener("click", () => {
    let r = Math.ceil(Math.random() * theme.length)
    document.body.classList=""
    document.body.classList.add(theme[r - 1])
    console.log(theme[r - 1]);
    
})


