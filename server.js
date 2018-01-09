const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/randomise', (req, res) => {

  const queryString = decodeURI(req.url);

  let devList = JSON.parse(queryString.split('?')[1]);

  // return shuffled array
  const shuffle = (array) => {
    // Fisher Yates shuffle
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      // Pick a remaining developer
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current developer.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  // shuffle devList
  const shuffledDevList = shuffle(devList);

  // Return
  res.json(shuffledDevList);
});

// "Catchall handler: send React index.html for any other requests than above"
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Rota generator listening on ${port}`);
