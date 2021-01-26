import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SponsoredPoliticians = () => {
	const [results, setResults] = useState([]);
	const [sum, setSum] = useState(0);
	const [direction, setDirection] = useState("desc");

	useEffect(() => {
		const url = window.location.href;
		var orgName = url.split("/")[4].replace(/%20/g, " ");
		// console.log("url orgname", orgName);
		axios
			.get(process.env.REACT_APP_API_URL + "/getSponsor/" + orgName)
			.then(res => {
				// console.log("getSponsor res", res.data);
				setResults(res.data);
			});
	}, [setResults]);

	useEffect(() => {
		let valuesTotal = 0;
		for (let i = 0; i < results.length; i++) {
			let value = results[i].contributor.total;
			// console.log("value", value)
			valuesTotal += parseInt(value);
			setSum(valuesTotal);
		}
	}, [results]);

	const formatCurrency = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		currencyDisplay: "symbol"
	});

	// console.log("sum", sum);
	// console.log("results", results);

	const mapper = () => {
		return results.map((politician, i) => {
			// console.log("results.leg_info", politician.leg_info.cand_name);
			let str = politician.leg_info.cand_name;
			let party = str.charAt(str.length - 2);
			// console.log("party", party);
			let displayName = str.slice(0, -4);
			return (
				<tr key={i}>
					{party === "D" ? (
						<td>
							<p style={{ color: "blue", marginBottom: "0", fontWeight: "bold" }}>{party}</p>
						</td>
					) : (
						<td>
							<p style={{ color: "red", marginBottom: "0", fontWeight: "bold" }}>{party}</p>
						</td>
					)}
					<td>
						<Link to={`/politician/${politician.leg_info.cid}`}>
							{displayName}{" "}
						</Link>
					</td>
					<td style={{ textAlign: "center" }}>
						{formatCurrency.format(politician.contributor.indivs)}
					</td>
					<td style={{ textAlign: "center" }}>
						{formatCurrency.format(politician.contributor.pacs)}
					</td>
					<td style={{ textAlign: "right" }}>
						{formatCurrency.format(politician.contributor.total)}
					</td>
				</tr>
			);
		});
	};

	const requestSort = expr => {
		const data = results;
		switch (expr) {
			case "name":
				// console.log("name case");
				if (direction === "desc") {
					setDirection("asc");
					data.sort((a, b) => {
						var nameA = a.leg_info.cand_name.toLowerCase();
						var nameB = b.leg_info.cand_name.toLowerCase();
						if (nameA < nameB) {
							// console.log("direction", direction);
							return -1;
						}
						if (nameA > nameB) {
							// setDirection("desc");
							// console.log("direction", direction);
							return 1;
						}
						return 0;
					});
				}
				if (direction === "asc") {
					setDirection("desc");
					data.sort((a, b) => {
						var nameA = a.leg_info.cand_name.toLowerCase();
						var nameB = b.leg_info.cand_name.toLowerCase();
						if (nameA < nameB) {
							// setDirection("asc");
							// console.log("direction", direction);
							return -1;
						}
						if (nameA > nameB) {
							// console.log("direction", direction);
							return 1;
						}
						return 0;
					});
				}
				return;
			case "indivs":
				// console.log("indivs case");
				if (direction === "desc") {
					setDirection("asc");
					// console.log("direction", direction);
					data.sort((a, b) => {
						return a.contributor.indivs - b.contributor.indivs;
					});
				} else {
					setDirection("desc");
					// console.log("direction", direction);
					data.sort((a, b) => {
						return b.contributor.indivs - a.contributor.indivs;
					});
				}
				break;
			case "pacs":
				// console.log("pacs case");
				if (direction === "desc") {
					setDirection("asc");
					// console.log("direction", direction);
					data.sort((a, b) => {
						return a.contributor.pacs - b.contributor.pacs;
					});
				} else {
					setDirection("desc");
					// console.log("direction", direction);
					data.sort((a, b) => {
						return b.contributor.pacs - a.contributor.pacs;
					});
				}
				break;
			case "total":
				// console.log("total case");
				if (direction === "desc") {
					setDirection("asc");
					// console.log("direction", direction);
					data.sort((a, b) => {
						return a.contributor.total - b.contributor.total;
					});
				} else {
					setDirection("desc");
					// console.log("direction", direction);
					data.sort((a, b) => {
						return b.contributor.total - a.contributor.total;
					});
				}
				break;
			default:
				console.log("no more cases");
		}
	};

	return (
		<>
			<div className="row">
				<div className="col-6">
					<h1 style={{ fontFamily: "'Montserrat', sans-serif" }}>
						Politicians Sponsored
					</h1>
				</div>
				{sum === 0 ? (
					<></>
				) : (
					<div
						className="col-6"
						style={{
							fontFamily: "'Montserrat', sans-serif",
							textAlign: "right",
							position: "relative"
						}}
					>
						<h5
							style={{
								position: "absolute",
								bottom: "0",
								right: "15px",
								paddingBottom: "5px"
							}}
						>
							Total Contributions{" ("}
							{results[0].leg_info.cycle}
							{")"}: {formatCurrency.format(sum)}
						</h5>
					</div>
				)}
			</div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">
							Party
						</th>
						<th scope="col">
							Politician{" "}
							<i
								className="fas fa-sort-up"
								style={{ color: "#0e6dfd" }}
								onClick={() => requestSort("name")}
							></i>
						</th>
						<th scope="col" style={{ textAlign: "center" }}>
							From Individuals{" "}
							<i
								className="fas fa-sort"
								style={{ color: "#0e6dfd" }}
								onClick={() => requestSort("indivs")}
							></i>
						</th>
						<th scope="col" style={{ textAlign: "center" }}>
							From PAC{" "}
							<i
								className="fas fa-sort"
								style={{ color: "#0e6dfd" }}
								onClick={() => requestSort("pacs")}
							></i>
						</th>
						<th scope="col" style={{ textAlign: "right" }}>
							Total Contribution{" "}
							<i
								className="fas fa-sort"
								style={{ color: "#0e6dfd" }}
								onClick={() => requestSort("total")}
							></i>
						</th>
					</tr>
				</thead>
				<tbody>
					{!results[0] ? (
						<tr>
							<td></td>
							<td></td>
							<td className="d-flex justify-content-center">
								<div className="spinner-border" role="status">
									<span className="sr-only">Loading...</span>
								</div>
							</td>
							<td></td>
							<td></td>
						</tr>
					) : (
						mapper()
					)}
				</tbody>
			</table>
		</>
	);
};

export default SponsoredPoliticians;
