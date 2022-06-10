import { includeHTML } from "./utils.js";

window.onload = () => {
  const conduit = document.querySelector("#conduit");
  const home = document.querySelector("#home");
  const signIn = document.querySelector("#signIn");
  const signUp = document.querySelector("#signUp");
  const navLink = document.querySelectorAll(".nav-link");

  const route = (nav) => {
    navLink.forEach((link) => {
      link.classList.remove("active");
    });
    nav.classList.add("active");
  };

  window.location.replace("/#/");
  includeHTML("home-page-html");

  conduit.addEventListener("click", (event) => {
    event.preventDefault();
    route(home);
    includeHTML("home-page-html");
  });

  home.addEventListener("click", (event) => {
    event.preventDefault();
    route(home);
    includeHTML("home-page-html");
  });

  signIn.addEventListener("click", (event) => {
    event.preventDefault();
    route(signIn);
    includeHTML("login-page-html");
  });

  signUp.addEventListener("click", (event) => {
    event.preventDefault();
    route(signUp);
    includeHTML("register-page-html");
  });
};
