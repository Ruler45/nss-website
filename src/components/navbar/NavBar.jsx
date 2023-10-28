import {Link} from "react-router-dom";

const NavBar = () => {
  const handleClick=()=>{
    
  }

  return ( 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid container">
    <Link className="navbar-brand" to="/">NSS NITS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link onClick={handleClick} className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/objective">Objective</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/team">Team</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
   );
}
 
export default NavBar;