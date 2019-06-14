import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import cross from "../images/cross.svg";
import menu from "../images/menu.svg";
// Image imports for the social buttons 
import twitchLogo from "../images/twitch_logo.svg"
import githubLogo from "../images/github_logo.svg"
import twitterLogo from "../images/twitter_logo.svg"

const Header = ({ siteTitle }) => {
	const [menuExpanded, setMenuExpanded] = useState(false);
	let topIcon = (
		<div className="text-right cursor-pointer select-none h-6 w-6 pt-2" onClick={() => setMenuExpanded(true)}>
			<img src={menu} alt="Open menu" />	
		</div>
	);
	const topSectionClasses = [
		"flex",
		"flex-row",
		"justify-between",
		"mb-2",
	];
	if (menuExpanded) {
		topIcon = (
			<div className="text-right cursor-pointer select-none h-5 w-5 pt-2" onClick={() => setMenuExpanded(false)}>
				<img src={cross} alt="White cross, closes mobile menu" />	
			</div>
		);
		// make the margin bigger when expanded
		topSectionClasses.pop();
		topSectionClasses.push("mb-4");
	}
	
	const topSection = (
		<div className={topSectionClasses.join(" ")}>
			<Link to="/" className="text-header-title no-underline text-3xl font-header font-black pt-1">
					RenoInMO
			</Link>
			{topIcon}
		</div>
	);
	if (!menuExpanded) {
		return (
			<header className="bg-header-bg p-4">
				{topSection}
			</header>
		)
	}
	return (
		<header className="bg-blue-600 p-4">
			{topSection}
			<div className="ml-3 text-xl text-white">
				<div className="m-2 ml-0">
					<Link to="/about">
							<span className="nav-item-text">about</span>
					</Link>
				</div>
				<div className="m-2 ml-0">
					<Link to="/projects">
							<span className="nav-item-text">projects</span>
					</Link>
				</div>
				<div className="m-2 ml-0">
					<Link to="/schedule">
							<span className="nav-item-text">schedule</span>
					</Link>
				</div>
				<div className="m-2 ml-0">
					<Link to="/contact">
							<span className="nav-item-text">contact</span>
					</Link>
				</div>
				<a className="social-media-icon twitch" href="https://twitch.tv/RenoInMO">
					<img className="w-6 m-2 ml-0" src={twitchLogo} alt="Twitch.tv Logo" />
				</a>
				<a className="social-media-icon twitch" href="https://github.com/renodubois">
					<img className="w-6 m-2" src={githubLogo} alt="GitHub Logo" />
				</a>
				<a className="social-media-icon twitter" href="https://twitter.com/RenoInMO">
					<img className="w-6 m-2" src={twitterLogo} alt="Twitter Logo" />
				</a>
			</div>
		</header>
	)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
