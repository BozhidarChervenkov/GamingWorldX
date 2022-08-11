import { useContext } from 'react';
import { useParams } from "react-router-dom";

import { GameContext } from '../../contexts/GameContext';
import GameListItem from "./GameListItem";
import '../../App.css';

const GamesByCategory = () => {
    const { categoryType } = useParams();
    const { games } = useContext(GameContext);

    const gamesByCategory = games.filter(g => g.category.toLowerCase() === categoryType);

    return (
        <>
            <hr />
            
            {gamesByCategory.length > 0
                ? gamesByCategory.map(g => <GameListItem key={g._id} game={g} />)
                : <h1 className='mt-5'>No games available in this game category!</h1>}
        </>
    );
};

export default GamesByCategory;