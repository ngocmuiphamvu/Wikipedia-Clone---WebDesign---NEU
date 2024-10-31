// Example interactivity for bell icon notification alert
document.getElementById("bell-icon").addEventListener("click", function () {
    alert("You have no new notifications!");
  });
  
  // Search bar focus styling
  const searchBar = document.getElementById("search-bar");
  searchBar.addEventListener("focus", () => {
    searchBar.style.borderColor = "#4caf50";
  });
  searchBar.addEventListener("blur", () => {
    searchBar.style.borderColor = "#ddd";
  });
  