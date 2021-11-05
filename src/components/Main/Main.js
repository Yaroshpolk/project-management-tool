import './Main.scss';

function Main() {
    return (
        <section className='main'>
            <div className="main__header">
                <h1 className="main__title">
                    Brello
                </h1>
            </div>
            <div className="tech">
                <div className="tech__block">
                    <h2 className="tech__title">Frontend стек</h2>
                    <ul className="tech__list">
                        <li className="tech__item">HTML</li>
                        <li className="tech__item">CSS</li>
                        <li className="tech__item">Js</li>
                        <li className="tech__item">Sass</li>
                        <li className="tech__item">ReactJs</li>
                        <li className="tech__item">Redux</li>
                        <li className="tech__item">Git</li>
                    </ul>
                </div>
                <div className="tech__block">
                    <h2 className="tech__title">Backend стек</h2>
                    <ul className="tech__list">
                        <li className="tech__item">Java</li>
                        <li className="tech__item">Spring</li>
                        <li className="tech__item">PostgreSQL</li>
                        <li className="tech__item">Git</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Main;