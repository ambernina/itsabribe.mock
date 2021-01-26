import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sponsors = ({ result }) => {
	const [results, setResults] = useState({});
	const [sum, setSum] = useState(0);
	const [direction, setDirection] = useState("desc");

	// console.log(results);
	useEffect(() => {
		setResults(result);
	}, [result]);

	useEffect(() => {
		// console.log(results);
		const contributions = results.contributor;
		if (!contributions) {
			return;
		} else {
			// console.log("contributions", contributions);
			let valuesTotal = 0;
			contributions.forEach(contributor => {
				let value = contributor["@attributes"].total;
				// console.log("value", value);
				valuesTotal += parseInt(value);
				setSum(valuesTotal);
			});
		}
	}, [results]);

	const formatCurrency = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		currencyDisplay: "symbol"
	});

	const mapper = () => {
		return results.contributor.map((contributor, i) => {
			return (
				<tr key={i}>
					<td>
						<Link
							to={`/organization/${contributor["@attributes"].org_name}`}
						>
							{contributor["@attributes"].org_name}{" "}
						</Link>
					</td>
					<td style={{ textAlign: "center" }}>
						{formatCurrency.format(contributor["@attributes"].indivs)}{" "}
					</td>
					<td style={{ textAlign: "center" }}>
						{formatCurrency.format(contributor["@attributes"].pacs)}{" "}
					</td>
					<td style={{ textAlign: "right" }}>
						{formatCurrency.format(contributor["@attributes"].total)}{" "}
					</td>
				</tr>
			);
		});
	};
	// console.log("direction", direction);

	const requestSort = expr => {
		const data = results.contributor;
		switch (expr) {
			case "name":
				// console.log("name case");
				if (direction === "desc") {
					setDirection("asc");
					data.sort((a, b) => {
						var nameA = a["@attributes"].org_name.toLowerCase();
						var nameB = b["@attributes"].org_name.toLowerCase();
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
				if (direction === 'asc') {
					setDirection("desc");
					data.sort((a, b) => {
						var nameA = a["@attributes"].org_name.toLowerCase();
						var nameB = b["@attributes"].org_name.toLowerCase();
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
						return a["@attributes"].indivs - b["@attributes"].indivs;
					});
				} else {
					setDirection("desc");
					// console.log("direction", direction);
					data.sort((a, b) => {
						return b["@attributes"].indivs - a["@attributes"].indivs;
					});
				}
				return;
			case "pacs":
				// console.log("pacs case");
				if (direction === "desc") {
					setDirection("asc");
					// console.log("direction", direction);
					data.sort((a, b) => {
						return a["@attributes"].pacs - b["@attributes"].pacs;
					});
				} else {
					setDirection("desc");
					// console.log("direction", direction);
					data.sort((a, b) => {
						return b["@attributes"].pacs - a["@attributes"].pacs;
					});
				}
				return;
			case "total":
				// console.log("total case");
				if (direction === "desc") {
					setDirection("asc");
					// console.log("direction", direction);
					data.sort((a, b) => {
						return a["@attributes"].total - b["@attributes"].total;
					});
				} else {
					setDirection("desc");
					// console.log("direction", direction);
					data.sort((a, b) => {
						return b["@attributes"].total - a["@attributes"].total;
					});
				}
				return;
			default:
				console.log("no more cases");
		}
	};

	// console.log(sum);

	return (
		<>
			<div className="row">
				<div className="col-6">
					<h1 style={{ fontFamily: "'Montserrat', sans-serif" }}>
						Corporate Sponsors
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
							{results["@attributes"].cycle}
							{")"}: {formatCurrency.format(sum)}
						</h5>
					</div>
				)}
			</div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">
							Company{" "}
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
					{!results._id ? (
						<tr>
							<td></td>
							<td className="d-flex justify-content-center">
								<div className="spinner-border" role="status">
									<span className="sr-only">Loading...</span>
								</div>
							</td>
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

export default Sponsors;
