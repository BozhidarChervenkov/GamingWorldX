import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
    return (
        <div className="ml-3 mr-3" style={{ width: "18rem" }}>
            <h5 className="card-title">{game.title}</h5>
            <img src={game.imageUrl} style={{ width: "16rem", height: "15rem"}} className="card-img-top" alt={game.title} />
            <div className="card-body">
                <p className="card-text">
                    <span className="row">{game.description}</span>
                    <span className="row">{game.price}$</span>
                </p>
                <Link to="#" className="btn btn-primary">
                    Details
                </Link>
            </div>
        </div >
    );
};

export default GameCard;