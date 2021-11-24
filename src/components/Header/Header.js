import './Header.scss';
import logo from '../../images/logo.svg';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Логотип Brello" className="header__logo"/>
            <div className="header__controls">

            </div>
        </header>
    );
}

export default Header;