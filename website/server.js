import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; 

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors()); 

app.get('/bathrooms', async (req, res) => {
  const { lat, lng } = req.query;

  const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&keyword=public+toilet&key=AIzaSyACMRwb-sr4h4K3RPcb48mCe58UrBn64t8`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  res.json(data.results);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
