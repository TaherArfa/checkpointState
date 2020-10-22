import React, { Component } from "react";
import "./App.css";
import image from "./profil.png";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter:0,
      fullName: "Taher Arfaoui",
      bio: " Software Engineer, 27 years old ",
      profession: " Freelance Developper ",
      img: image,
      hidden: false,
    };
  }
  ShowHiddenElement() {
    this.setState({
      counter:0,
      hidden: !this.state.hidden,
    });
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
      // }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={image} className="card-img-top" alt="Taher_Arfaoui" />
        <p className="conterStyle">{this.state.counter} seconds since componentDidMount</p>        
          {this.state.hidden ? (
            <div className="HiddenDiv">
              <h2> {this.state.fullName}</h2>
              <h3>Bio : {this.state.bio} </h3>
              <h3>Profession : {this.state.profession} </h3>
            </div>
          ) : null}
          <div className="date-range">
            <input
              type="submit"
              value="Search"
              onClick={() => this.ShowHiddenElement()}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
