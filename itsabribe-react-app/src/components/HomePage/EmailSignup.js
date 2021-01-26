import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const EmailSignup = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	});

	const updateWidth = () => {
		setWidth(window.innerWidth);
	};

	const onSubmit = e => {
		e.preventDefault();
		toast(`Success! You have now signed up for our newsletter!`, {
			type: "success",
			autoClose: 3000
		});
	};

	return (
		<div className="row justify-content-center">
			<div className="col-lg-8 col-md-8 col-sm-10">
				<form className="form-inline input-group" onSubmit={e => onSubmit(e)}>
					<input
						type="text"
						id="inputEmail"
						placeholder="Enter email"
						className="form-control mr-sm-2"
					/>
					{width <= 575 ? (
						<button
							type="button"
							className="btn-light my-2 my-sm-0"
							style={{
								marginTop: "0.625em",
								height: "40px",
								marginLeft: "10px"
							}}
							onClick={e => onSubmit(e)}
						>
							<i className="fas fa-paper-plane"></i>
						</button>
					) : (
						<button
							type="button"
							className="btn btn-light my-2 my-sm-0 shadow-sm"
							style={{
								marginTop: "0.625em",
								height: "40px",
								width: "40px",
								borderRadius: "0px",
								MozBorderRadius: "0px",
								WebkitBorderRadius: "0px"
							}}
							onClick={e => onSubmit(e)}
						>
							<i className="fas fa-paper-plane"></i>
						</button>
					)}
				</form>
			</div>
		</div>
	);
};

export default EmailSignup;
