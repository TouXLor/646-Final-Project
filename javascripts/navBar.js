document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".page-header__nav-link");
  
    // Highlight based on current page
    const currentPath = window.location.pathname.split("/").pop();
    links.forEach(link => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  
    // Optional: also allow click-based highlight if you use JS routing
    links.forEach(link => {
      link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });
  