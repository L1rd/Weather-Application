import dayjs from "dayjs";
import { useEffect, useState } from "react";

export const DateInfo = ({currentDate}) => {
	const [time, setCurrentTime] = useState("");

	useEffect(() => {
		setInterval(() => setCurrentTime(new Date()), 1000);
	}, []);

	return <h2 className="app__date mb-25 pl-20">{dayjs(currentDate.last_updated).format("DD MMMM, YYYY")} {dayjs(time).format("HH:mm:ss")}</h2>
}