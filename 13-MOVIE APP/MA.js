// API Configuration
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// DOM Elements
const movieBox = document.querySelector("#movie-box");
const searchInput = document.querySelector("#search");

// Get movies from API
async function getMovies(api) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        showMovies(data.results);
    } catch (error) {
        console.error("Error fetching movies:", error);
        movieBox.innerHTML = `<div class="error">Error loading movies. Please try again later.</div>`;
    }
}

// Display movies
function showMovies(data) {
    movieBox.innerHTML = ""; // Clear previous results

    if (data.length === 0) {
        movieBox.innerHTML = `<div class="no-results">No movies found. Try a different search.</div>`;
        return;
    }

    data.forEach(movie => {
        const box = document.createElement("div");
        box.classList.add("box");

        // Format rating with stars
        const rating = Math.round(movie.vote_average / 2);
        const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

        box.innerHTML = `
            <img src="${IMGPATH + movie.poster_path}" loading="lazy" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'"/>
            <div class="overlay">
                <h2>${movie.title}</h2>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>${movie.vote_average.toFixed(1)}</span>
                    <span class="stars">${stars}</span>
                    </div>
                    <p class="release-date">Released: ${new Date(movie.release_date).toLocaleDateString()}</p>
                    <p class="overview">${movie.overview.substring(0, 150)}...</p>
            </div>
        `;

        movieBox.appendChild(box);
    });
}

searchInput.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    if (e.target.value != "") {
        getMovies(SEARCHAPI + e.target.value)
    } 
    else {
        getMovies(APIURL);
    }
})

// Initial load
getMovies(APIURL);