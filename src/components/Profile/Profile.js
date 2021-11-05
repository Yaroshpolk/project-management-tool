import './Profile.scss';

function Profile() {
    return (
        <div className="profile">
            <img
                src="https://gravatar.com/avatar/fa08814dbfda3809fedef54e0a5c9f7b?s=400&d=robohash&r=x"
                alt="Аватар пользователя"
                className="profile__img"/>
            <ul className="profile__data">
                <li className="profile__data-item">
                    Имя
                </li>
                <li className="profile__data-item">
                    Фамилия
                </li>
                <li className="profile__data-item">
                    Почта
                </li>
                <li className="profile__data-item">
                    Организация
                </li>
                <li className="profile__data-item">
                    О себе
                </li>
                <li className="profile__data-item">
                    Дата регистрации
                </li>
            </ul>
            <div className="profile__controls">
                <button className="profile__controls-btn">Редактировать</button>
                <button className="profile__controls-btn profile__controls-btn_exit">Выйти</button>
            </div>
        </div>
    );
}

export default Profile;