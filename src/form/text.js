import { withFormsy } from 'formsy-react';
import React from 'react';
import PropTypes from 'prop-types';
import { showErrors } from '../utils';

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(event.currentTarget.value);
    }

    render() {
        // An error message is passed only if the component is invalid
        const { errorMessage } = this.props;
        const errorIsVisible = showErrors(this.props.isPristine, this.props.isValid, this.props.validatePristine);

        return (
            <div>
                {
                    this.props.label &&
                        <label
                            className={this.props.required ? "required-input" : "normal-input"}
                            title={this.props.label}
                        >
                            {this.props.label}
                        </label>
                }
                <input
                    onChange={this.changeValue}
                    type="text"
                    value={this.props.value || ''}
                    className={errorIsVisible ? "required-input" : "normal-input"}
                />
                {errorIsVisible &&
                    <span className='validation-error'>{errorMessage}</span>
                }
            </div>
        );
    }
}

TextInput.propTypes = {
    validatePristine: PropTypes.bool.isRequired,
    value: PropTypes.string,
};

TextInput.defaultProps = {
    validatePristine: false,
};

export default withFormsy(TextInput);