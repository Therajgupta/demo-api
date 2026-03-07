const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/items', (req, res) => {
  res.json({
    items: [
      { id: 1, name: 'Item One', category: 'demo' },
      { id: 2, name: 'Item Two', category: 'demo' },
      { id: 3, name: 'Item Three', category: 'demo' },
    ]
  });
});

app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 1) {
    return res.status(400).json({ error: 'Invalid ID' });
  }
  res.json({ id, name: `Item ${id}`, category: 'demo' });
});

app.post('/api/items', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  res.status(201).json({ id: Date.now(), name, category: 'demo' });
});

module.exports = app;
