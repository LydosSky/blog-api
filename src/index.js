import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';
import middlewares from './middlewares';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/user', routes.user);
app.use('/post', routes.post);
app.use('/comment', routes.comment);

// Error Handling
app.use(middlewares.errors.notFound);
app.use(middlewares.errors.serverError);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
