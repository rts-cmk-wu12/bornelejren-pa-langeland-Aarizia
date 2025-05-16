import { Link } from 'react-router';
import './Footer.scss';

export default function Footer() {

    return (
        <footer className="footer">
                <small>Developed by 
                <Link to={'https://lindekilde.dev'}>E. Lindekilde</Link>
                2025
                </small>
        </footer>
    )
}