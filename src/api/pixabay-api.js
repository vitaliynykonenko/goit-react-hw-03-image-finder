export { fetchData };

const API_KEY = '29834972-66a038f6460a1c02cdd4b6acb';
const BASE_URL = 'https://pixabay.com/api/';

function fetchData(requestKey, page) {
  const url = `${BASE_URL}?q=${requestKey}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No response from server'));
  });
}

