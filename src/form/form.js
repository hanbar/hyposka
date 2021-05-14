import React from 'react';
import Formsy from 'formsy-react';
import TextInput from './text';
import TextArea from './textArea';

class ContactForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            canSubmit: false,
        };

        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
    }

    disableButton() {
        this.setState({ canSubmit: false });
    }

    enableButton() {
        this.setState({ canSubmit: true });
    }

    submit(data) {
        window.Email.send({
            SecureToken: 'b5f9c523-5d4c-467d-a511-7a798e3531aa',
            To : 'youremail@domain.com',
            From : data.email,
            Subject : `${data.name} vám posílá zprávu`,
            Body : data.message,
        }).then(message => {
            alert(message);
        });
    }

    render() {
        return (
            <Formsy
                onValidSubmit={this.submit}
                onValid={this.enableButton}
                onInvalid={this.disableButton}
            >
                <TextInput
                    name="name"
                    label="Vaše jméno"
                    validationErrors={{
                        isDefaultRequiredValue: "Povinné",
                    }}
                    validatePristine={true}
                    required
                />
                <TextInput
                    name="email"
                    label="Váš e-mail"
                    validations="isEmail"
                    validationErrors={{
                        isDefaultRequiredValue: "Povinné",
                        isEmail: "Nesprávný formát e-mailové adresy",
                    }}
                    required
                />
                <TextArea
                    name="message"
                    label="Zpráva"
                    placeholder="Napište nám..."
                    validationErrors={{
                        isDefaultRequiredValue: "Povinné",
                    }}
                    validatePristine={false}
                    required
                />
                <button type="submit" disabled={!this.state.canSubmit}>
                    Odeslat
                </button>
            </Formsy>
        );
    }

}

export default ContactForm;
