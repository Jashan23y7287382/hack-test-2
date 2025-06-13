const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ---- Intentional Security Issue ----
// Hard‑coded secret. REMOVE ME!
const DB_PASSWORD = 'SuperSecret123!';

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Hello insecure world!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
