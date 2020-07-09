import axios from 'axios';

export default {
  add,
  query,
  getById
};

async function add(movie) {
  return await axios.post('/api/movie', movie, {
    headers: { 'Contect-Type': 'application/json' }
  });
}

async function query() {
  return await axios.get('/api/movie');
}

async function getById(id) {
  return await axios.get(`/api/movie/${id}`);
}
