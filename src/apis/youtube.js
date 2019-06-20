import axios from 'axios';

const KEY = 'AIzaSyBt-3bJQzZbDjKa5AzaY5K7A73AHoeoElg';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
