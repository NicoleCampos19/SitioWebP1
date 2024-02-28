document.addEventListener('DOMContentLoaded', function(){
    const contenedorMenu = document.getElementById("menuContenedor");
    const menuHTML = generarMenuPages();

    contenedorMenu.innerHTML = menuHTML;
});