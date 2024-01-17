/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

document.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  const navbarShrink = () => {
    const mainNavMobile = document.body.querySelector("#mainNavmob");
    const mainNavDesktop = document.body.querySelector("#mainNavdesk");

    if (mainNavMobile && mainNavDesktop) {
      const shouldShrink = window.scrollY !== 0;
      mainNavMobile.classList.toggle("navbar-shrink", shouldShrink);
      mainNavDesktop.classList.toggle("navbar-shrink", shouldShrink);
    }
  };

  navbarShrink();

  document.addEventListener("scroll", navbarShrink);

  const mainNav = document.body.querySelector("#mainNavmob, #mainNavdesk");

  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: mainNav,
      rootMargin: "0px 0px -40%",
    });
  }
})

function navbarResponsive1() {
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = Array.from(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );

  responsiveNavItems.forEach((responsiveNavItem) => {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
}

function navbarResponsive1() {
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = Array.from(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );

  responsiveNavItems.forEach((responsiveNavItem) => {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
}

function navbarResponsive2() {
  const menuItems = document.querySelectorAll(".navbar-nav .nav-link");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    });
  });
}

navbarResponsive1();
navbarResponsive2();


function formatPhoneNumber(input) {
  let phoneNumber = input.value.replace(/\D/g, "");

  if (phoneNumber.length > 2) {
    phoneNumber = phoneNumber.substring(0, 2) + " " + phoneNumber.substring(2);
  }
  if (phoneNumber.length > 8) {
    phoneNumber = phoneNumber.substring(0, 8) + "-" + phoneNumber.substring(8);
  }
  if (phoneNumber.length > 15) {
    phoneNumber = phoneNumber.substring(0, 13);
  }

  input.value = phoneNumber;
}

const botaoExibirImagem = document.getElementById("exibir-imagem");
const overlay = document.getElementById("overlay");
const imagem = document.getElementById("imagem");
const fechar = document.getElementById("fechar");
const header = document.getElementById("page-top");

function bloquearRolagem() {
  document.body.style.overflow = "hidden";
}

function desbloquearRolagem() {
  document.body.style.overflow = "auto";
}

function desabilitarNavbar() {
  if (header) {
    header.style.display = "none";
  }
}

function habilitarNavbar() {
  if (header) {
    header.style.display = "block";
  }
}

function expandirImagem() {
  conteudo.style.height = "100vh";
}

function restaurarTamanhoImagem() {
  conteudo.style.height = "";
}

botaoExibirImagem.addEventListener("click", function () {
  const caminhoDaImagem = "assets/conteudo/sistemas/FolderGED.webp";
  imagem.setAttribute("src", caminhoDaImagem);
  overlay.style.display = "block";
  overlay.classList.add("active");
  bloquearRolagem();
  desabilitarNavbar();

  const carouselIndicators = document.querySelector(
    "#carouselsistemas .carousel-indicators"
  );
  carouselIndicators.style.display = "none";
  const carouselControls = document.querySelector(
    "#carouselsistemas .carousel-control-prev"
  );
  carouselControls.style.display = "none";
  const carouselControlsNext = document.querySelector(
    "#carouselsistemas .carousel-control-next"
  );
  carouselControlsNext.style.display = "none";
});

fechar.addEventListener("click", function () {
  imagem.setAttribute("src", "");
  overlay.style.display = "none";
  overlay.classList.remove("active");
  desbloquearRolagem();
  habilitarNavbar();
  const carouselIndicators = document.querySelector(
    "#carouselsistemas .carousel-indicators"
  );
  carouselIndicators.style.display = "block";
  const carouselControls = document.querySelector(
    "#carouselsistemas .carousel-control-prev"
  );
  carouselControls.style.display = "block";
  const carouselControlsNext = document.querySelector(
    "#carouselsistemas .carousel-control-next"
  );
  carouselControlsNext.style.display = "block";
});