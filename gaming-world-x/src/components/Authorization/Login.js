import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { AuthContext } from "../../contexts/AuthContext";
import isEmail from 'validator/lib/isURL';

const Login = () => {
    // Validation:
    const [errors, setErrors] = useState({});
    const [fieldValues, setFieldValues] = useState({
        email: '',
        password: '',
    });

    const changeValidationHandler = (e) => {
        setFieldValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const minLength = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: fieldValues[e.target.name].length < bound,
        }));
    };

    const validateIsEmail = (e) => {
        let input = e.target.value;
        setErrors(state => ({
            ...state,
            [e.target.name]: !isEmail(input),
        }));
    };

    const isFormValid = !Object.values(errors).some(x => x);

    //Main logic:
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = fieldValues;

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/404');
            });
    };

    return (
        <form className="offset-4 col-md-14 mt-5" onSubmit={onSubmit}>
            <div className="row col-md-6">

                <h1>Login:</h1>

                <hr />

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={fieldValues.email} onChange={changeValidationHandler} onBlur={validateIsEmail}
                    />
                    {errors.email &&
                        <p className="form-error">Email should be valid!</p>
                    }
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={fieldValues.password} onChange={changeValidationHandler} onBlur={(e) => minLength(e, 6)}
                    />
                    {errors.password &&
                        <p className="form-error">Password should be at least 6 characters long!</p>
                    }
                </div>

                <hr />

                <button type="submit" className="btn btn-primary mt-5" disabled={!isFormValid || (fieldValues.email === '' || fieldValues.password === '')}>
                    Log in
                </button>
            </div>
        </form>
    );
};

export default Login;