import './Register.scss';
import {Link, useHistory} from "react-router-dom";

function Register() {

    const history = useHistory();

    function register(evt) {
        evt.preventDefault()
        history.push('/signin')
    }

    return (
        <div className='register'>
            <div className="register__window">
                <h1 className="register__title">Регистрация</h1>
                <form className="form register__form" name='formRegister' onSubmit={register}>
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
                            value='Зарегистрироваться'
                            name='submit'/>
                        <Link to='/signin' className='link form__message'>Уже зарегистрированы? Войти</Link>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default Register;