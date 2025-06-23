
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Статичні файли (HTML, CSS, JS, медіа)
app.use(express.static(path.join(__dirname, 'public')));

// API для live-матчів
app.get('/api/matches', (req, res) => {
  // Симуляція live-даних
  const matches = [
    { id: 1, teamA: 'Team Alpha', teamB: 'Team Beta', score: '2:1', status: 'live' },
    { id: 2, teamA: 'Team Gamma', teamB: 'Team Delta', score: '1:3', status: 'finished' },
  ];
  res.json(matches);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
