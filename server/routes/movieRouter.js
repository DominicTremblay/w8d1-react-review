import express from 'express';
import { moviePosters } from '../db/movies.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ movies: moviePosters });
});

export default router;
