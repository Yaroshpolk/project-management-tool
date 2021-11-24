import './Register.scss';
import eyeOff from "../../images/eye-off.svg";
import eye from "../../images/eye.svg";
import {useState} from "react";

function Register({ handleRegister }) {

    const [passShowing, setPassShowing] = useState(false);

    const handleShowPass = (evt) => {
        evt.preventDefault();
        const passInput = evt.target.closest('label').querySelector('input');
        passInput.type === 'password' ? passInput.type = 'text' : passInput.type = 'password';
        setPassShowing(!passShowing);
    }

    return (
        <div className='register'>
            <h1 className="register__title">Регистрация</h1>
                <form className="form register__form" name='formRegister' onSubmit={handleRegister}>
                    <fieldset className='register__fieldset'>
                        <label htmlFor='userName'>
                            <input
                                className='form__input'
                                type="text"
                                id='userName'
                                placeholder='Имя'
                                minLength='3'
                                name='name'
                                required/>
                        </label>
                        <label htmlFor='userEmail'>
                            <input
                                className='form__input'
                                type="Email"
                                id='userEmail'
                                placeholder='E-mail'
                                minLength='5'
                                name='email'
                                required />
                        </label>
                        <label htmlFor='userPassword'>
                            <input
                                className='form__input'
                                type="password"
                                id='userPassword'
                                placeholder='Пароль'
                                minLength='6'
                                name='password'
                                required/>
                            <button className='link form__show-pass' onClick={handleShowPass}>
                                <img src={passShowing ? eyeOff : eye} alt="Показать пароль"/>
                            </button>
                        </label>
                    </fieldset>
                    <input
                        className='form__submit'
                        type="submit"
                        value='Зарегистрироваться'
                        name='submit'/>
                </form>
        </div>
    );
}

export default Register;