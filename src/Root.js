import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import { history } from './redux/configStore';

import configStore from './redux/configStore';

import {
	Switch
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import App from './containers/App';

const store = configStore();

class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<ConnectedRouter history={history}>
						<Switch>
							<App />
						</Switch>
					</ConnectedRouter>
				</div>
			</Provider>
		);
	}
}

export default Root;