import React, { useContext } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { SearchContext } from "../context/SearchContext";

const SearchResults = () => {
	// const [results, setResults] = useState([]);
	const { search } = useContext(SearchContext);

	console.log("search", search);

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
								<th scope="col">Name</th>
								<th scope="col">Political Party</th>
								<th scope="col">Office Held</th>
								<th scope="col">Age</th>
							</tr>
						</thead>
						<tbody>
							{!search[0] ? (
								<tr>
									<td></td>
									<td className="d-flex justify-content-center">No Results</td>
									<td></td>
								</tr>
							) : (
								search.map((politician, i) => {
									if (!politician["@attributes"]) {
										return <></>
									}
									return (
										<tr key={politician._id}>
											<td>
												<Link
													to={`/politician/${politician["@attributes"].cid}`}
													// style={{ textDecoration: "none", color: "black" }}
												>
													{politician["@attributes"].firstlast}{" "}
												</Link>
											</td>
											<td>{politician["@attributes"].party}</td>
											<td>{politician["@attributes"].office}</td>
											<td>
												{isNaN(
													moment().diff(
														politician["@attributes"].birthdate,
														"years"
													)
												) ? (
													<></>
												) : (
													moment().diff(
														politician["@attributes"].birthdate,
														"years"
													)
												)}
											</td>
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
