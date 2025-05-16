import { useRef, useState } from "react";
import './Input.scss';

export default function EmailInput( props ) {

        const [error, setError] = useState(false);
        const inputElement = useRef(null);

        const emailRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    
        function changeHandler() {
    
            const value = inputElement.current.value;
    
            if (!value.match(emailRegEx)) {
                setError('Ugyldig email.')
            } else {
                setError(false);
            }
        }


    return (
        <>
            <input ref={inputElement} onChange={changeHandler} type="email" {...props} />
            {error && <p className='error-message'>{error}</p>}
        </>
    )
}