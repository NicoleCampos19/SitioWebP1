document.addEventListener('DOMContentLoaded', function(){
    const contenedorFooter = document.getElementById("footerContenedor");
    const menuHTML = generarFooterPages();

    contenedorFooter.innerHTML = menuHTML;
});