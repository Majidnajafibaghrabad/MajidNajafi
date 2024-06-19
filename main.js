let slideIndex = 1; // Initialize slideIndex to 1 to show the first slide
    showSlides(slideIndex); // Call showSlides to display the initial slide
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        
        if (n > slides.length) {
            slideIndex = 1; // Reset to the first slide if n exceeds the total number of slides
        }
        
        if (n < 1) {
            slideIndex = slides.length; // Set to the last slide if n is less than 1
        }
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  // Hide all slides initially
        }
        
        slides[slideIndex - 1].style.display = "block";  // Display the current slide
    }

// اسکرول و افزودن/حذف کلاس هنگام نمایش عناصر
function checkSlide() {
    const triggerClass = document.querySelector('.trigger-class');
    const boxes = document.querySelectorAll('.education-block, .research-columns, .honors-awards-columns');

    const triggerClassBottom = triggerClass.offsetTop + triggerClass.offsetHeight - 20;
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const slideInAt = window.scrollY + window.innerHeight - 20;

        const boxBottom = boxTop + box.offsetHeight;
        const isHalfShown = slideInAt > boxTop;
        const isNotScrolledPast = window.scrollY < boxBottom;

        if (isHalfShown && isNotScrolledPast) {
            box.classList.add('slide-in');
        } else {
            box.classList.remove('slide-in');
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    checkSlide();
});


window.addEventListener('scroll', checkSlide);


document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#open-menu-btn');
    const closeBtn = document.querySelector('#close-menu-btn');
    const menu = document.querySelector('.nav__menu');

    const openNav = () => {
        menu.style.display = 'block';
        closeBtn.style.display = 'inline-block';
        menuBtn.style.display = 'none';
    };

    const closeNav = () => {
        menu.style.display = 'none';
        closeBtn.style.display = 'none';
        menuBtn.style.display = 'inline-block';
    };

    menuBtn.addEventListener('click', openNav);
    closeBtn.addEventListener('click', closeNav);

    const handleNavItemClick = () => {
        document.querySelectorAll('.nav__menu li a').forEach(navItem => {
            navItem.addEventListener('click', closeNav);
        });
    };

    const removeNavItemClickListeners = () => {
        document.querySelectorAll('.nav__menu li a').forEach(navItem => {
            navItem.removeEventListener('click', closeNav);
        });
    };

    const updateNavListeners = () => {
        if (window.innerWidth < 1024) {
            handleNavItemClick();
        } else {
            removeNavItemClickListeners();
        }
    };

    const resetNavDisplay = () => {
        if (window.innerWidth >= 1024) {
            menu.style.display = 'flex'; // Change to 'flex' to ensure items are lined up correctly
            closeBtn.style.display = 'none';
            menuBtn.style.display = 'none';
        } else {
            menu.style.display = 'none';
            closeBtn.style.display = 'none';
            menuBtn.style.display = 'inline-block';
        }
    };

    // Initial setup
    updateNavListeners();
    resetNavDisplay();

    // Listen for resize events
    window.addEventListener('resize', () => {
        updateNavListeners();
        resetNavDisplay();
    });
});

// تغییر زنگ نوبار زمان اسکرول
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// نمایش حروف به تاخیر
const sentence = "Majid Najafi";
const sentenceElement = document.getElementById("sentence");
let index = 0;

function showLetter() {
    if (index < sentence.length) {
        sentenceElement.textContent += sentence[index];
        index++;
        setTimeout(showLetter, 200);
    }
}

showLetter();
    