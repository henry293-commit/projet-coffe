import "./header.css";
import btn_hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import btn_close from "../../assets/shared/mobile/icon-close.svg";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import { useState } from "react";
export function Header() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const handleMenu = () => {
    setDisplayMenu((click) => !click);
  };
  const lacation = useLocation();
  const pathname = location.pathname;
  let pathClase = null;
  switch (pathname) {
    case "/":
      pathClase = "header-home";
      break;
    case "/aboutus":
      pathClase = "header-about";
      break;
    case "/plan":
      pathClase = "header-plan";
      break;
    default:
      pathClase = null;
      break;
  }
  return (
    <header className="header ">
      <nav className="header-nav">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className={`nav-link ${displayMenu ? "active" : ""} `}>
          <ul >
            <li onClick={() => setDisplayMenu(false)}>
              <Link to={"/"}>Accueil</Link>
            </li>
            <li onClick={() => setDisplayMenu(false)}>
              <Link to={"aboutus"}>A propos de nous </Link>
            </li>
            <li onClick={() => setDisplayMenu(false)}>
              <Link to={"plan"}>Créer votre plan</Link>
            </li>
          </ul>
        </div>
        <button onClick={handleMenu} className="btn-menu-close">
          <img
            className={displayMenu ? "hide" : ""}
            src={btn_hamburger}
            alt=""
          />
          <img className={!displayMenu ? "hide" : ""} src={btn_close} alt="" />
        </button>
      </nav>
      <div className={`header-main ${pathClase} `}>
        <div className="header-info">
          <span className="header-title">
            {pathClase == "header-home" &&
              "Un excellent café en toute simplicité."}
            {pathClase == "header-about" && "A propos de nous"}
            {pathClase == "header-plan" && "Crée votre plan"}
          </span>
          <p className="header-description">
            {pathClase == "header-home" &&
              " Commencez votre journée avec les meilleurs cafés du monde. Essayez nos cafés artisanaux sélectionnés par des experts et provenant de nos meilleurs torréfacteurs, livrés directement à votre porte, selon votre horaire. "}
            {pathClase == "header-about" &&
              "MaliCoffe a commencé son voyage de découverte exotique en 2020, mettant en lumière des histoires de café du monde entier. Depuis, nous nous engageons à apporter la tasse parfaite - du grain à l'infusion - dans chaque expédition. "}{" "}
            {pathClase == "header-plan" &&
              "Créez un plan d'abonnement qui correspond le mieux à vos besoins. Nous proposons un assortiment des meilleurs cafés artisanaux du monde entier livrés frais à votre porte. "}{" "}
          </p>
          {pathClase == "header-home" && (
            <Link to={'plan'} className="btn btn-header">Create your plan </Link>
          )}
        </div>
      </div>
    </header>
  );
}
