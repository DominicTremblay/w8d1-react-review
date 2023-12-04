import express from 'express';
import morgan from 'morgan';
import movieRouter from './routes/movieRouter.js';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ msg: 'home' });
});

app.use('/api/movies', movieRouter);

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
