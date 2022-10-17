import "macro-css";
import { monthNames } from "../../utilities/mockData"
import { MainBlockDay } from "./index1";



export const MainBlock = ({ data, date }) => {
	const temp = (n) => {
		return (n > 0 ? "+" + Math.floor(n) : "-" + Math.floor(n))
	}
	const d = new Date();
	if (!data.list.length) return null
	return (
		<div className="app__main mb-30">
			<div className="app__container">
				<h2 className="app__date mb-25 pl-20"><span>{d.getDate()}</span> <span>{monthNames[d.getMonth()]}</span>, <span>{d.getFullYear()}</span> <span>{`${date.h < 10 ? "0" + date.h : date.h}:${date.m < 10 ? "0" + date.m : date.m}:${date.s < 10 ? "0" + date.s : date.s}`}</span></h2>
				<div className="app__weather d-flex justify-between align-center">
					<div className="app__main-icon text-center">
						<img className="app__weather-icon" src={data.current.icon} alt={data.current.text} title={data.current.text} />
						<h3 className="app__degree">{temp(data.current.temp)}°C</h3>
					</div>
					<div className="app__params d-flex">
						<div className="app__characteristic">
							<table>
								<tbody>
									<tr className="app__param">
										<td>Temp, °C</td>
									</tr>
									<tr className="app__param">
										<td>Feels Like</td>
									</tr>
									<tr className="app__param">
										<td>Pressure,  kPa</td>
									</tr>
									<tr className="app__param">
										<td>Humidity, %</td>
									</tr>
									<tr className="app__param">
										<td>Wind, km/h</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<MainBlockDay data={data} i={2} j={5} title={"Night"} />
					<MainBlockDay data={data} i={8} j={11} title={"Morning"} />
					<MainBlockDay data={data} i={14} j={17} title={"Day"} />
					<MainBlockDay data={data} i={20} j={23} title={"Evening"} />
				</div>
			</div>
		</div >

	);
}

export default MainBlock;
