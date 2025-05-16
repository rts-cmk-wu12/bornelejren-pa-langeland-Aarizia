import { useRef } from "react";
import { useNavigate } from "react-router";
import './SignUpForm.scss';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import AddressInput from './AddressInput';
import CityInput from './CityInput';
import PostNumberInput from './PostNumberInput';
import PhoneInput from './PhoneInput';
import MoneyInput from './MoneyInput';

export default function SignUpForm() {

    const formElement = useRef(null);
    const navigate = useNavigate();

    
    function submitHandler(event) {
        event.preventDefault();

        const data = new FormData(formElement.current);
        const dataAsObject = Object.fromEntries(data);

        // fetch lokalt
        const API_URL = 'http://localhost/bornelejren/api/companies/';

        // fetch infinityfree
        // const API_URL = 'http://localhost/bornelejren/companies/';

        const options = {
            headers: {
                accept: 'application/json'
            },
            method: 'POST',
            body: new URLSearchParams(dataAsObject)
        }

        fetch(API_URL, options);

        formElement.current.reset();
        navigate('/tak');
    }
    
    return (
        <form ref={formElement} className="sign-up-form" onSubmit={submitHandler}>
            <div className='sign-up-form__form-group'>
                <label className='sign-up-form__label' htmlFor="name">Firmanavn:</label>
                <NameInput className='sign-up-form__input' name="firmanavn" id="id" placeholder="Indtast firmanavn" />
            </div>
            <div className='sign-up-form__form-group'>
                <label className='sign-up-form__label' htmlFor="email">Email:</label>
                <EmailInput className='sign-up-form__input' name="email" id="email" placeholder="Indtast email" />
            </div>
            <div className='sign-up-form__form-group'>
                <label className='sign-up-form__label' htmlFor="phone">Telefon:</label>
                <PhoneInput className='sign-up-form__input' name="telefon" id="phone" placeholder="Indtast telefonnummer" />
            </div>
            <div className='sign-up-form__form-group'>
                <label className='sign-up-form__label' htmlFor="address">Adresse:</label>
                <AddressInput className='sign-up-form__input' name="adresse" id="address" placeholder="Indtast adresse" />
            </div>
            <div className='sign-up-form__form-group'>
                <label className='sign-up-form__label' htmlFor="postnumber">Postnummer:</label>
                <PostNumberInput className='sign-up-form__input' name="postnummer" id="postnumber" placeholder="Indtast postnummer" />
            </div>
            <div className='sign-up-form__form-group'>
                <label className='sign-up-form__label' htmlFor="city">By:</label>
                <CityInput className='sign-up-form__input' name="sted" id="sted" placeholder="Indtast by" />
            </div>
            <div className='sign-up-form__form-group'>
                <label className='sign-up-form__label' htmlFor="money">Beløb:</label>
                <MoneyInput className='sign-up-form__input' name="belob" id="belob" placeholder="Indtast støttebeløb" />
            </div>
            <div className="sign-up-form__form-group contact-form__select">
                <label className="sign-up-form__label" htmlFor="support-type">Støttetype:</label>
                <select name="stottetype" id="support-type-select" className="sign-up-form__input">
                    <option value="børnesponsorat">Børnesponsorat</option>
                    <option value="lejrsponsorat">Lejrsponsorat</option>
                    <option value="forening">Støtte til foreningen</option>
                </select>
            </div>
            <button type="submit" className='sign-up-form__button'>Tilmeld</button>
        </form>
    );
}