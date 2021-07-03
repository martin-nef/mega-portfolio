import { Grid } from "@material-ui/core";
import { PropsWithChildren } from "react";

export default function ResponsiveRow(props: PropsWithChildren<{}>): JSX.Element {
	return (
		<Grid
			// TODO sort out margin/width/padding
			container
			direction="row"
			justify="space-evenly"
			alignItems="center" >
			{props.children}
		</Grid>
	);
}