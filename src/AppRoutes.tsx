import About from "about/About";
import Home from "home/Home";
import { Link, Route, Switch } from "react-router-dom";

export function AppRoutes() {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/home">
				<Home />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route>
				Page not found. <Link to="/">Home Page</Link>
			</Route>
		</Switch>
	);
}
