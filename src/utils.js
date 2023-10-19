export const getImagePath = (cards) => {
  const cards_arr = cards.substring(1, cards.length - 1).split(" ");
  const imagePaths = [];
  for (let i = 0; i < cards_arr.length; i += 2) {
    const rank = cards_arr[i];
    const suit = cards_arr[i + 1];
    imagePaths.push(`${rank}_of_${suit}`);
  }
  return imagePaths;
};

export const isObjectEmpty = (obj) => {
  for (const i in obj) return false;
  return true;
}
