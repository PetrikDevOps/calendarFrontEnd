import Day from './day/day';

const Calendar = () => {
	const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
      
        while (currentIndex != 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

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

	return <div className='p-10 grid grid-cols-4 gap-4 bg-lime-900 w-9/12 h-5/6 rounded-lg'>{days}</div>;
};

export default Calendar;
