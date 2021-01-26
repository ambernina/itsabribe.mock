import React from "react";
// import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from "recharts";
import "../../assets/App.css";
const CanvasJSReact = require("../../assets/canvasjs-2.3.2/Chart 2.3.2 GA - Stable/canvasjs.react");
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
	theme: "dark2",
	animationEnabled: true,
	exportFileName: "Rep/Dem",
	exportEnabled: true,
	title: {
		text: "Percentage of Reps/Dems"
	},
	data: [
		{
			type: "pie",
			showInLegend: true,
			legendText: "{label}",
			toolTipContent: "{label}: <strong>{y}%</strong>",
			indexLabel: "{y}%",
			indexLabelPlacement: "inside",
			dataPoints: [
				{ y: 32, label: "Health" },
				{ y: 22, label: "Finance" },
				{ y: 15, label: "Education" },
				{ y: 19, label: "Career" },
				{ y: 5, label: "Family" },
				{ y: 7, label: "Real Estate" }
			]
		}
	]
};

// const PoliticalParties = [
// 	{ name: "Republican", value: 400 },
// 	{ name: "Democrat", value: 300 },
// 	{ name: "Independent", value: 300 },
// 	{ name: "None", value: 200 }
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const RADIAN = Math.PI / 180;

// const renderCustomizedLabel = ({
// 	cx,
// 	cy,
// 	midAngle,
// 	innerRadius,
// 	outerRadius,
// 	percent,
// 	index
// }) => {
// 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
// 	const x = cx + radius * Math.cos(-midAngle * RADIAN);
// 	const y = cy + radius * Math.sin(-midAngle * RADIAN);

// 	return (
// 		<text
// 			x={x}
// 			y={y}
// 			fill="white"
// 			textAnchor={x > cx ? "start" : "end"}
// 			dominantBaseline="central"
// 		>
// 			{`${(percent * 100).toFixed(0)}%`}
// 		</text>
// 	);
// };

const ChartForPoliticians = () => {
	return (
		<>
			<CanvasJSChart options={options} />
			{/* <div className="col" style={{ width: "100%", height: "100%" }}> */}
			{/* <ResponsiveContainer> */}
			{/* <div
					className="recharts-wrapper"
					style={{
						position: "relative",
						cursor: "default",
						width: "100%",
						height: "300px"
					}}
				> */}
			{/* <PieChart>
					<Pie
						data={PoliticalParties}
						cx={200}
						cy={200}
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={80}
						fill="#8884d8"
						dataKey="value"
					>
						{PoliticalParties.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart> */}
			{/* </div> */}
			{/* </ResponsiveContainer> */}
			{/* </div> */}
		</>
	);
};

export default ChartForPoliticians;

// const Politicians = [
// 	{ name: "Donald Trump", value: 100 },
// 	{ name: "Barack Obama", value: 300 },
// 	{ name: "Hillary Clinton", value: 100 },
// 	{ name: "Bill Clinton", value: 80 },
// 	{ name: "Joe Biden", value: 40 },
// 	{ name: "Mitt Romney", value: 30 }
// ];

// <Pie
// data={Politicians}
// cx="50%"
// cy="50%"
// innerRadius={70}
// outerRadius={90}
// fill="#82ca9d"
// dataKey="value"
// label={({
// 	cx,
// 	cy,
// 	midAngle,
// 	innerRadius,
// 	outerRadius,
// 	value,
// 	index
// }) => {
// 	console.log("handling label");
// 	const RADIAN = Math.PI / 180;
// 	const radius = 25 + innerRadius + (outerRadius - innerRadius);
// 	const x = cx + radius * Math.cos(-midAngle * RADIAN);
// 	const y = cy + radius * Math.sin(-midAngle * RADIAN);
// 	return (
// 		<text
// 			x={x}
// 			y={y}
// 			fill="#8884d8"
// 			textAnchor={x > cx ? "start" : "end"}
// 			dominantBaseline="central"
// 		>
// 			{Politicians[index].name}({value})
// 		</text>
// 	);
// }}
// />
