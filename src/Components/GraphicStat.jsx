import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import HomePage from '../Pages/HomePage';
 

let CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class GraphicStat extends Component {	
	render() {

        const stat = {
            pokemon.stats.map((stat)=>({
                label: stat.stat.name,
                y: stat.base_stat
            })) || [];
            
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: {pokemon.name || "Pokemon"}
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: 20, label: "Airfare" },
					{ y: 24, label: "Food & Drinks" },
					{ y: 20, label: "Accomodation" },
					{ y: 14, label: "Transportation" },
					{ y: 12, label: "Activities" },
					{ y: 10, label: "Misc" }	
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 
export default GraphicStat;