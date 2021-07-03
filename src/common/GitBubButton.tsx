import Button from '@material-ui/core/Button';
import githubIcon from 'img/GitHub-Mark-Light-32px.png';

export default function GitHubButton() {
	return (
		<Button
			variant="contained"
			color="primary"
			href="https://github.com/martin-nef/mega-portfolio">
			<span>GitHub</span>&nbsp;&nbsp;
			<img src={githubIcon} alt="logo" />
		</Button>
	);
}
