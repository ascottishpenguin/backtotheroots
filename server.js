

const express = require('express');
const app = express()

app.use(express.static('./dist/mel-site'))

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/mel-site/'}
  );
  });

app.listen(process.env.PORT || 8080);