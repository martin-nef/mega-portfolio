import GitHubButton from "home/GitBubButton";
import SimpleCard from "common/SimpleCard";
import VerticalLayout from "layout/VerticalLayout";

export default function ContactMe(): JSX.Element {
	return (
		<VerticalLayout>
			<SimpleCard isRow={true} >
				<b>Name</b>
				Martin Nefjodov
			</SimpleCard>
			<SimpleCard isRow={true} >
				<b>Email</b>
				<a href="mailto:martin.nefjodov@gmail.com">martin.nefjodov@gmail.com</a>
			</SimpleCard>
			<SimpleCard isRow={true} >
				<b>Phone</b>
				Please ask via email.
			</SimpleCard>
			<SimpleCard isRow={true} >
				<b>Availability</b>
				Mon-Fri 9-10 am, 12-2 pm, 5-6 pm. Pre-arranged phone calls only, please.
			</SimpleCard>
		</VerticalLayout>
	)
}