import FooterLayout from "layout/FooterLayout";
import BigNav from "nav/BigNav";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";


export default function App(): JSX.Element {
	return (
		<BrowserRouter>
			<FooterLayout footer={<BigNav />}>
				<AppRoutes></AppRoutes>
			</FooterLayout>
		</BrowserRouter>
	);
}
