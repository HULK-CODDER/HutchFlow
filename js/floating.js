const images = Array.from(document.querySelector(".float_section").children);



function randomPosition(el) {

  const x1 = Math.random() * (window.innerWidth - 150);

  const y1 = Math.random() * (window.innerHeight - 150);



  el.style.position = "absolute";

  el.style.left = `${x1}px`;

  el.style.top = `${y1}px`;

  el.style.transition = "transform 4s ease-in-out";

}



// // initial random placement

// images.forEach(img => randomPosition(img));



// // move + rotate

// setInterval(() => {

//   images.forEach(img => {

//     const x = Math.random() * (window.innerWidth - 150);  

//     const y = Math.random() * (window.innerHeight - 150);

   

//     const moveX = x - img.offsetLeft;

//     const moveY = y - img.offsetTop;



//     const rotate = Math.random() * 360; // random rotation



//     // img.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`;

//     img.style.transform = `translate(rotate(${rotate}deg)`;

//   });

// }, 4000);



// TRYING BOUCING IMAGES 3











const items = [];



images.forEach(img => {

  const obj = {

    el: img,

    x: Math.random() * window.innerWidth,

    y: Math.random() * window.innerHeight,



    // slow movement

    dx: (Math.random() * 1 + 0.5) * (Math.random() < 0.5 ? 1 : -1),

    dy: (Math.random() * 1 + 0.5) * (Math.random() < 0.5 ? 1 : -1),



    // 🔥 CONSTANT ROTATION

    angle: 0,

    rotationSpeed: 500 // always rotating, never stops

  };



  items.push(obj);

});



function animate() {

  const screenWidth = window.innerWidth;

  const screenHeight = window.innerHeight;



  items.forEach(item => {

    const imgWidth = item.el.offsetWidth;

    const imgHeight = item.el.offsetHeight;



    item.x += item.dx;

    item.y += item.dy;



    // bounce

    if (item.x + imgWidth >= screenWidth || item.x <= 0) {

      item.dx *= -1;

    }



    if (item.y + imgHeight >= screenHeight || item.y <= 0) {

      item.dy *= -1;

    }



    // 🔥 ALWAYS rotating

    item.angle += item.rotationSpeed;



    item.el.style.left = item.x + "px";

    item.el.style.top = item.y + "px";

    item.el.style.transform = `rotate(${item.angle}deg)`;

  });



  requestAnimationFrame(animate);

}



animate();

