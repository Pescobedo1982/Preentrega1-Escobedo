import React from 'react'
import Carrito from './Carrito.jsx';


const Navbar = () => {


  return (
  
    
    <div>
      <nav class="navbar navbar-expand-lg navbar-white bg-white">
      <img className='logo' src="./img/logos.png" alt="Bootstrap"></img>
  <div class="container-fluid">
    <a class="navbar-brand"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Nosotros</a>
        </li>
        <li class="nav-item"/>
        <a className="nav-link active" aria-current="page" href="#">Medios de pago</a>   
        <li class="nav-item dropdown"/>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr></hr> class="dropdown-divider"</li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
      
      </ul>
      <form class="d-flex" role="search">
        
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-" type="submit">Search</button>
       <button className='boton'><Carrito/></button>
      </form>
    </div>
  </div>
</nav></div>
)
}

export default Navbar