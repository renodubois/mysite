import React from "react";

const Schedule = ({ siteTitle }) => {
	return (
		<>
			<h1 className="font-header text-header-bg md:text-6xl text-4xl">Stream Schedule</h1>	
			<p className="font-black text-lg">
				The stream is live every Sunday at 1:30PM EST/10:30AM PST. We will usually be live for about 3 to 4 hours from that start time!
			</p>
			<p className="md:ml-24">
				Occasionally, streams will be held on non-scheduled days, delayed or even cancelled. I will post on Twitter and Discord whenever that happens,
				so be sure to <a className="underline text-header-bg" href="https://twitter.com/RenoInMO">follow me on Twitter</a>
				{" "} and <a className="underline text-header-bg" href="https://discord.gg/nqmGyts">join our community Discord</a>
				{" "} to have up to date news on streams and other things I'm working on!
			</p>
		</>
	);
}

export default Schedule;
