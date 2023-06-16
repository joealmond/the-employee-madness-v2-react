import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import GameTable from "../Components/GameTable";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

const fetchGames = () => {
  return fetch("/api/games").then((res) => res.json());
};
const fetchMaxPlayers = (maxPlayers) => {
  console.log(maxPlayers)
  // return fetch(`${maxPlayers}`).then((res) => res.json());
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
    fetchMaxPlayers(maxPlayers)
    fetchGames()
      .then((game) => {
        setLoading(false);
        setGames(game);
      })
  }, [maxPlayers]);


  if (loading) {
    return <Loading />;
  }

  return <GameTable games={games} onDelete={handleDelete} />;
};

export default GameList;
