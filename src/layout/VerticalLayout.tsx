import { Grid } from "@material-ui/core";
import GridItems from "layout/GridItems";
import { PropsWithChildren } from "react";

export default function VerticalLayout(props: PropsWithChildren<{ m?: any, p?: any, s?: any }>): JSX.Element {
  return (
    <Grid container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={props.s == null ? 2 : props.s}>
      <GridItems m={props.m} p={props.p}>
        {props.children}
      </GridItems>
    </Grid>
  );
}
