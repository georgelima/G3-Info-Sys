/* @flow */

import './src/config/db';
import app from './src/config/express';

app.listen(app.get('PORT'), (): void => {
  console.log("Server is running!");
});


