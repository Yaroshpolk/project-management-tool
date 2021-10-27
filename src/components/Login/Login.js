import './Login.scss';
import { Link, useHistory } from "react-router-dom";
import {useState} from "react";

function Login() {

    const [isLogged, setIsLogged] = useState(true);

    const history = useHistory();

    function login(evt) {
        evt.preventDefault()
        history.push('/')
    }

    return (
        <div className='login'>
            <div className="login__window">
                <h1 className="login__title">Авторизация</h1>
                <form className="form login__form" name='formLogin' onSubmit={login}>
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
                        <label htmlFor='userEmail'>
                            <input
                                className='form__input'
                                type="password"
                                id='userPassword'
                                placeholder='Пароль'
                                minLength='6'
                                name='password'
                                required/>
                        </label>
                        <input
                            className='form__submit'
                            type="submit"
                            value='Войти'
                            name='submit'/>
                        <Link to='/signup' className='link form__message'>Ещё не зарегистрированы? Регистрация</Link>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default Login;