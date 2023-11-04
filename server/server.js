import express, { json } from 'express';
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'API Home' });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
