import { getImagePath } from "../../utils";

function CommunityCard({ cards}) {
  if (cards.length > 0) {
    const imagePaths = getImagePath(cards);

    return (
      <>
        <h1>Community Cards</h1>
        {imagePaths.map((path, index) => (
          <img src={`/assets/images/${path}.svg`} alt="Community Cards" key={index}/>
        ))}
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default CommunityCard;
