import React from 'react';
import axios from 'axios';

export default class Boxes extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: []};
    this.fetch = this.fetch.bind(this);
  }

  fetch(){
    const num = +this.number.value;
    axios.get(`https://qrng.anu.edu.au/API/jsonI.php?length=${num}&type=uint16`)
    .then( response => {
        const data = response.data.data;
        this.setState({data});
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  render(){
    return (
      <div>
        <h1>Random</h1>
        <input  ref={node => this.number = node} type="number"  />
        <button onClick={this.fetch} className="btn btn-info btn-sm">Fetch</button>
        <div />
        {
            this.state.data.map((ele, i) => <li key={i}>{ele}</li>)
        }
      </div>
    );
  }
}