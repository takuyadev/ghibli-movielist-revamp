// Modifies incoming films array and returns updated with favorite value

const updateFavorites = (films, favorites) => (
    films.map(film=>({
        ...film,
        favorite: favorites.includes(film.id)
    }))
)

function saveFavorite(id, handleClick){
    let result;
    const prevStorage = 
        localStorage.getItem("id") ?
        localStorage.getItem("id").split(",") :
        []

    if(!prevStorage.includes(id)){
        if(prevStorage.length !== 0) {
            result = [...prevStorage, id]
        } else result = [id] 
    } else {
        result = prevStorage.filter(filmId => filmId !== id)
    }

    if(result){
        localStorage.setItem("id", result)
        handleClick(result)
    }
}

export {updateFavorites, saveFavorite}