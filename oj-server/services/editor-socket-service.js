const rc = require('../modules/redisClient');
const TIMEOUT_IN_SECONDS = 3600;

module.exports = (io) => {
    const collaborations = {};
    const socketId2SessionId = {};
    const sessionPath = '/temp_session/';

    io.on('connection', (socket) => {
        let sessionId = socket.handshake.query['sessionId'];
        socketId2SessionId[socket.id] = sessionId;
        console.log('connection sockerId: ' + socket.id + ', sessionId: ' + sessionId);

        if (sessionId in collaborations)
            collaborations[sessionId].participants.push(socket.id);
        else {
            rc.get(sessionPath + sessionId, data => {
                if (data) {
                    console.log('session terminated previosly, get back from redis.')
                    collaborations[sessionId] = {
                        participants: [socket.id],
                        cachedInstructions: JSON.parse(data)
                    }
                } else {
                    console.log('create new session.')
                    collaborations[sessionId] = {
                        participants: [socket.id],
                        cachedInstructions: []
                    }
                }
            })
        }
        
        socket.on('change', (delta) => {
            let sessionId = socketId2SessionId[socket.id];
            console.log('change', sessionId + ' ' + delta);
            if (sessionId in collaborations) {
                collaborations[sessionId].cachedInstructions.push(['change', delta, Date.now()]);
                collaborations[sessionId].participants.forEach(participant => {
                    if (socket.id != participant) io.to(participant).emit('change', delta);
                });
            } else {
                console.error('could not tie socket id to any collaboration');
            }
        });

        socket.on('restoreBuffer', () => {
            let sessionId = socketId2SessionId[socket.id];
            console.log('restore buffer for session ' + sessionId + ', socket id: ' + socket.id);
            if (sessionId in collaborations) {
                collaborations[sessionId].cachedInstructions.forEach(instruction => {
                    socket.emit(instruction[0], instruction[1]);
                })
            } else console.error('could not find any collabration for session');
        });

        socket.on('disconnect', () => {
            let sessionId = socketId2SessionId[socket.id];
            console.log('connection sockerId: ' + socket.id + ', sessionId: ' + sessionId);
            let foundAndRemoved = false;
            if (sessionId in collaborations) {
                let participants = collaborations[sessionId].participants;
                let index = participants.indexOf(socket.id);
                if (index >= 0) {
                    participants.splice(index, 1);
                    foundAndRemoved = true;
                    if (participants.length == 0) {
                        console.log('Last participant in collabotation,')
                        let key = sessionPath + sessionId;
                        let value = JSON.stringify(collaborations[sessionId].cachedInstructions);
                        rc.set(key, value, rc.redisPrint);
                        rc.expire(key, TIMEOUT_IN_SECONDS);
                        delete collaborations[sessionId];
                    }
                }
            }
            if (!foundAndRemoved)
                console.error('warning: could not fine the socket.id in collaboration.');
        })
    })
}