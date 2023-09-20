import { Link } from "react-router-dom";
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <h3>This is footer</h3>
            <footer>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            </footer>
        </div>
    );
};

export default Footer;