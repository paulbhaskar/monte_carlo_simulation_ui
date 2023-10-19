import { getImagePath, isObjectEmpty } from "../../utils";

function PlayerCard({ name, cards }) {
  if (!isObjectEmpty(cards)) {
    const holeCardsImagePaths = getImagePath(cards.hole_cards);
    const bestFiveCardsImagePaths = getImagePath(cards.best_five_cards);

    return (
      <>
        <div>
          <h1>{name} Hole Cards</h1>
          {holeCardsImagePaths.map((path, index) => (
            <img src={`/assets/images/${path}.svg`} key={index} alt="Hole Cards"/>
          ))}
        </div>
        <div>
          <h1>
            {name} Best Five Cards {cards.best_hand}
          </h1>
          {bestFiveCardsImagePaths.map((path, index) => (
            <img src={`/assets/images/${path}.svg`} key={index} alt="Best Five Cards"/>
          ))}
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default PlayerCard;
