/* ====================================================================================================================
================================   SLIDER   ================================================================
==================================================================================================================== */
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* ====================================================================================================================
================================   NAVBAR TOGGLER ||| NAVBAR   ================================================================
==================================================================================================================== */
//Toggle Navbar
var NAV_TOGGLER = document.querySelector(".NAV_TOGGLER");
NAV_TOGGLER.addEventListener("click", () => {
    if(document.querySelector(".NAV_TOGGLER_MENU").classList.contains("NAV_TOGGLER_CLOSE"))
    {
        document.querySelector(".NAV_TOGGLER_MENU").classList.remove("NAV_TOGGLER_CLOSE");
    }
    else
    {
        document.querySelector(".NAV_TOGGLER_MENU").classList.add("NAV_TOGGLER_CLOSE");
    }
})
//hide NAV BAR on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".NAV_TOGGLER_MENU").classList.contains("NAV_TOGGLER_CLOSE"))
    {
        document.querySelector(".NAV_TOGGLER_MENU").classList.add("NAV_TOGGLER_CLOSE");
    }
})
