import { Box, Card, Grid } from "@material-ui/core";
import GridItems from "layout/GridItems";
import { PropsWithChildren, ReactElement } from "react";


export default function SimpleCard(props: PropsWithChildren<{ isRow?: boolean }>): ReactElement {
	return (
		<Card>
			<Box p={2}>
				<Grid container
					direction={props.isRow ? "row" : "column"}
					justify="space-evenly"
					alignItems="center"
					spacing={2}>
					<GridItems>
						{props.children}
					</GridItems>
				</Grid>
			</Box>
		</Card>
	);
}
