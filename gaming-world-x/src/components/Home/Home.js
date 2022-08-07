import GameCard from './GameCard';

import '../../../src/App.css';

const Home = ({ games }) => {
    return (
        <>
            <h1 className='mt-3'>Welcome to GameWorldX!</h1>

            <hr />

            <div>
                <img src="https://greyring.com/wp-content/uploads/2021/09/future-gaming.jpg" width={800} height={100} className="img-fluid mt-1" alt="gamingImage" />
            </div>

            <hr />

            <h3 className='mt-3 mb-3'>Recent games:</h3>

            <div className='row ml-5 justify-content-center'>
                {games.length > 0
                    ? games.map(x => <GameCard key={x._id} game={x} />)
                    : <p className="no-articles">No games yet</p>
                }
            </div>

            <hr />
        </>
    );
};

export default Home;