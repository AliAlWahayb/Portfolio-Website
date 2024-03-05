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
    document.documentElement.style.setProperty('--body-height', `${document.body.offsetHeight}px`);
}

updateBodyHeight();
  
window.addEventListener('resize', updateBodyHeight);
