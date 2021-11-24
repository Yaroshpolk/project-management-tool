import './Main.scss';
import Login from "../Login/Login";
import { useState } from "react";
import Register from "../Register/Register";

function Main() {
    const [formStatus, setFormStatus] = useState(0);

    const handleFormChange = () => {
        setFormStatus(!formStatus);
    }

    return (
        <section className='main'>
           <div className="main__block main__block_about">

           </div>
            <div className="main__block main__block_auth">
                {formStatus ? <Login/> : <Register/>}
                <div className="main__link">
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

export default Main;