import { Box, Grid } from "@material-ui/core";
import { PropsWithChildren, ReactElement } from "react";

export default function FooterLayout(props: PropsWithChildren<{ footer?: ReactElement }>): JSX.Element {
  return (
    <Box p={0} m={0}>
      <Box p={2}>
        {props.children}
      </Box>
      <Box position="fixed" bottom={0} width={1} p={1}>
        {props.footer}
      </Box>
    </Box >
  );
}