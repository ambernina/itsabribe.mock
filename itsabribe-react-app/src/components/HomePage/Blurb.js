import React from "react";
import { Link } from "react-router-dom";

const Blurb = () => {
	return (
		<div className="container text-center" style={{ marginBottom: "5em" }}>
			<h3 style={{ fontFamily: "'Montserrat', sans-serif" }}>
				We are a non-partisan site dedicated to making it easier for you to find
				out who is influencing your politician.
			</h3>
			<h6 style={{ fontFamily: "'Montserrat', sans-serif" }}>
				<Link to="/contact">Contact Us</Link>
			</h6>
		</div>
	);
};

export default Blurb;
