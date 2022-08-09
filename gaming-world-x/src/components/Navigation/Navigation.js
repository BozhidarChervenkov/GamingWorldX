import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

const Navigation = () => {
    const { user } = useContext(AuthContext);

    return (
        <nav className="navbar container-fluid navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                GamingWorldX
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/games/all">
                            All Games
                        </Link>
                    </li>
                    {user.email ?
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="/create">
                                Create
                            </Link>
                        </li>
                        : null
                    }
                </ul>

                <ul className="navbar-nav ml-auto">
                    {user.email
                        ?
                        <>
                            <p className="nav-link">Hello, {user.email}!</p>
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">
                                    Logout
                                </Link>
                            </li>
                        </>
                        : <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">
                                    Register
                                </Link>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </nav >
    );
};

export default Navigation;