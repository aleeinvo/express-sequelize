const MyEmitter = require('../events/my-event');

const myEmitter = new MyEmitter();

myEmitter.once('dev', function() {
    console.log('Dev Event has occoured');
});

module.exports = {
    index(req, res) {
        myEmitter.emit('dev');
        myEmitter.emit('dev');
        myEmitter.emit('dev');
        myEmitter.emit('dev');
        return res.send({
            message: 'Hello Dev!',
            data: {}
        });
    }
}