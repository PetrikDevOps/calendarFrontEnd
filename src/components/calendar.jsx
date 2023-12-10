import Day from './day/day';

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

	return <div className='p-10 grid grid-cols-4 gap-4 bg-lime-900 w-9/12 h-5/6 rounded-lg'>{days}</div>;
};

export default Calendar;
