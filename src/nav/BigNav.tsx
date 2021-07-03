import ResponsiveRow from 'common/ResponsiveRow';
import SimpleCard from 'common/SimpleCard';
import { Link } from 'react-router-dom';

export default function BigNav() {
  return (
    // TODO sort out margin/width/padding
    <ResponsiveRow>
      <SimpleCard>
        <Link to="/">Home</Link>
      </SimpleCard>
      <SimpleCard>
        <Link to="/about">About</Link>
      </SimpleCard>
    </ResponsiveRow>);
}