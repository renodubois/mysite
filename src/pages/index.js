import React from "react"

import '../index.tailwind.css';
import SEO from "../components/seo"
import picOfMe from "../images/me.jpg"
// Image imports for the social buttons 
import twitchLogo from "../images/twitch_logo.svg"
import githubLogo from "../images/github_logo.svg"
import twitterLogo from "../images/twitter_logo.svg"
import discordLogo from "../images/discord_logo.svg"


let buttonClasses = [
	"social-media-button",
	"flex",
	"items-center",
	"justify-between",
	"p-2",
	"m-3",
	"rounded",
	"border",
	"border-solid",
	"font-header",
	"text-2xl",
	"tracking-wider",
];
buttonClasses = buttonClasses.join(" ");
// TODO: figure out how to add extra text sizes (we need something like a 7 or 8 xl)
const IndexPage = () => (
	<>
		<SEO title="Home" />
		<div className="md:flex md:flex-col md:justify-center md:">
			<div className="md:block flex flex-row justify-end pt-6 pl-6">
				<img className="w-24 h-24 rounded-full" src={picOfMe} alt="Reno's face" />
				<h1 className="text-5xl md:text-6xl font-header text-header-bg">Hey, I'm Reno!</h1>
			</div>
			<p className="text-white text-2xl md:text-3xl">I'm an educational tech streamer on Twitch.</p>
			<div className="flex flex-col md:flex-row md:justify-end">
				<a className={buttonClasses + " bg-twitch"} href="https://twitch.tv/RenoInMO">
					<img className="w-8 md:w-6 md:mr-4 md:ml-1 mb-0" src={twitchLogo} alt="Twitch.tv Logo" />
					Twitch	
					<div></div>
				</a>
				<a className={buttonClasses + " bg-github"} href="https://github.com/renodubois">
					<img className="w-8 md:w-6 md:mr-4 md:ml-1 mb-0" src={githubLogo} alt="GitHub Logo" />
					GitHub
					<div />
				</a>
				<a className={buttonClasses + " bg-twitter"} href="https://twitter.com/RenoInMO">
					<img className="w-8 h-8 md:w-6 md:h-6 md:mr-4 md:ml-1 mb-0" src={twitterLogo} alt="Twitter Logo" />
					Twitter	
					<div />
				</a>
				<a className={buttonClasses + " bg-discord"} href="https://discord.gg/nqmGyts">
					<img className="w-8 h-8 md:w-6 md:h-6 md:mr-4 md:ml-1 mb-0" src={discordLogo} alt="Twitter Logo" />
					Discord	
					<div />
				</a>

			</div>
		</div>
	</>
)

export default IndexPage
