
import { Box, Grid } from "@material-ui/core";
import { PropsWithChildren, ReactNode } from "react";

export type GridItemsProps = PropsWithChildren<{ m?: any, p?: any }>;

export default function GridItems(props: GridItemsProps): JSX.Element {
  return (<>{constructChildren(props)}</>);
}

function constructChildren(props: GridItemsProps): JSX.Element {
  const children = props.children as ReactNode[];
  if (children != null && typeof children.map === 'function') {
    return <>{children.map(child => constructChild(child, props))}</>;
  }
  else {
    return constructChild(props.children, props);
  }
}

function constructChild(child: ReactNode, props: GridItemsProps): JSX.Element {
  return (
    <Grid item>
      {getBox(child, props)}
    </Grid>
  );
}

function getBox(child: ReactNode, props: GridItemsProps): JSX.Element {
  if (props.m != null || props.p != null) {
    return <Box m={props.m} p={props.p}>{child}</Box>;
  }
  return <>{child}</>;
}
