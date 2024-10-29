let h1 = document.querySelectorAll(".nav-link");
for (i = 0; i < h1.length; i++) {
  h1[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "nav-link");
    this.className = "active";
  });
}
// sticky bar will show on that point
const nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
// menu button when click on button menu will show
let menuButton = document.querySelector(".navbar-toggler");
let value = 1;

menuButton.addEventListener("click", function () {
  if (value === 1) {
    gsap.to(".navbar-collapse", {
      duration: 0.5,
      display: "block",
    });
    value = 2;
  } else {
    gsap.to(".navbar-collapse", {
      duration: 0.5,
      display: "none",
    });
    value = 1;
  }
});

let currentIndex = 0;
const testimonialsPerPage = 3;
const testimonials = document.querySelectorAll(".testimonial");
const track = document.querySelector(".testimonial-track");
const paginationDotsContainer = document.getElementById("pagination-dots");

// Calculate total number of pages
const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

// Create pagination dots based on the total number of pages
function createPaginationDots() {
  paginationDotsContainer.innerHTML = "";
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("span");
    dot.classList.add("pagination-dot");
    if (i === 0) dot.classList.add("active1");
    dot.addEventListener("click", () => goToPage(i));
    paginationDotsContainer.appendChild(dot);
  }
}

// Show testimonials by adjusting the transform of the testimonial track
function showTestimonials() {
  const offset = (currentIndex * -100) / testimonialsPerPage;
  track.style.transform = `translateX(${offset}%)`;
  updatePaginationDots();
}

// Go to a specific page based on the dot clicked
function goToPage(pageIndex) {
  currentIndex = pageIndex;
  showTestimonials();
}

// Update pagination dots to reflect the active page
function updatePaginationDots() {
  document.querySelectorAll(".pagination-dot").forEach((dot, index) => {
    dot.classList.toggle("active1", index === currentIndex);
  });
}

// Initialize
createPaginationDots();
showTestimonials();

// page overloading animatino
let ani = document.querySelectorAll(".ani");
ani.forEach(function (elem) {
  gsap.to(elem, {
    y: 0,
    duration: 1.5,
    opacity: 1,
    scrollTrigger: {
      trigger: elem,
      scroller: "body",
      start: "top 100%",
    },
  });
});
