import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import moment from "moment";
import { SearchContext } from "../context/SearchContext";

const SearchResults = () => {
	// const [results, setResults] = useState([]);
	const { search } = useContext(SearchContext);

	// console.log("search", search);

	return (
		<>
			<div className="container">
				<div className="row">
					<h1 style={{ fontFamily: "'Montserrat', sans-serif" }}>
						Search Results:
					</h1>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Company</th>
								{/* <th scope="col">Political Party</th>
								<th scope="col">Office Held</th>
								<th scope="col">Age</th> */}
							</tr>
						</thead>
						<tbody>
							{!search[0] ? (
								<tr>
									<td className="d-flex justify-content-center">No Results</td>
								</tr>
							) : (
								search.map((organization, i) => {
									return (
										<tr key={i}>
											<td>
												<Link
													to={`/organization/${organization.orgname}`}
													// style={{ textDecoration: "none", color: "black" }}
												>
													{organization.orgname}{" "}
												</Link>
											</td>
											{/* <td>
												<Link
													to={`/organization/${organization.cid}`}
													style={{ textDecoration: "none", color: "black" }}
												>
													{organization.party}
												</Link>
											</td>
											<td>
												<Link
													to={`/organization/${organization.cid}`}
													style={{ textDecoration: "none", color: "black" }}
												>
													{organization.office}
												</Link>
											</td>
											<td>
												<Link
													to={`/organization/${organization.cid}`}
													style={{ textDecoration: "none", color: "black" }}
												>
													{isNaN(
														moment().diff(
															organization.birthdate,
															"years"
														)
													) ? (
														<></>
													) : (
														moment().diff(
															organization.birthdate,
															"years"
														)
													)}
												</Link>
											</td> */}
										</tr>
									);
								})
							)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default SearchResults;
