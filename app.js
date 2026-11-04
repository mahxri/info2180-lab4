document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("query");
  const result = document.getElementById("result");

  document.getElementById("search").addEventListener("click", () => {
    const query = input.value.trim();
    fetch("superheroes.php?query=" + encodeURIComponent(query))
      .then(res => res.text())
      .then(html => { result.innerHTML = html; })
      .catch(() => { result.textContent = "Something went wrong."; });
  });
});