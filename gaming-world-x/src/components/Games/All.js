import { useEffect, useState } from 'react';

import GameListItem from './GameListItem';
import Pagination from '../Pagination/Pagination';
import * as gameService from '../../services/gameService';

const All = () => {
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(2);

    useEffect(() => {
        gameService.getAll()
            .then(games => {
                setGames(games);
            });
    }, []);


    // Get current games(pagination)
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

    // Change page logic
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

            {currentGames.length > 0
                ? currentGames.filter((game) => {
                    if (searchTerm === '') {
                        return game;
                    } else if (game.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return game;
                    }
                    return null;
                }).map(g => <GameListItem key={g._id} game={g} />)
                : <p>No games available!</p>
            }

            <Pagination gamesPerPage={gamesPerPage} totalGames={games.length} paginate={paginate} />

            <hr />
        </>
    );
}

export default All;