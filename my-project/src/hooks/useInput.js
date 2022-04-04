import { useState } from "react";
import useValidation from "./useValidation";

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isOutFocus, setisOutFocus] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setisOutFocus(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isOutFocus,
        ...valid
    }
}

export default useInput;
