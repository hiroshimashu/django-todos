import React, { Component } from 'react';
import './App.css';
import axios from "axios";


class App extends Component {
  state = {
    data: []
  }

  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:8000/api');
      this.setState({
        data: response
      })

    } catch(err) {
      console.log(err);
    }

  }

  render() {
    return (
      <div className="App">
        { this.state.data.map((element) => {
          return (<p>element</p>)
        }) }
      </div>
    );
  }
}

export default App;
