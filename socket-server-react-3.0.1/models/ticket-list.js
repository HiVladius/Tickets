
const Ticket = require('./tickets');


class TicketList {
    constructor() {
        this.lastNumber = 0;

        this.pendientes = [];
        this.asignados = [];
    }

    get siguienteNumero() {
        this.lastNumber++;
        return this.lastNumber;
    }

    // 3 que se van a mostrar en el escritorio

    get ultimos13() {
        return this.asignados.slice(0, 13);
    }

    CrearTicket() {
        const nuevoTicket = new Ticket(this.siguienteNumero);
        this.pendientes.push(nuevoTicket);
        return nuevoTicket;
    }

    asignarTicket(agente, escritorio){
        if (this.pendientes.length === 0) {
            return null;
        }

        const siguienteTicket = this.pendientes.shift();
        siguienteTicket.agente = agente;
        siguienteTicket.escritorio = escritorio;

        this.asignados.unshift(siguienteTicket);

        return siguienteTicket;
    }
}

module.exports = TicketList;