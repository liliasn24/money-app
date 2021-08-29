import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../pages/Footer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Show from '../pages/Post';
import routes from './routes';
const AppRouter = () => {
	return (
		<Router>
			<NavBar routes={routes} />
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						exact
						component={() => <Component page={key} />}
					></Route>
				))}
				<Route
					path={'/:id'}
					render={routerProps => <Show {...routerProps} />}
				></Route>
			</Switch>
			<footer>
				<Footer />
			</footer>
		</Router>
	);
};

export default AppRouter;
