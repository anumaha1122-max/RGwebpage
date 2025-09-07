function performSearch() {
  const query = document.getElementById("searchInput").value;
  if (query.trim() !== "") {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
  } else {
    alert("Please enter a search term.");
  }
}
