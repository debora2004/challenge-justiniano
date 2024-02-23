const app = require("./app");

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

process.on('SIGINT', () => {
  console.log('Proceso de la aplicación terminado. Cerrando conexiones...');
  server.close(() => {
    console.log('Conexiones cerradas. Saliendo.');
    process.exit(0);
  });
});
