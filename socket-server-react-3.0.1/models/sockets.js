const TicketList = require('./ticket-list');

class Sockets {

    constructor( io ) {

        this.io = io;

        // Crear la instancia de nuestro ticket control
        this.ticketList = new TicketList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', ( data ) => {
                console.log( data );
                
                
            });
            socket.on("solicitar-ticket", (data, callback) =>{
              const nuevoTicket = this.ticketList.CrearTicket();
              console.log(nuevoTicket);
              callback(nuevoTicket);
              
            })
            socket.on('atender-ticket', ({agente, escritorio}, callback) =>{
              const suTicket = this.ticketList.asignarTicket(agente, escritorio);
              callback(suTicket);
              this.io.emit("ticket-asignado", this.ticketList.ultimos13);
            })
        
        });
    }


}


module.exports = Sockets;