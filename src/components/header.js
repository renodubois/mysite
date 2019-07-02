// TODO: clean this file up and remove the large amounts of duplicated code that we have here
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import cross from "../images/cross.svg";
import menu from "../images/menu.svg";
// Image imports for the social buttons 
import twitchLogo from "../images/twitch_logo.svg"
import githubLogo from "../images/github_logo.svg"
import twitterLogo from "../images/twitter_logo.svg"
import discordLogo from "../images/discord_logo.svg"

import { getWindowSize } from "../getWindowSize";

const LargeNav = () => {
	const topSectionClasses = [
		"flex",
		"flex-row",
		"justify-between",
		"md:text-right",
		"md:flex-row-reverse",
		"mb-4",
	];
	const topSection = (
		<div className={topSectionClasses.join(" ")}>
			<Link to="/" className="text-header-title no-underline text-3xl font-header font-black pt-1">
					RenoInMO
			</Link>
		</div>
	);
	return (
		<header className="bg-header-bg p-4 md:flex md:flex-col md:justify-center md:pl-12 hidden md:block">
			{topSection}
			<div className="ml-3 text-xl text-white md:text-right">
				<div className="m-2 ml-0">
					<Link className="nav-link" to="/about">
							<span className="nav-item-text">about</span>
					</Link>
				</div>
				<div className="m-2 ml-0">
					<Link className="nav-link" to="/projects">
							<span className="nav-item-text">projects</span>
					</Link>
				</div>
				<div className="m-2 ml-0">
					<Link className="nav-link" to="/schedule">
							<span className="nav-item-text">schedule</span>
					</Link>
				</div>
				<div className="m-2 ml-0">
					<Link className="nav-link" to="/contact">
							<span className="nav-item-text">contact</span>
					</Link>
				</div>
				<div className="flex">
					<a className="social-media-icon twitch" href="https://twitch.tv/RenoInMO">
						<img className="w-6 m-2 ml-0" src={twitchLogo} alt="Twitch.tv Logo" />
					</a>
					<a className="social-media-icon twitch" href="https://github.com/renodubois">
						<img className="w-6 m-2" src={githubLogo} alt="GitHub Logo" />
					</a>
					<a className="social-media-icon twitter" href="https://twitter.com/RenoInMO">
						<img className="w-6 m-2" src={twitterLogo} alt="Twitter Logo" />
					</a>
					<a className="social-media-icon discord" href="https://discord.gg/notarealcode">
						<img className="w-6 m-2" src={discordLogo} alt="Discord Logo" />
					</a>
				</div>
			</div>
		</header>
	)
}

class Header extends React.Component {
	state = {
		menuExpanded: false
	};

	handleResize = () => {
		console.log("Handle Resize");
		const windowSize = getWindowSize();
		if (this.windowWidth <= 768) {
			// we're just resizing within the mobile view, so this doesn't matter
			this.windowWidth = windowSize.width;
		} else if (windowSize.width <= 768) {
			this.setState({ menuExpanded: false });
			this.windowWidth = windowSize.width;
		}
	};

	componentDidMount () {
		window.addEventListener("resize", this.handleResize);
	}

	navigateToPage = (event, to) => {
		event.preventDefault();
		this.setState({ menuExpanded: false });
		navigate(to);
	}

	setMenuExpanded = (value) => {
		return this.setState({ menuExpanded: value });
	}

	render () {
		const { menuExpanded } = this.state;
		// TODO: change this to a button, not a div
		let topIcon = (
			<div className="text-right cursor-pointer select-none h-6 w-6 pt-2 md:invisible" onClick={() => this.setMenuExpanded(true)}>
				<img src={menu} alt="Open menu" />	
			</div>
		);
		const topSectionClasses = [
			"flex",
			"flex-row",
			"justify-between",
			"md:text-right",
			"md:flex-row-reverse",
			"mb-2",
		];
		if (menuExpanded) {
			topIcon = (
				<div className="text-right cursor-pointer select-none h-5 w-5 pt-2 md:invisible" onClick={() => this.setMenuExpanded(false)}>
					<img src={cross} alt="White cross, closes mobile menu" />	
				</div>
			);
			// make the margin bigger when expanded
			topSectionClasses.pop();
			topSectionClasses.push("mb-4");
		}
		
		const topSection = (
			<div className={topSectionClasses.join(" ")}>
				<div className="text-header-title no-underline text-3xl font-header font-black pt-1 cursor-pointer" onClick={(e) => this.navigateToPage(e , "/")}>
						RenoInMO
				</div>
				{topIcon}
			</div>
		);
		if (!menuExpanded) {
			return (
				<>
					<LargeNav />
					<header className="bg-header-bg p-4 md:hidden">
						{topSection}
					</header>
				</>
			)
		}
		return (
			<>
				<LargeNav />
				<header className="bg-header-bg p-4 md:flex md:flex-col md:justify-center md:pl-12 md:hidden">
					{topSection}
					<div className="ml-3 text-xl text-white md:text-right">
						<div className="m-2 ml-0">
							<div className="cursor-pointer" onClick={(e) => this.navigateToPage(e , "/about")}>
									<span className="nav-item-text">about</span>
							</div>
						</div>
						<div className="m-2 ml-0">
							<div className="cursor-pointer" onClick={(e) => this.navigateToPage(e , "/projects")}>
									<span className="nav-item-text">projects</span>
							</div>
						</div>
						<div className="m-2 ml-0">
							<div className="cursor-pointer" onClick={(e) => this.navigateToPage(e , "/schedule")}>
									<span className="nav-item-text">schedule</span>
							</div>
						</div>
						<div className="m-2 ml-0">
							<div className="cursor-pointer" onClick={(e) => this.navigateToPage(e , "/contact")}>
									<span className="nav-item-text">contact</span>
							</div>
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
						<a className="social-media-icon discord" href="https://discord.gg/notarealcode">
							<img className="w-6 m-2" src={discordLogo} alt="Discord Logo" />
						</a>
					</div>
				</header>
			</>
		)
	}
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
