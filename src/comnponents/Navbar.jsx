
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar  () {
  return(
  <nav>
    <div className='galley'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_giHw_Xi5IxmFBmoO4j3Fh9NmgY-tDhoLvbkSDmkPbi5lqA2x5dOhS1e2HbzP2qyuB8&usqp=CAU"
     alt="escudo" width="70" height="80" /></div>

    <div className='menu'>
      <ul>
      <li><Link to="/Inicio">Inicio</Link></li>
      <li><Link to="/camisetas">Camisetas</Link></li>
      <li><Link to="/campeonatos">Campeonatos</Link></li>
      <li><Link to="/barra-brava">Barra Brava</Link></li>
      <li><Link to="/historia">Historia</Link></li>
      <li><Link to="/datos-importantes">Datos Importantes</Link></li>
    </ul>
    </div>
  </nav>
   
);
}

export default Navbar;
