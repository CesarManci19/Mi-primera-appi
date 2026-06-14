const express = require('express');
const router = express.Router();
const tasks = require('./data');

router.get('/', (req, res) => {
  res.status(200).json(tasks);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  res.status(200).json(task);
});

router.post('/', (req, res) => {
  const { titulo, descripcion, completada } = req.body;

  if (!titulo || !descripcion || typeof completada !== 'boolean') {
    return res.status(400).json({
      error: 'Datos inválidos. Debes enviar titulo, descripcion y completada(boolean).'
    });
  }

  const newTask = {
    id: tasks.length + 1,
    titulo,
    descripcion,
    completada
  };

  tasks.push(newTask);
  res.status(201).json({ mensaje: 'Tarea creada correctamente', tarea: newTask });
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, descripcion, completada } = req.body;
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  if (!titulo || !descripcion || typeof completada !== 'boolean') {
    return res.status(400).json({
      error: 'Datos inválidos. Debes enviar titulo, descripcion y completada(boolean).'
    });
  }

  task.titulo = titulo;
  task.descripcion = descripcion;
  task.completada = completada;

  res.status(200).json({ mensaje: 'Tarea actualizada correctamente', tarea: task });
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  const deletedTask = tasks.splice(index, 1);
  res.status(200).json({ mensaje: 'Tarea eliminada correctamente', tarea: deletedTask[0] });
});

module.exports = router;