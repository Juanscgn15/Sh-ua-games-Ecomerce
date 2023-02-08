import CartWidget from "./CartWidget"
import donJuan from "../../img/don-juan.jpg"
const NavBar = () => {
  return (
    <div className="container">
        <div className="container-fluid">
            <nav className="navbar bg-body-tertiary">
              <div >
                  <a className="navbar-brand" href="#"> <img src={donJuan} alt="Logo" width="100" height="100" className="d-inline-block"/> Sh'ua games
                  </a>
              </div>
             
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Single Player Games</a>
        </li>
        <li clclassNameass="nav-item">
          <a className="nav-link" href="#">Multi Player Games</a>
        </li>
      </ul>
      
   <CartWidget/> </nav> 
        </div>
    </div>
  )
}

export default NavBar