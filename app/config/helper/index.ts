const capitlizeFirstLetter = (string: string) => {
  if (typeof string != 'string') return '';

  let words = string.split(' ');
  let capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  let result = capitalizedWords.join(' ');

  return result;
};

export { capitlizeFirstLetter };
