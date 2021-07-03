import { Box, Paper } from '@material-ui/core';
import ResponsiveRow from 'layout/ResponsiveRow';
import SimpleCard from 'common/SimpleCard';
import { Link } from 'react-router-dom';

export default function BigNav() {
  return (
    <Paper>
      <ResponsiveRow>
        <Box marginX={1}>
          <SimpleCard>
            <Link to="/">Home</Link>
          </SimpleCard>
        </Box>
        <Box marginX={1}>
          <SimpleCard>
            <Link to="/about">About</Link>
          </SimpleCard>
        </Box>
      </ResponsiveRow>
    </Paper>
  );
}