import React, { useEffect, useState } from "react";
import CanvasJSReact from "../../assets/canvasjs-2.3.2/Chart 2.3.2 GA - Stable/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = ({ data }) => {
  const [results, setResults] = useState({});

  useEffect(() => {
		setResults(data);
  }, [data]);

  // console.log("results chart", results)
  
	const options = {
		theme: "light1",
		animationEnabled: true,
		// title: {
		// 	text: "Rep"
		// },
		data: [
			{
				type: "pie",
				// showInLegend: true,
				// legendText: "{label}",
				// toolTipContent: "{label}: <strong>{y}</strong>",
				indexLabel: "{label} ({y})",
				indexLabelPlacement: "inside",
				dataPoints: results
			}
		]
	};

	return (
		<div>
			<CanvasJSChart options={options} />
		</div>
	);
};

export default PieChart;
