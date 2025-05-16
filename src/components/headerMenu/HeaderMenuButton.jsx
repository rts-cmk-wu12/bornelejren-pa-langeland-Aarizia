import { IoMenuOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import './HeaderMenuButton.scss';

export default function HeaderMenuButton({ menuOpen, setMenuOpen }) {

    return (
        <button className="menu__button" onClick={() => setMenuOpen(prevState => !prevState)}>
            {menuOpen ? <GrClose /> : <IoMenuOutline />}
        </button>
    )
}