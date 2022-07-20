//General Imports
import React, {useState, useEffect, useContext} from 'react'
import { ThemeContext } from './modules/context/ThemeContext';
import './App.css';

//Module Imports
import getFilms from './modules/api/GetFilms'
import { updateFavorites } from './modules/utils/Favorite'
import { filterFilmsBySearch } from './modules/utils/Filter';
import { sortFilmsByFavorite, sortByReleaseDate, sortByTitle } from './modules/utils/Sort';

//Component Imports
import Header from './components/Header/Header'
import FilmDetails from './components/Film/FilmDetails/FilmDetails'
import FilmCarousel from './components/Film/FilmCarousel/FilmCarousel'
import Searchbar from './components/Input/Searchbar/Searchbar'
import Dropdown from './components/Input/Dropdown/Dropdown';
import Loading from './components/Loading/Loading'

function App() {
  const [films, setFilms] = useState([])
  const [allFilms, setAllFilms] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [currentFilm, setCurrentFilm] = useState()
  const [currentSort, setCurrentSort] = useState("Title")
  const {theme} = useContext(ThemeContext)
  
  const [favorites, setFavorites] = useState( 
      localStorage.getItem("id") ? 
      localStorage.getItem("id").split(",") : 
      [] )

    
  const DROPDOWN_OPTIONS = [
    {
        text: "Title",
        click: () => {
          setFilms(prevFilms => {
            return sortByTitle([...prevFilms])
          })
      }
    },
    {
        text: "Favorite",
        click: () => {
          setFilms(prevFilms => {
            return sortFilmsByFavorite([...prevFilms])
          })
      }
    },
    {
        text: "Release Date",
        click: () => {
          setFilms(prevFilms => {
            return sortByReleaseDate([...prevFilms])
          })
      }
    },
]

  // Ghibli movie list API call to store array to state
  useEffect(() => {
    getFilms()
      .then(data=>{
        const updatedData = updateFavorites(data, favorites)
        setLoaded(true)
        setFilms(updatedData)
        setAllFilms(updatedData) 
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  useEffect(()=>{
    setFilms(prevFilms => (
      updateFavorites(prevFilms, favorites)
    ))
  },[favorites])

  useEffect(()=>{
    currentFilm && setCurrentFilm(prevFilm => {
      if(films.length !== 0) {
        return films.find(film => (
            film.id === prevFilm.id
        ))
      }
      return prevFilm
    })
  },[films, currentFilm])
  
  return (
      <>
         {!loaded ? <Loading/> : 
          <div className={`app app--${theme}`}>
              <Header/>
              <FilmDetails 
                  film={currentFilm} 
                  handleClick={setFavorites}
              />
              <section>
                <div className="searchbar-container">
                  <Searchbar 
                        handleOnChange={(e)=>{
                          setFilms(allFilms)
                          setFilms(prevFilms => (
                          filterFilmsBySearch(prevFilms, e.target.value)
                        ))
                      }}/>
                  <Dropdown 
                    text={currentSort}
                    setCurrentSort={setCurrentSort}
                    options={DROPDOWN_OPTIONS}/>
                </div>
              <FilmCarousel 
                handleClick={setCurrentFilm} 
                films={films}/>
            </section>
          </div>
        }
      </>
  );
}

export default App;
