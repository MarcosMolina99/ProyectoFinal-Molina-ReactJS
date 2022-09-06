import CartWidget from "./CartWidget";
const NavBar = () =>{
    return(
        <div className="navBarContainer">
            <h2 className="titulo">Posada Negocios</h2>
            
            <ul className="listaPags">
                <li className="btn-grad"><a href="">Inicio</a></li>
                <li className="btn-grad"><a href="">Productos</a></li>
                <li className="btn-grad"><a href="">Contacto</a></li>
            </ul>
            <CartWidget />
            <a className="inicioSesion" href="">Iniciar sesión</a>
        </div>
    )
}

export default NavBar;