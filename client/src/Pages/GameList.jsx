import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import GameTable from "../Components/GameTable";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

const fetchGames = () => {
  return fetch("/api/games").then((res) => res.json());
};

const filterByPlayers = (maxPlayers, games) => {
  if (maxPlayers) {
    return games.filter(game => game.maxPlayers <= maxPlayers);
  }
  return games;
};

const deleteGame = (id) => {
  return fetch(`/api/games/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

const GameList = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState(null);
  const [searchParams] = useSearchParams();
  const maxPlayers = searchParams.get('maxPlayers');

  const handleDelete = (id) => {
    deleteGame(id);
    setGames((game) => {
      return game.filter((game) => game._id !== id);
    });
  };

  useEffect(() => {
    fetchGames()
      .then((games) => {
        setLoading(false);
        setGames(games);
      });
  }, []);

  const filteredGames = games && filterByPlayers(maxPlayers, [...games])

  if (loading) {
    return <Loading />;
  }

  return <GameTable games={filteredGames} onDelete={handleDelete} />;
};

export default GameList;

