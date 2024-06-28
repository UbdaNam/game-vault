import { Text } from '@chakra-ui/layout';
import useGames from '../hooks/useGames';

const GameGrid = () => {
  const { games, error, loading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {loading && <Text>Loading...</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
