import { Link } from "react-router";
import './ThankYouMain.scss';

export default function ThankYouMain() {

    return (
        <main>
            <h2>Tak for din støtte!</h2>

            <Link to={'/'}>Tilbage til forsiden</Link>
            <Link to={'/boernelejren-takker'}>Se alle sponsorer</Link>
        </main>
    )
}