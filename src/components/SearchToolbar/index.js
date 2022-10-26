import { THEMES } from "../../utilities/constants/theme";
import "./SearchToolbar.scss";

export const SearchToolbar = ({ city, country, setData, theme, setTheme }) => {
	const handleCitySearch = (event) => {
		if (event.key === "Enter") {
			setData(prevState => ({
				...prevState,
				city: event.target.value,
			}))
		}
	}

	const switchTheme = () => setTheme(
		theme === THEMES.dark ? THEMES.light : THEMES.dark,
	)

	return (
		<div className="app__header d-flex flex-wrap justify-between align-center pt-30 pb-30">
			<h1 className="app__title">{city}, {country}</h1>
			<div className="app__controlls d-flex align-center">
				<input type="text" className="app__input mr-10" onKeyPress={handleCitySearch} placeholder="Search the city" />
				<button className={`app__theme`} onClick={switchTheme}></button>
			</div>
		</div>
	)
}