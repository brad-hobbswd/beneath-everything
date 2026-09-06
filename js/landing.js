/* =========================================================
   BENEATH EVERYTHING
   LANDING PAGE JAVASCRIPT

   Author: Bradley Hobbs
   File: js/landing.js
   Version: 1.0
========================================================= */


/* =========================================================
   DOM ELEMENTS
========================================================= */

const header = document.querySelector(".site-header");

const menuToggle = document.querySelector(".menu-toggle");

const navigation = document.querySelector(".site-navigation");

const navigationLinks = document.querySelectorAll(
  ".site-navigation a"
);

const animatedSections = document.querySelectorAll(
  ".section, .final-section"
);


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function toggleNavigation() {
  if (!menuToggle || !navigation) {
    return;
  }

  const isOpen = navigation.classList.toggle(
    "active"
  );

  menuToggle.classList.toggle(
    "active",
    isOpen
  );

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  document.body.classList.toggle(
    "menu-open",
    isOpen
  );
}


if (menuToggle) {
  menuToggle.addEventListener(
    "click",
    toggleNavigation
  );
}


/* =========================================================
   CLOSE MOBILE NAVIGATION
========================================================= */

navigationLinks.forEach((link) => {
  link.addEventListener(
    "click",
    () => {
      if (
        !navigation ||
        !menuToggle
      ) {
        return;
      }

      navigation.classList.remove(
        "active"
      );

      menuToggle.classList.remove(
        "active"
      );

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.classList.remove(
        "menu-open"
      );
    }
  );
});


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

function updateHeader() {
  if (!header) {
    return;
  }

  if (window.scrollY > 40) {
    header.classList.add(
      "scrolled"
    );
  } else {
    header.classList.remove(
      "scrolled"
    );
  }
}


window.addEventListener(
  "scroll",
  updateHeader,
  {
    passive: true
  }
);


updateHeader();


/* =========================================================
   SMOOTH ANCHOR NAVIGATION
========================================================= */

const anchorLinks = document.querySelectorAll(
  'a[href^="#"]'
);


anchorLinks.forEach((link) => {
  link.addEventListener(
    "click",
    (event) => {
      const targetId = link.getAttribute(
        "href"
      );

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const targetElement =
        document.querySelector(
          targetId
        );

      if (!targetElement) {
        return;
      }

      event.preventDefault();

      const headerHeight =
        header
          ? header.offsetHeight
          : 0;

      const targetPosition =
        targetElement.getBoundingClientRect()
          .top +
        window.pageYOffset -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  );
});


/* =========================================================
   SCROLL REVEAL ANIMATIONS
========================================================= */

const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


if (
  !prefersReducedMotion &&
  animatedSections.length > 0
) {

  animatedSections.forEach(
    (section) => {
      section.classList.add(
        "reveal-section"
      );
    }
  );


  const revealObserver =
    new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => {
            if (
              entry.isIntersecting
            ) {
              entry.target.classList.add(
                "revealed"
              );

              revealObserver.unobserve(
                entry.target
              );
            }
          }
        );
      },
      {
        threshold: 0.12
      }
    );


  animatedSections.forEach(
    (section) => {
      revealObserver.observe(
        section
      );
    }
  );

}


/* =========================================================
   REDUCED MOTION SUPPORT
========================================================= */

if (prefersReducedMotion) {

  animatedSections.forEach(
    (section) => {
      section.classList.add(
        "revealed"
      );
    }
  );

}
