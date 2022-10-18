import dayjs from 'dayjs'
import { getTemperature } from "../../utilities/helpers/get-temperature";
import "./DayTemperatureBlock.scss";

export const DayTemperatureBlock = ({ daysTemperature }) => (
	<div className="d-flex justify-between pb-30">
		{daysTemperature.map((item, index) => index === 0 ? null : (
			<div className="app__day-block d-flex flex-column justify-center p-15">
				<div className="container">
					<div className="app__header mb-20">
						<h2>{dayjs(item.date).format("ddd")}</h2>
						<p>{dayjs(item.date).format("DD MMMM")}</p>
					</div>
					<div className="app__info d-flex justify-between">
						<img src={item.day.condition.icon} title={item.day.condition.text} alt="weather-icon" />
						<div className="app__text">
							<h2>{getTemperature(item.day.maxtemp_c)}</h2>
							<p>{getTemperature(item.day.mintemp_c)}</p>
						</div>
					</div>
				</div>
			</div>
		))}
	</div>
)
