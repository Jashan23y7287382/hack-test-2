const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;

// ---- Intentional Security Issue ----
// Hard‑coded secret. REMOVE ME!
const DB_PASSWORD = "asuagsg";


app.get('/', (req, res) => {
  res.json({ status: 'ok', message: DB_PASSWORD });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
