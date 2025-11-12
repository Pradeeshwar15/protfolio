// ===== Smooth Scrolling =====
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: "smooth"
    });
  });
});

// ===== Active Navbar Highlight on Scroll =====
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach(li => {
    li.classList.remove("active");
    if (li.getAttribute("href") === `#${current}`) {
      li.classList.add("active");
    }
  });
});

// ===== Contact Form =====
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    // Get form data
    const name = contactForm.querySelector("input[type='text']").value.trim();
    const email = contactForm.querySelector("input[type='email']").value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (name && email && message) {
      // Display confirmation message
      alert("✅ Message Sent Successfully! Thank you, " + name + "!");
      contactForm.reset();
    } else {
      alert("⚠️ Please fill out all fields before submitting.");
    }
  });
}

// ===== Scroll Animation Reveal (Simple Fade) =====
const revealElements = document.querySelectorAll("section");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("reveal-visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
// ===== SCROLL REVEAL EFFECT =====
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

// Run on scroll and on load
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
