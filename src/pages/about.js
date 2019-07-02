import React from "react";
import PageLayout from "../components/pageLayout";

const About = ({ siteTitle }) => {
	return (
		<PageLayout marginWidth="1/2">
			<h1 className="text-5xl md:text-6xl font-header text-header-bg">About Me</h1>
			<h2 className="font-header">
				Hey, I'm Reno! I'm a full-time software developer who streams tech-related
				content on Twitch. I love helping others learn in a positive, welcoming environment.	
			</h2>
			<h3 className="font-header">
				I've got a whole number of interests, so streams might contain any of the following:
			</h3>
			<ul>
				<li>Development (usually for the web, React/JS/HTML/CSS)</li>
				<li>Mechanical Keyboards (building & customization)</li>
				<li>DevOps/Server maintenance (Linux, Docker, lots of learning since I'm inexperienced here)</li>
				<li>Smart Home/Home Automation (HomeAssistant, self-hosted automation)</li>
				<li>Hardware Projects (Arduinos, RPi projects, also very inexperienced here)</li>
			</ul>
			<h5 className="font-header">
				To find out what I'm up to currently,
				{" "}<a className="underline text-header-bg" href="https://twitter.com/RenoInMO">follow me on Twitter</a>,{" "}
				where I post about new content and interesting tech stuff.
			</h5>

		</PageLayout>
	);
}

export default About;
