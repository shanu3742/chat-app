function getName(name) {
  const splitName = name.toUpperCase().split('');

  const firstWord = splitName[0][0];
  const LastWord = splitName[1][0];
  const LastWordWordLowerCase = LastWord.toLowerCase();
  return firstWord + LastWordWordLowerCase;
}
export default getName;
