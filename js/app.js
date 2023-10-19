const button = document.getElementById("btn");
const change = document.querySelector("#caja");
button.addEventListener("click",
    function cambiar() {
        if(change.classList.contains("seleccionado")) change.classList.remove("seleccionado"); 
        else change.classList.add("seleccionado");
    }
);