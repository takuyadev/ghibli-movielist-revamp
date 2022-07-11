import './App.css';
import FilmCard from './components/FilmCard'
import React, {useState, useEffect} from 'react'

function App() {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState("Loading")

  // Ghibli movie list API call to store array to state
  useEffect(()=>{
    async function getFilms(){
      const response = await fetch("https://ghibliapi.herokuapp.com/films");
      const data = await response.json()
      setFilms(data);
    }
    getFilms().catch(e=>console.log(e))
  },[])

  // All user inputs in order to modify array
  function filterFilms(search){
    setFilms(prevFilms=>(
      prevFilms.filter(film=>{
        return film.title.includes(search)
      })
     ))
  }

  const sortFilms = () => {
    const copy = [...films];
    setFilms(
      copy.sort((a,b)=>(
        a.title.localeCompare(b.title)
      ))
    );
  };

  //Render map items
  const filmsHtml = 
    films.length !== 0 ? 
        films.map(film=>(
          <FilmCard
            key={film.id}
            title={film.title}
            img={film.image}
          />
        )) :
        loading

  return (
    <div className="app">
      <header className="header">

      </header>
      <main>
        <button onClick={()=>filterFilms("Fire")}>Filter</button>
        <button onClick={()=>sortFilms()}>Sort</button>
        {filmsHtml}
      </main>
    </div>
  );
}

export default App;
