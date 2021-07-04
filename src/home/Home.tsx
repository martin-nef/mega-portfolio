import { Box, Button, Card } from "@material-ui/core";
import { Link } from 'react-router-dom';
import VerticalLayout from "layout/VerticalLayout";
import IntroductionCard from "home/IntroductionCard";
import { removeUnderline } from "styles/links";
import SimpleCard from "common/SimpleCard";
import GitHubButton from "home/GitBubButton";
import ResponsiveRow from "layout/ResponsiveRow";
import GitHubCard from "./GitHubCard";

export default function Home(): JSX.Element {
	return (
		<Box m={2}>
			<ResponsiveRow>
				<IntroductionCard></IntroductionCard>
				<GitHubCard />
			</ResponsiveRow>
		</Box>
	);
}
