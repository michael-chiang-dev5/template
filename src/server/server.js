const { app } = require('./app.js');
const PORT = 8080;

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
