import './src/config/db';
import app from './src/config/express';

app.listen(app.get('PORT'), () => {
  console.log("Server is running!");
});


