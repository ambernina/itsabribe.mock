import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { SearchContext } from "../../../context/SearchContext";

const SearchContainer = () => {
	// const GSR = require("google-search-results-nodejs");
	// let client = new GSR.GoogleSearchResults(
	// 	"" 
	// );
	// key in .env file
	// const [orgInfoPlusLogos, setOrgInfoPlusLogos] = useState([]);

	const [searchedValue, setSearchedValue] = useState("");
	const { setSearch } = useContext(SearchContext);

	// for getting stuff from SerpAPI
	useEffect(() => {
	// axios.get(process.env.REACT_APP_API_URL + "/organizations").then(res => {
	// 	console.log("organizations collection", res.data);
	// redoing this with orgid's as well as names

		// let orgInfoArr = [];
	// loop for getting array of just orgnames from db
	// for (let i = 0; i < res.data.length; i++) {
	// 	orgInfoArr.push({
	// 		orgid: res.data[i].orgid,
	// 		orgname: res.data[i].orgname,
	// 	});
	// }
	// to save array from console:
	// (open array, right click on little blue info square and save as global variable. Then type into console copy(temp1) and paste whereever array is needed)
	// console.log("orgInfoArr",orgInfoArr);

	// loop for calling SerpAPI for images, only run one array at a time so we don't go over the 1000/hr or 5000/month
	// for (let i = 0; i < orgInfoArr.length; i++) {
	// 	var parameter = {
	// 		engine: "google",
	// 		ijn: "0",
	// 		q: (`${orgInfoArr[i].orgname} logo`),
	// 		google_domain: "google.com",
	// 		tbm: "isch"
	// 	};
	// 	var callback = function(data) {
	// 		let newObject = {
	// 			orgid: orgInfoArr[i].orgid,
	// 			orgname: orgInfoArr[i].orgname,
	// 			orglogo: data.images_results[0].original
	// 		};
	// 		setOrgInfoPlusLogos(state => [...state, newObject]);
	// 		// console.log("data", data);
	// 	};
	// 	client.json(parameter, callback);
	// }

	// });
	}, []);
// TURN ON CORS THING 
	// console.log("orgInfoPlusLogos", orgInfoPlusLogos);

	// for getting searched value from DB
	useEffect(() => {
		axios.get(process.env.REACT_APP_API_URL + "/legislators").then(res => {
			// console.log(res.data);

			const legislators = res.data;
			// console.log("legislators", legislators);

			var filter = legislators.filter(legislator => {
				var fullname = legislator["@attributes"].firstlast;
				return fullname.toLowerCase().includes(searchedValue.toLowerCase());
			});
			// console.log("filter",filter)
			setSearch(filter);
		});
	}, [searchedValue, setSearch]);

	// console.log("candNamesPlusPhotos", candNamesPlusPhotos);

	const onSearch = e => {
		setSearchedValue(e.target.value);
	};

	// const onSubmit = () => {
		// searching db moved to useEffect
		// setSearchedValue("");
	// };
	// console.log(searchedValue);

	return (
			<form className="form-inline input-group">
				<input
					type="text"
					className="form-control mr-sm-2"
					onChange={e => onSearch(e)}
					placeholder="Search for politicians..."
					value={searchedValue}
				/>
				<Link to="/searchresults">
					<button
						type="submit"
						className="btn btn-light my-2 my-sm-0 shadow-sm"
						style={{
							height: "40px",
							borderRadius: "0px",
							MozBorderRadius: "0px",
							WebkitBorderRadius: "0px"
						}}
						// onClick={() => onSubmit()}
					>
						{/* <i className="fas fa-search"></i> */}
						<img
							alt="search-icon"
							src={require("../assets/its-a-bribe-search-punch-01.png")}
							style={{ width: "24px" }}
						/>
					</button>
				</Link>
			</form>
	);
};

export default SearchContainer;
