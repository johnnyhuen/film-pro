import axios from 'axios'

export default axios.create({
  baseURL: 'https://pcpdfilm.johnnyhuen.repl.co',
  header: {
    'Content-type': 'application/json'
  }
})