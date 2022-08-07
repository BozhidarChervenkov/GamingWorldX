import { useContext } from 'react';

import { GameContext } from '../../contexts/GameContext';
import * as gameService from '../../services/gameService';

const Create = () => {
    const { gameAdd } = useContext(GameContext);

    const onSubmit = (e) => {
        e.preventDefault();
        
        const { title, description, price, imageUrl } = Object.fromEntries(new FormData(e.target));

        gameService.create({ title, description, price, imageUrl })
            .then(result => {
                gameAdd(result);
            });
    };

    return (
        <form className="offset-4 col-md-14 mt-5" onSubmit={onSubmit}>
            <div className="row col-md-6">

                <h1>Add new game:</h1>

                <hr />

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Price
                    </label>
                    <input
                        type="text"
                        name="price"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        ImageUrl
                    </label>
                    <input
                        type="text"
                        name="imageUrl"
                        className="form-control"
                    />
                </div>

                <hr />

                <button type="submit" className="btn btn-primary mt-5">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Create;