const { v4: uuidV4 } = require('uuid');

class Tickets{
    constructor(number){
       this.id = uuidV4();
       this.number = number;
       this.desk = null;
       this.agente = null;
    }

    
   
}

module.exports = Tickets;