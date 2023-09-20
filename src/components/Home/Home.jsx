import { Outlet, useLocation} from "react-router-dom"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Meals from "../Meals/Meals";
const Home = () => {
    const location = useLocation()
    return (
        <div>
            <Header></Header>
            {location.pathname === '/' && (
                <Meals></Meals>
            )}
            <Outlet>
            <p>This is the default content.</p>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;