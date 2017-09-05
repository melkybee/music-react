import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './modules/App';
import Home from './modules/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<App/>
			<div>
			  <Route render={({location, history, match}) => {
			    return (
		        <Switch key={location.key} location={location}>
		          <Route exact path="/" component={Home}/>
		        </Switch>
			    );
			  }} />
			</div>
	  </div>
  </BrowserRouter>,
	document.getElementById('root')
);

registerServiceWorker();
