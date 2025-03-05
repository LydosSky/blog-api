import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';

import routes from './routes';
import middlewares from './middlewares';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/user', routes.user);

// Error Handling
app.use(middlewares.errors.notFound);
app.use(middlewares.errors.serverError);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
