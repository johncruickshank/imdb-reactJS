import React from "react";

class SingleFilm extends React.Component {

  constructor(){
    super();
    this.state = {
      status:false
    }
  }

  handleFilmShowtimes = () => {
    if(this.state.status === true)
    {
      this.setState({status: false})
    }
    else
    {
      this.setState({status: true})
    }
  }

  render() {
    return (
      <div className="single-film">
        <h4>{this.props.title} <button
          id="showtimes-button"
          onClick={this.handleFilmShowtimes}
          >Showtimes</button></h4>
          <h4 className="showtimes">{this.state.status ? this.props.children : null}</h4>
      </div>
    )
  }
}

export default SingleFilm;
