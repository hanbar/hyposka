import { withFormsy } from 'formsy-react';
import PropTypes from 'prop-types';
import { showErrors } from '../utils';

const TextArea = (props) => {

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
            <textarea
                onChange={changeValue}
                type="text"
                value={props.value || ''}
                className={errorIsVisible ? "required-input" : "normal-input"}
                rows={props.rows}
                placeholder={props.placeholder}
            />
            {errorIsVisible &&
                <span className='validation-error'>{errorMessage}</span>
            }
        </div>
    );
}

TextArea.propTypes = {
    validatePristine: PropTypes.bool.isRequired,
    rows: PropTypes.number.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
};

TextArea.defaultProps = {
    validatePristine: false,
    rows: 5,
};

export default withFormsy(TextArea);
