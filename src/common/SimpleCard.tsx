import { Box, Card, Grid } from "@material-ui/core";
import GridItems from "layout/GridItems";
import { PropsWithChildren, ReactElement } from "react";


export default function SimpleCard(props: PropsWithChildren<{ isRow?: boolean }>): ReactElement {
	return (
		<Card className="SimpleCard">
			<Box p={2}>
				<Grid container
					direction={props.isRow ? "row" : "column"}
					justify="flex-start"
					alignItems="flex-start"
					spacing={2}>
					<GridItems>
						{props.children}
					</GridItems>
				</Grid>
			</Box>
		</Card>
	);
}
