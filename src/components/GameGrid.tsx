import { Text } from '@chakra-ui/layout';
import useGames from '../hooks/useGames';
import { CircularProgress, SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, error, loading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {loading && <CircularProgress isIndeterminate color='green.300' />}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={'10px'}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
