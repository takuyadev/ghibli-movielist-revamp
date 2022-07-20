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



export {sortFilmsByFavorite, sortByReleaseDate, sortByTitle}