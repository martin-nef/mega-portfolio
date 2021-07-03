import { Grid } from "@material-ui/core";
import { ReactFragment } from "react";
import GridItems from "./GridItems";

export default function ResponsiveRow(props: { children: ReactFragment, }): JSX.Element {
	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			spacing={2}>
			<GridItems>{props.children}</GridItems>
		</Grid>
	);
}
