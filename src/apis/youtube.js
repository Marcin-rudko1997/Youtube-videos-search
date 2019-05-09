import axios from 'axios';

const KEY = 'AIzaSyDYEWEM-GvAoR0-mEmQlBVvDsHYg6y3eLU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})