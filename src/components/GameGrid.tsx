import { Text } from '@chakra-ui/layout';
import useGames from '../hooks/useGames';
import { CircularProgress } from '@chakra-ui/react';

const GameGrid = () => {
  const { games, error, loading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {loading && <CircularProgress isIndeterminate color='green.300' />}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
