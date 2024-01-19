import React from 'react'

const Navbar = ({cart,setCart}) => {
    return (
        
<nav class="navbar navbar-expand-lg navbar-light bg-light"><div className="container px-3 px-lg-5">
  <a class="navbar-brand" href="#">Start Bootstrap</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">All Products</a> <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Popular Items</a>
         
          <a class="dropdown-item" href="#">New Arrivals</a>
        </div>
      </li>
      
    </ul>
    <form className="nav-item " ><button className="btn btn-outline-dark " type="submit" onClick={()=>{
      setCart(0)
    }}>
                             <i class="fa-solid fa-cart-shopping"></i>cart <badge className="badge bg-dark text-white ms-1 rounded-pill">{cart}</badge>
                       </button></form>
  </div></div>
</nav>
       
    )
}

export default Navbar;