const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    groupNumber: "01",
    members: ["Subhan Aziz"],
    projectTitle: "Railway Management System",
  });
});

app.listen(PORT, () => {
  console.log(`Registration server running on http://localhost:${PORT}`);
});
