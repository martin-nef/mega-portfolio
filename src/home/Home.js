import GitHubButton from '../common/GitBubButton';

export default function Home() {
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
                    <GitHubButton />
                </p>
            </div>
        </div>
    );
}
