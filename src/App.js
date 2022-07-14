import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header/Header'
import FilmDetails from './components/Film/FilmDetails/FilmDetails'
import FilmCarousel from './components/Film/FilmCarousel/FilmCarousel'
import SecondaryButton from './components/Button/SecondaryButton/SecondaryButton';
import Searchbar from './components/Input/Searchbar/Searchbar'


function App() {
  const [films, setFilms] = useState([])
  const [favorite, setFavorite] = useState(localStorage.getItem("id").split(","))
  const [allFilms, setAllFilms] = useState([])
  const [currentFilm, setCurrentFilm] = useState([])

  // Ghibli movie list API call to store array to state
  useEffect(()=>{
    async function getFilms(){
      const response = await fetch("https://ghibliapi.herokuapp.com/films");
      const data = await response.json()
      
      // Set favorite algorithm and set it as the original array
      const modifiedData = data.map(film=>{
        return {
          ...film,
          favorite: favorite.includes(film.id)
        }
      })
      setFilms(modifiedData);
      setAllFilms(modifiedData)
    }
    getFilms().catch(e=>console.log(e))
  },[favorite])
  
  // All user inputs in order to modify array
  function searchFilms(search){
    setFilms(allFilms)
    setFilms(prevFilms=>(
      prevFilms.filter(film=>{
        return film.title.toLowerCase().includes(search.toLowerCase())
      })
     ))
  }

  const sortFilms = (type) => {
    if (type === "alphabet"){
      setFilms(prevFilms=>{
        const copy = [...prevFilms];
        return copy.sort((a,b)=>(
          a.title.localeCompare(b.title)
        ))
      });
    } else if (type === "favorite"){
      setFilms(prevFilms=>{
        const copy = [...prevFilms];
        return copy.sort((a)=>(
          !a.favorite 
        ))
      });
    }
  };

  return (
    <div className="app">
      <Header/>
      <FilmDetails 
        image={currentFilm.image} 
        title={currentFilm.title} 
        film={currentFilm} 
        handleClick={setFavorite}
      />
      <section>
        <div className="searchbar-container">
          <Searchbar handleOnChange={searchFilms}/>
          <SecondaryButton text="Sort" icon="angle-up" handleClick={()=>sortFilms("favorite")}/>
        </div>
        <FilmCarousel handleClick={setCurrentFilm} films={films}/>
      </section>
    </div>
  );
}

export default App;
