//Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault(); //Prevent page reload
        const sectionId = link.getAttribute("data-section");
        document.getElementById(sectionId).scrollIntoView({
          behavior: "smooth"
        });
    });
  });
});