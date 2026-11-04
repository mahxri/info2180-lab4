document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("search").addEventListener("click", () => {
    fetch("superheroes.php")
      .then(res => res.text())
      .then(data => alert(data));
  });
});