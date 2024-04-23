const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

const fetchData = () => {
    fetch(baseURL)
        .then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

fetchData();

const getTodos = () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch((err) => console.log(err))
}
getTodos();