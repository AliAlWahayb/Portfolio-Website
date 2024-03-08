// for appearing effect
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function (entry) {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
    },{
        threshold: [0.2, 1],
        rootMargin: "100px"
    }
);

const hiddenElemnts = document.querySelectorAll('.hidden');

hiddenElemnts.forEach(function(Elemnts){
    observer.observe(Elemnts)
});

// for header icons
//for dark mode
var colorMode = document.getElementById('dark-mode')

colorMode.onclick = function() {
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')){
        colorMode.src = "assets/sun.png";
    }else{
        colorMode.src = "assets/moon.png";
    }
}
//for language
var language = document.getElementById('english')

language.onclick = function() {
    if (language.getAttribute("src") =="assets/gb.svg") {
        language.src = "assets/sa.svg";
    }else if (language.getAttribute("src") =="assets/sa.svg") {
        language.src = "assets/gb.svg";
    }
}
//progress bar
const filled = document.querySelector('.filled');

function progressBar () {
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(progressBar);
}
progressBar();


//BG
function updateBodyHeight() {
    document.documentElement.style.setProperty('--body-height', `${document.body.offsetHeight - 50}px`);
}
updateBodyHeight();
window.addEventListener('resize', updateBodyHeight);

// Math.floor(Math.random() * (max - min + 1)) + min;
function InitRandomBG() {
    const elements = document.querySelectorAll('.bubbles span');
    elements.forEach((element, index) => {
        const myArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const randomString = myArray[Math.floor(Math.random() * myArray.length)];

        const animationArray = ["animate1", "animate2", "animate3", "animate4"];
        const randomanimation = animationArray[Math.floor(Math.random() * animationArray.length)];

        const random_BG_font_size = Math.floor(Math.random() * (48 - 17 + 1)) + 17;
        // document.documentElement.style.setProperty('--BG-font-size',`${random_BG_font_size}px`)

        const random_bubble_number = Math.floor(Math.random() * (30 - 8 + 1)) + 8;
        // element.style.cssText = `--bubble-number: ${random_bubble_number};`;

        const dynamicStyle = document.createElement('style');
        dynamicStyle.textContent = `.bubbles span:nth-child(${index + 1})::before { content: "${randomString}";
         font-size: ${random_BG_font_size}px; 
         animation: ${randomanimation} linear infinite;
         animation-duration: calc(1250s / ${random_bubble_number});}`;
        document.head.appendChild(dynamicStyle);
    });

    const random_scale_before = Math.random() * (1 - 0.3) + 0.3;
    document.documentElement.style.setProperty('--scale-before',random_scale_before)
    // console.log(random_scale_before);

    const random_scale_after = Math.random() * (2.1 - 1.1) + 1.1;
    document.documentElement.style.setProperty('--scale-after',random_scale_after)
    // console.log(random_scale_after);

    const random_rotate_before = Math.floor(Math.random() * ((-272) - (-90) + 1)) + (-90);
    document.documentElement.style.setProperty('--BG-font-size',`${random_rotate_before}deg`)
    // console.log(random_rotate_before);

    const random_rotate_after = Math.floor(Math.random() * (720 - (0) + 1)) + (0);
    document.documentElement.style.setProperty('--BG-font-size',`${random_rotate_before}deg`)
    // console.log(random_rotate_after);
}
InitRandomBG()


//change bubble number after animation ends
//bad makes letter glitch

// const elements = document.querySelectorAll('.bubbles span');

// elements.forEach((span, index) => {
//   span.addEventListener('animationiteration', event => {
//     const animatedSpan = event.target;
//     // Animation for the span has ended, update the specific ::before style
//     const random_bubble_number = Math.floor(Math.random() * (37 - 13 + 1)) + 13;
//     animatedSpan.style.setProperty('--bubble-number',random_bubble_number)

    
//     // Log a message to the console
//     console.log('Animation for span ended');
//     console.log(animatedSpan)
//   });
// });

//body

//projects
// function expandDiv(element) {
//     element.classList.toggle("Projects-expanded");
//     console.log("Projects expanded");
//     console.log(element);
// }


function expandListItem(element, event) {
    var listItems = document.getElementsByClassName("project-card");
  
    for (var i = 0; i < listItems.length; i++) {
      if (listItems[i] === element && listItems[i].classList.contains("Project-expanded")) {
        if (event.target.classList.contains("back-arrow")) {
          listItems[i].classList.toggle("Project-expanded");
          listItems[i].classList.toggle("scale-cube");
          listItems[i].classList.add("back-animation");
  
          setTimeout(function (index) {
            if (listItems[index]) {
              listItems[index].classList.remove("back-animation");
            }
          }, 500, i);
        }
      } else if (listItems[i] === element) {
        listItems[i].classList.toggle("Project-expanded");
        listItems[i].classList.toggle("scale-cube");
        
      }
    }
}

