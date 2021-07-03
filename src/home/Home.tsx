import { Avatar } from "@material-ui/core";
import SimpleCard from "common/SimpleCard";
import avatar from 'img/Martin.png';
import VerticalLayout from "layout/VerticalLayout";

export default function Home(): JSX.Element {
	return (
		<VerticalLayout>
			<SimpleCard isRow={true}>
				<Avatar alt="Martin" src={avatar} />
				<p>
					My name's Martin and I'm a professional web developer.
				</p>
			</SimpleCard>
			<SimpleCard>
				<p>
					Check out my portfolio 😊
				</p>
			</SimpleCard>
		</VerticalLayout>
	);
}
