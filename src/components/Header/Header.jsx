import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            
            <nav> 

            <h3>The Meal DB</h3>
            <Link to='/'>Home</Link>
            
            </nav>
        </div>
    );
};

export default Header;