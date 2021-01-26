import React from "react";
import AutoCompleteSearch from "../Search/AutoCompleteSearch";

const TheStakes = () => {
	return (
		<div
			className="container-fluid"
			style={{ padding: "5em", backgroundColor: "#F51F47" }}
		>
			<div className="row justify-content-center">
				{/* <h2
					style={{
						textAlign: "center",
						fontFamily: "'Montserrat', sans-serif",
						fontSize: "3em",
            fontWeight: "500", 
						marginBottom: "1em",
						color: "white"
					}}
				>
					VALUE
				</h2> */}
				<h2
					style={{
						textAlign: "center",
						fontFamily: "'Montserrat', sans-serif",
						fontSize: "1.75em",
						fontWeight: "300",
						marginBottom: "1em",
						color: "white"
					}}
				>
					In an ideal world, companies would stop investing any kind of money
					into political campaigns.
				</h2>
				<h2
					style={{
						textAlign: "center",
						fontFamily: "'Montserrat', sans-serif",
						fontSize: "2em",
						fontWeight: "500",
						marginBottom: "1em",
						color: "white"
					}}
				>
					This is the future we want. <br />
					One devoid of money in politics.
				</h2>
				<h2
					style={{
						textAlign: "center",
						fontFamily: "'Montserrat', sans-serif",
						fontSize: "1.5em",
						fontWeight: "300",
						marginBottom: "1em",
						color: "white"
					}}
				>
					{"\u25cf"} It’s a Bribe is a single source illuminating how your politicians are funded.
					<br />
					<br />
					{"\u25cf"} It's a Bribe processes data from the Federal Election
					Commission DAILY.
					<br />
					<br />
					{"\u25cf"} It's a Bribe makes it easy to share information across social
					media platforms.
				</h2>
			</div>
			<div className="row justify-content-center">
				<div className="col-lg-5 col-md-10 col-sm-12">
					<AutoCompleteSearch />
				</div>
			</div>
		</div>
	);
};

export default TheStakes;
