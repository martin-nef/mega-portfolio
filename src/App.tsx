import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";


export default function App(): JSX.Element {
	return (
		<BrowserRouter>
			<AppRoutes></AppRoutes>
		</BrowserRouter>
	);
}
