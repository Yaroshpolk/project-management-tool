import './PageNotFound.scss';
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className='pageNotFound'>
            <h1 className="pageNotFound__title">404</h1>
            <p className="pageNotFound__message">Упс! Похоже такой страницы не существует.</p>
            <Link to='/main' className='link pageNotFound__link'>Вернуться на главную страницу</Link>
        </div>
    );
}

export default PageNotFound;