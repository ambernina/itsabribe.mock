import React, { useEffect, useState } from "react";
import ShareButtons from "../ShareButtons";

const OrganizationInfo = () => {
	const [orgNameStr, setOrgNameStr] = useState("");

	useEffect(() => {
		const url = window.location.href;
		var orgName = url.split("/")[4];
		setOrgNameStr(orgName.replace(/%20/g, " "));
		// console.log("url orgname", orgNameStr);
	}, []);

	return (
		<div style={{ marginBottom: "2em" }}>
			<h2 style={{ fontFamily: "'Montserrat', sans-serif" }}>{orgNameStr}</h2>
			<br />
			<ShareButtons />
			{/* <p>
				Website:{" "}
				<a
					href="https://corporate.homedepot.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					https://corporate.homedepot.com/
				</a>
			</p> */}
			{/* we don't have any other info besides the name and logo and the politicians they sponsor */}
			{/* <p>
				Let them know how you feel!
				<br />
				<a
					href="https://twitter.com/HomeDepot"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "#1DA1F2", marginRight: "0.3125em" }}
				>
					<i className="fab fa-twitter-square fa-3x"></i>
				</a>
				<a
					href="https://www.facebook.com/homedepot/"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "#4267B2" }}
				>
					<i className="fab fa-facebook fa-3x"></i>
				</a>
			</p> */}
		</div>
	);
};

export default OrganizationInfo;
