import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { GameContext } from '../../contexts/GameContext';
import * as gameService from '../../services/gameService';

const Create = () => {
    const navigate = useNavigate();
    const { gameAdd } = useContext(GameContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.target));

        gameService.create(gameData)
            .then(result => {
                gameAdd(result);
                navigate('/');
            });
    };

    return (
        <form className="offset-4 col-md-14 mt-5" onSubmit={onSubmit}>
            <div className="row col-md-6">

                <h1>Add a new game:</h1>

                <hr />

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
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
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor='category'>Select Category:</label>
                    <select name='category' id='category'>
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
                    Add Game
                </button>
            </div>
        </form>
    );
};

export default Create;