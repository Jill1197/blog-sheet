// utils/fetchPosts.js
let fetch;
(async () => { fetch = (await import('node-fetch')).default; })();

const SHEET_API_URL = process.env.SHEET_API_URL;
const CACHE_TTL = parseInt(process.env.CACHE_TTL) || 3600;

let cache = null;
let lastFetch = 0;

async function fetchPosts() {
  const now = Math.floor(Date.now() / 1000);

  if (cache && now - lastFetch < CACHE_TTL) {
    console.log('Cache hit!');
    return cache;
  }

  console.log('Cache miss! Fetching from API...');
  const res = await fetch(SHEET_API_URL);
  const data = await res.json();

  cache = data;
  lastFetch = now;

  return data;
}

module.exports = fetchPosts;
