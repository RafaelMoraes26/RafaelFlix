const URL = window.location.href.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://rafaelflix.herokuapp.com';

export default { URL };
