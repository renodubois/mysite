import React from "react";
import PageLayout from "../components/pageLayout";

// TODO: Fix the jank I'm doing here to get my text on the right here. I think I need to look into how
// flexbox works better so I can understand that.
const Contact = ({ siteTitle }) => {
	const paraClasses = [];
	return (
		<PageLayout marginWidth="1/2">
			<h1 className="font-header">Contact Me</h1>
			<p className={paraClasses.join(" ")}>
				Any official inquries should be sent via email to <a href="mailto:renoinmo@gmail.com">renoinmo@gmail.com</a>.
			</p>
			<p className={paraClasses.join(" ")}>
				You can also reach out via <a href="https://twitter.com/RenoInMO">Twitter Direct message</a>, or by sending a direct message to RenoInMO#7707 on Discord. I'll get back to you as soon as I can!
			</p>
		</PageLayout>
	);
}

export default Contact;
