const API_URL = "https://api.chucknorris.io/jokes/"

export default (endpoint = "random") =>
  fetch(`${API_URL}${endpoint}`, { mode: "cors" })
    .then(response => response.json())
    .then(data => data)
