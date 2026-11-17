
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

// Mobile navigation
menuBtn.addEventListener("click", () => {
    const open = navbar.classList.toggle("active");
    menuBtn.textContent = open ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", open);
});

// Close menu after clicking a link
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Update footer year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Profile photo preview
const photoInput = document.getElementById("photoInput");
const profileImage = document.getElementById("profileImage");

let currentPhotoURL = null;

photoInput.addEventListener("change", event => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Please select an image.");
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        alert("Please choose an image smaller than 5 MB.");
        return;
    }

    if (currentPhotoURL) {
        URL.revokeObjectURL(currentPhotoURL);
    }

    currentPhotoURL = URL.createObjectURL(file);
    profileImage.src = currentPhotoURL;
});

// Back to top
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.classList.toggle("show", window.scrollY > 300);
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Reveal page elements as they enter the screen
const revealItems = document.querySelectorAll(
    ".skill-card, .project-card, .about-content, .profile-card"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealItems.forEach(item => observer.observe(item));
}

console.log("Developer Academy V2 successfully loaded!");
console.log("Made to Help.");

