import { Link } from "react-router";
import HeaderMenu from "./headerMenu/HeaderMenu";
import './Header.scss';

export default function Header() {

    return (
        <header className="header">
                <Link to={'/'}>
                    <img src="../../images/logo.png" className="header__logo" alt="logo" />
                </Link>
                <Link to={'/'} className="header__link">
                    <h1 className="header__heading">Børnelejren på Langeland</h1>
                </Link>
                <HeaderMenu />
        </header>
    )
}