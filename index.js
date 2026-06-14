const express = require('express');
const taskRoutes = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API de tareas funcionando correctamente'
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});