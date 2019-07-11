const socket = io();

socket.on('countUpdated',(count) => {
    console.log('count received:'+count);
});

document.querySelector('#increment').addEventListener('click',() => {

    console.log('clicked'); 
    socket.emit('increment');
});