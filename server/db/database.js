const monk = require('monk');
const db = monk('localhost/messages');

const messages = db.get('messages');

module.exports = messages;