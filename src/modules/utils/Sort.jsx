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

function sortByReleaseDate(films){
    const copy = [...films];
    return copy.sort((a, b) => ( 
        a.release_date - b.release_date)
    );
};

function sortByTitle(films){
    const copy = [...films];
    return copy.sort((a, b) => (
        a.title === b.title ? 0 : a.title < b.title ? -1 : 1
        )
    );
};

function checkSort(type, films){
    if(type === "Title") sortByTitle(films)
    if(type === "Release Date") sortByReleaseDate(films)
    if(type === "Favorite") sortFilmsByFavorite(films)

}

export {sortFilmsByAlphabetical, sortFilmsByFavorite, sortByReleaseDate, sortByTitle}