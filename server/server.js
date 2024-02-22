import express from 'express';
const PORT = process.env.PORT || 3001;
import posterList from './data/poster_list.js';

const app = express();

app.use(express.json());

app.get('/posters', (req, res) => {
  res.json(posterList);
});

app.post('/posters', (req, res) => {
  const { imgSource, title, quote } = req.body;

  const newPoster = {
    id: Math.random().toString(36).substring(2, 8),
    imgSource,
    title,
    quote,
  };

  posterList.push(newPoster);
});

app.delete('/posters/:id', (req, res) => {
  const { id } = req.params;

  const index = posterList.findIndex((poster) => poster.id === id);

  if (index !== -1) {
    posterList.splice(index, 1);
  }
  res.status(204).send();
});

app.listen(3001, () => console.log(`Server is running on port ${PORT}`));
