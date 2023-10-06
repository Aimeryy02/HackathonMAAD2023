import "./style.css";
import logo from "../../logo-service.svg";
import { Link } from "react-router-dom"; 

const Index = () => {

  return (
    <header className="header__main">
      <div className="header__logo">
        <img src={logo} alt="logo data paris" />
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="item__nav">           
                <Link className="item__link" to="/">Accueil</Link>         
            </li>         
            <li className="item__nav">           
                <Link className="item__link" to="/map">Map</Link>         
            </li>         
            <li className="item__nav">           
                <Link className="item__link" to="/contact">Contact</Link>         
            </li>  
        </ul>
      </nav>
    </header>
  );
}

export default Index;