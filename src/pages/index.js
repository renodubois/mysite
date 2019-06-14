import React from "react"

import '../index.tailwind.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import picOfMe from "../images/me.jpg"
// Image imports for the social buttons 
import twitchLogo from "../images/twitch_logo.svg"
import githubLogo from "../images/github_logo.svg"
import twitterLogo from "../images/twitter_logo.svg"

let buttonClasses = [
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

const IndexPage = () => (
  <Layout>
	  <SEO title="Home" />
	  <div className="flex flex-row-reverse justify-right pt-6 pl-6">
		  <h1 className="text-5xl font-header text-header-bg">Hey, I'm Reno!</h1>
		  <img className="w-24 h-24 rounded-full" src={picOfMe} alt="Reno's face" />
	  </div>
	<p className="text-white text-2xl">I'm an educational tech streamer on Twitch.</p>
	<div className="flex flex-col md:flex-row">
		<a className={buttonClasses + " bg-twitch"} href="https://twitch.tv/RenoInMO">
			<img className="w-8 mb-0" src={twitchLogo} alt="Twitch.tv Logo" />
			Twitch	
			<div></div>
		</a>
		<a className={buttonClasses + " bg-github"} href="https://github.com/renodubois">
			<img className="w-8 mb-0" src={githubLogo} alt="GitHub Logo" />
			GitHub
			<div />
		</a>
		<a className={buttonClasses + " bg-twitter"} href="https://twitter.com/RenoInMO">
			<img className="w-8 h-8 mb-0" src={twitterLogo} alt="Twitter Logo" />
			Twitter	
			<div />
		</a>
	</div>
  </Layout>
)

export default IndexPage
