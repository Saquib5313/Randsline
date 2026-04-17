window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;

    let up = document.querySelector(".parallax-up");
    let down = document.querySelector(".parallax-down");

    if (up) {
        up.style.transform = `translateY(${scrollY * -1}px)`;
    }

    if (down) {
        down.style.transform = `translateY(${scrollY * 3.15}px)`;
    }
});


gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector(".plane-img");
const targetSection = document.querySelector(".video-full-section");

// STEP 1 → Expand & Fix
ScrollTrigger.create({
  trigger: ".hero-section",
  start: "top top",
  end: "bottom top",
  scrub: true,

  onEnter: () => {
    video.classList.add("video-fixed");
  },

  onLeave: () => {
  video.classList.remove("video-fixed");

  // move to section
  targetSection.appendChild(video);

  // 🔥 FORCE full width properly
  gsap.set(video, {
    position: "relative",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    x: 0,
    y: 0,
    clearProps: "transform",
    borderRadius: "0px"
  });
},

  onEnterBack: () => {
    // when scrolling back up
    document.querySelector(".video-wrapper").appendChild(video);
    video.classList.remove("video-fixed");
  }
});


gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".zoomship-img",
  {
    scale: 1.2 // start zoomed IN
  },
  {
    scale: 0.85, // zoom OUT on scroll down
    ease: "none",
    scrollTrigger: {
      trigger: ".zoomship-img",
      start: "top bottom",   // when image enters screen
      end: "bottom top",     // when it leaves
      scrub: true            // 🔥 THIS makes it reversible (zoom in/out)
    }
  }
);




const cards = document.querySelectorAll(".stack-card");
const section = document.querySelector(".stack-scroll");

window.addEventListener("scroll", () => {
  const sectionTop = section.offsetTop;
  const scroll = window.scrollY - sectionTop;

  cards.forEach((card, i) => {
    const trigger = i * 300;

    if (scroll > trigger) {
      card.style.transform = "translateY(0)";
    } else {
      card.style.transform = "translateY(100%)";
    }
  });
});




document.querySelectorAll(".freight-header").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const isActive = item.classList.contains("active");

    // close all
    document.querySelectorAll(".freight-item").forEach(i => {
      i.classList.remove("active");
      i.querySelector(".toggle-btn").innerText = "+";
      i.querySelector(".freight-body")?.classList.remove("show");
    });

    // open clicked (only if it was closed)
    if (!isActive) {
      item.classList.add("active");
      header.querySelector(".toggle-btn").innerText = "−";
      item.querySelector(".freight-body")?.classList.add("show");
    }
  });
});

window.addEventListener("scroll", function () {
  const timeline = document.querySelector(".timeline-section");
  const progress = document.querySelector(".timeline-progress");

  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  let scrollPercent = (windowHeight - rect.top) / (rect.height + windowHeight);

  scrollPercent = Math.max(0, Math.min(1, scrollPercent));

  progress.style.height = scrollPercent * 100 + "%";
});



