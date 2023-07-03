'use strict';

var modal;

document.addEventListener("DOMContentLoaded", function(){
    let movies = ['aladdin','jurassic park','spider man','toy story'];
    getMovies(movies);
    modal = new bootstrap.Modal(document.getElementById('loadingMovies'))
    modal.show();
});
const getMovies = async (movies) => {
    var data;
    var posterMovies = '';
    movies.forEach(async name =>{
        data = await getparam(name);
        posterMovies += `<div class="card m-3" style="width: 18rem">
                <img src="`+data.Poster+`" class="card-img-top" alt="`+data.Title+`">
                <div class="card-body">
                <h5 class="card-title">`+data.Title+`</h5>
                <p class="card-text">`+data.Plot.slice(0,80)+`...</p>
                <a href="#" class="btn btn-primary">Ver Premios</a>
                </div>
            </div>`;
    });
    setTimeout(()=> {
        modal.hide();
        document.getElementById('containerMovies').innerHTML = posterMovies;
    },1000)
}

const getparam = async (name) => {
    let url = "https://www.omdbapi.com/?apikey=26182505&t="+name;
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
}