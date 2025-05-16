import { Link } from "react-router";
import HeaderMenuButton from "./HeaderMenuButton";
import { useState } from "react";
import './HeaderMenu.scss';

export default function HeaderMenu() {

    const [menuOpen, setMenuOpen] = useState(false);
    const style = {
        ul: {
            transform: menuOpen ? 'translateX(0%)' : 'translateX(200%)',
            height: menuOpen ? 'fit-content' : '0rem'
        }
    }

    return (
        <nav className="header-menu">
            <HeaderMenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <ul style={style.ul} className="header-menu-list">
                <li className="header-menu-list__item">
                    <Link to={'/om-os'}>Om os</Link>
                </li>
                <li className="header-menu-list__item">
                    <Link to={'/tilmeld-som-sponsor'}>Tilmeld som sponsor</Link>
                </li>
                <li className="header-menu-list__item">
                    <Link to={'/boernelejren-takker'}>Børnelejren takker</Link>
                </li>
            </ul>
        </nav>
    )
}