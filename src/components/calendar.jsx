import Day from './day/day';

const Calendar = (id) => {
	const days = [];
	for (let i = 0; i < 24; i++) {
		// days.push(<Day key={i} day={i} user={!!USER HERE}/>)
	}

	return <div>{days}</div>;
};

export default Calendar;
