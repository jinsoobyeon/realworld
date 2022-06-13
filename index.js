import { includeHTML } from "./utils.js";

window.onload = () => {
  const navLink = document.querySelectorAll(".nav-link");

  const route = (state, url) => {
    navLink.forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelector(`#${state.title}`).classList.add("active");
    history.pushState(state, state.title, url);
    includeHTML(state.file);
  };

  history.replaceState(
    { file: "home-page-html", title: "home" },
    "home",
    "/#/"
  );
  includeHTML("home-page-html");

  window.addEventListener("popstate", () => {
    navLink.forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelector(`#${history.state.title}`).classList.add("active");
    includeHTML(history.state.file);
  });

  conduit.addEventListener("click", (event) => {
    event.preventDefault();
    route({ file: "home-page-html", title: "home" }, "/#/");
  });

  home.addEventListener("click", (event) => {
    event.preventDefault();
    route({ file: "home-page-html", title: "home" }, "/#/");
  });

  signIn.addEventListener("click", (event) => {
    event.preventDefault();
    route({ file: "login-page-html", title: "signIn" }, "/#/login");
  });

  signUp.addEventListener("click", (event) => {
    event.preventDefault();
    route({ file: "register-page-html", title: "signUp" }, "/#/register");
  });
};
