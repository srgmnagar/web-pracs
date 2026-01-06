import React from "react";  
function MovieMap({movies}) {
return(
    <div>
      { movies.map((movie)=>(
        <div>
            <div>{movie.title}</div>
            <div>{movie.year}</div>
            <div>{movie.rating}</div>
            </div>
      ))}
    </div>
)
}
export default MovieMap;