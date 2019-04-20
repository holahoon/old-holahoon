// == Header seection animation function
const headerAnimation = () => {
  TweenMax.fromTo(
    ".to-contact, .dk-logo",
    0.7,
    {
      y: -100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1
    }
  );
  TweenMax.to("#header", 1, {
    opacity: 1
  });
  TweenMax.staggerTo(
    ".stagger",
    0.6,
    {
      opacity: 1,
      y: 0,
      ease: Back.easeOut.config(1.6),
      delay: 0.5
    },
    0.1
  );
  TweenMax.to(".big-circle-red", 2, {
    opacity: 1,
    x: 0,
    rotation: -720,
    ease: Back.easeOut.config(0.7),
    delay: 1
  });
  TweenMax.to(".big-circle-white", 2, {
    opacity: 1,
    x: 0,
    ease: Back.easeOut.config(0.7),
    delay: 1
  });
  TweenMax.to("#header p", 0.5, {
    opacity: 1,
    y: 0,
    delay: 1
  });
};

// === Project flag animation
const projectFlagAnimation = () => {
  // Init controller
  const controller = new ScrollMagic.Controller();
  // TweenMax
  const tween_project_logo1 = TweenMax.to(".flag1", 0.5, {
    y: 0,
    x: -5
  });
  const tween_project_logo3 = TweenMax.to(".flag3", 0.5, {
    y: -25,
    x: 5
  });
  // ScrollMagic
  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".project-list",
    offset: -550
  })
    .setTween(tween_project_logo1)
    .addTo(controller);
  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".project-list",
    offset: -550
  })
    .setTween(tween_project_logo3)
    .addTo(controller);
};

// === Project list animation function
const projectListAnimation = () => {
  // Init controller
  const controller = new ScrollMagic.Controller();
  // TweenMax
  const tween_project_list = TweenMax.staggerFrom(
    ".project-list li",
    0.5,
    {
      opacity: 0,
      x: 400,
      ease: Power2.easeInOut,
      delay: 0.3
    },
    0.1
  );

  // ScrollMagic
  const scene1 = new ScrollMagic.Scene({
    triggerElement: ".project-list",
    offset: -300
  })
    .setTween(tween_project_list)
    .addTo(controller);
};

// === Project image animation function
const projectImageAnimation = () => {
  // Init controller
  const controller = new ScrollMagic.Controller();
  // TweenMax
  const Tween_project1 = TweenMax.from(".project-1", 3, {
    y: 40,
    ease: Power2.easeInOut
  });
  const Tween_project1_candy = TweenMax.from(".candy1", 0.5, {
    rotation: -360,
    transformOrigin: "left",
    delay: 0.1
  });
  const Tween_project2 = TweenMax.from(".project-2", 3, {
    y: 40,
    ease: Power2.easeInOut
  });
  const Tween_project2_candy = TweenMax.from(".candy2", 0.5, {
    rotation: -360,
    transformOrigin: "left",
    delay: 0.1
  });
  const Tween_project3 = TweenMax.from(".project-3", 3, {
    y: 40,
    ease: Power2.easeInOut
  });
  const Tween_project3_candy = TweenMax.from(".candy3", 0.5, {
    rotation: -360,
    transformOrigin: "left",
    delay: 0.1
  });
  const Tween_project4 = TweenMax.from(".project-4", 3, {
    y: 40,
    ease: Power2.easeInOut
  });
  const Tween_project4_candy = TweenMax.from(".candy4", 0.5, {
    rotation: -360,
    transformOrigin: "left",
    delay: 0.1
  });
  // TimelineLite
  const timeline1 = new TimelineLite();
  const timeline2 = new TimelineLite();
  const timeline3 = new TimelineLite();
  const timeline4 = new TimelineLite();
  timeline1.add(Tween_project1).add(Tween_project1_candy);
  timeline2.add(Tween_project2).add(Tween_project2_candy);
  timeline3.add(Tween_project3).add(Tween_project3_candy);
  timeline4.add(Tween_project4).add(Tween_project4_candy);
  // ScrollMagic
  const scene5 = new ScrollMagic.Scene({
    triggerElement: ".project-1",
    offset: -200
  })
    .setTween(timeline1)
    .addTo(controller);
  const scene6 = new ScrollMagic.Scene({
    triggerElement: ".project-2",
    offset: -200
  })
    .setTween(timeline2)
    .addTo(controller);
  const scene7 = new ScrollMagic.Scene({
    triggerElement: ".project-3",
    offset: -200
  })
    .setTween(timeline3)
    .addTo(controller);
  const scene8 = new ScrollMagic.Scene({
    triggerElement: ".project-4",
    offset: -200
  })
    .setTween(timeline4)
    .addTo(controller);
};

