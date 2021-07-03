import FooterLayout from "common/FooterLayout";
import GitHubButton from "common/GitBubButton";
import SimpleCard from "common/SimpleCard";
import BigNav from "nav/BigNav";

export default function About(): JSX.Element {
	return (
		<FooterLayout footer={<BigNav />}>
			<SimpleCard>
				<p>
					<span>
						This site was made in ReactJS and hosted using Cloudflare. Please, have a look
						at the source on
					</span>
					&nbsp;
					<GitHubButton />
				</p>
			</SimpleCard>
		</FooterLayout>
	)
}