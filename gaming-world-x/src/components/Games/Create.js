import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { GameContext } from '../../contexts/GameContext';
import * as gameService from '../../services/gameService';
import isURL from 'validator/lib/isURL';

const Create = () => {
    // Validation:
    const [errors, setErrors] = useState({});
    const [fieldValues, setFieldValues] = useState({
        title: '',
        description: '',
        price: '',
        imageUrl: '',
        videoUrl: '',
        category: 'Action'
    });

    const changeValidationHandler = (e) => {
        setFieldValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const minLength = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: fieldValues[e.target.name].length < bound,
        }));
    }

    const isPositive = (e) => {
        let number = Number(e.target.value);
        setErrors(state => ({
            ...state,
            [e.target.name]: number < 0,
        }));
    }

    const validateWebsiteUrl = (e) => {
        let url = e.target.value;
        setErrors(state => ({
            ...state,
            [e.target.name]: !isURL(url),
        }));
    };

    const isFormValid = !Object.values(errors).some(x => x)

    // Main logic:
    const navigate = useNavigate();
    const { gameAdd } = useContext(GameContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const gameData = fieldValues;

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
                        value={fieldValues.title} onChange={changeValidationHandler} onBlur={(e) => minLength(e, 3)}
                    />
                    {errors.title &&
                        <p className="form-error">Title length should be at least 3 characters!</p>
                    }
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        value={fieldValues.description} onChange={changeValidationHandler} onBlur={(e) => minLength(e, 15)}
                    />
                    {errors.description &&
                        <p className="form-error">Title description should be at least 15 characters!</p>
                    }
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        Price
                    </label>
                    <input
                        type="text"
                        name="price"
                        className="form-control"
                        value={fieldValues.price} onChange={changeValidationHandler} onBlur={isPositive}
                    />
                    {errors.price &&
                        <p className="form-error">Price should be a positive number!</p>
                    }
                </div>

                <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">
                        ImageUrl
                    </label>
                    <input
                        type="text"
                        name="imageUrl"
                        className="form-control"
                        value={fieldValues.imageUrl} onChange={changeValidationHandler} onBlur={validateWebsiteUrl}
                    />
                    {errors.imageUrl &&
                        <p className="form-error">Invalid image URL!</p>
                    }
                </div>

                <div className="mb-3">
                    <label htmlFor="videoUrl" className="form-label">
                        VideoUrl
                    </label>
                    <input
                        type="text"
                        name="videoUrl"
                        className="form-control"
                        value={fieldValues.videoUrl} onChange={changeValidationHandler} onBlur={validateWebsiteUrl}
                    />
                    {errors.videoUrl &&
                        <p className="form-error">Invalid video URL!</p>
                    }
                </div>

                <div className="mb-3">
                    <label htmlFor='category'>Select Category:</label>
                    <select name='category' id='category' value={fieldValues.category} onChange={changeValidationHandler}>
                        <option value='Action'>Action</option>
                        <option value='Adventure'>Adventure</option>
                        <option value='Racing'>Racing</option>
                        <option value='Shooters'>Shooters</option>
                        <option value='Multiplayer '>Multiplayer</option>
                        <option value='RPG'>RPG</option>
                    </select>
                </div>

                <hr />

                <button type="submit" className="btn btn-primary mb-5" disabled={!isFormValid}>
                    Add Game
                </button>
            </div>
        </form>
    );
};

export default Create;