import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

import { GameContext } from '../../contexts/GameContext';
import * as gameService from '../../services/gameService';

const GameById = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { gameId } = useParams();
    const { games, gameRemove } = useContext(GameContext);

    const game = games.find(g => g._id === gameId) || {};
    const isAuthor = game._ownerId === user._id;

    const gameDeleteHandler = () => {
        gameService.delGame(gameId)
            .then(() => {
                gameRemove(gameId);
                navigate('/');
            });
    };

    return (
        <div className="justify-content-center mb-5 col-md-8 offset-2">
            <hr />
            <h2>
                <strong>{game.title}</strong>
            </h2>
            <img src={game.imageUrl} width={700} height={60} className="img-fluid mt-2 mb-2 rounded" alt="gamingImage" />
            <p>
                <strong>Description:</strong> {game.description}
            </p>
            <p>
                <strong>Price: </strong> {game.price}$
            </p>
            {isAuthor &&
                <div className="row col-md-2 offset-5">
                    <Link to={`/game/edit/${gameId}`} className="btn btn-success mb-2">
                        Edit
                    </Link>
                    <button onClick={gameDeleteHandler} className="btn btn-danger">
                        Delete
                    </button>
                </div>
            }
            <hr />
        </div>
    );
}

export default GameById;