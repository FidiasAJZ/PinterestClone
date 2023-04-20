let ventanaEmergenteAbierta = true;
var popup = document.querySelector(".resultados");
var searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function(){
    buscar();
    //popup.style.display = "block";
});

document.addEventListener("click", function(event){
    if(event.target.closest(".navbar-search")) return;
    popup.style.display = "none";
});

function buscar(event) {
    console.log("funciona ventana abierta")
    ventanaEmergenteAbierta = false;
    console.log(ventanaEmergenteAbierta);
    console.log(popup);
    // Prevenir que el formulario se envíe y recargue la página
    event.preventDefault();

    // Obtener el término de búsqueda del input
    const termino = document.querySelector('input[type="text"]').value;

    // Obtener la ventana emergente y mostrarla
    popup.style.display = "block";

    // Generar los componentes de tipo Card con los resultados de la búsqueda
    const resultados = ["Resultado 1", "Resultado 2", "Resultado 3"]; // Ejemplo de resultados
    let cards = "";
    resultados.forEach((resultado) => {
      cards += `
        <div class="card search-bar">
            <div class="card-item">
                <h3>${resultado}</h3>
                <p>Descripción del resultado</p>
                <img
                src="https://i.pinimg.com/564x/ad/59/2d/ad592d7a5afb28d8ac2ab8f48019cd22.jpg"
                alt="Imagen 1"
                />
            </div>
        </div>
      `;
    });

    // Insertar los componentes de tipo Card en la ventana emergente
    popup.innerHTML = cards;
  }

const searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("click", buscar);