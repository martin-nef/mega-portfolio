import GitHubButton from "about/GitBubButton";
import SimpleCard from "common/SimpleCard";
import VerticalLayout from "layout/VerticalLayout";

export default function About(): JSX.Element {
	return (
		<VerticalLayout>
			<SimpleCard isRow={true}>
				<span>
					This site was made in ReactJS and hosted using Cloudflare. Please, have a look
					at the source on
				</span>
				<GitHubButton />
			</SimpleCard>
		</VerticalLayout>
	)
}