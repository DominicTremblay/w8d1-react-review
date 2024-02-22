import express from 'express';
const port = process.env.PORT || 3001;
import { posters } from './data/posters.js';

const app = express();

app.use(express.json());

app.get('/posters', (req, res) => {
  res.json(posters);
});

app.post('/posters', (req, res) => {
  const { imgSource, title, quote } = req.body;
  const newPoster = {
    id: Math.random().toString(36).substring(2, 8),
    imgSource,
    title,
    quote,
  };
  posters.push(newPoster);
  res.json(newPoster);
});

app.delete('/posters/:id', (req, res) => {
  const { id } = req.params;
  const index = posters.findIndex((poster) => poster.id === id);
  posters.splice(index, 1);
  res.json({ id });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
