const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  document.querySelectorAll(".membership-page details").forEach((detail) => {
    let matchFound = false;

    detail.querySelectorAll("li").forEach((li) => {
      const text = li.textContent.toLowerCase();
      const match = text.includes(query);

      li.style.display = match ? "list-item" : "none";
      if (match) matchFound = true;
    });

    detail.style.display = matchFound ? "block" : "none";
    detail.open = matchFound && query.length > 0;
  });
});

document.getElementById("expandAll").addEventListener("click", () => {
    document.querySelectorAll("details").forEach(detail => detail.open = true);
  });
  document.getElementById("collapseAll").addEventListener("click", () => {
    document.querySelectorAll("details").forEach(detail => detail.open = false);
  });
  