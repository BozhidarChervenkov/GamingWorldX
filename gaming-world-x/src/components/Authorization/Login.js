import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/404');
            });
    }


    return (
        <form className="offset-4 col-md-14 mt-5" onSubmit={onSubmit}>
            <div className="row col-md-6">

                <h1>Login:</h1>

                <hr />

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                    />
                </div>

                <hr />

                <button type="submit" className="btn btn-primary mt-5">
                    Log in
                </button>
            </div>
        </form>
    );
};

export default Login;