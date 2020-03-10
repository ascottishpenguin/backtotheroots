app.use(express.static('./dist/backtotheroots'))

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/backtotheroots/'}
  );
  });

app.listen(process.env.PORT || 8080);