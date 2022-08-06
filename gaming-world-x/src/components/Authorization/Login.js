const Login = () => {
    return (
        <form className="offset-4 col-md-14 mt-5">
            <div className="row col-md-6">

            <h1>Login:</h1>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-5">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Login;