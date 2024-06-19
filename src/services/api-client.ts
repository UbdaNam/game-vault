import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'bfa4730f636a419796c81685e5bc7869',
  },
});
