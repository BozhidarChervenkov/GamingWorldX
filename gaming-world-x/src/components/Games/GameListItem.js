import { Link } from "react-router-dom";

const GameListItem = ({ game }) => {
    return (
        <div className="justify-content-center mb-5 col-md-8 offset-2">
            <h3>
                <strong>{game.title}</strong>
            </h3>
            <img src={game.imageUrl} width={700} height={60} className="img-fluid mt-2 mb-2 rounded" alt="gamingImage" />
            <p>
                <strong>Description:</strong> {game.description}
            </p>
            <p>
                <strong>Price: </strong> {game.price}$
            </p>
            <div className="row col-md-2 offset-5">
                <Link to="#" className="btn btn-warning mb-2">
                    Details
                </Link>
            </div>
            <hr />
        </div>

    );
};

export default GameListItem;