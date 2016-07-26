import React	from 'react';
import { IndexRoute, Route } from 'react-router';
import Main 	from '../containers/Main';
import SampleContainer 	from '../containers/SampleContainer';
import Users 	from '../components/Users';

var configureRoutes = () => {
	return (
		<Route path="/" component={Main}>
			<IndexRoute component = {SampleContainer} />
			<Route path = "/users" component ={Users}/>
		</Route>
	)
}

export default configureRoutes;
