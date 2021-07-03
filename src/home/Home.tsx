import FooterLayout from "common/FooterLayout";
import SimpleCard from "common/SimpleCard";
import BigNav from "nav/BigNav";

export default function Home(): JSX.Element {
	return (
		<FooterLayout footer={<BigNav />}>
			<SimpleCard>
				<p>
					My name's Martin and I'm a professional web developer.
				</p>
				<p>
					Check out my portfolio 😊
				</p>
			</SimpleCard>
		</FooterLayout>
	);
}
