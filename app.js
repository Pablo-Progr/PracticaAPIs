const Clima_URL ="https://api.openweathermap.org/data/2.5/weather?lat=26&lon=-65.21&&appid=290d444976a35784806752fabe365ac8";
// const Paises_URL = "https://restcountries.com/v3.1/all";
// const paisesContainer = document.getElementById('paises');

// function crearCard(pais) {
//   return `
//     <div class="col-md-4 ">
//       <div class="card mb-4 cardPais">
//         <img src="${pais.flags.png}" class="card-img-top" alt="Bandera de ${pais.name.common}">
//         <div class="card-body">
//           <h5 class="card-title">${pais.name.common}</h5>
//           <p class="card-text">
//             <strong>Capital:</strong> ${pais.capital ? pais.capital[0] : 'N/A'} <br>
//             <strong>Población:</strong> ${pais.population.toLocaleString()} <br>
//             <strong>Región:</strong> ${pais.region}
//           </p>
//         </div>
//       </div>
//     </div>
//   `;
// }

// function mostrarPaises(cantidad){
//   fetch(Paises_URL)
//     .then(response => response.json())
//     .then(data => {

//       const paisesSeleccionados = data.slice(0, cantidad)

//       paisesSeleccionados.forEach(pais => {
//         paisesContainer.innerHTML += crearCard(pais)
//       });
//     })

//   .catch(error => console.error('Error a obtener paises:', error));
  
// }

// mostrarPaises(120)

const Paises_URL = "https://restcountries.com/v3.1/all";
let paisesData = [];

// Hacemos la solicitud a la API de países
fetch(Paises_URL)
  .then(response => response.json())
  .then(data => {
    paisesData = data;  // Guardamos los datos en una variable global para usarlos después
    mostrarPaises(paisesData); // Mostramos todos los países al inicio
  })
  .catch(error => console.error("Error al obtener los países:", error));

// Función para crear las cards
function crearCard(pais) {
  return `
    <div class="col-md-4">
      <div class="card mb-4 cardPais">
        <img src="${pais.flags.png}" class="card-img-top" alt="Bandera de ${pais.name.common}">
        <div class="card-body">
          <h5 class="card-title">${pais.name.common}</h5>
          <p class="card-text">
            <strong>Capital:</strong> ${pais.capital ? pais.capital[0] : 'N/A'} <br>
            <strong>Población:</strong> ${pais.population.toLocaleString()} <br>
            <strong>Región:</strong> ${pais.region}
          </p>
        </div>
      </div>
    </div>
  `;
}

// Función para mostrar países
function mostrarPaises(paises) {
  const paisesContainer = document.getElementById('paises');
  paisesContainer.innerHTML = '';  // Limpiamos el contenedor
  paises.forEach(pais => {
    paisesContainer.innerHTML += crearCard(pais);
  });
}

// Evento al hacer clic en el botón de buscar
document.getElementById('buscar').addEventListener('click', function() {
  const termino = document.getElementById('buscador').value.toLowerCase();

  // Filtramos los países por nombre o región
  const paisesFiltrados = paisesData.filter(pais => {
    const nombrePais = pais.name.common.toLowerCase();
    const regionPais = pais.region.toLowerCase();
    return nombrePais.includes(termino) || regionPais.includes(termino);
  });

  // Mostramos los países filtrados
  mostrarPaises(paisesFiltrados);
});




  
