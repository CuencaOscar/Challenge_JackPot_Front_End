import axios from 'axios';

const getImages = (setFruit) => {
  const request = axios.get('http://localhost:8000/JackPot/')
  return request.then(response => { 
    setFruit(response.data.map((data) => data.img)); 
  })
}

const getUser = (email, setUser) => {
  const request = axios.post('http://localhost:8000/JackPot/auth/', email)
  return request.then(response => { setUser(response.data) })
}

const getCreditsRoll = (current_credits, setCredits, setIndices) => {
  const request = axios.post('http://localhost:8000/JackPot/new_roll/', current_credits)
  return request.then(response => {
    setIndices(response.data['new_roll']);
    setCredits(response.data['total_credits']);
    localStorage.setItem("credit", response.data['total_credits']);
    localStorage.setItem("indice", response.data['new_roll'])
  })
}

export { getImages, getUser, getCreditsRoll }