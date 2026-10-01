const plantel = [
  {
    nombre: "Lionel Messi",
    posicion: "Delantero",
    seleccion: "Argentina",
    dorsal: 10,
    velocidad: 8,
    fortalezas: ["Definicion", "Gambeta"],
    edad: 37
  },
  {
    nombre: "Emiliano Martinez",
    posicion: "Arquero",
    seleccion: "Argentina",
    dorsal: 23,
    velocidad: 6,
    fortalezas: ["Reflejos", "Penales"],
    edad: 32
  },
  {
    nombre: "Rodrigo De Paul",
    posicion: "Mediocampista",
    seleccion: "Argentina",
    dorsal: 7,
    velocidad: 7,
    fortalezas: ["Resistencia", "Recuperacion"],
    edad: 30
  },
  {
    nombre: "Julian Alvarez",
    posicion: "Delantero",
    seleccion: "Argentina",
    dorsal: 9,
    velocidad: 9,
    fortalezas: ["Presion", "Desmarque"],
    edad: 26
  }
];

plantel.forEach(jugador => console.log(jugador.nombre, "—", jugador.posicion));

const delanteros = plantel.filter(jugador => jugador.posicion === "Delantero");
console.log(delanteros);

const nombresDelPlantel = plantel.map(jugador => jugador.nombre);
console.log(nombresDelPlantel);

const jugadorBuscado = plantel.find(jugador => jugador.nombre === "Lionel Messi");
console.log(jugadorBuscado);

const elegido = plantel[0];

if (document.getElementById("nombre")) {
  document.getElementById("nombre").value = elegido.nombre;
}
if (document.getElementById("edad")) {
  document.getElementById("edad").value = elegido.edad;
}
if (document.getElementById("posicion")) {
  document.getElementById("posicion").value = elegido.posicion;
}
if (document.getElementById("pais")) {
  document.getElementById("pais").value = elegido.seleccion;
}
if (document.getElementById("numero")) {
  document.getElementById("numero").value = elegido.dorsal;
}
if (document.getElementById("velocidad")) {
  document.getElementById("velocidad").value = elegido.velocidad;
}

plantel.push({
  nombre: "Lautaro Martinez",
  posicion: "Delantero",
  seleccion: "Argentina",
  dorsal: 22,
  velocidad: 8,
  fortalezas: ["Potencia", "Definicion"],
  edad: 29
});

console.log(plantel);

let sumaVelocidad = 0;

for (const jugador of plantel) {
  sumaVelocidad += jugador.velocidad;
}

const promedioVelocidad = sumaVelocidad / plantel.length;
console.log(promedioVelocidad);

const veteranos = plantel.filter(jugador => jugador.edad >= 30);
console.log(veteranos);