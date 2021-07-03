import { Grid } from "@material-ui/core";
import GridItems from "layout/GridItems";
import { PropsWithChildren } from "react";

export default function VerticalLayout(props: PropsWithChildren<{}>): JSX.Element {
  return <Grid container
    direction="column"
    justify="space-evenly"
    alignItems="center"
    spacing={2}>
    <GridItems>
      {props.children}
    </GridItems>
  </Grid>;
}
