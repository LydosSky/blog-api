import express from 'express';
import 'dotenv/config';
import routes from './routes';
import middlewares from './middlewares';

const app = express();
app.use(express.json());

app.use('/user', routes.user);

// Error Handling
app.use(middlewares.errors.notFound);
app.use(middlewares.errors.serverError);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API PORT:${PORT}`));
