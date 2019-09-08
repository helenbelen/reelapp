import React, { Component } from 'react';
import MovieList from "./MovieList.js"

class App extends Component {
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null

  };

 componentDidMount() {
   this.getDataFromDb();
   if (!this.state.intervalIsSet) {
     let interval = setInterval(this.getDataFromDb, 4000);
     this.setState({ intervalIsSet: interval });
   }
 }

 componentWillUnmount() {
   if (this.state.intervalIsSet) {
     clearInterval(this.state.intervalIsSet);
     this.setState({ intervalIsSet: null });
   }
 }

 getDataFromDb = () => {
   fetch('http://localhost:3001/api/')
   .then(results => {
     return results.json();
   })
     .then((data) => {
       this.setState({data: data})

     })

 };

 render() {
   
    return ( <MovieList data = {this.state.data} />);

 }
}

export default App;
