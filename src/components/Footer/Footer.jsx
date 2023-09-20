import { Link } from "react-router-dom";
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer>
            <h3>This is footer</h3>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            </footer>
        </div>
    );
};

export default Footer;