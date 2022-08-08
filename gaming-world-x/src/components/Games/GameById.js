import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AuthContext } from "../../contexts/AuthContext";
import { GameContext } from '../../contexts/GameContext';

const GameById = () => {
    const { user } = useContext(AuthContext);
    const { gameId } = useParams();
    const { games } = useContext(GameContext);

    console.log(user._id);
    const game = games.find(g => g._id === gameId) || {};
    const isAuthor = game._ownerId === user._id;

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
                    <Link to={`/game/delete/${gameId}`} className="btn btn-danger">
                        Delete
                    </Link>
                </div>
            }
            <hr />
        </div>
    );
}

export default GameById;