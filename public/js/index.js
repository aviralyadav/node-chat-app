var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Vishwa',
        text: 'hiii'
    });
});

socket.on('newMessage', function (message) {
    console.log('New Message', message);
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});