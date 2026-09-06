/* =========================================================
   BENEATH EVERYTHING
   AUTHOR PAGE JAVASCRIPT

   Author: Bradley Hobbs
   Version: 1.0
========================================================= */


document.addEventListener(
  "DOMContentLoaded",
  () => {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle =
      document.querySelector(
        ".menu-toggle"
      );


    const navigation =
      document.querySelector(
        ".site-navigation"
      );


    const navigationLinks =
      document.querySelectorAll(
        ".site-navigation a"
      );


    if (
      menuToggle &&
      navigation
    ) {

      menuToggle.addEventListener(
        "click",
        () => {

          const isOpen =
            navigation.classList.toggle(
              "is-open"
            );


          menuToggle.setAttribute(
            "aria-expanded",
            isOpen
          );

        }
      );


      navigationLinks.forEach(
        (link) => {

          link.addEventListener(
            "click",
            () => {

              navigation.classList.remove(
                "is-open"
              );


              menuToggle.setAttribute(
                "aria-expanded",
                "false"
              );

            }
          );

        }
      );

    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape" &&
          navigation &&
          navigation.classList.contains(
            "is-open"
          )
        ) {

          navigation.classList.remove(
            "is-open"
          );


          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );


          menuToggle.focus();

        }

      }
    );


  }
);
