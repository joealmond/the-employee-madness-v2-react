import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameForm from "../Components/GameForm";

const createGame = (game) => {
  return fetch("/api/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  }).then((res) => res.json());
};

const GameCreator = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGameEmployee = (game) => {
    setLoading(true);

    createGame(game)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
  };

  return (
    <GameForm
      onCancel={() => navigate("/")}
      disabled={loading}
      onSave={handleGameEmployee}
    />
  );
};

export default GameCreator;
