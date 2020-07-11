import axios from 'axios';

export default {
  add,
  update,
  query,
  remove,
  getById
};

async function remove(id) {
  return await axios.delete(`/api/movie/${id}`, {
    headers: { 'Contect-Type': 'application/json' }
  });
}

async function add(movie) {
  return await axios.post('/api/movie', movie, {
    headers: { 'Contect-Type': 'application/json' }
  });
}

async function update(movie) {
  return await axios.put(`/api/movie/${movie._id}`, movie, {
    headers: { 'Contect-Type': 'application/json' }
  });
}

async function query() {
  return await axios.get('/api/movie');
}

async function getById(id) {
  return await axios.get(`/api/movie/${id}`);
}
