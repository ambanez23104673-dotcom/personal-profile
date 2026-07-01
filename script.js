// =========================================
// DARK MODE
// =========================================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.innerHTML = "☀️ Light Mode";
    } else {
        darkModeBtn.innerHTML = "🌙 Dark Mode";
    }

});

// =========================================
// LIVE CLOCK
// =========================================

function updateClock() {

    const now = new Date();

    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    document.getElementById("clock").textContent =
        now.toLocaleString("en-US", options);

}

updateClock();
setInterval(updateClock, 1000);

// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    successMessage.textContent = "✅ Thank you! Your message has been sent successfully.";

    successMessage.style.color = "#16a34a";

    contactForm.reset();

    setTimeout(function () {
        successMessage.textContent = "";
    }, 3000);

});

// =========================================
// PROFILE PICTURE ANIMATION
// =========================================

const profile = document.querySelector(".profile-picture");

profile.addEventListener("mouseenter", function () {
    profile.style.transform = "scale(1.08)";
});

profile.addEventListener("mouseleave", function () {
    profile.style.transform = "scale(1)";
});

// =========================================
// TECH STACK ANIMATION
// =========================================

const techItems = document.querySelectorAll(".tech span");

techItems.forEach(function(item){

    item.addEventListener("mouseenter", function(){

        item.style.transform = "translateY(-5px) scale(1.05)";

    });

    item.addEventListener("mouseleave", function(){

        item.style.transform = "translateY(0) scale(1)";

    });

});

// =========================================
// WELCOME MESSAGE
// =========================================

window.onload = function(){

    console.log("Welcome to Augusto Manuel L. Bañez's Portfolio!");

};
