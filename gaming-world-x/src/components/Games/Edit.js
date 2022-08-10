import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { GameContext } from '../../contexts/GameContext';
import * as gameService from '../../services/gameService';

const Edit = () => {
    const [gameToEdit, setGameToEdit] = useState({});
    const navigate = useNavigate();
    const { gameId } = useParams();
    const { gameEdit } = useContext(GameContext);

    useEffect(() => {
        gameService.getById(gameId)
            .then(gameData => {
                setGameToEdit(gameData);
            })
    }, [gameId])

    const onSubmit = (e) => {
        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.target));

        gameService.edit(gameId, gameData)
            .then(result => {
                gameEdit(gameId, result);
                navigate(`/games/${gameId}`)
            });
    };

    return (
        <form className="offset-4 col-md-14 mt-5" onSubmit={onSubmit}>
            <div className="row col-md-6">

                <h1>Edit game:</h1>

                <hr />

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        defaultValue={gameToEdit.title}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        defaultValue={gameToEdit.description}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        Price
                    </label>
                    <input
                        type="text"
                        name="price"
                        className="form-control"
                        defaultValue={gameToEdit.price}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">
                        ImageUrl
                    </label>
                    <input
                        type="text"
                        name="imageUrl"
                        className="form-control"
                        defaultValue={gameToEdit.imageUrl}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="videoUrl" className="form-label">
                        VideoUrl
                    </label>
                    <input
                        type="text"
                        name="videoUrl"
                        className="form-control"
                        defaultValue={gameToEdit.videoUrl}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor='category'>Select Category:</label>
                    <select name='category' id='category' defaultValue={gameToEdit.category}>
                        <option value='Action'>Action</option>
                        <option value='Adventure'>Adventure</option>
                        <option value='Racing'>Racing</option>
                        <option value='Shooters'>Shooters</option>
                        <option value='Multiplayer '>Multiplayer</option>
                        <option value='RPG'>RPG</option>
                    </select>
                </div>

                <hr />
                <button type="submit" className="btn btn-primary mb-5">
                    Edit game
                </button>
            </div>
        </form>
    );
};

export default Edit;