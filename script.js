//var element = React.createElement('div', {}, 'Hello world!');
//ReactDOM.render(element, document.getElementById('app'));

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://files.readanybook.com/786122/files/harry-potter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'https://www.joy.pl/u/ic/W1/u/a/17/11/to-pewne-bedzie-nowy-krol-lew-i-znamy-obsade_51.jpeg'
  },
  {
    id: 3,
    title: 'Kubuś puchatek',
    desc: 'Film o miodojadzie',
    img: 'https://i.ytimg.com/vi/2I1h8l0SJR4/hqdefault.jpg'
  },
  {
    id: 4,
    title: 'Iniemamocni',
    desc: 'Film o bohaterze?',
    img: 'https://vignette.wikia.nocookie.net/iniemamocni/images/c/ce/T%C5%82o.jpg/revision/latest/scale-to-width-down/405?cb=20151126200704&path-prefix=pl'
  }
];


var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})

    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'));