import { withFormsy } from 'formsy-react';
import PropTypes from 'prop-types';
import { showErrors } from '../utils';

const TextInput = (props) => {

    const changeValue = (event) => {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        props.setValue(event.currentTarget.value);
    }

    // An error message is passed only if the component is invalid
    const { errorMessage } = props;
    const errorIsVisible = showErrors(props.isPristine, props.isValid, props.validatePristine);

    return (
        <div>
            {
                props.label &&
                    <label
                        className={props.required ? "required-input" : "normal-input"}
                        title={props.label}
                    >
                        {props.label}
                    </label>
            }
            <input
                onChange={changeValue}
                type="text"
                value={props.value || ''}
                className={errorIsVisible ? "required-input" : "normal-input"}
            />
            {errorIsVisible &&
                <span className='validation-error'>{errorMessage}</span>
            }
        </div>
    );
}

TextInput.propTypes = {
    validatePristine: PropTypes.bool.isRequired,
    value: PropTypes.string,
};

TextInput.defaultProps = {
    validatePristine: false,
};

export default withFormsy(TextInput);
