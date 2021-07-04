import { Box, Button, Paper } from '@material-ui/core';
import { Location } from 'history';
import ResponsiveRow from 'layout/ResponsiveRow';
import { Link, useLocation } from 'react-router-dom';
import { removeUnderline } from 'styles/links';

export default function ButtonNav(): JSX.Element {
  const location = useLocation();
  return (
    <Paper>
      <ResponsiveRow>
        <Box marginX={1}>
          <Link to="/" style={removeUnderline}>
            <Button
              variant="contained"
              color="primary">
              Home
            </Button>
          </Link>
        </Box>
        {getContactMeButton(location)}
      </ResponsiveRow>
    </Paper >
  );

  function getContactMeButton(location: Location<unknown>): JSX.Element {
    if (location.pathname.includes('contact-me') === false) {
      return (
        <Box marginX={1}>
          <Link to="/contact-me" style={removeUnderline}>
            <Button
              variant="contained"
              color="primary">
              Contact Me
            </Button>
          </Link>
        </Box>
      );
    }
    return <></>;
  }
}
