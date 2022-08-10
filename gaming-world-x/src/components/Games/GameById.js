import { useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { AuthContext } from "../../contexts/AuthContext";
import { GameContext } from '../../contexts/GameContext';
import * as gameService from '../../services/gameService';
import '../../App.css';

const GameById = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { gameId } = useParams();
    const { games, gameRemove } = useContext(GameContext);

    const game = games.find(g => g._id === gameId) || {};
    const isAuthor = game._ownerId === user._id;
    console.log(game.videoUrl);

    const gameDeleteHandler = () => {
        gameService.delGame(gameId)
            .then(() => {
                gameRemove(gameId);
                navigate('/');
            });
    };

    return (
        <div className="mb-4 col-md-8 offset-2">
            <hr />

            <h1>
                <strong>{game.title}</strong>
            </h1>

            <img src={game.imageUrl} width={700} height={70} className="img-fluid mt-2 mb-2 rounded" alt="gamingImage" />

            <p align='left'>
                <strong>Description:</strong> {game.description}
            </p>
            <p align='left'>
                <strong>Category:</strong> {game.category}
            </p>
            <p align='left'>
                <strong>Price: </strong> {game.price}$
            </p>

            <hr />

            <strong> <h2>Video trailer:</h2> </strong>
            <div className='Video-player'>
                <ReactPlayer width='700px' height='500px' controls='true' url={game.videoUrl} />
            </div>

            <hr />

            {isAuthor &&
                <div className="row col-md-2 offset-5">
                    <Link to={`/game/edit/${gameId}`} className="btn btn-success mb-2">
                        Edit game
                    </Link>
                    <button onClick={gameDeleteHandler} className="btn btn-danger">
                        Delete game
                    </button>
                </div>
            }
        </div>
    );
}

export default GameById;