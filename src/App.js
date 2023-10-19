import axios from "axios";
import { useEffect, useState } from "react";

import CommunityCard from "./components/Poker/CommunityCard";
import PlayerCard from "./components/Poker/PlayerCard";

function App() {
  const [communityCards, setCommunityCards] = useState([]);
  const [individualPlayerCards, setIndividualPlayerCards] = useState({});

  const renderPlayerCards = () => {
    const playerCards = [];
    for (let i = 1; i < 8; i++) {
      playerCards.push(
        <PlayerCard
          key={i}
          name={`Player ${i}`}
          cards={individualPlayerCards[`player_${i}`]}
        />
      );
    }
    return <div>{playerCards}</div>;
  };

  useEffect(() => {
    const pathName = window.location.pathname
    axios
      .get(`http://localhost:8000/api${pathName}`)
      .then((response) => {
        const data = response.data;
        setCommunityCards(data.community_cards);
        for (let i = 1; i < 8; i++) {
          setIndividualPlayerCards((prevState) => ({
            ...prevState,
            [`player_${i}`]: data[`player_${i}`],
          }));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <CommunityCard cards={communityCards} />
      {renderPlayerCards()}
    </>
  );
}

export default App;
