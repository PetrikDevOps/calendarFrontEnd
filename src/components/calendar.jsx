import Day from './day/Day';

const Calendar = () => {
	const days = [];
	for (let i = 1; i < 25; i++) {
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
