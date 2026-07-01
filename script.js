// ==========================================
// HAMBURGER MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==========================================
// DARK MODE
// ==========================================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkModeBtn.innerHTML = "☀️ Light Mode";
    }else{
        darkModeBtn.innerHTML = "🌙 Dark Mode";
    }

});

// ==========================================
// LIVE CLOCK
// ==========================================

function updateClock(){

    const now = new Date();

    const options = {
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    };

    document.getElementById("clock").innerHTML =
        now.toLocaleString("en-US", options);

}

updateClock();

setInterval(updateClock,1000);

// ==========================================
// TYPING EFFECT
// ==========================================

const text =
"Future Software Developer | Web Developer | BS Computer Science Student";

let index = 0;

function typing(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,70);

    }

}

typing();

// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit",function(e){

    e.preventDefault();

    document.getElementById("successMessage").innerHTML =
    "✅ Thank you! Your message has been sent successfully.";

    contactForm.reset();

});

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 250){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

};

topBtn.addEventListener("click",function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});

// ==========================================
// PROFILE IMAGE ANIMATION
// ==========================================

const profile = document.querySelector(".profile-picture");

profile.addEventListener("mouseover",()=>{

    profile.style.transform = "scale(1.08) rotate(2deg)";

});

profile.addEventListener("mouseout",()=>{

    profile.style.transform = "scale(1)";

});

// ==========================================
// FADE-IN ANIMATION
// ==========================================

const cards = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = ".8s";

    observer.observe(card);

});
