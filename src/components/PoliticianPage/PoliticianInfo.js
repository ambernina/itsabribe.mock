import React, { useEffect, useState } from "react";
import moment from "moment";
import ShareButtons from "../ShareButtons";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

const PoliticianInfo = ({ result }) => {
	const [results, setResults] = useState([]);

	// instead of filling info with results have it be props from the politician page

	useEffect(() => {
		setResults(result);
	}, [result]);

	// console.log("results", results);

	return (
		<div style={{ marginBottom: "2em" }} >
			{!results._id ? (
				<div className="d-flex justify-content-center">
					<div className="spinner-border" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			) : (
				<>
					<h4 style={{ fontFamily: "'Montserrat', sans-serif" }}>
						{results["@attributes"].firstlast}
					</h4>
					<p>
						Office: {results["@attributes"].office}
						<br />
						Party: {results["@attributes"].party}
						<br />
						Date of Birth: {results["@attributes"].birthdate} {"("}
						{isNaN(moment().diff(results["@attributes"].birthdate, "years")) ? (
							<></>
						) : (
							moment().diff(results["@attributes"].birthdate, "years")
						)}
						{")"}
						<br />
						Website:{" "}
						<a
							href={results["@attributes"].website}
							target="_blank"
							rel="noopener noreferrer"
						>
							{results["@attributes"].website}
						</a>
						<br />
					</p>
					<h5>Let them know how you feel!</h5>
					{!results["@attributes"].twitter_id &&
					!results["@attributes"].facebook_id &&
					!results["@attributes"].youtube_url ? (
						<p>No Socials on file for this politician...</p>
					) : (
						<p>
							{!results["@attributes"].twitter_id ? (
								<></>
							) : (
								<a
									href={
										"https://www.twitter.com/" +
										results["@attributes"].twitter_id
									}
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#1DA1F2",
										marginRight: "0.3125em",
										marginTop: "0.3125em"
									}}
								>
									<FaTwitter size={50} style={{color: "black"}} />
								</a>
							)}
							{!results["@attributes"].facebook_id ? (
								<></>
							) : (
								<a
									href={
										"https://www.facebook.com/" +
										results["@attributes"].facebook_id
									}
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#4267B2",
										marginRight: "0.3125em",
										marginTop: "0.3125em"
									}}
								>
									<FaFacebook size={50} style={{color: "black"}} />
								</a>
							)}
							{!results["@attributes"].youtube_url ? (
								<></>
							) : (
								<a
									href={results["@attributes"].youtube_url}
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#FF0000",
										marginRight: "0.3125em",
										marginTop: "0.3125em"
									}}
								>
									<FaYoutube size={50} style={{color: "black"}} />
								</a>
							)}
						</p>
					)}
					<p>
						Webform:{" "}
						{!results["@attributes"].webform ? (
							<span>No Webform</span>
						) : (
							<a
								href={results["@attributes"].webform}
								target="_blank"
								rel="noopener noreferrer"
							>
								{results["@attributes"].webform}
							</a>
						)}
					</p>
				</>
			)}
			<ShareButtons />
		</div>
	);
};

export default PoliticianInfo;
