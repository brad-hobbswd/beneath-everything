/* =========================================================
   BENEATH EVERYTHING
   CHAPTER THREE JAVASCRIPT

   Chapter Three
   The Things He Could Not Hold Together

   Author: Bradley Hobbs
   Version: 1.0
========================================================= */


document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* =====================================================
       MOBILE NAVIGATION
    ====================================================== */

    const menuToggle =
      document.querySelector(".menu-toggle");


    const navigation =
      document.querySelector(".site-navigation");


    if (
      menuToggle &&
      navigation
    ) {

      menuToggle.addEventListener(
        "click",
        function () {

          const isOpen =
            navigation.classList.toggle("is-open");


          menuToggle.setAttribute(
            "aria-expanded",
            isOpen
          );

        }
      );


      const navigationLinks =
        navigation.querySelectorAll("a");


      navigationLinks.forEach(
        function (link) {

          link.addEventListener(
            "click",
            function () {

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
       CLOSE MOBILE MENU WITH ESCAPE
    ====================================================== */

    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape" &&
          navigation &&
          navigation.classList.contains("is-open")
        ) {

          navigation.classList.remove(
            "is-open"
          );


          if (menuToggle) {

            menuToggle.setAttribute(
              "aria-expanded",
              "false"
            );

          }

        }

      }
    );


  }
);
