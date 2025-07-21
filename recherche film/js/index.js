let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    //si le champ input est vide
    if (movieName.length<=0){
        result.innerHTML = `<h3 class="msg"> Merci d'entrer un nom de film...</h3>`;
    }
        else{
            fetch(url).then((response) => response.json()).then ((data) => {
                console.log(data);
                //si le film existe dans la bd
                if(data.Response == "True") {
                    result.innerHTML = `
                        <div class="info">
                            <div class="titre">
                              <h2>${data.Title}</h2>
                              <div class="rating">
                                 <img src="asset/star.icon.png" alt="star"/>
                                 <h4>${data.imdbRating}</h4>
                              </div>
                                <div class="details">
                                    <span>${data.Rated}</span>
                                    <span>${data.Year}</span>
                                    <span>${data.Runtime}</span>
                                </div>
                               <div class="genre">
                                  <div>${data.Genre.split(",").join("<div></div>")}</div>
                               </div>
                                <div class="content">
                                    <h3>plot:</h3>
                                    <p>${data.Plot}</p>
                                    <h3>cast:</h3>
                                    <p>${data.Actors}</p>
                                </div>
                                <div class="reserv"><a href=""><button class="btn-reserv">reservation</button></a>
                                </div>
                            </div>
                            <img src=${data.Poster} class="poster"/>
                        </div>
                   `;
                }
                //si le film n'existe pas dans la base de données
                else{
                    result.innerHTML = `<h3 class="msg">${data.Error}</h3>`
                }
            }).catch(() =>{
 result.innerHTML = `<h3 class="msg">il y'a une erreur</h3>`
            })
        
    }
}

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
