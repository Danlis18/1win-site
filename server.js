
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static('public'));

// Симуляція API матчів
app.get('/api/matches', (req, res) => {
    res.json([
        { teamA: "Team Alpha", teamB: "Team Beta", score: "1:2", time: "45'" },
        { teamA: "Team Gamma", teamB: "Team Delta", score: "0:0", time: "HT" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
