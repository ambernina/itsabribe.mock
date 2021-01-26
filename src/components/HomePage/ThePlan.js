import React from "react";
import AutoCompleteSearch from "../Search/AutoCompleteSearch";

const ThePlan = () => {
	return (
		<div className="container">
			<div className="row justify-content-center" style={{marginBottom: "2em"}}>
			</div>
			<div
				className="row justify-content-center"
				style={{ marginBottom: "3em" }}
			>
				<div className="col-md-4 col-lg-3">
					<div className="card" style={{ width: "12rem", margin: "auto", float: "none", marginBottom: "1em" }}>
						<img
							className="card-img-top"
							alt="search"
							src={require("../../assets/Business-and-money-thick-icons-24.png")}
						/>
						<div
              className="card-body"
							style={{
								textAlign: "center",
								fontFamily: "'Montserrat', sans-serif",
								fontSize: "1em",
								fontWeight: "700"
							}}
						>
							SEARCH
						</div>
					</div>
				</div>
				<div className="col-md-4 col-lg-3">
        <div className="card" style={{ width: "12rem", margin: "auto", float: "none", marginBottom: "1em" }}>
						<img
							className="card-img-top"
							src={require("../../assets/logo/Its-a-bribe-logo-01.png")}
							alt="be informed"
							width="190px"
							// height="190px"
							/>
						<div
              className="card-body"
							style={{
								textAlign: "center",
								fontFamily: "'Montserrat', sans-serif",
								fontSize: "1em",
								fontWeight: "700"
							}}
						>
							BE INFORMED
						</div>
					</div>
				</div>
				<div className="col-md-4 col-lg-3">
					<div className="card" style={{ width: "12rem", margin: "auto", float: "none", marginBottom: "1em" }}>
						<img
							className="card-img-top"
							src={require("../../assets/share-icon.png")}
							alt="share"
							height="190px"
						/>
						<div
              className="card-body"
							style={{
								textAlign: "center",
								fontFamily: "'Montserrat', sans-serif",
								fontSize: "1em",
								fontWeight: "700"
							}}
						>
							SHARE
						</div>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
			<div className="col-lg-5 col-md-10 col-sm-12">
					<AutoCompleteSearch placeholder="Search for politicians..." />
				</div>
			</div>
		</div>
	);
};

export default ThePlan;
