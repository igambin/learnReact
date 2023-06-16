export const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.text > quoteB.text ? 1 : -1;
    } else {
      return quoteA.text < quoteB.text ? 1 : -1;
    }
  });
};
