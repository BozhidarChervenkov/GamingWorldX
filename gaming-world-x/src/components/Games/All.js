import { useEffect, useState } from 'react';

import GameListItem from './GameListItem';
import * as gameService from '../../services/gameService';

const All = () => {
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);
            });
    }, []);

    return (
        <>
            <h1>All games:</h1>

            <hr />

            <form className="d-flex col-md-6 offset-3">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={event => { setSearchTerm(event.target.value) }}
                />
            </form>

            <hr />

            {games.length > 0
                ? games.filter((game) => {
                    if (searchTerm === '') {
                        return game;
                    } else if (game.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return game;
                    }
                }).map(g => <GameListItem key={g._id} game={g} />)
                : <p>No games available!</p>
            }

            <hr />
        </>
    );
}

export default All;