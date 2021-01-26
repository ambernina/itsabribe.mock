import React, { useState, useContext, useEffect } from "react";
import "../../assets/AutoCompleteText.css";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";

const InputGroup = ({ selected }) => {
	const { setSearch } = useContext(SearchContext);

	const [searchedValue, setSearchedValue] = useState("");
	const [options, setOptions] = useState([]);
	const [suggestions, setSuggestions] = useState([]);
	// const [showSugs, setShowSugs] = useState(false);

	// console.log("showSugs", showSugs);
	useEffect(() => {
		if (selected === "Politicians") {
			axios.get(process.env.REACT_APP_API_URL + "/legislators").then(res => {
				const options = [];
				// console.log(res.data);
				for (let i = 0; i < res.data.length; i++) {
					const newObj = {
						id: res.data[i]["@attributes"].cid,
						name: res.data[i]["@attributes"].firstlast
					};
					options.push(newObj);
				}
				// console.log(options);
				setOptions(options);
			});
		} else if (selected === "Companies") {
			axios.get(process.env.REACT_APP_API_URL + "/organizations").then(res => {
				const options = [];
				// console.log(res.data);
				for (let i = 0; i < res.data.length; i++) {
					const newObj = {
						id: res.data[i].orgid,
						name: res.data[i].orgname
					};
					options.push(newObj);
				}
				// console.log(options);
				setOptions(options);
			});
		}
	}, [selected]);

	useEffect(() => {
		if (selected === "Politicians") {
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
		} else if (selected === "Companies") {
			axios.get(process.env.REACT_APP_API_URL + "/organizations").then(res => {
				// console.log(res.data);

				const organizations = res.data;
				// console.log("organizations", organizations);

				var filter = organizations.filter(organization => {
					var name = organization.orgname;
					return name.toLowerCase().includes(searchedValue.toLowerCase());
				});
				// console.log("filter",filter)
				setSearch(filter);
			});
		}
	}, [selected, searchedValue, setSearch, setSearchedValue]);

	const onSearch = e => {
		setSearchedValue(e.target.value);
		const value = e.target.value;
		let suggestions = [];

		if (value.length) {
			suggestions = options.filter(option => {
				var name = option.name;
				// console.log("option", option)
				return name.toLowerCase().includes(searchedValue.toLowerCase());
			});
		}
		setSuggestions(suggestions);
	};
	// console.log("suggestions", suggestions);
	// console.log("options",options);

	const renderSugs = () => {
		if (suggestions.length === 0) {
			return null;
		}
		return (
			<>
				<ul>
					{selected === "Politicians"
						? suggestions.map(item => (
								<Link
									key={item.id + Math.random() * 100}
									to={`/politician/${item.id}`}
									style={{ textDecoration: "none", color: "black" }}
								>
									<li
										onClick={() => {
											setSearchedValue(item.name);
											setSuggestions([]);
										}}
									>
										{item.name}
									</li>
								</Link>
						  ))
						: suggestions.map(item => (
								<Link
									key={item.id + Math.random() * 100}
									to={`/organization/${item.name}`}
									style={{ textDecoration: "none", color: "black" }}
								>
									<li
										onClick={() => {
											setSearchedValue(item.name);
											setSuggestions([]);
										}}
										>
										{item.name}
									</li>
								</Link>
						  ))}
				</ul>
			</>
		);
	};
	
	const submit = () => {
		// setSuggestions([]);

	}

	return (
		<>
			<div className="row">
				<form className="input-group mb-3" onSubmit={submit()}>
					<input
						type="text"
						className="form-control mr-sm-2"
						onChange={e => onSearch(e)}
						placeholder="Search to follow the money"
						value={searchedValue}
						// onFocus={() => setShowSugs(true)}
						// onBlur={() => setSuggestions([])}
						/>
					<Link to={`/searchresults/${selected}`} selected={selected}>
						<button
							type="submit"
							className="btn btn-light my-2 my-sm-0 shadow-sm"
							style={{
								height: "40px",
								borderRadius: "0px",
								MozBorderRadius: "0px",
								WebkitBorderRadius: "0px"
							}}
						>
							<img
								alt="search-icon"
								src={require("../../assets/its-a-bribe-search-punch-01.png")}
								style={{ width: "24px" }}
							/>
						</button>
					</Link>
				</form>
			</div>
			<div className="container auto-complete-container">{renderSugs()}</div>
			{/* {showSugs && <div className="container auto-complete-container">{renderSugs()}</div>} */}
		</>
	);
};

export default InputGroup;
