const cache = new Map();

function setCache(key, value, ttlSeconds) {
  const expiresAt = Date.now() + ttlSeconds * 1000;
  cache.set(key, { value, expiresAt });
}

function getCache(key) {
  const data = cache.get(key);
  if (!data) return null;

  if (Date.now() > data.expiresAt) {
    cache.delete(key);
    return null;
  }

  return data.value;
}

function deleteCache(key) {
  cache.delete(key);
}

module.exports = {
  setCache,
  getCache,
  deleteCache,
};
