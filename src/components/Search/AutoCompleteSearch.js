import React, {useState} from "react";
import InputGroup from "./InputGroup";

const AutoCompleteSearch = () => {
  const [dValue, setDValue] = useState("Companies");
  const toggle = (e) => {
    // console.log("e.target.value", e.target.value);
    setDValue(e.target.value);
  }

	return (
		<div className="container">
			<div className="row" style={{padding: "10px"}}>
				<select className="form-select" onChange={(e) => toggle(e)}>
					{/* <option defaultValue>Search for...</option> */}
					<option defaultValue value="Companies">Companies</option>
					<option value="Politicians">Politicians</option>
				</select>
			</div>
			<InputGroup selected={dValue} />
		</div>
	);
};

export default AutoCompleteSearch;
