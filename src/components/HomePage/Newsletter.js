import React from "react";
import EmailSignup from "./EmailSignup";

const Newsletter = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				{/* <h2
					style={{
						textAlign: "center",
						fontFamily: "'Montserrat', sans-serif",
						fontSize: "3em",
						fontWeight: "500",
						marginBottom: "1em"
					}}
				>
					NEWSLETTER
				</h2> */}
				<div className="col-lg-8 col-md-12">
					<h2
						style={{
							textAlign: "center",
							fontFamily: "'Montserrat', sans-serif",
							fontSize: "2em",
							fontWeight: "400",
							marginBottom: "1em"
						}}
					>
						Be informed. Sign up for our newsletter.
					</h2>
					<EmailSignup />
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
