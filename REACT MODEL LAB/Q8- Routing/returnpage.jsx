import "./mainpage.css";
import "./returnpage.css";
import { Link } from "react-router-dom";
const Returnpage = () => {
    return (<>
        <div>
            <h1>This is Next Page</h1>
            <Link to='/mainpage' class="v2_21">Back to mainpage</Link>
        </div>
    </>
    );
};
export default Returnpage;