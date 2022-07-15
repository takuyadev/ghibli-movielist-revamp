function filterFilmsBySearch(films, query){
    return films.filter(film => (
        film.title.toLowerCase().includes(query.toLowerCase())
    ))
}

export { filterFilmsBySearch }