import { Box, Grid } from "@material-ui/core";
import { PropsWithChildren, ReactElement } from "react";

export default function FooterLayout(props: PropsWithChildren<{ footer?: ReactElement }>): JSX.Element {
  return (
    // TODO sort out margin/width/padding
    <Grid container
      direction="column"
      justify="flex-end"
      alignItems="stretch" >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch" >
        {props.children}
      </Grid>
      <Box height="10%">
        {props.footer}
      </Box>
    </Grid>
  );
}