import ContactMe from "contact-me/ContactMe";
import Home from "home/Home";
import FooterLayout from "layout/FooterLayout";
import FullscreenLayout from "layout/FullscreenLayout";
import ButtonNav from "nav/ButtonNav";
import { Link, Route, Switch } from "react-router-dom";

export function AppRoutes() {
	return (
		<Switch>
			<Route exact path="/">
				<FullscreenLayout>
					<Home />
				</FullscreenLayout>
			</Route>
			<Route path="/contact-me">
				<FooterLayout footer={<ButtonNav />}>
					<ContactMe />
				</FooterLayout>
			</Route>
			<Route>
				Page not found. <Link to="/">Home Page</Link>
			</Route>
		</Switch>
	);
}
