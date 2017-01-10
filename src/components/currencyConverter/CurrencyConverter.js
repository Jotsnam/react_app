import React from 'react';
import jsonp from 'jsonp';

export default class CurrencyConverter extends React.Component{
  constructor(props){
    super(props);
    this.state = {currency: [], convertedAmount: 0};
    this.convert = this.convert.bind(this);
  }

componentWillMount(){
    jsonp(`http://api.fixer.io/latest`, (err, data) => {
        let i =0;
         const currency = [];
        for (let prop in data.rates){
            currency[i++] = prop;
        }
        this.setState({currency});   
    }) 
  }

  convert(){
    const amount = +this.amount.value;
    const currencyFrom = this.currencyFrom[this.currencyFrom.selectedIndex].value;
    const currencyTo = this.currencyTo[this.currencyTo.selectedIndex].value;
    jsonp(`http://api.fixer.io/latest?base=${currencyFrom}`, (err, data) => {
        const convertedAmount = amount * data.rates[currencyTo];
        this.setState({convertedAmount});   
    }) 
  }

  render(){
    return (
        <div>
            <h1>Currency Converter</h1>
                <div>From:  
                    <select ref={from => this.currencyFrom = from}> 
                    {  
                        this.state.currency.map((ele, i) => <option key={i} >{ele}</option>)          
                    }   
                    </select> 
                    To:  
                    <select ref={to => this.currencyTo = to}> 
                    {  
                        this.state.currency.map((ele, i) => <option key={i} >{ele}</option>)          
                    }   
                    </select>         
                </div>
                <div>
                    <input ref={node => this.amount = node} type="number"></input>
                    <span>{this.state.convertedAmount} </span>
                </div>
            <div>
                <button onClick={this.convert} className="btn btn-info btn-sm">Convert</button>
            </div>
        </div>
    );
  }
}