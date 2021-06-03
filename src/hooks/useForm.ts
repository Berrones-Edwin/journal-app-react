import { useState } from "react";

export const useForm = <T>(
    initialState: T
): [
    T,
    (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void,
    (newValue: any) => void
] => {
    const [values, setValues] = useState<T>(initialState);

    const reset = (newValue = initialState) => {
        setValues(newValue);
    };

    const handleInputChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    return [values, handleInputChange, reset];
};
