
import { Grid } from "@material-ui/core";
import { PropsWithChildren, ReactNode } from "react";

export type GridItemsProps = PropsWithChildren<{ m?: any, p?: any }>;

export default function GridItems(props: GridItemsProps): JSX.Element {
  return (<>{constructChildren(props)}</>);
}

function constructChildren(props: GridItemsProps): JSX.Element {
  const children = props.children as ReactNode[];
  if (children != null && typeof children.map === 'function') {
    return <>{children.map(child => constructChild(child))}</>;
  }
  else {
    return constructChild(props.children);
  }
}

function constructChild(child: ReactNode): JSX.Element {
  return (
    <Grid item>
      {child}
    </Grid>
  );
}
