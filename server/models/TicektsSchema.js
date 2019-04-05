var mongoose= require('mongoose');

let Schema=mongoose.Schema;

let TicketSchema= new Schema({
    ticket_person_reporting:String,
    ticket_problem_description:String,
    ticket_date:Number

});
module.exports = mongoose.model('TroubleTicket', TicketSchema);