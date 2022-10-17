export const MainBlockDay = ({ data, i, j, title }) => {
	const temp = (n) => {
		return (n > 0 ? "+" + Math.floor(n) : "-" + Math.floor(n))
	}
	return (
		<div className="app__weather-day text-center">
			<h3 className="app__time-period">{title}</h3>
			<div className="app__characteristic">
				<table>
					<tbody>
						<tr className="app__time">
							<td>{i}:00</td>
							<td>{j}:00</td>
						</tr>
						<tr>
							<td><img src={data.list[i].condition.icon} alt={data.list[i].condition.text} title={data.list[i].condition.text}></img></td>
							<td><img src={data.list[j].condition.icon} alt={data.list[j].condition.text} title={data.list[j].condition.text}></img></td>
						</tr>
						<tr className="app__number">
							<td>{temp(data.list[i].temp_c)}°</td>
							<td>{temp(data.list[j].temp_c)}°</td>
						</tr>
						<tr className="app__number">
							<td>{temp(data.list[i].feelslike_c)}°</td>
							<td>{temp(data.list[j].feelslike_c)}°</td>
						</tr>
						<tr className="app__number">
							<td>{data.list[i].pressure_mb}</td>
							<td>{data.list[j].pressure_mb}</td>
						</tr>
						<tr className="app__number">
							<td>{data.list[i].humidity}</td>
							<td>{data.list[j].humidity}</td>
						</tr>
						<tr className="app__number">
							<td>{data.list[i].wind_kph}</td>
							<td>{data.list[j].wind_kph}</td>
						</tr>
					</tbody>
				</table>

			</div>
		</div>
	);
}