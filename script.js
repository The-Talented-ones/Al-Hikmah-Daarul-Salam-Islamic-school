// // Load header
// fetch("header.html")
//       .then(res => res.text())
//       .then(data => {
//         document.getElementById("header-placeholder").innerHTML = data;
//         // Make the page visible once header is ready
//         document.body.style.visibility = "visible";
//       })
//       .catch(err => {
//         console.error("Error loading header:", err);
//         document.body.style.visibility = "visible";
//       });

// Load footer
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });

// JavaScript for Navbar and Slideshow

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Slideshow functionality
document.addEventListener("DOMContentLoaded", function () {
  const slideshowData = [
    {
      title1: "Al-Hikmah Daarus-salaam",
      title2: "Islamic School",
      description:
        "Providing quality Islamic education combined with modern academic excellence. Our institution nurtures young minds to become future leaders with strong moral character.",
      image: "images/image1.jpeg",
    },
    {
      title1: "Quality Education",
      title2: "Modern Facilities",
      description:
        "State-of-the-art classrooms, science labs, and sports facilities to provide a comprehensive learning environment for our students.",
      image: "images/image2.jpeg",
    },
    {
      title1: "Islamic Values",
      title2: "Moral Development",
      description:
        "We instill strong Islamic values and ethics, helping students develop into responsible citizens with good character and integrity.",
      image: "images/image3.jpeg",
    },
    {
      title1: "Extracurricular",
      title2: "Activities",
      description:
        "Various clubs, sports, and cultural activities to help students discover their talents and develop well-rounded personalities.",
      image: "images/image4.jpeg",
    },
    {
      title1: "Admission Open",
      title2: "2025-2026",
      description:
        "Various clubs, sports, and cultural activities to help students discover their talents and develop well-rounded personalities.",
      image: "images/image4.jpeg",
    },
  ];

  // DOM Elements
  const slideshowContainer = document.getElementById("slideshowContainer");
  let currentSlideIndex = 0;
  let slideInterval;

  // Initialize slideshow
  function initSlideshow() {
    // Create slides
    slideshowData.forEach((slide, index) => {
      const slideElement = document.createElement("div");
      slideElement.className = `slide-card ${index === 0 ? "active" : ""}`;
      slideElement.style.backgroundImage = `url('${slide.image}')`;

      const contentElement = document.createElement("div");
      contentElement.className = "slide-content";
      contentElement.innerHTML = `
            <div class="slide-title-1">${slide.title1}</div>
            <div class="slide-title-2">${slide.title2}</div>
            <div class="slide-description">${slide.description}</div>
          `;

      slideElement.appendChild(contentElement);
      slideshowContainer.appendChild(slideElement);
    });

    // Create pagination controls
    const paginationElement = document.createElement("div");
    paginationElement.className = "slideshow-pagination";
    paginationElement.innerHTML = `
          <div class="slide-arrow" id="prevSlide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div class="slide-progress-container">
            <div class="slide-progress" id="slideProgress"></div>
          </div>
          <div class="slide-counter">
            <span id="currentSlideNumber">1</span>/<span id="totalSlides">${slideshowData.length}</span>
          </div>
          <div class="slide-arrow" id="nextSlide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        `;

    slideshowContainer.appendChild(paginationElement);

    // Add event listeners
    document
      .getElementById("prevSlide")
      .addEventListener("click", showPreviousSlide);
    document
      .getElementById("nextSlide")
      .addEventListener("click", showNextSlide);

    // Start auto slideshow
    startAutoSlideshow();
  }

  // Show specific slide
  function showSlide(index) {
    const slides = document.querySelectorAll(".slide-card");
    const progress = document.getElementById("slideProgress");

    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Show selected slide
    slides[index].classList.add("active");

    // Update progress bar
    const progressWidth = ((index + 1) / slideshowData.length) * 100;
    progress.style.width = `${progressWidth}%`;

    // Update slide counter
    document.getElementById("currentSlideNumber").textContent = index + 1;

    currentSlideIndex = index;
  }

  // Show next slide
  function showNextSlide() {
    const nextIndex = (currentSlideIndex + 1) % slideshowData.length;
    showSlide(nextIndex);
    resetAutoSlideshow();
  }

  // Show previous slide
  function showPreviousSlide() {
    const prevIndex =
      (currentSlideIndex - 1 + slideshowData.length) % slideshowData.length;
    showSlide(prevIndex);
    resetAutoSlideshow();
  }

  // Start auto slideshow
  function startAutoSlideshow() {
    slideInterval = setInterval(showNextSlide, 5000);
  }

  // Reset auto slideshow timer
  function resetAutoSlideshow() {
    clearInterval(slideInterval);
    startAutoSlideshow();
  }

  // Pause auto slideshow on hover
  slideshowContainer.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  slideshowContainer.addEventListener("mouseleave", () => {
    startAutoSlideshow();
  });

  // Initialize slideshow when page loads
  window.addEventListener("load", initSlideshow);
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation links
  const navLinks = document.querySelectorAll(
    ".nav-link, .dropdown-item, .call-to-action"
  );
  const activePageIndicator = document.getElementById("activePageIndicator");

  // Function to set active nav link
  function setActiveNavLink(clickedLink) {
    // Remove active class from all nav links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add active class to clicked nav link
    clickedLink.classList.add("active");

    // Update the active page indicator
    const pageName = clickedLink.getAttribute("data-page");
    activePageIndicator.textContent = `Current Active Page: ${pageName.toUpperCase()}`;
  }

  // // Add click event listeners to all nav links
  // navLinks.forEach((link) => {
  //   link.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     setActiveNavLink(this);
  //   });
  // });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
