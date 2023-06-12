// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  let x = links.classList.contains("show-links");
  //   if (!x) {
  //     links.classList.add("show-links");
  //   } else {
  //     links.classList.remove("show-links");
  //   }
  links.classList.toggle("show-links");
});
