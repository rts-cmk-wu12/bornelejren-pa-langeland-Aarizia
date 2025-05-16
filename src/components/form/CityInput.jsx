import { useRef, useState } from "react";
import './Input.scss';

export default function CityInput(props) {

    const [error, setError] = useState(false)
    const inputElement = useRef(null)
    const regExIcludesNumber = /\d/
    
    function changeHandler() {
        
        const value = inputElement.current.value

        if (value.length < 2) {
            setError('Ugyldig by.');
        } else if (value.match(regExIcludesNumber)) {
            setError('Ugyldig by.');
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