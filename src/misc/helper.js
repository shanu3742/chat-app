function getName(name) {
  const splitName = name.toUpperCase().split('');

  const firstWord = splitName[0][0];
  const LastWord = splitName[1][0];
  const LastWordLowerCase = LastWord.toLowerCase();
  return firstWord + LastWordLowerCase;
}
function transformToArrWithId(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map(roomId => {
        return { ...snapVal[roomId], id: roomId };
      })
    : [];
}
export default getName;
export { transformToArrWithId };
