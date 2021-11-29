import './Auth.scss';
import Login from "../Login/Login";
import { useState } from "react";
import Register from "../Register/Register";

function Auth({ handleLogin, handleRegister }) {
    const [formStatus, setFormStatus] = useState(1);

    const handleFormChange = () => {
        setFormStatus(!formStatus);
    }

    return (
        <section className='auth'>
           <div className="auth__block auth__block_about">

           </div>
            <div className="auth__block auth__block_form">
                {formStatus ?
                    <Login handleLogin={handleLogin}/> :
                    <Register handleRegister={handleRegister}/>
                }
                <div className="auth__link">
                    {formStatus ?
                        'Ещё нет аккаунта?' :
                        'Уже есть аккаунт?'}
                    <button onClick={handleFormChange} className={'link'}>
                        {formStatus ?
                            'Создать' :
                            'Войти'}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Auth;