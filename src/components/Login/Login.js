import './Login.scss';
import eye from '../../images/eye.svg';
import eyeOff from '../../images/eye-off.svg';
import { useState } from "react";

function Login({ handleLogin }) {

    const [passShowing, setPassShowing] = useState(false);

    const handleShowPass = (evt) => {
        evt.preventDefault();
        const passInput = evt.target.closest('label').querySelector('input');
        passInput.type === 'password' ? passInput.type = 'text' : passInput.type = 'password';
        setPassShowing(!passShowing);
    }

    return (
        <div className='login'>
                <h1 className="login__title">Авторизация</h1>
                <form className="form login__form" name='formLogin' onSubmit={handleLogin}>
                    <fieldset className='login__fieldset'>
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
                        value='Войти'
                        name='submit'/>
                </form>
        </div>
    );
}

export default Login;