/*
// === DK initial animation function
dkInitialAnimation = () => {
  // Init controller
  const controller = new ScrollMagic.Controller();
  // ScrollMagic
  const scene4 = new ScrollMagic.Scene({
    triggerElement: ".side-initial",
    duration: 150,
    triggerHook: 0
  })
    .setPin(".side-initial")
    .addTo(controller);
};
*/

// === Hustle paragraph animation function
const hustleParagraphAnimation = () => {
  // Init controller
  const controller = new ScrollMagic.Controller();
  // TweenMax
  const hustle = TweenMax.staggerFrom(
    ".contact-paragraph h5, .contact-paragraph p, .contact-paragraph h6",
    0.6,
    {
      opacity: 0,
      x: -300,
      ease: Power2.easeOut,
      delay: 0.2
    },
    0.2
  );
  // ScrollMagic
  const scene = new ScrollMagic.Scene({
    triggerElement: ".contact-paragraph",
    offset: -200
  })
    .setTween(hustle)
    .addTo(controller);
};

// === Scroll to bottom function
const scrollToBottom = () => {
  TweenMax.to(window, 1, { scrollTo: { y: "#contact footer" } });
};

// === Scroll to top function
const scrollToTop = () => {
  TweenMax.to(window, 1, {
    scrollTo: { y: 0 },
    delay: 0.4
  });
  TweenMax.to(".top-arrow", 0.45, {
    opacity: 0,
    y: -200,
    ease: Elastic.easeIn.config(2.5, 0.75)
  });
  TweenMax.to(".top-arrow", 0.1, {
    y: 0,
    opacity: 1,
    delay: 1
  });
};

// === Scroll to each project
const scrollToProject = index => {
  TweenMax.to(window, 1, {
    scrollTo: { y: `#project${index + 1}`, offsetY: 250 }
  });
};

// === Email click events
const copyEmail = () => {
  const span_email = document.querySelector(".span-email");
  const email = document.querySelector(".click-email");

  // If window is in PC width
  if (window.innerWidth > 1024) {
    // toggle 'reveal' class to show/hide email
    if (email.classList.contains("reveal")) {
      email.classList.remove("reveal");
    } else {
      email.classList.add("reveal");
      setTimeout(showCopiedText, 500);
    }

    // copy email
    span_email.addEventListener("copy", e => {
      e.preventDefault();
      if (e.clipboardData) {
        e.clipboardData.setData("text/plain", span_email.dataset.email);
        console.log("copied: " + e.clipboardData.getData("text"));
      }
    });
    document.execCommand("copy");
    // If window is less than PC width (tablet phone)
  } else {
    window.location.href =
      "mailto:hola.hoon@gmail.com?subject=&body=Thank you for contacting me =)";
  }
};

// === Resume button click event
const span_resume = document.querySelector(".span-resume");
span_resume.addEventListener("click", event => {
  event.preventDefault();
  const email = document.querySelector(".click-email");

  if (email.classList.contains("reveal")) {
    email.classList.remove("reveal");
  }
});

// === show "copied" text after 0.5 seconds
function showCopiedText() {
  const copied = document.querySelector(".copied");
  copied.style.opacity = "1";
}
// - show "copied" text after 3 seconds
function hideCopiedText() {
  const copied = document.querySelector(".copied");
  copied.style.opacity = "0";
}

// ******** Start animation on page load ********
// === Window load, let headers to animate ===
document.addEventListener("DOMContentLoaded", event => {
  window.onload = function() {
    // Header animation
    headerAnimation();
    // project list li animation
    projectListAnimation();
    // Flag white stripe animation
    projectFlagAnimation();
    // Project image slide up
    projectImageAnimation();
    // Scroll -> big DK initial sticky
    // dkInitialAnimation();
    // Hustle paragraph
    hustleParagraphAnimation();

    // - Scroll to each project
    const project_lists = document.querySelectorAll(".project-list li");
    project_lists.forEach((project, index) => {
      project.addEventListener("click", () => {
        console.log(index);
        scrollToProject(index);
      });
    });

    // - Contact-button -> scroll to the bottom
    const contact_button = document.querySelector(".to-contact");
    contact_button.onclick = function() {
      scrollToBottom();
    };

    // - top-arrow -> scroll to the top
    const top_arrow = document.querySelector(".top-arrow");
    top_arrow.onclick = function() {
      scrollToTop();
    };
  };
});
