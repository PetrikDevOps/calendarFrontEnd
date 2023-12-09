import Day from './day/Day';

const Calendar = () => {
	const days = [];
	for (let i = 0; i < 24; i++) {
		days.push(
			<Day
				key={i}
				day={i}
			/>,
		);
	}

	return <div>{days}</div>;
};

export default Calendar;
