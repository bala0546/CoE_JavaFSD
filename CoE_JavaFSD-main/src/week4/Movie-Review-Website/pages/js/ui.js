// Load trending movies on the homepage
async function loadTrendingMovies() {
    const moviesContainer = document.getElementById("movies-container");
    if (!moviesContainer) return;

    const movies = await fetchMoviesFromJSON();
    moviesContainer.innerHTML = movies.map(movie => `
        <div class="movie-card">
            <img src="${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <button onclick="goToMovieDetails(${movie.id})">View Details</button>
        </div>
    `).join("");
}

// Redirect to movie details page
function goToMovieDetails(movieId) {
    window.location.href = `movie-details.html?id=${movieId}`;
}

// Load movie details page
async function loadMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get("id");

    if (!movieId) {
        document.getElementById("movie-details").innerHTML = "<p>Movie not found.</p>";
        return;
    }

    const movie = await fetchMovieById(movieId);
    if (!movie) {
        document.getElementById("movie-details").innerHTML = "<p>Movie not found.</p>";
        return;
    }

    document.getElementById("movie-details").innerHTML = `
        <div class="movie-details-card">
            <img src="${movie.poster_path}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p><strong>Release Date:</strong> ${movie.release_date}</p>
            <p><strong>Rating:</strong> ${movie.vote_average}</p>
            <p>${movie.overview}</p>
            <a href="index.html">Back to Home</a>
        </div>
    `;
}

// Load search results
async function loadSearchResults(query) {
    const searchResultsContainer = document.getElementById("search-results");
    if (!searchResultsContainer) return;

    const movies = await fetchMoviesFromJSON();
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );

    searchResultsContainer.innerHTML = filteredMovies.length > 0
        ? filteredMovies.map(movie => `
            <div class="movie-card">
                <img src="${movie.poster_path}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <button onclick="goToMovieDetails(${movie.id})">View Details</button>
            </div>
        `).join("")
        : "<p>No movies found.</p>";
}
