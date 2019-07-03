import React from "react";

const projectData = [
	{ title: "Election Data Parser", description: "Takes PDFs of election results and returns them as data blobs for use in various applications.", repoURL: "https://github.com/miec-stl/election-parser" },
];

const renderProject = (value, index) => {
	let dateSection = "";
	if (value.dateRange) {
		dateSection = " (" + value.dateRange + ")";
	}
	return (
		<li key={index}>
			{value.title}
			{dateSection}
			<ul>
				<li>{value.description}</li>
				<li><a className="underline text-header-bg" href={value.repoURL}>Git Repo</a></li>
			</ul>
		</li>
	);
}

const Projects = ({ siteTitle }) => {
	return (
		<>
		<h1 className="text-4xl md:text-6xl font-header text-header-bg">
			Projects I've Contributed to
		</h1>
		<ul className="md:ml-4 md:text-left">
			{projectData.map(renderProject)}
		</ul>
		</>
	);
}

export default Projects;
