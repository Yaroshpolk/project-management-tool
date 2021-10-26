import './Login.scss';
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className='login'>
            <div className="login__window">
                <h1 className="login__title">Авторизация</h1>
                <form className="form login__form" name='formLogin'>
                    <fieldset className='login__fieldset'>
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
                        <Link to='/register' className='link form__message'>Ещё не зарегистрированы? Регистрация</Link>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default Login;