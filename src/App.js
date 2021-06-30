import './App.scss';

function App() {
  return (
    <div>
      <header className="padding-top">
        <p>
          My name's Martin and I'm an experienced web developer.
        </p>
        <p>
          Check out my portfolio 😊
        </p>
      </header>
      <div className="body">
        <article>
          <p>
            This site was made in ReactJS and hosted using Cloudflare.
            Please, have a look at the source <a href="https://github.com/martin-nef/mega-portfolio">on GitHub</a>.
          </p>
        </article>
      </div>
    </div>
  );
}

export default App;
