function sortFilmsByAlphabetical(films){
    return films.sort((a, b) => (
        a.title.localeCompare(b.title)
    ))
}

function sortFilmsByFavorite(films){
    return films.sort(a => (
        !a.favorite
    ))
}

export {sortFilmsByAlphabetical, sortFilmsByFavorite}