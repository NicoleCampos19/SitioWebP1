document.addEventListener('DOMContentLoaded', function(){
    const contenedorMenu = document.getElementById("menuContenedor");
    const menuHTML = generarMenuIndex();

    contenedorMenu.innerHTML = menuHTML;
});