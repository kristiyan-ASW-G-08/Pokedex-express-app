const redis = require('redis');
const client = redis.createClient();
const getData = require('./getData');
const error = require('./error');
const cacheTime = 3600  * 1
client.on('connect', error => {
  if (error) {
    console.log(error);
  }
});
const redisCache = (targetUrl, res, next, renderFunc) => {
  client.get(targetUrl, (err, data) => {
    if (data) {
      console.log('was cached');
      renderFunc(JSON.parse(data), res);
    } else {
      getData(targetUrl)
        .then(data => {
          client.setex(targetUrl, cacheTime, JSON.stringify(data));
          renderFunc(data, res);
        })
        .catch(catchErr => {
          error(catchErr, next);
        });
    }
  });
};

module.exports = redisCache;


