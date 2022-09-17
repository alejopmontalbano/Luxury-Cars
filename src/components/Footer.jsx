import React from "react";
import logo2 from "../assets/img/iconos/logo2.png"
import { Link } from "react-router-dom";
import facebook from "../assets/img/iconos/facebook.png";
import whatsapp from "../assets/img/iconos/whatsapp.png";
import instagram from "../assets/img/iconos/instagram.png";


function Footer() {
    return(
        <div className="footerContainer">
            <div className="footerCol">
                <Link to={"/"} className="home"><img src={logo2} className="logoFooter" alt="Luxury Cars" /></Link>
            </div>
            <div className="footerCol">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link linkFooter" to={"/"}>Buscá tu auto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link linkFooter" to={"/"}>Contactános</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link linkFooter" to={"/"}>¿Quienes somos?</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link linkFooter" to={"/"}>Sucursales</Link>
                    </li>
                </ul>
            </div>
            <div className="footerCol">
                <ul className="redesContainer">
                    <li className="rounded"><Link to={"/"}><img src={facebook} alt="Ir a nuestro Facebook" /></Link></li>
                    <li className="rounded"><Link to={"/"}><img src={whatsapp} alt="Ir a nuestro Whatsapp" /></Link></li>
                    <li className="rounded"><Link to={"/"}><img src={instagram} alt="Ir a nuestro Instagram" /></Link></li>
                </ul>
            </div>
            <div className="footerColCopyright text-center">
                <p>Luxury Cars S.A. &copy; 2022</p>
                <p>Av. 9 de Julio 1000, Capital Federal, Argentina.</p>
            </div>
        </div>
    )
}

export default Footer;