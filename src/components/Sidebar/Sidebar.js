import './Sidebar.scss';
import {NavLink, useHistory} from "react-router-dom";
import logo from '../../images/logo.svg';

// icons imports
import homeIcon from '../../images/sidebar/home.svg';
import spacesIcon from '../../images/sidebar/workspaces.svg';
import profileIcon from '../../images/sidebar/profile.svg';
import optionsIcon from '../../images/sidebar/options.svg';
import exitIcon from '../../images/sidebar/exit.svg';
import {useContext} from "react";
import {AppContext} from "../../contexts/AppContext";

function Sidebar() {

    const context = useContext(AppContext);
    const history = useHistory();

    const handleLogout = () => {
        context.logged = false;
        history.push('/');
    }

    return (
        <div className="sidebar">
            <img src={logo} alt="Логотип" className="sidebar__logo"/>
            <nav className="sidebar__nav">
                <ul className="sidebar__menu">
                    <li className="sidebar__menu-item">
                        <NavLink to='/main' exact className='sidebar__btn' activeClassName='sidebar__btn_active'>
                            <img src={homeIcon} alt="Главная страница" className="sidebar__btn-img"/>
                        </NavLink>
                    </li>
                    <li className="sidebar__menu-item">
                        <NavLink to='/workspaces' className='sidebar__btn' activeClassName='sidebar__btn_active'>
                            <img src={spacesIcon} alt="Рабочие пространства" className="sidebar__btn-img"/>
                        </NavLink>
                    </li>
                    <li className="sidebar__menu-item">
                        <NavLink to='/profile' className='sidebar__btn' activeClassName='sidebar__btn_active'>
                            <img src={profileIcon} alt="Профиль пользователя" className="sidebar__btn-img"/>
                        </NavLink>
                    </li>
                    <li className="sidebar__menu-item">
                        <NavLink to='/options' className='sidebar__btn' activeClassName='sidebar__btn_active'>
                            <img src={optionsIcon} alt="Настройки" className="sidebar__btn-img"/>
                        </NavLink>
                    </li>
                    <li className="sidebar__menu-item">
                        <button className='sidebar__btn' onClick={handleLogout}>
                            <img src={exitIcon} alt="Выйти" className="sidebar__btn-img"/>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;