const tasks = [
  {
    id: 1,
    titulo: 'Configurar entorno de desarrollo',
    descripcion: 'Instalar Node.js, Express y preparar la estructura inicial del proyecto',
    completada: true
  },
  {
    id: 2,
    titulo: 'Crear rutas de la API',
    descripcion: 'Definir los endpoints GET, POST, PUT y DELETE para gestionar tareas',
    completada: true
  },
  {
    id: 3,
    titulo: 'Validar datos de entrada',
    descripcion: 'Comprobar que titulo y descripcion existan y que completada sea booleano',
    completada: false
  },
  {
    id: 4,
    titulo: 'Probar endpoints del servidor',
    descripcion: 'Verificar el funcionamiento de la API con PowerShell, Postman o curl',
    completada: false
  },
  {
    id: 5,
    titulo: 'Documentar el proyecto en README',
    descripcion: 'Agregar instrucciones de uso, ejemplos de peticiones y capturas de pruebas',
    completada: false
  }
];

module.exports = tasks;