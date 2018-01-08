import React from "react";
import Movies from "./Movies";

class FilmList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, title: "Sausage Party", showtimes: [1100, " ", 1300, " ", 1500, " ", 1700]},
        {id: 2, title: "Cafe Society", showtimes: [1200, " ", 1430, " ", 1645, " ", 2100]},
        {id: 3, title: "Morgan", showtimes: [2200, " ", 2330]},
        {id: 4, title: "The 9th Life of Loius Drax", showtimes: [1130, 1330, 1530]},
        {id: 5, title: "Naam Hai Akira", showtimes: [1330, " ", 1530]},
        {id: 6, title: "Equity", showtimes: [1630, " ", 1830, " ", 2030]},
        {id: 7, title: "Things to Come", showtimes: [1730, " ", 2130]}
      ]
    }
  }

  render() {
    return (
      <div className="film-list">
        <Movies data={this.state.data}/>
      </div>
    )
  }
}

export default FilmList;
