function includeHTML(attribute) {
  const tags = document.querySelectorAll("*");
  tags.forEach((tag) => {
    const element = tag;
    const file = element.getAttribute(attribute);
    if (file) {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            element.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            element.innerHTML = "Page not found.";
          }
          element.removeAttribute(attribute);
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
    }
  });
}

export { includeHTML };
