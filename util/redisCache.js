const redis = require("redis");
const client = redis.createClient();
const getData = require("./getData");
const cacheTime = 3600 * 1;
client.on("connect", error => {
  if (error) {
    console.log(error);
  }
});
const redisCache = (targetUrl, res, next, renderFunc) => {
  client.get(targetUrl, async (err, data) => {
    if (data) {
      renderFunc(JSON.parse(data), res);
    } else {
      const data = await getData(targetUrl);
      client.setex(targetUrl, cacheTime, JSON.stringify(data));
      renderFunc(data, res);
    }
  });
};

module.exports = redisCache;
