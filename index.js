// for appearing effect
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function (entry) {
        console.log(entry)
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

    
    if (colorMode.getAttribute("src") =="assets/sun.png") {
        //dark mode
        document.documentElement.style.setProperty('--backgound-color', '#201C1C');
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--border-color', 'white');
        document.documentElement.style.setProperty('--invert','0%');
        colorMode.src = "assets/moon.png";
    }else if (colorMode.getAttribute("src") =="assets/moon.png") {
        //light mode
        document.documentElement.style.setProperty('--backgound-color', '#f6f5f5');
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--border-color', 'black');
        colorMode.src = "assets/sun.png";
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
//BG
function updateBodyHeight() {
    document.documentElement.style.setProperty('--body-height', `${document.body.offsetHeight - 50}px`);
}
updateBodyHeight();
window.addEventListener('resize', updateBodyHeight);

// Math.floor(Math.random() * (max - min + 1)) + min;
function randomBG() {
    const elements = document.querySelectorAll('.bubbles span');
    elements.forEach((element, index) => {
        const myArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const randomString = myArray[Math.floor(Math.random() * myArray.length)];

        const random_BG_font_size = Math.floor(Math.random() * (48 - 17 + 1)) + 17;
        document.documentElement.style.setProperty('--BG-font-size',`${random_BG_font_size}px`)

        const random_bubble_number = Math.floor(Math.random() * (37 - 13 + 1)) + 13;
        element.style.cssText = `--bubble-number: ${random_bubble_number};`;

        const dynamicStyle = document.createElement('style');
        dynamicStyle.textContent = `.bubbles span:nth-child(${index + 1})::before { content: "${randomString}";
         font-size: ${random_BG_font_size}px; 
         --bubble-number: ${random_bubble_number};}`;
        document.head.appendChild(dynamicStyle);
    });

    const random_scale_before = Math.random() * (3 - 0.3) + 0.3;
    document.documentElement.style.setProperty('--scale-before',random_scale_before)
    console.log(random_scale_before);

    const random_scale_after = Math.random() * (3 - 0.3) + 0.3;
    document.documentElement.style.setProperty('--scale-after',random_scale_after)
    console.log(random_scale_after);

    const random_rotate_before = Math.floor(Math.random() * ((-90) - (-272) + 1)) + (-272);
    document.documentElement.style.setProperty('--BG-font-size',`${random_rotate_before}deg`)
    console.log(random_rotate_before);

    const random_rotate_after = Math.floor(Math.random() * (720 - (-272) + 1)) + (-272);
    document.documentElement.style.setProperty('--BG-font-size',`${random_rotate_before}deg`)
    console.log(random_rotate_after);
}
randomBG()