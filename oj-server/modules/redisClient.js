const redis = require('redis');
const client = redis.createClient();

const set = (key, value, callback) => {
    client.set(key, value, (err, res) => {
        if (err) console.error(err);
        else callback(res);
    })
};

const get = (key, callback) => {
    client.get(key, (err, res) => {
        if (err) console.error(err);
        else callback(res);
    })
};

module.exports = {
    get,
    set,
    expire: client.expire,
    quit: client.quit,
    redisPrint: redis.print
}