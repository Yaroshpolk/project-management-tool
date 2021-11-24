import './Sidebar.scss';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import arrow from '../../images/arrow.svg';

function Sidebar() {

    const [sidebarOpened, setSidebarOpened] = useState(false);

    const handleSidebarChange = () => {
        setSidebarOpened(!sidebarOpened);
    }

    return (
        <div className={`sidebar ${sidebarOpened && 'sidebar_opened'}`}>
            {sidebarOpened &&
                (
                        <div className="sidebar__block">
                            <div className="sidebar__header">
                                <h1 className="sidebar__logo">Brello</h1>
                            </div>
                            <ul className="sidebar__links">
                                <li className="sidebar__link">
                                    <NavLink exact to='/' className='link' activeClassName='link_active'>Главная</NavLink>
                                </li>
                                <li className="sidebar__link">
                                    <NavLink to='/profile' className='link' activeClassName='link_active'>Профиль</NavLink>
                                    </li>
                                <li className="sidebar__link">
                                    <NavLink to='/workspaces' className='link' activeClassName='link_active'>Рабочие пространства</NavLink>
                                </li>
                            </ul>
                            <button className="sidebar__logout">Сменить пользователя</button>
                        </div>
                )
            }
                <button className={`sidebar__button ${sidebarOpened && 'sidebar__button_active'}`} onClick={handleSidebarChange}>
                    <img src={arrow} alt="Переключатель" className="sidebar__icon"/>
                </button>
        </div>
    );
}

export default Sidebar;