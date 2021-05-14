import git from './images/logo-git.svg';
import Vizitka from './vCard';
import Form from './form/form';

const Contact = () => {

        const link = "https://github.com/SlavkaVavrinova/o-projektu.git";
        
        return (
            <main>
                <h1>Kontakty</h1>
                <p>Máš pro nás radu? Napiš, budeme rády!</p>

                <Form />

                <Vizitka name="Slávka Vavřinová" email="slavka.vav@gmail.com" gitAccount="SlavkaVavrinova" />
                <Vizitka name="Veronika Sípalová" email="ver.kosik@gmail.com" gitAccount="Veronika Sípalová" />

                <h2>O projektu GitHub</h2>
                <div className="contact">
                    <img className="contact__img" src={git} alt="Logo GitHub" />
                    <a href={link} target="_blank" rel="noreferrer">{link}</a>
                </div>
            </main>
        );

}

export default Contact;
