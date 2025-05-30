function mostrarSeccion(id) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");

 document.querySelectorAll("nav a").forEach(link => link.classList.remove("active"));
  const activeLink = Array.from(document.querySelectorAll("nav a")).find(a => a.textContent.toLowerCase().includes(id));
  if (activeLink) activeLink.classList.add("active");
}
