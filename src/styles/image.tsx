import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const imgStyle = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      borderRadius: theme.shape.borderRadius,
      height: theme.spacing(20),
      "object-fit": "contain",
      "object-position": "100% 0",
      padding: 0,
      margin: 0,
    },
  }),
);
