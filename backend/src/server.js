const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Boas-vindas à API do Task Master!');
});

app.get('/tarefas', (req, res) => {
  res.json({ message: 'GET (Select)' });
});

app.post('/tarefas', (req, res) => {
  res.json({ message: 'POST (Insert)' });
});

app.put('/tarefas/:id', (req, res) => {
  res.json({ message: 'PUT (Update)', taskId: req.params.id });
});

app.delete('/tarefas/:id', (req, res) => {
  res.json({ message: 'DELETE (Delete)', taskId: req.params.id });
});

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});
