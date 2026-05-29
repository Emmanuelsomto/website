const library = [ {
  title: ` Your Next Five Moves: Master the Art of Business Strategy `,
  author: ` Patrick Bet-David and Greg Dinkin `,
  about: ` Abook on how to plan ahead` ,
  pages: 320,
},

{
  title: ` Choose Your Enemies Wisely: Business Planning for the Audacious Few `,
  author: ` Patrick Bet-David `,
  about: ` A book that emphasizes the importance of identifying and understanding ones's adversaries to succeed in the business world ` ,
  pages: 304,
},

];

console.log(" Books in the library:\n");

function getBookInformation(catalog) {
  return(catalog.map(book => book.name))
};

console.log(getBookInformation(library));




