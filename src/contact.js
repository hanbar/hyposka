import React from 'react';
import email from './images/email.svg';
import git from './images/logo-git.svg';

class MainContent extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <main>
                <h1>Kontakty</h1>
                <p>Máš pro nás radu? Napiš, budeme rády!</p>

                <h2>Slávka Vavřinová</h2>
                <div className="contact">
                    <img className="contact__img" src={email} alt="E-mail" />
                    <p>slavka.vav@gmail.com</p>
                </div>
                <div className="contact">
                    <img className="contact__img" src={git} alt="Logo GitHub" />
                    <p>SlavkaVavrinova</p>
                </div>

                <h2>Veronika Sípalová</h2>
                <div className="contact">
                    <img className="contact__img" src={email} alt="E-mail" />
                    <p>ver.kosik@gmail.com</p>
                </div>
                <div className="contact">
                    <img className="contact__img" src={git} alt="Logo GitHub" />
                    <p>Veronika Sípalová</p>
                </div>

                <h2>O projektu GitHub</h2>
                <div className="contact">
                    <img className="contact__img" src={git} alt="Logo GitHub" />
                    <p>https://github.com/SlavkaVavrinova/o-projektu.git</p>
                </div>
            </main>
        );
    }

}

export default MainContent;
