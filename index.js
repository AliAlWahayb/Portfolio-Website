// For appearing effect
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: [0.2, 1],
    rootMargin: '120px'
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  
  hiddenElements.forEach(function(element) {
    observer.observe(element);
  });
  
  // For header icons
  // For dark mode
  const colorMode = document.getElementById('dark-mode');
  
  colorMode.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    colorMode.src = document.body.classList.contains('light-mode') ? 'assets/sun.png' : 'assets/moon.png';
  });
  
  // For language
  const language = document.getElementById('english');
  
  language.addEventListener('click', function() {
    if (language.getAttribute('src') === 'assets/gb.svg') {
      language.src = 'assets/sa.svg';
    } else if (language.getAttribute('src') === 'assets/sa.svg') {
      language.src = 'assets/gb.svg';
    }
  });
  
  // Progress bar
  const filled = document.querySelector('.filled');
  
  function progressBar() {
    filled.style.width = `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`;
  }
  
  window.addEventListener('scroll', progressBar);
  window.addEventListener('resize', progressBar);
  
  // Function to handle navigation when clicking on internal links
  function navigateToSection(sectionId) {
    // Scroll to the desired section
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  
    // Prevent the default link behavior
    event.preventDefault();
  }
  
  // Update body height
  function updateBodyHeight() {
    document.documentElement.style.setProperty('--body-height', `${document.body.offsetHeight - 50}px`);
  }
  
  updateBodyHeight();
  window.addEventListener('resize', updateBodyHeight);
  
  // Initialize random background
  function initRandomBG() {
    const elements = document.querySelectorAll('.bubbles span');
    const myArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const animationArray = ['animate1', 'animate2', 'animate3', 'animate4'];
  
    elements.forEach(function(element, index) {
      const randomString = myArray[Math.floor(Math.random() * myArray.length)];
      const randomAnimation = animationArray[Math.floor(Math.random() * animationArray.length)];
      const random_BG_font_size = Math.floor(Math.random() * (48 - 17 + 1)) + 17;
      const random_bubble_number = Math.floor(Math.random() * (30 - 8 + 1)) + 8;
  
      element.style.cssText = `--bubble-number: ${random_bubble_number};`;
  
      const dynamicStyle = document.createElement('style');
      dynamicStyle.textContent = `.bubbles span:nth-child(${index + 1})::before {
        content: "${randomString}";
        font-size: ${random_BG_font_size}px;
        animation: ${randomAnimation} linear infinite;
        animation-duration: calc(1250s / ${random_bubble_number});
      }`;
  
      document.head.appendChild(dynamicStyle);
    });
  
    const random_scale_before = Math.random() * (1 - 0.3) + 0.3;
    document.documentElement.style.setProperty('--scale-before', random_scale_before);
  
    const random_scale_after = Math.random() * (2.1 - 1.1) + 1.1;
    document.documentElement.style.setProperty('--scale-after', random_scale_after);
  
    const random_rotate_before = Math.floor(Math.random() * (-272 - -90 + 1)) + -90;
    document.documentElement.style.setProperty('--rotate-before', `${random_rotate_before}deg`);
  
    const random_rotate_after = Math.floor(Math.random() * (720 - 0 + 1)) + 0;
    document.documentElement.style.setProperty('--rotate-after', `${random_rotate_after}deg`);
  }
  if (!(window.matchMedia('(max-width: 768px)').matches)) {
    initRandomBG();
  }
  
  
  // Expand project details
  function expandListItem(element, event) {
    if (window.matchMedia('(max-width: 768px)').matches) {
      return;
    }
  
    if (event.target.classList.contains('back-arrow')) {
      element.classList.toggle('Project-expanded');
      element.classList.toggle('scale-cube');
      element.classList.add('back-animation');
  
      setTimeout(function() {
        element.classList.remove('back-animation');
      }, 500);
    } else {
      element.classList.toggle('Project-expanded');
      element.classList.toggle('scale-cube');
    }
  }
  
//splash screen
window.addEventListener("load", function() {
    var splashScreen = document.getElementById("splash-screen");
    splashScreen.style.display = "none"; // Hide the splash screen when the page loads
});

var isIOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);

if (isIOS) {
  var element = document.getElementById("start");
  element.classList.remove("welcome-name");
  element.classList.add("welcome-name-ios");
}