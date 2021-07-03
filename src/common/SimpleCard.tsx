import { Card, Grid } from "@material-ui/core";
import { PropsWithChildren, ReactElement } from "react";

export default function SimpleCard(props: PropsWithChildren<{}>): ReactElement {
	return (
		// TODO sort out margin/width/padding (use Box)
		<Card className="card">
			<Grid container
				direction="column"
				justify="space-evenly">
				{props.children}
			</Grid>
		</Card>);
}