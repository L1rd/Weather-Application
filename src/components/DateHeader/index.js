

export const DateHeader = ({ data, setData }) => {
	function search(event) {
		if (event.key === "Enter") {
			setData(prev => ({
				...prev,
				city: event.target.value,
			}))
		}
	}
	return (
		<div className="app__header d-flex justify-between align-center pt-30 pb-30">
			<h1 className="app__title">{data.city}, {data.country}</h1>
			<div className="app__controlls">
				<img src="./img/icons/vector.svg" alt="" />
				<input type="text" className="app__input" onKeyPress={search} placeholder="Search the city" />
			</div>
		</div>
	)
}