const MyEmitter = require('../events/my-event');

const myEmitter = new MyEmitter();

myEmitter.on('dev', function(path) {
    console.log('Dev Event has occoured');
    console.log('Here is this:', this);
})

myEmitter.on('dev', function(path) {
    console.log('Request path is: ', path);
})

module.exports = {
    index(req, res) {
        myEmitter.emit('dev', req.path);
        return res.send({
            message: 'Hello Dev!',
            data: {}
        });
    }
}