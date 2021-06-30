import Button from '@material-ui/core/Button';
import githubIcon from './img/GitHub-Mark-Light-32px.png';

function App() {
  return (
    <div>
      <header>
        <p>
          My name's Martin and I'm a professional web developer.
        </p>
        <p>
          Check out my portfolio 😊
        </p>
      </header>
      <div className="body">
        <p>
          <span>This site was made in ReactJS and hosted using Cloudflare.
            Please, have a look at the source on&nbsp;
          </span>
          <Button variant="contained" color="primary" href="https://github.com/martin-nef/mega-portfolio">
            GitHub&nbsp;&nbsp;<img src={githubIcon} alt="logo" />
          </Button>
        </p>
      </div>
    </div>
  );
}

export default App;
