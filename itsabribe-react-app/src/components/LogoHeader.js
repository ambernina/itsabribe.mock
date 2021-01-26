import React from "react";
import { NavLink } from "react-router-dom";
import AutoCompleteSearch from "./Search/AutoCompleteSearch";

const LogoHeader = () => {
	return (
		<nav
			className="navbar navbar-light justify-content-between"
			style={{ padding: "2em", marginBottom: "1em" }}
		>
			<div className="row">
				<div className="col-xl-8 col-lg-7 col-md-6 col-sm-6">
					<NavLink
						to="/"
						className="main-nav"
						activeClassName="main-nav-active"
					>
						<img
							src={require("../assets/logo/Its-a-bribe-logo-02.png")}
							alt="logo"
							style={{
								width: "350px"
							}}
						/>
					</NavLink>
				</div>
				<div
					className="col-xl-4 col-lg-5 col-md-6 col-sm-6"
					style={{ paddingTop: "1em" }}
				>
					<AutoCompleteSearch />
				</div>
			</div>
		</nav>
	);
};

export default LogoHeader;
