import { useRef, useState } from "react";
import './Input.scss';

export default function NameInput(props) {

    const [error, setError] = useState(false)
    const inputElement = useRef(null)
    
    function changeHandler() {
        
        const value = inputElement.current.value;

        if (value.length < 1) {
            setError('Ugyldigt firmanavn.');
        } else {
            setError(false);
        }
    }

    return (
        <>
            <input ref={inputElement} onChange={changeHandler} type="text" {...props} />
            {error && <p className="error-message">{error}</p>}
        </>
    )
}