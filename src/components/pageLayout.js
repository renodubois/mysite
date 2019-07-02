import React from "react";

const PageLayout = ({ children, marginWidth }) => {
	return (
		<div className="flex">
			<div className={"md:w-" + marginWidth}></div>
			<div>
				{children}
			</div>
		</div>
	);
}

export default PageLayout;

