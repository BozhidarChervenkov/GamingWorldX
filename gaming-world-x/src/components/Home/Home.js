import '../../../src/App.css';

const Home = () => {
    return (
        <>
            <h1 className='mt-3'>Welcome to GameWorldX!</h1>

            <hr />

            <div>
                <img src="https://greyring.com/wp-content/uploads/2021/09/future-gaming.jpg" width={800} height={100} className="img-fluid mt-1" alt="gamingImage"/>
            </div>

            <hr />

            <h3 className='mt-3'>Recent games:</h3>

            <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home;