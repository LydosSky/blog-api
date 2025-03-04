import express from 'express';
import 'dotenv/config';

const app = express();
app.use(express.json());

// Handle 404 Not found
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Handle 500
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API PORT:${PORT}`));
