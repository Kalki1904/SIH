// Insert markers & popups into map
const mapContainer = document.querySelector(".map-container");
places.forEach(place => {
  // Marker
  const marker = document.createElement("div");
  marker.className = "marker";
  marker.dataset.id = place.id;
  marker.style.top = place.coords.top;
  marker.style.left = place.coords.left;

  // Popup
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.dataset.id = place.id;
  popup.style.top = `calc(${place.coords.top} - 14%)`;
  popup.style.left = `calc(${place.coords.left} + 7%)`;
  popup.innerHTML = `
    <img src="${place.img}" alt="${place.name}">
    <strong>${place.name}</strong>
    <p>${place.desc}</p>
  `;

  mapContainer.appendChild(marker);
  mapContainer.appendChild(popup);
});

// Build accordion sections dynamically
const accordion = document.querySelector(".accordion");
const categories = [...new Set(places.map(p => p.category))];

categories.forEach(cat => {
  const btn = document.createElement("button");
  btn.className = "accordion-btn";
  btn.innerHTML = `📍 ${cat}`;
  const content = document.createElement("div");
  content.className = "accordion-content";

  const grid = document.createElement("div");
  grid.className = "card-grid";

  places.filter(p => p.category === cat).forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = p.id;
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <p>${p.name}</p>
    `;
    grid.appendChild(card);
  });

  content.appendChild(grid);
  accordion.appendChild(btn);
  accordion.appendChild(content);
});

// Accordion toggle
document.addEventListener("click", e => {
  if(e.target.classList.contains("accordion-btn")) {
    const content = e.target.nextElementSibling;
    content.style.display = (content.style.display === "block") ? "none" : "block";
  }
});

// Hover card → show marker & popup
document.addEventListener("mouseover", e => {
  if(e.target.closest(".card")) {
    const id = e.target.closest(".card").dataset.id;
    document.querySelector(`.marker[data-id="${id}"]`).style.display = "block";
    document.querySelector(`.popup[data-id="${id}"]`).style.display = "block";
  }
});
document.addEventListener("mouseout", e => {
  if(e.target.closest(".card")) {
    const id = e.target.closest(".card").dataset.id;
    document.querySelector(`.marker[data-id="${id}"]`).style.display = "none";
    document.querySelector(`.popup[data-id="${id}"]`).style.display = "none";
  }
});
