import avatar from 'img/Martin.png';
import GridItems from "layout/GridItems";
import { Box, Button, Card, Grid } from "@material-ui/core";
import VerticalLayout from 'layout/VerticalLayout';
import { imgStyle } from 'styles/image';
import { removeUnderline } from 'styles/links';
import { Link } from 'react-router-dom';

export default function IntroductionCard() {
  return (<Card>
    <Grid container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      alignContent="center"
      spacing={0}>
      <img alt="Martin" src={avatar} className={imgStyle().avatar} />
      <Box p={1}>
        <GridItems>
          <VerticalLayout s={2}>
            <span style={wordWrap}>
              My name's Martin and I'm a professional web developer. This site is my portfolio 😊
            </span>
            <Box pb={1}>
              <Link to="/contact-me" style={removeUnderline}>
                <Button
                  variant="contained"
                  color="primary">
                  Contact Me
                </Button>
              </Link>
            </Box>
          </VerticalLayout>
        </GridItems>
      </Box>
    </Grid>
  </Card>);
}

const wordWrap: any = {
  ['overflow-wrap' as any]: 'break-word',
};
