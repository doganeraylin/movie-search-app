import React, {useState} from "react"
import Card from "./Card"
export default function SearchMovie() {

    const [query, setQuery] = useState("")

    const [movies, setMovies] = useState([])


    const searchMovie = async(e) => {
        e.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=d99db10f0860b96729a2266496253066&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data.results)
            setMovies(data.results)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <>
        <form className="form" onSubmit={searchMovie} >
            <label className="label" htmlFor="query">Movie Name</label>
            <input 
                type="text" 
                name="query" 
                placeholder="i.e. Jurassic Park" 
                className="input" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}>
            </input>
            <button type="submit" className="button">Search</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <Card key={movie.id}
                      poster={`${movie.poster_path}`}
                      altText={movie.title}
                      title={movie.title}
                      releaseDate={movie.release_data}
                      rating={movie.vote_average}
                      overview={movie.overview}       
                />
            ))}
        </div>    
        </>
    )
}