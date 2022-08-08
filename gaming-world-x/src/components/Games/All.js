import { useEffect, useState } from 'react';

import GameListItem from './GameListItem';
import * as gameService from '../../services/gameService';

const All = () => {
    const [games, setGames] = useState([]);

    console.log(games);
    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);
            });
    }, []);

    console.log(games);
    return (
        <>
            <h1>All games:</h1>

            <hr />
            {games.length > 0
                ? games.map(x => <GameListItem key={x._id} game={x} />)
                : <p>No games available!</p>
            }
            <hr />
        </>
    );
}

export default All;