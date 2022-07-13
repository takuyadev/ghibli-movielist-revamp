import './App.css';
import FilmCard from './components/FilmCard'
import FilmDetails from './components/FilmDetails'
import FilmCarousel from './components/FilmCarousel'
import Searchbar from './components/Searchbar'
import React, {useState, useEffect} from 'react'


function App() {
  const [films, setFilms] = useState([])
  const [allFilms, setAllFilms] = useState([])
  const [currentFilm, setCurrentFilm] = useState([])

  // Ghibli movie list API call to store array to state
  useEffect(()=>{
    async function getFilms(){
      const response = await fetch("https://ghibliapi.herokuapp.com/films");
      const data = await response.json()
      setFilms(data);
      setAllFilms(data)
    }
    getFilms().catch(e=>console.log(e))
  },[])

  // All user inputs in order to modify array
  function searchFilms(search){
    setFilms(allFilms)
    setFilms(prevFilms=>(
      prevFilms.filter(film=>{
        return film.title.toLowerCase().includes(search.toLowerCase())
      })
     ))
  }

  const sortFilms = () => {
    setFilms(prevFilms=>{
      const copy = [...prevFilms];
      return copy.sort((a,b)=>(
        a.title.localeCompare(b.title)
      ))
    });
  };

  return (
    <div className="app">
      <header className="header">
        <FilmDetails film={currentFilm}/>
      </header>
      <main>
        <div className="searchbar-container">
          <Searchbar handleOnChange={searchFilms}/>
          <div>
            <button className="btn btn--outline" onClick={()=>sortFilms()}>
              Sort
              <i class="uil uil-angle-up"></i>
            </button>
          </div>
        </div>
        <FilmCarousel handleClick={setCurrentFilm} films={films}/>
      </main>
    </div>
  );
}

export default App;
