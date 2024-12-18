import express from 'express';
import { createMiddleware } from '@mswjs/http-middleware';
import handlers from './handlers';

const app = express();
const port = 9090;

app.use(createMiddleware(...handlers));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
