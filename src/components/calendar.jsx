import Day from './day/day';

const Calendar = () => {
	const shuffle = (array) => {
		let currentIndex = array.length,
			randomIndex;

		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	};

	let days = [];
	for (let i = 1; i < 25; i++) {
		days.push(
			<Day
				key={i}
				day={i}
			/>,
		);
	}

	days = shuffle(days);

	return (
		<div className='grid h-5/6 w-9/12 grid-cols-4 gap-4 rounded-lg bg-red-800 p-10'>
			{days}
		</div>
	);
};

export default Calendar;
