import { getSong } from '../util/song_api_util';

export const fetchSong = (id) => dispatch =>
  getSong()
    .then(song => dispatch(receiveSong(song)))
    .catch(err => console.log(err));

