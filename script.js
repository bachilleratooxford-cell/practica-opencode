const productos = [
  { id: 1, nombre: "Classic Gold", categoria: "clasico", precio: 299, imagen: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=400&fit=crop&auto=format", descripcion: "Reloj clásico con acabado dorado y correa de acero inoxidable." },
  { id: 2, nombre: "Omega Snoopy 50th Anniversary", categoria: "clasico", precio: 899, imagen: "https://loremflickr.com/600/400/watch?lock=1", descripcion: "Edición limitada Speedmaster con esfera Snoopy, movimiento manual y cronógrafo." },
  { id: 3, nombre: "Silver Elegance", categoria: "clasico", precio: 249, imagen: "https://loremflickr.com/600/400/watch?lock=2", descripcion: "Elegancia plateada con esfera minimalista y correa de cuero." },
  { id: 4, nombre: "Vintage Leather", categoria: "clasico", precio: 179, imagen: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=400&fit=crop&auto=format", descripcion: "Estilo vintage con correa de cuero marrón y detalles tradicionales." },
  { id: 5, nombre: "Pocket Classic", categoria: "clasico", precio: 199, imagen: "https://loremflickr.com/600/400/watch?lock=3", descripcion: "Reloj de bolsillo clásico con cadena dorada y tapa grabada." },
  { id: 6, nombre: "White Dial", categoria: "clasico", precio: 219, imagen: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=600&h=400&fit=crop&auto=format", descripcion: "Reloj con esfera blanca y numeración romana, estilo atemporal." },
  { id: 7, nombre: "Sport Chrono", categoria: "deportivo", precio: 199, imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop&auto=format", descripcion: "Cronógrafo deportivo con taquímetro y resistencia al agua 100m." },
  { id: 8, nombre: "Smart Watch Pro", categoria: "deportivo", precio: 299, imagen: "https://loremflickr.com/600/400/smartwatch?lock=1", descripcion: "Reloj inteligente con GPS, monitor cardíaco y pantalla táctil." },
  { id: 9, nombre: "Diver 300", categoria: "deportivo", precio: 349, imagen: "https://loremflickr.com/600/400/watch?lock=5", descripcion: "Buceo profesional hasta 300m con bisel giratorio y válvula de helio." },
  { id: 10, nombre: "Runner Pro", categoria: "deportivo", precio: 149, imagen: "https://loremflickr.com/600/400/watch?lock=6", descripcion: "Reloj deportivo ligero ideal para corredores y entrenamiento." },
  { id: 11, nombre: "Racing Chrono", categoria: "deportivo", precio: 269, imagen: "https://loremflickr.com/600/400/watch?lock=7", descripcion: "Inspirado en el automovilismo con cronógrafo de alta precisión." },
  { id: 12, nombre: "Luxury Diamond", categoria: "lujo", precio: 1299, imagen: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=400&fit=crop&auto=format", descripcion: "Reloj de lujo con incrustaciones de diamante y brillantez única." },
  { id: 13, nombre: "Gold Prestige", categoria: "lujo", precio: 2499, imagen: "https://loremflickr.com/600/400/watch?lock=8", descripcion: "Máxima exclusividad en oro 18k con movimiento suizo automático." },
  { id: 14, nombre: "Rose Gold", categoria: "lujo", precio: 1899, imagen: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=400&fit=crop&auto=format", descripcion: "Elegante reloj en oro rosa con correa de piel de aligátor." },
  { id: 15, nombre: "Sapphire Elite", categoria: "lujo", precio: 1599, imagen: "https://loremflickr.com/600/400/watch?lock=9", descripcion: "Cristal de zafiro y caja de platino con fondo esqueletado." },
  { id: 16, nombre: "Chrono Master", categoria: "lujo", precio: 2199, imagen: "https://loremflickr.com/600/400/watch?lock=10", descripcion: "Cronógrafo de lujo con tourbillon y reserva de marcha de 72h." },
];

function renderProductos(lista, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;
  contenedor.innerHTML = lista.map(p => `
    <div class="producto-card" data-categoria="${p.categoria}">
      <div class="producto-img" style="background-image: url('${p.imagen}')"></div>
      <div class="producto-info">
        <span class="producto-categoria">${p.categoria}</span>
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <p class="producto-precio">$${p.precio}</p>
        <button class="btn comprar-btn" data-id="${p.id}">Añadir al carrito</button>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest("header") && navLinks.classList.contains("open")) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      }
    });
  }

  renderProductos(productos.slice(0, 4), "productos-destacados");
  renderProductos(productos, "todos-productos");

  const filtros = document.querySelectorAll(".filtro-btn");
  filtros.forEach(btn => {
    btn.addEventListener("click", () => {
      filtros.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const categoria = btn.dataset.categoria;
      const filtrados = categoria === "todo"
        ? productos
        : productos.filter(p => p.categoria === categoria);
      renderProductos(filtrados, "todos-productos");
    });
  });

  const form = document.getElementById("form-contacto");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("¡Mensaje enviado con éxito! Te contactaremos pronto.");
      form.reset();
    });
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("comprar-btn")) {
      const id = parseInt(e.target.dataset.id);
      const prod = productos.find(p => p.id === id);
      alert(`"${prod.nombre}" añadido al carrito.`);
    }
  });
});
