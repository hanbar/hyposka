
export function showErrors(isPristine, isValid, validatePristine = false) {
    if (isPristine === true) {
        if (validatePristine === false) {
            return false;
        } else {
        	return true;
        }
    }
    return (isValid === false);
}