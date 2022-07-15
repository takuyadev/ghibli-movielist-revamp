//General Imports
import React, {useState, useEffect, useContext} from 'react'
import { ThemeContext } from './modules/context/ThemeContext';
import './App.css';

//Module Imports
import getFilms from './modules/api/GetFilms'
import { updateFavorites } from './modules/utils/Favorite'
import { filterFilmsBySearch } from './modules/utils/Filter';
import { sortFilmsByAlphabetical, sortFilmsByFavorite } from './modules/utils/Sort';

//Component Imports
import Header from './components/Header/Header'
import FilmDetails from './components/Film/FilmDetails/FilmDetails'
import FilmCarousel from './components/Film/FilmCarousel/FilmCarousel'
import Button from './components/Button/Button';
import Searchbar from './components/Input/Searchbar/Searchbar'


function App() {
  const [films, setFilms] = useState([])
  const [allFilms, setAllFilms] = useState([])
  const [favorites, setFavorites] = 
    useState(localStorage.getItem("id") ? localStorage.getItem("id").split(",") : [])
  const [currentFilm, setCurrentFilm] = useState()
  const {theme} = useContext(ThemeContext)

  // Ghibli movie list API call to store array to state
  useEffect(() => {
    getFilms()
      .then(data=>{
        const updatedData = updateFavorites(data, favorites)
        setFilms(updatedData)
        setAllFilms(updatedData)  
    })
  },[favorites])

  useEffect(()=>{
    setFilms(prevFilms => (
      updateFavorites(prevFilms, favorites)
    ))
  },[favorites])

  useEffect(()=>{
    currentFilm && setCurrentFilm(prevFilm => (
      films.find(film => (
        film.id === prevFilm.id
      ))
    ))
  },[films, currentFilm])
  
  return (
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
            <Button 
                text="Alphabetical" 
                icon="letter-english-a" 
                handleClick={() => {
                  setFilms(prevFilms => {
                    return sortFilmsByAlphabetical([...prevFilms])
                  })
              }}/>
            <Button 
                text="Favorite" 
                icon="heart" 
                handleClick={() => {
                  setFilms(prevFilms => {
                    return sortFilmsByFavorite([...prevFilms])
                  })
              }}/>
          </div>
          <FilmCarousel 
            handleClick={setCurrentFilm} 
            films={films}/>
        </section>
      </div>
    );
}

export default App;
