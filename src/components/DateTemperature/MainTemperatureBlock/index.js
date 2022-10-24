import { useMemo } from "react";
import { getTemperature } from "../../../utilities/helpers/get-temperature";
import { DateInfo} from "../../DateInfo";
import "./MainTemperatureBlock.scss";

export const MainTemperatureBlock = ({ dayTemperatureList, currentDate }) => {
	const tableData = useMemo(() => [{ title: '', data: dayTemperatureList.map(item => item.time.split(" ").splice(1, 1).join(' ')), class: "app__time" },
	{ title: '', data: dayTemperatureList.map(item => item.condition.icon) },
	{ title: 'Temp, °C', data: dayTemperatureList.map(item => getTemperature(item.temp_c)), class: "app__number" },
	{ title: 'Feels Like', data: dayTemperatureList.map(item => getTemperature(item.feelslike_c)), class: "app__number" },
	{ title: 'Pressure,  kPa', data: dayTemperatureList.map(item => item.pressure_mb), class: "app__number" },
	{ title: 'Humidity, %', data: dayTemperatureList.map(item => item.humidity), class: "app__number" },
	{ title: 'Wind, km/h', data: dayTemperatureList.map(item => item.wind_kph), class: "app__number" }], [dayTemperatureList])

	return (
		<div className="app__main mb-30">
			<div className="app__container">
				<DateInfo currentDate={currentDate} />
				<div className="app__weather d-flex justify-between align-center">
					<div className="app__main-icon text-center">
						<img className="app__weather-icon" src={currentDate.icon} alt={currentDate.text} title={currentDate.text} />
						<h3 className="app__degree">{getTemperature(currentDate.temp)}C</h3>
					</div>
					<table className="text-center">
						<thead >
							<tr>
								<td> </td>
								<td colSpan="2" className="app__time-period ">Night</td>
								<td colSpan="2" className="app__time-period ">Morning</td>
								<td colSpan="2" className="app__time-period ">Day</td>
								<td colSpan="2" className="app__time-period ">Evening</td>
							</tr>
						</thead>
						<tbody>
							{tableData.map((item, index) => <tr>
								<td className="app__param">{item.title}</td>
								{item.data.map(el => <td className={`${item.class}`}>{index === 1 ? <img src={el} alt="weather-icon" /> : el}</td>)}
							</tr>)}
						</tbody>
					</table>
				</div>
			</div>
		</div >
	);
}

export default MainTemperatureBlock;
