import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
        <div className="navBarContainer">
            <h2 className="titulo">
                <Link to={"/"}>
                    Posada Deportes
                </Link>
                </h2>
            
            <ul className="listaPags">
                <li className="btn-grad"><Link to={"/"}>Inicio</Link></li>
                <li className="btn-grad"><Link to={"/Products"}>Productos</Link></li>
                <li className="btn-grad">
                    <Link to={"/Contact"}>Contacto</Link>    
                </li>
            </ul>
            <CartWidget />
            <a className="inicioSesion" href="">Iniciar sesión</a>
        </div>
    )
}

export default NavBar;