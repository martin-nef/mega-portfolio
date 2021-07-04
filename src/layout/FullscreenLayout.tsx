import { Box, Grid } from "@material-ui/core";
import { PropsWithChildren } from "react";

export default function FullscreenLayout(props: PropsWithChildren<{}>) {
  return (
    <Box p={0} m={0}>
      <Box p={2}>
        <Grid container>
          {props.children}
        </Grid>
      </Box>
    </Box>
  )
}