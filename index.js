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
        document.documentElement.style.setProperty('--backgound-color', 'rgb(32, 28, 28)');
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--border-color', 'white');
        colorMode.src = "assets/moon.png";
    }else if (colorMode.getAttribute("src") =="assets/moon.png") {
        document.documentElement.style.setProperty('--backgound-color', 'white');
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
