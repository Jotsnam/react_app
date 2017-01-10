import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import About from './components/About';
import Faq from './components/Faq';
import childOfChild from './components/chidOfChild';
import Home from './components/Home';
import Boxes from './components/boxes/Boxes';
import Random from './components/random/Random';
import CurrencyConverter from './components/currencyConverter/CurrencyConverter';
import Movies from './components/movies/Movies';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/> 
      <Route path="Movies" component={Movies}/>
        <Route path="CurrencyConverter" component={CurrencyConverter}/>
        <Route path="Random" component={Random}/>
        <Route path="Boxes" component={Boxes}/>    
        <Route path="about" component={About}> 
          <Route path="childOfChild" component={childOfChild} />
        </Route>    
        <Route path="faq" component={Faq} /> 
    </Route>
  </Router>,
  document.getElementById('root')
);

