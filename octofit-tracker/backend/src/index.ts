import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = Number(process.env.PORT ?? 8000);
const MONGODB_URI = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit';

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'OctoFit Tracker backend is running.' });
});

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB at', MONGODB_URI))
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});
