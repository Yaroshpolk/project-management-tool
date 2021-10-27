import './PageNotFound.scss';
import { useHistory } from "react-router-dom";

function PageNotFound() {
    const history = useHistory();

    return (
        <div className='pageNotFound'>
            <h1 className="pageNotFound__title">404</h1>
            <p className="pageNotFound__message">Упс! Похоже такой страницы не существует.</p>
            <button className='link pageNotFound__link' onClick={history.goBack}>Назад</button>
        </div>
    );
}

export default PageNotFound;