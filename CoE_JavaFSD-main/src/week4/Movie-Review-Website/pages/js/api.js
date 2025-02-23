const JSON_FILE_PATH = "data/movies.json";

// Fetch all movies from JSON
async function fetchMoviesFromJSON() {
    try {
        const response = await fetch(JSON_FILE_PATH);
        const data = await response.json();
        return data.movies;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
}

// Fetch a single movie by ID
async function fetchMovieById(movieId) {
    const movies = await fetchMoviesFromJSON();
    return movies.find(movie => movie.id == movieId) || null;
}
