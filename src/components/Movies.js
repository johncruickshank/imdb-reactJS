import React from "react";
import SingleFilm from "./SingleFilm";

class Movies extends React.Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.handleAllShowtimes = this.handleAllShowtimes.bind(this);
  // }

  render() {
    const movieNodes = this.props.data.map(movie => {
      return (
        <SingleFilm title={movie.title} key={movie.id}>{movie.showtimes}</SingleFilm>
      )
    })

    // handleAllShowtimes() {
    //   for (film of movieNodes) {
    //     handleFilmShowtimes();
    //   }
    // }

    return(
      <div className="movies">
        {movieNodes}
        {console.log(movieNodes)}
        <button
          id="all-showtimes-button"
          onClick={this.handleAllShowtimes}>Get Showtimes >></button>
      </div>
    )
  }
}

export default Movies;
