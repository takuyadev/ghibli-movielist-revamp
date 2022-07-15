async function getFilms(){
    const response = await fetch("https://ghibliapi.herokuapp.com/films");
    const data = await response.json()
    return data
}

export default getFilms 

// Set favorite algorithm and set it as the original array