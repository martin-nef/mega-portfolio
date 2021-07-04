import avatar from 'img/Martin.png';
import GridItems from "layout/GridItems";
import { Box, Card, Grid } from "@material-ui/core";
import VerticalLayout from 'layout/VerticalLayout';
import { imgStyle } from 'styles/image';
import GitHubButton from 'home/GitBubButton';

export default function GitHubCard() {
  return (
    <Card>
      <Box p={1}>
        <Grid container direction="row" justify="center" alignItems="flex-start" alignContent="center" spacing={2}>
          <GridItems>
            <VerticalLayout s={2}>
              <span style={wordWrap}>This site was made in ReactJS and hosted using Cloudflare. Please, have a look at the source on GitHub</span>
            </VerticalLayout>
            <GitHubButton />
          </GridItems>
        </Grid>
      </Box>
    </Card>
  );
}

const wordWrap: any = {
  ['overflow-wrap' as any]: 'break-word',
};
