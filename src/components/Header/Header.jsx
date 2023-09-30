import "./Header.scss";
import emblem from "../../assets/emblem.png";
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="divContainer">
                <img src={emblem} className="emblem"></img>
                <h1>
                    DROPLYTICS
                </h1>
                <ul className="listItems">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/report">Analysis Report</a>
                    </li>
                    <li>
                        <a href="/dataCollection">Data Collection Portal</a>
                    </li>
                    <li>
                        <a href="/policies">Policies</a>
                    </li>
                </ul>

                <div className="navbar-login">
                    {
                        localStorage.getItem("officerName") ? (<button onClick={() => {
                            toast.success('Logged out successfully!', {
                                duration: 2000,
                                position: 'bottom-right'
                            })

                            setTimeout(() => {
                                localStorage.removeItem("officerToken");
                                localStorage.removeItem("officerName");
                                localStorage.removeItem("isAdmin");
                                navigate('/')
                            },2000)
                        }} className="loginButton">
                            Logout
                        </button>) : (<button onClick={() => {
                            window.location.href = "/login";
                        }} className="loginButton">
                            Login
                        </button>)
                    }
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Header;