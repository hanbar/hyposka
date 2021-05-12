import { withFormsy } from 'formsy-react';
import React from 'react';
import PropTypes from 'prop-types';
import { showErrors } from '../utils';

class TextArea extends React.Component {
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
                <textarea
                    onChange={this.changeValue}
                    type="text"
                    value={this.props.value || ''}
                    className={errorIsVisible ? "required-input" : "normal-input"}
                    rows={this.props.rows}
                    placeholder={this.props.placeholder}
                />
                {errorIsVisible &&
                    <span className='validation-error'>{errorMessage}</span>
                }
            </div>
        );
    }
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