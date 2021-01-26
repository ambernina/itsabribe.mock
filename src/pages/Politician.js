import React, { useEffect, useState } from "react";
import PoliticianInfo from "../components/PoliticianPage/PoliticianInfo";
import Sponsors from "../components/PoliticianPage/Sponsors";
import axios from "axios";

const Politician = () => {
	const [legiResponse, setLegiResponse] = useState({});
	const [contriResponse, setContriResponse] = useState({});
	const [candImageRes, setCandImageRes] = useState({});
	const url = window.location.href;

	useEffect(() => {
		var cid = url.split("/")[4];
		// console.log(cid);
		// axios call for legislators info
		axios
			.get(process.env.REACT_APP_API_URL + "/legislators/" + cid)
			.then(res => {
				// console.log(res.data);
				setLegiResponse(res.data);
			});
		// axios call for legislators photo
		axios
			.get(process.env.REACT_APP_API_URL + "/getCandImage/" + cid)
			.then(res => {
				// console.log("candImage res",res.data);
				setCandImageRes(res.data);
			});
		// axios call for contributors data
		axios
			.get(process.env.REACT_APP_API_URL + "/contributors/" + cid)
			.then(res => {
				// console.log(res.data);
				setContriResponse(res.data);
			});
	}, [url]);
	// searchedValue, setSearch
	// console.log("contriResponse", contriResponse);
	// console.log("candImage Res", candImageRes);

	return (
		<>
			<div className="container" style={{ marginBottom: "1.5625em" }}>
				<div className="row">
					<div
						className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
						style={{ paddingBottom: "2em" }}
					>
						<img
							src={candImageRes.candphoto}
							alt={candImageRes.firstlast}
							width="183px"
						/>
					</div>
					<div className="col-xl-4 col-lg-9 col-md-8 col-sm-6">
						<PoliticianInfo result={legiResponse} />
					</div>
					<div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
						{contriResponse == null ? (
							<h3>No Sponsors found</h3>
						) : (
							<Sponsors result={contriResponse} />
						)}
					</div>
				</div>
			</div>
			{/* <div className="container">
				<div className="row">
					<img src={require("../assets/fakechart.png")} alt="chart" />
				</div>
			</div> */}
		</>
	);
};

export default Politician;
