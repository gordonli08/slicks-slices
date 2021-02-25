import { useState } from 'react';

export default function useForm(defaults) {
    const [values, setValues] = useState(defaults);

    function updateValue(e) {
        // check if its a number and convert
        let { value } = e.target.value;
        if (e.target.type === 'number') {
            value = parseInt(e.target.value);
        }
        setValues({
            // copy the existing values into it
            ...values,
            // update the values that changed
            [e.target.name]: e.target.value,
        });
    }

    return { values, updateValue };
}
