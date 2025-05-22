import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Iron Man", release_date: "2017"},
        {id: 3, title: "The Walking Dead", release_date: "2015"},

    ]

    return <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
                ))}
        </div>
    </div>
}

export default Home