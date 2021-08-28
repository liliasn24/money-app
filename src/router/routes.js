import React from 'react';
import Español from '../pages/Español';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: Español,
		key: 'Español',
		path: '/'
	}
];

export default routes;
