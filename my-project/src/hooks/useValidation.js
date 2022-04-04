import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [numbError, setNumbError] = useState(false);
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'onlyNumb':
                    const re = /^[0-9]+(.[0-9]{2})?$/;
                    !re.test(value) ? setNumbError(true) : setNumbError(false);
                    break;
                case 'isEmpty':
                    value.trim() === '' ? setEmpty(true) : setEmpty(false);
                    break;
                default:
                    return;
            }
        }
    }, [value])

    useEffect(() => {
        if (!isEmpty && !numbError) {
            setInputValid(true);
        } else {
            setInputValid(false);
        }
    }, [isEmpty, numbError])

    return {
        isEmpty,
        numbError,
        inputValid
    }
}

export default useValidation;
