function generarMenuIndex()
{
    const menuIndex = `  <nav class="navbar navbar-expand-lg " ; class="navbar">
    <div class="container-fluid">

      <a class="navbar-brand" href="index.html"><img src="img/logoLight.png" alt="Icono Web" width="180px"></a>

      <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

        <li class="nav-item">
        <a class="nav-link" href="index.html">Inicio</a>
        </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/Tematica.html">Temática</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="pages/Manuales.html">Manuales</a>
        </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/sobreNosotros.html">Sobre Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/Contactanos.html">Contáctanos</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="pages/Licencias.html">Licencias</a>
        </li>
        </ul>
      </div>
    </div>
  </nav>`;

  return menuIndex;
}