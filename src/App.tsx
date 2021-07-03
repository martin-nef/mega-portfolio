import About from "about/About";
import Home from "home/Home";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

export default function App(): JSX.Element {
	return (
		<BrowserRouter>
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
					Page not found. <Link to="/"></Link>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
