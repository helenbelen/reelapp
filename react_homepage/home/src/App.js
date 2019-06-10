import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };


 componentDidMount() {
   this.getDataFromDb();
   if (!this.state.intervalIsSet) {
     let interval = setInterval(this.getDataFromDb, 1000);
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
     .then((data) => data.json())
     .then((res) => this.setState({ data: res.data }));
 };

 // here is our UI
 // it is easy to understand their functions when you
 // see them render into our screen
 render() {
   const { data } = this.state;
   return (
     <div>
       <ul>
         {data.length <= 0
           ? 'NO DB ENTRIES YET'
           : data.map((dat) => (
               <li style={{ padding: '10px' }} key={dat.title}>
                 <span style={{ color: 'gray' }}> duration: </span> {dat.duration} <br />
                 <span style={{ color: 'gray' }}> rating: </span>
                 {dat.rating}
               </li>
             ))}
       </ul>
     </div>
   );
 }
}

export default App;
