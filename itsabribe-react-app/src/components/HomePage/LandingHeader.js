import React from "react";
import AutoCompleteSearch from "../Search/AutoCompleteSearch";

const LandingHeader = () => {
	return (
		<div
			className="container-fluid"
			style={{ padding: "5em", backgroundColor: "#F51F47" }}
		>
			<div className="row justify-content-center">
				<h2
					style={{
						textAlign: "center",
						fontFamily: "'Montserrat', sans-serif",
						fontSize: "2.5em",
						fontWeight: "600",
						color: "white"
					}}
				>
					Search brands and companies that are funding politicians.
				</h2>
				<br />
				<h2
					style={{
						textAlign: "center",
						fontFamily: "'Montserrat', sans-serif",
						fontSize: "2em",
						fontWeight: "400",
						marginBottom: "1em",
						color: "white"
					}}
				>
					Hold them accountable for the controversial politicians they support.
				</h2>
			</div>
			<div className="row justify-content-center">
				<div className="col-lg-5 col-md-8 col-sm-10 col-xs-12">
					<AutoCompleteSearch />
				</div>
			</div>
		</div>
	);
};

export default LandingHeader;
