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
  document
    .querySelectorAll("details")
    .forEach((detail) => (detail.open = true));
});
document.getElementById("collapseAll").addEventListener("click", () => {
  document
    .querySelectorAll("details")
    .forEach((detail) => (detail.open = false));
});

// activeMembers.js
const activeMembers = [
  { number: "#57", name: "Tou Xiong Lor", nickname: "Arcas" },
  { number: "#56", name: "Kyle Yang", nickname: "Aros" },
  { number: "#55", name: "Chuefeng Moua", nickname: "anømaly" },
  { number: "#54", name: "James Chang", nickname: "FΛKER" },
  { number: "#53", name: "Aaron Le", nickname: "CΛRNAGE" },
  { number: "#52", name: "Kha Tran", nickname: "ITΛCHI" },
  { number: "#51", name: "Andy Vue", nickname: "Karna" },
  { number: "#50", name: "Eric Nguyen", nickname: "BLΛDE" },
  { number: "#49", name: "Andy Wang", nickname: "DIABLO" },
  { number: "#48", name: "William Ly", nickname: "Gohan" },
  { number: "#47", name: "Ulysses Vang", nickname: "Zeus" },
  { number: "#46", name: "Leonardo Ruiz", nickname: "Q.A.A" },
  { number: "#45", name: "Zarni Htet", nickname: "Reliq" },
  { number: "#44", name: "Brandon Simpraphone", nickname: "Jokr" },
  { number: "#43", name: "Colin Yang", nickname: "jøndo" },
  { number: "#42", name: "Dennis Nguyen", nickname: "JUGGERNAUT" },
  { number: "#41", name: "Jerry Yu", nickname: "VENØM" },
  { number: "#40", name: "Ethan Pham", nickname: "Deku" },
];

const listContainer = document.getElementById("members-list");

activeMembers.forEach((member) => {
  const li = document.createElement("li");
  li.textContent = `${member.number} ${member.name} “${member.nickname}”`;
  listContainer.appendChild(li);
});
