function getName(name) {
  const splitName = name.toUpperCase().split('');

  const firstWord = splitName[0][0];
  const LastWord = splitName[1][0];
  const LastWordLowerCase = LastWord.toLowerCase();
  return firstWord + LastWordLowerCase;
}
export function transformToArr(snapVal) {
  return snapVal ? Object.keys(snapVal) : [];
}
function transformToArrWithId(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map(roomId => {
        return { ...snapVal[roomId], id: roomId };
      })
    : [];
}

async function getUserUpdate(userId, keyToUpdate, value, db) {
  const updates = {};
  updates[`/profiles/${userId}/${keyToUpdate}`] = value;
  const getMsgs = db
    .ref('/messages')
    .orderByChild('author/uid')
    .equalTo(userId)
    .once('value');
  const getRooms = db
    .ref('/rooms')
    .orderByChild('lastMessage/author/uid')
    .equalTo(userId)
    .once('value');
  const [mSnap, rSnap] = await Promise.all([getMsgs, getRooms]);
  mSnap.forEach(msgSnap => {
    updates[`/messages/${msgSnap.key}/author/${keyToUpdate}`] = value;
  });
  rSnap.forEach(roomSnap => {
    updates[`/rooms/${roomSnap.key}/lastMessage/author/${keyToUpdate}`] = value;
  });
  return updates;
}

export default getName;
export { transformToArrWithId, getUserUpdate };
