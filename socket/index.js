const { Server } = require("socket.io");

const io = new Server({ 
    cors: {
        origin: "http://localhost:3000",
    },
 });

io.on("connection", (socket) => {
  console.log('nabil yahyaoui')
});

io.listen(3000);