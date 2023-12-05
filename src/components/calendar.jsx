import {useAuth} from '../contexts/AuthContext';
import Day from './day/day';

const Calendar = (id) => {
    const {user} = useAuth()

    const days = []
    for (let i = 0; i < 24; i++) {
        days.push(<Day key={i} day={i} user={user}/>)
        
    }

    return (
        <div>
            {days}
        </div>
    );
}

export default Calendar;