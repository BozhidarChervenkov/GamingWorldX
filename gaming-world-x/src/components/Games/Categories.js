import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <>
            <hr />

            <div className="col-lg-10 offset-2 mt-4">
                <div className="row">
                    <div style={{ width: "20rem", height: "19rem" }}>
                        <Link to="action">
                            <img src="https://i.pcmag.com/imagery/roundups/04rB8kbcrHGgvsWGkGWWS2m-3..v1637158780.jpg" className="card-img-top rounded" style={{ width: "20rem", height: "15rem" }} alt="Action category" />
                        </Link>
                        <div className="card-body">
                            <p className="card-text">
                                Action
                            </p>
                        </div>
                    </div>

                    <div style={{ width: "20rem", height: "19rem" }}>
                        <Link to="adventure">
                            <img src="https://www.denofgeek.com/wp-content/uploads/2022/03/horizon-zero-dawn.jpg?w=1024" className="card-img-top rounded" style={{ width: "20rem", height: "15rem" }} alt="Adventure category" />
                        </Link>
                        <div className="card-body">
                            <p className="card-text">
                                Adventure
                            </p>
                        </div>
                    </div>

                    <div style={{ width: "20rem", height: "19rem" }}>
                        <Link to="racing">
                            <img src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/6/18/jnhtjx1nozaocxki9ekx/ios-racers-lead-asphalt-9" className="card-img-top rounded" style={{ width: "20rem", height: "15rem" }} alt="Racing category" />
                        </Link>
                        <div className="card-body">
                            <p className="card-text">
                                Racing
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div style={{ width: "20rem", height: "19rem" }}>
                        <Link to="rpg">
                            <img src="https://res.cloudinary.com/lmn/image/upload/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/k/r/a/kratos-god-war-1680x1050-d6f9f.jpg" className="card-img-top rounded" style={{ width: "20rem", height: "15rem" }} alt="RPG category" />
                        </Link>
                        <div className="card-body">
                            <p className="card-text">
                                RPG
                            </p>
                        </div>
                    </div>

                    <div style={{ width: "20rem", height: "19rem" }}>
                        <Link to="multiplayer">
                            <img src="https://www.10brutes.com/wp-content/uploads/2019/03/Fortnite-load-screen.jpg" className="card-img-top rounded" style={{ width: "20rem", height: "15rem" }} alt="Multiplayer category" />
                        </Link>
                        <div className="card-body">
                            <p className="card-text">
                                Multiplayer
                            </p>
                        </div>
                    </div>

                    <div style={{ width: "20rem", height: "19rem" }}>
                        <Link to="shooters">
                            <img src="https://cdn.realsport101.com/images/ncavvykf/gfinityesports/2947651076681158146ef763d979f5518be566a4-700x393.png?rect=1,0,698,393&w=700&h=394&dpr=2" className="card-img-top rounded" style={{ width: "20rem", height: "15rem" }} alt="Shooters category" />
                        </Link>
                        <div className="card-body">
                            <p className="card-text">
                                Shooters
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
        </>
    );
};

export default Categories;