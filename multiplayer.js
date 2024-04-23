const ws = require("ws");

module.exports = (server) => {

  const socket = new ws.Server({ server: server, path: "/multiplayer" });

  socket.on("connection", (conn) => {
    console.log('connected!!!')

    function broadcast(data) {
      socket.clients.forEach((client) => {
        if (client !== conn && client.readyState === ws.OPEN) {
          client.send(JSON.stringify(data));
        }
      });
    }

    conn.on("message", (data) => {
      const msg = JSON.parse(data)
      broadcast(msg)
      // ...
    });

    conn.on("close", (data) => {
      console.log('close')
      // ...
    });

  });

};