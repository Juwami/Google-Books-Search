import axios from 'axios'

export default {
    searchBooks: (value) => {
        return axios.get('/api/booksearch/' + value);
    }
}