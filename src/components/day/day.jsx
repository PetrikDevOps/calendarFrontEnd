import React, { useEffect, useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import api from '../../config/api';

import DayButtonOpen from './DayButtonOpen';
import DayButtonClosed from './DayButtonClosed';

//user id, day
const Day = (props) => {
	const { user } = useUser();
	const [open, setOpen] = useState(true);
	const [msg, setMsg] = useState('');

	const getDay = () => {
		api.post('/calendarGet', { id: user.id, day: props.day })
			.then(({ data }) => {
				setOpen(data.open);
				setMsg(data.msg);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const openDay = () => {
		api.post('/calendarOpen', { id: user.id, day: props.day })
			.then(({ data }) => {
				setOpen(data.open);
				setMsg(data.msg);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getDay();
	}, []);

	if (!open) {
		return (
			<DayButtonClosed
				day={props.day}
				handleClick={openDay}
			/>
		);
	} else {
		return (
			<DayButtonOpen
				msg={msg}
			/>
		);
	}
};

export default Day;
